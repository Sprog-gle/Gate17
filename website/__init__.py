from flask import Flask, render_template, request, url_for, session, redirect, jsonify
import json
from pynamodb import Model

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/projectraven')
def projectRaven():
    return render_template("projectraven.html")

@app.route('/newLostPerson', methods=["POST"])
def newLostPerson():
    return "Success"

@app.route("/swamps")
def swamps():
    with open("static/data/polygons-areas.json") as file:
        swamp = json.load(file)
    return jsonify(swamp)


@app.route("/infocenters")
def infocenters():
    with open("static/data/infocenters.json") as file:
        data = json.load(file)
        return jsonify(data)


@app.route("/schools")
def schools():
    with open("static/data/schools.json") as file:
        data = json.load(file)
        return jsonify(data)


@app.route("/tidal")
def risk():
    with open("static/data/points-risk.json") as file:
        risky = json.load(file)
    return jsonify(risky)

@app.route("/lost")
def risk():
    with open("static/data/points-risk.json") as file:
        risky = json.load(file)
    return jsonify(risky)

app.secret_key = 'f988d64c-e583-4368-8766-b6f1ba0e8305'

if __name__ == "__main__":
    app.run()

class Lost(Model):
    class Meta:
        table_name = "gate_17_lost"
        region = "ap-southeast-2"

    id = UnicodeAttribute(hash_key=True)
    name = UnicodeAttribute()
    type = UnicodeAttribute()
    positions = UnicodeAttribute()
