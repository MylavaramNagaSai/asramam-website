import React from 'react';
import { motion } from 'framer-motion';
import { Heart, QrCode, Phone, Mail, CheckCircle2, Leaf, ShieldCheck, Droplets } from 'lucide-react';

export default function GosalaTrust() {
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
          Sri Sathyanandha Gosala Trust
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          "Gavo Vishwasya Matarah" - Cows are the mothers of the universe. Support our sacred mission of Gosamrakshana and receive the highest spiritual merit.
        </p>
      </motion.div>

      {/* Top Section: Description & Cow Image */}
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
              <Leaf className="text-green-600" /> The Sacred Duty of Gosamrakshana
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              In Sanatana Dharma, the cow is revered as Kamadhenu, the wish-fulfilling divine mother. Serving and protecting cows is considered a direct service to the Divine, bringing immense peace, prosperity, and spiritual elevation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Asramam maintains a dedicated Goshala where cows, calves, and aging cattle are sheltered, fed, and treated with the utmost love and respect. We ensure they live their entire lives peacefully in a clean, nurturing environment.
            </p>
          </div>

          {/* Fund Allocation Box */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-8">
            <h3 className="text-xl font-bold text-green-950 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> How Your Rupee is Utilized
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Leaf className="text-green-600 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium"><strong className="text-green-900">Nutrition & Fodder:</strong> Procurement of fresh green grass, dry fodder, jaggery, and highly nutritious cattle feed.</p>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium"><strong className="text-green-900">Veterinary Care:</strong> Regular medical checkups, medicines, and emergency treatments for sick or aging cows.</p>
              </li>
              <li className="flex items-start gap-3">
                <Droplets className="text-cyan-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium"><strong className="text-green-900">Shelter Maintenance:</strong> Upkeep of the sheds, ensuring clean drinking water, proper ventilation, and strict hygiene.</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Cow Image Gallery Style */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[500px]"
        >
          <img 
            src="/goshala.png" 
            alt="Sacred Cows at the Asramam Goshala" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.src = '/asramamimages/asramam1.png'; }} // Fallback if image isn't named exactly goshala.jpg
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-white font-bold text-xl drop-shadow-lg">Sri Sathyanandha Asramam Goshala</h3>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center mb-16">
        <div className="w-full h-px bg-orange-200"></div>
        <span className="px-4 text-green-500"><Leaf size={24} /></span>
        <div className="w-full h-px bg-orange-200"></div>
      </div>

      {/* Bottom Section: Dedicated Donation QR & Contact */}
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
              <QrCode className="text-orange-600" size={28} /> Donate to Gosala
            </h2>
            <p className="text-gray-600 text-md mb-8">
              Scan securely via Google Pay, PhonePe, Paytm, or any UPI app to directly fund the Gosamrakshana.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 inline-block mb-8 shadow-inner w-full max-w-sm">
              <img 
                src="/googlepay.jpeg" 
                alt="Gosala UPI QR Code" 
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
                Adopt a Cow / Sponsor Fodder
              </h4>
              <p className="text-orange-200/90 text-md mb-8 leading-relaxed">
                Devotees who wish to sponsor fodder for a specific day, contribute to medical expenses, or perform "Go-Daanam" (offering a cow) are requested to contact the Asramam administration.
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