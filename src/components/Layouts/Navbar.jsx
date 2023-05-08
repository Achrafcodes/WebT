/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navbar() {
  return (
    <div className="Nav">
      <h1 className="navlogo">
        Web<span>T</span>
      </h1>
      <div className="NavLinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <button className="Login-button ">LogIn</button>
      </div>
    </div>
  );
}

export default Navbar;
