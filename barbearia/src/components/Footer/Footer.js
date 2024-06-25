import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">Home</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>&copy; 2024 Caio & Carlos. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
