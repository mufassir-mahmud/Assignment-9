import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container">
        {/* <a className="navbar-brand" href="#">
          Quiz Mania
        </a> */}
        <img src={logo}></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
