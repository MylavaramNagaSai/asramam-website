import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function SatsangPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenSatsangPopup');
    
    if (!hasSeenPopup) {
      // Small delay before showing so the website can load first
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenSatsangPopup', 'true');
      }, 1500); 
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg md:max-w-2xl w-full max-h-[90vh] flex flex-col border-4 border-orange-500"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 bg-orange-600 text-white rounded-full p-2 shadow-lg hover:bg-orange-700 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Flyer Image inside scrollable container in case of small screens */}
            <div className="overflow-y-auto bg-orange-50 flex items-center justify-center">
               <img 
                 src="/satsang-invite.jpg" 
                 alt="500th Sanchara Satsang Invitation" 
                 className="w-full h-auto object-contain"
                 // Fallback if the image is still not found in the public folder
                 onError={(e) => { 
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = 'https://via.placeholder.com/800x600?text=Please+Place+satsang-invite.jpg+in+Public+Folder'; 
                 }}
               />
            </div>
            
            {/* Bottom Action Bar */}
            <div className="bg-orange-950 p-4 text-center shrink-0">
                <p className="text-orange-200 font-medium text-sm md:text-base">
                    Join us for the historic 500th Satsang at Kaveri Gardens, Korutla.
                </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}