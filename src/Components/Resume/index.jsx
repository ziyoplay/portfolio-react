import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import Interseted from '../Homepage/Interseted'
import ResumeBanner from './ResumeBanner'
import ResumeText from './ResumeText'

const Resume = () => {
  return (
    <div>
        <Header/>
        <ResumeBanner/>
        <ResumeText/>
        <Interseted/>
        <Footer/>
    </div>
  )
}

export default Resume