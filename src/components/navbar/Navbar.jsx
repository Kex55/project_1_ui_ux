import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='gpt4_navbar'>
      <div className='gpt4_navbar-links'>
        <div className='gpt4_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar