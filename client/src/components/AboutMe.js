import React, { useEffect, useRef } from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = skillRefs.current; // ✅ make a local copy to fix ESLint warning

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const skills = [
    { name: 'Web Development', percent: '90%' },
    { name: 'React', percent: '85%' },
    { name: 'JavaScript', percent: '80%' },
    { name: 'UI/UX Design', percent: '75%' },
    { name: 'Node.js', percent: '70%' },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>About Me</h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img 
              src="https://via.placeholder.com/400x500" 
              alt="Profile" 
              className={styles.fadeInUp}
            />
          </div>

          <div className={styles.aboutText}>
            <h3 className={styles.fadeInUp}>I'm a passionate web developer</h3>
            <p className={styles.fadeInUp}>
              Hello! I'm John Doe, a professional web developer with over 5 years of experience 
              in creating beautiful, functional, and user-friendly websites and applications. 
              I specialize in React, JavaScript, and modern frontend technologies.
            </p>
            <p className={styles.fadeInUp}>
              My journey in web development started when I was in college, and since then 
              I've worked with various startups and established companies to bring their 
              digital ideas to life.
            </p>

            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillName}>
                    <span>{skill.name}</span>
                    <span>{skill.percent}</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      ref={el => skillRefs.current[index] = el}
                      className={styles.skillProgress} 
                      data-width={skill.percent}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.aboutButtons}>
              <a href="#contact" className={`${styles.btn} ${styles.fadeInUp}`}>
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className={`${styles.btn} ${styles.btnOutline} ${styles.fadeInUp}`}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
