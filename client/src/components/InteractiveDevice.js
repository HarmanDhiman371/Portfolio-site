// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";

// const InteractiveDevice = ({ projects, activeProject, showIframe, onProjectClick, onBackClick }) => {
//   const deviceRef = useRef(null);
//   const [hoveredProject, setHoveredProject] = useState(null);
  
//   useEffect(() => {
//     if (showIframe) {
//       gsap.to(deviceRef.current, {
//         rotateY: 15,
//         duration: 1,
//         ease: "power3.out"
//       });
//     } else {
//       gsap.to(deviceRef.current, {
//         rotateY: 0,
//         duration: 1,
//         ease: "power3.out"
//       });
//     }
//   }, [showIframe]);

//   useEffect(() => {
//     const cards = gsap.utils.toArray(".project-card");
    
//     cards.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 30,
//         duration: 0.6,
//         delay: i * 0.1,
//         ease: "back.out"
//       });
//     });
//   }, []);

//   return (
//     <div className="interactive-device-container">
//       <div className="device" ref={deviceRef}>
//         <div className="device-screen">
//           {!showIframe ? (
//             <div className="projects-list">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   className={`project-card ${hoveredProject === index ? "hovered" : ""}`}
//                   onClick={() => onProjectClick(project)}
//                   onMouseEnter={() => setHoveredProject(index)}
//                   onMouseLeave={() => setHoveredProject(null)}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   style={{
//                     "--project-color": project.color,
//                     "--delay": `${index * 0.1}s`
//                   }}
//                 >
//                   <div className="project-glow"></div>
//                   <h3>{project.name}</h3>
//                   <div className="project-tech">
//                     {project.tech.map((tech, i) => (
//                       <span key={i}>{tech}</span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="website-frame">
//               <iframe
//                 src={activeProject.url}
//                 title="Project Preview"
//                 className="project-iframe"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//               <motion.button
//                 className="back-button"
//                 onClick={onBackClick}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{ backgroundColor: activeProject.color }}
//               >
//                 <span className="button-back-icon">←</span>
//                 <span className="button-text">Back to Projects</span>
//               </motion.button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveDevice;