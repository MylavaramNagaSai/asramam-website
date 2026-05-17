import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, Music, Mic, HelpCircle } from 'lucide-react';

export default function AudioArchives() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Mapped directly from your terminal tree structures
  const audioData = [
    // BHAJANS (Satyananda Pahimam)
    { title: "SSP02 - Sri Gurudeva", file: "/AUDIO/SATYANANDA PAHIMAM/SSP02-Sri gurudeva.mp3", cat: "Bhajans" },
    { title: "SSP03 - Satyananduni Ashramamadivo", file: "/AUDIO/SATYANANDA PAHIMAM/SSP03-Satyananduni ashramamadivo.mp3", cat: "Bhajans" },
    { title: "SSP04 - Satyananda Nee Namamme", file: "/AUDIO/SATYANANDA PAHIMAM/SSP04-Satyananda nee namamme.mp3", cat: "Bhajans" },
    { title: "SSP05 - Bhajana Cheyudamu", file: "/AUDIO/SATYANANDA PAHIMAM/SSP05-Bhajana cheyudamu.mp3", cat: "Bhajans" },
    { title: "SSP06 - Bhagavan Sathyananda", file: "/AUDIO/SATYANANDA PAHIMAM/SSP06-Bhagavan sathyananda.mp3", cat: "Bhajans" },
    { title: "SSP07 - Sadguru Devuni", file: "/AUDIO/SATYANANDA PAHIMAM/SSP07-Sadguru devuni.mp3", cat: "Bhajans" },
    { title: "SSP08 - Inamadugu Satya Devuda", file: "/AUDIO/SATYANANDA PAHIMAM/SSP08-Inamadugu satya devuda.mp3", cat: "Bhajans" },
    { title: "SSP09 - Abhayamiche Guruvu", file: "/AUDIO/SATYANANDA PAHIMAM/SSP09-Abhayamiche guruvu.mp3", cat: "Bhajans" },
    { title: "SSP10 - Sadguru Nadha", file: "/AUDIO/SATYANANDA PAHIMAM/SSP10-Sadguru nadha.mp3", cat: "Bhajans" },
    { title: "SSP11 - Jaya Mangalam", file: "/AUDIO/SATYANANDA PAHIMAM/SSP11-JAya mangalam.mp3", cat: "Bhajans" },

    // GEETOPANYASAMULU (Gita Discourses) - Chapter 1
    { title: "Chapter 1 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/1- 1-1-A.mp3", cat: "Discourses" },
    { title: "Chapter 1 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/2 1-1-B.mp3", cat: "Discourses" },
    { title: "Chapter 1 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/3 1-2-A.mp3", cat: "Discourses" },
    { title: "Chapter 1 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/4 1-2-B.mp3", cat: "Discourses" },
    { title: "Chapter 1 - Part 3-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/5 1-3-A.mp3", cat: "Discourses" },
    { title: "Chapter 1 - Part 3-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/01 Chapter 1/6 1-3-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 2
    { title: "Chapter 2 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-1-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-1-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-2-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-2-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 3-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-3-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 3-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-3-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 4-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-4-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 4-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-4-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 5-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-5-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 5-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-5-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 6-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-6-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 6-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-6-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 7-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-7-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 7-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-7-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 8-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-8-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 8-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-8-B.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 9-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-9-A.mp3", cat: "Discourses" },
    { title: "Chapter 2 - Part 9-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/02 Chapter 2/2-9-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 6
    { title: "Chapter 6 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/1 6 -1-A.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/2 -6 -1-B.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/3-6 - 2-A.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/4-6 - 2-B.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 3-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/5 -6 - 3-A.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 3-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/6 -6 - 3-B.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 4-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/7 -6 - 4-A.mp3", cat: "Discourses" },
    { title: "Chapter 6 - Part 4-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/06 Chapter 6/8 -6 - 4-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 7
    { title: "Chapter 7 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/07 Chapter 7/1 Chapter7 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 7 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/07 Chapter 7/2 Chapter7 Part 1-B.mp3", cat: "Discourses" },
    { title: "Chapter 7 - Part 1-B1", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/07 Chapter 7/3 Chapter7 Part 1-B1.mp3", cat: "Discourses" },
    { title: "Chapter 7 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/07 Chapter 7/4Chapter7 Part 2-A.mp3", cat: "Discourses" },
    { title: "Chapter 7 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/07 Chapter 7/5Chapter7 Part 2-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 8
    { title: "Chapter 8 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/08 Chapter 8/1 Chapter8 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 8 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/08 Chapter 8/2 Chapter8 Part 1-B.mp3", cat: "Discourses" },
    { title: "Chapter 8 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/08 Chapter 8/3 Chapter8 Part 2-A.mp3", cat: "Discourses" },
    { title: "Chapter 8 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/08 Chapter 8/4 Chapter8 Part 2-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 11
    { title: "Chapter 11 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/11 Chapter 11/Chapter11 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 11 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/11 Chapter 11/Chapter11 Part 1-B.mp3", cat: "Discourses" },
    { title: "Chapter 11 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/11 Chapter 11/Chapter11 Part 2-A.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 12
    { title: "Chapter 12 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/12 Chapter 12/Chapter12 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 12 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/12 Chapter 12/Chapter12 Part 2-A.mp3", cat: "Discourses" },
    { title: "Chapter 12 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/12 Chapter 12/Chapter12 Part 2-B.mp3", cat: "Discourses" },
    { title: "Chapter 12 - Part 3-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/12 Chapter 12/Chapter12 Part 3-A.mp3", cat: "Discourses" },
    { title: "Chapter 12 - Part 3-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/12 Chapter 12/Chapter12 Part 3-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 13
    { title: "Chapter 13 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/13 Chapter 13/Chapter13 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 13 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/13 Chapter 13/Srihari - Chapter 13 Part 1-B.mp3", cat: "Discourses" },
    { title: "Chapter 13 - Part 2-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/13 Chapter 13/Srihari - Chapter 13 Part 2-A.mp3", cat: "Discourses" },
    { title: "Chapter 13 - Part 2-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/13 Chapter 13/Chapter13 Part 2-B.mp3", cat: "Discourses" },

    // GEETOPANYASAMULU - Chapter 14 & 15
    { title: "Chapter 14 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/14 Chapter 14/Chapter14 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 14 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/14 Chapter 14/Chapter14 Part 1-B.mp3", cat: "Discourses" },
    { title: "Chapter 15 - Part 1-A", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/15 Chapter 15/Chapter15 Part 1-A.mp3", cat: "Discourses" },
    { title: "Chapter 15 - Part 1-B", file: "/AUDIO/Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu/15 Chapter 15/Chapter15 Part 1-B.mp3", cat: "Discourses" }
  ];

  // Live filter engine
  const filteredAudio = audioData.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          track.file.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || track.cat === activeTab;
    return matchesSearch && matchesTab;
  });

  const categories = [
    { id: 'All', name: 'All Audio' },
    { id: 'Bhajans', name: 'Satyananda Pahimam (Bhajans)' },
    { id: 'Discourses', name: 'Geetopanyasamulu (Discourses)' }
  ];

  // MAGIC FUNCTION: Pauses all other audio elements when one starts playing!
  const handlePlay = (e) => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio) => {
      if (audio !== e.target) {
        audio.pause();
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Audio Archives
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-3xl mx-auto text-base md:text-lg">
        Listen to the divine voice of Bhagavan Sree Satyananda Maharshi and immerse yourself in the soul-stirring Ashram Bhajans. Play online or download for offline peace.
      </p>

      {/* Search Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full flex-1">
          <Search className="absolute left-4 top-3.5 text-orange-600/50" size={20} />
          <input 
            type="text"
            placeholder="Search audio by title or chapter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-2xl text-orange-950 placeholder-orange-900/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-base font-medium shadow-inner"
          />
        </div>
        <div className="bg-orange-100/60 text-orange-950 font-bold px-5 py-3 rounded-2xl text-sm border border-orange-200/50 shadow-sm flex-shrink-0">
          Tracks Found: {filteredAudio.length}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide border transition-all duration-300 transform active:scale-95 shadow-sm ${
              activeTab === cat.id
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-md scale-105'
                : 'bg-white text-orange-950 hover:bg-orange-50/70 border-orange-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Audio Grid Canvas */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredAudio.map((track) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={track.file}
              className="bg-white rounded-2xl border border-orange-100 shadow-md p-5 flex flex-col justify-between group hover:shadow-xl hover:border-orange-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-orange-50 pb-3">
                  <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600 shadow-inner group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {track.cat === 'Bhajans' ? <Music size={20} /> : <Mic size={20} />}
                  </div>
                  <span className={`text-xs font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border ${
                    track.cat === 'Bhajans' ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                  }`}>
                    {track.cat}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-orange-950 mb-4 leading-snug group-hover:text-orange-600 transition-colors">
                  {track.title}
                </h3>
              </div>

              <div className="mt-auto space-y-4">
                {/* Built-in HTML5 Audio Player */}
                <div className="w-full bg-orange-50/50 rounded-xl p-2 border border-orange-100 shadow-inner">
                   <audio 
                     controls 
                     onPlay={handlePlay} // <-- Added the magical auto-pause function right here!
                     className="w-full h-10 outline-none"
                     controlsList="nodownload noplaybackrate"
                   >
                     <source src={track.file} type="audio/mpeg" />
                     Your browser does not support the audio element.
                   </audio>
                </div>

                {/* Download Button */}
                <a 
                  href={track.file}
                  download={track.title + ".mp3"}
                  className="w-full bg-gradient-to-br from-[#FFFBF7] to-orange-50 text-orange-900 border border-orange-200/60 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:from-orange-600 hover:to-amber-600 hover:text-white hover:border-transparent active:scale-[0.98] transition-all shadow-sm"
                >
                  <Download size={16} />
                  Download Audio
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredAudio.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-orange-50/40 rounded-3xl border-2 border-dashed border-orange-200/60 max-w-md mx-auto"
        >
          <HelpCircle size={40} className="mx-auto text-orange-300 mb-3 animate-pulse" />
          <p className="text-orange-950 font-bold text-lg">No audio matches your search</p>
          <p className="text-gray-500 text-sm mt-1 px-4">Try checking your spelling or selecting a different tab.</p>
        </motion.div>
      )}

    </div>
  );
}