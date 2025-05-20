import React from "react";
import { Link } from "react-router-dom";
import "./lawNavCSS.css";

function NavItem({ text, to, onClick }) {
  if (onClick) {
    return (
      <div className="nav-item" onClick={onClick}>
        {text}
      </div>
    );
  }

  return (
    <Link to={to} className="nav-item">
      {text}
    </Link>
  );
}

function LawStartNav({ openSignUpModal }) {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
       {/* <img
          loading="lazy"
          src="/logo.png" // Replace with your real logo path
          alt="LawStart Logo"
          className="navbar-logo-img"
        />*/}
        <div className="navbar-title">LexPlatform</div>
      </div>

      {/* Navigation Items */}
      <nav className="navbar-links">
        <NavItem text="Home" to="/" />
        <NavItem text="Log In" to="/login" />
        <NavItem text="Contact Us" to="/contact" />
      </nav>

      {/* Optional CTA */}
      <button
        className="navbar-button"
        onClick={openSignUpModal}
      >
        Get Started
      </button>
    </div>
  );
}

export default LawStartNav;
