import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Join us!</h2>
          <p>Classroom Code: ujuaf4m</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://github.com/aayanrahman/WOSS-Economics-Club-Website" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/wosseconomics" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://discord.gg/Cf3XQS7Kc7" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="footer-icon" />
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