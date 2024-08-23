// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home__container">
      <div className="home__content">
        <h1 className="home__quote">Make Yourself At Home<br />In Our Guest House.</h1>
        <a href="https://wa.link/at5ion">
          <button className="btn home__btn">BOOK NOW</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
