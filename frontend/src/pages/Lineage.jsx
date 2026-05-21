import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Sparkles, MapPin, Feather, Heart, Star } from 'lucide-react';

// --- Story Mode Timeline Component ---
const StoryTimeline = ({ storyParts }) => {
  const containerRef = useRef(null);
  
  // Creates a reading progress bar based on scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-12 md:mt-20 relative" ref={containerRef}>
      
      <div className="flex items-center gap-3 mb-12">
        <Sparkles size={28} className="text-orange-600" />
        <h4 className="text-2xl md:text-3xl font-black text-orange-950">
          The Divine Journey
        </h4>
      </div>

      <div className="absolute left-[15px] md:left-[27px] top-[80px] bottom-0 w-1 bg-orange-100 rounded-full"></div>
      
      <motion.div 
        className="absolute left-[15px] md:left-[27px] top-[80px] w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full z-10"
        style={{ height: progressBarHeight }}
      />

      <div className="space-y-12 pb-12">
        {storyParts.map((part, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pl-12 md:pl-20 group"
          >
            <div className="absolute left-0 md:left-3 top-1 w-[34px] h-[34px] rounded-full bg-white border-4 border-orange-200 z-20 flex items-center justify-center group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>

            <div className="bg-white hover:bg-orange-50/50 p-6 md:p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h5 className="text-lg md:text-xl font-bold text-orange-800 mb-3 font-serif">
                {part.title}
              </h5>
              <p className="text-gray-700 leading-relaxed md:text-lg">
                {part.content}
              </p>
              
              {part.badge && (
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-orange-600/80 font-medium bg-orange-100/50 px-3 py-1 rounded-full">
                  <part.badgeIcon size={14} /> {part.badge}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Lineage() {
  const satyanandaStory = [
    { title: "The Sacred Land & Realization", content: "Born in the spiritually rich land of India, Sri Satyananda Maharshi's life was destined for greatness. His intense penance ultimately blossomed into supreme realization on the auspicious day of Vijaya Dasami in September 1944." },
    { title: "Lineage and Divine Birth", content: "He was born in the village of Vakadu on Maha Shivaratri in 1912. Named 'Satyanarayana', his birth was considered a divine fruit, answering the deep prayers and sacred vows his parents had made to Lord Satyanarayana." },
    { title: "Childhood Leelas & Early Signs", content: "Even as a child, wandering monks prophesied his spiritual greatness. He displayed an innate Vairagya (dispassion for worldly things) and was at the center of several miraculous childhood incidents that hinted at his divine nature." },
    { title: "Education & Fearless Devotion", content: "While exhibiting academic brilliance at VR College, his true focus lay inward. He engaged in intense worship of the Gayatri Mantra. His fearlessness was famously displayed when he remained absorbed in meditation during the catastrophic Nellore cyclone of 1927." },
    { title: "Thirst for True Knowledge", content: "His youth was marked by fierce patriotism and a deep thirst for truth. He established the 'Mitra Mandali' for spiritual study among peers and dedicated himself to Daridra Narayana Seva—serving the divine in the form of the poor." },
    { title: "The Turning Point: Darshan of Sri Ramana", content: "In 1932, a pilgrimage to Tiruvannamalai changed his life forever. He had a powerful, silent encounter with Bhagavan Sri Ramana Maharshi, which ignited his soul and led to his initiation into the path of Self-Inquiry.", badge: "Tiruvannamalai (1932)", badgeIcon: MapPin },
    { title: "The Ideal Householder Life", content: "He lived as a detached Grihastha (householder), fulfilling his duties without being bound by them. He maintained strict ethical standards while employed at the Mica Mine, eventually enduring the profound loss of his wife." },
    { title: "The Vow of Absolute Renunciation", content: "Worldly ties were formally severed on Vijaya Dasami in 1934. This monumental step into Sannyasa was marked by a historic 49-day Akhanda Sankirtana (continuous chanting) in the village of Inamadugu." },
    { title: "Establishment of the Asramam", content: "In 1935, the foundation for the Sri Sathyanandha Asramam was laid. He championed a universal vision, actively breaking down caste and religious barriers, and worked tirelessly to dispel local superstitions.", badge: "Inamadugu (1935)", badgeIcon: Heart },
    { title: "The Rameswaram Yatra", content: "During a profound pilgrimage to Rameswaram, he experienced deep spiritual states. A deeply touching highlight of this period was when Bhagavan Ramana Maharshi personally showed him the scar on his toe from his own early Tapas." },
    { title: "Silence & Steadfast Penance", content: "He entered a period of severe Tapas and complete silence (Mouna). During this time, he received a divine vision instructing him to build the Sri Ramana Mandir, which was beautifully consecrated in 1937." },
    { title: "The Grand Pilgrimage", content: "His spiritual footprint expanded across India with tours to Puri, Kashi, and Kolkata. As a fully realized Guru, he led a massive group of 60 devotees all the way to Tiruvannamalai to receive Darshan from Ramana Maharshi." },
    { title: "Scriptural Research & Literary Legacy", content: "His later years were devoted to monumental literary contributions. He authored a profound commentary on the Bhagavad Gita and, in 1947, launched the 'Sri Viswa Mimamsa' spiritual magazine, ensuring his teachings would guide generations to come.", badge: "Sri Viswa Mimamsa (1947)", badgeIcon: Feather }
  ];

  const brahmanandaStory = [
    { title: "Early Life & Education", content: "Born in 1933 as Mandha Kasipati in the Visakhapatnam district to devout parents, Venkatesam and Suramma. He pursued a B.Com degree but bore familial responsibilities early when his father passed away in 1951. He married in 1953 and worked in the Collector's office." },
    { title: "The Divine Calling", content: "Worldly life could not contain his spiritual yearning. Resigning from his secure government job in 1955, he was irresistibly drawn toward the spiritual path. On July 5, 1956, he arrived at the Inamadugu Asramam, seeking refuge at the feet of Sri Satyananda Maharshi.", badge: "Arrival at Inamadugu (1956)", badgeIcon: MapPin },
    { title: "Unwavering Surrender & Service", content: "Immersing himself fully in Ashram life, he dedicated his days to profound spiritual practices, rigorous Bhagavad Gita Parayana, and selfless service. His absolute devotion and meticulous care for the Ashram quickly made him a beloved and trusted disciple." },
    { title: "Sannyasa Deeksha", content: "Recognizing his immense spiritual maturity, Sri Satyananda Maharshi blessed him with the supreme vow of Sannyasa on the highly auspicious day of Vijaya Dasami, October 11, 1959. He was bestowed the sacred name 'Sri Brahmananda Teertha Swamy'.", badge: "Vijaya Dasami (1959)", badgeIcon: Star },
    { title: "Guiding the Asramam's Future", content: "As the designated successor, he took on vast responsibilities, managing publications like the 'Sri Viswa Mimamsa' magazine and expanding the Asramam's outreach. He operated with absolute faith, often receiving divine guidance directly from his Guru through deep meditative states and profound visions." }
  ];

  const lineageData = [
    {
      id: 1,
      name: "Sri Satyananda Maharshi",
      title: "The Founding Guru",
      period: "Established the Asramam in 1935",
      image: "/satyananda.jpg",
      description: "Founder of the Sri Sathyanandha Asramam and a fully realized soul. His life was a testament to extreme penance, universal love, and devotion to his Guru, Sri Ramana Maharshi.",
      story: satyanandaStory
    },
    {
      id: 2,
      name: "Sri Bramhananda Teertha Swamy",
      title: "Second Peethadhipati",
      period: "1972 - 2002",
      image: "/brahmananda.jpg",
      description: "A dedicated successor who carried forward the editorial legacy of the 'Sri Viswa Mimamsa' magazine for three decades, expanding the Asramam's spiritual footprint and charitable services.",
      story: brahmanandaStory
    },
    {
      id: 3,
      name: "Sri Hari Teertha Swamy",
      title: "Current Peethadhipati",
      period: "2003 - Present",
      image: "/srihari.jpg",
      description: "The present torchbearer of the lineage, overseeing the magnificent construction of the Adhistana Mandiram and continuously guiding the modern spiritual and digital outreach of the Asramam."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 min-h-screen">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-6">
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
          Lineage (Peethadhipatulu)
          <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-6"></div>
        <p className="text-orange-800/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          The divine succession of Gurus who have guided the Sri Sathyanandha Asramam, carrying forward the torch of Bhakti, knowledge, and selfless service.
        </p>
      </motion.div>

      <div className="space-y-32">
        {lineageData.map((guru, index) => (
          <div key={guru.id}>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              // Changed items-center to items-start so the columns can scroll independently
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* --- THE STICKY IMAGE SECTION --- */}
              {/* Added self-start and top-[15vh] to perfectly vertically center it during scroll */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-[15vh] self-start relative group z-10">
                <div className="absolute inset-0 bg-orange-400 rounded-3xl translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                
                <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10 bg-orange-50 flex items-center justify-center">
                  <img 
                    src={guru.image} 
                    alt={guru.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = '/asramamimages/asramam1.png'; }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
                    <span className="text-white font-bold tracking-widest uppercase text-sm opacity-100 drop-shadow-md">
                      {guru.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Timeline Section */}
              <div className="w-full lg:w-7/12 flex flex-col justify-start pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 uppercase tracking-widest">
                    {guru.title}
                  </h3>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-orange-950 mb-6 leading-tight">
                  {guru.name}
                </h2>
                
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 shadow-sm text-gray-700 text-lg leading-relaxed">
                  <p>{guru.description}</p>
                </div>

                {guru.story && <StoryTimeline storyParts={guru.story} />}
                
              </div>

            </motion.div>

            {index < lineageData.length - 1 && (
              <div className="w-full flex justify-center mt-32 opacity-30">
                <div className="w-32 h-px bg-orange-400"></div>
                <div className="mx-4 text-orange-500">ॐ</div>
                <div className="w-32 h-px bg-orange-400"></div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}