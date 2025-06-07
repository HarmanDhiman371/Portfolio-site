import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaTerminal } from 'react-icons/fa';
import '../styles/Body.css';

const HeroSection = () => {
  const canvasRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();
  const glitchRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.2;
        this.alpha = Math.random();
        this.speed = Math.random() * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    const stars = Array.from({ length: 120 }, () => new Star());

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => star.update());
      requestAnimationFrame(animateStars);
    };
    animateStars();

    gsap.from(textRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      duration: 1.2,
    });

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    glitchTimeline
      .to(glitchRef.current, {
        x: -3,
        duration: 0.05,
        ease: 'power1.inOut',
      })
      .to(glitchRef.current, {
        x: 3,
        duration: 0.05,
        ease: 'power1.inOut',
      })
      .to(glitchRef.current, {
        x: 0,
        duration: 0.05,
      });
  }, []);

  return (
    <>
      <canvas className="bg-canvas" ref={canvasRef}></canvas>
      <section className="hero">
        <div className="hero-content" ref={textRef}>
          <h1 ref={glitchRef} className="glitch-text">
            <FaTerminal /> Harmanjeet Singh
          </h1>
          <h2>Crafting code & creativity into experiences</h2>
          <p>Frontend developer specializing in React, motion, and user delight. Let's build something awesome.</p>
          <button ref={buttonRef} className="hero-button">Explore Portfolio</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
