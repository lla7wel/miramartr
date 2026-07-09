"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const IndustrialScene = dynamic(
  () => import("@/components/sections/industrial-scene").then((mod) => mod.IndustrialScene),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

function HeroFallback() {
  return (
    <Image
      src="/miramar-3d-hero.png"
      alt="Miramar industrial supply network visual"
      fill
      sizes="(min-width: 1024px) 44vw, 100vw"
      className="object-cover"
      priority
    />
  );
}

export function HeroVisual() {
  const [canUseMotion, setCanUseMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 900px)");
    const update = () => setCanUseMotion(!media.matches && wide.matches);
    update();
    media.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-steel-700 bg-steel-950 shadow-[0_24px_70px_rgba(0,0,0,0.45)] lg:min-h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(184,32,42,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-45">
        <HeroFallback />
      </div>
      <div className="absolute inset-0">
        {canUseMotion ? <IndustrialScene /> : <HeroFallback />}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-steel-700/70 bg-graphite-950/78 text-xs font-bold uppercase tracking-[0.16em] text-steel-300 backdrop-blur">
        <span className="border-r border-steel-700/70 p-3">Supply</span>
        <span className="border-r border-steel-700/70 p-3">MEP</span>
        <span className="p-3">Delivery</span>
      </div>
    </div>
  );
}
