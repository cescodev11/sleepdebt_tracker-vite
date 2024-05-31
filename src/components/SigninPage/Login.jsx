import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="loginPage">
      <h1>Lets Sign you in.</h1>
      <div className="form-container">
        <input type="text" className="input-box" placeholder="email" />
        <input type="text" className="input-box" placeholder="Second Input" />
      </div>
      <div>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
