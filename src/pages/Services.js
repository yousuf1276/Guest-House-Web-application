// src/pages/Services.js
import React from 'react';
import './Services.css'; // Make sure to include this

const services = [
  { title: 'High Class Security', icon: '🔒' },
  { title: '24 Hours Room Service', icon: '🕒' },
  { title: 'Restaurant', icon: '🍽️' },
  { title: 'Tourist Guide Support', icon: '🗺️' }
];

const Services = () => {
  return (
    <div id="services" className="services__container">
      <h2>Our Services</h2>
      <div className="services__list">
        {services.map((service, index) => (
          <div key={index} className="service__item">
            <span className="service__icon">{service.icon}</span>
            <p className="service__title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
