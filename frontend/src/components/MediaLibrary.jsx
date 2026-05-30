import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, BookOpen, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MediaLibrary() {
  // Default to the new books tab
  const [activeTab, setActiveTab] = useState('books');

  // Direct links to the Official Asramam YouTube Channel
  const videoFiles = [
    { 
      title: "Sri Satyananda Maharshi Life History", 
      img: "https://img.youtube.com/vi/aZ3-2T4X_zU/maxresdefault.jpg", 
      link: "https://www.youtube.com/@srisatyanandasramam" 
    },
    { 
      title: "Daily Asramam Sevas", 
      img: "https://img.youtube.com/vi/V4_sT8_w4n4/maxresdefault.jpg", 
      link: "https://www.youtube.com/@srisatyanandasramam" 
    },
    { 
      title: "Special Sanchara Satsang", 
      img: "https://img.youtube.com/vi/xH2_Y9_zU5g/maxresdefault.jpg", 
      link: "https://www.youtube.com/@srisatyanandasramam" 
    },
  ];

  const imageFiles = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    "/gallery/image4.jpg",
  ];

  const tabStyle = (tabName) => 
    `flex items-center gap-2 px-4 sm:px-6 py-3 font-bold text-sm lg:text-base rounded-t-lg transition-colors cursor-pointer border-b-4 ${
      activeTab === tabName 
        ? 'bg-orange-600 text-white border-orange-800' 
        : 'bg-white text-orange-900 border-transparent hover:bg-orange-50'
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Asramam Digital Archives <span className="text-orange-400">❖</span>
        </h2>
        <p className="text-gray-600 mt-2">Explore the divine teachings through literature, video, and imagery.</p>
      </div>

      {/* TABS HEADER */}
      <div className="flex justify-center border-b border-orange-200 overflow-x-auto">
        <div onClick={() => setActiveTab('books')} className={tabStyle('books')}>
          <BookOpen size={18} /> Viswa Mimamsa (Books)
        </div>
        <div onClick={() => setActiveTab('video')} className={tabStyle('video')}>
          <PlayCircle size={18} /> Seva Videos
        </div>
        <div onClick={() => setActiveTab('image')} className={tabStyle('image')}>
          <ImageIcon size={18} /> Photo Gallery
        </div>
      </div>

      {/* TAB CONTENT WITH ANIMATION */}
      <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-md border border-t-0 border-orange-200 min-h-[300px]">
        <AnimatePresence mode="wait">
          
          {/* BOOKS TAB CONTENT */}
          {activeTab === 'books' && (
            <motion.div 
              key="books" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <BookOpen size={48} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-950 mb-3">
                The Digital Library Collection
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Immerse yourself in decades of spiritual wisdom. We have meticulously digitized over 600 editions of the Sri Viswa Mimamsa Monthly magazine, dating all the way back to November 1947. 
              </p>
              
              <Link 
                to="/sri-viswa-mimamsa-monthly-(magazine)" 
                onClick={() => window.scrollTo(0, 0)}
                className="bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                Open Digital Archive <ExternalLink size={20} />
              </Link>
            </motion.div>
          )}

          {/* VIDEO TAB CONTENT */}
          {activeTab === 'video' && (
            <motion.div 
              key="video" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {videoFiles.map((vid, idx) => (
                  <a 
                    key={idx} 
                    href={vid.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer rounded-xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all block"
                  >
                    <div className="h-48 relative bg-gray-100">
                      <img src={vid.img} alt={vid.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <PlayCircle size={64} className="text-red-600 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="p-4 bg-white text-center font-bold text-orange-950 text-base group-hover:text-orange-600 transition-colors">
                      {vid.title}
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="text-center border-t border-orange-100 pt-6">
                <a 
                  href="https://www.youtube.com/@srisatyanandasramam" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-red-600 font-bold hover:bg-red-50 px-6 py-3 rounded-full transition-colors border border-red-100"
                >
                  <PlayCircle size={24} /> Subscribe & View All Videos on YouTube
                </a>
              </div>
            </motion.div>
          )}

          {/* IMAGE TAB CONTENT */}
          {activeTab === 'image' && (
            <motion.div 
              key="image" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {imageFiles.map((img, idx) => (
                <div key={idx} className="h-80 bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-orange-100 cursor-pointer flex items-center justify-center p-2">
                  <img 
                    src={img} 
                    alt={`Gallery Item ${idx + 1}`} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
              
              <div className="col-span-1 md:col-span-2 text-center mt-4">
                <Link 
                  to="/all-asramam-images" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-orange-600 font-bold hover:underline transition-all flex items-center justify-center gap-2"
                >
                  View Full Gallery <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}