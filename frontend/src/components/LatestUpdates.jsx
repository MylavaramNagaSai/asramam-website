import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

export default function LatestUpdates() {
  // Urgent scrolling announcements
  const flashNews = [
    "Registration for Nithya Annadanam Trust is now open online.",
    "Special Homam scheduled for next Pournami. Devotees can book virtual sevas.",
    "Ashram library timings extended by 2 hours during the summer schedule."
  ];

  // We duplicate the array to create a seamless infinite scrolling ticker
  const tickerText = [...flashNews, ...flashNews].join(" ✦ ");

  // The 3 main news cards
  const updates = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593693397690-362bb9ae26a2?q=80&w=400&auto=format&fit=crop",
      date: "May 10, 2026",
      title: "Foundation Stone Laid for New Gosala",
      excerpt: "With the blessings of the Swamys, the foundation stone for the new extended Gosala was laid today. This expansion will allow the ashram to care for an additional 50 cows.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604882747372-7634f19b88c3?q=80&w=400&auto=format&fit=crop",
      date: "May 05, 2026",
      title: "Summer Vidyadana Camp Concludes",
      excerpt: "The 10-day summer spiritual camp for children concluded with a grand recitation of the Bhagavad Gita by over 200 young participants.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519818314112-9c4c7b8d4c94?q=80&w=400&auto=format&fit=crop",
      date: "April 28, 2026",
      title: "New Digital Platform Launched",
      excerpt: "Sri Sathyanandha Asramam proudly launches its new digital portal, allowing devotees worldwide to book sevas, donate, and access spiritual literature online.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-12">
      
      {/* SECTION 1: The Scrolling Flash News Ticker */}
      <div className="flex items-center bg-white border border-orange-200 rounded-lg shadow-sm overflow-hidden mb-10">
        <div className="bg-orange-600 text-white px-4 py-3 flex items-center gap-2 font-bold z-10 shadow-md whitespace-nowrap">
          <Bell size={18} className="animate-pulse" />
          <span>Flash News</span>
        </div>
        <div className="flex-grow overflow-hidden relative flex items-center bg-orange-50 h-full py-3">
          <motion.div
            className="whitespace-nowrap text-orange-900 font-medium px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25, // Scrolling speed
              repeat: Infinity,
            }}
          >
            {tickerText} ✦ {tickerText}
          </motion.div>
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Latest Updates & Announcements <span className="text-orange-400">❖</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* SECTION 2: The News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((update) => (
          <div key={update.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col">
            
            {/* Card Image */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={update.image} 
                alt={update.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-orange-800 shadow-sm border border-orange-200">
                {update.date}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-orange-950 mb-2 group-hover:text-orange-600 transition-colors">
                {update.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                {update.excerpt}
              </p>
              <div className="mt-auto">
                <span className="text-orange-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <span>&rarr;</span>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}