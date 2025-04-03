import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">Data Insights Dashboard</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
