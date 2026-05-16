import React from 'react';

export default function TeachingsSection() {
  // Updated to show the exact lineage in chronological order
  const lineage = [
    { name: "Sri Sathyanandha Maharshi", title: "Founder", image: "/satyananda.jpg" },
    { name: "Sri Brahmanandha Swamy", title: "First Successor", image: "/brahmananda.jpg" },
    { name: "SriHari Swamy", title: "Current Peethadhipathi", image: "/srihari.jpg" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mb-8 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-inner">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* LEFT PANE: The Teachings */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-orange-300 overflow-hidden shadow-md flex-shrink-0 bg-orange-100">
              <img src="/satyananda.jpg" alt="Satyanandha Maharshi" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-orange-950">Maharshi's Teachings</h2>
              <p className="text-orange-700 font-medium tracking-wide">The Path of Karma and Bhakti</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 relative">
            <span className="absolute -top-6 -left-4 text-6xl text-orange-200">"</span>
            <p className="text-gray-700 leading-relaxed text-lg italic mb-4 relative z-10">
              True devotion is not found merely in the chanting of mantras, but in the silent, selfless service to humanity. When you see the Divine in the hungry, the poor, and the voiceless, your life itself becomes a continuous prayer.
            </p>
            <div className="text-right">
              <button className="text-orange-600 font-bold hover:text-orange-800 transition-colors">
                Read Complete Philosophy &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: The Lineage */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-2">
            <span className="text-orange-500">❖</span> Asramam Lineage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lineage.map((guru, idx) => (
              <div key={idx} className="bg-white flex items-center gap-3 p-3 rounded-lg shadow-sm border border-orange-100 hover:border-orange-300 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-orange-200 bg-orange-50">
                  {/* Using object-top to ensure their faces aren't cut off just like the header */}
                  <img src={guru.image} alt={guru.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-orange-950 group-hover:text-orange-600 transition-colors leading-tight mb-0.5">{guru.name}</h4>
                  <p className="text-xs text-gray-500">{guru.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}