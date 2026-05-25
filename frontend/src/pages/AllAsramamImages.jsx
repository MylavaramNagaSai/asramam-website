import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { massiveImageArchive } from '../imageArchive';

export default function AllAsramamImages() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 24;

  // Initial highlighted website collection
  const curatedImages = [
    { id: 1, src: '/satyananda.jpg', title: 'Bhagavan Sree Satyananda Maharshi', category: 'Gurus & Deities' },
    { id: 2, src: '/brahmananda.jpg', title: 'Sri Brahmananda Swamy', category: 'Gurus & Deities' },
    { id: 3, src: '/srihari.jpg', title: 'Srihari Teertha Swamy', category: 'Gurus & Deities' },
    { id: 4, src: '/jagadamba-mahadevi.jpg', title: 'Jagadamba Mahadevi', category: 'Gurus & Deities' },
    { id: 5, src: '/murali-krishna.jpg', title: 'Bhagavan Murali Krishna', category: 'Gurus & Deities' },
    { id: 6, src: '/bhagavan-dattatreya.jpg', title: 'Bhagavan Dattatreya', category: 'Gurus & Deities' },
    { id: 7, src: '/lakshmi-ganapathi.jpg', title: 'Sri Lakshmi Ganapathi', category: 'Gurus & Deities' },
    { id: 8, src: '/main-complex.jpg', title: 'Asramam Main Complex', category: 'Mandirams' },
    { id: 9, src: '/dhyana-mandir-ext.jpg', title: 'Dhyana Mandir Exterior', category: 'Mandirams' },
    { id: 10, src: '/adhisthana-ext.jpg', title: 'Adhistana Mandiram', category: 'Mandirams' },
    { id: 11, src: '/venka-mamba-ext.jpg', title: 'Venka Mamba Samadhi', category: 'Mandirams' },
    { id: 12, src: '/gowri-shankar-gopuram.jpg', title: 'Gowri Shankar Gopuram', category: 'Mandirams' },
    { id: 13, src: '/goshala.png', title: 'Asramam Goshala', category: 'Asramam Views' }
  ];

  // Merge datasets natively
  const allImages = [...curatedImages, ...massiveImageArchive];
  const categories = ['All', 'Mandirams', 'Gurus & Deities', 'Asramam Views', 'Archive'];

  const filteredImages = activeFilter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeFilter);

  // Pagination bounds calculation
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        All Asramam Images
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-2xl mx-auto text-base md:text-lg">
        Exploring the rich history and beautiful visual moments of our divine ashram premises. Total: {filteredImages.length} items.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm border ${
              activeFilter === category
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-md scale-105'
                : 'bg-white text-orange-950 hover:bg-orange-50 border-orange-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Elements layout */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode='popLayout'>
          {currentImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md border-4 border-white hover:border-orange-200 transition-all"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextElementSibling.style.display = 'flex'; 
                }}
              />
              <div className="hidden absolute inset-0 bg-orange-50 flex-col items-center justify-center text-orange-400">
                <ImageIcon size={40} className="mb-2 opacity-50" />
                <span className="text-xs font-bold px-4 text-center">Image Archive Item</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-sm truncate pr-2">{image.title}</h3>
                  <ZoomIn className="text-orange-400 flex-shrink-0" size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Dynamic Interface Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-orange-200 text-orange-900 disabled:opacity-30 bg-white hover:bg-orange-50"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-sm font-bold text-orange-950 px-4">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-orange-200 text-orange-900 disabled:opacity-30 bg-white hover:bg-orange-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Screen Portal Lightbox container */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-orange-500 transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}