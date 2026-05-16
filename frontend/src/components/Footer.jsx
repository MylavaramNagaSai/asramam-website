import React from 'react';
import { MessageCircle, Users, MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-orange-950 text-orange-50 pt-16 pb-8 border-t-4 border-orange-500 relative z-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 pb-8 border-b border-orange-900/50">
          
          {/* COLUMN 1: About Asramam */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="text-orange-500 text-3xl">ॐ</span> 
              Sri Sathyanandha Asramam
            </h3>
            <p className="text-orange-200/80 text-sm leading-relaxed mb-6">
              Established in 1935, our Asramam is dedicated to the divine teachings of Sri Sathyanandha Maharshi. We serve as a spiritual haven for devotees seeking peace, inner knowledge, and the path of selfless service through Nithya Annadanam and Gosamrakshana.
            </p>
            <button className="text-orange-400 font-bold hover:text-white transition-colors self-start flex items-center gap-2 text-sm">
              Read Full History &rarr;
            </button>
          </div>

          {/* COLUMN 2: Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-orange-200/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                <span>
                  Sri Sathyanandha Asramam,<br />
                  Inamadugu Village, Kovur Mandal,<br />
                  Nellore District, Andhra Pradesh - 524137
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <span>info@srisathyanandhaasramam.org</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Social Media & WhatsApp */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Connect With Us</h4>
            <p className="text-orange-200/80 text-sm mb-6">
              Join our digital community to receive daily updates, live pooja links, and spiritual quotes.
            </p>
            
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2 rounded-lg transition-colors w-full md:w-max">
                <MessageCircle size={20} />
                <span className="font-bold text-sm">Message on WhatsApp</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2 rounded-lg transition-colors w-full md:w-max">
                <Users size={20} />
                <span className="font-bold text-sm">Join WhatsApp Group</span>
              </a>

              <div className="flex gap-3 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-300 hover:bg-orange-500 hover:text-white transition-all border border-orange-800">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-300 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all border border-orange-800">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-300 hover:bg-red-600 hover:text-white transition-all border border-orange-800">
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* PERFECTLY ALIGNED BOTTOM BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-orange-400/60 text-xs">
          
          {/* LEFT: Legal Links */}
          <div className="flex justify-center md:justify-start gap-4 order-3 md:order-1">
            <a href="#" className="hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Refund Policy</a>
          </div>

          {/* CENTER: Developer Credit */}
          <div className="text-center order-1 md:order-2">
            <p className="tracking-wide">
              Designed & Developed by{' '}
              <a 
                href="https://www.mylavaramsai.me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-400 hover:text-white font-bold transition-colors text-sm"
              >
                Mylavaram Naga Sai
              </a>
            </p>
          </div>

          {/* RIGHT: Copyright Info */}
          <div className="text-center md:text-right order-2 md:order-3">
            <p>&copy; {new Date().getFullYear()} Sri Sathyanandha Asramam. All Rights Reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}