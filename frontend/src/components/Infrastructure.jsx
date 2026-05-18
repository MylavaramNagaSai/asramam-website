import React from 'react';
import { Building2, Hammer, Map, ArrowRight } from 'lucide-react';

export default function Infrastructure() {
  // Updated with Tarakeswara Mandiram and local image paths to fix the broken links!
  const buildings = [
    {
      id: 1,
      name: "Sri Tarakeswara Mandiram",
      purpose: "Primary Sannidhi",
      img: "/tarakeswaramandiram.jpg" // Your newly uploaded image
    },
    {
      id: 2,
      name: "Adhistana Mandiram",
      purpose: "Sacred Resting Place",
      img: "/asramam4.jpg" // Using local images so they don't break
    },
    {
      id: 3,
      name: "Goshala",
      purpose: "Cow Shelter & Care",
      img: "/goshala.png"
    },
    {
      id: 4,
      name: "Annapoorna Bhavanam",
      purpose: "Features spacious corridors and dedicated facilities for devotees.",
      img: "/annapoorna-bhavanam.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-950 flex items-center justify-center gap-3">
          <span className="text-orange-400">❖</span> Asramam Infrastructure & Construction <span className="text-orange-400">❖</span>
        </h2>
        <p className="text-gray-600 mt-2">Explore the sacred grounds, existing facilities, and ongoing developments.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDE: Ongoing Construction Highlight */}
        <div className="lg:w-1/3 bg-orange-50 rounded-2xl border border-orange-200 p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4 text-orange-800 font-bold">
            <Hammer className="text-orange-600" />
            <h3 className="uppercase tracking-wide text-sm">Ongoing Project</h3>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-4 h-48 border border-orange-200">
            {/* Fixed the broken construction image using one of your local files */}
            <img src="/asramam6.jpg" alt="Construction" className="w-full h-full object-cover" />
          </div>
          
          <h4 className="text-xl font-bold text-orange-950 mb-2">New Yagashala Expansion</h4>
          <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">
            Expanding the current Yagashala to accommodate over 500 devotees for the upcoming Mahasudarshana Homam. The structure features traditional stone carving and eco-friendly ventilation.
          </p>
          
          <div>
            <div className="flex justify-between text-xs font-bold text-orange-800 mb-1">
              <span>Phase 2 Completion</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2.5 mb-6">
              <div className="bg-orange-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
            </div>
            <button className="w-full py-2.5 bg-white border border-orange-300 text-orange-700 rounded-lg font-bold hover:bg-orange-100 transition-colors flex items-center justify-center gap-2 shadow-sm">
              View Complete Details <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Existing Buildings Grid */}
        <div className="lg:w-2/3">
           <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-2 text-orange-900 font-bold text-xl">
               <Building2 className="text-orange-500" />
               <h3>Key Facilities</h3>
             </div>
             <button className="text-sm text-orange-600 font-bold hover:text-orange-800 flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-200 transition-colors">
               <Map size={16} /> View Campus Map
             </button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
             {buildings.map((bldg) => (
               <div key={bldg.id} className="group relative rounded-xl overflow-hidden shadow-sm border border-orange-200 cursor-pointer h-48 md:h-56">
                 <img src={bldg.img} alt={bldg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 
                 {/* Dark gradient overlay so text is readable */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                   <h4 className="text-white font-bold text-lg md:text-xl translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                     {bldg.name}
                   </h4>
                   <p className="text-orange-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 flex items-center gap-1">
                     {bldg.purpose} <ArrowRight size={14} className="mt-0.5" />
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}