import React from 'react';
import './Products.css';
import ip from '../images/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg';
import s23 from '../images/Samsung S23 Ultra.webp';
import xper from '../images/Sony-Xperia-1-V-Price-in-India-.jpg';
import op11 from '../images/oneplus-11_1.jpg';
import mi11 from '../images/xiaomi-mi-11-ultra.jpg';
import pix from '../images/Pixel 8.jpg';
import rog from '../images/asus-rog-phone-7.jpg';
import red from '../images/red_magic_9_pro_02.jpg';

const mobilesData = [
  {
    id: 1,
    name: 'iPhone 15',
    description: '16GB RAM - 256GB ROM',
    image:ip,
    price: 'Rs.79,990',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    description: '12GB RAM - 256GB ROM',
    image: s23,
    price: 'Rs.124,999',
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    description: '8GB RAM - 128GB ROM',
    image: pix,
    price: 'Rs.75,999',
  },
  {
    id: 4,
    name: 'OnePlus 11',
    description: '8GB RAM - 128GB ROM',
    image: op11,
    price: 'Rs 56,999',
  },
  {
    id: 5,
    name: 'Xiaomi Mi 11',
    description: '12GB RAM - 256GB ROM',
    image: mi11,
    price: '69,999',
  },
  {
    id: 6,
    name: 'Sony Xperia 1 V',
    description: '12GB RAM - 256GB ROM',
    image: xper,
    price: 'Rs 114,790',
  },
  {
    id: 7,
    name: 'ASUS ROG Phone 7',
    description: '12GB RAM - 256GB ROM',
    image: rog,
    price: 'Rs 74,990',
  },
  {
    id: 8,
    name: 'Red Magic 9 Pro',
    description: '12GB RAM - 256GB ROM',
    image: red,
    price: 'Rs.49,990',
  },
];

const MobileProducts = () => {
  return (
    <div className="mobile-container">
      {mobilesData.map((mobile) => (
        <div key={mobile.id} className="mobile-item">
          <img src={mobile.image} />
          <div className="mobile-details">
            <h3 class="hh3">{mobile.name}</h3>
            <p class="pp3">{mobile.description}</p>
            <p className="price">{mobile.price}</p>
            <button class="df">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileProducts;

