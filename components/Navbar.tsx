'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const NAV_LABELS = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    sectors: "Sectors",
    equipment: "Equipment",
    contact: "Contact",
  },
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    sectors: "Sektörler",
    equipment: "Ekipman",
    contact: "İletişim",
  },
} as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const labels = NAV_LABELS[lang];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl">
            <Image
              src="/miramar-logo.png"
              alt="Miramar logo"
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200">
              Miramar
            </span>
            <span className="text-[11px] text-slate-400">
              Energy &amp; Industrial Equipment
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { label: labels.home, href: "/" },
            { label: labels.about, href: "/about" },
            { label: labels.services, href: "/services" },
            { label: labels.sectors, href: "/sectors" },
            { label: labels.equipment, href: "/equipment" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-1 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200">
            {(["en", "tr"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2 py-1 transition ${
                  lang === code
                    ? "bg-slate-800 text-slate-50"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#B8202A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#B8202A]/30 transition hover:bg-[#9c1b24]"
          >
            {labels.contact}
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-slate-700 hover:bg-slate-800 md:hidden"
        >
          Menu
          <span
            className={`h-1.5 w-1.5 rounded-full transition ${
              open ? "bg-[#B8202A]" : "bg-slate-400"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full origin-top transform border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
          <div className="space-y-2 text-sm font-medium text-slate-100">
            {[
              { label: labels.home, href: "/" },
              { label: labels.about, href: "/about" },
              { label: labels.services, href: "/services" },
              { label: labels.sectors, href: "/sectors" },
              { label: labels.equipment, href: "/equipment" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200">
            {(["en", "tr"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`rounded-full px-3 py-2 transition ${
                  lang === code
                    ? "bg-slate-800 text-slate-50"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#B8202A] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#B8202A]/30 transition hover:bg-[#9c1b24]"
          >
            {labels.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
