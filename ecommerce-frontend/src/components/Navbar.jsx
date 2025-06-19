import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, toggleTheme, darkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <button className="btn btn-outline-light me-3" onClick={toggleSidebar}>
        ☰
      </button>
      <Link className="navbar-brand" to="/">
        ShopX
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-sm btn-outline-light ms-3" onClick={toggleTheme}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;