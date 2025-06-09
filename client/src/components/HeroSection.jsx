// import React from 'react';
// import '../styles/HeroSection.css'; // Adjust the path as necessary

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <div className="hero-decorations">
//           <div className="circle circle-1"></div>
//           <div className="circle circle-2"></div>
//           <div className="circle circle-3"></div>
//         </div>
        
//         <h1 className="hero-title typing-effect">Hello, I'm <span className="highlight">Harman</span></h1>
//         <h2 className="hero-subtitle">Frontend Developer | UI/UX Designer</h2>
//         <p className="hero-description">
//           I create beautiful, responsive websites and applications with modern technologies.
//         </p>
//         <div className="hero-buttons">
//           <a href="#projects" className="btn btn-primary">View My Work</a>
//           <a href="#contact" className="btn btn-secondary">Contact Me</a>
//         </div>
//       </div>
//       <div className="hero-image">
//         {/* Replace with your actual image */}
//         <img 
//           src="/profile.jpg" 
//           alt="Your Name" 
//           className="avatar-image" 
//           onError={(e) => {
//             e.target.onerror = null; 
//             e.target.src = "/main.png";
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-decorations">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="typing-effect">Hello, I'm</span>
            <span className="highlight-name"> Harman</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="role-animation">Frontend Developer</span>
            <span className="separator"> | </span>
            <span className="role-animation">UI/UX Designer</span>
          </h2>
          <p className="hero-description">
            Crafting premium digital experiences with cutting-edge technologies and elegant designs.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99214C21.75 7.77464 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9684 11.5439 13.9684 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77464 2.25 6.99214V6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-frame">
            <img 
              src="/profile.jpg" 
              alt="Harman" 
              className="avatar-image" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/main.png";
              }}
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

