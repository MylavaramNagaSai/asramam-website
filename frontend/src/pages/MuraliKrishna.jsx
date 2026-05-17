import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music } from 'lucide-react';

export default function MuraliKrishna() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Bhagavan Murali Krishna
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: The Divine Image */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center justify-center relative">
          
          {/* Subtle background decoration */}
          <Music className="absolute top-10 left-10 text-orange-300/40" size={40} />
          <Sparkles className="absolute bottom-10 right-10 text-orange-300/40" size={60} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-xl overflow-hidden group"
          >
            {/* IMAGE SETUP: 
              Rename your uploaded file to "murali-krishna.jpg" (no spaces) 
              and place it in the public folder!
            */}
            <img 
              src="/murali-krishna.jpg" 
              alt="Bhagavan Murali Krishna" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please rename image to "murali-krishna.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Information / History */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3">
            The Divine Flutist
          </h2>

          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">B</span>
              hagavan Murali Krishna is the embodiment of divine love, celestial beauty, and infinite joy. At Sri Satyanandasramam, His presence is a source of immense spiritual strength for all devotees. The Murali (flute) held in His sacred hands symbolizes the call of the Divine, inviting the human soul to transcend the material world and merge into the eternal melody of pure consciousness.
            </p>

            <p>
              Decorated with the peacock feather and dressed in vibrant silken vastrams, the idol of Murali Krishna in the Sannidhi radiates a peaceful energy that calms the mind instantly. Devotees often visit this Sannidhi to find solace, believing that just as Krishna guided Arjuna on the battlefield of Kurukshetra, He continues to guide every seeker toward the path of righteousness and internal liberation.
            </p>

            <p>
              Daily poojas and namasankeerthanas are offered to the Lord here, filling the atmosphere with sacred vibrations. Seeking the Darshan of Murali Krishna allows one to experience the "Madhurya Bhava"—the sweet relationship between the devotee and the Divine.
            </p>
            
          </div>
          
          <div className="mt-10 bg-orange-100/50 p-8 rounded-xl border border-orange-200 shadow-inner italic text-orange-950 text-center relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-xl md:text-2xl font-serif mb-2">
                "Kasturi Tilakam Lalata Patale, Vakshasthale Kaustubham..."
               </p>
               <p className="text-lg font-sans not-italic text-orange-900/80">
                I salute that Murali Krishna, whose music enchants the world and whose grace brings light to the darkest corners of the heart.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}