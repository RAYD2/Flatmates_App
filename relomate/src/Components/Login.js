import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <h1 className="header">Login to Your Account</h1>
            <form action="#">
                <div className="username-box">
                    <input type="email" name="email" placeholder="Email Address" required></input>
                </div>
                <div className="password-box">
                    <input type="password" name="password" placeholder="Password" required></input>
                </div>
                <div className="login-button">
                    <button type="submit">Login</button>
                </div>
                <div className="register-link">
                    Haven't got an account yet?<Link to='/Register'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;