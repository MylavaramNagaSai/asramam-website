import React from 'react';

export default function FounderProfile() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title - PERFECTLY MATCHED TO NAVBAR STYLE */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-12 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Bhagavan Sree Satyananda Maharshi
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: Image & Quick Facts */}
        <div className="w-full lg:w-2/5 bg-gradient-to-b from-orange-50 to-orange-100/50 border-r border-orange-100 p-8 flex flex-col items-center">
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-xl overflow-hidden mb-8 group">
            {/* The Image from the public folder */}
            <img 
              src="/satyananda.jpg" 
              alt="Bhagavan Sree Satyananda Maharshi" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
          </div>

          <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-orange-200">
            <h3 className="text-xl font-bold text-orange-900 mb-4 border-b border-orange-100 pb-2 text-center">
              Divine Journey
            </h3>
            <ul className="space-y-4 text-sm md:text-base text-gray-700">
              <li className="flex justify-between items-center">
                <span className="font-semibold text-orange-800">Birth</span>
                <span>16 Feb, 1912</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold text-orange-800">Birthplace</span>
                <span>Bhuvangiri, A.P.</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold text-orange-800">Sanyasa Asramam</span>
                <span>17 Oct, 1934</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold text-orange-800">Asramam Est.</span>
                <span>3 Dec, 1934</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold text-orange-800">Yoga Siddhi</span>
                <span>27 Sep, 1944</span>
              </li>
              <li className="flex justify-between items-center border-t border-orange-100 pt-3">
                <span className="font-bold text-orange-900">Maha Samadhi</span>
                <span className="font-bold">16 Oct, 1996</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: The History Content */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 bg-[#FFFBF7] h-[800px] overflow-y-auto custom-scrollbar">
          
          <div className="prose prose-orange max-w-none text-gray-700 text-lg md:text-xl leading-loose text-justify space-y-8">
            
            <p>
              <span className="text-4xl text-orange-600 font-extrabold mr-1">B</span>
              hagavan Sree Satyananda Maharshi was born on the 16th of February, 1912, in Bhuvangiri Town, Andhra Pradesh. Born to Sree Vemuri Chidambara Sastry and Smt. Subbalakshmi Devi, he was named Satyanarayana. From his earliest childhood, an intense yearning for God-realization burned within him. Even during his formal education, he devoted countless hours to the study of spiritual scriptures, holding the Bhagavad Gita in the highest reverence, viewing it as his spiritual mother and guiding light.
            </p>

            <p>
              A profound turning point occurred in the summer of 1929. While returning from the riverbed of the Suvarnamukhi in his village of Vakadu, he experienced an eternal, undeniable realization that his true self was entirely distinct from his physical body. His spiritual journey was deeply supported by his wife, Smt. Padmavathi Devi, a woman of exceptional spiritual caliber who possessed a divine reverence for her husband.
            </p>

            <h2 className="text-2xl font-bold text-orange-900 mt-10 mb-4 border-l-4 border-orange-500 pl-4 bg-orange-50 py-2">
              The Divine Encounter & Sanyasa
            </h2>
            
            <p>
              On the 5th of February, 1932, Sri Satyanarayana had the divine Darshan of Bhagavan Sree Ramana Maharshi at Arunachalam (Tiruvannamalai). Receiving the eternal blessings of the Supreme Sage, all lingering doubts vanished, and he embarked on a path of intense penance. Upon Bhagavan Ramana’s instruction, he initially returned home to fulfill his familial duties while steadfastly continuing his spiritual Yoga.
            </p>

            <p>
              In 1933, his devoted wife attained salvation. The following year, on Vijaya Dasami (October 17, 1934), he formally embraced ‘Sanyasa Asramam’, taking the name Satyananda Teertha Swamy. Observing total silence, he commenced a period of rigorous penance. Shortly after, on December 3, 1934, he established Sri Satyananda Asramam at Inamadugu. After ten years of unbroken, devoted penance, he attained complete Yoga Siddhi (spiritual realization) on September 27, 1944, and was henceforth revered as Satyananda Teertha Avadhuta.
            </p>

            <h2 className="text-2xl font-bold text-orange-900 mt-10 mb-4 border-l-4 border-orange-500 pl-4 bg-orange-50 py-2">
              A Life of Karma Yoga
            </h2>

            <p>
              Though he had reached the ultimate spiritual pinnacle, Sree Avadhuta Swamy led a life of profound simplicity and tireless service. He saw the Divine in all beings. He never wasted a single moment, dedicating his time to serving the poor, writing spiritual treatises, and managing the Asramam's publication, <em>Sri Viswa Mimamsa</em>, which he launched in November 1947. 
            </p>
            
            <p>
              He lived by the principle that there is no contradiction between <em>Jnana</em> (wisdom) and <em>Karma</em> (action). Manual labor was never beneath him; he actively watered plants, cut vegetables, cleaned buildings, and served food to visitors with his own hands. Earning his bread through daily labor in the Asramam garden, he preached a powerful message: "Kick away laziness and work hard."
            </p>

            <h2 className="text-2xl font-bold text-orange-900 mt-10 mb-4 border-l-4 border-orange-500 pl-4 bg-orange-50 py-2">
              Legacy & Teachings
            </h2>

            <p>
              Traveling extensively across Andhra Pradesh, Orissa, Bengal, and Maharashtra, he spread the holistic path of Karma, Bhakti, Yoga, and Jnana. Recognizing his immense spiritual grandeur, institutions in Mumbai formally bestowed upon him the titles of "Bhagavan" and "Maharshi."
            </p>

            <p>
              A lifelong champion of the Bhagavad Gita, his 1964 discourses were recorded and remain available today as an invaluable 28-hour audio archive for spiritual seekers. He also authored the monumental commentary on the Gita, the <em>"Srimadh Bhagavath Gitamritha Tharangini,"</em> highly regarded as one of the greatest Adhyatmic texts of recent times.
            </p>

            <div className="bg-orange-100/50 p-6 rounded-xl border border-orange-200 mt-8 italic text-orange-950 text-center">
              "Sri Maharshi lived for 84 years, leaving his mortal body on October 16, 1996 (Asveeyuja Suddha Chathurdhi) to merge with the Almighty. His graceful blessings remain with all of us forever. Those seeking inner peace are welcome to visit his Adhistana Mandiram and spend time in quiet meditation."
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}