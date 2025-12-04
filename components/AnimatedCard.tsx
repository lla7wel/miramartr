'use client';

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

type AnimatedCardProps = PropsWithChildren<{
  className?: string;
  float?: boolean;
  hoverTilt?: boolean;
  delay?: number;
}>;

const BASE_CLASSES =
  "relative overflow-hidden rounded-3xl bg-slate-950/70 border border-slate-800/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm cursor-default lg:cursor-pointer transform-gpu will-change-transform";

export default function AnimatedCard({
  children,
  className,
  float = false,
  hoverTilt = true,
  delay = 0,
}: AnimatedCardProps) {
  const classes = [BASE_CLASSES, className].filter(Boolean).join(" ");
  const [canHover, setCanHover] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const hoverEffect =
    hoverTilt && canHover && !reduceMotion
      ? { y: -6, scale: 1.02, rotateX: -2, rotateY: 2 }
      : canHover && !reduceMotion
        ? { y: -4, scale: 1.01 }
        : undefined;

  return (
    <motion.div
      className={classes}
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={hoverEffect}
      whileTap={canHover && !reduceMotion ? { scale: 0.995 } : undefined}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {float && !reduceMotion ? (
        <motion.div
          animate={{ y: [0, -2, 0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
