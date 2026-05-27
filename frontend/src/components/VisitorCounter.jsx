import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Ensure this path points to your initialized firebase file
import { ref, onValue, runTransaction, onDisconnect, push, set } from "firebase/database";
import { Users, Activity, Eye } from 'lucide-react';

export default function VisitorCounter() {
  const [stats, setStats] = useState({ live: 0, today: 0, total: 0 });

  useEffect(() => {
    // --- 1. TODAY & TOTAL VISITORS (Midnight Reset Logic using Transaction) ---
    const hasVisited = sessionStorage.getItem('hasVisitedAsramam');
    const statsRef = ref(db, 'stats');
    
    // Get the current date in YYYY-MM-DD format based on Indian Standard Time
    const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    if (!hasVisited) {
      runTransaction(statsRef, (currentData) => {
        if (currentData === null) {
          // Initialize if the database is completely empty
          return { total: 1, daily: { date: todayStr, count: 1 } };
        }

        let newTotal = (currentData.total || 0) + 1;
        let newDaily = { ...currentData.daily };

        // The Midnight Reset Logic
        if (newDaily.date === todayStr) {
          // Same day: increment the count
          newDaily.count = (newDaily.count || 0) + 1;
        } else {
          // New day: Reset count to 1 and update the date string
          newDaily = { date: todayStr, count: 1 };
        }

        return {
          total: newTotal,
          daily: newDaily
        };
      }).then(() => {
        sessionStorage.setItem('hasVisitedAsramam', 'true');
      }).catch((error) => {
        console.error("Transaction failed: ", error);
      });
    }

    // Listen for live updates to the Total and Today numbers
    const unsubscribeStats = onValue(statsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setStats(prev => ({
          ...prev,
          total: data.total || 0,
          today: data.daily?.count || 0 // Read from the new nested daily object
        }));
      }
    });

    // --- 2. LIVE VIEWERS (Firebase Presence System) ---
    const connectedRef = ref(db, '.info/connected');
    const liveUsersRef = ref(db, 'live_users');
    const myConnectionRef = push(liveUsersRef);

    const unsubscribeConnected = onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        onDisconnect(myConnectionRef).remove().then(() => {
          set(myConnectionRef, true);
        });
      }
    });

    const unsubscribeLive = onValue(liveUsersRef, (snap) => {
      setStats(prev => ({
        ...prev,
        live: snap.exists() ? snap.size : 0
      }));
    });

    // --- 3. CLEANUP ---
    return () => {
      unsubscribeStats();
      unsubscribeConnected();
      unsubscribeLive();
      set(myConnectionRef, null);
    };
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
                {stats.live}
              </div>
              <div className="text-xs font-bold text-green-800 uppercase tracking-wider">Live Viewers</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>

          {/* 2. Today's Viewers */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-center border-t border-orange-100 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Activity size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-orange-600 font-mono transition-all duration-300">
                {stats.today.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-orange-900 uppercase tracking-wider">Today's Visitors</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-16 bg-orange-200"></div>

          {/* 3. Total Viewers */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-end border-t border-orange-100 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-orange-950 flex items-center justify-center text-orange-200">
              <Users size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-orange-950 font-mono">
                {stats.total.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-orange-900/70 uppercase tracking-wider">Total Visitors</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}