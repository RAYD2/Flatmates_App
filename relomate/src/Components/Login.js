import React from "react";

const Login = () => {
    return (
        <div className="login-form">
            <h1 className="header">Login</h1>
            <form action="#">
                <div className="username-box">
                    <input type="text" name="username" placeholder="Username" required></input>
                </div>
                <div className="password-box">
                    <input type="password" name="password" placeholder="Password" required></input>
                </div>
                <div className="login-button">
                    <button type="submit">Login</button>
                </div>
                <div className="register-link">
                    <a href="Register.js">Click Here</a>
                </div>
            </form>
        </div>
    )
}

export default Login;