import React from 'react';
import '../styles/HeroSection.css'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-decorations">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        
        <h1 className="hero-title">Hello, I'm <span className="highlight">Harman</span></h1>
        <h2 className="hero-subtitle">Frontend Developer | UI/UX Designer</h2>
        <p className="hero-description">
          I create beautiful, responsive websites and applications with modern technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        {/* Replace with your actual image */}
        <img 
          src="/profile.jpg" 
          alt="Your Name" 
          className="avatar-image" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/400";
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;