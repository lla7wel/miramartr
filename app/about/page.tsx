"use client";

import Link from "next/link";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { CORE_POSITIONING, REGISTERED_ADDRESS } from "../../lib/constants";

const ABOUT_COPY = {
  en: {
    badge: "About Miramar",
    heading: "Istanbul-based institutional partner.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Miramar is an Istanbul-based trading and marketing company supplying heavy equipment for oil & gas, power, and industrial projects. We operate with QA/QC discipline, documentation clarity, and schedule awareness.",
    lead2:
      "Packages are assembled with vetted mills and OEMs, with traceability, inspection coordination, and handover documentation aligned to client frameworks.",
    principles: [
      { title: "How we think", body: "Equipment is risk, uptime, and reputation. We plan every package as if it will be audited." },
      {
        title: "What we prioritize",
        body:
          "Safety, technical compliance, documentation quality, and delivery under real project constraints.",
      },
      { title: "Who we serve", body: "Private industrial groups, EPCs, and energy companies managing long-life assets." },
    ],
    secondaryCards: [
      {
        title: "Regional reach, clear communication",
        body:
          "Serving Türkiye and the wider region with bilingual communication and direct coordination with engineering and procurement teams.",
      },
      {
        title: "Transparent, traceable supply",
        body:
          "Equipment is sourced from vetted mills and OEMs. Manufacturer documentation, test certificates, and QA/QC packs are coordinated when required.",
      },
    ],
    addressLabel: "Registered office",
    servicesCta: "Explore services",
    equipmentCta: "See equipment coverage",
  },
  tr: {
    badge: "About Miramar",
    heading: "Istanbul-based institutional partner.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Miramar is an Istanbul-based trading and marketing company supplying heavy equipment for oil & gas, power, and industrial projects. We operate with QA/QC discipline, documentation clarity, and schedule awareness.",
    lead2:
      "Packages are assembled with vetted mills and OEMs, with traceability, inspection coordination, and handover documentation aligned to client frameworks.",
    principles: [
      { title: "How we think", body: "Equipment is risk, uptime, and reputation. We plan every package as if it will be audited." },
      {
        title: "What we prioritize",
        body:
          "Safety, technical compliance, documentation quality, and delivery under real project constraints.",
      },
      { title: "Who we serve", body: "Private industrial groups, EPCs, and energy companies managing long-life assets." },
    ],
    secondaryCards: [
      {
        title: "Regional reach, clear communication",
        body:
          "Serving Türkiye and the wider region with bilingual communication and direct coordination with engineering and procurement teams.",
      },
      {
        title: "Transparent, traceable supply",
        body:
          "Equipment is sourced from vetted mills and OEMs. Manufacturer documentation, test certificates, and QA/QC packs are coordinated when required.",
      },
    ],
    addressLabel: "Registered office",
    servicesCta: "Explore services",
    equipmentCta: "See equipment coverage",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = ABOUT_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-10 text-slate-50">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 lg:items-start">
        <div className="space-y-4 lg:space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            {t.badge}
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
          <p className="text-sm text-slate-200 sm:text-base">{t.positioning}</p>
          <p className="text-sm text-slate-200 sm:text-base">{t.lead}</p>
          <p className="text-sm text-slate-200 sm:text-base">{t.lead2}</p>
        </div>
        <AnimatedCard className="h-full flex items-center justify-center p-1">
          <InteractiveImage
            src="/miramar-about-overview.png"
            alt="Miramar overview"
            width={480}
            height={320}
            className="w-full rounded-3xl object-cover"
            containerClassName="w-full aspect-[4/3]"
            priority
          />
        </AnimatedCard>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {t.principles.map((item) => (
          <AnimatedCard key={item.title} className="h-full p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              {item.title}
            </p>
            <p className="mt-3 text-sm text-slate-200">{item.body}</p>
          </AnimatedCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {t.secondaryCards.map((card) => (
          <AnimatedCard key={card.title} className="h-full p-6">
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-3 text-sm text-slate-200">{card.body}</p>
          </AnimatedCard>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr] md:items-center">
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <Link
            href="/services"
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
          >
            {t.servicesCta}
          </Link>
          <Link
            href="/equipment"
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
          >
            {t.equipmentCta}
          </Link>
        </div>
        <AnimatedCard className="p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            {t.addressLabel}
          </p>
          <p className="mt-2 text-sm text-slate-200">{REGISTERED_ADDRESS}</p>
        </AnimatedCard>
      </div>
    </div>
  );
}
