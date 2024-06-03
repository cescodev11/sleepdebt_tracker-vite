// src/components/Login.js
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <h1>Let's Sign you in.</h1>
      <div className="form-container">
        <input type="text" className="input-box" placeholder="Email" />
        <input type="password" className="input-box" placeholder="Password" />
      </div>
      <button className="google-button">
        <Icon icon="logos:google-icon" /> Sign in with Google
      </button>
      <div className="bottom-section">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;

