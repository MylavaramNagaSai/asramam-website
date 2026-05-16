import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const NestedMenuItem = ({ item }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <div className="flex items-center justify-between px-4 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors cursor-pointer border-b border-gray-50">
        {item.label}
        <ChevronRight size={14} className="text-orange-400" />
      </div>

      <AnimatePresence>
        {isSubOpen && (
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            className="absolute left-full top-0 ml-1 w-64 bg-white border border-orange-200 shadow-xl rounded-md z-50 py-1"
          >
            {item.subOptions.map((sub, idx) => (
              <a 
                key={idx} 
                href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`} 
                className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
              >
                {sub}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ title, options = [], isGrid = false, headerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-2 py-2 text-orange-950 font-bold hover:text-orange-600 transition-colors text-xs lg:text-sm whitespace-nowrap">
        {title}
        {options.length > 0 && (
          <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && options.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            // FIX: Removed overflow-hidden from this line so side-menus can break out of the box!
            className="absolute left-0 mt-0 bg-white border-t-2 border-orange-600 shadow-2xl rounded-b-md z-50 w-64"
          >
            
            {headerText && (
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-3 border-b border-orange-200 text-xs text-orange-900 text-center italic leading-relaxed">
                <span className="text-orange-500 font-bold not-italic">❖</span> {headerText}
              </div>
            )}

            <div className={`py-2 ${isGrid ? 'grid grid-cols-2 gap-x-1' : ''}`}>
              {options.map((opt, idx) => {
                if (typeof opt === 'string') {
                  return (
                    <a 
                      key={idx} 
                      href={`#${opt.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {opt}
                    </a>
                  );
                } else {
                  return <NestedMenuItem key={idx} item={opt} />;
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const publicationYears = Array.from({ length: 26 }, (_, i) => ({
    label: (2026 - i).toString(),
    subOptions: monthsList
  }));

  const menuData = [
    { title: "Home", options: [] },
    { title: "Asramam", options: ["Asramam History", "Founder Profile", "Lineage (Peethadhipatulu)", "Daily Schedule"] },
    { title: "Amenities", options: ["Devotee Accommodation", "Dining", "Goshala (Cow Shelter)", ] },
    { 
      title: "Sannidhis", 
      options: [
        {
          label: "Sri Tarakeswara Mandir",
          subOptions: [
            "Jagadamba Mahadevi",
            "Bhagavan Murali Krishna",
            "Bhagavan Dattatreya",
            "Bhagavan Satyanarayana Swami",
            "Hanumat Sameta Sita Rama Lakshman",
            "Sri Lakshmi Ganapathi Swami"
          ]
        },
        "Sri Gowri Shankar Mandir",
        "Dhyana Mandir",
        "Venka Mamba Samadhi (Bhakthuralu)"
      ] 
    },
    { title: "Adhistana Mandiram", options: ["About the Mandiram", "Darshan Timings", "Special Rituals"] },
    { title: "Library", options: ["Spiritual Books", "Audio Archives", "Video Discourses"] },
    { 
      title: "Sri Viswa Mimamsa Monthly (Magazine)", 
      options: publicationYears, 
      isGrid: true,
      headerText: "Sri Viswa Mimamsa was started in the year 1947 and is still ongoing."
    },
    { title: "Events", options: ["Upcoming Festivals", "Mahasudarshana Homam", "Monthly Calendar"] },
    { title: "Donations", options: ["E-Hundi", "Annadanam Trust", "Gosala Trust", "Vidyadana Trust"] },
    { title: "About", options: ["Contact Us", "Committees", "Route Map"] },
    { 
      title: "Gallery", 
      options: [
        {
          label: "Satyananda Maharshi",
          subOptions: ["Pics", "Videos"]
        },
        {
          label: "Festivals",
          subOptions: ["Pics", "Videos"]
        },
        "All Asramam Images"
      ] 
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      
      <div className="bg-white border-b border-orange-100 py-2 lg:py-3">
        <div className="max-w-[98%] mx-auto flex items-center justify-center gap-4 lg:gap-6">
          
          <div className="flex gap-2 lg:gap-4">
            <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
              <img src="/satyananda.jpg" alt="Satyanandha Maharshi" className="w-full h-full object-cover object-center" />
            </div>
            <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
              <img src="/brahmananda.jpg" alt="Brahmanandha Swamy" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div className="text-center flex-shrink-0">
            <h1 className="text-xl lg:text-3xl font-extrabold text-orange-950 flex items-center justify-center gap-2 lg:gap-3 glow-text">
              <span className="text-orange-600 text-2xl lg:text-4xl">ॐ</span>
              Sri Satyanandasramam
              <span className="text-orange-600 text-2xl lg:text-4xl">ॐ</span>
            </h1>
          </div>

          <div className="flex gap-2 lg:gap-4">
            <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
              <img src="/srihari.jpg" alt="SriHari Swamy" className="w-full h-full object-cover object-[center_15%]" />
            </div>
            <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-white flex-shrink-0 flex items-center justify-center p-1">
              <img src="/logo.png" alt="Asramam Emblem" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </div>

      <nav className="bg-white border-b-4 border-orange-600 py-1">
        <div className="w-full px-2 lg:px-6">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-x-1 lg:gap-x-3">
            {menuData.map((item) => (
              <NavItem 
                key={item.title} 
                title={item.title} 
                options={item.options} 
                isGrid={item.isGrid}
                headerText={item.headerText}
              />
            ))}
          </div>
        </div>
      </nav>

    </header>
  );
}