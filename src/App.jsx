import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

const Divider = () => (
  <div className="w-[85%] max-w-6xl mx-auto h-px bg-orange-200/50 dark:bg-slate-800/80 my-4"></div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative overflow-x-hidden bg-[#FCF9F2] dark:bg-[#0a0f1a] text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Gallery />
        <Divider />
        <Playground />
        <Divider />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}