import React from 'react'
import './style.css'
const Selected = () => {
    return (
        <div className='selected container'>
            <h2>Selected projects</h2>
            <p>Selected projects showcasing thoughtful design solutions in education, fitness, and social networking.</p>
            <div className="wrap">
                <div className="card">
                    <img src="./images/image 89 (1).png" alt="Fitness tracker app mockup" />
                    <h3>Redesign project: fitness tracker App Revamp</h3>
                    <p>Elevating the user experience of a renowned fitness tracker app through a strategic.</p>
                </div>
                <div className="card">
                    <img src="./images/image 89 (2).png" alt="Social dining app mockup" />
                    <h3>Internship project: social dining app design</h3>
                    <p>Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.</p>
                </div>

            </div>
        </div>
    )
}

export default Selected