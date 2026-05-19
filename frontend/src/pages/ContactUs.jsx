import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactUs() {
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
          Contact Us
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          We welcome devotees to reach out for spiritual guidance, donation inquiries, or planning a visit to the Asramam.
        </p>
      </motion.div>

      {/* Changed to a single column layout on desktop so we can make the cards wider */}
      <div className="flex flex-col gap-12 items-center max-w-5xl mx-auto">
        
        {/* Top: Administration & Contact Details (Wide Layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 overflow-hidden flex flex-col md:flex-row w-full"
        >
          {/* LEFT SIDE: Full Height Peethadhipathi Image */}
          <div className="md:w-5/12 relative min-h-[300px] md:min-h-full bg-orange-50">
            <img 
              src="/srihari.jpg" 
              alt="Sri Hari Swamy" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => { e.target.src = '/asramamimages/asramam1.png'; }}
            />
            {/* Kept the gradient overlay for the text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-2xl">Sri Hari Swamy</h3>
                <p className="text-orange-300 text-sm font-medium mt-1">Current Peethadhipathi & Administrator</p>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE: Contact Details Body */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-[#421b0a] text-orange-50">
            <h4 className="text-2xl font-bold text-white mb-8 border-b border-orange-900/50 pb-4">
              Direct Contact Information
            </h4>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5 hover:text-white transition-colors group w-full">
                <div className="bg-orange-900/60 p-3 rounded-xl group-hover:bg-orange-600 transition-colors shadow-inner shrink-0 mt-1">
                  <MapPin size={24} className="text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-400/80 uppercase tracking-wider font-bold mb-1">Visit the Asramam</p>
                  <span className="text-lg font-medium leading-relaxed block text-orange-50/90">
                    Sri Sathyanandha Asramam,<br />
                    Inamadugu Village, Kovur Mandal,<br />
                    Nellore District, Andhra Pradesh - 524137
                  </span>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+919440279712" className="flex items-center gap-5 hover:text-white transition-colors group w-fit">
                <div className="bg-orange-900/60 p-3 rounded-xl group-hover:bg-orange-600 transition-colors shadow-inner shrink-0">
                  <Phone size={24} className="text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-400/80 uppercase tracking-wider font-bold mb-1">Phone Number</p>
                  <span className="font-mono text-xl tracking-wide font-medium">+91 94402 79712</span>
                </div>
              </a>
              
              {/* Email */}
              <a href="mailto:contact@srisatyanandasramam.org.in" className="flex items-center gap-5 hover:text-white transition-colors group w-fit break-all">
                <div className="bg-orange-900/60 p-3 rounded-xl group-hover:bg-orange-600 transition-colors shadow-inner shrink-0">
                  <Mail size={24} className="text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-400/80 uppercase tracking-wider font-bold mb-1">Email Address</p>
                  <span className="text-lg font-medium">contact@srisatyanandasramam.org.in</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom: Digital Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8 md:p-12 w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-orange-950 mb-2">
              Send an Inquiry
            </h2>
            <p className="text-gray-600">Fill out the form below and the Asramam administration will get back to you.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-orange-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-orange-50/50 text-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-orange-900 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-orange-50/50 text-lg"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-orange-900 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-5 py-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-orange-50/50 text-lg"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-orange-900 mb-2">Your Message</label>
              <textarea 
                rows="5"
                className="w-full px-5 py-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-orange-50/50 resize-none text-lg"
                placeholder="How can we assist you?"
              ></textarea>
            </div>

            <button className="w-full md:w-auto md:px-12 mx-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-lg">
              <Send size={24} /> Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}