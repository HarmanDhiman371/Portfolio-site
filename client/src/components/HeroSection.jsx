import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // ✅ Use solid, not outline
import '../styles/HeroSection.css';

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white select-none">
      <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.5} />
        <Stars radius={150} depth={60} count={4000} factor={4} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      {/* Toggle Theme */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
      >
        {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>

      {/* Hero Content */}
      <motion.div
        className="z-10 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-name">Harmanjeet Singh</h1>
        <p className="mt-6 text-xl md:text-2xl font-light min-h-[2.5rem]">
          <Typewriter
            options={{
              strings: [
                'Software Engineer',
                'React & Node.js Developer',
                'Open Source Enthusiast',
                'Tech Innovator',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
            }}
          />
        </p>

        <a
          href="#projects"
          className="mt-10 inline-block px-10 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition duration-300 transform hover:scale-105"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
