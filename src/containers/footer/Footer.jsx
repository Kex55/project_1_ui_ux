import React from 'react';
import './footer.css';
import gptLogo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt4_footer section_padding'>
      <div className='gpt4_footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt4_footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt4_footer-links'>
        <div className='gpt4_footer-links_logo'>
          <img src={gptLogo} alt="logo" />
          <p>Stenchwoord K55 134 DK BadadaBing, All Rights Reserved</p>

          <div className='gpt4_footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt4_footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt4_footer-links_div'>
            <h4>Get in touch</h4>
            <p>Stenchwoord K55 134 DK BadadaBing</p>
            <p>021-341246</p>
            <p>info@payme.net</p>
          </div>

          <div className='gpt4_footer-copyright'>
            <p>© 2024 GPT-4. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer