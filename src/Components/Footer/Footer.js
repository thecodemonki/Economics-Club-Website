import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: contact@wosseconomics.hdsb.ca</p>
          <p>Phone: +1 (416) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/wosseconomics" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Woss Economics. All rights reserved.</p>
        <p>Made with <span className="heart">&lt;3</span> by realjs</p>
      </div>
    </footer>
  );
};

export default Footer;