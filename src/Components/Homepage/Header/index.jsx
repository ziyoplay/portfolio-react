import React from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {

  const location = useLocation()

  const isActive = (path) => location.pathname === path
  const activeStyle = {
    textDecoration: 'line-through',
  }

  return (
    <div className='header'>
      <Link to={'/'} className='logo'>Callum Hayes</Link>
      <ul>
        <li><Link to='/projects' style={isActive('/projects') ? activeStyle : {}}>Projects</Link></li>
        <li><Link to='/resume' style={isActive('/resume') ? activeStyle : {}}>Resume</Link></li>
        <li><Link to='/about-me' style={isActive('/about-me') ? activeStyle : {}}>About me</Link></li>
        <li><Link to='/' >Book a call</Link></li>
      </ul>
    </div>
  )
}

export default Header