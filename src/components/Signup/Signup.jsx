import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import "./Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:3000/auth/signup", {
        email,
        password,
      });
      alert("Sign-up successful! Please log in.");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleGoogleSignUp = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="signUpPage">
      <h1>Create Your Account</h1>
      <div className="form-container">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input-box"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-box"
        />
      </div>
      <button onClick={handleSignUp} className="sign-up-button">
        Sign Up
      </button>
      <button onClick={handleGoogleSignUp} className="google-button">
        <Icon icon="logos:google-icon" /> Sign up with Google
      </button>
      <div className="bottom-section">
        <p>Already have an account? Log in</p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default SignUp;
