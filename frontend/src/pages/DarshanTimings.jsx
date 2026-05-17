import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Clock, Sparkles, Heart } from 'lucide-react';

export default function DarshanTimings() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Darshan Timings
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Main Container Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Clean Timings Display Cards (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Morning Timing Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-3xl shadow-lg border border-orange-100 flex items-center gap-5 group hover:border-amber-400 transition-all duration-300"
          >
            <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
              <Sun size={32} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">Morning Session</span>
              <h3 className="text-2xl font-extrabold text-orange-950">5:00 AM – 12:00 PM</h3>
              <p className="text-gray-500 text-sm mt-1">Open for early morning prayers, meditation, and morning Aarathi.</p>
            </div>
          </motion.div>

          {/* Evening Timing Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-3xl shadow-lg border border-orange-100 flex items-center gap-5 group hover:border-indigo-400 transition-all duration-300"
          >
            <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
              <Moon size={32} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 block mb-1">Evening Session</span>
              <h3 className="text-2xl font-extrabold text-orange-950">4:00 PM – 8:00 PM</h3>
              <p className="text-gray-500 text-sm mt-1">Open for evening contemplation, group chants, and night Aarathi.</p>
            </div>
          </motion.div>

          {/* Guidelines / Note Box */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-orange-50/60 border border-dashed border-orange-200 p-6 rounded-3xl"
          >
            <h4 className="font-bold text-orange-950 flex items-center gap-2 mb-2">
              <Clock size={18} className="text-orange-600" /> Temple Discipline
            </h4>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
              <li>Please maintain pin-drop silence inside the main hall.</li>
              <li>Mobile phones must be switched off or kept on silent before entering.</li>
              <li>Devotees are welcome to sit and meditate during the open hours.</li>
            </ul>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: The Inside View of Adhistana Mandiram (7 Columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden"
        >
          {/* Inside Image Frame */}
          <div className="h-72 md:h-96 relative bg-orange-50 border-b border-orange-100">
            <img 
              src="sadguruadhisthanamandiraram.jpg" 
              alt="Inside Adhistana Mandiram Hall" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback frame */}
            <div className="absolute inset-0 hidden flex-col items-center justify-center text-orange-900/40 p-6 text-center font-medium">
              <Sparkles size={40} className="mb-2 opacity-50 text-orange-500" />
              <span>Inner View of Adhistana Mandiram Hall</span>
            </div>
          </div>

          {/* Details under the Image */}
          <div className="p-6 md:p-8 bg-[#FFFBF7]">
            <h3 className="text-2xl font-bold text-orange-900 mb-3 flex items-center gap-2">
              <Heart className="text-orange-600 fill-orange-600" size={22} />
              The Sanctum of Absolute Peace
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              Stepping inside the ground floor of the Adhistana Mandiram offers an immediate immersion into spiritual stillness. The vast meditation hall features a highly polished granite layout that beautifully reflects the central golden canopy where the holy Gurus rest. 
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify mt-3">
              Devotees are encouraged to utilize these daily darshan blocks to comfortably sit in the grand hall, align their thoughts, and partake in the continuous wave of positive vibration that charges this sacred premises.
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  );
}