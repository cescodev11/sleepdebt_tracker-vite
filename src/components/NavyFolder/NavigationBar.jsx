import { useState } from "react";
import "./Navbar.css";

const NavigationBar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="web-logo">SDT</div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">View Sleep Hours</a>
        </li>
        <li>
          <a href="#">Log New Hours</a>
        </li>
      </ul>

      <button className="hamburgerIcon" onClick={() => setisOpen(!isOpen)}>
        &#9776; {/* Hamburger Icon */}
      </button>
    </nav>
  );
};

export default NavigationBar;
