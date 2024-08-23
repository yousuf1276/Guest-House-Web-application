// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;