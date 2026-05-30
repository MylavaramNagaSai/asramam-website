import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

export default function LatestUpdates() {
  // Urgent scrolling announcements
  const flashNews = [
    " భగవాన్ శ్రీశ్రీశ్రీ సత్యానంద మహర్షి వారి 500వ సంచార సత్సంగ మహోత్సవం (జూన్ 5, 6, 7 - 2026) కావేరీ గార్డెన్స్, కోరుట్ల యందు జరుగనుండగా భక్తులందరూ సకుటుంబ సపరివార సమేతంగా ఆహ్వానితులే!",
    " You are cordially invited to the historic 500th Sanchara Satsang Mahotsavam on June 5, 6 & 7, 2026, at Kaveri Gardens, Korutla!.",
    " సంస్కృత భాషా శిక్షణ కోసం శ్రీ సత్యానంద మహర్షి వారి ఆన్‌లైన్ వర్చువల్ క్లాసులు ప్రారంభమయ్యాయి. ఇప్పుడే నమోదు చేసుకోండి మరియు ఆధ్యాత్మిక జ్ఞానాన్ని మీ ఇంటి సౌకర్యంలో పొందండి!",
  ];

  // We duplicate the array to create a seamless infinite scrolling ticker
  const tickerText = [...flashNews].join(" ❖ ");

  // The 3 main news cards
  const updates = [
    {
      id: 1,
      image: "/satsang-500.jpg",
      date: "May 25, 2026",
      title: "500th Sanchara Satsang Mahotsavam",
      excerpt: "Join us for the historic 500th Sanchara Satsang Mahotsavam on June 5, 6 & 7, 2026, at Kaveri Gardens, Korutla. All devotees are cordially invited to participate in this divine milestone.",
    },
    {
      id: 2,
      // Using a nice Unsplash placeholder of classic books. You can change this to a local image later if you want!
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop", 
      date: "May 30, 2026",
      title: "Historic Digitization of Asramam Books",
      excerpt: "We are thrilled to announce the completion of a massive digitization project. Over 600 editions of the Sri Viswa Mimamsa Monthly magazine, dating back to 1947, are now beautifully archived and available online.",
    },
    {
      id: 3,
      image: "/portal.png",
      date: "April 28, 2026",
      title: "New Digital Platform Launched",
      excerpt: "Sri Sathyanandha Asramam proudly launches its new digital portal, allowing devotees worldwide to book sevas, donate, and access spiritual literature online.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-12">
      
      {/* SECTION 1: The Scrolling Flash News Ticker (FIXED FOR MOBILE) */}
      <div className="flex items-center h-10 md:h-12 bg-white border border-orange-200 rounded-lg shadow-sm overflow-hidden mb-8 md:mb-10">
        <div className="bg-orange-600 text-white px-3 md:px-4 h-full flex items-center justify-center gap-1.5 md:gap-2 font-bold z-10 shadow-md whitespace-nowrap relative text-xs md:text-base">
          <Bell size={16} className="animate-pulse md:w-5 md:h-5" />
          <span>Flash News</span>
        </div>
        <div className="flex-grow overflow-hidden relative flex items-center bg-orange-50 h-full">
          <motion.div
            className="whitespace-nowrap text-orange-900 font-medium text-xs md:text-base px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 80, 
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
              
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}