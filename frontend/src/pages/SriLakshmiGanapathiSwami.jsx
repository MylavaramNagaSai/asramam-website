import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun } from 'lucide-react';

export default function SriLakshmiGanapathiSwami() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Sri Lakshmi Ganapathi Swami
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: The Divine Image */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center justify-center relative">
          
          {/* Subtle background decoration */}
          <Sun className="absolute top-10 left-10 text-orange-300/40" size={45} />
          <Sparkles className="absolute bottom-10 right-10 text-orange-300/40" size={60} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-xl overflow-hidden group"
          >
            {/* IMAGE SETUP: 
              Rename your uploaded file to "lakshmi-ganapathi.jpg" 
              and place it in the public folder!
            */}
            <img 
              src="/lakshmi-ganapathi.jpg" 
              alt="Sri Lakshmi Ganapathi Swami" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please rename image to "lakshmi-ganapathi.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Information / History */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3">
            The Remover of Obstacles
          </h2>

          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">S</span>
              ri Lakshmi Ganapathi Swami is the divine union of wisdom and prosperity. As the "Vighnaharta" (Remover of Obstacles), Lord Ganesha is always worshipped first in every ritual to ensure success and peace. In this specific form, He is joined by the energy of Goddess Lakshmi, signifying a blessing that encompasses both spiritual clarity and material abundance.
            </p>

            <p>
              The beautiful black stone idol, adorned in a deep red vastram, exudes an aura of immense protection and energy. Devotees often begin their pilgrimage at the Asramam by visiting this Sannidhi, seeking His permission and grace to proceed with a pure mind and a focused heart.
            </p>

            <p>
              Worshipping Lakshmi Ganapathi Swami is believed to bring harmony to the home, sharp intelligence to children, and the dissolution of any spiritual or physical hurdles. His presence in the Asramam serves as a reminder that through devotion and the removal of the ego, one can attain the ultimate treasure of divine consciousness.
            </p>
            
          </div>
          
          <div className="mt-10 bg-orange-100/50 p-8 rounded-xl border border-orange-200 shadow-inner italic text-orange-950 text-center relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-xl md:text-2xl font-serif mb-2 font-bold text-orange-600">
                "Vakratunda Mahakaya Surya Koti Samaprabha..."
               </p>
               <p className="text-lg font-sans not-italic text-orange-900/80 mt-3">
                O Lord with a curved trunk and a massive body, whose brilliance equals a billion suns, please always ensure my path is free of all obstacles.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}