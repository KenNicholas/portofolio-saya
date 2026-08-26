import React, { useState, useEffect } from 'react';
import { Code2, X, ExternalLink, ChevronDown, ChevronUp, Search, Filter, Calendar, ChevronLeft, ChevronRight, Check } from 'lucide-react'; 
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

const availableCategories = ["Web App", "AI & ML", "UI/UX", "Research", "Others"];

const ProjectCard = ({ proj, onOpen }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!proj.images || proj.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % proj.images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [proj.images]);

  return (
    <div className="group bg-gradient-to-br from-orange-100/70 to-amber-100/70 dark:bg-none dark:bg-[#111827] border-2 border-amber-400/80 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-500 flex flex-col">
      <div className="h-56 overflow-hidden border-b-2 border-amber-300 dark:border-slate-800 relative group/img">
        
        <div 
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {proj.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${proj.title} ${idx + 1}`} 
              className="w-full h-full object-cover shrink-0 transition-transform duration-700" 
            />
          ))}
        </div>

        {proj.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {proj.images.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? 'bg-white scale-125' : 'bg-white/40'}`} />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-extrabold mb-2 text-orange-950 dark:text-white">{proj.title}</h3>
        
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {proj.categories.map(cat => (
            <span key={cat} className={`px-3 py-0.5 rounded-full text-xs font-bold ${tagColors[cat] || "bg-slate-100 text-slate-700"}`}>
              {cat}
            </span>
          ))}
          <span className="px-3 py-0.5 bg-white/70 dark:bg-slate-800 text-orange-900 dark:text-slate-400 rounded-full text-xs font-bold border-2 border-amber-300 dark:border-slate-700">
            Made in: {proj.year}
          </span>
        </div>

        <p className="text-xs text-orange-900/80 dark:text-slate-400 mb-6 flex-1 font-medium dark:font-normal">{proj.desc}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          <button onClick={() => onOpen(proj)} className="px-4 py-2 border-2 border-amber-400 dark:border-slate-700 bg-white/60 dark:bg-transparent rounded-lg text-sm font-bold hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-500 transition-all duration-300 flex items-center gap-2 text-orange-950 dark:text-white">
            <ExternalLink size={14}/> View Details
          </button>
          
          {proj.demoUrl && (
             <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border-2 border-orange-400 dark:border-slate-700 bg-white/60 dark:bg-transparent rounded-lg text-sm font-bold hover:bg-orange-100 dark:hover:bg-orange-950/40 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-all duration-300 flex items-center gap-2 text-orange-950 dark:text-white">
              Demo
             </a>
          )}
          {proj.codeUrl && (
            <a href={proj.codeUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border-2 border-rose-400 dark:border-slate-700 bg-white/60 dark:bg-transparent rounded-lg text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-500 transition-all duration-300 flex items-center gap-2 text-orange-950 dark:text-white">
              <GithubIcon size={14}/> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImgIndex, setModalImgIndex] = useState(0); 
  const [visibleCount, setVisibleCount] = useState(4);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('All');
  
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); 

  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setVisibleCount(4);
  }, [searchQuery, selectedCategories, filterYear]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenProject = (proj) => {
    setSelectedProject(proj);
    setModalImgIndex(0); 
  };

  const handleNextModalImg = () => {
    setModalImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const handlePrevModalImg = () => {
    setModalImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const projects = [
    {
      id: 0,
      title: "AI Text Sentinel System",
      type: "Machine Learning - 2025",
      categories: ["AI & ML", "Web App"],
      year: "2025",
      desc: "A powerful NLP model detecting toxic comments with high accuracy.",
      fullDesc: "Built with LSTM and TensorFlow, this project analyzes sentiment and toxicity in real-time. Features a React frontend and FastAPI backend for seamless inference. This project demonstrates the integration of generative AI to enhance customer retention.",
      tech: ["React", "FastAPI", "TensorFlow", "Tailwind"],
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
      ],
      demoUrl: "https://example.com", 
      codeUrl: "https://github.com/KenNicholas" 
    },
    {
      id: 0,
      title: "OncoCare Vision Research",
      type: "Computer Vision & Research - 2026",
      categories: ["Research", "AI & ML"],
      year: "2026",
      desc: "Breast cancer classification from ultrasound imagery.",
      fullDesc: "Utilizes DenseNet and Grad-CAM for explainable AI in medical imaging. The system helps radiologists verify diagnoses visually by highlighting regions of interest. Presented as a research paper at a national conference.",
      tech: ["PyTorch", "Python", "OpenCV", "Jupyter"],
      images: [
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
      ],
      demoUrl: null, 
      codeUrl: null  
    },
    {
      id: 0,
      title: "SmartCampus Booking System",
      type: "Full-Stack Web - 2026",
      categories: ["Web App", "UI/UX"],
      year: "2026",
      desc: "Centralized room booking management for university students.",
      fullDesc: "A complete logical design and implementation of a campus booking system using step-wise refinement techniques. It handles user permissions, conflict resolutions in scheduling, and provides a clean dashboard for admins.",
      tech: ["Node.js", "Express", "MySQL", "React"],
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
      ],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/KenNicholas"
    },
    {
      id: 0,
      title: "CryptoBot Grid Trader",
      type: "Algorithmic Trading - 2025",
      categories: ["AI & ML"],
      year: "2025",
      desc: "Automated grid trading bot for ASTER, Doge, and BNB.",
      fullDesc: "A highly optimized algorithmic bot that exploits market volatility using grid trading methodology. Includes risk management protocols, real-time API socket connections to Binance, and backtesting features.",
      tech: ["Python", "Binance API", "Pandas", "Docker"],
      images: [
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
      ],
      demoUrl: null,
      codeUrl: "https://github.com/KenNicholas" 
    },
    {
      id: 5,
      title: "Tuberculosis Detection CAD System",
      type: "Medical AI Application - 2026",
      categories: ["AI & ML", "Research", "Web App"],
      year: "2026",
      desc: "An AI-powered medical imaging tool detecting Tuberculosis from chest X-rays with 99.5% accuracy using Inception-ResNet-v2.",
      
      fullDesc: "A highly accurate Computer-Aided Diagnosis (CAD) web application that analyzes chest X-ray images to detect Tuberculosis. Powered by a PyTorch-based Inception-ResNet-v2 deep learning model, it achieves an impressive 99.5% validation accuracy. The system classifies images, provides predictive confidence scores, and outputs actionable, standardized medical recommendations. The entire inference pipeline and user interface were built with Gradio and deployed seamlessly on Hugging Face Spaces.",
      
      tech: [
        "Python", 
        "PyTorch", 
        "Inception-ResNet-v2", 
        "Gradio", 
        "Hugging Face",
      ],
      
      images: [
        "/assets/Projects/tuberculosis/tuberculosis1.png",
        "/assets/Projects/tuberculosis/tuberculosis2.png",
        "/assets/Projects/tuberculosis/tuberculosis3.png",
        "/assets/Projects/tuberculosis/tuberculosis4.png",
        "/assets/Projects/tuberculosis/tuberculosis5.png"
      ],
      
      demoUrl: "https://huggingface.co/spaces/Ken2707/AOL_TB_Detction_v27",
      codeUrl: "https://huggingface.co/spaces/Ken2707/AOL_TB_Detction_v27/tree/main"
    },
    {
      id: 6,
      title: "Pantryon: Smart Pantry Tracker",
      type: "Mobile Application - 2026",
      categories: ["UI/UX", "Others"], 
      year: "2026",
      desc: "A Flutter-based mobile application designed to manage grocery stocks and discover smart recipe recommendations to reduce food waste.",
      
      fullDesc: "Pantryon is a household inventory mobile application designed to mitigate food waste by tracking grocery stocks and offering smart menu recommendations based on available ingredients. Developed within a 5-person Agile team, I spearheaded the frontend engineering using Flutter to build a clean, interactive UI equipped with an integrated barcode scanner and intuitive error-handling. The application seamlessly connects to a Supabase backend for real-time data management. Additionally, I managed the team's technical documentation in Notion, successfully translating complex UML diagrams and user stories into functional mobile features.",
      
      tech: [
        "Flutter", 
        "Dart", 
        "Supabase", 
        "Notion",
        "Git"
      ],
      
      images: [
        "/assets/Projects/pantryon/pantryon1.png",
        "/assets/Projects/pantryon/pantryon2.png",
        "/assets/Projects/pantryon/pantryon3.webp",
        "/assets/Projects/pantryon/pantryon4.webp",
        "/assets/Projects/pantryon/pantryon5.webp", 
        "/assets/Projects/pantryon/pantryon6.webp" 
      ],
      
      demoUrl: null,
      codeUrl: "https://github.com/Mycticount-X/Pantryon-Mobile"
    },
    {
      id: 7,
      title: "Malicious URL Detection System",
      type: "Cybersecurity AI Application - 2026",
      categories: ["AI & ML", "Web App"],
      year: "2026",
      desc: "Real-time cybersecurity web app that analyzes and classifies URLs to detect phishing and malware using a Decision Tree model.",
      
      fullDesc: "A self-initiated cybersecurity application that analyzes URLs in real-time to detect threats like phishing and malware. The system dynamically extracts 22 lexical features from the input URL (using Pandas and Regex) and classifies it into benign, defacement, phishing, or malware categories. Powered by a lightweight Decision Tree model, it provides users with predictive confidence scores and actionable safety recommendations. The project showcases a highly optimized deployment architecture: a Vanilla HTML/CSS/JS frontend seamlessly integrated with a Python FastAPI backend, both hosted entirely on Vercel utilizing Serverless Functions for fast, real-time inference.",
      
      tech: [
        "HTML/CSS/JS (Vanilla)", 
        "FastAPI", 
        "Python", 
        "Decision Tree", 
        "Vercel Serverless",
      ],
      
      images: [
        "/assets/Projects/url_detect/url_detect (1).png",
        "/assets/Projects/url_detect/url_detect (2).png",
        "/assets/Projects/url_detect/url_detect (3).png",
        "/assets/Projects/url_detect/url_detect (4).png",
      ],
      demoUrl: "https://malicious-url-detection-beta.vercel.app", 
      codeUrl: "https://github.com/KenNicholas/Malicious_URL_Detection"
    },
    {
      id: 8, 
      title: "OncoCare: Breast Cancer CAD System",
      type: "Full-Stack AI Application - 2026",
      categories: ["Research", "AI & ML", "Web App"], 
      year: "2026",
      desc: "Computer-Aided Diagnosis web app for classifying breast ultrasound images using DenseNet121 and Explainable AI.",
      fullDesc: "An end-to-end Computer-Aided Diagnosis (CAD) web application that classifies breast ultrasound images into Normal, Benign, or Malignant categories. Powered by a PyTorch-based DenseNet121 deep learning model, this tool was developed as part of a collaborative academic research effort addressing dataset constraints, model limitations, and standardized clinical outcomes. It implements Grad-CAM as Explainable AI (XAI) to generate visual heatmaps, ensuring diagnostic transparency for medical professionals. The robust architecture integrates a responsive React frontend with a Dockerized FastAPI backend hosted on Hugging Face Spaces, complete with a local SQLite database for secure, session-based scan history management.",
      tech: [
        "React (Vite)", 
        "TailwindCSS", 
        "FastAPI", 
        "Python",
        "PyTorch (DenseNet121)", 
        "Grad-CAM (XAI)", 
        "SQLite", 
        "Docker",
        "Hugging Face"
      ],
      images: [
        "/assets/Projects/breast_cancer/breastcancer1.png",
        "/assets/Projects/breast_cancer/breastcancer2.png",
        "/assets/Projects/breast_cancer/breastcancer3.png", 
        "/assets/Projects/breast_cancer/breastcancer4.png", 
        "/assets/Projects/breast_cancer/breastcancer5.png", 
        "/assets/Projects/breast_cancer/breastcancer6.png", 
        "/assets/Projects/breast_cancer/breastcancer7.png"
      ],
      demoUrl: "https://breast-cancer-detect-q59t.vercel.app",
      codeUrl: "https://github.com/KenNicholas/Breast-Cancer-Detect"
    },
    {
      id: 9,
      title: "AI Text Sentinel: NLP Analyzer for Fake Review & Spam Detection",
      type: "Full-Stack AI Application - 2026",
      categories: ["AI & ML", "Web App"],
      year: "2026",
      desc: "Real-time Natural Language Processing web application for detecting fake reviews and spam using dual-engine ML analytics.",
      fullDesc: "An end-to-end web application designed to detect fraudulent reviews and promotional spam in real-time. It employs dual-engine analytics using both Deep Learning (LSTM + Word2Vec) and Classic Machine Learning (Logistic Regression, Random Forest, XGBoost) to classify text and provide confidence scores. The system features a responsive React and Tailwind CSS frontend seamlessly integrated with a Dockerized FastAPI backend hosted on Hugging Face Spaces, supporting both manual text input and batch file analysis.",
      tech: [
        "React (Vite)", 
        "TailwindCSS", 
        "FastAPI", 
        "Hugging Face", 
        "Python", 
        "LSTM & Word2Vec", 
        "Logistic Regression",
        "Random Forest", 
        "XGBoost", 
        "Docker"
      ],
      images: [
        "/assets/Projects/AI_text_sentinel/text_sentinel (1).png",
        "/assets/Projects/AI_text_sentinel/text_sentinel (5).png", 
        "/assets/Projects/AI_text_sentinel/text_sentinel (6).png", 
        "/assets/Projects/AI_text_sentinel/text_sentinel (7).png",
      ],
      demoUrl: "https://fake-spam-review-detect.vercel.app/",
      codeUrl: "https://github.com/KenNicholas/fake-spam-review-detect"
    },
    {
      id: 10,
      title: "Personal Developer Portfolio",
      type: "Frontend Web Development - 2026",
      categories: ["Web App", "UI/UX"],
      year: "2026",
      desc: "My modern personal portfolio built with React and Tailwind, featuring dynamic filters, dark mode, and interactive mini-games.",
      fullDesc: "A fully responsive personal developer portfolio engineered to showcase my professional journey, technical skills, and projects. Designed with a seamless light/dark mode toggle, smooth scroll-reveal animations, and dynamic multi-select project filtering. It goes beyond a traditional resume by including unique interactive sections like a categorized 'Life Gallery' and a custom 'Dev Gacha' simulator. This project served as a playground to master React state management, responsive modal UI, and Vercel deployment troubleshooting.",
      tech: [
        "React (Vite)", 
        "Tailwind CSS", 
        "Lucide React", 
        "JavaScript", 
        "Vercel"
      ],
      images: [
        "/assets/Projects/portofolio/portofolio1.png", 
        "/assets/Projects/portofolio/portofolio2.png",
        "/assets/Projects/portofolio/portofolio3.png",
        "/assets/Projects/portofolio/portofolio4.png",
        "/assets/Projects/portofolio/portofolio5.png",
        "/assets/Projects/portofolio/portofolio6.png"
      ],
      demoUrl: "https://portofolio-saya-black-tau.vercel.app/", 
      codeUrl: "https://github.com/KenNicholas/portofolio-saya"
    }
  ];

  const filteredProjects = projects.slice().reverse().filter((proj) => {
    if (proj.id === 0) return false;

    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.every(cat => proj.categories.includes(cat));
                            
    const matchesYear = filterYear === 'All' || proj.year === filterYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section id="projects" className="py-16 relative">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
            <div className="flex items-center gap-3 shrink-0">
              <Code2 className="text-amber-500 dark:text-amber-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Projects</h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full xl:w-auto">
              
              <div className="relative w-full sm:w-auto sm:flex-1 xl:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#111827] border-2 border-amber-400/80 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition shadow-sm dark:text-white placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="relative w-full sm:w-auto">
                <div 
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full sm:w-auto pl-9 pr-10 py-2.5 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#111827] border-2 border-amber-400/80 dark:border-slate-700 rounded-xl text-sm font-semibold cursor-pointer focus:outline-none focus:border-amber-500 shadow-sm dark:text-white transition flex items-center select-none min-w-[160px]"
                >
                  <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <span className="truncate text-orange-950 dark:text-white">
                    {selectedCategories.length === 0 ? "All Categories" : `${selectedCategories.length} Selected`}
                  </span>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>

                {isCategoryOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsCategoryOpen(false)}></div>
                    
                    <div className="absolute left-0 mt-2 w-52 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#1e2029] border-2 border-amber-400 dark:border-slate-700 rounded-xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-200">
                      {availableCategories.map(cat => {
                        const isSelected = selectedCategories.includes(cat);
                        return (
                          <div 
                            key={cat} 
                            onClick={() => toggleCategory(cat)}
                            className="flex items-center px-4 py-2.5 hover:bg-amber-200/50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                          >
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center mr-3 transition-colors ${
                              isSelected 
                                ? 'bg-amber-500 border-amber-600 text-white' 
                                : 'border-amber-400 dark:border-slate-600 bg-white dark:bg-[#111827]'
                            }`}>
                              {isSelected && <Check size={12} strokeWidth={4} />}
                            </div>
                            <span className="text-sm font-bold text-orange-950 dark:text-slate-300">{cat}</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <div className="relative w-full sm:w-auto">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select 
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="w-full sm:w-auto appearance-none pl-9 pr-10 py-2.5 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#111827] border-2 border-amber-400/80 dark:border-slate-700 rounded-xl text-sm font-semibold cursor-pointer focus:outline-none focus:border-amber-500 shadow-sm dark:text-white transition text-orange-950"
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
              
              <div className="col-span-full flex flex-col items-center justify-center h-[300px] md:h-[400px] animate-in fade-in duration-500">
                <Code2 size={48} className="text-amber-500/60 dark:text-slate-600 mb-4 opacity-60" />
                <span className="text-orange-900 dark:text-slate-500 font-extrabold uppercase tracking-[0.2em] text-sm mb-2">Projects Not Found</span>
                <p className="text-slate-500 text-xs">Try adjusting your category filters or search query.</p>
              </div>

            ) : (
              filteredProjects.slice(0, visibleCount).map((proj) => (
                <ProjectCard key={proj.id} proj={proj} onOpen={handleOpenProject} />
              ))
            )}
          </div>

          {(visibleCount < filteredProjects.length || visibleCount > 4) && (
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {visibleCount < filteredProjects.length && (
                <button 
                  onClick={handleLoadMore}
                  className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#111827] border-2 border-amber-400 dark:border-slate-800 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] rounded-xl font-bold text-orange-950 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
                >
                  View More <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
              )}

              {visibleCount > 4 && (
                <button 
                  onClick={handleShowLess}
                  className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-none dark:bg-[#1e2029] border-2 border-amber-400 dark:border-slate-800 hover:border-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] rounded-xl font-bold text-orange-950 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300"
                >
                  Show Less <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              )}
            </div>
          )}

        </Reveal>
      </div>

      {/* Pop-up View Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)} 
        >
          <div 
            className="bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 dark:bg-none dark:bg-[#1e2029] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 border-2 border-amber-400 dark:border-slate-700 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="bg-amber-200/60 dark:bg-[#2a2d39] px-4 py-3 flex items-center justify-between border-b-2 border-amber-300 dark:border-slate-800 sticky top-0 z-10">
              <div className="flex gap-2.5">
                <button onClick={() => setSelectedProject(null)} className="w-4 h-4 rounded-full bg-[#ff5f56] flex items-center justify-center group hover:bg-[#ff5f56]/80 transition">
                  <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-orange-900 dark:text-slate-400 font-bold uppercase tracking-wider">Project Details</span>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="p-1.5 rounded-full text-orange-900 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-amber-200/80 dark:hover:bg-slate-700/80 transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
              
              <div className="w-full md:w-1/2 space-y-5">
                
                <div className="overflow-hidden rounded-xl border-2 border-amber-300 dark:border-slate-700 relative h-64 sm:h-80 bg-white/50 dark:bg-slate-800/50 group">
                  <div 
                    className="flex h-full transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${modalImgIndex * 100}%)` }}
                  >
                    {selectedProject.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        className="w-full h-full object-contain shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300" 
                        alt={`${selectedProject.title} ${idx + 1}`} 
                        onClick={() => setLightboxIndex(idx)}
                      />
                    ))}
                  </div>
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={handlePrevModalImg} 
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all z-10"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button 
                        onClick={handleNextModalImg} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all z-10"
                      >
                        <ChevronRight size={18} />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                        {selectedProject.images.map((_, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => setModalImgIndex(idx)} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === modalImgIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`} 
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {(selectedProject.demoUrl || selectedProject.codeUrl) && (
                  <div className="flex gap-3">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white rounded-lg text-sm font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300">
                        <ExternalLink size={16}/> Live Demo
                      </a>
                    )}
                    {selectedProject.codeUrl && (
                      <a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 border-2 border-amber-400 dark:border-slate-700 bg-white/60 dark:bg-transparent rounded-lg text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-600 hover:border-rose-500 hover:-translate-y-1 transition-all duration-300 text-orange-950 dark:text-white">
                        <GithubIcon size={16}/> Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-start">
                <h3 className="text-3xl md:text-4xl font-black mb-2 text-orange-950 dark:text-white tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 font-bold mb-4">{selectedProject.type}</p>
                <h4 className="text-sm font-bold mb-2 text-orange-950 dark:text-white uppercase tracking-wider">Categories</h4>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {selectedProject.categories.map(cat => (
                    <span key={cat} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[cat] || "bg-slate-100 text-slate-700"}`}>
                      {cat}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-white/70 dark:bg-slate-800 text-orange-900 dark:text-slate-400 rounded-full text-xs font-bold border-2 border-amber-300 dark:border-slate-700">
                    Made in: {selectedProject.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold mb-2 text-orange-950 dark:text-white uppercase tracking-wider">About the Project</h4>
                <p className="text-sm md:text-base text-orange-900/80 dark:text-slate-400 mb-8 leading-relaxed text-justify font-medium dark:font-normal">
                  {selectedProject.fullDesc}
                </p>
                
                <h4 className="text-sm font-bold mb-3 text-orange-950 dark:text-white uppercase tracking-wider">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-4 py-2 bg-white/70 dark:bg-[#111827] border-2 border-amber-300 dark:border-slate-700 rounded-lg text-xs font-bold text-orange-950 dark:text-slate-300 cursor-default hover:scale-110 hover:border-amber-500 hover:text-amber-600 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300"
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

      {/* Pop-up detail gambar */}
      {lightboxIndex !== null && selectedProject && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={36} />
          </button>

          {selectedProject.images.length > 1 && (
            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-4 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
              }}
            >
              <ChevronLeft size={48} />
            </button>
          )}

          <img 
            src={selectedProject.images[lightboxIndex]} 
            alt="Fullscreen View" 
            className="w-[95vw] h-[95vh] object-contain shadow-2xl rounded-lg"
            onClick={(e) => e.stopPropagation()} 
          />

          {selectedProject.images.length > 1 && (
            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-4 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % selectedProject.images.length);
              }}
            >
              <ChevronRight size={48} />
            </button>
          )}

          <div className="absolute bottom-6 text-white/50 tracking-widest text-sm font-bold">
            {lightboxIndex + 1} / {selectedProject.images.length}
          </div>
        </div>
      )}

    </section>
  );
}