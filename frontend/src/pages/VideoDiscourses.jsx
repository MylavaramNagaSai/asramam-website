import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, PlaySquare } from 'lucide-react'; // Swapped Youtube for PlaySquare to fix the export error

export default function VideoDiscourses() {
  // Automatically scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Here you can easily add, remove, or change the videos you want to feature on the website
  const featuredVideos = [
    {
      id: "9vrzZLCsLhY", // This is the unique code from the YouTube URL
      title: "Bhagavatam Part 1 (1/3) - Pujya Sri Brahmananda Teertha Swamiji",
      date: "September 1, 2023",
      category: "Srimad Bhagavatam"
    },
    {
      id: "hKHclj0kQY4",
      title: "Bhagavatam Part 1 (2/3) - Pujya Sri Brahmananda Teertha Swamiji",
      date: "September 1, 2023",
      category: "Srimad Bhagavatam"
    },
    {
      id: "x-QKQrg0lSw", 
      title: "SHIVOHAM: Shri Paramahamsa Swami Satyananda Saraswati",
      date: "December 14, 2009",
      category: "Divine Chants"
    },
    // You can add more featured videos here by just pasting the video ID!
    // Example: For youtube.com/watch?v=ABCDEFG, the id is "ABCDEFG"
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-orange-950 text-white py-16 lg:py-24 overflow-hidden border-b-8 border-orange-600">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-orange-400 text-3xl">ॐ</span>
            <span className="uppercase tracking-[0.3em] text-orange-200 text-sm font-bold">Divine Teachings</span>
            <span className="text-orange-400 text-3xl">ॐ</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-white"
          >
            Video Discourses
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-200/80 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Immerse yourself in the sacred wisdom and spiritual discourses of the revered Gurus of Sri Sathyanandha Asramam.
          </motion.p>
        </div>
      </div>

      {/* 2. FEATURED VIDEOS GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-20">
        <div className="flex items-center gap-3 mb-10">
          <PlayCircle className="text-orange-600 w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-black text-orange-950">Featured Pravachanams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-orange-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
            >
              {/* YouTube iFrame Embed */}
              <div className="relative w-full pt-[56.25%] bg-black"> 
                {/* pt-[56.25%] creates a perfect 16:9 aspect ratio box */}
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Details */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2 bg-orange-50 inline-block px-2 py-1 rounded-sm w-max">
                  {video.category}
                </span>
                <h3 className="text-lg font-bold text-orange-950 mb-3 leading-snug group-hover:text-orange-700 transition-colors">
                  {video.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 font-medium">{video.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. YOUTUBE CHANNEL CTA BANNER */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -left-10 -top-10 text-white/10 rotate-12">
            <PlaySquare size={200} />
          </div>
          <div className="absolute -right-10 -bottom-10 text-white/10 -rotate-12">
            <PlaySquare size={200} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-6 shadow-lg">
              <PlaySquare className="text-red-600 w-12 h-12" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Explore All 546 Videos
            </h2>
            <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
              Join our growing digital community on YouTube. Subscribe to Sri Satyanandasramam for daily spiritual updates, live pooja links, and hundreds of recorded discourses.
            </p>
            
            <a 
              href="https://www.youtube.com/@srisatyanandasramam/videos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-black text-lg px-8 py-4 rounded-full shadow-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 flex items-center gap-3 uppercase tracking-wider"
            >
              <PlaySquare size={24} />
              Visit YouTube Channel
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}