import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={() => handleLinkClick("home")}>
            <span className="logo-text">Harman</span>
            <span className="logo-dot"></span>
          </Link>
        </div>

        <div className="nav-links-container">
          <ul className="nav-links">
            {[
              { path: "/", name: "Home", id: "home" },
              { path: "/projects", name: "Projects", id: "projects" },
              { path: "/education", name: "Education", id: "education" },
              { path: "/about", name: "About", id: "about" },
            ].map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`nav-link ${activeLink === link.id ? "active" : ""}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.name}
                  <span className="link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="/contact"
              className="btn-contact"
              onClick={() => handleLinkClick("contact")}
            >
              <FaPaperPlane className="contact-icon" />
              Contact Me
            </a>
          </div>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;