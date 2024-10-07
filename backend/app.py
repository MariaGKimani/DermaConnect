from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import db, User, Dermatologist, Appointment
from flask_restful import Api, Resource

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)

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

# DERMATOLOGISTAPI


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

        api.add_resource(DermatologistResource, '/dermatologists')


class AppointmentResource(Resource):
    def get(self):
        appointments = Appointment.query.all()
        if appointments:
            return make_response(jsonify([{
                'id': appointment.id,
                'name': appointment.name,
                'phone_number': appointment.phone_number,
                'preferred_date': appointment.preferred_date,
                'preferred_time': appointment.preferred_time,
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

        new_appointment = Appointment(
            name=data.get('name'),
            phone_number=data.get('phone_number'),
            preferred_date=data.get('preferred_date'),
            preferred_time=data.get('preferred_time'),
            reason_for_visit=data.get('reason_for_visit'),
            user_id=data.get('user_id'),
            dermatologist_id=data.get('dermatologist_id')
        )

        try:
            db.session.add(new_appointment)
            db.session.commit()
            return make_response(jsonify({'message': 'Appointment created successfully'}), 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response(
                jsonify({'error': 'Failed to create appointment', 'details': str(e)}),
                500
            )
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
            appointment.preferred_date = data.get('preferred_date', appointment.preferred_date)
            appointment.preferred_time = data.get('preferred_time', appointment.preferred_time)
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
