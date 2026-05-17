import React from 'react';
import { motion } from 'framer-motion';
import { Building, Flame, History, Radio, Music, Compass, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function AdhistanaMandiram() {
  
  // Updated with your exact museum file names from the public folder!
  const museumItems = [
    {
      title: "The Sacred Veena",
      category: "Divine Music",
      imgSrc: "/museum-veena.jpg",
      icon: Music,
      desc: "The pristine stringed Veena preserved safely inside its classic glass showcase, echoing the celestial hymns and spiritual melodies that resounded within the Asramam premises."
    },
    {
      title: "Vintage Tabletop Radio",
      category: "Personal Items",
      imgSrc: "/museum-radio.jpg",
      icon: Radio,
      desc: "The original valve-based tabletop radio used by Bhagavan Sree Satyananda Maharshi on His wooden stool, serving as His window to look out onto the global events of the era."
    },
    {
      title: "Sacred Padukas Collection",
      category: "Footwear of Sages",
      imgSrc: "/museum-padukas.jpg",
      icon: Sparkles,
      desc: "Rows of highly revered traditional wooden padukas (sandals) worn by the Master during His extensive spiritual travels, symbolizing the footprints of truth and righteousness."
    },
    {
      title: "Sacred Staffs & Canes",
      category: "Monastic Articles",
      imgSrc: "/museum-staffs.jpg",
      icon: Compass,
      desc: "Glass display housing multiple holy walking staffs, spiritual canes, and tools used by the Maharshi during his devotional journeys."
    },
    {
      title: "Holy Vessel Collection",
      category: "Ritual Utensils",
      imgSrc: "/museum-vessels.jpg",
      icon: Layers,
      desc: "Traditional copper and metal vessels neatly arranged inside the display cabinets, used historically during sacred daily offerings."
    },
    {
      title: "Idols & Sacred Elements",
      category: "Altar Artifacts",
      imgSrc: "/museum-artifacts-1.jpg",
      icon: BookOpen,
      desc: "A sprawling cabinet holding diverse small metal and stone deities, a traditional hurricane oil lantern, and distinct components of daily worship."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        About The Mandiram
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>

      {/* Hero Section: The Building Exterior */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-16"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-80 lg:h-[450px]">
            <img 
              src="/dhyana-mandir-ext.jpg" 
              alt="Adhistana Mandiram Exterior" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50 border-2 border-dashed border-orange-300 m-4 rounded-xl">
               Mandiram Building Photo
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-white">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 flex items-center gap-3">
              <Building className="text-orange-500" /> A Two-Story Sanctuary
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-loose text-justify mb-4">
              The Adhistana Mandiram is the spiritual epicenter of the Asramam. This magnificent two-story structure is crowned with a traditional golden Shikara and radiates profound peace.
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <strong>Ground Floor:</strong> The sacred Maha Samadhi of the Gurus.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <strong>First Floor:</strong> "Sadrupa Sadan" - The holy museum.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Ground Floor: The Maha Samadhi */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-orange-950 mb-8 flex items-center justify-center gap-3 text-center">
          <Flame className="text-orange-600" size={32} />
          The Maha Samadhi (Ground Floor)
        </h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-100 mb-10 h-64 md:h-[500px] relative"
        >
          <img 
            src="/tarakeswaramandiram.jpg" 
            alt="Maha Samadhi Hall" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          <div className="hidden h-full items-center justify-center text-orange-800/60 font-medium px-6 text-center bg-orange-50">
             Maha Samadhi Hall view
          </div>
        </motion.div>

        {/* The Gurus Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Founder: Satyananda Maharshi */}
          <div className="bg-[#FFFBF7] rounded-3xl p-8 border border-orange-200 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-900 mb-6 text-center border-b border-orange-200 pb-3">
              Bhagavan Sree Satyananda Maharshi
            </h3>
            <div className="flex gap-4 mb-6 h-48 md:h-64">
              <img src="/satyananda.jpg" alt="Actual Photo" className="w-1/2 rounded-xl object-cover shadow-md border-2 border-white" />
              <img src="/satyananda-idol.jpg" alt="Golden Idol" className="w-1/2 rounded-xl object-cover shadow-md border-2 border-white" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The revered founder of the Asramam. His glorious golden idol sits majestically under the carved black stone canopy. Devotees from all over the world come here to bow before His Samadhi, feeling His eternal, living presence and seeking His divine grace.
            </p>
          </div>

          {/* First Successor: Brahmananda Maharshi */}
          <div className="bg-[#FFFBF7] rounded-3xl p-8 border border-orange-200 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-900 mb-6 text-center border-b border-orange-200 pb-3">
              Sri Brahmananda Maharshi
            </h3>
            <div className="flex gap-4 mb-6 h-48 md:h-64">
              <img src="/brahmananda.jpg" alt="Actual Photo" className="w-1/2 rounded-xl object-cover shadow-md border-2 border-white" />
              <img src="/brahmananda-idol.jpg" alt="Idol" className="w-1/2 rounded-xl object-cover shadow-md border-2 border-white" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The first beloved successor of the Asramam. Taking the mantle after the founder's Maha Samadhi, Sri Brahmananda Maharshi dedicated his life to continuing the divine mission, expanding the Asramam's charitable activities, and guiding devotees with profound love.
            </p>
          </div>

        </div>
      </div>

      {/* First Floor Header: Sadrupa Sadan Banner */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-orange-100 to-orange-50 border-l-8 border-orange-500 p-8 md:p-12 rounded-r-3xl shadow-md relative overflow-hidden">
          <History className="absolute top-8 right-8 text-orange-300/30" size={80} />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-orange-950 mb-4">
              Sadrupa Sadan (First Floor)
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl">
              Ascending to the first floor brings devotees to <strong>Sadrupa Sadan</strong>, a sacred museum carefully preserving the personal belongings, vastrams, and artifacts of Bhagavan Sree Satyananda Maharshi. Explore the spiritual legacy below:
            </p>
          </div>
        </div>
      </div>

      {/* Visual Museum Gallery Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {museumItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden flex flex-col group hover:shadow-2xl hover:border-orange-300 transition-all duration-300"
            >
              <div className="h-64 bg-orange-50 relative overflow-hidden border-b border-orange-100 flex items-center justify-center">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-orange-50 p-6 text-center text-orange-900/40">
                  <IconComponent size={40} className="mb-2 opacity-50" />
                  <span className="text-xs font-mono">Missing: {item.imgSrc}</span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-950 font-bold text-xs px-3 py-1 rounded-full shadow-sm border border-orange-100 tracking-wide uppercase">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-50 rounded-xl text-orange-600 flex-shrink-0 shadow-inner">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-orange-950 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed text-justify flex-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
}