import React from 'react';
import { Building2, Map } from 'lucide-react';

export default function Infrastructure() {
  // Expanded the purpose text slightly so the cards look balanced and beautiful
  const buildings = [
    {
      id: 1,
      name: "Sri Tarakeswara Mandiram",
      purpose: "The primary Sannidhi serving as the spiritual heart of the Asramam for daily rituals and prayers.",
      img: "/tarakeswaramandiram.jpg" 
    },
    {
      id: 2,
      name: "Adhistana Mandiram",
      purpose: "A deeply sacred resting place providing devotees with a serene environment for quiet meditation.",
      img: "/asramam4.jpg" 
    },
    {
      id: 3,
      name: "Goshala",
      purpose: "Our dedicated cow shelter committed to the care, protection, and veneration of Gomata.",
      img: "/goshala.png"
    },
    {
      id: 4,
      name: "Annapoorna Bhavanam",
      purpose: "Features spacious corridors and dedicated dining facilities to serve prasadam to visiting devotees.",
      img: "/annapoorna-bhavanam.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Asramam Facilities <span className="text-orange-400">❖</span>
        </h2>
        <p className="text-gray-600 mt-2">Explore the sacred grounds and existing facilities of the Asramam.</p>
      </div>

      {/* Full Width Layout for Key Facilities */}
      <div className="w-full">
         
         {/* Section Title Row */}
         <div className="flex items-center justify-between mb-8 border-b border-orange-200 pb-4">
           <div className="flex items-center gap-2 text-orange-900 font-bold text-2xl">
             <Building2 className="text-orange-500" size={28} />
             <h3>Key Facilities</h3>
           </div>
           <button className="text-sm text-orange-600 font-bold hover:text-orange-800 flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200 transition-colors shadow-sm active:scale-95">
             <Map size={18} /> View Campus Map
           </button>
         </div>
         
         {/* 2x2 Grid for the Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {buildings.map((bldg) => (
             <div key={bldg.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group flex flex-col">
               
               {/* Image Section (Top) */}
               <div className="h-64 overflow-hidden relative border-b border-orange-100">
                 <img 
                   src={bldg.img} 
                   alt={bldg.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
               </div>
               
               {/* Data Section (Below Image) */}
               <div className="p-6 flex flex-col flex-grow">
                 <h4 className="text-2xl font-bold text-orange-950 mb-3 group-hover:text-orange-600 transition-colors">
                   {bldg.name}
                 </h4>
                 <p className="text-gray-600 text-base leading-relaxed flex-grow">
                   {bldg.purpose}
                 </p>
                 
                 
               </div>

             </div>
           ))}
         </div>
      </div>

    </div>
  );
}