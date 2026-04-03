import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Hema Beauty</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/reviews" onClick={closeMenu}>Reviews</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;