import React from 'react';
import './SignupPage.css';
import {Link} from "react-router-dom";

function SignupPage() {
    function handleSubmit() {
        var u = document.getElementById("username").value;
        var p = document.getElementById("password").value;
        var f = document.getElementById("firstname").value;
        var l = document.getElementById("lastname").value;
        document.getElementById("demo").innerHTML = "Username: "+u+" Password:  " +p +" First:  " +f +" Last:  " +l; //prints out u and p

    }

    return (
        <div className="login-container">
            <div className="photo-section">
                {/* You can add an <img> tag here for the photo */}
            </div>
            <div className="form-section">
                <h1>Welcome</h1>
                <p>Create an account</p>
                <div className="input-group">
                    <label>First Name</label>
                    <input type="text" id = "firstname" placeholder="Enter your first name" />
                    <label>Last Name</label>
                    <input type="text" id = "lastname" placeholder="Enter your last name" />
                </div>
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" id = "username" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" id = "password" placeholder="Enter your password" />
                </div>
                <div className="button1-group">
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
                <p id="demo"></p>
            </div>
        </div>
    );
}

export default SignupPage;