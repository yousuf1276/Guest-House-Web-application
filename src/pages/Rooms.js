// src/pages/Rooms.js
import React from 'react';
import './Rooms.css'; // Make sure this CSS file is correctly imported

const rooms = [
  {
    title: 'Deluxe Room',
    description: 'Our Deluxe Room offers a spacious and luxurious stay with modern amenities.',
    image: '/images/deluxe-room.jpg', // Path to the image in the public directory
    price: '$150 per night' // Price for the room
  },
  {
    title: 'Standard Room',
    description: 'Enjoy comfort and convenience in our Standard Room with all the essential amenities.',
    image: '/images/standard-room.jpg', // Path to the image in the public directory
    price: '$100 per night' // Price for the room
  },
];

const Rooms = () => {
  return (
    <div id="rooms" className="rooms__container">
      <h2>Our Rooms</h2>
      <div className="rooms__list">
        {rooms.map((room, index) => (
          <div key={index} className="room__card">
            <img src={room.image} alt={room.title} className="room__image" />
            <div className="room__details">
              <h3 className="room__title">{room.title}</h3>
              <p className="room__description">{room.description}</p>
              <p className="room__price">{room.price}</p> {/* Display the price */}
              <a href="https://wa.link/at5ion">
                <button className="btn room__btn">BOOK NOW</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
