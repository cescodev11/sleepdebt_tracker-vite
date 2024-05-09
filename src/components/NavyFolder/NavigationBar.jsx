import { useState } from "react";
import "./Navbar.css";

const NavigationBar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="web-logo">MySite</div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776; {/* Hamburger Icon */}
      </button>
    </nav>
  );
};

export default NavigationBar;
