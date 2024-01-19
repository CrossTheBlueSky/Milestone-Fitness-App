
from models import *
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/api/Goals', methods=['GET', 'POST'])
def goals():
    if request.method == 'GET':
        goals = Goal.query.all()
        g_list = []
        for goal in goals:
            g_list.append(goal.to_dict())
        return make_response(g_list, 200)
    
    elif request.method == 'POST':
        return 'Post Attempted'

@app.route('/api/exercises', methods=["GET"])
def exercises():
    if request.method == "GET":
        exercises = Exercise.query.all()
        e_list = []
        for exercise in exercises:
            e_list.append(exercise.to_dict())
        return make_response(e_list, 200)
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)