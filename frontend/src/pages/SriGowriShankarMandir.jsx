import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mountain } from 'lucide-react';

export default function SriGowriShankarMandir() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Sri Gowri Shankar Mandir
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      {/* Top Section: Idol & History */}
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative mb-12">
        
        {/* Left: The Idol Image */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-xl overflow-hidden group"
          >
            <img 
              src="/gowri-shankar-idol.jpg" 
              alt="Sri Gowri Shankar Idol" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Rename idol image to "gowri-shankar-idol.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3 flex items-center gap-3">
            <Mountain className="text-orange-600" /> The Divine Union
          </h2>
          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">S</span>
              ri Gowri Shankar Mandir, located on the serene fourth floor of the main complex, is a sanctuary of peace and cosmic balance. It honors the divine union of Lord Shiva and Mother Parvati (Gowri), representing the inseparable bond between Purusha (Consciousness) and Prakriti (Nature).
            </p>
            <p>
              The beautiful white marble idol depicts the Lord in a meditative yet welcoming posture, with Mother Gowri beside Him, radiating compassion. Together, they symbolize family harmony, spiritual protection, and the ultimate destruction of the ego to reveal the inner self.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section: Golden Gopuram (Architecture) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-12"
      >
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 h-80 lg:h-[500px]">
             <img 
              src="/gowri-shankar-gopuram.jpg" 
              alt="Golden Temple Shikara" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50">
               Rename gopuram image to "gowri-shankar-gopuram.jpg" and put in public folder.
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-orange-950 mb-4">The Celestial Shikara</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The temple is crowned by a magnificent golden Gopuram (Shikara) that stands tall against the Nellore sky. Intricately carved and vibrantly colored, it serves as a spiritual antenna, drawing divine energy into the Sannidhi below. 
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Devotees climbing to the fourth floor for Darshan are rewarded with a breathtaking view of the Asramam's natural beauty and a proximity to the heavens that makes meditation effortless.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Bottom Section: Quote */}
      <div className="bg-orange-100/50 p-8 rounded-2xl border border-orange-200 shadow-inner italic text-orange-950 text-center relative overflow-hidden">
         <Sparkles className="absolute top-0 right-0 text-orange-200" size={100} />
         <div className="relative z-10">
           <p className="text-xl md:text-3xl font-serif mb-4 font-bold text-orange-600">
            "Om Namah Shivaya"
           </p>
           <p className="text-lg font-sans not-italic text-orange-900/80">
            Adorations to the Lord of the Universe, who resides within every heart as pure consciousness and eternal bliss.
           </p>
         </div>
      </div>
    </div>
  );
}