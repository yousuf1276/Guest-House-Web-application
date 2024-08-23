// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Ensure this CSS file exists and is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="contact__container">
      <div className="contact__form__container">
        <form className="contact__form">
          <h2>Contact Us</h2>
          <div className="form__group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form__group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form__group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn contact__btn">Send</button>
        </form>
      </div>
      <div className="contact__info__container">
        <h3>Contact Info</h3>
        <p><FontAwesomeIcon icon={faMapPin} /> Beside Barshal Water Tank,<br />
           Manpur, Barhanti,<br />
           West Bengal 723156
        </p>
        <p><FontAwesomeIcon icon={faEnvelope} /> kkghosh0099@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> +91 9007062180</p>
        <div className="contact__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" className="social__icon" />
          </a>
          <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="social__icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" className="social__icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.png" alt="YouTube" className="social__icon" />
          </a>
        </div>
        <div className="contact__map">
          {/* Replace the src below with the actual map URL or embed code */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5042923747733!2d86.85973709999999!3d23.5862406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1724157910164!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
