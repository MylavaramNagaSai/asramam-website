import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Heart, Coffee, X } from 'lucide-react';

export default function MaharshiAnnaprasadam() {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of filenames with 'dd.jpeg' removed
  const fileNames = [
    'aa.jpeg', 'bb.jpeg', 'cc.jpeg', 'ee.jpeg', 
    'ff.jpeg', 'gg.jpeg', 'hh.jpeg', 'ii.jpeg', 'jj.jpeg'
  ];

  // Map them into our image objects for the gallery
  const images = fileNames.map((fileName, index) => ({
    id: index + 1,
    src: `/dining/${fileName}`,
    alt: `Maharshi Annaprasadam Seva ${index + 1}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Maharshi Annaprasadam
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-8"></div>
      </motion.div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-orange-100 p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
            <Leaf className="text-green-600" /> Nithya Annaprasadam
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Feeding the hungry and providing sacred food to devotees is one of the highest forms of selfless service. Established on the divine principles of Sri Sathyanandha Maharshi, the Asramam strictly observes <strong>Nithya Annaprasadam</strong> (continuous feeding). 
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Every day, hundreds of devotees, sadhus, and visitors are served pure, hygienic, and blessed vegetarian meals. The food is prepared with immense devotion, chanting of mantras, and is offered to the Divine before being served as <em>Prasadam</em>. To partake in this Annaprasadam is to receive the direct blessings of the Gurus.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl shadow-sm border border-orange-200 p-8 flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold text-orange-950 mb-6 text-center border-b border-orange-200 pb-4">Seva Guidelines</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Coffee className="text-orange-600 flex-shrink-0 mt-1" size={20} />
              <span className="text-sm text-orange-900 font-medium">Meals are served strictly at designated timings.</span>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span className="text-sm text-orange-900 font-medium">Food is prepared using pure, traditional vegetarian methods.</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="text-red-500 flex-shrink-0 mt-1" size={20} />
              <span className="text-sm text-orange-900 font-medium">Devotees are welcome to volunteer in the kitchen and serving halls.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Gallery Title */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-orange-900">Glimpses of Annaprasada Seva</h3>
        <p className="text-orange-700/70 mt-2">The joy of serving and receiving the divine Prasadam</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedImage(image)}
            // Masonry layout classes
            className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-sm border-2 border-transparent hover:border-orange-300 transition-all duration-300 ${
              index === 0 || index === 5 ? 'md:row-span-2 md:col-span-2' : ''
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-orange-500 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}