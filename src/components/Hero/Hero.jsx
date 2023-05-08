import React from 'react';
import NextJs from '../../assets/undraw_next_js_-8-g5m (1).svg';
function Hero() {
  return (
    <div className="Hero">
      <div className="left-container">
        <h1 className="headding">
          Power Up Your Web Presence with{' '}
          <span className="headerSpan">
            Web<span>T</span>
          </span>
        </h1>
      </div>
      <div className="right-container">
        <img src={NextJs} alt="" />
      </div>
    </div>
  );
}

export default Hero;
