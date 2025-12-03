'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import {
  COMPANY_PROFILE_PATH,
  CORE_POSITIONING,
  LEGAL_LINE,
  MAP_EMBED,
  MAP_LINK,
  REGISTERED_ADDRESS,
  SPEC_DISCLAIMER,
} from "../lib/constants";

const FOOTER_COPY = {
  en: {
    tagline: CORE_POSITIONING.en,
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Sectors", href: "/sectors" },
      { label: "Equipment", href: "/equipment" },
      { label: "Contact", href: "/contact" },
    ],
    officeLabel: "Registered office",
    profileCta: "Download company profile (PDF)",
    legal: LEGAL_LINE.en,
    disclaimer: SPEC_DISCLAIMER.en,
    contactCta: "Contact Miramar",
    brandSubtitle: "Energy & Industrial Equipment",
    quickLinksLabel: "Quick links",
    mapCta: "Open in Maps",
    builtFor: "Built for regional private energy & industrial companies.",
  },
  tr: {
    tagline: CORE_POSITIONING.tr,
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Sectors", href: "/sectors" },
      { label: "Equipment", href: "/equipment" },
      { label: "Contact", href: "/contact" },
    ],
    officeLabel: "Registered office",
    profileCta: "Download company profile (PDF)",
    legal: LEGAL_LINE.tr,
    disclaimer: SPEC_DISCLAIMER.tr,
    contactCta: "Contact Miramar",
    brandSubtitle: "Energy & Industrial Equipment",
    quickLinksLabel: "Quick links",
    mapCta: "Open in Maps",
    builtFor: "Built for regional private energy & industrial companies.",
  },
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const c = FOOTER_COPY[lang];

  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="relative rounded-3xl border border-slate-800/70 bg-slate-900/80 px-4 py-5 sm:px-6 sm:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
          <div className="pointer-events-none absolute -right-24 -top-16 h-40 w-40 rounded-full bg-[#B8202A]/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 bottom-[-18px] h-28 w-56 rounded-[999px] bg-gradient-to-r from-[#B8202A]/45 via-transparent to-transparent blur-3xl" />

          <div className="relative z-10 space-y-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80">
                    <Image
                      src="/miramar-logo.png"
                      alt="Miramar logo"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-slate-200">
                      MIRAMAR
                    </p>
                    <p className="text-xs text-slate-400">{c.brandSubtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300">{c.tagline}</p>

                <div className="space-y-1 text-xs text-slate-400">
                  <p className="font-semibold text-slate-300">{c.officeLabel}</p>
                  <p>{REGISTERED_ADDRESS}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={COMPANY_PROFILE_PATH}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-white/20"
                  >
                    {c.profileCta}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600"
                  >
                    {c.contactCta}
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
                      {c.quickLinksLabel.toUpperCase()}
                    </p>
                    <nav className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
                      {c.quickLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-slate-50">
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-xl shadow-black/50">
                  <div className="h-40 w-full">
                    <iframe
                      title="Miramar head office on Google Maps"
                      src={MAP_EMBED}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 py-2 text-[11px] text-slate-200">
                    <span className="line-clamp-2">{REGISTERED_ADDRESS}</span>
                    <a
                      href={MAP_LINK}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex-shrink-0 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-semibold text-slate-50 shadow hover:bg-slate-700"
                    >
                      {c.mapCta}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p>&copy; {year} Miramar. {c.legal}</p>
                <p className="text-slate-500">{c.disclaimer}</p>
              </div>
              <p className="text-slate-400 text-right sm:text-left">
                {c.builtFor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
