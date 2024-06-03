// src/components/Signup.js
import React from "react";
import { Icon } from "@iconify/react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signupPage">
      <h1>Create Your Account</h1>
      <div className="form-container">
        <input type="text" className="input-box" placeholder="Email" />
        <input type="password" className="input-box" placeholder="Password" />
        <input type="password" className="input-box" placeholder="Confirm Password" />
      </div>
      <button className="google-button">
        <Icon icon="logos:google-icon" /> Sign up with Google
      </button>
      <div className="bottom-section">
        <p>Already have an account? Login</p>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
