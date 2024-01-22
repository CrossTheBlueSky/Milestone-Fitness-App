from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)

    # Relationships
    goals = db.relationship('Goal', back_populates='user')
    exercises = db.relationship('Exercise', back_populates='user')
    workouts = db.relationship('Workout', back_populates='user')

    # serialize rules
    serialize_rules = ('-goals','-exercises','-workouts')

class Goal(db.Model, SerializerMixin):
    __tablename__ = 'goals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationships
    milestones = db.relationship('Milestone', back_populates='goal')
    user = db.relationship('User', back_populates='goals')

    # serialize rules
    serialize_rules = ( '-milestones.goals',)

class Exercise(db.Model, SerializerMixin):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationships
    user = db.relationship('User', back_populates='exercises')
    milestones = db.relationship('MilestoneExercise', back_populates='exercise')
    workouts = db.relationship('ExerciseWorkout', back_populates='exercise')

    #serialize rules
    serialize_rules = ('-user.exercises', '-milestones.exercise', '-workouts.exercise')

class Workout(db.Model, SerializerMixin):
    __tablename__ = 'workouts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationships
    exercises = db.relationship('ExerciseWorkout', back_populates='workout')
    user = db.relationship('User', back_populates='workouts')

    # serialize rules
    serialize_rules = ('-user.workouts', '-exercises.workout')

class Milestone(db.Model, SerializerMixin):
    __tablename__ = 'milestones'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    goal_id = db.Column(db.Integer, db.ForeignKey('goals.id'), nullable=False)

    # Relationships
    goal = db.relationship('Goal', back_populates='milestones')
    exercises = db.relationship('MilestoneExercise', back_populates='milestone')

    # serialize rules
    serialize_rules = ('-goal.milestones', '-exercises.milestone')


class MilestoneExercise(db.Model, SerializerMixin):
    __tablename__ = 'milestone_exercises'

    id = db.Column(db.Integer, primary_key=True)
    milestone_id = db.Column(db.Integer, db.ForeignKey('milestones.id'), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)

    # Relationships
    milestone = db.relationship('Milestone', back_populates='exercises')
    exercise = db.relationship('Exercise', back_populates='milestones')

    # serialize rules
    serialize_rules = ('-milestone.exercises', '-exercise.milestones')

class ExerciseWorkout(db.Model, SerializerMixin):
    __tablename__ = 'exercise_workouts'

    id = db.Column(db.Integer, primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)
    workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)

    # Relationships
    exercise = db.relationship('Exercise', back_populates='workouts')
    workout = db.relationship('Workout', back_populates='exercises')

    # serialize rules
    serialize_rules = ('-exercise.workouts', '-workout.exercises')