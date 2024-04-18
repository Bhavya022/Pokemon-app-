// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Pokémon App</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/search" className="nav-link">Pokemon</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
