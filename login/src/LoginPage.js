import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";

function LoginPage() {
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
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="button-group">
                    <button>Login</button>
                    <Link to="/signup">Don't have an account?'</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;