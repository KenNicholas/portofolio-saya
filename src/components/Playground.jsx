import React, { useState } from 'react';
import { Gamepad2, Sparkles, Info, Star, Zap, X, Ticket, Database } from 'lucide-react';
import Reveal from './Reveal';

const gachaPool = {
  6: [
    { name: "Ken - The AI Architect", title: "SSSR Persona", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop" },
    { name: "Ken - System Overlord", title: "SSSR Persona", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" }
  ],
  5: [
    { name: "Neural Network Engine", title: "SSR Artifact", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop" },
    { name: "Quantum Processor", title: "SSR Hardware", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" },
    { name: "React Ecosystem", title: "SSR Framework", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop" },
    { name: "Production Bug Fix", title: "SSR Miracle", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=400&auto=format&fit=crop" }
  ],
  4: [
    { name: "Mechanical Keyboard", title: "SR Gear", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=400&auto=format&fit=crop" },
    { name: "Double Espresso", title: "SR Consumable", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop" },
    { name: "StackOverflow Tab", title: "SR Artifact", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=400&auto=format&fit=crop" },
    { name: "Git Merge Conflict", title: "SR Obstacle", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400&auto=format&fit=crop" },
    { name: "Spaghetti Code", title: "SR Material", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=400&auto=format&fit=crop" }
  ]
};

const rarityColors = {
  6: "from-orange-500 to-red-500 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.8)] text-orange-100",
  5: "from-yellow-400 to-amber-600 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.6)] text-yellow-100",
  4: "from-purple-500 to-indigo-600 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] text-purple-100"
};

const YellowStar = ({ size = 14 }) => (
  <Star size={size} fill="currentColor" className="text-yellow-400 drop-shadow-sm" />
);

export default function Game() {
  const [pity6, setPity6] = useState(100);
  const [pity5, setPity5] = useState(10);
  const [isPulling, setIsPulling] = useState(false);
  const [pullResults, setPullResults] = useState(null);
  
  const [records, setRecords] = useState({ 6: 0, 5: 0, 4: 0 });

  const handlePull = (amount) => {
    setIsPulling(true);
    
    // animation
    setTimeout(() => {
      let currentPity6 = pity6;
      let currentPity5 = pity5;
      let results = [];
      let count6 = 0, count5 = 0, count4 = 0;

      for (let i = 0; i < amount; i++) {
        currentPity6 -= 1;
        currentPity5 -= 1;

        let rolledRarity = 4; 

        const rng = Math.random() * 100;

        // Pity Checks
        if (currentPity6 <= 0) {
          rolledRarity = 6;
        } else if (currentPity5 <= 0) {
          rolledRarity = 5;
        } else {
          // RNG Probability
          if (rng <= 1) rolledRarity = 6;
          else if (rng <= 10) rolledRarity = 5;
        }

        const itemPool = gachaPool[rolledRarity];
        const randomItem = itemPool[Math.floor(Math.random() * itemPool.length)];
        
        results.push({ ...randomItem, rarity: rolledRarity });

        if (rolledRarity === 6) count6++;
        else if (rolledRarity === 5) count5++;
        else count4++;

        // Reset Pity
        if (rolledRarity === 6) currentPity6 = 100;
        if (rolledRarity === 5 || rolledRarity === 6) currentPity5 = 10; 
      }

      setPity6(currentPity6);
      setPity5(currentPity5);
      setPullResults(results);
      
      // Inventory record
      setRecords(prev => ({
        6: prev[6] + count6,
        5: prev[5] + count5,
        4: prev[4] + count4
      }));

      setIsPulling(false);
    }, 1500); 
  };

  return (
    <section id="game" className="py-16 relative">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="text-amber-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Playground: The Dev Gacha</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-[#111827] border-2 border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                  <Info className="text-amber-400" size={20} />
                  <h3 className="text-xl font-bold text-white">Warp Details</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-orange-900/20 rounded-xl border border-orange-800/50">
                    <div>
                      <span className="flex mb-1"><YellowStar/><YellowStar/><YellowStar/><YellowStar/><YellowStar/><YellowStar/></span>
                      <p className="text-sm font-bold text-slate-200">SSSR Persona</p>
                    </div>
                    <span className="text-lg font-black text-orange-400">1.0%</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-yellow-900/20 rounded-xl border border-yellow-800/50">
                    <div>
                      <span className="flex mb-1"><YellowStar/><YellowStar/><YellowStar/><YellowStar/><YellowStar/></span>
                      <p className="text-sm font-bold text-slate-200">SSR Tool</p>
                    </div>
                    <span className="text-lg font-black text-yellow-400">9.0%</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-purple-900/20 rounded-xl border border-purple-800/50">
                    <div>
                      <span className="flex mb-1"><YellowStar/><YellowStar/><YellowStar/><YellowStar/></span>
                      <p className="text-sm font-bold text-slate-200">SR Material</p>
                    </div>
                    <span className="text-lg font-black text-purple-400">90.0%</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  <p className="text-xs text-slate-400 flex gap-2"><Zap size={14} className="text-amber-500 shrink-0"/> Hard Pity at 100 pulls guarantees a 6-star.</p>
                  <p className="text-xs text-slate-400 flex gap-2"><Zap size={14} className="text-amber-500 shrink-0"/> Every 10 pulls guarantees at least a 5-star.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col">
              
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-slate-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop" 
                  alt="Banner" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

                <div className="absolute top-0 left-0 p-6 md:p-10 h-full flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/50 rounded-full text-xs font-bold mb-4 tracking-widest uppercase w-max">
                    Limited Event Warp
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
                    INTELLIGENT <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">ARCHITECT</span>
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-semibold max-w-sm mb-8 leading-relaxed">
                    Drop Rate Boost for 6-Star Entity: <br/>"Ken - The AI Architect"
                  </p>

                  {/* Pity Counter */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="bg-slate-950/80 backdrop-blur border border-slate-700 px-4 py-2.5 rounded-xl w-max flex items-center gap-3">
                      <span className="flex text-orange-500"><YellowStar size={14}/></span>
                      <span className="text-sm font-bold text-slate-300">Guaranteed 6★ in:</span>
                      <span className="text-lg font-black text-orange-400">{pity6}</span>
                    </div>
                    <div className="bg-slate-950/80 backdrop-blur border border-slate-700 px-4 py-2.5 rounded-xl w-max flex items-center gap-3">
                      <span className="flex text-yellow-500"><YellowStar size={14}/></span>
                      <span className="text-sm font-bold text-slate-300">Guaranteed 5★ in:</span>
                      <span className="text-lg font-black text-yellow-400">{pity5}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 justify-end">
                <button 
                  onClick={() => handlePull(1)}
                  disabled={isPulling}
                  className="flex-1 md:flex-none px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-600 hover:border-slate-400 rounded-xl font-bold transition flex flex-col items-center justify-center gap-1 disabled:opacity-50"
                >
                  <span className="flex items-center gap-2"><Ticket size={16}/> Pull 1x</span>
                </button>
                <button 
                  onClick={() => handlePull(5)}
                  disabled={isPulling}
                  className="flex-1 md:flex-none px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-600 hover:border-slate-400 rounded-xl font-bold transition flex flex-col items-center justify-center gap-1 disabled:opacity-50"
                >
                  <span className="flex items-center gap-2"><Ticket size={16}/> Pull 5x</span>
                </button>
                <button 
                  onClick={() => handlePull(10)}
                  disabled={isPulling}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white border-2 border-amber-400/50 hover:border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] rounded-xl font-black transition flex flex-col items-center justify-center gap-1 disabled:opacity-50"
                >
                  <span className="flex items-center gap-2 text-lg">
                    {isPulling ? <Sparkles className="animate-spin" size={20}/> : <Sparkles size={20}/>} 
                    {isPulling ? "Warping..." : "Pull 10x"}
                  </span>
                </button>
              </div>

              {/* Record Counter */}
              <div className="mt-5 bg-[#111827] border-2 border-slate-800 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-amber-500" size={16} />
                  <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Warp Records</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {/* 6-Star Record */}
                  <div className="flex flex-col items-center justify-center p-2 bg-orange-900/10 border border-orange-800/50 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 mb-0.5">SSSR (6★)</span>
                    <span className="text-xl font-black text-orange-400 leading-none">{records[6]}</span>
                  </div>

                  {/* 5-Star Record */}
                  <div className="flex flex-col items-center justify-center p-2 bg-yellow-900/10 border border-yellow-800/50 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 mb-0.5">SSR (5★)</span>
                    <span className="text-xl font-black text-yellow-400 leading-none">{records[5]}</span>
                  </div>

                  {/* 4-Star Record */}
                  <div className="flex flex-col items-center justify-center p-2 bg-purple-900/10 border border-purple-800/50 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 mb-0.5">SR (4★)</span>
                    <span className="text-xl font-black text-purple-400 leading-none">{records[4]}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>

      {/* Pop-up */}
      {pullResults && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300">
          
          <div className="w-full max-w-5xl flex flex-col items-center max-h-[90vh] overflow-y-auto py-4 scrollbar-smooth">
            
            <div className="w-full flex justify-between items-center mb-8 px-4 mt-2">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-amber-400" /> Warp Results
              </h3>
              <button 
                onClick={() => setPullResults(null)} 
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Item Results */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full px-2">
              {pullResults.map((item, index) => (
                <div 
                  key={index}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 bg-gradient-to-b flex flex-col animate-in zoom-in slide-in-from-bottom-10 duration-500 fill-mode-backwards ${rarityColors[item.rarity]}`}
                  style={{ animationDelay: `${index * 100}ms` }} 
                >
                  <div className="absolute top-2 left-2 z-10 flex">
                    {Array.from({ length: item.rarity }).map((_, i) => (
                      <YellowStar key={i} size={12} />
                    ))}
                  </div>

                  <img src={item.img} alt={item.name} className="w-full h-3/5 object-cover opacity-80 mix-blend-overlay" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col justify-end text-center z-10">
                    <span className="text-[9px] uppercase tracking-wider font-bold mb-1 opacity-80">{item.title}</span>
                    <h4 className="text-sm font-black leading-tight text-white">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setPullResults(null)}
              className="mt-10 mb-4 px-10 py-3.5 bg-white hover:bg-slate-200 text-slate-900 font-extrabold rounded-full transition shadow-xl hover:scale-105"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </section>
  );
}