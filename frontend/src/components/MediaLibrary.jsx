import React, { useState } from 'react';
import { PlayCircle, Headphones, Image as ImageIcon, Folder, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- THE AUDIO DATA STRUCTURE ---
// Transcribed exactly from your directory tree
const audioLibraryData = [
  {
    folder: "Bhagavan Sri Satyananda Maharshulavari Geetopanyasamulu",
    children: [
      {
        folder: "01 Chapter 1",
        children: [
          "1- 1-1-A.mp3", "2 1-1-B.mp3", "3 1-2-A.mp3", 
          "4 1-2-B.mp3", "5 1-3-A.mp3", "6 1-3-B.mp3"
        ]
      },
      {
        folder: "02 Chapter 2",
        children: [
          "2-1-A.mp3", "2-1-B.mp3", "2-2-A.mp3", "2-2-B.mp3", 
          "2-3-A.mp3", "2-3-B.mp3", "2-4-A.mp3", "2-4-B.mp3", 
          "2-5-A.mp3", "2-5-B.mp3", "2-6-A.mp3", "2-6-B.mp3", 
          "2-7-A.mp3", "2-7-B.mp3", "2-8-A.mp3", "2-8-B.mp3", 
          "2-9-A.mp3", "2-9-B.mp3"
        ]
      },
      {
        folder: "06 Chapter 6",
        children: [
          "1 6 -1-A.mp3", "2 -6 -1-B.mp3", "3-6 - 2-A.mp3", "4-6 - 2-B.mp3", 
          "5 -6 - 3-A.mp3", "6 -6 - 3-B.mp3", "7 -6 - 4-A.mp3", "8 -6 - 4-B.mp3"
        ]
      },
      {
        folder: "07 Chapter 7",
        children: [
          "1 Chapter7 Part 1-A.mp3", "2 Chapter7 Part 1-B.mp3", "3 Chapter7 Part 1-B1.mp3", 
          "4Chapter7 Part 2-A.mp3", "5Chapter7 Part 2-B.mp3"
        ]
      },
      {
        folder: "08 Chapter 8",
        children: [
          "1 Chapter8 Part 1-A.mp3", "2 Chapter8 Part 1-B.mp3", 
          "3 Chapter8 Part 2-A.mp3", "4 Chapter8 Part 2-B.mp3"
        ]
      },
      {
        folder: "11 Chapter 11",
        children: [
          "Chapter11 Part 1-A.mp3", "Chapter11 Part 1-B.mp3", "Chapter11 Part 2-A.mp3"
        ]
      },
      {
        folder: "12 Chapter 12",
        children: [
          "Chapter12 Part 1-A.mp3", "Chapter12 Part 2-A.mp3", 
          "Chapter12 Part 2-B.mp3", "Chapter12 Part 3-A.mp3", "Chapter12 Part 3-B.mp3"
        ]
      },
      {
        folder: "13 Chapter 13",
        children: [
          "Chapter13 Part 1-A.mp3", "Chapter13 Part 2-B.mp3", 
          "Srihari - Chapter 13 Part 1-B.mp3", "Srihari - Chapter 13 Part 2-A.mp3"
        ]
      },
      {
        folder: "14 Chapter 14",
        children: [
          "Chapter14 Part 1-A.mp3", "Chapter14 Part 1-B.mp3"
        ]
      },
      {
        folder: "15 Chapter 15",
        children: [
          "Chapter15 Part 1-A.mp3", "Chapter15 Part 1-B.mp3"
        ]
      }
    ]
  },
  {
    folder: "Bhagavatam 1",
    children: [
      "Part 011.mp3", "Part 012.mp3", "Part 013.mp3", "Part 014.mp3", "Part 015.mp3", 
      "PART 01.mp3", "PART 02.mp3", "PART 03.mp3", "PART 04.mp3", "PART 05.mp3", 
      "PART 06.mp3", "PART 07.mp3", "PART 08.mp3", "PART 09.mp3"
    ]
  },
  {
    folder: "Tenali 20.12.07",
    children: [
      "A001.mp3", "A001.WAV", "A002.mp3", "A002.WAV", "A003.mp3", "A003.WAV", 
      "A004.mp3", "A004.WAV", "A005.mp3", "A005.WAV", "A006.mp3", "A006.WAV", 
      "A007.mp3", "A007.WAV", "A008.mp3", "A008.WAV", "A010.mp3", "A010.WAV", 
      "A011.mp3", "A011.WAV",
      {
        folder: "Tenali Edited",
        children: [
          "A001.WAV", "A002.WAV", "A003.WAV", "A004.WAV", "A005.WAV", "A006.WAV"
        ]
      }
    ]
  }
];

// --- RECURSIVE FOLDER COMPONENT ---
// This builds the interactive dropdown tree
const AudioNode = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If the item is a string, it's an audio file
  if (typeof item === 'string') {
    return (
      <div 
        className="flex items-center gap-3 py-2 px-4 hover:bg-orange-100 transition-colors border-b border-orange-100/30 group"
        // Indent files based on how deep they are in the folders
        style={{ paddingLeft: `${(depth * 1.5) + 1}rem` }}
      >
        <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 hover:bg-orange-600 hover:scale-110 transition-all shadow-sm">
          <PlayCircle size={16} className="ml-0.5" />
        </button>
        <span className="text-sm font-medium text-orange-900 group-hover:text-orange-700 truncate">{item}</span>
      </div>
    );
  }

  // Otherwise, it's a folder
  return (
    <div className="w-full">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 py-3 px-4 cursor-pointer hover:bg-orange-100 transition-colors border-b border-orange-200/50 ${isOpen ? 'bg-orange-50' : 'bg-white'}`}
        style={{ paddingLeft: `${(depth * 1.5) + 1}rem` }}
      >
        {isOpen ? (
          <FolderOpen size={20} className="text-orange-600 flex-shrink-0" />
        ) : (
          <Folder size={20} className="text-orange-400 flex-shrink-0" />
        )}
        <span className="text-sm font-bold text-orange-950">{item.folder}</span>
      </div>
      
      {/* Animated open/close container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {item.children.map((child, idx) => (
              <AudioNode key={idx} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default function MediaLibrary() {
  const [activeTab, setActiveTab] = useState('audio');

  // Placeholder data for Videos and Images tabs
  const videoFiles = [
    { title: "Maha Kumbhabhishekam 2022", img: "https://youtu.be/0rL_-evK2gM?si=jCn52mcuFeFpkAmM" },
    { title: "Asramam Daily Drone View", img: "https://images.unsplash.com/photo-1590050859556-91361c4dfcc9?q=80&w=300&auto=format&fit=crop" },
    { title: "Gosala Expansion Ceremony", img: "https://images.unsplash.com/photo-1582500054796-08191244e8bc?q=80&w=300&auto=format&fit=crop" },
  ];

 const imageFiles = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
];

  const tabStyle = (tabName) => 
    `flex items-center gap-2 px-6 py-3 font-bold text-sm lg:text-base rounded-t-lg transition-colors cursor-pointer border-b-4 ${
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
        <p className="text-gray-600 mt-2">Explore the divine teachings through audio, video, and imagery.</p>
      </div>

      {/* TABS HEADER */}
      <div className="flex justify-center border-b border-orange-200">
        <div onClick={() => setActiveTab('audio')} className={tabStyle('audio')}>
          <Headphones size={18} /> Pravachanams (Audio)
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
          
          {/* AUDIO TAB CONTENT (THE FOLDER TREE) */}
          {activeTab === 'audio' && (
            <motion.div 
              key="audio" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              // Added max-height and scrolling to keep it contained nicely
              className="border border-orange-200 rounded-lg overflow-y-auto max-h-[600px] bg-white shadow-inner"
            >
              {audioLibraryData.map((node, idx) => (
                <AudioNode key={idx} item={node} />
              ))}
            </motion.div>
          )}

          {/* VIDEO TAB CONTENT */}
          {activeTab === 'video' && (
            <motion.div key="video" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoFiles.map((vid, idx) => (
                <div key={idx} className="group cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 relative">
                    <img src={vid.img} alt={vid.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                  </div>
                  <div className="p-3 bg-white text-center font-medium text-orange-950 text-sm">
                    {vid.title}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* IMAGE TAB CONTENT */}
          {/* IMAGE TAB CONTENT */}
{/* IMAGE TAB CONTENT - UPDATED FOR FULL IMAGES */}
{activeTab === 'image' && (
  <motion.div 
    key="image" 
    initial={{ opacity: 0, y: 10 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -10 }} 
    className="grid grid-cols-1 md:grid-cols-2 gap-6" // Using 2 columns makes the images bigger and clearer
  >
    {imageFiles.map((img, idx) => (
      <div key={idx} className="h-80 bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-orange-100 cursor-pointer flex items-center justify-center p-2">
        <img 
          src={img} 
          alt={`Gallery Item ${idx + 1}`} 
          // object-contain ensures the WHOLE image is visible without cropping
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