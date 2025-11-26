'use client';

import Image, { ImageProps } from "next/image";
import React, { MouseEvent, useState } from "react";

type InteractiveImageProps = ImageProps & {
  maxTilt?: number;
  containerClassName?: string;
};

export default function InteractiveImage({
  maxTilt = 10,
  containerClassName = "",
  className = "",
  ...props
}: InteractiveImageProps) {
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) translateY(0px)"
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * maxTilt;
    const rotateX = ((midY - y) / midY) * maxTilt;

    setTransform(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    );
  }

  function handleMouseLeave() {
    setTransform("rotateX(0deg) rotateY(0deg) translateY(0px)");
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-2xl shadow-black/40 ${
        containerClassName ?? ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <div
        className="h-full w-full transition-transform duration-150 ease-out will-change-transform"
        style={{ transform }}
      >
        <Image
          {...props}
          className={`h-full w-full object-cover ${className ?? ""}`}
        />
      </div>
    </div>
  );
}
