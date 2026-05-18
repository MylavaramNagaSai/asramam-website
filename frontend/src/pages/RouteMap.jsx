import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Car, Navigation } from 'lucide-react';

export default function RouteMap() {
  
  const transportOptions = [
    {
      id: "road",
      icon: Car,
      title: "By Road",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      description: "Located near National Highway 16 (Chennai-Kolkata), Nellore is well-connected by a vast network of roads. State-run APSRTC buses and private travels operate frequently from Chennai, Bangalore, and Hyderabad to the Nellore RTC Bus Stand. From Nellore city center, Inamadugu is a short 10-15 minute drive via local auto or taxi."
    },
    {
      id: "train",
      icon: Train,
      title: "By Train",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      description: "The nearest major railhead is Nellore Railway Station (NLR), situated on the Chennai-Howrah main railway line. Almost all express, superfast, and Vande Bharat trains halt here, making it highly accessible. The Asramam is approximately 11 km from the station, and you can easily hire an auto-rickshaw from the station directly to Inamadugu."
    },
    {
      id: "flight",
      icon: Plane,
      title: "By Air",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      description: "The closest domestic airport is Tirupati International Airport (approx. 125 km away). However, Chennai International Airport (approx. 175 km away) is the most frequently used hub offering massive global and domestic connectivity. From either airport, you can hire a direct taxi or catch a train/bus to reach Nellore."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Route Map
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      <p className="text-center text-orange-800/80 italic font-medium mb-12 border-b-2 border-orange-200 pb-6 max-w-2xl mx-auto text-base md:text-lg">
        Plan your divine pilgrimage. Find the exact location of the Asramam and detailed instructions on how to reach us from anywhere in the world.
      </p>

      {/* Interactive Google Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden mb-16"
      >
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 flex items-center gap-3 text-white">
          <MapPin size={24} className="animate-bounce" />
          <h2 className="text-xl font-bold tracking-wide">Sri Satyanandasramam Location</h2>
        </div>
        
        {/* Google Maps iFrame */}
        <div className="w-full h-[400px] md:h-[500px] bg-orange-50 relative">
          <iframe 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sri%20Satyanandha%20Ashram,%20Inamadugu+(Sri%20Satyanandasramam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Asramam Google Map"
            className="absolute inset-0"
          ></iframe>
        </div>
        
        <div className="p-6 md:p-8 bg-gradient-to-br from-[#FFFBF7] to-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-orange-950 mb-1">Inamadugu Headquarters</h3>
            <p className="text-gray-600 text-sm">Sri Satyanandasramam, Inamadugu Village, Kovur Mandal, Nellore District, AP - 524137</p>
          </div>
          <a 
            href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-orange-200 text-orange-700 font-bold rounded-xl hover:bg-orange-50 hover:border-orange-400 transition-colors shadow-sm flex-shrink-0"
          >
            <Navigation size={18} /> Open in Maps App
          </a>
        </div>
      </motion.div>

      {/* Transportation Modes Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-950 text-center uppercase tracking-wide mb-8">
          How to Reach the Asramam
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div 
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-6 shadow-md border ${option.borderColor} hover:shadow-xl transition-shadow duration-300 flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${option.bgColor} ${option.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${option.color}`}>{option.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm flex-grow text-justify">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}