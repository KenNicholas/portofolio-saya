import React, { useState, useEffect } from 'react';
import { Code2, X, ExternalLink, ChevronDown, Search, Filter, Calendar } from 'lucide-react'; 
import Reveal from './Reveal';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.5-3.8 4.6 4.6 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 2 5 2 5 2a4.6 4.6 0 0 0-.1 3.8A5.2 5.2 0 0 0 3 9.6c0 5.5 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const tagColors = {
  "Web App": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300 dark:border-blue-700",
  "AI & ML": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300 dark:border-purple-700",
  "UI/UX": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border border-pink-300 dark:border-pink-700",
  "Research": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300 dark:border-amber-700",
  "Others": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterYear, setFilterYear] = useState('All');

  useEffect(() => {
    setVisibleCount(4);
  }, [searchQuery, filterCategory, filterYear]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const projects = [
    {
      id: 1,
      title: "AI Text Sentinel System",
      type: "Machine Learning - 2025",
      category: "AI & ML",
      year: "2025",
      desc: "A powerful NLP model detecting toxic comments with high accuracy.",
      fullDesc: "Built with LSTM and TensorFlow, this project analyzes sentiment and toxicity in real-time. Features a React frontend and FastAPI backend for seamless inference. This project demonstrates the integration of generative AI to enhance customer retention.",
      tech: ["React", "FastAPI", "TensorFlow", "Tailwind"],
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
      demoUrl: "https://example.com", 
      codeUrl: "https://github.com/KenNicholas" 
    },
    {
      id: 2,
      title: "OncoCare Vision Research",
      type: "Computer Vision & Research - 2026",
      category: "Research",
      year: "2026",
      desc: "Breast cancer classification from ultrasound imagery.",
      fullDesc: "Utilizes DenseNet and Grad-CAM for explainable AI in medical imaging. The system helps radiologists verify diagnoses visually by highlighting regions of interest. Presented as a research paper at a national conference.",
      tech: ["PyTorch", "Python", "OpenCV", "Jupyter"],
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
      demoUrl: null, 
      codeUrl: null  
    },
    {
      id: 3,
      title: "SmartCampus Booking System",
      type: "Full-Stack Web - 2026",
      category: "Web App",
      year: "2026",
      desc: "Centralized room booking management for university students.",
      fullDesc: "A complete logical design and implementation of a campus booking system using step-wise refinement techniques. It handles user permissions, conflict resolutions in scheduling, and provides a clean dashboard for admins.",
      tech: ["Node.js", "Express", "MySQL", "React"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/KenNicholas"
    },
    {
      id: 4,
      title: "CryptoBot Grid Trader",
      type: "Algorithmic Trading - 2025",
      category: "AI & ML",
      year: "2025",
      desc: "Automated grid trading bot for ASTER, Doge, and BNB.",
      fullDesc: "A highly optimized algorithmic bot that exploits market volatility using grid trading methodology. Includes risk management protocols, real-time API socket connections to Binance, and backtesting features.",
      tech: ["Python", "Binance API", "Pandas", "Docker"],
      img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
      demoUrl: null,
      codeUrl: "https://github.com/KenNicholas" 
    },
    {
      id: 5,
      title: "HIMTI Study Tour Portal",
      type: "Front-End Web - 2026",
      category: "Web App",
      year: "2026",
      desc: "Interactive landing page for student organization study tour.",
      fullDesc: "Designed and developed the official front-end portal for HIMTI's study tour. Focuses on smooth scroll animations, responsive mobile design, and an intuitive registration flow.",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
      img: "https://images.unsplash.com/photo-1523580494112-071d32c02119?q=80&w=800&auto=format&fit=crop",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/KenNicholas"
    },
    {
      id: 6,
      title: "EcoBite App Concept",
      type: "Entrepreneurship & UI/UX - 2025",
      category: "UI/UX",
      year: "2025",
      desc: "Mobile app prototype reducing food waste from local restaurants.",
      fullDesc: "A business pitch and UI/UX design project for a mobile application connecting users with surplus food from local bakeries and restaurants at a discount. Focused on user research and wireframing.",
      tech: ["Figma", "Whimsical", "Canva"],
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
      demoUrl: "https://figma.com", 
      codeUrl: null 
    },
    {
      id: 7,
      title: "Tactical Arena Optimizer",
      type: "Mobile Dev / Analysis - 2025",
      category: "Others",
      year: "2025",
      desc: "Performance analysis tool for mobile PvP shooters.",
      fullDesc: "A lightweight analytical tool designed to extract hardware performance metrics (FPS, thermals, battery draw) during heavy gaming sessions, specifically tailored for device-friendly optimizations.",
      tech: ["Java", "Android Studio", "XML"],
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      demoUrl: null,
      codeUrl: "https://github.com/KenNicholas"
    },
    {
      id: 8,
      title: "Cisco Network Architecture",
      type: "System Infrastructure - 2025",
      category: "Others",
      year: "2025",
      desc: "Complex 3-floor building network simulation.",
      fullDesc: "A comprehensive network design utilizing Cisco Packet Tracer. Includes advanced subnetting, VLAN configurations, and routing protocols to connect over 75 workstations securely across a multi-floor layout.",
      tech: ["Cisco", "Networking", "Subnetting"],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      demoUrl: null,
      codeUrl: null
    },
    {
      id: 9,
      title: "Gacha Probability Engine",
      type: "Web Application - 2026",
      category: "Web App",
      year: "2026",
      desc: "Statistical pity calculator for popular RPG games.",
      fullDesc: "A fun and practical tool helping gamers calculate their exact probability of pulling specific characters based on historical 'pity' systems in games like Honkai: Star Rail and Wuthering Waves.",
      tech: ["React", "TailwindCSS", "Math.js"],
      img: "https://images.unsplash.com/photo-1605901309584-818e25960d8f?q=80&w=800&auto=format&fit=crop",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/KenNicholas"
    },
    {
      id: 10,
      title: "Personal Portfolio",
      type: "Front-End Web - 2024",
      category: "Web App",
      year: "2024",
      desc: "My previous personal branding website version 1.0.",
      fullDesc: "The initial iteration of my developer portfolio built during my early semesters. Showcased foundational HTML/CSS skills before transitioning to modern frameworks like React.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/KenNicholas"
    }
  ];

  // Menggunakan .slice().reverse() agar id terbesar (paling baru) berada di urutan paling atas
  const filteredProjects = projects.slice().reverse().filter((proj) => {
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || proj.category === filterCategory;
    const matchesYear = filterYear === 'All' || proj.year === filterYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section id="projects" className="py-16 relative">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          
          {/* Header & Filter */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
            <div className="flex items-center gap-3 shrink-0">
              <Code2 className="text-blue-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-extrabold">Projects</h2>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full xl:w-auto">
              
              <div className="relative w-full sm:w-auto sm:flex-1 xl:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition shadow-sm dark:text-white placeholder:text-slate-400"
                />
              </div>

              <div className="relative w-full sm:w-auto">
                <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full sm:w-auto appearance-none pl-9 pr-10 py-2.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold cursor-pointer focus:outline-none focus:border-teal-500 shadow-sm dark:text-white transition"
                >
                  <option value="All">All Categories</option>
                  <option value="Web App">Web App</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Research">Research</option>
                  <option value="Others">Others</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative w-full sm:w-auto">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select 
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="w-full sm:w-auto appearance-none pl-9 pr-10 py-2.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold cursor-pointer focus:outline-none focus:border-teal-500 shadow-sm dark:text-white transition"
                >
                  <option value="All">All Years</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-500 font-medium bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800">
                <p>No projects found matching your search or filters.</p>
              </div>
            ) : (
              filteredProjects.slice(0, visibleCount).map((proj) => (
                <div 
                  key={proj.id} 
                  className="group bg-white dark:bg-[#111827] border-2 border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-500 flex flex-col"
                >
                  <div className="h-56 overflow-hidden border-b-2 border-slate-200 dark:border-slate-800">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-extrabold mb-2 text-slate-900 dark:text-white">{proj.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${tagColors[proj.category] || "bg-slate-100 text-slate-700"}`}>
                        {proj.category}
                      </span>
                      <span className="px-3 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700">
                        Made in: {proj.year}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex-1">{proj.desc}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-2">
                      <button onClick={() => setSelectedProject(proj)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 flex items-center gap-2">
                        <ExternalLink size={14}/> View Details
                      </button>
                      
                      {proj.demoUrl && (
                         <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2">
                           Demo
                         </a>
                      )}
                      {proj.codeUrl && (
                        <a href={proj.codeUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 flex items-center gap-2">
                          <GithubIcon size={14}/> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* View More */}
          {visibleCount < filteredProjects.length && (
            <div className="mt-12 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="group flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-[#111827] border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
              >
                View More Projects <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}

        </Reveal>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)} 
        >
          <div 
            className="bg-white dark:bg-[#1e2029] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="bg-slate-100 dark:bg-[#2a2d39] px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
              <div className="flex gap-2.5">
                <button onClick={() => setSelectedProject(null)} className="w-4 h-4 rounded-full bg-[#ff5f56] flex items-center justify-center group hover:bg-[#ff5f56]/80 transition">
                  <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Project Details</span>
              <div className="w-12"></div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
              
              <div className="w-full md:w-1/2 space-y-5">
                <div className="overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-700 group cursor-crosshair">
                  <img src={selectedProject.img} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" alt={selectedProject.title} />
                </div>
                
                {(selectedProject.demoUrl || selectedProject.codeUrl) && (
                  <div className="flex gap-3">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-sm font-bold shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-300">
                        <ExternalLink size={16}/> Live Demo
                      </a>
                    )}
                    {selectedProject.codeUrl && (
                      <a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 text-slate-900 dark:text-white">
                        <GithubIcon size={16}/> Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-start">
                <h3 className="text-3xl md:text-4xl font-black mb-2 text-slate-900 dark:text-white tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-bold mb-6">{selectedProject.type}</p>
                
                <h4 className="text-sm font-bold mb-2 text-slate-900 dark:text-white uppercase tracking-wider">About the Project</h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-justify">
                  {selectedProject.fullDesc}
                </p>
                
                <h4 className="text-sm font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-wider">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-4 py-2 bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 cursor-default hover:scale-110 hover:border-teal-500 hover:text-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}