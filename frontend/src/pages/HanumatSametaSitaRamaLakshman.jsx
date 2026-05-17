import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function HanumatSametaSitaRamaLakshman() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Hanumat Sameta Sita Rama Lakshman
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: The Divine Image */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center justify-center relative">
          
          {/* Subtle background decoration */}
          <Heart className="absolute top-10 left-10 text-orange-300/40" size={45} />
          <Sparkles className="absolute bottom-10 right-10 text-orange-300/40" size={60} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-xl overflow-hidden group"
          >
            {/* IMAGE SETUP */}
            <img 
              src="/sita-rama-lakshman.jpg" 
              alt="Hanumat Sameta Sita Rama Lakshman" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please rename image to "sita-rama-lakshman.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Information / History */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3">
            The Embodiment of Dharma
          </h2>

          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">T</span>
              he divine Darshan of Seventh avatar of Lord Vishnu - Sri Rama, accompanied by His eternal consort Mata Sita, His devoted brother Lakshmana, and the supreme Bhakta Hanuman, is a sight that purifies the soul. This Sannidhi represents the absolute pinnacle of Dharma, unwavering righteousness, and unconditional love.
            </p>

            <p>
              Sri Rama stands as the ideal son and ruler, Sita Mata as the symbol of purity and devotion, and Lakshmana as the epitome of selfless service. Beside them is Lord Hanuman, whose very breath resonates with the name of Rama, showing devotees that true strength lies in absolute surrender to the Divine.
            </p>

            <p>
              Worshipping at this sacred Sannidhi brings immense peace, family harmony, and protection. Devotees believe that wherever the name of Sri Rama is chanted, Lord Hanuman is spiritually present to bless them with courage, health, and the removal of all life's obstacles.
            </p>
            
          </div>
          
          <div className="mt-10 bg-orange-100/50 p-8 rounded-xl border border-orange-200 shadow-inner italic text-orange-950 text-center relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-xl md:text-2xl font-serif mb-2 font-bold text-orange-600">
                "Sri Rama Rama Rameti, Rame Rame Manorame..."
               </p>
               <p className="text-lg font-sans not-italic text-orange-900/80 mt-3">
                By meditating on the beautiful name of Lord Rama, the mind gets absorbed in divine joy. The name of Rama is as great as the thousand names of God.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}