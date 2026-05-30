import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Calendar, BookOpen, FileText, ChevronDown, Filter } from 'lucide-react';
import magazineData from '../data/magazineData.json'; 

export default function ViswaMimamsaMagazine() {
  const startYear = 1947;
  const endYear = 2026;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => (endYear - i).toString());

  const [selectedYear, setSelectedYear] = useState('2024'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const baseUrl = import.meta.env.BASE_URL;

  const monthOrder = {
    "January": 1, "February": 2, "March": 3, "April": 4,
    "May": 5, "June": 6, "July": 7, "August": 8,
    "September": 9, "October": 10, "November": 11, "December": 12
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredMagazines = useMemo(() => {
    return magazineData
      .filter(mag => mag.year === selectedYear)
      .sort((a, b) => {
        const firstMonthA = a.monthDisplay.split('-')[0];
        const firstMonthB = b.monthDisplay.split('-')[0];
        return (monthOrder[firstMonthA] || 99) - (monthOrder[firstMonthB] || 99);
      });
  }, [selectedYear]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Sri Viswa Mimamsa Monthly
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-3xl mx-auto text-base md:text-lg">
        The official magazine of Sri Satyanandasramam. Select a year below to read or download the sacred monthly publications dating back to November 1947.
      </p>

      {/* CUSTOM ANIMATED DROPDOWN PANEL - CHANGED TO z-20 AND ADDED mt-4 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-orange-100 mb-12 max-w-md mx-auto text-center relative z-20 mt-4">
        <label className="text-sm font-bold text-orange-800 tracking-wide uppercase flex items-center justify-center gap-2 mb-3">
          <Calendar size={18} /> Select Archive Year
        </label>
        
        <div className="relative w-full" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-orange-50 border-2 border-orange-200 text-orange-950 rounded-xl px-6 py-4 font-black text-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all shadow-inner"
          >
            <span>{selectedYear}</span>
            <ChevronDown className={`text-orange-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={24} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                // ADDED z-30 HERE TO KEEP THE MENU ABOVE THE BOOKS
                className="absolute left-0 right-0 top-full mt-2 bg-white border border-orange-200 rounded-2xl shadow-2xl overflow-hidden z-30"
              >
                <div className="max-h-80 overflow-y-auto p-3 grid grid-cols-3 sm:grid-cols-4 gap-2 bg-gradient-to-b from-white to-orange-50/30 custom-scrollbar">
                  {years.map(y => {
                    const hasData = magazineData.some(m => m.year === y);
                    
                    return (
                      <button
                        key={y}
                        onClick={() => {
                          setSelectedYear(y);
                          setIsDropdownOpen(false);
                        }}
                        className={`py-3 rounded-xl text-sm font-black transition-all duration-200 ${
                          selectedYear === y 
                            ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md scale-105' 
                            : hasData 
                              ? 'text-orange-900 bg-orange-50/50 hover:bg-orange-100 hover:text-orange-950 hover:scale-105 border border-orange-100'
                              : 'text-gray-400 bg-gray-50 border border-gray-100 cursor-not-allowed'
                        }`}
                      >
                        {y}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Magazine Grid Canvas - KEPT AT z-10 */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredMagazines.length > 0 ? (
            filteredMagazines.map((mag, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${mag.fileName}-${index}`}
                className="bg-white rounded-2xl border border-orange-100 shadow-md p-5 flex flex-col justify-between group hover:shadow-xl hover:border-orange-400 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-orange-50 pb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl text-orange-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <BookOpen size={24} />
                    </div>
                    <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border bg-orange-50 text-orange-800 border-orange-200">
                      {mag.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-orange-950 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                    {mag.monthDisplay} Magazine
                  </h3>
                  
                  <p className="text-xs font-mono text-gray-400 truncate mb-6" title={mag.fileName}>
                    <FileText size={12} className="inline mr-1 -mt-0.5" />
                    File: {mag.fileName}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <a 
                    href={`${baseUrl}VM_Books/${mag.fileName}`}
                    download={`${mag.monthDisplay} ${mag.year} Magazine.pdf`}
                    className="w-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98] transition-all shadow-md"
                  >
                    <Download size={18} />
                    Download Edition
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="col-span-full text-center py-16 bg-orange-50/40 rounded-3xl border-2 border-dashed border-orange-200/60 max-w-md mx-auto"
             >
               <Filter size={40} className="mx-auto text-orange-300 mb-3" />
               <p className="text-orange-950 font-bold text-lg">Archive Pending</p>
               <p className="text-gray-500 text-sm mt-1 px-4">The digital archive for {selectedYear} is currently being digitized and is not yet available.</p>
             </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}