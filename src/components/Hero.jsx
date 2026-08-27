import React from 'react';
import { Mail, Download, Sparkles, FileText } from 'lucide-react'; // Tambah FileText icon
import Reveal from './Reveal'; 

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.5-3.8 4.6 4.6 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 2 5 2 5 2a4.6 4.6 0 0 0-.1 3.8A5.2 5.2 0 0 0 3 9.6c0 5.5 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative dark:bg-[#0a0f1a]">
      
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[85%] max-w-6xl mx-auto z-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">Ken Nicholas Latif</span>
                </h1>
                
                <div className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm dark:bg-[#111827] border border-orange-200 dark:border-orange-800 transition-all duration-300 cursor-default shadow-sm hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:border-transparent hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 hover:-translate-y-1">
                  <Sparkles size={18} className="text-orange-600 dark:text-orange-400 group-hover:text-white dark:group-hover:text-white group-hover:animate-spin transition-colors duration-300" /> 
                  <span className="text-orange-600 dark:text-orange-400 group-hover:text-white dark:group-hover:text-white text-sm sm:text-base font-bold tracking-wide transition-colors duration-300">
                    Full-Stack AI Engineer
                  </span>
                </div>
              
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl text-justify">
                  A Computer Science student and AI researcher specializing in Intelligent Systems. Experienced in building interactive, responsive websites, and connecting them to reliable backend systems. A dedicated developer who bridges the gap between complex machine learning models and lightweight web applications to build tools that simplify daily life.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a href="mailto:kennicholas89@gmail.com" className="flex flex-col p-4 rounded-2xl bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-900/20 dark:to-amber-900/20 border-2 border-orange-400/60 dark:border-orange-800/60 hover:from-orange-500 hover:to-rose-500 dark:hover:from-orange-500 dark:hover:to-rose-500 hover:-translate-y-1 hover:border-transparent transition-all duration-500 group shadow-sm">
                  <Mail size={24} className="text-orange-600 dark:text-orange-400 group-hover:text-white mb-3 transition-colors duration-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-white transition-colors duration-500">Email</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-orange-100 transition-colors duration-500 truncate">kennicholas89@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/ken-nicholas-latif-6456a0325" target="_blank" rel="noreferrer" className="flex flex-col p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-400/60 dark:border-blue-800/60 hover:from-amber-500 hover:to-orange-400 dark:hover:from-amber-500 dark:hover:to-orange-400 hover:-translate-y-1 hover:border-transparent transition-all duration-500 group shadow-sm">
                  <LinkedinIcon size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-white mb-3 transition-colors duration-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-white transition-colors duration-500">LinkedIn</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-amber-100 transition-colors duration-500 truncate">Ken Nicholas Latif</span>
                </a>

                <a href="https://github.com/KenNicholas" target="_blank" rel="noreferrer" className="flex flex-col p-4 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-400/60 dark:border-indigo-800/60 hover:from-fuchsia-500 hover:to-pink-500 dark:hover:from-fuchsia-500 dark:hover:to-pink-500 hover:-translate-y-1 hover:border-transparent transition-all duration-500 group shadow-sm">
                  <GithubIcon size={24} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white mb-3 transition-colors duration-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-white transition-colors duration-500">GitHub</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-fuchsia-100 transition-colors duration-500 truncate">KenNicholas</span>
                </a>
              </div>

              {/* download and view buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a 
                  href="/CV_ATS_KenLatif.pdf" 
                  download="CV_ATS_KenLatif.pdf"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 text-white font-bold rounded-xl transition-all duration-300"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" /> 
                  Download CV
                </a>

                <a 
                  href="/CV_ATS_KenLatif.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 text-white font-bold rounded-xl transition-all duration-300"
                >
                  <FileText size={18} className="group-hover:-translate-y-0.5 transition-transform" /> 
                  View CV
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse transition duration-500" />
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
                  <img 
                    src="/assets/Hero/profile.jpeg" 
                    alt="Ken Nicholas Latif" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}