import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce App",
      description:
        "A full-featured online store with cart functionality, user authentication, and Stripe payment processing. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      deployLink: "https://journioo-travelling.netlify.app/",
      previewImage: "/journio.png", // Correct public path
    },
    {
      id: 2,
      name: "Task Manager Pro",
      description:
        "Productivity application with drag-and-drop interface, real-time updates, and team collaboration features. Uses React, Firebase, and Material UI.",
      tags: ["React", "Firebase", "Material UI"],
      deployLink: "https://example-taskmanager.com",
      previewImage: "/taskmanager-preview.jpg",
    },
    {
      id: 4,
      name: "Portfolio Website",
      description:
        "Responsive personal portfolio showcasing projects with interactive elements. Built with React and custom animations.",
      tags: ["React", "GSAP", "Responsive Design"],
      deployLink: "https://example-portfolio.com",
      previewImage: "/portfolio-preview.jpg",
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);
  const [viewMode, setViewMode] = useState("preview");

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>

      <div className="projects-container">
        {/* iPad Display */}
        <div className="ipad-display">
          <div className="ipad-frame">
            <div
              className={`ipad-screen ${
                viewMode === "live" ? "live-view" : ""
              }`}
            >
              {viewMode === "preview" && (
                <div className="project-preview">
                  <h3>{activeProject.name}</h3>
                  <div className="preview-image-container">
                    {activeProject.previewImage ? (
                      <img
                        src={activeProject.previewImage}
                        alt={`${activeProject.name} preview`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <p>No preview available</p>
                    )}
                  </div>
                  <div className="preview-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => setViewMode("live")}
                    >
                      Open Live Project
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setViewMode("details")}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}

              {viewMode === "details" && (
                <div className="project-details">
                  <button
                    className="back-button"
                    onClick={() => setViewMode("preview")}
                  >
                    <i className="fas fa-arrow-left"></i> Back to Preview
                  </button>
                  <h3>{activeProject.name}</h3>
                  <p className="project-description">
                    {activeProject.description}
                  </p>
                  <div className="project-tags">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {viewMode === "live" && (
                <div className="project-live">
                  <button
                    className="back-button"
                    onClick={() => setViewMode("preview")}
                  >
                    <i className="fas fa-arrow-left"></i> Back to Preview
                  </button>
                  <iframe
                    src={activeProject.deployLink}
                    title={activeProject.name}
                    className="project-iframe"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveProject(project);
                setViewMode("preview");
              }}
            >
              <div className="project-item-content">
                <h3>{project.name}</h3>
                <div className="project-tags-mini">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="more-tags">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="project-item-hover">
                <i className="fas fa-eye"></i> View Project
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
