import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const ResumeBanner = () => {
  return (
    <div className='resumeBanner container'>
        <h1>Graduation Behind. <br /> Dedication Ahead.</h1>
        <p>Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototypFresh out of university with a zeal for UX/UI design, I'm keen to use my skills to craft engaging mobile app interfaces. I seek a role that challenges me and lets me contribute to exciting projects, nurturing my growth in design.e.</p>
        <Link to="/"> Download Resume as PDF</Link>
    </div>
  )
}

export default ResumeBanner