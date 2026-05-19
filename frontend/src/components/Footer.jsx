import React from 'react';
// We removed Facebook, Instagram, and Youtube from this import list!
import { MapPin, Phone, Mail, ArrowRight, MessageCircle, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#421b0a] text-orange-50/70 pt-16 pb-6 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About Asramam */}
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-orange-500">ॐ</span> Sri Satyanandasramam
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Established in 1935, our Asramam is dedicated to the divine teachings of Sri Satyananda Maharshi. We serve as a spiritual haven for devotees seeking peace, inner knowledge, and the path of selfless service through Bakthi, Meditation & Devotion and Gosamrakshana.
            </p>
            <a href="/about" className="text-orange-500 font-bold hover:text-orange-400 flex items-center gap-1 transition-colors text-sm">
              Read Full History <ArrowRight size={16} />
            </a>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                <p>
                  Sri Satyanandasramam,<br />
                  Inamadugu Village, Kovur Mandal,<br />
                  Nellore District, Andhra Pradesh, INDIA <br />
                  Pin Code - 524137
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <p>+91 94402 79712</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <p>contact@srisatyanandasramam.org.in</p>
              </div>
            </div>
          </div>

          {/* Column 3: Connect With Us & Socials */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Connect With Us</h3>
            <p className="text-sm mb-6">
              Join our digital community to receive daily updates, live pooja links, and spiritual quotes.
            </p>

            {/* WhatsApp Direct Message Button */}
            <a 
              href="https://wa.me/919440279712" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-green-800/80 text-green-500 hover:bg-green-700 hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-medium mb-3 w-fit"
            >
              <MessageCircle size={18} /> Message on WhatsApp
            </a>

            {/* WhatsApp Group Button */}
            <a 
              href="https://chat.whatsapp.com/BkVadLIpCqKG1c0smYpEIO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-green-800/80 text-green-500 hover:bg-green-700 hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-medium mb-8 w-fit"
            >
              <Users size={18} /> Join WhatsApp Group
            </a>

            {/* Social Icons Row (Using Native SVGs to prevent crashes) */}
            <div className="flex items-center gap-4">
              
              {/* FACEBOOK */}
              <div className="relative group">
                <div className="w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                
                {/* Pop-up Menu */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white text-orange-950 rounded-xl shadow-xl overflow-hidden text-sm font-medium border border-orange-200">
                    <div className="bg-orange-100 text-orange-800 text-xs font-bold px-4 py-2 uppercase tracking-wider text-center">
                      Official Pages
                    </div>
                    <a href="https://www.facebook.com/share/1DaccfT4oN/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 border-b border-orange-50 transition-colors">
                      Sri Satyananda Maharshi
                    </a>
                    <a href="https://www.facebook.com/share/1CzHAhFvg6/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 border-b border-orange-50 transition-colors">
                      Sri Brahmananda Teertha
                    </a>
                    <a href="https://www.facebook.com/share/1DxD1tMm6J/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Srihari Teertha
                    </a>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></div>
                </div>
              </div>

              {/* INSTAGRAM */}
              <a 
                href="https://www.instagram.com/bramhananda_teertha/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-200 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              {/* YOUTUBE */}
              <a 
                href="https://www.youtube.com/@srisatyanandasramam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="border-t border-orange-900/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex gap-4 text-orange-600">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a>
          </div>
          
          <div className="text-orange-500/80">
            Designed & Developed by <span className="text-orange-400 font-bold">Mylavaram Naga Sai</span>
          </div>

          <div className="text-orange-600">
            &copy; 2026 Sri Sathyanandha Asramam. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}