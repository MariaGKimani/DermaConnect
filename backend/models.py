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


