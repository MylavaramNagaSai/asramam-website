import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Your exact image list
  const images = [
    "/asramam1.png", 
    "/asramam2.jpg",
    "/asramam3.jpg",
    "/asramam4.jpg",
    "/asramam5.jpg",
    "/asramam6.jpg",
    "/asramam7.jpg",
    "/asramam8.jpg",
    "/asramam9.jpg",
    "/asramam10.png",
    "/asramam11.png",
    "/asramam12.png",
    "/asramam13.png"
  ];

  const scrollImages = [...images, ...images, ...images];

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const autoScroll = () => {
      // Only auto-scroll if NOT hovering with a mouse AND NOT touching/dragging
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += 1; 
        
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          scrollContainer.scrollLeft -= (scrollContainer.scrollWidth / 3);
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Button Scroll Logic
  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- SMART POINTER LOGIC (Fixes the mobile sticky-hover bug) ---
  const handlePointerEnter = (e) => {
    // Only trigger hover pause if it's an actual mouse
    if (e.pointerType === 'mouse') {
      setIsHovered(true);
    }
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse') {
      setIsHovered(false);
    }
    setIsDragging(false); // Failsafe
  };

  // --- MOUSE DRAG LOGIC ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // --- TOUCH SWIPE LOGIC (Mobile) ---
  const handleTouchStart = () => {
    setIsDragging(true);
    setIsHovered(false); // Instantly kill any ghost hover states on mobile
  };

  const handleTouchEnd = () => {
    // Give the mobile browser's momentum scrolling 2 seconds to completely glide to a stop before auto-scroll resumes
    setTimeout(() => {
      setIsDragging(false);
    }, 2000); 
  };

  return (
    <div 
      className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative bg-orange-50/50 border-b-4 border-orange-200 group"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      
      {/* Floating Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className={`hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <ChevronLeft size={28} />
      </button>

      {/* The scrolling track */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`flex h-full w-full gap-4 px-4 items-center overflow-x-auto touch-pan-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} 
      >
        {scrollImages.map((src, idx) => (
          <div 
            key={idx} 
            className="h-[90%] w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md relative transition-transform duration-500 hover:scale-[1.02]"
          >
            <img 
              src={src} 
              alt={`Asramam view ${idx + 1}`} 
              className="w-full h-full object-cover pointer-events-none" 
              loading="lazy" 
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-orange-100'); }}
            />
          </div>
        ))}
      </div>

      {/* Floating Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className={`hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <ChevronRight size={28} />
      </button>

    </div>
  );
}