import React from 'react'
import './style.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="top container">
                <div className="left">
                    <h3>Callum Hayes</h3>
                    <ul>
                        <li>Projects</li>
                        <li>Resume</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="icons">
                        <i class="bi bi-dribbble"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-behance"></i>
                        <i class="bi bi-twitter-x"></i>
                    </div>
                </div>
            </div>
            <div className="bottom container">
                <p>Copyright 2024 by Callum Hayes</p>
            </div>
        </div>
    )
}

export default Footer