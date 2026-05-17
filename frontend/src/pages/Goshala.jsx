import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles } from 'lucide-react';

export default function Goshala() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Goshala (Cow Shelter)
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-64 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 relative group border-8 border-white"
      >
        <img
          src="/goshala.png"
          alt="Sacred Cows at Asramam Goshala"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          onError={(e) => { 
            e.target.style.display = 'none'; 
            e.target.nextSibling.style.display = 'flex'; 
          }}
        />
        <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
           Please ensure your AI image is named exactly "goshala.png" and is in the public folder.
        </div>
      </motion.div>

      {/* Devotional Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-orange-100 to-orange-50 border-l-8 border-orange-500 p-8 rounded-r-3xl shadow-md mb-12 relative overflow-hidden"
      >
        <Sparkles className="absolute top-4 right-4 text-orange-300/50" size={60} />
        <p className="text-xl md:text-2xl text-orange-950 italic font-serif leading-relaxed text-center relative z-10">
          "Gavo Vishwasya Matarah" <br />
          <span className="text-lg text-orange-800/80 mt-3 block font-sans not-italic font-medium">
            The sacred cow is the mother of the universe. To serve, feed, and protect her is to invite the highest divine grace, prosperity, and blessings into your life.
          </span>
        </p>
      </motion.div>

      {/* Details Section (Feeding & Praying) */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Feeding Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-orange-100 flex flex-col items-center text-center group hover:shadow-xl hover:border-orange-300 transition-all"
        >
          <div className="bg-orange-50 p-5 rounded-full text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <Leaf size={40} />
          </div>
          <h3 className="text-2xl font-bold text-orange-950 mb-4">Feed the Gomatha</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Devotees are warmly welcome to visit the Goshala and personally offer fresh green grass, jaggery, and fruits. Experiencing the gentle nature of the cows while feeding them with your own hands brings immense joy and peace.
          </p>
        </motion.div>

        {/* Praying Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-orange-100 flex flex-col items-center text-center group hover:shadow-xl hover:border-orange-300 transition-all"
        >
          <div className="bg-orange-50 p-5 rounded-full text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <Heart size={40} />
          </div>
          <h3 className="text-2xl font-bold text-orange-950 mb-4">Prayers & Blessings</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            In Sanatana Dharma, worshiping the cow is equivalent to worshiping all deities. You may perform circumambulation (Pradakshina) and offer your heartfelt prayers to receive health and spiritual merit for your family.
          </p>
        </motion.div>

      </div>
    </div>
  );
}