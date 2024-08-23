// src/pages/Gallery.js
import React, { useState } from 'react';
import './Gallery.css'; // Ensure this CSS file exists and is imported

const galleryImages = [
  '/images/deluxe-room.jpg',
  '/images/standard-room.jpg',
  '/images/guest-house1.jpg',
  '/images/surroundings1.jpg',
  '/images/surroundings2.webp',
  '/images/surroundings3.webp',
  '/images/surroundings4.webp',
  '/images/surroundings5.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className="gallery__container">
      <h2>Gallery</h2>
      <p>Images of the guest house and the surrounding area...</p>
      <div className="gallery__grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery__item" onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery__image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery__overlay" onClick={handleClose}>
          <div className="gallery__popup">
            <button className="gallery__close" onClick={handleClose}>&times;</button>
            <img src={selectedImage} alt="Selected" className="gallery__popup__image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
