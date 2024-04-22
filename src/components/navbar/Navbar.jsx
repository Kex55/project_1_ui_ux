import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='gpt4_navbar'>
      <div className='gpt4_navbar-links'>
        <div className='gpt4_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt4_navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt4">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className='gpt4_navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar