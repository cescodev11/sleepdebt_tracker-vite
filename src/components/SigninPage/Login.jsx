import React from "react";
import { Icon } from "@iconify/react";
import "./Login.css";
const Login = () => {
  return (
    <div className="loginPage">
      <h1>Lets Sign you in.</h1>
      <div className="form-container">
        <input type="text" className="input-box" placeholder="email" />
        <input type="text" className="input-box" placeholder="Second Input" />
      </div>
      <button className="google-button">
        <Icon icon="logos:google-icon" /> Sign in with Google
      </button>
      <div className="bottom-section">
        <p>create new account? Sign up</p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
