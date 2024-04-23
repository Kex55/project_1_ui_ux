import React from 'react';
import './whatGPT4.css';
import { Feature } from '../../components'

const WhatGPT4 = () => {
  return (
    <div className='gpt4_whatgpt4 section_margin' id='whpt4'>
      <div className='gpt4_whatgpt4-feature'>
        <Feature/>
      </div>
      <div className='gpt4_whatgpt4-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt4_whatgpt4-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatGPT4