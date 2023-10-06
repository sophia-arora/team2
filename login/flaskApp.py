from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def login():
    # Your login logic here
    return render_template('login.html')

@app.route('/signup')
def signup():
    # Render the SignUp page
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)