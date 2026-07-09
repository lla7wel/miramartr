"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { MAP_EMBED, MAP_LINK, REGISTERED_ADDRESS } from "@/lib/constants";
import { corePositioning, navItems, uiCopy } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const copy = uiCopy[lang];

  return (
    <footer className="border-t border-steel-800 bg-graphite-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.8fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-steel-700 bg-steel-950">
                <Image src="/miramar-logo.png" alt="Miramar logo" width={34} height={34} />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cream">Miramar</p>
                <p className="text-xs text-steel-300">{copy.brandSubtitle}</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-steel-300">{corePositioning[lang]}</p>
            <p className="text-xs leading-5 text-steel-400">
              {copy.registeredOffice}: {REGISTERED_ADDRESS}
            </p>
          </div>

          <div>
            <p className="eyebrow">{copy.quickLinks}</p>
            <nav className="mt-4 grid gap-2 text-sm text-steel-200" aria-label="Footer navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-cream">
                  {item.label[lang]}
                </Link>
              ))}
              <Link href="/contact" className="hover:text-cream">
                {copy.contact}
              </Link>
            </nav>
          </div>

          <div className="overflow-hidden rounded-lg border border-steel-700 bg-steel-950">
            <iframe
              title="Miramar registered office map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-44 w-full border-0"
            />
            <div className="flex items-center justify-between gap-3 p-3 text-xs text-steel-300">
              <span className="line-clamp-2">{REGISTERED_ADDRESS}</span>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="shrink-0 rounded bg-steel-800 px-3 py-2 font-bold text-cream"
              >
                {copy.openMaps}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-steel-800 pt-5 text-xs text-steel-500 md:grid-cols-[1fr_auto]">
          <div>
            <p>
              &copy; {year} Miramar. {copy.legal}
            </p>
            <p>{copy.disclaimer}</p>
          </div>
          <p className="text-steel-400">{copy.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
