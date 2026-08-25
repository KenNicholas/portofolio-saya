import React from 'react';
import { Layers, BrainCircuit, Network, Eye, MessageSquareText, Coffee, Database, Lightbulb, Search, Users, Languages, Workflow, Clock, FileText } from 'lucide-react';
import Reveal from './Reveal';

const themeClasses = {
  cyan: "hover:bg-cyan-50 dark:hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
  emerald: "hover:bg-emerald-50 dark:hover:bg-emerald-900/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
  purple: "hover:bg-purple-50 dark:hover:bg-purple-900/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
  blue: "hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
  amber: "hover:bg-amber-50 dark:hover:bg-amber-900/40 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
  rose: "hover:bg-rose-50 dark:hover:bg-rose-900/40 hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]"
};

const lucideColors = {
  cyan: "text-cyan-500",
  emerald: "text-emerald-500",
  purple: "text-purple-500",
  blue: "text-blue-500",
  amber: "text-amber-500",
  rose: "text-rose-500"
};

const skillsData = [
  {
    category: "Front End",
    theme: "cyan",
    items: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "custom:css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "React (Vite)", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Flutter", icon: "flutter" }
    ]
  },
  {
    category: "Back End",
    theme: "emerald",
    items: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "MySQL", icon: "mysql" }
    ]
  },
  {
    category: "Coding Languages",
    theme: "blue",
    items: [
      { name: "Java", icon: "lucide:Coffee" },
      { name: "C", icon: "c" },
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "lucide:Database" },
      { name: "Dart", icon: "dart" }
    ]
  },
  {
    category: "AI & Data",
    theme: "purple",
    items: [
      { name: "Machine Learning", icon: "lucide:BrainCircuit" },
      { name: "Deep Learning", icon: "lucide:Network" },
      { name: "Computer Vision", icon: "lucide:Eye" },
      { name: "Natural Language Processing", icon: "lucide:MessageSquareText" }
    ]
  },
  {
    category: "Tools",
    theme: "amber",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "custom:github" },
      { name: "VS Code", icon: "custom:vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Canva", icon: "custom:canva" }, // Menggunakan custom SVG agar aman
      { name: "Hugging Face", icon: "huggingface" },
      { name: "XAMPP", icon: "xampp" },
      { name: "Kaggle", icon: "kaggle" },
      { name: "Google Drive", icon: "googledrive" },
      { name: "Microsoft 365", icon: "custom:microsoft" }
    ]
  },
  {
    category: "Other Skills",
    theme: "rose",
    items: [
      { name: "Teamwork", icon: "lucide:Users" },
      { name: "Problem Solving", icon: "lucide:Lightbulb" },
      { name: "Analytical Thinking", icon: "lucide:Search" },
      { name: "Adaptability", icon: "lucide:Workflow" },
      { name: "Time Management", icon: "lucide:Clock" },
      { name: "Research & Report Writing", icon: "lucide:FileText" },
      { name: "Indonesian", icon: "lucide:Languages" },
      { name: "English", icon: "lucide:Languages" },
      { name: "Chinese", icon: "lucide:Languages" }
    ]
  }
];

const iconMap = { BrainCircuit, Network, Eye, MessageSquareText, Coffee, Database, Lightbulb, Search, Users, Languages, Workflow, Clock, FileText };

const CustomIcons = {
  css3: (
    <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.16l-.24-2.65H4.66l.54 6.062h9.7l-.32 3.682-2.58.682-2.6-.682-.16-2.02H6.62l.27 4.18 5.09 1.41 5.1-1.41.53-5.918H7.38L7.02 5.5h11.23l.34-1.34z"/></svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
  ),
  microsoft: (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#7fba00" d="M12 1h10v10H12z"/><path fill="#00a4ef" d="M1 12h10v10H1z"/><path fill="#ffb900" d="M12 12h10v10H12z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ),
  canva: (
    <img src="/assets/Skills/canva-logo.svg" alt="Canva" className="w-4 h-4 rounded-full object-cover" />
  )
};

const RenderIcon = ({ iconName, theme }) => {
  if (iconName.startsWith('lucide:')) {
    const IconComponent = iconMap[iconName.split(':')[1]];
    return <IconComponent size={16} className={`${lucideColors[theme]} transition-colors duration-300`} />;
  }
  
  if (iconName.startsWith('custom:')) {
    const customKey = iconName.split(':')[1];
    return CustomIcons[customKey];
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${iconName}`}
      alt={iconName}
      className="w-4 h-4 object-contain transition-transform duration-300"
    />
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          
          <div className="flex items-center gap-3 mb-8">
            <Layers className="text-teal-500" size={28} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>

          <div className="space-y-8">
            {skillsData.map((section) => (
              <div key={section.category}>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 ml-1">
                  {section.category}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-5">
                  
                  {section.items.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`group relative hover:z-10 px-4 py-2.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 shadow-sm cursor-default flex items-center gap-2 hover:scale-110 hover:-translate-y-1 hover:text-slate-900 dark:hover:text-white ${themeClasses[section.theme]}`}
                    >
                      <RenderIcon iconName={skill.icon} theme={section.theme} />
                      <span>{skill.name}</span>
                    </div>
                  ))}

                </div>
              </div>
            ))}
          </div>

        </Reveal>
      </div>
    </section>
  );
}