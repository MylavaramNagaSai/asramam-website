import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChefHat, Building2, Home } from 'lucide-react';

export default function DevoteeAccommodation() {
  
  // Animation settings for smooth loading
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Devotee Accommodation
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Main Highlights Section */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="grid md:grid-cols-2 gap-6 mb-16"
      >
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200 shadow-sm flex items-start gap-6">
          <div className="bg-white p-4 rounded-full shadow-md text-orange-600 flex-shrink-0">
            <Users size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-950 mb-2">Stay Capacity</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Asramam provides serene and peaceful accommodation facilities, capable of comfortably hosting up to <strong className="text-orange-900">100 members</strong> at any given time.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200 shadow-sm flex items-start gap-6">
          <div className="bg-white p-4 rounded-full shadow-md text-orange-600 flex-shrink-0">
            <ChefHat size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-950 mb-2">Asramam Kitchen</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Asramam features a fully equipped, large-scale kitchen facility. It is highly capable and designed to seamlessly cook and prepare meals for up to <strong className="text-orange-900">100 members</strong> at once.
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Main Complex (Orange Building) */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-16"
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Image Container */}
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative bg-orange-100">
            <img 
              src="/main-complex.jpg" 
              alt="Main Multi-Story Complex" 
              className="w-full h-full object-cover"
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback text if image isn't found */}
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please ensure the orange building image is named exactly "main-complex.jpg" and placed inside the public folder.
            </div>
          </div>
          
          {/* Details Container */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-orange-950 mb-6 flex items-center gap-3">
              <Building2 className="text-orange-600" size={32} />
              The Main Complex
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors">
                <span className="font-bold text-orange-800 w-24">Ground</span>
                <span className="text-gray-700 text-lg font-medium">Viswa Mimamsa Office</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors">
                <span className="font-bold text-orange-800 w-24">1st Floor</span>
                <span className="text-gray-700 text-lg font-medium">Viswa Vignana Viharam</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors">
                <span className="font-bold text-orange-800 w-24">2nd Floor</span>
                <span className="text-gray-700 text-lg font-medium">Sri Maharshi Library</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors">
                <span className="font-bold text-orange-800 w-24">3rd Floor</span>
                <span className="text-gray-700 text-lg font-medium">Gurudeva Nilayam</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors">
                <span className="font-bold text-orange-800 w-24">4th Floor</span>
                <span className="text-gray-700 text-lg font-medium">Sri Gowrisankar Mandiram</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Bhavans Grid */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Ananda Nilayam */}
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="h-64 bg-orange-100 relative overflow-hidden">
            <img 
              src="/ananda-nilayam.jpg" 
              alt="Ananda Nilayam" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please ensure the image is named exactly "ananda-nilayam.jpg" in the public folder.
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-950 flex items-center gap-2">
              <Home className="text-orange-500" size={24} />
              Ananda Nilayam
            </h3>
            <p className="text-gray-600 mt-2">A peaceful and serene residential block dedicated to inner tranquility.</p>
          </div>
        </div>

        {/* Annapoorna Bhavanam - FIXED TO .PNG */}
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="h-64 bg-orange-100 relative overflow-hidden">
            <img 
              src="/annapoorna-bhavanam.png" 
              alt="Annapoorna Bhavanam" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please ensure the image is named exactly "annapoorna-bhavanam.png" in the public folder.
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-950 flex items-center gap-2">
              <Home className="text-orange-500" size={24} />
              Annapoorna Bhavanam
            </h3>
            <p className="text-gray-600 mt-2">Features spacious corridors and dedicated facilities for devotees.</p>
          </div>
        </div>

        {/* Swarnotsava Bhavanam */}
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="h-64 bg-orange-100 relative overflow-hidden">
            <img 
              src="/swarnotsava-bhavanam.jpg" 
              alt="Swarnotsava Bhavanam" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please ensure the image is named exactly "swarnotsava-bhavanam.jpg" in the public folder.
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-950 flex items-center gap-2">
              <Home className="text-orange-500" size={24} />
              Swarnotsava Bhavanam
            </h3>
            <p className="text-gray-600 mt-2">Special accommodation block established to commemorate the Golden Jubilee.</p>
          </div>
        </div>

        {/* Satajayanthi Bhavanam */}
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="h-64 bg-orange-100 relative overflow-hidden">
            <img 
              src="/satajayanthi-bhavanam.jpg" 
              alt="Satajayanthi Bhavanam" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="absolute inset-0 hidden items-center justify-center text-orange-800/60 font-medium px-6 text-center border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Please ensure the image is named exactly "satajayanthi-bhavanam.jpg" in the public folder.
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-950 flex items-center gap-2">
              <Home className="text-orange-500" size={24} />
              Satajayanthi Bhavanam
            </h3>
            <p className="text-gray-600 mt-2">A beautiful multi-story block with dedicated stairs and ample ventilation for devotee stays.</p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}