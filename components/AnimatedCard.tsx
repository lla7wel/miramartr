'use client';

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type AnimatedCardProps = PropsWithChildren<{
  className?: string;
}>;

const BASE_CLASSES =
  "relative overflow-hidden rounded-3xl bg-slate-950/70 border border-slate-800/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm cursor-default lg:cursor-pointer";

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
  const classes = [BASE_CLASSES, className].filter(Boolean).join(" ");

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.02, rotateX: -1.5, rotateY: 1.5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
