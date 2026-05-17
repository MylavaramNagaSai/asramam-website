import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Flower2 } from 'lucide-react';

export default function VenkaMambaSamadhi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Venka Mamba Samadhi
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Hero Section: Exterior & Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-16"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-80 lg:h-[500px]">
            <img 
              src="/venka-mamba-ext.jpg" 
              alt="Venka Mamba Samadhi Exterior" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50">
               Rename exterior image to "venka-mamba-ext.jpg" in public folder.
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#FFFBF7] to-white">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 flex items-center gap-3">
              <Heart className="text-orange-500" /> A Legacy of Devotion
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-loose text-justify">
              The Venka Mamba Samadhi stands as a testament to the power of pure, unconditional devotion. Venka Mamba was a venerable devotee of the Asramam, whose spiritual journey and deep-rooted faith continue to inspire seekers to this day.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-loose mt-4 text-justify">
              This tranquil Mandiram was established to honor her life and provide a space where devotees can connect with the energy of selfless Bhakti.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interior Section: The Sacred Samadhi */}
      <div className="flex flex-col lg:flex-row-reverse gap-12 mb-16 items-center">
        
        {/* Right: Interior Image */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[500px]"
          >
             <img 
               src="/venka-mamba-int.jpg" 
               alt="Sacred Samadhi Interior" 
               className="w-full h-full object-cover" 
               onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
             />
             <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-4 text-center bg-orange-50">
               Rename interior image to "venka-mamba-int.jpg"
             </div>
          </motion.div>
        </div>

        {/* Left: Spiritual Significance */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-orange-950 border-l-4 border-orange-500 pl-4">
            The Sannidhi of Peace
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            Inside the Mandiram rests the sacred Samadhi, meticulously maintained and filled with a serene silence. It is a place for quiet reflection, where one can sit and experience a profound sense of inner calmness.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <Flower2 className="text-orange-500 mt-1 flex-shrink-0" size={24} />
              <span><strong>Eternal Presence:</strong> Venka Mamba’s presence is felt in the stillness, guiding devotees toward a path of humility and love.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <Sparkles className="text-orange-500 mt-1 flex-shrink-0" size={24} />
              <span><strong>Spiritual Solace:</strong> Many devotees visit this Sannidhi specifically to seek mental peace and the strength to overcome worldly attachments.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Devotional Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-orange-100/50 p-10 rounded-3xl border border-orange-200 text-center shadow-inner relative overflow-hidden"
      >
        <Sparkles className="absolute -top-10 -left-10 text-orange-200 opacity-50" size={150} />
        <p className="text-2xl md:text-3xl font-serif italic text-orange-950 mb-4 relative z-10">
          "True devotion is not just a prayer; it is a state of being. Like the fragrance of a flower, it spreads silently, touching every heart with divine love."
        </p>
        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-4"></div>
        <p className="font-bold text-orange-900 tracking-widest uppercase text-sm">
          Sree Satyananda Ashramam
        </p>
      </motion.div>

    </div>
  );
}