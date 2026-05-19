import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Heart, QrCode, Phone, Mail, CheckCircle2, Leaf, Coffee } from 'lucide-react';

export default function AnnadanamTrust() {
  // Pulling a few images from your existing dining folder for the mini-gallery
  const galleryImages = ['aa.jpeg', 'bb.jpeg', 'cc.jpeg', 'ee.jpeg'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Sri Satyananda Maharshi Annaprasadam
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          "Annadanam Mahadanam" - The highest form of charity. Support our sacred mission to ensure no devotee or sadhu ever goes hungry.
        </p>
      </motion.div>

      {/* Top Section: Description & Mini Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Utensils className="text-orange-600" /> The Annadanam Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              The Sri Satyananda Maharshi Annaprasadam Trust was established with a singular, divine vision: to serve pure, sanctified meals (Prasadam) to all visiting devotees, wandering sadhus, and the local community.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              In our tradition, feeding the hungry is equivalent to feeding the Divine. Every meal prepared in our Asramam kitchen is first offered to Lord Shiva and the Gurus, transforming the food into sacred Annaprasadam that purifies both the body and the soul.
            </p>
          </div>

          {/* Fund Allocation Box */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-sm border border-orange-200 p-8">
            <h3 className="text-xl font-bold text-orange-950 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> Allocation of Trust Funds
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Leaf className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium">Procurement of high-quality, pure vegetarian groceries, fresh vegetables, and dairy from our Goshala.</p>
              </li>
              <li className="flex items-start gap-3">
                <Utensils className="text-orange-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium">Daily cooking and serving logistics for hundreds of regular visitors and sadhus.</p>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium">Massive feast preparations (Maha Annadanam) during major festivals like Maha Shivaratri and Navaratri.</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Mini Gallery (Imported from Dining) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {galleryImages.map((img, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-md h-48 md:h-64 group border-2 border-white">
              <img 
                src={`/dining/${img}`} 
                alt={`Annaprasadam Seva ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center mb-16">
        <div className="w-full h-px bg-orange-200"></div>
        <span className="px-4 text-orange-400"><Heart size={24} /></span>
        <div className="w-full h-px bg-orange-200"></div>
      </div>

      {/* Bottom Section: Dedicated Donation QR & Contact (Imported from E-Hundi) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* QR Code Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden text-center p-8 md:p-10 sticky top-24">
            <h2 className="text-3xl font-extrabold text-orange-950 mb-3 flex items-center justify-center gap-2">
              <QrCode className="text-orange-600" size={28} /> Donate to Trust
            </h2>
            <p className="text-gray-600 text-md mb-8">
              Scan securely via Google Pay, PhonePe, Paytm, or any UPI app to directly fund the Annadanam.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 inline-block mb-8 shadow-inner w-full max-w-sm">
              <img 
                src="/googlepay.jpeg" 
                alt="Annadanam UPI QR Code" 
                className="w-full h-auto object-contain mx-auto rounded-xl shadow-sm"
              />
            </div>

            <div className="flex items-center justify-center gap-6 pt-2 border-t border-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-8 opacity-90" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-7 opacity-90" />
              <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" className="h-10 opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Contact & Swami Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 overflow-hidden flex flex-col md:flex-row h-full">
            <div className="md:w-2/5 relative">
              <img 
                src="/srihari.jpg" 
                alt="Sri Hari Swamy" 
                className="w-full h-64 md:h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Sri Hari Swamy</h3>
                  <p className="text-orange-300 text-sm font-medium">Current Peethadhipathi</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 flex flex-col justify-center bg-[#421b0a] text-orange-50">
              <h4 className="text-2xl font-bold text-white mb-4 border-b border-orange-900/50 pb-4">
                Sponsor a Day's Meal
              </h4>
              <p className="text-orange-200/90 text-md mb-8 leading-relaxed">
                Devotees wishing to sponsor Annadanam for a specific day (such as birthdays, anniversaries, or in memory of loved ones) are requested to contact the Asramam directly. Your generous contribution will feed hundreds of seeking souls.
              </p>
              
              <div className="space-y-5">
                <a href="tel:+919440279712" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                  <div className="bg-orange-900/60 p-3 rounded-xl group-hover:bg-orange-600 transition-colors shadow-inner">
                    <Phone size={20} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-400/80 uppercase tracking-wider font-bold mb-0.5">Call to Sponsor</p>
                    <span className="font-mono text-xl tracking-wide font-medium">+91 94402 79712</span>
                  </div>
                </a>
                
                <a href="mailto:contact@srisatyanandasramam.org.in" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                  <div className="bg-orange-900/60 p-3 rounded-xl group-hover:bg-orange-600 transition-colors shadow-inner">
                    <Mail size={20} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-400/80 uppercase tracking-wider font-bold mb-0.5">Email for Receipts</p>
                    <span className="text-md font-medium">contact@srisatyanandasramam.org.in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}