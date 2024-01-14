import React from 'react';
import '../css/preloader.css'; // Create a CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="loader">
        <div className="logo"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Preloader;
