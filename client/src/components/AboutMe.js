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
    { name: 'Web Development', percent: '80%' },
    { name: 'React', percent: '80%' },
    { name: 'JavaScript', percent: '80%' },
    { name: 'JAVA', percent: '85%' },
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
              src="/cc.png" 
              alt="Profile" 
              className={styles.fadeInUp}
            />
          </div>

          <div className={styles.aboutText}>
            <h3 className={styles.fadeInUp}>I'm a passionate web developer</h3>
            <p className={styles.fadeInUp}>
              Hello! I'm Harmanjeet singh, Currently pursuing my B.E. in Computer Science at Chitkara University.
              I specialize in React, JavaScript,  modern frontend and backend technologies. I have Strong Problem Solving skills

            </p>
            <p className={styles.fadeInUp}>
             My journey in web development began during my time in college, where I’ve been building projects that turn creative ideas into functional digital experiences. Along the way, I’ve worked on personal and collaborative projects that have helped me sharpen my skills and explore real-world applications of web technologies.
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
