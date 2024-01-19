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
        Goal(name="Kip-up on solid ground", description="Progress my kip-ups from the spring floor to solid ground"),
        Goal(name="Strict pullover to support", description="Perform a pullover to support on the high bar without kipping"),
    ]
    db.session.add_all(goals)
    db.session.commit()

def seed_exercises():
    exercises = [
        Exercise(name="Pull-up", description="Pull yourself up until your shoulders clear the bar."),
        Exercise(name="Push-up", description="Push yourself up from the ground."),
        Exercise(name="Chest Dip", description="Leaning forward, lower yourself between the dip bars until your elbows reach 90 degrees."),
        Exercise(name="Squat", description="Lower yourself until your thighs are parallel to the ground."),
        Exercise(name="Lunge", description="Step forward and lower yourself until your front thigh is parallel to the ground."),
        
    ]

    db.session.add_all(exercises)
    db.session.commit()

def seed_workouts():
    workouts = [
        Workout(name="Pull Day", description="A workout focused on pulling exercises."),
        Workout(name="Push Day", description="A workout focused on pushing exercises."),
        Workout(name="Leg Day", description="A workout focused on leg exercises."),
        Workout(name="Core Day", description="A workout focused on core exercises."),
        Workout(name="Plyometrics", description="A workout focused on explosive exercises."),
        Workout(name="Cardio", description="A workout focused on cardiovascular exercises."),
        Workout(name="Skill Day", description="A workout focused on skill exercises."),
    ]
    db.session.add_all(workouts)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_goals()
        seed_exercises()
        seed_workouts()
