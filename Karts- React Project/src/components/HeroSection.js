import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const nav=useNavigate();

  const handleShop=()=>{
    nav('./products');
  }
  return (
    <div className='hero-container'>
      <h2>INDULGE IN THE ART OF SHOPPING</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleShop}
          sc={'./products'}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
