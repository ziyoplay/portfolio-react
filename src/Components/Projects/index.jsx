import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import './style.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <Header/>
        
        <section className='projects container'>
            <h2>Selected projects</h2>
            <p>Selected projects showcasing thoughtful design solutions in education, fitness, and social networking.</p>
            <div className="wrap">
                <Link to='/projects-detail' className="card">
                    <img src="./images/image 89 (1).png" alt="Fitness tracker app mockup" />
                    <h3>Redesign project: fitness tracker App Revamp</h3>
                    <p>Elevating the user experience of a renowned fitness tracker app through a strategic.</p>
                </Link>
                <Link to='/projects-detail' className="card">
                    <img src="./images/image 89 (2).png" alt="Social dining app mockup" />
                    <h3>Internship project: social dining app design</h3>
                    <p>Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.</p>
                </Link>
                <Link to='/projects-detail' className="card card-center">
                    <img src="./images/Image (3).png" alt="Educational app mockup" />
                    <h3>Redesign project: fitness tracker App Revamp</h3>
                    <p>Revolutionizing the educational ecosystem with a mobile app designed to enhance interactive learning and peer collaboration.</p>
                </Link>
            </div>
        </section>

        <section className='other-projects container'>
            <h2>Other projects</h2>
            <div className="other-wrap">
                <Link to='/projects-detail' className="other-card">
                    <img src="./images/image 89 (1).png" alt="Fitness tracker app mockup" />
                    <h3>Redesign project: fitness tracker App Revamp</h3>
                    <p>Elevating the user experience of a renowned fitness tracker app through a strategic.</p>
                </Link>
                <Link to='/projects-detail' className="other-card">
                    <img src="./images/Image (3).png" alt="Educational app mockup" />
                    <h3>Graduation project: collaborative learning app design</h3>
                    <p>Revolutionizing the educational ecosystem with a mobile app designed to enhance interactive learning and peer collaboration.</p>
                </Link>
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Projects