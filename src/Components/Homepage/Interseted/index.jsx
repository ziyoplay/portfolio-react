import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Interseted = () => {
  return (
    <div className='interseted '>
        <div className="wrap container">
            <h2>Interested in connecting?</h2>
            <p>Let’s talk projects, collaborations, or anything design!</p>
            <Link to='/'>Book a call</Link>
        </div>
    </div>
  )
}

export default Interseted