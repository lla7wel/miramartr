'use client';

import { motion } from "framer-motion";

export default function BackgroundOrbits() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-6 top-10 h-56 w-56 rounded-[32px] bg-gradient-to-br from-[#B8202A]/35 via-[#102A5C]/25 to-transparent blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-24 h-64 w-64 rounded-3xl bg-gradient-to-br from-white/12 via-[#0F1C3B]/20 to-transparent blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-6 left-1/3 h-52 w-52 rounded-[36px] bg-gradient-to-br from-[#102A5C]/30 via-[#B8202A]/30 to-transparent blur-3xl"
        animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}
