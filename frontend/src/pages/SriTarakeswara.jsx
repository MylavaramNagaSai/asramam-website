import React from 'react';
import { motion } from 'framer-motion';
import { Info, Sparkles } from 'lucide-react';

export default function SriTarakeswara() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Sri Tarakeswara Mandir
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-8"></div>
        <p className="text-orange-800/80 italic font-medium max-w-2xl mx-auto text-lg">
          The sacred abode of Lord Shiva, radiating divine energy and profound peace.
        </p>
      </motion.div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        
        {/* Left Side: Lord Shiva Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white"
        >
          {/* Your new Lord Shiva Image */}
          <img 
            src="/tarakeswaraimage.png" 
            alt="Lord Shiva - Sri Tarakeswara" 
            className="w-full h-[500px] object-contain bg-orange-50 hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.src = '/asramamimages/tarakeswara-mandiram.jpg'; }} // Fallback just in case
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white font-bold text-xl">Lord Shiva (Sri Tarakeswara)</h3>
            <p className="text-orange-200 text-sm font-medium">The Presiding Deity</p>
          </div>
        </motion.div>

        {/* Right Side: Information */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Sparkles className="text-orange-500" /> The Divine Abode
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Welcome to the <strong>Sri Tarakeswara Mandir</strong>. The presiding deity of this magnificent temple is <strong>Lord Shiva</strong>, worshipped here as Sri Tarakeswara—the compassionate lord who helps souls cross the ocean of life.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              This temple serves as the spiritual heart of the Asramam. What makes it truly special is that <strong>inside of the mandir, you can see all the gods</strong>. It houses multiple sacred Sannidhis under one roof, allowing devotees to offer their prayers to the entire divine family in a single, peaceful sanctuary.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl shadow-sm border border-orange-200 p-8">
            <h3 className="text-xl font-bold text-orange-950 mb-4 flex items-center gap-2">
              <Info className="text-orange-600" /> Sannidhis Inside the Mandir
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-orange-900 font-medium bg-white/50 px-4 py-2 rounded-lg">
                <span className="text-orange-500">ॐ</span> Jagadamba Mahadevi
              </li>
              <li className="flex items-center gap-2 text-orange-900 font-medium bg-white/50 px-4 py-2 rounded-lg">
                <span className="text-orange-500">ॐ</span> Bhagavan Murali Krishna
              </li>
              <li className="flex items-center gap-2 text-orange-900 font-medium bg-white/50 px-4 py-2 rounded-lg">
                <span className="text-orange-500">ॐ</span> Bhagavan Dattatreya
              </li>
              <li className="flex items-center gap-2 text-orange-900 font-medium bg-white/50 px-4 py-2 rounded-lg">
                <span className="text-orange-500">ॐ</span> Sri Lakshmi Ganapathi
              </li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* 3-Column Architecture Image Gallery */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-orange-100 group h-64">
          <img 
            src="/asramamimages/tarakeswara-mandiram.jpg" 
            alt="Main Mandiram" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold drop-shadow-md">Temple Exterior</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-orange-100 group h-64">
          <img 
            src="/asramamimages/tarakeswara-mandiram-entrance.jpg" 
            alt="Mandiram Entrance" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold drop-shadow-md">Mandiram Entrance</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-orange-100 group h-64">
          <img 
            src="/asramamimages/tarakeswara-mandira-sikharam.jpg" 
            alt="Mandira Sikharam" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold drop-shadow-md">Mandira Sikharam (Gopuram)</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}