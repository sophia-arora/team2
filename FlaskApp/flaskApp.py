
from flask import Flask, jsonify
from flask_cors import cross_origin, CORS

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():

    # Render the login page
    return app.send_static_file('index.html')

    # return render_template('login.html')
@app.route('/getPassword/<username>')
@cross_origin()
def hello_world(username):
    if username == "Sophia":
        successM = {"password": "Harder", "code": 200}
        return jsonify(successM), 200
    else:
        errorM = {"error": "User Not Found", "code": 404}
        return jsonify(errorM), 404
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# @app.route('/signup')
# def signup():
#     # Render the SignUp page
#     return render_template('signup.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=5000)
