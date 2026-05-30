import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, Music, Mic, HelpCircle, ListMusic } from 'lucide-react';

import audioData from '../data/audioData.json';

export default function AudioArchives() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // CHANGED: Default is now 'null' instead of 'All' so nothing loads initially
  const [activeTab, setActiveTab] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;

  // CHANGED: Removed the 'All' option and alphabetically sorted your categories for a cleaner layout
  const uniqueCategories = [...new Set(audioData.map(item => item.cat))].sort();

  // CHANGED: Only filter and load data if a tab is actively selected
  const filteredAudio = activeTab ? audioData.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          track.file.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = track.cat === activeTab;
    return matchesSearch && matchesTab;
  }) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Audio Archives
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-3xl mx-auto text-base md:text-lg">
        Download the divine voice of Bhagavan Sree Satyananda Maharshi and immerse yourself in the soul-stirring Ashram Bhajans for offline peace.
      </p>

      {/* SEARCH BAR */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full flex-1">
          <Search className="absolute left-4 top-3.5 text-orange-600/50" size={20} />
          <input 
            type="text"
            placeholder={activeTab ? "Search audio by title or folder..." : "Select a category below to search..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={!activeTab} // Disables the search bar until they pick a category
            className="w-full pl-12 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-2xl text-orange-950 placeholder-orange-900/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-base font-medium shadow-inner disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
        <div className="bg-orange-100/60 text-orange-950 font-bold px-5 py-3 rounded-2xl text-sm border border-orange-200/50 shadow-sm flex-shrink-0">
          Tracks Found: {filteredAudio.length}
        </div>
      </div>

      {/* DYNAMIC CATEGORY TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide border transition-all duration-300 transform active:scale-95 shadow-sm ${
              activeTab === cat
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-md scale-105'
                : 'bg-white text-orange-950 hover:bg-orange-50/70 border-orange-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* AUDIO CARDS GRID */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredAudio.map((track, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={`${track.file}-${index}`}
              className="bg-white rounded-2xl border border-orange-100 shadow-md p-5 flex flex-col justify-between group hover:shadow-xl hover:border-orange-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-orange-50 pb-3">
                  <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600 shadow-inner group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {track.cat === 'Bhajans' ? <Music size={20} /> : <Mic size={20} />}
                  </div>
                  <span className={`text-[10px] font-extrabold tracking-widest px-2 py-1 rounded-full uppercase border truncate max-w-[150px] ${
                    track.cat === 'Bhajans' ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                  }`} title={track.cat}>
                    {track.cat}
                  </span>
                </div>

                <h3 className="text-base font-bold text-orange-950 mb-6 leading-snug group-hover:text-orange-600 transition-colors break-words">
                  {track.title}
                </h3>
              </div>

              <div className="mt-auto">
                <a 
                  href={track.file.startsWith('/') ? `${baseUrl}${track.file.slice(1)}` : track.file}
                  download={`${track.title}.mp3`}
                  className="w-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98] transition-all shadow-md"
                >
                  <Download size={18} />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* NEW: INITIAL EMPTY STATE (When no tab is selected yet) */}
      {!activeTab && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-orange-50/40 rounded-3xl border-2 border-dashed border-orange-200/60 max-w-md mx-auto"
        >
          <ListMusic size={48} className="mx-auto text-orange-400 mb-4" />
          <p className="text-orange-950 font-bold text-xl">Select an Audio Category</p>
          <p className="text-orange-800/70 text-sm mt-2 px-4 leading-relaxed">
            Please click on one of the specific audio categories above to load and explore the available tracks.
          </p>
        </motion.div>
      )}

      {/* SEARCH EMPTY STATE (When a tab is selected but search yields 0 results) */}
      {activeTab && filteredAudio.length === 0 && (
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