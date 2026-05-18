import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Award, ShieldCheck, Users } from 'lucide-react';

export default function Committees() {
  
  // 1. President (Adhyakshulu)
  const president = {
    name: "Srihari Teertha Swamy",
    role: "President (Adhyakshulu)",
    phone: "+91 98765 00001",
    image: "/srihari.jpg" // Using the existing image from your public folder
  };

  // 2. Core Committee Members
  const coreCommittee = [
    {
      id: 1,
      name: "Ch. Venkateswara Rao",
      role: "Vice President",
      phone: "+91 98765 00002",
      image: "" 
    },
    {
      id: 2,
      name: "P. Nageswara Rao",
      role: "Secretary",
      phone: "+91 98765 00003",
      image: ""
    },
    {
      id: 3,
      name: "Rama Krishna Paramahamsa",
      role: "Joint Secretary",
      phone: "+91 98765 00004",
      image: ""
    }
  ];

  // 3. Executive Members
  const executiveMembers = [
    { id: 4, name: "Purushottama Teertha Swamy", role: "Executive Member", phone: "+91 98765 00005", image: "" },
    { id: 5, name: "Rama Teertha Swamy", role: "Executive Member", phone: "+91 98765 00006", image: "" },
    { id: 6, name: "Kota Rajashekar", role: "Executive Member", phone: "+91 98765 00007", image: "" },
    { id: 7, name: "Ch. Chalapati Rao", role: "Executive Member", phone: "+91 98765 00008", image: "" },
    { id: 8, name: "Vishoka Teertha Swamy", role: "Executive Member", phone: "+91 98765 00009", image: "" }
  ];

  // Helper component for rendering individual member cards
  const MemberCard = ({ member, isPresident }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl shadow-md border overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group
        ${isPresident ? 'border-orange-400 p-8 md:flex-row md:text-left gap-8 md:col-span-3 lg:w-2/3 mx-auto bg-gradient-to-br from-[#FFFBF7] to-orange-50' : 'border-orange-100 p-6'}
      `}
    >
      {/* Profile Image (Falls back to generated initials if no image is provided) */}
      <div className={`rounded-full overflow-hidden border-4 border-white shadow-md bg-orange-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-500
        ${isPresident ? 'w-32 h-32 md:w-40 md:h-40' : 'w-24 h-24 mb-4'}
      `}>
        <img 
          src={member.image || `https://ui-avatars.com/api/?name=${member.name.replace(/ /g, '+')}&background=ffedd5&color=c2410c&bold=true`} 
          alt={member.name} 
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(/ /g, '+')}&background=ffedd5&color=c2410c&bold=true`; }}
        />
      </div>

      <div className={`flex flex-col ${isPresident ? 'items-center md:items-start' : 'items-center'}`}>
        <h3 className={`${isPresident ? 'text-2xl md:text-3xl' : 'text-lg'} font-bold text-orange-950 mb-2`}>
          {member.name}
        </h3>
        
        <span className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-sm border
          ${isPresident ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent' : 'bg-orange-50 text-orange-800 border-orange-200'}
        `}>
          {member.role}
        </span>
        
        <div className={`flex items-center gap-2 text-gray-700 font-medium ${isPresident ? 'text-base' : 'text-sm'}`}>
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Phone size={14} />
          </div>
          <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-orange-600 transition-colors">
            {member.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Committees
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      <p className="text-center text-orange-800/80 italic font-medium mb-12 border-b-2 border-orange-200 pb-6 max-w-2xl mx-auto text-base md:text-lg">
        The dedicated governing body ensuring the smooth operation, spiritual administration, and charitable trusts of Sri Satyanandasramam.
      </p>

      {/* 1. President Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Award className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-orange-950 text-center uppercase tracking-wide">Board Presidency</h2>
        </div>
        <MemberCard member={president} isPresident={true} />
      </div>

      {/* 2. Core Committee Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-2 mb-8 border-t border-orange-100 pt-12">
          <ShieldCheck className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-orange-950 text-center uppercase tracking-wide">Core Committee</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {coreCommittee.map((member) => (
            <MemberCard key={member.id} member={member} isPresident={false} />
          ))}
        </div>
      </div>

      {/* 3. Executive Members Section */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-8 border-t border-orange-100 pt-12">
          <Users className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold text-orange-950 text-center uppercase tracking-wide">Executive Members</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {executiveMembers.map((member) => (
            <MemberCard key={member.id} member={member} isPresident={false} />
          ))}
        </div>
      </div>

    </div>
  );
}