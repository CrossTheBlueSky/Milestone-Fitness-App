from random import randint, choice as rc
from faker import Faker
from app import app
from models import *

fake = Faker()

def seed_goals():
    goals = [
        Goal(name="10 foot lache", description="Perform a lache from one bar to another, 10 feet apart."),
        Goal(name="10 foot stride to precision", description="Perform a stride across a 10 foot gap with a precision landing"),
        Goal(name="15 foot wall pop", description="Top out on a wall 15 feet high with a wall pop."),
        Goal(name="Kip-up on solid ground", description="Progress my kip-ups from the spring floor to solid ground")
    ]
    db.session.add_all(goals)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_goals()
