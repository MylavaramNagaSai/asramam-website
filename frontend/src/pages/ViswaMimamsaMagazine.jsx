import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Calendar, Filter, BookOpen, HelpCircle, FileText } from 'lucide-react';

export default function ViswaMimamsaMagazine() {
  // Generate Years 2026 down to 2001
  const years = Array.from({ length: 26 }, (_, i) => (2026 - i).toString());
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  // Mapped directly from your terminal tree (Cleaned for standard PDFs)
  // Make sure your "Publication" folder is placed directly inside your "public" folder!
  const magazineData = [
    // 2011
    { year: "2011", month: "January", file: "/Publication/2011 PDF/1 january 2011.pdf" },
    { year: "2011", month: "February", file: "/Publication/2011 PDF/2 Feb 2011.pdf" },
    { year: "2011", month: "April", file: "/Publication/2011 PDF/4 April 2011.pdf" },
    { year: "2011", month: "May", file: "/Publication/2011 PDF/5 May 2011.pdf" },
    { year: "2011", month: "June", file: "/Publication/2011 PDF/6 JUne 2011.pdf" },
    { year: "2011", month: "July", file: "/Publication/2011 PDF/7 July 2011.pdf" },
    { year: "2011", month: "August", file: "/Publication/2011 PDF/8 Agust 2011.pdf" },
    { year: "2011", month: "September", file: "/Publication/2011 PDF/9 Sept 2011.pdf" },
    { year: "2011", month: "October", file: "/Publication/2011 PDF/10  Oct  2011.pdf" },
    { year: "2011", month: "November", file: "/Publication/2011 PDF/11 November 2011.pdf" },
    { year: "2011", month: "December", file: "/Publication/2011 PDF/12 December 2011.pdf" },

    // 2013
    { year: "2013", month: "January", file: "/Publication/PDF FIES 2013/1 January 2013.pdf" },
    { year: "2013", month: "February", file: "/Publication/PDF FIES 2013/2 Feb 2013.pdf" },
    { year: "2013", month: "March", file: "/Publication/PDF FIES 2013/3 March 2013.pdf" },
    { year: "2013", month: "April", file: "/Publication/PDF FIES 2013/4 April 2013.pdf" },
    { year: "2013", month: "May", file: "/Publication/PDF FIES 2013/5 May 2013.pdf" },
    { year: "2013", month: "June", file: "/Publication/PDF FIES 2013/6 June2013.pdf" },
    { year: "2013", month: "July", file: "/Publication/PDF FIES 2013/7 july 2013 New.pdf" },
    { year: "2013", month: "August", file: "/Publication/PDF FIES 2013/E__Magazine_2013_8 Augast  2013.pdf" },
    { year: "2013", month: "September", file: "/Publication/PDF FIES 2013/E__Magazine_2013_September 2013.pdf" },
    { year: "2013", month: "October", file: "/Publication/PDF FIES 2013/E__Magazine_2013_October 2013_1.pdf" },
    { year: "2013", month: "November", file: "/Publication/PDF FIES 2013/E__Magazine_2013_November 2013_.pdf" },
    { year: "2013", month: "December", file: "/Publication/PDF FIES 2013/Dec 2013.pdf" },

    // 2014
    { year: "2014", month: "January", file: "/Publication/PDF 2014/1January 2014.pdf" },
    { year: "2014", month: "February", file: "/Publication/PDF 2014/2 Februery 2014.pdf" },
    { year: "2014", month: "March", file: "/Publication/PDF 2014/3 March 2014.pdf" },
    { year: "2014", month: "April", file: "/Publication/PDF 2014/4 April 2014.pdf" },
    { year: "2014", month: "May", file: "/Publication/PDF 2014/5 May 2014.pdf" },
    { year: "2014", month: "June", file: "/Publication/PDF 2014/6 June 2014.pdf" },
    { year: "2014", month: "July", file: "/Publication/PDF 2014/7 July 2014.pdf" },
    { year: "2014", month: "August", file: "/Publication/PDF 2014/8 Aguast 2014_.pdf" },
    { year: "2014", month: "September", file: "/Publication/PDF 2014/September 2014.pdf" },
    { year: "2014", month: "October", file: "/Publication/PDF 2014/10 octomber 2014.pdf" },

    // 2017
    { year: "2017", month: "January", file: "/Publication/PDF Files 2017/1 January 2017.pdf" },
    { year: "2017", month: "February", file: "/Publication/PDF Files 2017/2 Feb 2017.pdf" },
    { year: "2017", month: "April", file: "/Publication/PDF Files 2017/4 April 2017.pdf" },
    { year: "2017", month: "May", file: "/Publication/PDF Files 2017/5 MAY 2017.pdf" },
    { year: "2017", month: "June", file: "/Publication/PDF Files 2017/6 June 2017.pdf" },
    { year: "2017", month: "December", file: "/Publication/PDF Files 2017/12 Dec 2017.pdf" },

    // 2018
    { year: "2018", month: "January", file: "/Publication/PDF FILES 2018/1 January 2018.pdf" },
    { year: "2018", month: "February", file: "/Publication/PDF FILES 2018/2 Feb 2018.pdf" },
    { year: "2018", month: "March", file: "/Publication/PDF FILES 2018/3 March 2018.pdf" },
    { year: "2018", month: "April", file: "/Publication/PDF FILES 2018/4 April 2018.pdf" },
    { year: "2018", month: "May", file: "/Publication/PDF FILES 2018/5 May 2018.pdf" },
    { year: "2018", month: "June", file: "/Publication/PDF FILES 2018/June2018.pdf" },
    { year: "2018", month: "July", file: "/Publication/PDF FILES 2018/7 July 2018.pdf" },
    { year: "2018", month: "August", file: "/Publication/PDF FILES 2018/8 AGUSt 2018.pdf" },
    { year: "2018", month: "September", file: "/Publication/PDF FILES 2018/9 Sept  2018.pdf" },
    { year: "2018", month: "December", file: "/Publication/PDF FILES 2018/12 Decembar 20.pdf" },

    // 2019
    { year: "2019", month: "January", file: "/Publication/PDF 2019/1 January 2019.pdf" },
    { year: "2019", month: "February", file: "/Publication/PDF 2019/2 Feb 2019.pdf" },
    { year: "2019", month: "April", file: "/Publication/PDF 2019/4 April 2019.pdf" },
    { year: "2019", month: "July", file: "/Publication/PDF 2019/JULY2019.pdf" },
    { year: "2019", month: "August", file: "/Publication/PDF 2019/8 Agust 2019.pdf" },
    { year: "2019", month: "September", file: "/Publication/PDF 2019/9 Septt 2019.pdf" },
    { year: "2019", month: "October", file: "/Publication/PDF 2019/10 October 2019.pdf" },
    { year: "2019", month: "November", file: "/Publication/PDF 2019/11 November 2019.pdf" },
    { year: "2019", month: "December", file: "/Publication/PDF 2019/12 December 2019.pdf" },

    // 2020
    { year: "2020", month: "January", file: "/Publication/PDF 2020/1 January 2020.pdf" },
    { year: "2020", month: "February", file: "/Publication/PDF 2020/2 Feb 20.pdf" },
    { year: "2020", month: "March", file: "/Publication/PDF 2020/3 March 2020.pdf" },
    { year: "2020", month: "April", file: "/Publication/PDF 2020/4 April 2020.pdf" },
    { year: "2020", month: "May", file: "/Publication/PDF 2020/5,6 May- June 2020.pdf" }, // Merged Issue
    { year: "2020", month: "July", file: "/Publication/PDF 2020/7 July 2.pdf" },
    { year: "2020", month: "August", file: "/Publication/PDF 2020/8 Agust 2020.pdf" },
    { year: "2020", month: "September", file: "/Publication/PDF 2020/9 Sept 2020.pdf" },
    { year: "2020", month: "October", file: "/Publication/PDF 2020/10 Oct 2020.pdf" },
    { year: "2020", month: "November", file: "/Publication/PDF 2020/11 Nov 2020.pdf" },
    { year: "2020", month: "December", file: "/Publication/PDF 2020/12 Dec 2020.pdf" },

    // 2021
    { year: "2021", month: "January", file: "/Publication/PDF 2021/1 Jan 2021.pdf" },
    { year: "2021", month: "February", file: "/Publication/PDF 2021/2 Feb 2021.pdf" },
    { year: "2021", month: "March", file: "/Publication/PDF 2021/3 March 2021.pdf" },
    { year: "2021", month: "April", file: "/Publication/PDF 2021/4 April 2021.pdf" },
    { year: "2021", month: "May", file: "/Publication/PDF 2021/5 May 2021.pdf" },

    // 2023
    { year: "2023", month: "May", file: "/Publication/PDF 2023/5 MAY 2023.pdf" },
    { year: "2023", month: "June", file: "/Publication/PDF 2023/6 June 2023.pdf" },
    { year: "2023", month: "July", file: "/Publication/PDF 2023/7 July 2023.pdf" },
    { year: "2023", month: "August", file: "/Publication/PDF 2023/8 August 2023.pdf" },
    { year: "2023", month: "September", file: "/Publication/PDF 2023/9 September 2023.pdf" },
    { year: "2023", month: "October", file: "/Publication/PDF 2023/10 October 2023.pdf" },
    { year: "2023", month: "November", file: "/Publication/PDF 2023/11 November 2023.pdf" },

    // 2024
    { year: "2024", month: "January", file: "/Publication/PDF 2024/E__Magazine_2024_1 January 2024.pdf" },
    { year: "2024", month: "February", file: "/Publication/PDF 2024/Feb 2024.pdf" },
    { year: "2024", month: "July", file: "/Publication/PDF 2024/July 2024.pdf" },
    { year: "2024", month: "August", file: "/Publication/PDF 2024/August 2024.pdf" },
    { year: "2024", month: "September", file: "/Publication/PDF 2024/September 2024.pdf" },
    { year: "2024", month: "November", file: "/Publication/PDF 2024/11 Nov 2024.pdf" },
    { year: "2024", month: "December", file: "/Publication/PDF 2024/12 December 2024.pdf" },
  ];

  // The Universal Filter Logic
  const filteredMagazines = useMemo(() => {
    return magazineData.filter(mag => {
      const matchYear = selectedYear === 'All' || mag.year === selectedYear;
      const matchMonth = selectedMonth === 'All' || mag.month === selectedMonth;
      return matchYear && matchMonth;
    }).sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort newest first
  }, [selectedYear, selectedMonth]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 flex items-center justify-center gap-3 md:gap-4 mb-4 glow-text text-center">
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
        Sri Viswa Mimamsa Monthly
        <span className="text-orange-600 text-4xl md:text-5xl">ॐ</span>
      </h1>
      
      <p className="text-center text-orange-800/80 italic font-medium mb-10 border-b-2 border-orange-200 pb-6 max-w-3xl mx-auto text-base md:text-lg">
        The official magazine of Sri Satyanandasramam. Select a year and month below to read or download the sacred monthly publications.
      </p>

      {/* Universal Search / Filter Control Panel */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-orange-100 mb-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6 border-b border-orange-100 pb-4">
          <Filter className="text-orange-500" size={24} />
          <h2 className="text-xl font-bold text-orange-950">Universal Archive Search</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Year Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-orange-800 tracking-wide uppercase flex items-center gap-2">
              <Calendar size={16} /> Select Year
            </label>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-orange-50/50 border-2 border-orange-200 text-orange-950 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
            >
              <option value="All">All Years (2001 - 2026)</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          {/* Month Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-orange-800 tracking-wide uppercase flex items-center gap-2">
              <BookOpen size={16} /> Select Month
            </label>
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full bg-orange-50/50 border-2 border-orange-200 text-orange-950 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
            >
              <option value="All">All Months</option>
              {months.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Grid Canvas */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredMagazines.map((mag, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={`${mag.year}-${mag.month}-${index}`}
              className="bg-white rounded-2xl border border-orange-100 shadow-md p-5 flex flex-col justify-between group hover:shadow-xl hover:border-orange-400 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-orange-50 pb-3">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl text-orange-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={24} />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border bg-orange-50 text-orange-800 border-orange-200">
                    {mag.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-orange-950 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {mag.month} Issue
                </h3>
                
                <p className="text-xs font-mono text-gray-400 truncate mb-6" title={mag.file}>
                  <FileText size={12} className="inline mr-1 -mt-0.5" />
                  Source PDF Attached
                </p>
              </div>

              {/* Download Action with Exact Required Naming Convention */}
              <div className="mt-auto pt-2">
                <a 
                  href={mag.file}
                  download={`${mag.month} ${mag.year}.pdf`}
                  className="w-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98] transition-all shadow-md"
                >
                  <Download size={18} />
                  Download Edition
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Condition Layer */}
      {filteredMagazines.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-orange-50/40 rounded-3xl border-2 border-dashed border-orange-200/60 max-w-md mx-auto"
        >
          <HelpCircle size={40} className="mx-auto text-orange-300 mb-3 animate-pulse" />
          <p className="text-orange-950 font-bold text-lg">No Magazine Found</p>
          <p className="text-gray-500 text-sm mt-1 px-4">There is currently no digital archive available for the selected Year and Month combination.</p>
        </motion.div>
      )}

    </div>
  );
}