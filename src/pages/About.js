// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about__container">
      <div className="about__content">
        <h2>About Us</h2>
        <p>
          Welcome to Kingsukh Guest House, your home away from home. We are dedicated to providing
          our guests with a comfortable and memorable stay, offering a range of amenities to make
          your experience exceptional. Whether you're here for a short visit or an extended stay,
          you'll find everything you need right here.
        </p>
        <div className="about__contact">
          <p>
            <b>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</b>
          </p>
          <p>
            <b>Contact us: +91 9007062180</b>
          </p>
        </div>
      </div>
      <div className="about__image">
        <img src="/images/about.jpg" alt="About Kingsukh Guest House" />
      </div>
    </div>
  );
};

export default About;
