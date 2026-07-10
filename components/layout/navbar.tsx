"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { languages } from "@/lib/language";
import { cn } from "@/lib/utils";
import { navItems, uiCopy } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const copy = uiCopy[lang];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-800/85 bg-graphite-950/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-steel-700 bg-steel-950">
            <Image
              src="/miramar-logo.png"
              alt="Miramar logo"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black uppercase tracking-[0.2em] text-cream">
              Miramar
            </span>
            <span className="block truncate text-xs text-steel-300">{copy.brandSubtitle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber",
                isActive(item.href)
                  ? "bg-steel-800 text-cream"
                  : "text-steel-200 hover:bg-white/7 hover:text-cream"
              )}
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="flex items-center rounded-md border border-steel-700 bg-steel-950 p-1"
            aria-label={copy.language}
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "rounded px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] transition",
                  lang === code ? "bg-brand-red text-white" : "text-steel-300 hover:text-cream"
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-md bg-brand-red px-4 py-2.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(184,32,42,0.25)] transition hover:bg-brand-red-dark"
          >
            {copy.contact}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel-700 bg-steel-950 text-cream transition hover:bg-steel-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber lg:hidden"
        >
          <span className="sr-only">{open ? copy.close : copy.menu}</span>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-steel-800 bg-graphite-950/98 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold",
                  isActive(item.href) ? "bg-steel-800 text-cream" : "text-steel-200"
                )}
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex rounded-md border border-steel-700 bg-steel-950 p-1">
              {languages.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "rounded px-3 py-2 text-xs font-bold uppercase tracking-[0.14em]",
                    lang === code ? "bg-brand-red text-white" : "text-steel-300"
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-red px-4 py-2.5 text-sm font-bold text-white"
            >
              {copy.contact}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
