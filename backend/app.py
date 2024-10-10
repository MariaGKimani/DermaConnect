import os
from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import db, User, Dermatologist, Appointment
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
from datetime import datetime, time
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token
# cloudinary
import cloudinary
import cloudinary.uploader
# load .env file
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Cloudinary Configuration
cloudinary.config(
    # get variables from .env
    cloud_name=os.getenv('CLOUDINARY_NAME'),
    api_key=os.getenv('API_KEY'),
    api_secret=os.getenv('API_SECRET'),
    secure=True
)

# USER API


class UserResource(Resource):
    def get(self):
        users = User.query.all()

        if users:
            return make_response(jsonify([{'id': user.id, 'name': user.name, 'email': user.email, 'phone_number': user.phone_number, 'password': user.password, 'message': user.message} for user in users]), 200)
        else:
            return make_response(jsonify({'message': 'Users not found'}), 404)

    def post(self):
        try:
            name = request.form.get('name')
            email = request.form.get('email')
            phone_number = request.form.get('phone_number')
            password = request.form.get('password')
            message = request.form.get('message')

            user_exists = User.query.filter_by(email=email).first()
            if user_exists:
                return make_response(jsonify({'message': 'User exists'}), 409)

            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

            new_user = User(
                name=name,
                email=email,
                phone_number=phone_number,
                password=hashed_password,
                message=message
            )
            db.session.add(new_user)
            db.session.commit()

            return make_response(jsonify({
                'name': name,
                'email': email,
                'phone_number': phone_number,
                'password': hashed_password,
                'message': message
            }), 201)

        except Exception as err:
            print(err)
            return make_response(jsonify({'message': 'Error registering user'}), 400)

    def delete(self, id):
        user = User.query.filter_by(id=id).first()

        if user:
            db.session.delete(user)
            db.session.commit()

            return make_response(jsonify({'message': 'user deleted successfully'}), 200)

        else:
            return make_response(jsonify({'message': 'Users not found'}), 404)


api.add_resource(UserResource, '/users', '/users/<int:id>')

# USER LOGIN


class UserLoginResource(Resource):
    def post(self):
        data = request.get_json()

        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()

        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity={'email': user.email, 'name': user.name})
            refresh_token = create_refresh_token(identity={'email': user.email, 'name': user.name})

            return make_response(jsonify({
                'access_token': access_token,
                'refresh_token': refresh_token,
                'username': user.name
            }), 200)

        else:
            return make_response(jsonify({'error': 'Invalid username or password'}), 401)


api.add_resource(UserLoginResource, '/login')

# DERMATOLOGIST API


class DermatologistResource(Resource):
    def get(self):
        dermatologists = Dermatologist.query.all()

        if dermatologists:
            return make_response(jsonify([{
                'id': dermatologist.id,
                'first_name': dermatologist.first_name,
                'last_name': dermatologist.last_name,
                'email': dermatologist.email,
                'phone_number': dermatologist.phone_number,
                'password': dermatologist.password,
                'confirm_password ': dermatologist.confirm_password,
                'country': dermatologist.country,
                'city': dermatologist.city,
                'medical_license_number': dermatologist.medical_license_number,
                'level_of_education': dermatologist.level_of_education,
                'consultation_fees': dermatologist.consultation_fees,
                'cost_per_session': dermatologist.cost_per_session,
                'payment_method': dermatologist.payment_method,
                'professional_photo': dermatologist.professional_photo,
                'certificate_photo': dermatologist.certificate_photo,
                'id_photo': dermatologist.id_photo,
            }
                for dermatologist in dermatologists
            ]), 200)
        else:
            return make_response(jsonify({'message': 'Users not found'}), 404)

    def post(self):
        try:
            first_name = request.form.get('first_name')
            last_name = request.form.get('last_name')
            email = request.form.get('email')
            phone_number = request.form.get('phone_number')
            password = request.form.get('password')
            confirm_password = request.form.get('confirm_password')
            country = request.form.get('country')
            city = request.form.get('city')
            medical_license_number = request.form.get('medical_license_number')
            level_of_education = request.form.get('level_of_education')
            consultation_fees = request.form.get('consultation_fees')
            cost_per_session = request.form.get('cost_per_session')
            payment_method = request.form.get('payment_method')
            professional_photo = request.files.get('professional_photo')
            certificate_photo = request.files.get('certificate_photo')
            id_photo = request.files.get('id_photo')

            # check if dermatologist exists
            dermatologist_exists = Dermatologist.query.filter_by(email=email).first()
            if dermatologist_exists:
                return make_response(jsonify({'message': 'Dermatologist already exists'}), 201)

            # hash password
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
            hashed_confirm_password = bcrypt.generate_password_hash(confirm_password).decode('utf-8')

            # upload images to cloudinary and get url
            upload_professional_photo = cloudinary.uploader.upload(professional_photo)
            professional_photo_url = upload_professional_photo['secure_url']

            upload_certificate_photo = cloudinary.uploader.upload(certificate_photo)
            certificate_photo_url = upload_certificate_photo['secure_url']

            upload_id_photo = cloudinary.uploader.upload(id_photo)
            id_photo_url = upload_id_photo['secure_url']

            # registered user
            new_Dermatologist = Dermatologist(
                first_name=first_name,
                last_name=last_name,
                email=email,
                phone_number=phone_number,
                password=hashed_password,
                confirm_password=hashed_confirm_password,
                country=country,
                city=city,
                medical_license_number=medical_license_number,
                level_of_education=level_of_education,
                consultation_fees=consultation_fees,
                cost_per_session=cost_per_session,
                payment_method=payment_method,
                professional_photo=professional_photo_url,
                certificate_photo=certificate_photo_url,
                id_photo=id_photo_url
            )
            db.session.add(new_Dermatologist)
            db.session.commit()

            return make_response(jsonify({
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'phone_number': phone_number,
                'password': hashed_password,
                'confirm_password': hashed_confirm_password,
                'country': country,
                'city': city,
                'medical_license_number': medical_license_number,
                'level_of_education': level_of_education,
                'consultation_fees': consultation_fees,
                'cost_per_session': cost_per_session,
                'payment_method': payment_method,
                'professional_photo': professional_photo_url,
                'certificate_photo': certificate_photo_url,
                'id_photo': id_photo_url,
            }), 201)

        except Exception as err:
            print(err)
            return make_response(jsonify({'message': 'Error registering dermatologist'}), 400)

    def delete(self, id):
        dermatologist = Dermatologist.query.filter_by(id=id).first()

        if dermatologist:
            db.session.delete(dermatologist)
            db.session.commit()

            return make_response(jsonify({'message': 'Dermatologist deleted successfully'}), 200)

        else:
            return make_response(jsonify({'message': 'Dermatologist not found'}), 404)


