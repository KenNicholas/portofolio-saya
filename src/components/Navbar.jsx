import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Camera, Gamepad2, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={16} /> },
    { name: 'About', href: '#about', icon: <User size={16} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={16} /> },
    { name: 'Gallery', href: '#gallery', icon: <Camera size={16} /> }, // Ditambahkan di sini!
    { name: 'Game', href: '#game', icon: <Gamepad2 size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4">
      <nav className={`pointer-events-auto flex items-center gap-1 sm:gap-4 px-5 py-3 rounded-full transition-all duration-500 shadow-2xl border ${
        scrolled 
          ? 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-700' 
          : 'bg-white dark:bg-[#0d1320] border-slate-200 dark:border-slate-800'
      }`}>
        
        <div className="hidden sm:flex items-center gap-1.5 mr-2 font-bold text-slate-800 dark:text-white">
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="ml-2 font-mono tracking-tight">Ken.Dev</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-teal-500 dark:hover:text-teal-400 transition"
            >
              {item.icon}
              <span className="hidden md:block">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-teal-500 hover:text-white transition"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </div>
  );
}