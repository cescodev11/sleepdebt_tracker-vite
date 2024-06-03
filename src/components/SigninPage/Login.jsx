import React, { useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>
        <Icon icon="logos:google-icon" /> Login with Google
      </button>
    </div>
  );
};

export default Login;
