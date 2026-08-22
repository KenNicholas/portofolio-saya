import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.5-3.8 4.6 4.6 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 2 5 2 5 2a4.6 4.6 0 0 0-.1 3.8A5.2 5.2 0 0 0 3 9.6c0 5.5 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#080c14] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="w-[85%] max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-1.5 font-bold text-xl text-slate-800 dark:text-white">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="ml-2 font-mono tracking-tight">Ken.Dev</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Designing and building intelligent systems, exploring modern tech, and crafting seamless user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#home" className="hover:text-teal-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-500 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal-500 transition-colors">Projects</a></li>
              <li><a href="#gallery" className="hover:text-teal-500 transition-colors">Life Gallery</a></li>
              <li><a href="#game" className="hover:text-teal-500 transition-colors">Playground</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Contact Me</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-teal-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:kennicholas@example.com" className="hover:text-teal-500 transition-colors">kennicholas@example.com</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone size={16} className="text-blue-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="https://wa.me/62895338066318" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">+62 895 3380 66318</a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-rose-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Social Media</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Let's connect and build something awesome together.</p>
            <div className="flex gap-3">
              {/* GitHub */}
              <a 
                href="https://github.com/KenNicholas" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/KenNicholas" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kennn_2707?igsi=OXhmZWlxc3VuZnAz" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-rose-500 hover:to-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Ken.Dev. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built using React & TailwindCSS.
          </p>
        </div>

      </div>
    </footer>
  );
}