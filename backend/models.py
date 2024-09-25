from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String(150))
    phone_number = db.Column(db.String(15))
    password = db.Column(db.String)
    message = db.Column(db.String(150))


class Dermatologist(db.Model):
    __tablename__ = 'dermatologists'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String(150))
    phone_number = db.Column(db.String(15))
    password = db.Column(db.String)
    confirm_password = db.Column(db.String)
    country = db.Column(db.String)
    city = db.Column(db.String)
    medical_license_number = db.Column(db.Integer)
    level_of_education = db.Column(db.String)
    consultation_fees = db.Column(db.Integer)
    cost_per_session = db.Column(db.Integer)
    payment_method = db.Column(db.String)

    professional_photo = db.Column(db.String)
    certificate_photo = db.Column(db.String)
    id_photo = db.Column(db.String)


class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    phone_number = db.Column(db.String)
    preferred_date = db.Column(db.String)
    preferred_time = db.Column(db.DateTime)
    reason_for_visit = db.Column(db.String)
