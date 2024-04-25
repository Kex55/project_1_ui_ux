import React from 'react';
import './blog.css';
import { Article } from '../../components'

const Blog = () => {
  return (
    <div className='gpt4_blog section_padding'>
      <div className='gpt4_blog-heading'>
        <h1 className='gradient_text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt4_blog-container'>
        <div className='gpt4_blog-container_groupA'>
          <Article />
        </div>
        <div className='gpt4_blog-container_groupB'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog