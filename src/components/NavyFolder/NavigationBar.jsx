import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          SleepDebtTracker
        </a>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
