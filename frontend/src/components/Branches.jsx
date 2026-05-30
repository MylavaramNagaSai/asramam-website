import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Branches() {
  
  // The complete, translated list of all 32 branches + The Headquarters
  const branches = [
    {
      id: 0,
      isHQ: true,
      city: "Nellore (Headquarters)",
      name: "Sri Sathyanandha Asramam",
      address: "Inamadugu Village, Kovur Mandal, Nellore District, AP - 524137",
      phone: "+91 94402 79712",
      image: "/main-complex.jpg" // Using your actual HQ image!
    },
    { id: 1, isHQ: false, city: "Mumbai", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Mumbai, Maharashtra" },
    { id: 2, isHQ: false, city: "Worli, Mumbai", name: "Gita Satsangamu", address: "Worli, Mumbai, Maharashtra" },
    { id: 3, isHQ: false, city: "Bhiwandi", name: "Sri Satyananda Bhakta Samajamu", address: "Bhiwandi, Maharashtra" },
    { id: 4, isHQ: false, city: "Nellore City", name: "Sri Satyananda Seva Samithi", address: "Nellore, Andhra Pradesh" },
    { id: 5, isHQ: false, city: "Hyderabad", name: "Bhagavan Sri Satyananda Maharshi Gita Satsangamu", address: "Hyderabad, Telangana" },
    { id: 6, isHQ: false, city: "Jamshedpur", name: "Sri Satyananda Bhakta Samajamu", address: "Jamshedpur, Jharkhand" },
    { id: 7, isHQ: false, city: "Nellimarla", name: "Sri Satyananda Seva Samithi", address: "Nellimarla, Vizianagaram District" },
    { id: 8, isHQ: false, city: "Visakhapatnam", name: "Sri Satyananda Viswavihar", address: "Visakhapatnam, Andhra Pradesh" },
    { id: 9, isHQ: false, city: "Kisan Nagar", name: "Bhagavan Sri Satyananda Maharshi Gita Bhakta Janashramamu", address: "Kisan Nagar" },
    { id: 10, isHQ: false, city: "Nizamabad", name: "Bhagavan Sri Satyananda Seva Samithi", address: "Nizamabad, Telangana" },
    { id: 11, isHQ: false, city: "Vannel-B", name: "Sri Sivaramakrishna Tapovanamu", address: "Vannel-B" },
    { id: 12, isHQ: false, city: "Balkonda", name: "Sri Satyananda Maharshi Bhakta Mandali", address: "Balkonda, Telangana" },
    { id: 13, isHQ: false, city: "Timmapur", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Timmapur" },
    { id: 14, isHQ: false, city: "Vempet", name: "Sri Ramakrishna Sankeertana Mandali", address: "Vempet" },
    { id: 15, isHQ: false, city: "Ailapur", name: "Bhagavan Sri Satyananda Maharshi Gitashramamu", address: "Ailapur" },
    { id: 16, isHQ: false, city: "Korutla", name: "Sri Satyananda Gayatri Ashramamu", address: "Korutla, Telangana" },
    { id: 17, isHQ: false, city: "Chintakunta", name: "Sri Satyanandasramamu", address: "Chintakunta" },
    { id: 18, isHQ: false, city: "Keshapur", name: "Sri Satyananda Maharshi Gitashramamu", address: "Keshapur" },
    { id: 19, isHQ: false, city: "Jagtial", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Jagtial, Telangana" },
    { id: 20, isHQ: false, city: "Lingampet", name: "Bhagavan Sri Satyananda Maharshi Bhakta Samajamu", address: "Lingampet" },
    { id: 21, isHQ: false, city: "Mannegudem", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Mannegudem" },
    { id: 22, isHQ: false, city: "Metpalli", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Metpalli, Telangana" },
    { id: 23, isHQ: false, city: "Mendora", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Mendora" },
    { id: 24, isHQ: false, city: "Battapur", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Battapur" },
    { id: 25, isHQ: false, city: "Bhainsa", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Bhainsa, Telangana" },
    { id: 26, isHQ: false, city: "Karimnagar", name: "Sri Satyananda Maharshi Bhakta Mandali", address: "Karimnagar, Telangana" },
    { id: 27, isHQ: false, city: "Chamanpalli", name: "Gita Satsangamu", address: "Chamanpalli" },
    { id: 28, isHQ: false, city: "Armoor", name: "Sri Satyananda Bhakta Samajamu", address: "Armoor, Telangana" },
    { id: 29, isHQ: false, city: "Simhachalam", name: "Sri Satyanandasramamu", address: "Simhachalam, Andhra Pradesh" },
    { id: 30, isHQ: false, city: "Nirmal", name: "Bhagavan Sri Satyananda Maharshi Bhakta Mandali", address: "Nirmal, Telangana" },
    { id: 31, isHQ: false, city: "Munipalli", name: "Sri Maheshwarananda Bhakta Samajamu", address: "Munipalli" },
    { id: 32, isHQ: false, city: "Nadapur", name: "Sri Krishna Gitashramamu", address: "Nadapur, Nizamabad District" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Our Branches <span className="text-orange-400">❖</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Visit our spiritual centers and affiliated Satsangams across the country to participate in local sevas and spiritual gatherings.
        </p>
      </div>

      {/* Grid Layout for Branches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {branches.map((branch) => (
          <div 
            key={branch.id} 
            className={`rounded-xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg flex flex-col 
              ${branch.isHQ ? 'md:col-span-2 lg:col-span-3 md:flex-row border-orange-500 bg-gradient-to-r from-orange-50 to-[#FFFBF7] shadow-md' : 'border-orange-200 bg-white'}`}
          >
            
            {/* Image / Header Block */}
            <div className={`relative overflow-hidden ${branch.isHQ ? 'md:w-2/5 lg:w-1/3 h-56 md:h-auto' : 'h-32 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center border-b border-orange-100'}`}>
              
              {branch.image ? (
                <img src={branch.image} alt={branch.city} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              ) : (
                <span className="text-orange-300 text-6xl opacity-30 select-none">ॐ</span>
              )}
              
              {/* Highlight the Headquarters Tag */}
              {branch.isHQ && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-extrabold px-4 py-2 rounded-full shadow-lg uppercase tracking-widest border border-orange-400/50">
                  Global Headquarters
                </div>
              )}
            </div>

            {/* Branch Details */}
            <div className={`p-6 flex flex-col flex-grow ${branch.isHQ ? 'md:w-3/5 lg:w-2/3 justify-center md:p-8 lg:px-10 lg:py-8' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className={`${branch.isHQ ? 'text-2xl lg:text-3xl' : 'text-xl'} font-bold text-orange-950 mb-1`}>{branch.city}</h3>
                  <h4 className={`${branch.isHQ ? 'text-base lg:text-lg' : 'text-sm'} font-bold text-orange-600`}>{branch.name}</h4>
                </div>
                {/* Desktop Button for HQ */}
                {branch.isHQ && (
                  <button className="hidden md:flex py-2.5 px-6 bg-white border border-orange-300 text-orange-700 rounded-lg font-bold hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors items-center justify-center gap-2 group flex-shrink-0">
                    <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> 
                    Get Directions
                  </button>
                )}
              </div>
              
              {/* HQ Extra Information Block */}
              {branch.isHQ && (
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 border-l-4 border-orange-400 pl-4 bg-white/50 p-3 rounded-r-lg shadow-inner">
                  Established in 1934 by Bhagavan Sree Satyananda Maharshi, the Inamadugu headquarters is a sprawling spiritual sanctuary. It houses the sacred Adhistana Mandiram, the monumental Dhyana Mandir, and serves as the epicenter for continuous Bhakti, Peace & Harmony.
                </p>
              )}

              {/* Address */}
              <div className={`flex items-start gap-3 text-gray-700 leading-relaxed ${branch.isHQ ? 'mb-3 text-sm lg:text-base' : 'mb-4 text-sm'}`}>
                <MapPin className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                <span>{branch.address}</span>
              </div>
              
              {/* Phone (Only renders if a phone number exists) */}
              {branch.phone && (
                <div className={`flex items-center gap-3 text-gray-700 ${branch.isHQ ? 'mb-6 text-sm lg:text-base' : 'mb-8 text-sm'}`}>
                  <Phone className="text-orange-400 flex-shrink-0" size={18} />
                  <span>{branch.phone}</span>
                </div>
              )}
              
              {/* Button (Mobile for HQ, Standard for others) */}
              <button className={`${branch.isHQ ? 'md:hidden mt-auto' : 'mt-auto'} py-2.5 w-full bg-white border border-orange-300 text-orange-700 rounded-lg font-bold hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors flex items-center justify-center gap-2 group`}>
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> 
                Get Directions
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}