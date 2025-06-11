import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              Portfolio<span className="logo-accent">.</span>
            </h3>
            <p className="footer-description">
              Crafting exceptional digital experiences with modern technologies and innovative design.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4 className="links-heading">Navigation</h4>
              <ul className="links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="links-heading">Resources</h4>
              <ul className="links-list">
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="https://github.com/HarmanDhiman371" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://leetcode.com/u/Harmanjeet_singh/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="links-heading">Connect</h4>
              <div className="social-links">
                <a href="https://github.com/HarmanDhiman371" aria-label="GitHub">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/harmandhiman776/" aria-label="LinkedIn">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://leetcode.com/u/Harmanjeet_singh/" aria-label="Leetcode">
                  {/* <FaLeetCode className="social-icon" /> */}
                </a>
                <a href="harmandhiman6776@gmail.com" aria-label="Email">
                  <FaEnvelope className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Harmanjeet Singh. All rights reserved.
          </p>
          <div className="made-with">
            <span>Made with</span>
            <FaHeart className="heart-icon" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;