import React from 'react';

export default function AsramamHistory() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-10 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Sri Satyanandasramam
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
        
        {/* THE REAL IMAGE */}
        <div className="w-full h-64 md:h-[400px] border-b border-orange-200">
          <img 
            src="/asramamhistoryimage.png" 
            alt="Sri Satyanandasramam History" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-14">
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl leading-loose mb-6 text-justify">
              Sree Satyanandasramam was graciously established by Bhagavan Sree Satyananda Maharshi in the year 1934, situated to the east of Inamadugu Village in the Nellore District of Andhra Pradesh. Nestled within a profoundly spiritual atmosphere, the Asramam is blessed with pristine natural beauty, magnificent mandirams, and serene kuteers. 
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-loose mb-12 text-justify">
              Over the decades, it has blossomed into a divine sanctuary, attracting a multitude of devotees from every corner of India. Whether you are traveling exclusively to seek solace, or pausing for reflection on your sacred pilgrimage to Tirupati, we warmly invite you to visit. Come spend time in quiet contemplation, immerse yourself in the divine energy, and experience profound peace and happiness.
            </p>
          </div>

          {/* Enhanced Route Box */}
          <div className="bg-gradient-to-br from-orange-50 to-[#FFFBF7] rounded-2xl p-8 md:p-10 border border-orange-200 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-orange-950 mb-6 flex items-center gap-3 border-b border-orange-200/60 pb-4">
              <span className="text-orange-600 text-2xl">📍</span> How to Reach the Asramam
            </h2>
            
            <ul className="space-y-6 text-gray-700 text-lg md:text-xl">
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🚆</span>
                <div>
                  <strong className="text-orange-900 block mb-1">By Train</strong>
                  <span className="leading-relaxed">Alight at the Nellore Railway Station, conveniently located on the main railway line between Vijayawada and Chennai.</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🚌</span>
                <div>
                  <strong className="text-orange-900 block mb-1">By Bus</strong>
                  <span className="leading-relaxed">Proceed to the Nellore Bus Station (located very close to the railway station). From there, you can easily board an RTC or city bus heading towards Inamadugu.</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🗺️</span>
                <div>
                  <strong className="text-orange-900 block mb-1">Location</strong>
                  <span className="leading-relaxed">The Asramam is situated just <strong>7 kilometers</strong> from Nellore city. Upon reaching Inamadugu, you will find the divine premises peacefully resting to the east of the village.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}