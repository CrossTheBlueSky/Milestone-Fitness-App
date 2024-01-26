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

    for i in range(1, 12):
        exercise = Exercise(name=faker.word(), description=faker.sentence(), last_performed=faker.date(), user_id=i)

        db.session.add(exercise)
        db.session.commit()

def seed_workouts():
    for i in range(1, 4):
            for j in range(1, 4):
                workout = Workout(name=faker.sentence(), description=faker.text(), date_performed=faker.date(), user_id=i)
                db.session.add(workout)
                db.session.commit()
                for k in range(1, 4):
                    exercise_workout = ExerciseWorkout(workout_id=workout.id, exercise_id=k)
                    db.session.add(exercise_workout)
                    db.session.commit()



def seed_milestones():
    for i in range(1, 7):
        for j in range(1, 4):
            milestone = Milestone(name=faker.sentence(), description=faker.text(), goal_id=i)
            db.session.add(milestone)
            db.session.flush()
            for k in range(1, 4):
                milestone_exercise = MilestoneExercise(milestone_id=milestone.id, exercise_id=k)
                db.session.add(milestone_exercise)
            db.session.commit()

if __name__ == '__main__':

    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_users()
        seed_goals()
        seed_exercises()
        seed_milestones()
        seed_workouts()