api.add_resource(DermatologistResource, '/dermatologists', '/dermatologists/<int:id>')

# DERMATOLOGIST LOGIN


class DermatologistLoginResource(Resource):
    def post(self):
        data = request.get_json()

        email = data.get('email')
        password = data.get('password')

        dermatologist = Dermatologist.query.filter_by(email=email).first()

        if dermatologist and bcrypt.check_password_hash(dermatologist.password, password):
            access_token = create_access_token(identity={'email': dermatologist.email, 'name': dermatologist.name})
            refresh_token = create_refresh_token(identity={'email': dermatologist.email, 'name': dermatologist.email})

            return make_response(jsonify({
                'access_token': access_token,
                'refresh_token': refresh_token,
                'username': dermatologist.name
            }), 200)
        else:
            return make_response(jsonify({'error': 'Invalid username or password'}), 401)


api.add_resource(DermatologistLoginResource, '/login')


class AppointmentResource(Resource):
    def get(self):
        appointments = Appointment.query.all()
        if appointments:
            return make_response(jsonify([{
                'id': appointment.id,
                'name': appointment.name,
                'phone_number': appointment.phone_number,
                'preferred_date': appointment.preferred_date.strftime('%d/%m/%Y'),
                'preferred_time': appointment.preferred_time.strftime('%H:%M'),
                'reason_for_visit': appointment.reason_for_visit,
                'user_id': appointment.user_id,
                'dermatologist_id': appointment.dermatologist_id
            } for appointment in appointments]), 200)
        else:
            return make_response(jsonify({'message': 'Appointments not found'}), 404)

    def post(self):
        data = request.get_json()

        # Validate required fields
        required_fields = [
            'name',
            'phone_number',
            'preferred_date',
            'preferred_time',
            'reason_for_visit',
            'user_id',
            'dermatologist_id'
        ]
        missing_fields = [field for field in required_fields if field not in data]

        if missing_fields:
            return make_response(
                jsonify({'error': f'Missing required fields: {", ".join(missing_fields)}'}),
                400
            )

        # Optional: Validate phone number and date formats here
        preferred_datetime_str = data.get('preferred_date')
        preferred_time_str = data.get('preferred_time')

        # change format
        preferred_date = datetime.strptime(preferred_datetime_str, '%d/%m/%Y').date()
        preferred_time = datetime.strptime(preferred_time_str, '%H:%M').time()

        new_appointment = Appointment(
            name=data.get('name'),
            phone_number=data.get('phone_number'),
            preferred_date=preferred_date,
            preferred_time=preferred_time,
            reason_for_visit=data.get('reason_for_visit'),
            user_id=data.get('user_id'),
            dermatologist_id=data.get('dermatologist_id')
        )

        try:
            db.session.add(new_appointment)
            db.session.commit()
            return make_response(jsonify({'message': 'Appointment created successfully'}), 201)

        except Exception as e:
            db.session.rollback()
            return make_response(
                jsonify({'error': 'An unexpected error occurred', 'details': str(e)}),
                500
            )

    def put(self, id):
        appointment = Appointment.query.filter_by(id=id).first()
        if appointment:
            data = request.get_json()
            appointment.name = data.get('name', appointment.name)
            appointment.phone_number = data.get('phone_number', appointment.phone_number)

            # convert date format
            preferred_date_str = data.get('preferred_date')
            preferred_date = datetime.strptime(preferred_date_str, '%d/%m/%Y').date()
            appointment.preferred_date = preferred_date

            # convert time format
            preferred_time_str = data.get('preferred_time')
            preferred_time = datetime.strptime(preferred_time_str, '%H:%M').time()
            appointment.preferred_time = preferred_time

            appointment.reason_for_visit = data.get('reason_for_visit', appointment.reason_for_visit)
            appointment.user_id = data.get('user_id', appointment.user_id)
            appointment.dermatologist_id = data.get('dermatologist_id', appointment.dermatologist_id)

            db.session.commit()
            return make_response(jsonify({'message': 'Appointment updated successfully'}), 200)
        else:
            return make_response(jsonify({'message': 'Appointment not found'}), 404)

    def delete(self, id):
        appointment = Appointment.query.filter_by(id=id).first()
        if appointment:
            db.session.delete(appointment)
            db.session.commit()
            return make_response(jsonify({'message': 'Appointment deleted successfully'}), 200)
        else:
            return make_response(jsonify({'message': 'Appointment not found'}), 404)


api.add_resource(AppointmentResource, '/appointments', '/appointments/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
