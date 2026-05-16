import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingOms() {
  // Generate 20 random Om symbols with different starting positions, sizes, and speeds
  const oms = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 20 + Math.random() * 30, // Each takes 20-50 seconds to complete a loop
    size: 20 + Math.random() * 60, // Sizes range from 20px to 80px
    opacity: 0.03 + Math.random() * 0.08, // Very faint so it doesn't distract from text
  }));

  return (
    // 'fixed inset-0 z-[-1]' locks this behind all other website content
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {oms.map((om) => (
        <motion.div
          key={om.id}
          className="absolute text-orange-600 font-bold"
          style={{
            left: om.left,
            top: om.top,
            fontSize: `${om.size}px`,
            opacity: om.opacity,
          }}
          animate={{
            y: [0, -150, 150, -50, 0], // Move up and down
            x: [0, 100, -100, 50, 0],  // Move left and right
            rotate: [0, 90, 180, 270, 360], // Slowly spin
          }}
          transition={{
            duration: om.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ॐ
        </motion.div>
      ))}
    </div>
  );
}