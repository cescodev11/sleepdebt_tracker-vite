import React from "react";
import NavigationBar from "../NavyFolder/NavigationBar";
import "./Home.css";
const Home = () => {
  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const fontSize = Math.floor(Math.random() * 3 + 1); // Random font size between 1rem and 3rem
    const duration = Math.random() * 10 + 5; // Random animation duration between 5s and 15s
    return {
      top: `${top}%`,
      left: `${left}%`,
      fontSize: `${fontSize}rem`,
      animationDuration: `${duration}s`,
    };
  };

  return (
    <div className="home">
      <NavigationBar />
      <div className="split-screen">
        <div className="left-side">{/* <h1>Welcome to My Website</h1> */}</div>
        <div className="right-side">{/* <h1>Welcome to My Website</h1> */}</div>
        <div className="center-content">
          <button className="track-sleep-button">Track Sleep</button>
        </div>
        <div className="sleeping-zs">
          {Array.from({ length: 50 }).map((_, index) => (
            <span
              key={index}
              className="sleeping-z"
              style={generateRandomPosition()}
            >
              Z
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
