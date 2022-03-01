import React from 'react';
import Navbar from './Navbar';
import Update from './Update';
import Slider from './Slider';
import Newsletter from './Newsletter';

const Homepage = () => {
  return <div>
      <Update />
      <Navbar />
      <Slider />
      <Newsletter />
  </div>;
};

export default Homepage;
