import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen ? "true" : "false"}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu} exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointments"
              onClick={toggleMenu}
              activeClassName="active"
            >
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu} activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
