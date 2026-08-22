import React from 'react';
import { GraduationCap, Trophy, Users, BrainCircuit, Calendar, FileText, Smartphone } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience() {
  const milestones = [
    {
      id: 1,
      type: "Education Started",
      title: "Bachelor of Computer Science",
      organization: "BINUS University",
      date: "Sep 2024",
      icon: <GraduationCap size={20} className="text-blue-500" />,
      color: "border-blue-500",
      bgIcon: "bg-blue-100 dark:bg-blue-900/30",
      desc: "Began undergraduate studies in Computer Science. Built a strong foundation in algorithms, data structures, and software engineering principles.",
      highlight: "Cumulative GPA: 3.91 / 4.00"
    },
    {
      id: 2,
      type: "Community Service",
      title: "Mathematics Volunteer Tutor",
      organization: "Teach for Indonesia (TFI)",
      date: "Sep - Oct 2025",
      icon: <Users size={20} className="text-teal-500" />,
      color: "border-teal-500",
      bgIcon: "bg-teal-100 dark:bg-teal-900/30",
      desc: "Committed to a 5-week volunteer program (1 session per week) mentoring Junior High School students. Translated complex logical concepts into easily understandable lessons."
    },
    {
      id: 3,
      type: "Competition",
      title: "Competitive Programming Contestant",
      organization: "Indonesia National Contest (INC)",
      date: "Oct 2025",
      icon: <Trophy size={20} className="text-yellow-500" />,
      color: "border-yellow-500",
      bgIcon: "bg-yellow-100 dark:bg-yellow-900/30",
      desc: "Competed in national-level competitive programming. Successfully solved an algorithmic challenge using C under strict time limits and intense competitive pressure."
    },
    {
      id: 4,
      type: "Academic Specialization",
      title: "Intelligent Systems Stream",
      organization: "BINUS University",
      date: "Feb 2026",
      icon: <BrainCircuit size={20} className="text-purple-500" />,
      color: "border-purple-500",
      bgIcon: "bg-purple-100 dark:bg-purple-900/30",
      desc: "Officially entered the Intelligent Systems specialization to deepen expertise in Artificial Intelligence, Machine Learning, and Computer Vision."
    },
    {
      id: 5,
      type: "Academic Achievement",
      title: "Research Paper Conference",
      organization: "Academic Conference Presentation",
      date: "August 19, 2026",
      icon: <FileText size={20} className="text-rose-500" />,
      color: "border-rose-500",
      bgIcon: "bg-rose-100 dark:bg-rose-900/30",
      desc: "Co-authored a research paper with the project team. The findings and system architecture were successfully presented by a team member at a recognized academic conference."
    },
    {
      id: 6,
      type: "Current Status",
      title: "Entering 5th Semester",
      organization: "BINUS University",
      date: "August 2026 - Present",
      icon: <Smartphone size={20} className="text-emerald-500" />,
      color: "border-emerald-500",
      bgIcon: "bg-emerald-100 dark:bg-emerald-900/30",
      desc: "Advancing studies and expanding technical stack. Currently taking Mobile Programming as an elective course to master cross-platform application development."
    }
  ];

  return (
    <section id="experience" className="py-16 relative">
      <div className="w-[85%] max-w-4xl mx-auto">
        <Reveal>
          
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Education & Milestones</h2>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            
            {milestones.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-12 group">
                
                <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full border-4 border-white dark:border-[#0d1320] flex items-center justify-center ${item.bgIcon} ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-500/50 dark:hover:border-teal-500/50">
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-full w-max">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {item.organization}
                  </p>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                    {item.desc}
                  </p>

                  {item.highlight && (
                    <div className="mt-5 inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg">
                      <span className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        🌟 {item.highlight}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>

        </Reveal>
      </div>
    </section>
  );
}