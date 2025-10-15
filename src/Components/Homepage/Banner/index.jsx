import React from 'react'
import './style.css'
const Banner = () => {
  return (
    <div className='banner container'>
        <img src="/images/Image.png" alt="" />
        <h1>I'm Callum Hayes, a UX/UI designer specialising in creating sleek, user-friendly mobile apps.</h1>
        <div className="icons">
            <i class="bi bi-dribbble"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-behance"></i>
            <i class="bi bi-twitter-x"></i>
        </div>
    </div>
  )
}

export default Banner