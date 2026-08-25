import React, { useState, useRef, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Calendar, Tag } from 'lucide-react';
import Reveal from './Reveal';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scrollRef = useRef(null);

  const galleryItems = [
    { id: 1, title: "Workspace & Late Night Coding", category: "Daily", date: "2026", desc: "The usual setup where logic meets execution. Late-night debugging sessions with a cup of coffee.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop&sig=1" },
    { id: 2, title: "Epic Gacha Pull Moment", category: "Gaming", date: "2026", desc: "When the RNG gods finally bless the account after weeks of saving pulling currency!", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop&sig=2" },
    { id: 3, title: "Weekend Nature Escape", category: "Travel", date: "2025", desc: "Stepping away from the screen to clear the mind and touch some grass.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop&sig=3" },
    { id: 4, title: "Tech Conference Presentation", category: "Achievement", date: "2026", desc: "Presenting research paper findings at the technology conference. Nerves turning into excitement.", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop&sig=4" },
    { id: 5, title: "Casual Reading & Strategy Time", category: "Daily", date: "2025", desc: "Diving into system architecture books or analyzing complex RPG narrative lore.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop&sig=5" },
    { id: 6, title: "City Lights & Night Walk", category: "Travel", date: "2025", desc: "Finding inspiration in urban geometry and city lighting after a long day of coding.", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop&sig=6" },
    { id: 7, title: "Debugging Marathons", category: "Daily", date: "2026", desc: "Tracing memory leaks and optimizing backend queries until 3 AM.", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop&sig=7" },
    { id: 8, title: "SSR / Limited Banner Victory", category: "Gaming", date: "2026", desc: "Won the 50/50 early pity! Pure satisfaction.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop&sig=8" },
    { id: 9, title: "Mountain Hiking Trip", category: "Travel", date: "2024", desc: "Reaching the peak just in time for sunrise.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop&sig=9" },
    { id: 10, title: "Dean's List Award", category: "Achievement", date: "2025", desc: "Recognition for consistent academic performance during the semester.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop&sig=10" },
    { id: 11, title: "Dual Monitor Clean Setup", category: "Daily", date: "2026", desc: "Keeping cables tidy and workspace minimalist for maximum productivity.", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop&sig=11" },
    { id: 12, title: "Co-op Boss Raid Success", category: "Gaming", date: "2025", desc: "Executing a flawless teamwork rotation with friends to clear the hardest endgame content.", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop&sig=12" },
    { id: 13, title: "Historic Old Town Walk", category: "Travel", date: "2024", desc: "Appreciating historical architecture and local culinary spots.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop&sig=13" },
    { id: 14, title: "Published Research Certificate", category: "Achievement", date: "2026", desc: "Official acknowledgement of paper acceptance in the conference committee.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop&sig=14" },
    { id: 15, title: "Morning Coffee Brew", category: "Daily", date: "2026", desc: "Manual pour-over coffee ritual before compiling code.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop&sig=15" },
    { id: 16, title: "Max Level Character Showcase", category: "Gaming", date: "2026", desc: "Fully built character with god-roll artifacts and signature weapon.", img: "https://images.unsplash.com/photo-1612287233002-b1d0ba12c7c0?q=80&w=800&auto=format&fit=crop&sig=16" },
    { id: 17, title: "Beach Sunset Reflection", category: "Travel", date: "2025", desc: "Listening to waves crash while brainstorming the next software architecture.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop&sig=17" },
    { id: 18, title: "Hackathon Finalist", category: "Achievement", date: "2025", desc: "Building a working prototype within 24 hours under extreme pressure.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop&sig=18" },
    { id: 19, title: "Bookshelf Tour", category: "Daily", date: "2025", desc: "Sci-fi novels, algorithms textbooks, and design pattern references.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop&sig=19" },
    { id: 20, title: "Aesthetic Cafe Coding", category: "Daily", date: "2026", desc: "Changing environment for a fresh burst of creative momentum.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop&sig=20" }
  ];

  const categories = ['All', 'Daily', 'Travel', 'Gaming', 'Achievement', 'Others'];

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [activeCategory, filteredGallery]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-16 relative">
      <div className="w-[85%] max-w-6xl mx-auto">
        <Reveal>
          
          {/* Header & Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Camera className="text-amber-500 dark:text-amber-400" size={32} />
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Life Gallery</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            
            {filteredGallery.length === 0 ? (
              
              /* Empty State */
              <div className="w-full flex flex-col items-center justify-center h-[280px] md:h-[320px] animate-in fade-in duration-500">
                <Camera size={48} className="text-slate-300 dark:text-slate-600 mb-4 opacity-60" />
                <span className="text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-[0.2em] text-sm">To be added...</span>
              </div>
              
            ) : (
              
              <>
                {/* Left arrow */}
                {showLeftArrow && (
                  <button 
                    onClick={() => scroll('left')}
                    className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-[#1e2029]/90 backdrop-blur-md border border-slate-900 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow-xl hover:bg-amber-500 hover:text-white hover:border-amber-500 dark:hover:bg-amber-500 dark:hover:border-amber-500 dark:hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Scroll Left"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scroll-smooth"
                >
                  {filteredGallery.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setSelectedImage(item)}
                      className="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[4/3] md:aspect-square bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] relative group/card flex flex-col"
                    >
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" 
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-0.5 bg-amber-500 text-white rounded-full text-xs font-bold">
                              {item.category}
                            </span>
                            <span className="px-3 py-0.5 bg-slate-700/80 backdrop-blur-md text-slate-200 rounded-full text-xs font-bold border border-slate-600">
                              Taken on: {item.date}
                            </span>
                          </div>
                          <h3 className="text-white font-extrabold text-base line-clamp-1">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right arrow */}
                {showRightArrow && (
                  <button 
                    onClick={() => scroll('right')}
                    className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-[#1e2029]/90 backdrop-blur-md border border-slate-900 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow-xl hover:bg-amber-500 hover:text-white hover:border-amber-500 dark:hover:bg-amber-500 dark:hover:border-amber-500 dark:hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Scroll Right"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </>
            )}

          </div>

        </Reveal>
      </div>

      {/* Pop-up */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white dark:bg-[#1e2029] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-100 dark:bg-[#2a2d39] px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <button 
                  onClick={() => setSelectedImage(null)} 
                  className="w-4 h-4 rounded-full bg-[#ff5f56] flex items-center justify-center group hover:bg-[#ff5f56]/80 transition"
                >
                  <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Moment Details</span>
              <div className="w-10"></div>
            </div>

            <div className="p-6 space-y-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 max-h-[50vh] flex items-center justify-center bg-black">
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[50vh] object-contain" 
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 rounded-full text-xs font-bold flex items-center gap-1 border border-amber-300 dark:border-amber-700">
                    <Tag size={12} /> {selectedImage.category}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-xs font-bold flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                    <Calendar size={12} /> Taken on: {selectedImage.date}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {selectedImage.title}
                </h3>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  {selectedImage.desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}