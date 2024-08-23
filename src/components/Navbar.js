// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);

      // Add animation class to the target section
      targetElement.classList.add('fade-in');
      setTimeout(() => {
        targetElement.classList.remove('fade-in');
      }, 1000); // Adjust timing to match the animation duration
    }
  };

  return (
    <nav className="nav__bar">
      <div className="logo">
        
          <span className="logo__text">Kingsukh Guest House</span>
        
      </div>
      <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>
      <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
        <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
        <li><a href="#services" onClick={handleNavLinkClick}>Services</a></li>
        <li><a href="#rooms" onClick={handleNavLinkClick}>Rooms</a></li>
        <li><a href="#gallery" onClick={handleNavLinkClick}>Gallery</a></li>
        <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
      </ul>
      
      <a href="https://wa.link/at5ion">
        <button className="btn nav__btn">BOOK NOW</button>
      </a>
    </nav>
  );
};

export default Navbar;
