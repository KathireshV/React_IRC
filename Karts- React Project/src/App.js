import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ProductPage from './components/ProductList';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Login from './components/Login';
import Products from './components/pages/Products';
import MobileProducts from './components/pages/Products';

function App() {
  const shouldShowNavbar = (pathname) => !pathname.includes('/sign-up');

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route
          path='/home'
          element={
            <>
              {shouldShowNavbar(window.location.pathname) && <Navbar />}
              <Home />
            </>
          }
        />
        <Route path='/services' element={
        <>
          {shouldShowNavbar(window.location.pathname) && <Navbar />}
          <Services/>
        </>
      } />
        <Route path='/products' element={
        <>
        {shouldShowNavbar(window.location.pathname) && <Navbar />}
        <ProductPage className="services-background" />
        </>
        } />
        
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products/mobiles' element={
        <>
        {shouldShowNavbar(window.location.pathname) && <Navbar />}
        <MobileProducts/>
      </>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
