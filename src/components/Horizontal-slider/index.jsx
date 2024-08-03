import React from 'react';
import './index.css';
import image1 from "../../assets/About/1.png";
import image2 from "../../assets/About/2.png";
import image3 from "../../assets/About/3.png";

const Index = () => {
  return (
    <div className="scroll-container">
      <div className="wrapper">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
      </div>
    </div>
  );
};

export default Index;
