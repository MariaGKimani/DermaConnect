from flask import Flask, make_response, jsonify
from flask_migrate import Migrate
from models import db, User, Dermatologist, Appointment
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
# cloudinary
import cloudinary
import cloudinary.uploader
# load .env file
from dotenv import load_dotenv
load_dotenv()
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY-TRACK-MODIFICATION'] = False

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)
bcrypt = Bcrypt(app)

# Cloudinary Configuration       
cloudinary.config( 
    # get variables from .env

    cloud_name = os.getenv('CLOUD_NAME'), 
    api_key = os.getenv('API_KEY'), 
    api_secret = os.getenv('API_SECRET'),
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

    def delete(self, id):
        user = User.query.filter_by(id=id).first()

        if user:
            db.session.delete(user)
            db.session.commit()

            return make_response(jsonify({'message': 'user deleted successfully'}), 200)

        else:
            return make_response(jsonify({'message': 'Users not found'}), 404)


api.add_resource(UserResource, '/users', '/users/<int:id>')


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
            dermatologist_exists = Dermatology.query.filter_by(email=email).first()
            if dermatologists_exists:
                return make_response(jsonify({'message':'Dermatologist already exists'}), 409)

            # hash password
            hashed_password = bcrypt.generate_password_hash(password)
            hashed_confirm_password = bcrypt.generate_password_hash(confirm_password)

            # upload images to cloudinary and get url
            upload_professional_photo = cloudinary.uploader.upload(professional_photo)
            professional_photo_url = upload_professional_photo['secure_url']

            upload_certificate_photo = cloudinary.uploader.upload(certificate_photo)
            certificate_photo_url = upload_certificate_photo['secure_url']

            upload_id_photo = cloudinary.uploader.upload(id_photo)
            id_photo_url = upload_id_photo['secure_url']

            # registered user
            new_Dermatologist = Dermatologist(
                first_name = first_name,
                last_name = last_name,
                email = email,
                phone_number = phone_number,
                password = hashed_password,
                confirm_password = hashed_confirm_password,
                country = country,
                city = city,
                medical_license_number = medical_license_number,
                level_of_education = level_of_education,
                consultation_fees = consultation_fees,
                cost_per_session = cost_per_session,
                payment_method = payment_method,
                professional_photo = professional_photo_url,
                certificate_photo = certificate_photo_url,
                id_photo = id_photo_url
            )
            db.session.add(new_Dermatologist)
            db.session.commit()

            return make_response(jsonify({
                'message': 'Dermatologist created successfully',
                'first_name' : first_name,
                'last_name' : last_name,
                'email' : email,
                'phone_number' : phone_number,
                'password' : hashed_password,
                'confirm_password' : hashed_confirm_password,
                'country' : country,
                'city' : city,
                'medical_license_number' : medical_license_number,
                'level_of_education' : level_of_education,
                'consultation_fees' : consultation_fees,
                'cost_per_session' : cost_per_session,
                'payment_method' : payment_method,
                'professional_photo' : professional_photo,
                'certificate_photo' : certificate_photo,
                'id_photo' : id_photo,
                }), 201)

        except Exception as err:
            print(err)
            return make_response(jsonify({'message':'Error registering dermatologist'}), 400)


    def delete(self,id):
        dermatologist = Dermatologist.query.filter_by(id=id).first()

        if dermatologist:
            db.session.delete(dermatologist)
            db.session.commit()

            return make_response(jsonify({'message': 'Dermatologist deleted successfully'}), 200)

        else:
            return make_response(jsonify({'message': 'Dermatologist not found'}), 404)


api.add_resource(DermatologistResource, '/dermatologists','/dermatologists/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)
