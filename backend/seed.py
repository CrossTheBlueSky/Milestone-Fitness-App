from random import randint, choice as rc
from faker import Faker
from app import app
from models import *

faker = Faker()

def seed_users():
    users = [
        User(username="crossthebluesky", email="resurgentkase@gmail.com"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}"),
        User(username=f"{faker.name()}", email=f"{faker.email()}")]
    db.session.add_all(users)
    db.session.commit()

def seed_goals():
    goals = [
        Goal(name="10 foot lache", description="Perform a lache from one bar to another, 10 feet apart.", user_id=1),
        Goal(name="10 foot stride to precision", description="Perform a stride across a 10 foot gap with a precision landing", user_id=1),
        Goal(name="15 foot wall pop", description="Top out on a wall 15 feet high with a wall pop.", user_id=1),
        Goal(name="Kip-up on solid ground", description="Progress my kip-ups from the spring floor to solid ground", user_id=1),
        Goal(name="Strict pullover to support", description="Perform a pullover to support on the high bar without kipping", user_id=1),
    ]
    db.session.add_all(goals)
    db.session.commit()

def seed_exercises():
    exercises = [
        Exercise(name="Pull-up", description="Pull yourself up until your shoulders clear the bar.", user_id=1),
        Exercise(name="Push-up", description="Push yourself up from the ground.", user_id=1),
        Exercise(name="Chest Dip", description="Leaning forward, lower yourself between the dip bars until your elbows reach 90 degrees.", user_id=1),
        Exercise(name="Squat", description="Lower yourself until your thighs are parallel to the ground.", user_id=1),
        Exercise(name="Lunge", description="Step forward and lower yourself until your front thigh is parallel to the ground.", user_id=1),
        
    ]

    db.session.add_all(exercises)
    db.session.commit()

def seed_workouts():
    workouts = [
        Workout(name="Pull Day", description="A workout focused on pulling exercises.", user_id=1),
        Workout(name="Push Day", description="A workout focused on pushing exercises.", user_id=1),
        Workout(name="Leg Day", description="A workout focused on leg exercises.", user_id=1),
        Workout(name="Core Day", description="A workout focused on core exercises.", user_id=1),
        Workout(name="Plyometrics", description="A workout focused on explosive exercises.", user_id=1),
        Workout(name="Cardio", description="A workout focused on cardiovascular exercises.", user_id=1),
        Workout(name="Skill Day", description="A workout focused on skill exercises.", user_id=1),
    ]
    db.session.add_all(workouts)
    db.session.commit()

def seed_milestones():
    for i in range(1, 11):
        for j in range(1, 4):
            milestone = Milestone(name=faker.sentence(), description=faker.text(), goal_id=i)
            db.session.add(milestone)
            for k in range(1, 4):
                milestone_exercise = MilestoneExercise(milestone_id=j, exercise_id=k)
                db.session.add(milestone_exercise)
            db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_users()
        seed_goals()
        seed_milestones()
        seed_exercises()
        seed_workouts()

