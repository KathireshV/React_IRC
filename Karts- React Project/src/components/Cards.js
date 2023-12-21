import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import imgPath from './images/06._SS600_QL85_.jpg';
import img2 from './images/Samsungdfdf.jpg';
import img1 from './images/modern-dynamic-instagram-template_125755-422.avif';
import img3 from './images/halos-Backpacks._SS300_QL85_FMpng_.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Deals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imgPath}
              text='Best Smartphones starting at just Rs.8,999'
              label='DEAL 50% OFF'
              path='/home'
            /> 
            <CardItem
              src={img1}
              text='Travel around with the Latest Trends'
              label='UPTO 70% OFF'
              path='/home'
            />
            <CardItem
              src={img2}
              text='HDR TVs starting at Rs.13,499'
              label=' UPTO 48% OFF'
              path='/home'
            />
            <CardItem
              src={img3}
              text='Backpacks at just Rs.300'
              label='UPTO 70% OFF'
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
