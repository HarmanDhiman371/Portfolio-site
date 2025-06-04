import { useState, useEffect } from "react";
import "../styles/Body.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Body = () => {
  const firstSectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const decoratorRef = useRef(null);
  const inner1Ref = useRef(null);
  const inner2Ref = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    // Initial animations
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1"
      )
      .fromTo(
        decoratorRef.current,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left center" },
        "-=0.8"
      )
      .fromTo(
        inner1Ref.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.8"
      )
      .fromTo(
        inner2Ref.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.8"
      );

    // Parallax effect on scroll
    gsap.to(inner1Ref.current, {
      y: -50,
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(inner2Ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const [activeProject, setActiveProject] = useState(null);
  const [showIframe, setShowIframe] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      name: "JOURNIO",
      url: "https://journioo-travelling.netlify.app/",
      description:
        "A modern travel journal application that helps users document their adventures with photos, locations, and personal notes. Built with React and Firebase for real-time updates.",
      tech: ["React", "Firebase", "Mapbox GL", "Tailwind CSS"],
      features: [
        "User authentication",
        "Real-time updates",
        "Geolocation tagging",
        "Responsive design",
      ],
    },
    {
      name: "SHOESTACK",
      url: "https://shoe-stack-ez52.vercel.app/",
      description:
        "An e-commerce platform specializing in premium footwear. Features include product filtering, cart management, and a seamless checkout process.",
      tech: ["Next.js", "Stripe API", "Redux", "SCSS"],
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "User reviews",
      ],
    },
    {
      name: "E-STORE",
      url: "https://hilarious-truffle-e9c5ef.netlify.app/",
      description:
        "A minimalist electronics store with clean UI and smooth animations. Focuses on delivering exceptional user experience with intuitive navigation.",
      tech: ["React", "Framer Motion", "CSS Modules", "Commerce.js"],
      features: [
        "Product filtering",
        "Wishlist",
        "Dark mode",
        "Performance optimized",
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowIframe(true);
  };

  return (
    <div className="Body">
      <section className="first" ref={firstSectionRef}>
        <div className="content-wrapper">
          <div className="text-content">
            <h1 ref={headingRef}>
              Crafting <span className="highlight">Digital</span>
              <br />
              Experiences <span className="highlight">That</span>
              <br />
              <span className="rotate-words">
                <span className="word">Inspire</span>
                <span className="word">Engage</span>
                <span className="word">Convert</span>
              </span>
            </h1>
            <p ref={subheadingRef}>
              I'm a passionate frontend developer specializing in React
              ecosystems, creating immersive web experiences with cutting-edge
              technologies and pixel-perfect design implementation.
            </p>
            <div className="decorator-line" ref={decoratorRef}></div>
          </div>
        </div>

        <div className="inner1" ref={inner1Ref}>
          <div className="gradient-circle"></div>
          <div className="floating-shapes">
            <div className="shape triangle"></div>
            <div className="shape circle"></div>
            <div className="shape square"></div>
          </div>
        </div>
        <div className="inner2" ref={inner2Ref}>
          <div className="code-snippet">
          <pre>
  {`const Harmanjeet = {
  name: 'Harmanjeet Singh',
  title: 'Frontend Engineer',
  location: 'Punjab, India',
  skills: {
    languages: ['JavaScript', 'HTML5', 'CSS3'],
    frameworks: ['React', 'Next.js', 'Express'],
    tools: ['Git', 'Webpack', 'Figma']
  },
  traits: [
    'Detail-oriented',
    'Passionate about clean code',
    'User-focused development'
  ]
};`}
</pre>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="second-inner1">
          <div className="mobile-device">
            <div className="dynamic-island"></div>
            <div className="screen-container">
              {!showIframe ? (
                <div className="projects-list">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`project-card ${
                        hoveredProject === index ? "hovered" : ""
                      }`}
                      onClick={() => handleProjectClick(project)}
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                      style={{
                        "--delay": `${index * 0.1}s`,
                        "--hue": `${index * 120}`,
                      }}
                    >
                      <div className="project-glow"></div>
                      <h1>{project.name}</h1>
                      <div className="project-tech">
                        {project.tech.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="website-frame">
                  <iframe
                    src={activeProject.url}
                    title="Project Preview"
                    className="project-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="back-button"
                    onClick={() => setShowIframe(false)}
                  >
                    <span className="button-back-icon">←</span>
                    <span className="button-text">Back to Projects</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="second-inner2">
          <div className="project-info-container">
            {!showIframe ? (
              <div className="projects-intro">
                <h2 className="section-title">
                  <span className="title-decorator"></span>
                  Featured Projects
                  <span className="title-decorator"></span>
                </h2>
                <p className="section-subtitle">Select a project to explore</p>
                <div className="tech-bubbles">
                  {[
                    "React",
                    "Next.js",
                    "Firebase",
                    "Framer Motion",
                    "CSS3",
                    "Node.js",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="tech-bubble"
                      style={{ "--delay": `${i * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="project-details">
                <h2 className="project-title">
                  <span className="title-underline">{activeProject.name}</span>
                </h2>
                <p className="project-description">
                  {activeProject.description}
                </p>

                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul>
                    {activeProject.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-stack">
                  <h3>Technology Stack</h3>
                  <div className="tech-stack-items">
                    {activeProject.tech.map((tech, i) => (
                      <div key={i} className="tech-stack-item">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {!isMobile && (
                  <button
                    className="visit-button"
                    onClick={() => window.open(activeProject.url, "_blank")}
                  >
                    Visit Live Site
                    <span className="button-arrow">→</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
