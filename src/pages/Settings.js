import React, { useState, useEffect } from "react";
import "../App.css"; // Using your existing App.css for theme styles

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Theme Toggle */}
      <div className="settings-option">
        <label>Theme:</label>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <p>More settings coming soon...</p>
    </div>
  );
};

export default Settings;
