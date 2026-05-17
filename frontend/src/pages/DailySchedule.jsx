import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Sun, Users, Flame, Mic, Music, Moon } from 'lucide-react';

export default function DailySchedule() {
  
  // Your exact official schedule data!
  const scheduleData = [
    { 
      time: "05:00 - 6:00", 
      title: "Geetha Parayanam", 
      desc: "Early morning chanting of the sacred Bhagavad Gita to start the day with divine vibrations.", 
      icon: BookOpen,
      imagePlaceholder: "bg-gradient-to-br from-orange-200 to-orange-100"
    },
    { 
      time: "06:30 - 08:30", 
      title: "Bhagavadgeetha classes to kids", 
      desc: "Imparting spiritual wisdom, slokas, and cultural values to the younger generation.", 
      icon: Users,
      imagePlaceholder: "bg-gradient-to-br from-orange-300 to-orange-200"
    },
    { 
      time: "06:30 - 08:30", 
      title: "Yoga classes", 
      desc: "Morning yoga and meditation sessions for physical health and spiritual well-being.", 
      icon: Sun,
      imagePlaceholder: "bg-gradient-to-br from-yellow-200 to-orange-200"
    },
    { 
      time: "07:00 - 11:30", 
      title: "Rudrabhishekam, Pooja & Maha Nivedhana", 
      desc: "Sacred morning rituals, offerings, and deep prayers performed at the mandirams.", 
      icon: Flame,
      imagePlaceholder: "bg-gradient-to-br from-red-200 to-orange-200"
    },
    { 
      time: "16:30 - 17:30", 
      title: "Pravachanam", 
      desc: "Evening spiritual discourses, teachings, and reflections by learned scholars.", 
      icon: Mic,
      imagePlaceholder: "bg-gradient-to-br from-orange-200 to-yellow-100"
    },
    { 
      time: "18:30 - 19:30", 
      title: "Namasankeerthana & Harathi", 
      desc: "Devotional group singing (Bhajans) followed by the grand evening Harathi.", 
      icon: Music,
      imagePlaceholder: "bg-gradient-to-br from-orange-300 to-red-200"
    },
    { 
      time: "20:00", 
      title: "Tarakeswara Mandiram Closure Timing", 
      desc: "The Mandiram closes for the day, marking the peaceful end of daily rituals.", 
      icon: Moon,
      imagePlaceholder: "bg-gradient-to-br from-indigo-200 to-purple-200"
    },
  ];

  // Animation settings for the elegant slide-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Daily Schedule
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      <p className="text-center text-orange-800/70 italic mb-12 border-b-2 border-orange-200 pb-6 max-w-2xl mx-auto">
        Timings and schedules may vary or extend based on festivals and special occasions.
      </p>
      
      {/* Animated Schedule List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {scheduleData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-orange-100 p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-orange-300 transition-colors"
            >
              
              {/* IMAGE CONTAINER - Forces consistent sizing! */}
              <div className="w-full md:w-40 h-48 md:h-40 flex-shrink-0 rounded-xl overflow-hidden relative shadow-inner">
                {/* HOW TO ADD REAL IMAGES:
                  When you have the pictures, replace the <div> below with an <img> tag like this:
                  <img src="/your-image-name.jpg" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                */}
                <div className={`w-full h-full flex items-center justify-center ${item.imagePlaceholder} transform group-hover:scale-110 transition-transform duration-700`}>
                  <Icon size={48} className="text-orange-900/30 drop-shadow-sm" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-orange-100/80 text-orange-900 px-3 py-1 rounded-full text-sm font-bold mb-3">
                  <Clock size={16} className="text-orange-600" />
                  {item.time}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-950 mb-2">
                  {item.event || item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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