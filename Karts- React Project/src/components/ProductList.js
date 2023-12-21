import React from "react";
import { useNavigate,Link } from "react-router-dom";
import './ProductList.css';
import ing from './images/fast-fashion.jpg';
import ing1 from './images/OnePlus_Waffle.jpg'
import ing2 from './images/bosch-home-appliances.jpg';
import ing3 from './images/Skybagsssssss.webp';
import Navbar from "./Navbar";
const ProductList= () =>{
  
  return (
    <div>
    <div className="product-container">
      <img src={ing1} alt="Product Image 1" className="product-image" />
      <div className="product-details">
      <h2>Mobiles And Accessories</h2>
      <br/>
        <br/>
        <p>
        Discover the next level of connectivity and convenience with our latest Mobiles. 
        Immerse yourself in a world of innovation, boasting sleek designs and powerful features. 
        Enjoy crystal-clear visuals on vibrant displays, seamless multitasking with high-performance processors, 
        and capture every moment with advanced camera systems. With all-day battery life and secure features like facial recognition,
         Mobiles are designed to elevate your mobile experience. Stay connected, capture memories, and embrace the future of mobile technology.
          Order now and redefine the way you connect and communicate with Mobiles.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button"><Link to='./mobiles' className="kk">Buy Now</Link></button>
      </div>
    </div>
    <div className="product-container">
      <img src={ing} alt="Product Image 1" className="product-image" />
      <div className="product-details">
      <h2>Clothes And Fashion</h2>
      <br/>
        <br/>
        <p>
            Step into style with our exclusive collection of fashion-forward clothing. Elevate your wardrobe with the latest 
            trends and timeless classics designed to make you look and feel your best.
             From chic dresses to comfortable casual wear, we offer a diverse range that caters to every occasion.
            Immerse yourself in quality fabrics, exquisite craftsmanship, and attention to detail that define our clothing line. <br/>
            Whether you're dressing up for a special event or embracing laid-back elegance, our collection has something for everyone
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button"><Link to='./mobiles' className="kk">Buy Now</Link></button>
      </div>
    </div>
    <div className="product-container">
      <img src={ing2} alt="Product Image 1" className="product-image" />
      <div className="product-details">
      <h2>TV and Home Appliances </h2>
      <br/>
        <br/>
        <p>
            Transform your home into a haven of comfort and convenience with our exceptional range of home electronics. 
            From cutting-edge heaters to innovative appliances, we bring you the latest in technology to enhance your living space.
            Experience warmth in every room with our energy-efficient heaters designed to create a cozy ambiance during chilly evenings. 
            Our appliances are not just functional but redefine efficiency and style. Embrace a smart and connected home with our range of electronic solutions that 
            bring modern living to the next level.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button" ><Link to='./mobiles' className="kk">Buy Now</Link></button>
      </div>
    </div>
    <div className="product-container">
      <img src={ing3} alt="Product Image 1" className="product-image" />
      <div className="product-details">
      <h2>Bags And Luggage</h2>
      <br/>
        <br/>
        <p>
            Embark on your journey in style with our exquisite collection of bags and luggage. 
            Her, we understand that every adventure demands the perfect companion, and our range is 
            designed to meet the diverse needs of modern travelers.From chic handbags to spacious backpacks, 
            our collection blends fashion and functionality seamlessly. Crafted from high-quality materials, 
            each bag is a testament to durability and timeless design. Whether you're jet-setting around the 
            globe or navigating your daily commute, our bags cater to every lifestyle. Explore our collection 
            today and embark on your next adventure in unmatched sophistication.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button"><Link to='./mobiles' className="kk">Buy Now</Link></button>
      </div>
    </div>
    </div>
  );
}
export default ProductList;