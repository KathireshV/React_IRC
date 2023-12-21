import React from 'react';
import { ButtonLogOut } from './ButtonLogOut';
import { Link ,useNavigate} from 'react-router-dom';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import './Navbar.css';

function Navbar() {
  const navi=useNavigate();

  const handlelogout=()=>{
    navi('/');
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo'>
            KARTS
            <BikeScooterIcon/>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/home' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links'>
                Services
              </Link>
            </li>
          </ul>
          <ButtonLogOut buttonStyle='btn--outline' >LOGOUT</ButtonLogOut>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
