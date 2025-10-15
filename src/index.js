import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import ProductDetail from './Components/ProjectDetail';
import Resume from './Components/Resume';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/projects-detail" element={<><ProductDetail/></>} />
      <Route path="/resume" element={<><Resume/></>} />
      <Route path="/about-me" element={<><About/></>} />
    </Routes>
  </BrowserRouter>
);

