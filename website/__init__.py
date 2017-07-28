from flask import Flask, render_template, request, url_for, session, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

app.secret_key = 'f988d64c-e583-4368-8766-b6f1ba0e8305'

if __name__ == "__main__":
    app.run()
