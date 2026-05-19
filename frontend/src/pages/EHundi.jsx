import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Phone, Mail, Heart, Utensils, ShieldCheck, Leaf } from 'lucide-react';

export default function EHundi() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Digital E-Hundi
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          Support the divine activities of Sri Sathyanandha Asramam. Your generous contributions help us continue our legacy of selfless service.
        </p>
      </motion.div>

      {/* Main Grid Layout - Changed column split to 2:3 ratio to give the QR code section more space */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: QR Code & Payment Info (Takes up 2 columns out of 5 now) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden text-center p-8 md:p-10 sticky top-24">
            <h2 className="text-3xl font-extrabold text-orange-950 mb-3 flex items-center justify-center gap-2">
              <QrCode className="text-orange-600" size={28} /> Scan to Donate
            </h2>
            <p className="text-gray-600 text-md mb-8">
              Securely scan via Google Pay, PhonePe, Paytm, or any authorized UPI app.
            </p>
            
            {/* Scaled-Up QR Code Box Container */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 inline-block mb-8 shadow-inner w-full max-w-sm">
              <img 
                src="/googlepay.jpeg" 
                alt="Asramam UPI QR Code" 
                className="w-full h-auto object-contain mx-auto rounded-xl shadow-sm"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback frame if asset fails to load */}
              <div className="hidden w-full aspect-square bg-orange-100 flex-col items-center justify-center rounded-xl border border-dashed border-orange-300 text-orange-600 font-medium text-sm">
                <QrCode size={56} className="mb-2 opacity-50" />
                <span>Upload googlepay.jpeg</span>
                <span>to public folder</span>
              </div>
            </div>

            {/* Expanded Payment Brand Badges */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-8 opacity-90" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-7 opacity-90" />
              <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" className="h-10 opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Information & Peethadhipathi (Takes up 3 columns out of 5) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 space-y-8"
        >
          {/* How Donations Are Used Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-sm border border-orange-200 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-orange-950 mb-6 flex items-center gap-2 border-b border-orange-200 pb-4">
              <Heart className="text-red-500" /> How Your Donation Helps
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Every rupee offered to the Asramam is utilized strictly for Dharmic and charitable purposes. Your sacred contributions sustain the daily operations and spiritual initiatives of the Asramam, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0"><Utensils size={24} /></div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Nithya Annadanam</h4>
                  <p className="text-sm text-gray-600">Providing free, pure vegetarian meals daily to sadhus, devotees, and the needy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Leaf size={24} /></div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Gosamrakshana</h4>
                  <p className="text-sm text-gray-600">Feeding, sheltering, and caring for the sacred cows residing in the Asramam Goshala.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Mandiram Maintenance</h4>
                  <p className="text-sm text-gray-600">Upkeep of the Sannidhis, daily Puja materials, and maintaining the premises.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0"><Heart size={24} /></div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Festivals & Sevas</h4>
                  <p className="text-sm text-gray-600">Organizing major Sanatana Dharma festivals, spiritual camps, and community services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Peethadhipathi & Contact Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src="/srihari.jpg" 
                alt="Sri Hari Swamy" 
                className="w-full h-64 md:h-full object-cover object-top"
                onError={(e) => { e.target.src = '/asramamimages/asramam1.png'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Sri Hari Swamy</h3>
                  <p className="text-orange-300 text-sm font-medium">Current Peethadhipathi</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 flex flex-col justify-center bg-[#421b0a] text-orange-50">
              <h4 className="text-xl font-bold text-white mb-4 border-b border-orange-900/50 pb-4">
                Need Help with Donations?
              </h4>
              <p className="text-orange-200/80 text-sm mb-6 leading-relaxed">
                If you are planning a large contribution, wish to sponsor a specific day's Annadanam, or require a receipt for your E-Hundi offering, please contact the Asramam administration directly.
              </p>
              
              <div className="space-y-4">
                <a href="tel:+919440279712" className="flex items-center gap-3 hover:text-white transition-colors group w-fit">
                  <div className="bg-orange-900/50 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
                    <Phone size={18} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <span className="font-mono text-lg tracking-wide">+91 94402 79712</span>
                </a>
                
                <a href="mailto:contact@srisatyanandasramam.org.in" className="flex items-center gap-3 hover:text-white transition-colors group w-fit">
                  <div className="bg-orange-900/50 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
                    <Mail size={18} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <span className="text-md">contact@srisatyanandasramam.org.in</span>
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

    </div>
  );
}