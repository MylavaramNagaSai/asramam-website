import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Moon, Sparkles, Sun } from 'lucide-react';

export default function UpcomingFestivals() {
  // Comprehensive Festival Data from May 2026 to April 2027
  const festivals = [
    {
      id: 1,
      month: "May",
      date: "25",
      year: "2026",
      day: "Monday",
      name: "Sri Narasimha Jayanti",
      thithi: "Vaisakha Suddha Chaturdashi",
      description: "The divine appearance day of Lord Narasimha Swamy. Special Abhishekam and Sahasranama Archana will be performed at dusk."
    },
    {
      id: 2,
      month: "May",
      date: "31",
      year: "2026",
      day: "Sunday",
      name: "Kurma Jayanti / Buddha Purnima",
      thithi: "Vaisakha Suddha Purnima",
      description: "Observance of the second incarnation of Lord Vishnu (Kurma Avatar) and the birth of Gautama Buddha. Satyanarayana Swamy Vratam will be held."
    },
    {
      id: 3,
      month: "June",
      date: "25",
      year: "2026",
      day: "Thursday",
      name: "Nirjala Ekadashi",
      thithi: "Jyeshtha Suddha Ekadashi",
      description: "The most stringent and sacred Ekadashi of the year. Devotees observe a strict waterless fast to attain the merit of all 24 Ekadashis."
    },
    {
      id: 4,
      month: "July",
      date: "15",
      year: "2026",
      day: "Wednesday",
      name: "Puri Jagannath Rath Yatra",
      thithi: "Ashada Suddha Vidiya",
      description: "The grand chariot festival of Lord Jagannath, Balabhadra, and Subhadra. Special offerings will be made in the Mandiram."
    },
    {
      id: 5,
      month: "July",
      date: "29",
      year: "2026",
      day: "Wednesday",
      name: "Guru Purnima / Vyasa Purnima",
      thithi: "Ashada Suddha Purnima",
      description: "A highly auspicious day dedicated to spiritual teachers. Special pujas, Padapuja to the Gurus, and Abhishekam will be conducted."
    },
    {
      id: 6,
      month: "August",
      date: "17",
      year: "2026",
      day: "Monday",
      name: "Naga Panchami",
      thithi: "Sravana Suddha Panchami",
      description: "Traditional worship of Naga Devatas seeking protection and blessings for the family."
    },
    {
      id: 7,
      month: "August",
      date: "21",
      year: "2026",
      day: "Friday",
      name: "Sri Varalakshmi Vratam",
      thithi: "Sravana Suddha Friday (Before Purnima)",
      description: "A sacred day for women to perform prayers to Goddess Lakshmi for prosperity and the well-being of their families."
    },
    {
      id: 8,
      month: "August",
      date: "28",
      year: "2026",
      day: "Friday",
      name: "Raksha Bandhan / Sravana Purnima",
      thithi: "Sravana Suddha Purnima",
      description: "Celebration of the bond of protection. Also an auspicious day for Upakarma (changing of the sacred thread)."
    },
    {
      id: 9,
      month: "September",
      date: "04",
      year: "2026",
      day: "Friday",
      name: "Sri Krishna Janmashtami",
      thithi: "Sravana Bahula Ashtami",
      description: "Celebration of the birth of Bhagavan Sri Krishna. Midnight Arati, Utti Utsavam, and special bhajans will be held."
    },
    {
      id: 10,
      month: "September",
      date: "14",
      year: "2026",
      day: "Monday",
      name: "Vinayaka Chavithi",
      thithi: "Bhadrapada Suddha Chaturthi",
      description: "The grand festival honoring Lord Ganesha, the remover of obstacles. Maha Ganapathi Homam will be performed."
    },
    {
      id: 11,
      month: "September",
      date: "25",
      year: "2026",
      day: "Friday",
      name: "Ananta Chaturdashi",
      thithi: "Bhadrapada Suddha Chaturdashi",
      description: "Dedicated to Lord Ananta Padmanabha Swamy. Devotees tie the sacred Ananta thread for divine protection."
    },
    {
      id: 12,
      month: "October",
      date: "10",
      year: "2026",
      day: "Saturday",
      name: "Mahalaya Amavasya",
      thithi: "Bhadrapada Bahula Amavasya",
      description: "A day dedicated to expressing gratitude and performing Tarpanam for departed ancestors."
    },
    {
      id: 13,
      month: "October",
      date: "11",
      year: "2026",
      day: "Sunday",
      name: "Devi Navaratri Arambham",
      thithi: "Aswayuja Suddha Padyami",
      description: "The beginning of the 9-day sacred worship of the Divine Mother, Jagadamba Mahadevi. Kalasha Sthapana will take place."
    },
    {
      id: 14,
      month: "October",
      date: "17",
      year: "2026",
      day: "Saturday",
      name: "Sri Saraswati Puja",
      thithi: "Aswayuja Suddha Saptami (Mula Nakshatram)",
      description: "Worship of the Goddess of Knowledge. Aksharabhyasam ceremonies for children will be conducted."
    },
    {
      id: 15,
      month: "October",
      date: "20",
      year: "2026",
      day: "Tuesday",
      name: "Vijaya Dasami (Dussehra)",
      thithi: "Aswayuja Suddha Dasami",
      description: "The culmination of Navaratri, celebrating the victory of Dharma over Adharma. Shami Puja will be performed."
    },
    {
      id: 16,
      month: "November",
      date: "06",
      year: "2026",
      day: "Friday",
      name: "Dhana Trayodashi (Dhanteras)",
      thithi: "Aswayuja Bahula Trayodashi",
      description: "Worship of Lord Dhanvantari for health and Goddess Lakshmi for spiritual and material wealth."
    },
    {
      id: 17,
      month: "November",
      date: "08",
      year: "2026",
      day: "Sunday",
      name: "Deepavali",
      thithi: "Aswayuja Bahula Amavasya",
      description: "The festival of lights. Deepotsavam (lighting of lamps) will be held across the entire Asramam campus."
    },
    {
      id: 18,
      month: "November",
      date: "12",
      year: "2026",
      day: "Thursday",
      name: "Nagula Chavithi",
      thithi: "Karthika Suddha Chavithi",
      description: "An auspicious day in Andhra Pradesh for the worship of Naga Devatas, especially by fasting women."
    },
    {
      id: 19,
      month: "November",
      date: "24",
      year: "2026",
      day: "Tuesday",
      name: "Karthika Purnima",
      thithi: "Karthika Suddha Purnima",
      description: "Highly auspicious for Lord Shiva. Jwala Thoranam, Deepa Daanam, and Sahasra Lingarchana at Sri Tarakeswara Mandir."
    },
    {
      id: 20,
      month: "December",
      date: "14",
      year: "2026",
      day: "Monday",
      name: "Subrahmanya Sashti",
      thithi: "Margashira Suddha Sashti",
      description: "Celebration of the victory of Lord Subrahmanya over the demon Tarakasura. Special Abhishekam is performed."
    },
    {
      id: 21,
      month: "December",
      date: "29",
      year: "2026",
      day: "Tuesday",
      name: "Vaikuntha Ekadashi & Gita Jayanti",
      thithi: "Margashira Suddha Ekadashi",
      description: "The day the gates of Vaikuntha are opened, and the day the Bhagavad Gita was spoken. Special darshan through the Vaikuntha Dwaram."
    },
    {
      id: 22,
      month: "January",
      date: "13",
      year: "2027",
      day: "Wednesday",
      name: "Bhogi",
      thithi: "Pushya Masam",
      description: "The first day of the harvest festival. The traditional Bhogi Mantalu (bonfire) will be lit early morning."
    },
    {
      id: 23,
      month: "January",
      date: "14",
      year: "2027",
      day: "Thursday",
      name: "Makara Sankranti",
      thithi: "Pushya Masam (Solar Transit)",
      description: "The grand harvest festival marking the sun's transition into Makara Rasi. Special Gosamrakshana (cow worship) will take place."
    },
    {
      id: 24,
      month: "January",
      date: "23",
      year: "2027",
      day: "Saturday",
      name: "Ratha Saptami",
      thithi: "Magha Suddha Saptami",
      description: "Surya Jayanti, the birth of the Sun God. Arghya Pradanam is offered to Surya Deva at sunrise."
    },
    {
      id: 25,
      month: "March",
      date: "06",
      year: "2027",
      day: "Saturday",
      name: "Maha Shivaratri",
      thithi: "Magha Bahula Chaturdashi",
      description: "The great night of Shiva. All-night fasting (Jagaran), continuous Rudrabhishekam, and chanting."
    },
    {
      id: 26,
      month: "March",
      date: "22",
      year: "2027",
      day: "Monday",
      name: "Holi / Kama Dahanam",
      thithi: "Phalguna Suddha Purnima",
      description: "The festival of colors and the observance of Kama Dahanam (the burning of worldly desires)."
    },
    {
      id: 27,
      month: "April",
      date: "07",
      year: "2027",
      day: "Wednesday",
      name: "Ugadi (Telugu New Year)",
      thithi: "Chaitra Suddha Padyami",
      description: "Sri Plavanga Nama Samvatsara Arambham. Panchanga Sravanam and distribution of the sacred Ugadi Pachadi."
    },
    {
      id: 28,
      month: "April",
      date: "15",
      year: "2027",
      day: "Thursday",
      name: "Sri Rama Navami",
      thithi: "Chaitra Suddha Navami",
      description: "The divine appearance day of Lord Rama. The grand Sri Sita Rama Kalyanam will be performed at the Mandiram."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Sanatana Dharma Festivals
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          Sacred observances and auspicious days for the current Telugu Year (2026 - 2027) according to the traditional Panchangam. Plan your visits to the Asramam and partake in the divine blessings.
        </p>
      </motion.div>

      {/* Timeline List */}
      <div className="relative border-l-4 border-orange-200 ml-4 md:ml-12 pl-6 md:pl-12 space-y-12">
        {festivals.map((festival, index) => (
          <motion.div 
            key={festival.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] md:-left-[58px] top-4 w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-sm z-10"></div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 md:p-8 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:gap-8 group">
              
              {/* Date Box */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-orange-50 rounded-xl border border-orange-100 w-28 h-28 md:w-32 md:h-32 text-center group-hover:bg-orange-500 transition-colors duration-500">
                <span className="text-sm font-bold text-orange-600 uppercase tracking-widest group-hover:text-white transition-colors">{festival.month}</span>
                <span className="text-4xl md:text-5xl font-black text-orange-950 my-1 group-hover:text-white transition-colors">{festival.date}</span>
                <span className="text-xs font-bold text-orange-700/70 uppercase group-hover:text-orange-100 transition-colors">{festival.day}, {festival.year}</span>
              </div>

              {/* Details Box */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-2xl font-bold text-orange-950 mb-2 flex items-center gap-2">
                  {festival.name}
                </h3>
                
                {/* Thithi Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-lg text-sm font-bold w-fit mb-4">
                  <Moon size={16} className="text-amber-600" />
                  {festival.thithi}
                </div>

                <p className="text-gray-700 leading-relaxed text-md">
                  {festival.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}