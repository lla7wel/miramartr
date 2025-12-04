'use client';

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundOrbits() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-6 top-10 h-64 w-64 rounded-[42px] bg-gradient-to-br from-[#B8202A]/40 via-[#102A5C]/25 to-transparent blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-4 top-12 h-72 w-72 rounded-[52px] bg-gradient-to-br from-white/12 via-[#0F1C3B]/20 to-transparent blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -16, 0], y: [0, 14, 0] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 left-1/3 h-56 w-56 rounded-[36px] bg-gradient-to-br from-[#102A5C]/30 via-[#B8202A]/30 to-transparent blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 m-auto h-[540px] w-[540px] max-w-[80vw] rounded-full border border-white/5 blur-[0.5px]"
        style={{ translateZ: 0 }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 360],
              }
        }
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 m-auto h-[420px] w-[420px] max-w-[70vw] rounded-full border border-[#B8202A]/20"
        style={{ translateZ: 0 }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [360, 0],
                x: [0, 6, -4, 0],
                y: [0, -6, 4, 0],
              }
        }
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
