import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const message = "Welcome to Data Insights Dashboard";
  const speed = 100; // Adjust typing speed (in ms)

  useEffect(() => {
    let index = 0;
    setText(""); // Ensure text is cleared on re-render
    const interval = setInterval(() => {
      setText((prevText) => message.slice(0, index + 1)); // Use slice to avoid state update issues
      index++;
      if (index === message.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []); // Runs only once on mount

  return (
    <div className="home-container">
      <h1 className="fade-in typing-text">{text}</h1>
      <p className="subheading fade-in">Analyze and visualize your data with ease.</p>
    </div>
  );
};

export default Home;
