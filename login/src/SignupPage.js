import React from 'react';
import './SignupPage.css';

function SignupPage() {
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
                    <input type="text" placeholder="Enter your first name" />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your last name" />
                </div>
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default SignupPage;