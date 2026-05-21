import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Quote } from 'lucide-react';

export default function Philosophy() {
  // Automatically scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chapters = [
    {
      title: "Part 1: The Sacred Land & Realization",
      content: "Born in the spiritually rich land of India, Sri Satyananda Maharshi's life was destined for greatness. His early life was marked by an intense yearning for truth that could not be satisfied by worldly pursuits. His intense penance and steadfast meditation ultimately blossomed into supreme realization on the auspicious day of Vijaya Dasami in September 1944. This day marked the transition from a seeker to a fully realized Maharshi."
    },
    {
      title: "Part 2: Lineage and Divine Birth",
      content: "He was born in the village of Vakadu on the highly auspicious day of Maha Shivaratri in the year 1912. He was named 'Satyanarayana' by his devout parents. His birth was not considered ordinary; it was revered as a divine fruit, answering the deep prayers, sacred vows, and continuous worship his parents had offered to Lord Satyanarayana."
    },
    {
      title: "Part 3: Childhood Leelas & Early Signs",
      content: "Even as a young child, his spiritual aura was unmistakable. Wandering monks and sadhus who visited his village prophesied his future spiritual greatness. He displayed an innate Vairagya (a profound dispassion for worldly attachments and materialism) and was at the center of several miraculous childhood incidents that hinted at his divine nature and higher purpose."
    },
    {
      title: "Part 4: Education & Fearless Devotion",
      content: "While exhibiting immense academic brilliance during his education at VR College, his true focus always lay inward. He engaged in intense, unbroken worship of the sacred Gayatri Mantra. His absolute fearlessness and trust in the divine were famously displayed when he remained completely absorbed in deep meditation, entirely unbothered, during the catastrophic and destructive Nellore cyclone of 1927."
    },
    {
      title: "Part 5: Thirst for True Knowledge",
      content: "His youth was characterized by fierce patriotism and an unquenchable thirst for absolute truth. To foster spiritual growth among his peers, he established the 'Mitra Mandali' for collective spiritual study. He also dedicated himself deeply to Daridra Narayana Seva—the path of serving the divine by serving the poorest and most vulnerable members of society."
    },
    {
      title: "Part 6: The Turning Point: Darshan of Sri Ramana",
      content: "In the year 1932, a pilgrimage to the holy Arunachala mountain in Tiruvannamalai changed the trajectory of his life forever. There, he had a powerful, deeply silent encounter with Bhagavan Sri Ramana Maharshi. This profound Darshan ignited his soul, dissolved his remaining worldly doubts, and led to his ultimate initiation into the path of Self-Inquiry (Atma Vichara)."
    },
    {
      title: "Part 7: The Ideal Householder Life",
      content: "Before fully renouncing the world, he lived as the perfect detached Grihastha (householder). He fulfilled his worldly duties without ever being bound by them. He maintained incredibly strict ethical and moral standards while employed at the Mica Mine, balancing his intense inner spiritual life with outer responsibilities, and eventually enduring the profound loss of his wife with absolute equanimity."
    },
    {
      title: "Part 8: The Vow of Absolute Renunciation",
      content: "All remaining worldly ties were formally and permanently severed on the sacred day of Vijaya Dasami in 1934. This monumental step into complete Sannyasa (renunciation) was marked by a historic and arduous 49-day Akhanda Sankirtana (continuous, unbroken chanting of the Lord's name) in the village of Inamadugu."
    },
    {
      title: "Part 9: Establishment of the Asramam",
      content: "In 1935, the physical foundation for the Sri Sathyanandha Asramam was laid in Inamadugu. As the founder, he championed a purely universal vision. He actively fought to break down rigid caste barriers, religious sectarianism, and worked tirelessly to dispel local superstitions, opening the doors of spiritual wisdom to all sincere seekers regardless of their background."
    },
    {
      title: "Part 10: The Rameswaram Yatra",
      content: "During a profoundly spiritual pilgrimage to Rameswaram, he experienced elevated states of consciousness and deep divine communion. A deeply touching and historic highlight of his spiritual journey occurred when his Guru, Bhagavan Ramana Maharshi, personally showed him the scar on his toe—a physical remnant of Ramana's own severe early Tapas (penance) in the Patala Lingam vault."
    },
    {
      title: "Part 11: Silence & Steadfast Penance",
      content: "He entered an extended period of severe Tapas and complete, unbroken silence (Mouna). During this intense period of internal withdrawal, he received a direct divine vision instructing him to build a temple. Following this mandate, the Sri Ramana Mandir was beautifully constructed and consecrated at the Asramam in 1937."
    },
    {
      title: "Part 12: The Grand Pilgrimage",
      content: "His spiritual footprint and divine influence expanded rapidly across India with major spiritual tours to holy cities including Puri, Kashi, and Kolkata. As a fully realized Guru, he led a massive group of 60 devoted followers all the way to Tiruvannamalai to receive Darshan and blessings directly from Ramana Maharshi."
    },
    {
      title: "Part 13: Scriptural Research & Literary Legacy",
      content: "His later years were devoted entirely to monumental literary contributions to Sanatana Dharma. He authored a profound, highly accessible commentary on the Bhagavad Gita. In 1947, to ensure the continuous flow of spiritual knowledge, he launched the 'Sri Viswa Mimamsa' spiritual magazine, ensuring his teachings of Karma and Bhakti would guide generations of devotees for centuries to come."
    }
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-orange-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-orange-400 text-3xl">ॐ</span>
            <span className="uppercase tracking-[0.3em] text-orange-200 text-sm font-bold">The Complete Philosophy</span>
            <span className="text-orange-400 text-3xl">ॐ</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-white"
          >
            Sri Satyananda Maharshi
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full border-4 border-orange-500/30 overflow-hidden shadow-2xl mb-8"
          >
            <img src="/satyananda.jpg" alt="Sri Satyananda Maharshi" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* 2. THE CORE PHILOSOPHY QUOTE */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-orange-500">
          <Quote className="text-orange-200 w-16 h-16 mb-4 mx-auto rotate-180" />
          <p className="text-xl md:text-2xl text-orange-950 text-center font-serif leading-relaxed italic">
            "True devotion is not found merely in the chanting of mantras, but in the silent, selfless service to humanity. When you see the Divine in the hungry, the poor, and the voiceless, your life itself becomes a continuous prayer."
          </p>
          <div className="mt-8 text-center">
            <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">The Path of Karma and Bhakti</p>
          </div>
        </div>
      </div>

      {/* 3. THE 13 STAGES OF HIS LIFE */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px bg-orange-300 flex-grow"></div>
          <Sparkles className="text-orange-500" />
          <h2 className="text-3xl font-black text-orange-950 uppercase tracking-widest text-center">
            The 13 Divine Stages
          </h2>
          <Sparkles className="text-orange-500" />
          <div className="h-px bg-orange-300 flex-grow"></div>
        </div>

        <div className="space-y-12">
          {chapters.map((chapter, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-orange-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle background number */}
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-orange-50 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                {index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-orange-500 w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-orange-900 font-serif">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed md:leading-loose text-justify">
                  {/* Drop cap for the first letter of each paragraph for a premium reading feel */}
                  <span className="float-left text-5xl font-black text-orange-400 mr-2 mt-1 leading-none font-serif">
                    {chapter.content.charAt(0)}
                  </span>
                  {chapter.content.substring(1)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ending Emblem */}
        <div className="mt-20 flex justify-center opacity-50">
           <img src="/logo.png" alt="Asramam Emblem" className="w-16 h-16 grayscale" />
        </div>
      </div>

    </div>
  );
}