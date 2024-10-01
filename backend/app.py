from flask import Flask, make_response, jsonify
from flask_migrate import Migrate
from models import db, User, Dermatologist, Appointment
from flask_restful import Api, Resource

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY-TRACK-MODIFICATION'] = False

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


if __name__ == '__main__':
    app.run(port=5555, debug=True)
