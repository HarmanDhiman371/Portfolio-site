import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";

const ProjectDetails = ({ project, isMobile }) => {
  useEffect(() => {
    gsap.from(".project-details > *", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, [project]);

  return (
    <div className="project-details">
      <motion.h2 
        className="project-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="title-underline">{project.name}</span>
      </motion.h2>
      
      <motion.p 
        className="project-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.description}
      </motion.p>

      <motion.div 
        className="project-features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3>Key Features</h3>
        <ul>
          {project.features.map((feature, i) => (
            <li key={i}>
              <span className="feature-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="project-tech-stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3>Technology Stack</h3>
        <div className="tech-stack-items">
          {project.tech.map((tech, i) => (
            <motion.div 
              key={i} 
              className="tech-stack-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {!isMobile && (
        <motion.button
          className="visit-button"
          onClick={() => window.open(project.url, "_blank")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ backgroundColor: project.color }}
        >
          Visit Live Site
          <span className="button-arrow">→</span>
        </motion.button>
      )}
    </div>
  );
};

export default ProjectDetails;