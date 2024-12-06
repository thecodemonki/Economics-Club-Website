import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Assets/woss economics logo.png'; // Make sure you have a logo image in the specified path

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources" className="nav-link" onClick={toggleMenu}>Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;