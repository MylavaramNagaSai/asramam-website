import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, Search, FileText, Award, Heart, Shield, HelpCircle, Eye } from 'lucide-react';

export default function SpiritualBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Exact file layout map of all 53 files from your directory terminal log
  const booksData = [
    // Asramam / Gurus Core Category
    { title: "Adhistana Mandiram (2020 Edition)", file: "Adhistana Mandiram.p65 2020.pdf", cat: "Asramam" },
    { title: "Dhyaninchutake Jeevimpumu", file: "Dyaninchutake Jeevimpumu.pdf", cat: "Asramam" },
    { title: "Satyanandeeyam (Latest Edition)", file: "E__Books_Satyanandeeyam Latest_.pdf", cat: "Asramam" },
    { title: "Satyananda Jeevita Charitra", file: "Satyananda Jeevita Charitra.pdf", cat: "Asramam" },
    { title: "Sivagamini (28-07-2020)", file: "Sivagamini 28-7-2020.pdf", cat: "Asramam" },
    { title: "Sparks of Spiritual Wisdom (Book)", file: "Sparks of Spiritual Wisdom_Book.pdf", cat: "Asramam" },
    { title: "Sparks of Spiritual Wisdom (Copy)", file: "Sparks of spiritual wisdom - Copy.pdf", cat: "Asramam" },
    { title: "Sparks of Spiritual Wisdom", file: "Sparks of spiritual wisdom.pdf", cat: "Asramam" },
    { title: "Satyavani (English Version)", file: "Satyavani English.pdf", cat: "Asramam" },
    { title: "Vikaasam (Latest Edition)", file: "Vikaasam latest.pdf", cat: "Asramam" },

    // Scriptures and Epics Category
    { title: "Bhagavad Geeta", file: "BHAGAVADGEETA.pdf", cat: "Scriptures" },
    { title: "Ramayana Darshananam", file: "Ramayana Darshananam.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 1. Adi Parvamu", file: "Bharatam_1 Adiparvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam Vol 1", file: "E__Books_Maha Bharatam_1 Mahabh.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam Vol 2", file: "E__Books_Maha Bharatam_2 Mahabh.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 2. Sabha Parvamu", file: "Maha Bharatam_2 Sabha Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 4. Virata Parvamu", file: "Maha Bharatam_4 Virata Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 5. Udyogaparvamu", file: "Maha Bharatam_5 Udyogaparvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 6. Bheesma Parvamu", file: "Maha Bharatam_6 Bheesma Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 7. Drona Parvamu", file: "Maha Bharatam_7 Drona Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 8. Karna Parvamu", file: "Maha Bharatam_8 Karna Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 10. Sowptika Parvamu", file: "Maha Bharatam_10 Sowptika Parvamu.pdf", cat: "Scriptures" },
    { title: "Maha Bharatam - 11. Stree Parvamu", file: "Maha Bharatam_11 Stree Parvamu.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 2. Isa Upanishad", file: "E__Books_Prastanatrayam_2_Esa -.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 3. Taittiriya Upanishad", file: "E__Books_Prastanatrayam_3_Taitt.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 4. Aitareya Upanishad", file: "E__Books_Prastanatrayam_4_Itare.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 5. Brihadaranyaka Upanishad", file: "E__Books_Prastanatrayam_5_Briha.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 6. Kaivalya Upanishad", file: "E__Books_Prastanatrayam_6_Kaiva.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 7. Geeta Bhashyam", file: "E__Books_Prastanatrayam_7_Geeta.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 8. Brahma Sutras (E)", file: "E__Books_Prastanatrayam_8_BrahmSutrani.pdf", cat: "Scriptures" },
    { title: "Prasthanatrayam - 8. Brahma Sutras", file: "Prastanatrayam_8_BrahmSutrani.pdf", cat: "Scriptures" },

    // Poojas, Havanas and Stotras Category
    { title: "Bhajanavali Complete", file: "E__Books_Bhajanavali_Bhajanaval.pdf", cat: "Poojas" },
    { title: "Lakshmi Sahasranama Stotram", file: "E__Books_Laksmi sahasranama sto.pdf", cat: "Poojas" },
    { title: "Khadgamala Book", file: "KADGAMALA BOOK.pdf", cat: "Poojas" },
    { title: "Lalita Sahasranamam 16", file: "Lalita Sahasranamam 16.pdf", cat: "Poojas" },
    { title: "Mantra Pushpam", file: "Mantrapusham.pdf", cat: "Poojas" },
    { title: "Pooja Havana Vidhanamu", file: "Pooja Havana vidhanamu.pdf", cat: "Poojas" },
    { title: "Shiva Pooja Vidhanam", file: "shiva pooja.pdf", cat: "Poojas" },
    { title: "Sri Datta Stotram", file: "Sri datta stotram.pdf", cat: "Poojas" },

    // Wisdom, Shatakams and Morals Category
    { title: "Chanakya Neeti Sutram", file: "chankya Neeti Sutram.pdf", cat: "Wisdom" },
    { title: "Sumathi Sathakam", file: "E__Books_sumathi sathakam (Srih.pdf", cat: "Wisdom" },
    { title: "Jagadanba Satakam", file: "Jagadanba Satakam.pdf", cat: "Wisdom" },
    { title: "Subhasita Ratnamala", file: "Subhasita Ratnamala.p6.pdf", cat: "Wisdom" },
    { title: "Upadesa Ratnavali", file: "Upadesa Ratnavali.pdf", cat: "Wisdom" },

    // General / Monastic Teachings Category
    { title: "Sahitya Sarvaswamu", file: "E__Books_Sahitya Sarvaswamu-Par.pdf", cat: "General" },
    { title: "Sri Rama Raksha Stotra", file: "E__Books_Srirama Raksha Sarva j.pdf", cat: "General" },
    { title: "Jnana Deepika Rachaita", file: "Jnana Deepika Rachaita.pdf", cat: "General" },
    { title: "Kisan Nagar History", file: "Kisan Ngar.pdf", cat: "General" },
    { title: "Krishnarjuna Samvadamu", file: "Krishnarjuna samvadamu.pdf", cat: "General" },
    { title: "Sanyasa Grahana Paddati", file: "Sanyasa Grahana Paddati.pdf", cat: "General" },
    { title: "Sirasa Namami", file: "sirasa Namami.pdf", cat: "General" },
    { title: "Tyagaraja Keertanalu", file: "Tyagaraj Keertanalu.pdf", cat: "General" },
    { title: "Vasudeva Katha Dharmakanda", file: "Vasudeva kaTha Dharmakanda.pdf", cat: "General" }
  ];

  // Live filter computation engine
  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.file.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || book.cat === activeTab;
    return matchesSearch && matchesTab;
  });

  const categories = [
    { id: 'All', name: 'All Books' },
    { id: 'Asramam', name: 'Asramam & Wisdom' },
    { id: 'Scriptures', name: 'Scriptures & Epics' },
    { id: 'Poojas', name: 'Poojas & Stotras' },
    { id: 'Wisdom', name: 'Shatakams & Neeti' },
    { id: 'General', name: 'General Spiritual' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Spiritual Books
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-2xl mx-auto text-base md:text-lg">
        Welcome to the digital divine library. Browse, read online, or download authentic asramam literature and classic scriptures directly onto your device.
      </p>

      {/* Premium Search & Control Bar Container */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full flex-1">
          <Search className="absolute left-4 top-3.5 text-orange-600/50" size={20} />
          <input 
            type="text"
            placeholder="Search books by title or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-2xl text-orange-950 placeholder-orange-900/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-base font-medium shadow-inner"
          />
        </div>
        <div className="bg-orange-100/60 text-orange-950 font-bold px-5 py-3 rounded-2xl text-sm border border-orange-200/50 shadow-sm flex-shrink-0">
          Books Found: {filteredBooks.length}
        </div>
      </div>

      {/* Luxury Filter Tabs Physics Container */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide border transition-all duration-300 transform active:scale-95 shadow-sm ${
              activeTab === cat.id
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-md scale-105'
                : 'bg-white text-orange-950 hover:bg-orange-50/70 border-orange-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid Canvas */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredBooks.map((book, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={book.file}
              className="bg-white rounded-2xl border border-orange-100 shadow-md p-5 flex flex-col justify-between group hover:shadow-xl hover:border-orange-300 transition-all duration-300"
            >
              <div>
                {/* Visual Decorative Heading Asset */}
                <div className="flex items-center justify-between mb-4 border-b border-orange-50 pb-3">
                  <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600 shadow-inner group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <BookOpen size={20} />
                  </div>
                  <span className={`text-xs font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border ${
                    book.cat === 'Asramam' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                    book.cat === 'Scriptures' ? 'bg-indigo-50 text-indigo-800 border-indigo-200' :
                    book.cat === 'Poojas' ? 'bg-rose-50 text-rose-800 border-rose-200' :
                    'bg-orange-50 text-orange-800 border-orange-200'
                  }`}>
                    {book.cat}
                  </span>
                </div>

                {/* Document Information */}
                <h3 className="text-lg font-bold text-orange-950 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-xs font-mono text-gray-400 truncate mb-6" title={book.file}>
                  <FileText size={12} className="inline mr-1 -mt-0.5" />
                  {book.file}
                </p>
              </div>

              {/* NEW SPLIT BUTTON AREA: Preview and Download */}
              <div className="mt-auto pt-2 flex items-center gap-2">
                <a 
                  href={`/books/${book.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border-2 border-orange-200 text-orange-600 font-bold text-xs sm:text-sm py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 hover:bg-orange-50 hover:border-orange-400 active:scale-[0.98] transition-all shadow-sm"
                >
                  <Eye size={16} />
                  Preview
                </a>
                
                <a 
                  href={`/books/${book.file}`}
                  download={book.file}
                  className="flex-1 bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 hover:shadow-lg active:scale-[0.98] transition-all shadow-md border-2 border-transparent"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Condition Layer fallback block */}
      {filteredBooks.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-orange-50/40 rounded-3xl border-2 border-dashed border-orange-200/60 max-w-md mx-auto"
        >
          <HelpCircle size={40} className="mx-auto text-orange-300 mb-3 animate-pulse" />
          <p className="text-orange-950 font-bold text-lg">No books match your criteria</p>
          <p className="text-gray-500 text-sm mt-1 px-4">Try checking your spelling or selecting a different category block from the bar above.</p>
        </motion.div>
      )}

    </div>
  );
}