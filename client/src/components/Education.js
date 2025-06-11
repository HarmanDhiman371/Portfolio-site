import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chitkara University",
      year: "2022 - 2026 (Currently in 4th Year)",
      description: "Pursuing my BE in CSE with focus on full-stack development, AI/ML, and cloud computing.",
      percentage: "Current CGPA: 8.42",
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Senior Secondary (12th Grade)",
      institution: "Govt. Senior Secondary School, Bahadurgarh",
      year: "2021 - 2022",
      description: "Completed with 93% in Non-Medical stream (PCM).",
      percentage: "93%",
      icon: "📚"
    },
    {
      id: 3,
      degree: "Secondary (10th Grade)",
      institution: "S.I.S Gurmat Academy School",
      year: "2019 - 2020",
      description: "Completed with 90% aggregate score.",
      percentage: "90%",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        My <span className="highlight">Education</span>
      </h2>
      
      <div className="education-container">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">{edu.icon}</div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <div className="education-meta">
                <span className="education-year">{edu.year}</span>
                <span className="education-percentage">{edu.percentage}</span>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;