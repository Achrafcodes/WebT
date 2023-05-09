import React from 'react';
import dummy from '../../assets/undraw_personal_email_re_4lx7.svg';
import Carousel from './Carousel';
let Slides = [dummy, dummy, dummy];
function About() {
  return (
    <div className="About">
      <div className="max-w-lg">
        <Carousel />
      </div>
    </div>
  );
}

export default About;
