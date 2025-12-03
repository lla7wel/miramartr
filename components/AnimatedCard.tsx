'use client';

import { motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

type AnimatedCardProps = PropsWithChildren<{
  className?: string;
}>;

const BASE_CLASSES =
  "relative overflow-hidden rounded-3xl bg-slate-950/70 border border-slate-800/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm cursor-default lg:cursor-pointer";

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
  const classes = [BASE_CLASSES, className].filter(Boolean).join(" ");
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={canHover ? { y: -4, scale: 1.01 } : undefined}
      whileTap={canHover ? { scale: 0.995 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
