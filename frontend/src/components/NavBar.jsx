import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">&nbsp;</div> {/* Logo box kept, text removed */}

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;