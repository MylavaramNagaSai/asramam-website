import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

/* =========================================
   DESKTOP COMPONENTS (Untouched)
   ========================================= */
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

/* =========================================
   MOBILE COMPONENTS (New Accordion Menus)
   ========================================= */
const MobileNestedItem = ({ item, setIsMainOpen }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  return (
    <div className="px-4 py-1">
      <button 
        onClick={() => setIsSubOpen(!isSubOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-orange-100 rounded-lg shadow-sm text-sm text-orange-900 font-semibold active:scale-[0.98] transition-transform"
      >
        {item.label}
        <ChevronDown size={16} className={`transition-transform duration-300 text-orange-500 ${isSubOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isSubOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-1"
          >
            <div className="bg-white border border-orange-50 rounded-lg py-2 mx-2 shadow-inner">
              {item.subOptions.map((sub, idx) => (
                <a 
                  key={idx}
                  href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsMainOpen(false)}
                  className="block px-6 py-2 text-xs text-gray-600 hover:text-orange-700 hover:bg-orange-50"
                >
                  • {sub}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ title, options = [], headerText, setIsOpen }) => {
  const [isOpen, setIsExpanded] = useState(false);

  if (options.length === 0) {
    return (
      <a 
        href={`#${title.toLowerCase().replace(/\s+/g, '-')}`} 
        onClick={() => setIsOpen(false)}
        className="block px-4 py-4 text-orange-950 font-bold border-b border-orange-100 hover:bg-orange-50 transition-colors"
      >
        {title}
      </a>
    );
  }

  return (
    <div className="border-b border-orange-100">
      <button 
        onClick={() => setIsExpanded(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-4 text-orange-950 font-bold hover:bg-orange-50 transition-colors"
      >
        {title}
        <ChevronDown size={18} className={`transition-transform duration-300 text-orange-600 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-orange-50/30"
          >
            {headerText && (
              <div className="px-4 py-3 text-xs text-orange-800 italic border-b border-orange-100/50 bg-orange-100/30">
                <span className="text-orange-500 font-bold not-italic mr-1">❖</span> 
                {headerText}
              </div>
            )}
            <div className="py-2">
              {options.map((opt, idx) => {
                if (typeof opt === 'string') {
                  return (
                    <a 
                      key={idx}
                      href={`#${opt.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-3 text-sm text-gray-700 hover:text-orange-700 hover:bg-orange-100/50 transition-colors"
                    >
                      {opt}
                    </a>
                  );
                } else {
                  return <MobileNestedItem key={idx} item={opt} setIsMainOpen={setIsOpen} />;
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =========================================
   MAIN NAVBAR COMPONENT
   ========================================= */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const publicationYears = Array.from({ length: 26 }, (_, i) => ({
    label: (2026 - i).toString(),
    subOptions: monthsList
  }));

  const menuData = [
    { title: "Home", options: [] },
    { title: "Asramam", options: ["Asramam History", "Founder Profile", "Lineage (Peethadhipatulu)", "Daily Schedule"] },
    { title: "Amenities", options: ["Devotee Accommodation", "Dining", "Goshala (Cow Shelter)"] },
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
    <header className="sticky top-0 z-50 w-full shadow-lg bg-white">
      
      {/* =========================================
          MOBILE TOP BAR (Visible only on small screens)
          ========================================= */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b-4 border-orange-600 bg-white">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full border border-orange-300 p-0.5 bg-white flex-shrink-0">
            <img src="/logo.png" alt="Asramam Emblem" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-lg font-extrabold text-orange-950 glow-text truncate">
            Sri Satyanandasramam
          </h1>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-1.5 text-orange-700 hover:bg-orange-50 rounded-md transition-colors"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* =========================================
          DESKTOP HEADER & NAV (Hidden on mobile)
          ========================================= */}
      <div className="hidden lg:block">
        <div className="bg-white border-b border-orange-100 py-3">
          <div className="max-w-[98%] mx-auto flex items-center justify-center gap-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
                <img src="/satyananda.jpg" alt="Satyanandha Maharshi" className="w-full h-full object-cover object-center" />
              </div>
              <div className="h-20 w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
                <img src="/brahmananda.jpg" alt="Brahmanandha Swamy" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            <div className="text-center flex-shrink-0">
              <h1 className="text-3xl font-extrabold text-orange-950 flex items-center justify-center gap-3 glow-text">
                <span className="text-orange-600 text-4xl">ॐ</span>
                Sri Satyanandasramam
                <span className="text-orange-600 text-4xl">ॐ</span>
              </h1>
            </div>

            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-orange-50 flex-shrink-0">
                <img src="/srihari.jpg" alt="SriHari Swamy" className="w-full h-full object-cover object-[center_15%]" />
              </div>
              <div className="h-20 w-20 rounded-full border-4 border-orange-400 shadow-md overflow-hidden bg-white flex-shrink-0 flex items-center justify-center p-1">
                <img src="/logo.png" alt="Asramam Emblem" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-white border-b-4 border-orange-600 py-1">
          <div className="w-full px-6">
            <div className="flex items-center justify-center flex-nowrap gap-x-3">
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
      </div>

      {/* =========================================
          MOBILE DRAWER / HAMBURGER MENU
          ========================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
            />
            
            {/* The actual sliding side menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-[85vw] sm:w-96 bg-white z-[70] shadow-2xl overflow-y-auto lg:hidden flex flex-col"
            >
              {/* Drawer Header with Close Button */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-orange-100 px-4 py-4 flex items-center justify-between z-10">
                <span className="font-bold text-orange-950 text-lg uppercase tracking-wider">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* The 4 Images and Name specifically inside the mobile menu */}
              <div className="py-6 px-4 bg-gradient-to-b from-orange-50 to-white border-b border-orange-100 flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-full border-2 border-orange-400 shadow-sm overflow-hidden bg-orange-50">
                    <img src="/satyananda.jpg" alt="Satyanandha Maharshi" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="h-16 w-16 rounded-full border-2 border-orange-400 shadow-sm overflow-hidden bg-orange-50">
                    <img src="/brahmananda.jpg" alt="Brahmanandha Swamy" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                <h2 className="text-[1.35rem] font-extrabold text-orange-950 flex items-center gap-2 glow-text text-center">
                  <span className="text-orange-600">ॐ</span>
                  Sri Satyanandasramam
                  <span className="text-orange-600">ॐ</span>
                </h2>
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-full border-2 border-orange-400 shadow-sm overflow-hidden bg-orange-50">
                    <img src="/srihari.jpg" alt="SriHari Swamy" className="w-full h-full object-cover object-[center_15%]" />
                  </div>
                  <div className="h-16 w-16 rounded-full border-2 border-orange-400 shadow-sm overflow-hidden bg-white p-1">
                    <img src="/logo.png" alt="Asramam Emblem" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* The Mobile Accordion Links */}
              <div className="flex-1 pb-10">
                {menuData.map((item, idx) => (
                  <MobileNavItem 
                    key={idx}
                    title={item.title}
                    options={item.options}
                    isGrid={item.isGrid}
                    headerText={item.headerText}
                    setIsOpen={setMobileMenuOpen}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}