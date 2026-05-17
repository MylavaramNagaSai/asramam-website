import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function JagadambaMahadevi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Jagadamba Mahadevi
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: The Divine Image */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center justify-center relative">
          
          {/* Subtle background decoration */}
          <Sparkles className="absolute top-10 left-10 text-orange-300/40" size={40} />
          <Sparkles className="absolute bottom-10 right-10 text-orange-300/40" size={60} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-xl overflow-hidden group"
          >
            {/* IMAGE SETUP: 
              Rename your uploaded file to "jagadamba-mahadevi.jpg" (no spaces) 
              and place it in the public folder!
            */}
            <img 
              src="/jagadamba-mahadevi.jpg" 
              alt="Jagadamba Mahadevi" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please rename image to "jagadamba-mahadevi.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Information / History */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3">
            Divine Grace & Glory
          </h2>

          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            
            {/* ========================================== */}
            {/* PASTE YOUR INFORMATION HERE! */}
            {/* ========================================== */}
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">J</span>
              agadamba Mahadevi is the divine mother of the universe. 
              {/* Delete this text and paste your real paragraph here */}
              [Please paste your first paragraph of information about the deity here. You can write about Her history in the Asramam, Her significance, or the daily poojas performed for Her.]
            </p>

            <p>
              {/* Delete this text and paste your real paragraph here */}
              [Please paste your second paragraph here. Devotees who visit the Sannidhi experience profound peace and spiritual upliftment. She showers Her immense blessings on all who seek Her shelter with a pure heart.]
            </p>
            {/* ========================================== */}
            
          </div>
          
          <div className="mt-10 bg-orange-100/50 p-6 rounded-xl border border-orange-200 italic text-orange-950 text-center shadow-inner">
            "May the divine blessings of Jagadamba Mahadevi bring peace, prosperity, and spiritual awakening to all devotees."
          </div>

        </div>
      </div>
    </div>
  );
}