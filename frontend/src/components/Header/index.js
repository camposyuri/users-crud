import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          CRUD
        </Link>
        <div className="menu-icon"></div>
        <ul>
          <li className="nav-item">
            <Link to="/users" className="nav-links">
              Users
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
