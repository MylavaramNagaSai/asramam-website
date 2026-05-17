import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun } from 'lucide-react';

export default function BhagavanDattatreya() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Bhagavan Dattatreya
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
              Rename your uploaded file to "bhagavan-dattatreya.jpg" 
              and place it in the public folder!
            */}
            <img 
              src="/bhagavan-dattatreya.jpg" 
              alt="Bhagavan Dattatreya" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please rename image to "bhagavan-dattatreya.jpg" and put in public folder.
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Information / History */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7]">
          
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 border-b border-orange-200 pb-3">
            The Supreme Trinity
          </h2>

          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-6">
            
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">B</span>
              hagavan Dattatreya is the supreme embodiment of the holy trinity: Lord Brahma (the Creator), Lord Vishnu (the Preserver), and Lord Shiva (the Destroyer). Born to the great sage Atri and his devoted wife Anasuya, He represents the ultimate state of spiritual realization and unity consciousness. 
            </p>

            <p>
              In His divine iconography, Bhagavan Dattatreya is depicted with three heads and six hands, holding the spiritual implements of all three deities. He is always accompanied by the sacred cow, Kamadhenu, symbolizing Mother Earth who provides endless nourishment, and four dogs, which represent the four Vedas (Rig, Yajur, Sama, and Atharva) faithfully following the Supreme Truth.
            </p>

            <p>
              As the ultimate Guru (Adi Guru) of the universe, He wanders as an Avadhuta—a mystic who has transcended all worldly attachments and dualities. Worshipping Him in this sacred Sannidhi dispels the darkness of ignorance, harmonizes the mind, and blesses devotees with true Jnana (wisdom), peace, and liberation from the cycle of life.
            </p>
            
          </div>
          
          <div className="mt-10 bg-orange-100/50 p-8 rounded-xl border border-orange-200 shadow-inner italic text-orange-950 text-center relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-xl md:text-2xl font-serif mb-2 font-bold text-orange-600">
                "Digambara Digambara Shripada Vallabha Digambara"
               </p>
               <p className="text-lg font-sans not-italic text-orange-900/80 mt-3">
                O Lord Dattatreya, the one who is clothed by the sky and universe itself, I surrender to Your supreme, formless divine grace.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}