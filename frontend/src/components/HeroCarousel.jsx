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

  // Tripling the array gives us plenty of runway for continuous scrolling
  const scrollImages = [...images, ...images, ...images];

  // Upgraded Auto-scroll logic (Super smooth, pauses on hover or drag)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const autoScroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += 0.8; // Slower, smoother speed
        
        // Loop back to start smoothly when reaching the end
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 5)) {
          scrollContainer.scrollLeft = 0;
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
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Mouse Drag-to-Scroll Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative bg-orange-50/50 border-b-4 border-orange-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Floating Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <ChevronLeft size={28} />
      </button>

      {/* The scrolling track (No more snap, pure fluid drag/scroll) */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex h-full w-full gap-4 px-4 items-center overflow-x-auto scroll-smooth ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Hides native scrollbar
      >
        {scrollImages.map((src, idx) => (
          <div 
            key={idx} 
            className="h-[90%] w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md relative transition-transform duration-500 hover:scale-[1.02]"
          >
            <img 
              src={src} 
              alt={`Asramam view ${idx + 1}`} 
              className="w-full h-full object-cover pointer-events-none" // pointer-events-none prevents image dragging ghost
              loading="lazy" 
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-orange-100'); }}
            />
          </div>
        ))}
      </div>

      {/* Floating Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <ChevronRight size={28} />
      </button>

    </div>
  );
}