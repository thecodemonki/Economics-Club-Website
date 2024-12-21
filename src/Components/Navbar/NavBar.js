import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
//import logo from '../../Assets/woss economics logo.png'; // Make sure you have a logo image in the specified path

/*
  <a href="https://ibb.co/7z7CYrN"><img src="https://i.ibb.co/6Z6wnDJ/aayan.png" alt="aayan" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/jzdZy0f/akhil.png" alt="akhil" border="0"></a>
<a href="https://ibb.co/JrvVKyB"><img src="https://i.ibb.co/xz1WDfC/kaur.jpg" alt="kaur" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/VMKJwGZ/owen.png" alt="owen" border="0"></a>
<a href="https://ibb.co/ckfFVyr"><img src="https://i.ibb.co/GnY2Nd5/stephanie.png" alt="stephanie" border="0"></a>
<a href="https://ibb.co/JyVF18V"><img src="https://i.ibb.co/txgPGng/woss-economics-logo.png" alt="woss-economics-logo" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/hfqLtV1/yashas.png" alt="yashas" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/JRLZvx5/yuehang.png" alt="yuehang" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/dW9bhQq/maxwell.png" alt="maxwell" border="0"></a>
*/

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let logo = 'https://i.ibb.co/txgPGng/woss-economics-logo.png'; 

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
          <Link to="/team" className="nav-link" onClick={toggleMenu}>Our Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;