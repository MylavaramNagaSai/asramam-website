import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wind, BookOpen, Fingerprint } from 'lucide-react';

export default function DhyanaMandir() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Dhyana Mandir
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Hero Section: The Building */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-16"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 h-80 lg:h-[500px]">
            <img 
              src="/dhyana-mandir-ext.jpg" 
              alt="Dhyana Mandiram Exterior" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50">
               Rename building image to "dhyana-mandir-ext.jpg" in public folder.
            </div>
          </div>
          <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-white">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Wind className="text-orange-500" /> The Abode of Silence
            </h2>
            <p className="text-gray-700 text-lg leading-loose text-justify">
              The Dhyana Mandiram stands as a beacon of absolute tranquility within the Asramam. It was constructed specifically to preserve a space for intense spiritual practice, where the noise of the world fades away, leaving only the vibration of the "Pranava" (Om).
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Maharshi Section: Penance & History */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
        
        {/* Left: Maharshi Image & Door Highlight */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-80"
          >
             <img src="/satyananda.jpg" alt="Bhagavan Satyananda Maharshi" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-80"
          >
             <img 
               src="/dhyana-mandir-door.jpg" 
               alt="Carved Wooden Door" 
               className="w-full h-full object-cover" 
               onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
             />
             <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-4 text-center bg-orange-50">
               Rename door image to "dhyana-mandir-door.jpg"
             </div>
          </motion.div>
        </div>

        {/* Right: Maharshi Data */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-orange-950 border-l-4 border-orange-500 pl-4">
            The Maharshi's Tapovanam
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            This sacred location was the personal meditation sanctuary of <strong>Bhagavan Sree Satyananda Maharshi</strong>. It is here that He performed intense <em>Antarmukha Sadhana</em> (Inward Meditation) for decades.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <Sparkles className="text-orange-500 mt-1 flex-shrink-0" size={20} />
              <span><strong>Divine Energy:</strong> The walls of this Mandir are saturated with the spiritual vibrations of the Maharshi's ten years of silent penance.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <Fingerprint className="text-orange-500 mt-1 flex-shrink-0" size={20} />
              <span><strong>Personal Touch:</strong> The beautifully carved wooden door, featuring the Maharshi's likeness, serves as a symbolic entrance into the state of Samadhi He mastered here.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <BookOpen className="text-orange-500 mt-1 flex-shrink-0" size={20} />
              <span><strong>Spiritual Goal:</strong> He meditated here to demonstrate that the goal of human life is to realize the Self through steady contemplation and work.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Meditation Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-orange-100/50 p-10 rounded-3xl border border-orange-200 text-center shadow-inner"
      >
        <p className="text-2xl md:text-3xl font-serif italic text-orange-950 mb-4">
          "When the mind becomes still, the Soul awakens. Within this silence, the Guru's grace flows as an eternal stream."
        </p>
        <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full"></div>
        <p className="mt-4 font-bold text-orange-900 tracking-widest uppercase text-sm">
          Bhagavan Sree Satyananda Maharshi
        </p>
      </motion.div>

    </div>
  );
}