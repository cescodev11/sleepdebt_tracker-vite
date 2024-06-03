import Home from "./components/HomePage/Home";
import Login from "./components/SigninPage/Login";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />\
      </Routes>
    </div>
  );
}

export default App;
