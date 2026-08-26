import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Camera, Gamepad2, Mail, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Gallery', href: '#gallery', icon: <Camera size={16} /> },
    { name: 'Game', href: '#game', icon: <Gamepad2 size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center w-full pointer-events-none px-2 sm:px-4">
      <nav className={`pointer-events-auto flex items-center justify-between gap-1 md:gap-1.5 lg:gap-4 px-3 py-2 lg:px-5 lg:py-3 rounded-full transition-all duration-500 shadow-2xl border w-full max-w-fit ${
        scrolled 
          ? 'bg-amber-100 dark:bg-[#111827] border-orange-200 dark:border-slate-700' 
          : 'bg-amber-100/90 backdrop-blur-md dark:bg-[#0d1320] border-orange-200 dark:border-slate-800'
      }`}>
        
        {/* Logo */}
        <div className="flex items-center gap-0.5 lg:gap-1 font-bold text-slate-800 dark:text-white mr-1 lg:mr-2">
          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-orange-500"></div>
          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500"></div>
          <span className="ml-1.5 lg:ml-2 font-mono tracking-tight text-sm lg:text-base hidden sm:block">KenKen</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="flex items-center gap-1 lg:gap-2 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full text-[11px] lg:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              <span className="scale-[0.85] lg:scale-100">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        <div className="hidden md:block w-px h-5 lg:h-6 bg-slate-300 dark:bg-slate-700 mx-1 lg:mx-2"></div>

        <div className="flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 lg:p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={16} className="scale-90 lg:scale-100" /> : <Moon size={16} className="scale-90 lg:scale-100" />}
          </button>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Pure mobile / small screen */}
      {isMobileMenuOpen && (
        <div className="mt-4 w-full max-w-[90%] sm:max-w-sm pointer-events-auto bg-amber-50/95 backdrop-blur-xl dark:bg-[#111827]/95 border-2 border-orange-200 dark:border-slate-700 p-3 rounded-2xl shadow-2xl flex flex-col md:hidden animate-in fade-in zoom-in-95 duration-200">
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <a 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-orange-100 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400 transition"
              >
                {item.icon}
                {item.name}
              </a>
              {/* Horizontal Line menu */}
              {index < navItems.length - 1 && (
                <div className="h-px bg-orange-200/50 dark:bg-slate-700/50 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}