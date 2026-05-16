import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Branches() {
  // Placeholder data - replace these with your actual Ashram branches
  const branches = [
    {
      id: 1,
      isHQ: true,
      city: "Nellore (Headquarters)",
      name: "Sri Sathyanandha Asramam",
      address: "Inamadugu Village, Kovur Mandal, Nellore District, AP - 524137",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1590050859556-91361c4dfcc9?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      isHQ: false,
      city: "Chennai Branch",
      name: "Sri Sathyanandha Spiritual Center",
      address: "123 Temple Street, T. Nagar, Chennai, Tamil Nadu - 600017",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1545620986-7a7019253c0d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      isHQ: false,
      city: "Hyderabad Branch",
      name: "Sri Sathyanandha Dhyana Mandiram",
      address: "45 Ashram Road, Jubilee Hills, Hyderabad, Telangana - 500033",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1514222288957-49f2b33f3824?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Our Branches <span className="text-orange-400">❖</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-4">Visit our spiritual centers across the region to participate in local sevas.</p>
      </div>

      {/* Grid Layout for Branches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {branches.map((branch) => (
          <div 
            key={branch.id} 
            className={`rounded-xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg flex flex-col ${
              branch.isHQ ? 'border-orange-500 bg-orange-50/50' : 'border-orange-200 bg-white'
            }`}
          >
            
            {/* Branch Image */}
            <div className="h-48 relative overflow-hidden">
              <img src={branch.image} alt={branch.city} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              {/* Highlight the Headquarters */}
              {branch.isHQ && (
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  Main Branch
                </div>
              )}
            </div>

            {/* Branch Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-orange-950 mb-1">{branch.city}</h3>
              <h4 className="text-sm font-bold text-orange-600 mb-5">{branch.name}</h4>
              
              <div className="flex items-start gap-3 mb-4 text-sm text-gray-700 leading-relaxed">
                <MapPin className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                <span>{branch.address}</span>
              </div>
              
              <div className="flex items-center gap-3 mb-8 text-sm text-gray-700">
                <Phone className="text-orange-400 flex-shrink-0" size={18} />
                <span>{branch.phone}</span>
              </div>
              
              {/* Button aligns to the bottom */}
              <button className="mt-auto w-full py-2.5 bg-white border border-orange-300 text-orange-700 rounded-lg font-bold hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors flex items-center justify-center gap-2 group">
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