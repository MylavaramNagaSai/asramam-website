import React from 'react';
import { motion } from 'framer-motion'; 

export default function DashboardGrid() {
  
  // The daily schedule
  const dailySchedules = [
    { time: "05:00 - 6:00", event: "Geetha Parayanam" },
    { time: "06:30 - 08:30", event: "Bhagavadgeetha classes to kids" },
    { time: "06:30 - 08:30", event: "Yoga classes" },
    { time: "07:00 - 11:30", event: "Rudrabhishekam, Pooja & Maha Nivedhana" },
    { time: "16:30 - 17:30", event: "Pravachanam" },
    { time: "18:30 - 19:30", event: "Namasankeerthana & Harathi" },
    { time: "20:00", event: "Tarakeswara Mandiram Closure Timing" }
  ];

  const loopingSchedules = [...dailySchedules, ...dailySchedules, ...dailySchedules];

  // The New Important Dates Array (With 2026 Dates)
  const importantDates = [
    { date: "Feb 15, 2026", event: "Maha Shivaratri & Satyananda Maharshi Jayanthi" },
    { date: "Mar 27, 2026", event: "Sri Rama Navami" },
    { date: "", event: "Nityanandha Teertha Swami Aradhana" },
    { date: "", event: "Ramana Maharshi Aradhana" },
    { date: "", event: "Brahmanandha Swami Aradhana" },
    { date: "Sep 4, 2026", event: "Sri Krishnashtami" },
    { date: "Sep 14, 2026", event: "Vinayaka Chavithi" },
    { date: "Nov 9 - Dec 8, 2026", event: "Karthika Masam (Includes Koti Somavaram & Karthika Purnima on Nov 23)" },
    { date: "Dec 20, 2026", event: "Margashira Sudha Ekadasi & Geetha Jayanthi" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Restored back to 4 columns to fit the new Important Dates section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* COLUMN 1: Daily Schedule (Infinite Loop Scroll) */}
        <div className="flex flex-col rounded-md shadow-lg overflow-hidden border-2 border-amber-800/20 bg-[#fdf6e3] h-full">
          <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 font-bold py-3 px-4 text-center border-b-4 border-amber-900/50 z-10 shadow-sm relative">
            Day Schedules
          </div>
          
          <div className="relative flex-grow overflow-hidden p-4 h-64">
             <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#fdf6e3] to-transparent z-10 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdf6e3] to-transparent z-10 pointer-events-none"></div>

             <motion.div 
               className="flex flex-col gap-4"
               animate={{ y: ["0%", "-50%"] }}
               transition={{
                 ease: "linear",
                 duration: 20, 
                 repeat: Infinity,
               }}
             >
               {loopingSchedules.map((item, index) => (
                 <div key={index} className="border-b border-amber-800/20 pb-2">
                   <p className="text-amber-900 font-bold text-sm">{item.time}</p>
                   <p className="text-amber-950 text-sm">{item.event}</p>
                 </div>
               ))}
             </motion.div>
          </div>

          <div className="bg-amber-100 border-t border-amber-800/20 p-2 text-center z-10 relative">
            <p className="text-[11px] text-amber-900 italic font-medium leading-tight">
              Timings and schedules may vary or extend based on festivals and special occasions.
            </p>
          </div>
        </div>

        {/* COLUMN 2: Important Dates (Yo-Yo Scroll) */}
        <div className="flex flex-col rounded-md shadow-lg overflow-hidden border-2 border-orange-200 bg-white h-full">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 text-center z-10 shadow-sm relative">
            Important Dates 2026
          </div>
          
          <div className="relative flex-grow overflow-hidden p-4 h-64 bg-orange-50/30">
             <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-orange-50 to-transparent z-10 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-orange-50 to-transparent z-10 pointer-events-none"></div>

             <motion.div 
               className="flex flex-col gap-4 pt-2 pb-6"
               animate={{ y: ["0%", "-60%"] }}
               transition={{
                 ease: "linear",
                 duration: 15, 
                 repeat: Infinity,
                 repeatType: "reverse" // This creates the top-to-bottom, then bottom-to-top effect
               }}
             >
               {importantDates.map((item, index) => (
                 <div key={index} className="border-b border-orange-200 pb-2">
                   {/* If there is a date, show it. If it's empty, show a placeholder so you can fill it later */}
                   {item.date ? (
                     <p className="text-orange-600 font-bold text-xs uppercase tracking-wider">{item.date}</p>
                   ) : (
                     <p className="text-gray-400 font-bold text-[10px] uppercase tracking-wider italic">Date to be announced</p>
                   )}
                   <p className="text-orange-950 font-medium text-sm mt-0.5 leading-snug">{item.event}</p>
                 </div>
               ))}
             </motion.div>
          </div>
        </div>

        {/* COLUMN 3: Upcoming Events */}
        <div className="flex flex-col rounded-md shadow-md overflow-hidden bg-white border border-orange-200 h-full">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 text-center">
            Upcoming Events
          </div>
          <div className="h-32 w-full border-b border-orange-100 flex-shrink-0">
             <img src="https://images.unsplash.com/photo-1514222288957-49f2b33f3824?q=80&w=400&auto=format&fit=crop" alt="Events" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 bg-orange-50/30 flex-grow">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">May 24, 2026</p>
                <p className="text-sm text-gray-800 font-medium">Sri Narasimha Jayanthi Special Homam</p>
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">May 31, 2026</p>
                <p className="text-sm text-gray-800 font-medium">Pournami Garuda Vahana Seva</p>
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">June 15, 2026</p>
                <p className="text-sm text-gray-800 font-medium">Ashram Anniversary Celebrations</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: Serve to Asramam */}
        <div className="flex flex-col rounded-md shadow-md overflow-hidden bg-white border border-orange-200 h-full">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 text-center">
            Serve to Asramam
          </div>
          <div className="h-32 w-full border-b border-orange-100 relative group cursor-pointer overflow-hidden flex-shrink-0">
             <img src="https://images.unsplash.com/photo-1593113580556-9d33b49abeb5?q=80&w=400&auto=format&fit=crop" alt="Serve" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-widest uppercase">Donate Now</span>
             </div>
          </div>
          <div className="p-4 bg-orange-50/30 flex-grow">
            <ul className="text-sm space-y-3 text-orange-950 font-medium">
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2 cursor-pointer hover:text-orange-600">
                <span>Nithya Annadanam</span> <span className="text-orange-400">&rarr;</span>
              </li>
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2 cursor-pointer hover:text-orange-600">
                <span>Gosamrakshana (Gosala)</span> <span className="text-orange-400">&rarr;</span>
              </li>
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2 cursor-pointer hover:text-orange-600">
                <span>Vidyadana Trust</span> <span className="text-orange-400">&rarr;</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-600">
                <span>General Asramam Fund</span> <span className="text-orange-400">&rarr;</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}