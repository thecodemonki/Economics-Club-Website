import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  let logo = 'https://i.ibb.co/txgPGng/woss-economics-logo.png';

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources" className="nav-link" onClick={closeMenu}>Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link" onClick={closeMenu}>Our Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;