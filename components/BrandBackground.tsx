'use client';

import React from "react";

export default function BrandBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-[999px] bg-gradient-to-tr from-[#102A5C] via-slate-900 to-[#B8202A] opacity-70 blur-3xl animate-pulse" />
      <div className="absolute -right-24 top-24 h-64 w-80 rounded-3xl border border-slate-700/60 bg-slate-900/70 shadow-2xl shadow-black/40 rotate-[-8deg]" />
      <div className="absolute -left-24 bottom-10 h-64 w-96 rounded-3xl border border-slate-800/60 bg-slate-900/80 shadow-2xl shadow-black/50 rotate-[6deg]" />
    </div>
  );
}
