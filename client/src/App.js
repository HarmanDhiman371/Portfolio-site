import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Projects from './components/ProjectDetails';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Education from './components/Education';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
