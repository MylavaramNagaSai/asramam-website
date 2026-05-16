import React from 'react';
import { motion } from 'framer-motion';

export default function HeroCarousel() {
  // Updated with the exact file extensions from your screenshot!
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

  // Duplicating the array twice creates a perfectly seamless infinite scroll loop
  const scrollImages = [...images, ...images, ...images];

  return (
    <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative bg-orange-50/50 border-b-4 border-orange-200">
      
      {/* Decorative gradient shadows on the left and right edges for depth */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#FFFBF7] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#FFFBF7] to-transparent z-10 pointer-events-none"></div>

      {/* The scrolling track */}
      <motion.div 
        className="flex h-full w-max gap-4 px-4 items-center"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          ease: "linear",
          duration: 120, // 120 seconds for buttery smooth, slow scrolling
          repeat: Infinity,
        }}
      >
        {scrollImages.map((src, idx) => (
          <div 
            key={idx} 
            // Removed the hover animations to keep it simple and clean
            className="h-[90%] w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white relative"
          >
            <img 
              src={src} 
              alt={`Asramam view ${idx + 1}`} 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}