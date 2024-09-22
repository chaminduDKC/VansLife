import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navLogo" to='/'>
      <h1>#VANLIFE</h1>
      </Link>
      <div className="links">
      <ul>
      <Link to="/" className="link">
        <li>Home</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
