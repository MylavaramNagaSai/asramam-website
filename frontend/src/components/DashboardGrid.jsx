import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

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

  // The New Detailed Upcoming Festivals Array (2026-2027)
  const upcomingFestivals = [
    { date: "May 25, 2026", day: "Monday", title: "Sri Narasimha Jayanti", tithi: "Vaisakha Suddha Chaturdashi", desc: "The divine appearance day of Lord Narasimha Swamy. Special Abhishekam and Sahasranama Archana will be performed at dusk." },
    { date: "May 31, 2026", day: "Sunday", title: "Kurma Jayanti / Buddha Purnima", tithi: "Vaisakha Suddha Purnima", desc: "Observance of the second incarnation of Lord Vishnu (Kurma Avatar) and the birth of Gautama Buddha. Satyanarayana Swamy Vratam will be held." },
    { date: "June 25, 2026", day: "Thursday", title: "Nirjala Ekadashi", tithi: "Jyeshtha Suddha Ekadashi", desc: "The most stringent and sacred Ekadashi of the year. Devotees observe a strict waterless fast to attain the merit of all 24 Ekadashis." },
    { date: "July 15, 2026", day: "Wednesday", title: "Puri Jagannath Rath Yatra", tithi: "Ashada Suddha Vidiya", desc: "The grand chariot festival of Lord Jagannath, Balabhadra, and Subhadra. Special offerings will be made in the Mandiram." },
    { date: "July 29, 2026", day: "Wednesday", title: "Guru Purnima / Vyasa Purnima", tithi: "Ashada Suddha Purnima", desc: "A highly auspicious day dedicated to spiritual teachers. Special pujas, Padapuja to the Gurus, and Abhishekam will be conducted." },
    { date: "August 17, 2026", day: "Monday", title: "Naga Panchami", tithi: "Sravana Suddha Panchami", desc: "Traditional worship of Naga Devatas seeking protection and blessings for the family." },
    { date: "August 21, 2026", day: "Friday", title: "Sri Varalakshmi Vratam", tithi: "Sravana Suddha Friday", desc: "A sacred day for women to perform prayers to Goddess Lakshmi for prosperity and the well-being of their families." },
    { date: "August 28, 2026", day: "Friday", title: "Raksha Bandhan / Sravana Purnima", tithi: "Sravana Suddha Purnima", desc: "Celebration of the bond of protection. Also an auspicious day for Upakarma (changing of the sacred thread)." },
    { date: "September 4, 2026", day: "Friday", title: "Sri Krishna Janmashtami", tithi: "Sravana Bahula Ashtami", desc: "Celebration of the birth of Bhagavan Sri Krishna. Midnight Arati, Utti Utsavam, and special bhajans will be held." },
    { date: "September 14, 2026", day: "Monday", title: "Vinayaka Chavithi", tithi: "Bhadrapada Suddha Chaturthi", desc: "The grand festival honoring Lord Ganesha, the remover of obstacles. Maha Ganapathi Homam will be performed." },
    { date: "September 25, 2026", day: "Friday", title: "Ananta Chaturdashi", tithi: "Bhadrapada Suddha Chaturdashi", desc: "Dedicated to Lord Ananta Padmanabha Swamy. Devotees tie the sacred Ananta thread for divine protection." },
    { date: "October 10, 2026", day: "Saturday", title: "Mahalaya Amavasya", tithi: "Bhadrapada Bahula Amavasya", desc: "A day dedicated to expressing gratitude and performing Tarpanam for departed ancestors." },
    { date: "October 11, 2026", day: "Sunday", title: "Devi Navaratri Arambham", tithi: "Aswayuja Suddha Padyami", desc: "The beginning of the 9-day sacred worship of the Divine Mother, Jagadamba Mahadevi. Kalasha Sthapana will take place." },
    { date: "October 17, 2026", day: "Saturday", title: "Sri Saraswati Puja", tithi: "Aswayuja Suddha Saptami", desc: "Worship of the Goddess of Knowledge. Aksharabhyasam ceremonies for children will be conducted." },
    { date: "October 20, 2026", day: "Tuesday", title: "Vijaya Dasami (Dussehra)", tithi: "Aswayuja Suddha Dasami", desc: "The culmination of Navaratri, celebrating the victory of Dharma over Adharma. Shami Puja will be performed." },
    { date: "November 6, 2026", day: "Friday", title: "Dhana Trayodashi", tithi: "Aswayuja Bahula Trayodashi", desc: "Worship of Lord Dhanvantari for health and Goddess Lakshmi for spiritual and material wealth." },
    { date: "November 8, 2026", day: "Sunday", title: "Deepavali", tithi: "Aswayuja Bahula Amavasya", desc: "The festival of lights. Deepotsavam (lighting of lamps) will be held across the entire Asramam campus." },
    { date: "November 12, 2026", day: "Thursday", title: "Nagula Chavithi", tithi: "Karthika Suddha Chavithi", desc: "An auspicious day in Andhra Pradesh for the worship of Naga Devatas, especially by fasting women." },
    { date: "November 24, 2026", day: "Tuesday", title: "Karthika Purnima", tithi: "Karthika Suddha Purnima", desc: "Highly auspicious for Lord Shiva. Jwala Thoranam, Deepa Daanam, and Sahasra Lingarchana at Sri Tarakeswara Mandir." },
    { date: "December 14, 2026", day: "Monday", title: "Subrahmanya Sashti", tithi: "Margashira Suddha Sashti", desc: "Celebration of the victory of Lord Subrahmanya over the demon Tarakasura. Special Abhishekam is performed." },
    { date: "December 29, 2026", day: "Tuesday", title: "Vaikuntha Ekadashi", tithi: "Margashira Suddha Ekadashi", desc: "The day the gates of Vaikuntha are opened, and the day the Bhagavad Gita was spoken. Special darshan through the Vaikuntha Dwaram." },
    { date: "January 13, 2027", day: "Wednesday", title: "Bhogi", tithi: "Pushya Masam", desc: "The first day of the harvest festival. The traditional Bhogi Mantalu (bonfire) will be lit early morning." },
    { date: "January 14, 2027", day: "Thursday", title: "Makara Sankranti", tithi: "Pushya Masam", desc: "The grand harvest festival. Special Gosamrakshana (cow worship) will take place." },
    { date: "January 23, 2027", day: "Saturday", title: "Ratha Saptami", tithi: "Magha Suddha Saptami", desc: "Surya Jayanti, the birth of the Sun God. Arghya Pradanam is offered to Surya Deva at sunrise." },
    { date: "March 6, 2027", day: "Saturday", title: "Maha Shivaratri", tithi: "Magha Bahula Chaturdashi", desc: "The great night of Shiva. All-night fasting (Jagaran), continuous Rudrabhishekam, and chanting." },
    { date: "March 22, 2027", day: "Monday", title: "Holi / Kama Dahanam", tithi: "Phalguna Suddha Purnima", desc: "The festival of colors and the observance of Kama Dahanam (the burning of worldly desires)." },
    { date: "April 7, 2027", day: "Wednesday", title: "Ugadi (Telugu New Year)", tithi: "Chaitra Suddha Padyami", desc: "Sri Plavanga Nama Samvatsara Arambham. Panchanga Sravanam and distribution of the sacred Ugadi Pachadi." },
    { date: "April 15, 2027", day: "Thursday", title: "Sri Rama Navami", tithi: "Chaitra Suddha Navami", desc: "The divine appearance day of Lord Rama. The grand Sri Sita Rama Kalyanam will be performed at the Mandiram." }
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
             <img src="/upcoming.jpg" alt="Events" className="w-full h-full object-cover" />
          </div>
          <div className="bg-orange-50/30 flex-grow overflow-y-auto h-64 p-4">
            <div className="space-y-4">
              {upcomingFestivals.map((fest, idx) => (
                <div key={idx} className="border-b border-orange-200/50 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">{fest.date}</p>
                    <span className="text-[10px] text-gray-500 font-medium bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">{fest.day}</span>
                  </div>
                  <p className="text-sm text-gray-900 font-bold leading-tight mb-1">{fest.title}</p>
                  <p className="text-xs text-orange-800 font-medium italic mb-2">{fest.tithi}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{fest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 4: Serve to Asramam */}
        <div className="flex flex-col rounded-md shadow-md overflow-hidden bg-white border border-orange-200 h-full">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 text-center">
            Serve to Asramam
          </div>
          
          <Link to="/donations" onClick={() => window.scrollTo(0, 0)} className="h-32 w-full border-b border-orange-100 relative group cursor-pointer overflow-hidden flex-shrink-0 block">
             <img src="/donatenow.jpg" alt="Serve" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-widest uppercase">Donate Now</span>
             </div>
          </Link>
          
          <div className="p-4 bg-orange-50/30 flex-grow flex flex-col justify-center">
            <div className="flex flex-col space-y-1">
              
              <Link 
                to="/e-hundi" 
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-between py-2 border-b border-orange-200/50 text-sm font-medium text-orange-950 hover:text-orange-600 transition-colors"
              >
                <span>E-Hundi</span>
                <span className="text-orange-400">&rarr;</span>
              </Link>
              
              <Link 
                to="/gosala-trust" 
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-between py-2 border-b border-orange-200/50 text-sm font-medium text-orange-950 hover:text-orange-600 transition-colors"
              >
                <span>Gosala Trust</span>
                <span className="text-orange-400">&rarr;</span>
              </Link>

              <Link 
                to="/asramam-development" 
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-between py-2 border-b border-orange-200/50 text-sm font-medium text-orange-950 hover:text-orange-600 transition-colors"
              >
                <span>Asramam Development </span>
                <span className="text-orange-400">&rarr;</span>
              </Link>

              <Link 
                to="/maharshi-annaprasadam-trust" 
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-between py-2 border-b border-orange-200/50 text-sm font-medium text-orange-950 hover:text-orange-600 transition-colors"
              >
                <span>Maharshi Annaprasadam Trust</span>
                <span className="text-orange-400">&rarr;</span>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}