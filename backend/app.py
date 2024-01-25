
from models import *
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os
import ast

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/api/goals', methods=['GET', 'POST'])
def goals():
    if request.method == 'GET':
        goals = Goal.query.all()
        g_list = []
        for goal in goals:
            g_list.append(goal.to_dict())
        return make_response(g_list, 200)
    
    elif request.method == 'POST':
        data = request.json
        new_goal = Goal(
            name=data['name'],
            description=data['description'],
            user_id=data['user_id']
        )
        db.session.add(new_goal)
        db.session.commit()
        return make_response(new_goal.to_dict(), 200)
    
@app.route('/api/goals/<int:id>', methods=['PATCH', 'DELETE'])
def goal_by_id(id):
    selected_goal = Goal.query.filter(Goal.id == id).first()
    print(selected_goal)
    if request.method == 'PATCH':
        for attr in request.json:
            setattr(selected_goal, attr, request.json.get(attr))
        db.session.add(selected_goal)
        db.session.commit()
        return make_response(selected_goal.to_dict(), 200)
    if request.method == 'DELETE':
        db.session.delete(selected_goal)
        db.session.commit()
        return make_response(selected_goal.to_dict(), 200)

@app.route('/api/exercises', methods=["GET", "POST"])
def exercises():
    if request.method == "GET":
        exercises = Exercise.query.all()
        e_list = []
        for exercise in exercises:
            e_list.append(exercise.to_dict())
        return make_response(e_list, 200)
    if request.method == "POST":
        new_exercise = Exercise(
            name=request.json['name'],
            description=request.json['description'],
            user_id=request.json['user_id']
        )
        db.session.add(new_exercise)
        db.session.commit()
        return make_response(new_exercise.to_dict(), 200)
    
@app.route('/api/workouts', methods=["GET", "POST"])
def workouts():
    if request.method == "GET":
        workouts = Workout.query.all()
        w_list = []
        for workout in workouts:
            w_list.append(workout.to_dict())
        return make_response(w_list, 200)
    if request.method == "POST":
        new_workout = Workout(
            name=request.json['name'],
            description=request.json['description'],
            user_id=request.json['user_id']
        )
        db.session.add(new_workout)
        db.session.commit()
        return make_response(new_workout.to_dict(), 200)

@app.route('/api/users', methods=["GET", "POST"])
def user():
    if request.method == "GET":
        u_list = []
        users = User.query.all()
        for user in users:
            u_list.append(user.to_dict())
        return make_response(u_list, 200)
    if request.method == "POST":
        new_user = User(username=request.json['username'], email=request.json['email'])
        db.session.add(new_user)
        db.session.commit()
        return make_response(new_user.to_dict(), 200)
    
@app.route('/api/milestones', methods=["GET", "POST"])
def milestone():
    if request.method == "GET":
        m_list = []
        milestones = Milestone.query.all()
        for milestone in milestones:
            m_list.append(milestone.to_dict())
        return make_response(m_list, 200)
    if request.method == "POST":
        print("Attempting to post milestone")
        new_milestone = Milestone(
            name=request.json['name'],
            description=request.json['description'],
            goal_id=request.json['goal_id']
        )
        db.session.add(new_milestone)
        db.session.commit()
        print("milestone created, parsing exercises")
        all_exercises =request.json['exercises']
        # all_exercises = ast.literal_eval(request.json['exercises'])
        print(all_exercises)
        for exercise in all_exercises:
            print("adding MilestoneExercise")
            print(exercise)
            ex_obj = Exercise.query.filter(Exercise.name == exercise).first()
            print(ex_obj.id)
            new_milestone_exercise = MilestoneExercise(
                milestone_id=new_milestone.id,
                exercise_id=ex_obj.id
            )
            db.session.add(new_milestone_exercise)
            db.session.commit()

        return make_response(new_milestone.to_dict(), 200)
    
@app.route('/api/milestones/<int:id>', methods=["GET", "PATCH", "DELETE"])
def milestone_by_id(id):
    print("milestone by id attempted")
    selected_milestone = Milestone.query.filter(Milestone.id == id).first()
    if request.method == "GET":
        pass
    if request.method == "PATCH":
        print(selected_milestone)
        for attr in request.json:
            setattr(selected_milestone, attr, request.json.get(attr))
        db.session.add(selected_milestone)
        db.session.commit()
        return make_response(selected_milestone.to_dict(), 200)
    if request.method == "DELETE":
        db.session.delete(selected_milestone)
        db.session.commit()
        return make_response(selected_milestone.to_dict(), 200)

    
if __name__ == '__main__':
    app.run(port=5555, debug=True)