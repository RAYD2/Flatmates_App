import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "../ComponentStyles/Login.css";
const Login = () => {
  const supabase = createClient(
    "https://folkgobawpbterfitlma.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbGtnb2Jhd3BidGVyZml0bG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjA0NTAsImV4cCI6MjAyNzE5NjQ1MH0.8gHRBa5JVkL0fSIBCRh06dAvDfJRgrKq8o0iRoD8yaY"
  );

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
            <button type="submit">Login</button>
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
