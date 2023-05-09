import React from 'react';
import NextJs from '../../assets/undraw_next_js_-8-g5m (1).svg';
import { useState, useEffect } from 'react';
import Libraries from '../../assets/undraw_javascript_frameworks_-8-qpc.svg';
function Hero() {
  let images = [NextJs, Libraries];
  let Texts = [
    'Power your web presence with WebT',
    'Experienced team of developers with a proven track record of success'
  ];
  let [currentImage, setCurrentImage] = useState(0);
  let [currentText, SetCurrentText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
      SetCurrentText(prevText => (prevText + 1) % Texts.length);
    }, 10000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="Hero">
      <div className="left-container">
        {Texts.map((text, index) => (
          <h1 className={index === currentText ? 'active' : ''} key={index}>
            {text}
          </h1>
        ))}
      </div>
      <div className="right-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slider"
            className={index === currentImage ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
