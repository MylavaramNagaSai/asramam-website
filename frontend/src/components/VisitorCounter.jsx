import React, { useState, useEffect } from 'react';
import { Users, Activity, Eye } from 'lucide-react';

export default function VisitorCounter() {
  // Simulated initial values
  const [liveViewers, setLiveViewers] = useState(12);
  const [todayVisitors, setTodayVisitors] = useState(147);
  const [totalVisitors, setTotalVisitors] = useState(108437);

  // Highly realistic "Live Activity" Simulation Algorithm
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => {
        // Randomly fluctuate live viewers by -2 to +2
        const change = Math.floor(Math.random() * 5) - 2; 
        let next = prev + change;
        
        // Keep the live count realistic (between 5 and 28 for now)
        if (next < 5) next = 5 + Math.floor(Math.random() * 3);
        if (next > 28) next = 28 - Math.floor(Math.random() * 3);
        
        // If the live viewer count goes UP, there is a chance a *new* person arrived
        if (next > prev && Math.random() > 0.4) {
          setTodayVisitors(t => t + 1);
          setTotalVisitors(t => t + 1);
        }
        
        return next;
      });
    }, 3500); // Updates every 3.5 seconds for a dynamic feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-transparent to-orange-50/50 border-t border-orange-100 py-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-orange-100">
          
          {/* 1. Live Viewers */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 relative">
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <Eye size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-green-600 font-mono transition-all duration-300">
                {liveViewers}
              </div>
              <div className="text-xs font-bold text-green-800 uppercase tracking-wider">Live Viewers</div>
            </div>
          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>

          {/* 2. Today's Viewers */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-center border-t border-orange-100 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Activity size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-orange-600 font-mono transition-all duration-300">
                {todayVisitors.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-orange-900 uppercase tracking-wider">Today's Visitors</div>
            </div>
          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>

          {/* 3. Total Viewers */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-end border-t border-orange-100 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-orange-950 flex items-center justify-center text-orange-200">
              <Users size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-orange-950 font-mono">
                {totalVisitors.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-orange-900/70 uppercase tracking-wider">Total Visitors</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}