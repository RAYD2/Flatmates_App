import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../apis/supabaseclient";
import "../ComponentStyles/Login.css";
import NavBar from "./Navbar";

const Login = () => {
  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  async function fetchData(email, pass) {
    try {
      const { data, error } = await supabase
        .from("accountinfo")
        .select("emailaddress", "password")
        .eq("emailaddress", email)
        .eq("password", pass);

      if (error) throw error;
      if (data.length === 1) {
        console.log(password);
        alert("Login successful!");
      } else {
        alert("Email address or password are incorrect - please try again!");
      }
    } catch (error) {
      alert("Data unable to be inserted");
    }
  }

  const emailChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(emailaddress, password);
  };
  return (
    <div className="mainLoginContainer">
      <div className="login-form">
        <h1 className="header">Login to Your Account</h1>
        <form onSubmit={handleSubmit} method="POST">
          <div className="username-box">
            <input
              type="email"
              name="emailaddress"
              placeholder="Email Address"
              value={emailaddress}
              onChange={emailChange}
              required
            ></input>
          </div>
          <div className="password-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={passwordChange}
              required
            ></input>
          </div>
          <div className="login-button">
            <button className="login" type="submit">
              Login
            </button>
          </div>
          <div className="register-link">
            Haven't got an account yet?<Link to="/Register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
