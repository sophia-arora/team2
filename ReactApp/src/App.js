import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup">
                    <SignupPage />
                </Route>
                <Route path="/">
                    <LoginPage />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;