import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="custom-sidebar bg-dark text-white p-3">
      <h4 className="text-center mb-4">Categories</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/cart" className="nav-link text-white">Cart</Link>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">Electronics</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">Fashion</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">Mobiles</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;