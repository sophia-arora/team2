import React, {useState} from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";

function LoginPage() {

  //   const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  // });

  //const { username, password } = formData;
    function handleSubmit() {
        var u = document.getElementById("username").value;
        var p = document.getElementById("password").value;
        document.getElementById("demo").innerHTML = "Username: "+u+"Password:  " +p; //prints out u and p

         //
         // console.log('Username:', u);
         // console.log('Password:', p);

    }

    return (
        <div className="login-container">
            <div className="photo-section">
                {/* You can add an <img> tag here for the photo */}
            </div>
            <div className="form-section">
                <h1>Welcome</h1>
                <p>Sign in to continue</p>
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" id = "username" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" id = "password" placeholder="Enter your password" />
                </div>
                <div className="button-group">
                    <button onClick={handleSubmit}>Login</button>
                    <Link to="/signup">Don't have an account?'</Link>
                </div>
                <p id="demo"></p>
            </div>
        </div>
    );
}

export default LoginPage;