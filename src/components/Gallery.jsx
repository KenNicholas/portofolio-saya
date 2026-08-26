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
      { 
        id: 1, 
        title: "Practicing 3-Point Perspective 📐", 
        category: "Education", 
        date: "2024", 
        desc: "Practicing 3-point perspective for my high school art class! ✏️ Sketching this shape on paper was a bit of a headache, but luckily, with my teacher's guidance, I managed to pull it off. It’s super satisfying once you see the final result!",
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714840/1.jpg" 
      },
      { 
        id: 7, 
        title: "Finally Got Meg! 🤖", 
        category: "Gaming", 
        date: "2024", 
        desc: "Finally got a new legendary brawler for my account in Brawl Stars! Super hyped because he's exactly the one I wanted 🎉. Time to climb the ranks! 🤖🔥", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714835/7.png" 
      },
      { 
        id: 9, 
        title: "Realistic Momogi Sketch ✏️", 
        category: "Daily", 
        date: "2024", 
        desc: "Realistic drawing practice in art class. Sketched a crumpled Momogi wrapper using nothing but a trusty 2B pencil 🖍️. Pretty proud of the shading here! 🍫", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714832/9.jpg" 
      },
      { 
        id: 12, 
        title: "Cubism Giraffe Canvas 🦒", 
        category: "Education", 
        date: "2024", 
        desc: "Painting on canvas using brushes and watercolors! Went for a fun cubism style with unnatural, vibrant colors to make this giraffe pop! 🎨✨", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714829/12.jpg" 
      },
      { 
        id: 13, 
        title: "Midnight Reflection Exam 🌙", 
        category: "Achievement", 
        date: "2024", 
        desc: "My final practical exam for high school art class! A watercolor canvas featuring a glowing moon, mountains, a creepy old tree, and a field of white flowers reflecting on a midnight lake 🌙✨.", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714838/4.jpg" 
      },
      { 
        id: 14, 
        title: "Gokart Racing! 🏎️", 
        category: "Travel", 
        date: "2024", 
        desc: "Having an absolute blast riding go-karts at a recreation spot in Bandung with the family. Adrenaline rush and good times! 🏁", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714827/14.jpg" 
      },
      { 
        id: 20, 
        title: "Insane Gacha Luck in HSR 🌟!", 
        category: "Gaming", 
        date: "2025", 
        desc: "Pulled on the 5-star banner in Honkai: Star Rail and got crazy lucky! Scooped up two 5-stars along with the signature weapon. The RNG gods smiled upon me today! 🚂✨", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714956/20.jpg" 
      },
      { 
        id: 21, 
        title: "Crow Mastery Complete 🐦‍⬛", 
        category: "Gaming", 
        date: "2025", 
        desc: "Caw caw! 🐦‍⬛ Finally unlocked a new player title for my Brawl Stars account by completely maxing out Crow's mastery. 'Caw caw!' badge secured! The grind was totally worth it! 🏆", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714959/21.png" 
      },
      { 
        id: 22, 
        title: "Scientific Computing Lab with Python 🐍", 
        category: "Education", 
        date: "2025", 
        desc: "Diving deep into Python to code some linear regression for my Scientific Computing class. Plotting data points and finding that perfect line of best fit! While a lot of errors occurred, a successful run is so satisfying! 💻📈", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714961/22.jpg" 
      },
      { 
        id: 25, 
        title: "Crushing the AOL Project 🖥️", 
        category: "Achievement", 
        date: "2025", 
        desc: "Finally done wrapping up the AOL assignment! 😮‍💨 Built a solid CLI menu system that can process CSV data to display, search, and sort data. Always satisfying to see the code run flawlessly without errors 🚀. Time to rest! ☕", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714964/25.jpg" 
      },
      { 
        id: 26, 
        title: "Sweet Taste of Victory 🏆", 
        category: "Achievement", 
        date: "2025", 
        desc: "Won a mini-competition after putting in a heavy sacrifice. The prize? Two massive boxes of snacks for the team. Time to feast! 🍿😋", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714966/26.jpg" 
      },
      { 
        id: 28, 
        title: "Mango Ice Cream Delight 🥭", 
        category: "Daily", 
        date: "2025", 
        desc: "Treating myself to some delicious mango ice cream topped with sweet and colorful jelly. The absolute perfect dessert to cool down and relax! 🍧", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787714969/28.jpg" 
      },
      { 
        id: 31, 
        title: "My Endfield Factory ⚙️", 
        category: "Gaming", 
        date: "2026", 
        desc: "Showing off my perfectly optimized factory layout in Arknights: Endfield. Maximum efficiency is the only way to play! 🏭😎", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715009/31.jpg" 
      },
      { 
        id: 33, 
        title: "Jurassic Vibes in Bandung 🦖", 
        category: "Travel", 
        date: "2026", 
        desc: "Taking a quick snap with a massive dinosaur fossil display at a recreation park in Bandung. Rawr! 🦕📸", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715014/33.jpg" 
      },
      { 
        id: 37, 
        title: "Hatsune Miku Secured! 🎤", 
        category: "Gaming", 
        date: "2026", 
        desc: "Let's go! Managed to pull Hatsune Miku AND her signature weapon in Persona 5: The Phantom X (P5X). The gacha luck strikes again! 🎯 🎤🎵", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715021/37.jpg" 
      },
      { 
        id: 38, 
        title: "All Aboard to Jogja 🚂", 
        category: "Travel", 
        date: "2026", 
        desc: "Getting ready to depart for Yogyakarta. Bracing myself for a long but exciting 7-hour train ride ahead! 🎒✌️", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715022/38.jpg" 
      },
      { 
        id: 41, 
        title: "Hello, Jogja!", 
        category: "Travel", 
        date: "2026", 
        desc: "Finally arrived in Jogja after a 7-hour train journey. So excited to explore the city built on memories and culinary delights! 🍜", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715027/41.jpg" 
      },
      { 
        id: 42, 
        title: "Malioboro Night Stroll 🚶‍♂️", 
        category: "Travel", 
        date: "2026", 
        desc: "Wandering around the street of Malioboro at night. The vibe here is incredibly lively with street food, people singing, dancing, and endless snacks to try! 🍢🎶", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715028/42.jpg" 
      },
      { 
        id: 46, 
        title: "Huge Mall Aquarium 🐟", 
        category: "Travel", 
        date: "2026", 
        desc: "Stumbled upon this massive indoor aquarium right inside the mall. Fascinating to just stand there and watch these giant fishes swimming around! 🐟🌊", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715036/46.jpg" 
      },
      { 
        id: 48, 
        title: "Home Sweet Home 🏠", 
        category: "Travel", 
        date: "2026", 
        desc: "Finally back home after an epic trip across Jogja and Semarang. Absolutely exhausted but its very satisfying! Time to lay flat on my bed! 😴🎒", 
        img: "https://res.cloudinary.com/ymf0yzh1/image/upload/v1787715040/48.jpg" 
      }
    ];
  
  const categories = ['All', 'Daily', 'Education', 'Travel', 'Gaming', 'Achievement', 'Others'];
  
  const reversedGalleryItems = [...galleryItems].reverse();

  const filteredGallery = activeCategory === 'All' 
    ? reversedGalleryItems 
    : reversedGalleryItems.filter(item => item.category === activeCategory);

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
                      className="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[4/3] md:aspect-square bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-[#734128] dark:border-slate-800 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] relative group/card flex flex-col"
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