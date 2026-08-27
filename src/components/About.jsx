import React from 'react';
import { User } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <User className="text-orange-500" size={28} />
            <h2 className="text-3xl font-bold">About me</h2>
          </div>

          <div className="space-y-6">
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-[#111827] dark:bg-none p-8 rounded-2xl border-2 border-amber-400 dark:border dark:border-slate-800 shadow-lg dark:shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:border-orange-500 dark:hover:border-orange-500/50">
              <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-white">Who Am I?</h3>
              <p className="text-orange-950/80 dark:text-slate-400 leading-relaxed text-sm mb-4 text-justify font-medium dark:font-normal">
                I am an undergraduate Computer Science student specializing in Intelligent Systems and Software Development, I am convinced that AI will be the <i>game-changer</i> of our generation in many important aspects of our lives, set to revolutionize everything from economics to entertainment. My vision is to harness this technology to build practical, everyday applications that transforms the way we interact with technology by turning repetitive, mundane tasks into seamless, effortless experiences.
              </p>
              <p className="text-orange-950/80 dark:text-slate-400 leading-relaxed text-sm text-justify font-medium dark:font-normal">
                I am highly motivated to expand my expertise and am always eager to learn new technologies. Whether it's developing full-stack applications or managing technical infrastructure, I approach every project with a commitment to quality, accuracy, and continuous growth.
              </p>
            </div>
      
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:bg-[#111827] dark:bg-none p-8 rounded-2xl border-2 border-orange-400 dark:border dark:border-slate-800 shadow-lg dark:shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] dark:hover:shadow-[0_0_25px_rgba(249,115,22,0.2)] hover:border-orange-600 dark:hover:border-amber-500/50">
              <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-white">Design Philosophy</h3>
              <p className="text-orange-950/80 dark:text-slate-400 leading-relaxed text-sm text-justify font-medium dark:font-normal">
                 I've always believed that innovative development isn't about packing in features, making an "all-in-one" application. It's about solving fundamental problems cleanly and simply and save people's time.   Whether it's a complex medical classification system, a document translator, or just a simple file converter, as long as it's easy to use and actually helps someone get through their day, I'm satisfied.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-[#111827] dark:bg-none p-8 rounded-2xl border-2 border-amber-400 dark:border dark:border-slate-800 shadow-lg dark:shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:border-orange-500 dark:hover:border-orange-400/50">
              <h3 className="text-xl font-bold mb-5 text-orange-900 dark:text-white">Hobbies</h3>
              <div className="flex flex-wrap gap-4">
                
                <span className="px-4 py-2 bg-white/60 dark:bg-slate-900 border-2 border-orange-300 dark:border dark:border-slate-700 rounded-xl text-sm font-bold dark:font-semibold text-orange-900 dark:text-slate-300 flex items-center gap-2 cursor-default transition-all duration-300 hover:scale-110 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  🎮 Gaming
                </span>

                <span className="px-4 py-2 bg-white/60 dark:bg-slate-900 border-2 border-orange-300 dark:border dark:border-slate-700 rounded-xl text-sm font-bold dark:font-semibold text-orange-900 dark:text-slate-300 flex items-center gap-2 cursor-default transition-all duration-300 hover:scale-110 hover:bg-rose-100 dark:hover:bg-rose-900/40 hover:text-rose-700 dark:hover:text-rose-300 hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]">
                  📺 Watching TV
                </span>

                <span className="px-4 py-2 bg-white/60 dark:bg-slate-900 border-2 border-orange-300 dark:border dark:border-slate-700 rounded-xl text-sm font-bold dark:font-semibold text-orange-900 dark:text-slate-300 flex items-center gap-2 cursor-default transition-all duration-300 hover:scale-110 hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:text-amber-700 dark:hover:text-amber-300 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  📚 Reading Books
                </span>
                
                <span className="px-4 py-2 bg-white/60 dark:bg-slate-900 border-2 border-orange-300 dark:border dark:border-slate-700 rounded-xl text-sm font-bold dark:font-semibold text-orange-900 dark:text-slate-300 flex items-center gap-2 cursor-default transition-all duration-300 hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-900/40 hover:text-teal-700 dark:hover:text-teal-300 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                  💻 Coding
                </span>

              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}