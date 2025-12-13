"use client";

import Link from "next/link";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { CORE_POSITIONING, REGISTERED_ADDRESS } from "../../lib/constants";

const ABOUT_COPY = {
  en: {
    badge: "About Miramar",
    heading: "Istanbul-based supplier and site services partner for construction projects.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Miramar supports construction and site development by supplying project materials and executing critical building services scopes—electrical, plumbing, and pump systems. We operate with practical coordination, clear communication, and a commitment to quality in both supply and on-site work.",
    lead2:
      "Our approach is simple: define the scope early, confirm quantities and specifications, plan deliveries around site reality, and execute installations with discipline and safety.",
    principles: [
      {
        title: "How we think",
        body:
          "Construction is schedule, sequencing, and accountability. We plan every package and site activity to reduce delays and rework.",
      },
      {
        title: "What we prioritize",
        body: "Quality, documentation clarity, safe execution, and reliable delivery.",
      },
      {
        title: "Who we serve",
        body:
          "Contractors, developers, facility owners, and project managers running residential, commercial, and infrastructure builds.",
      },
      {
        title: "Regional reach",
        body:
          "Serving Turkiye and nearby markets with bilingual communication and direct coordination with procurement and site teams.",
      },
      {
        title: "Transparent supply",
        body:
          "Sourcing from vetted manufacturers and distributors; substitutions are controlled, documented, and approved.",
      },
    ],
    secondaryCards: [
      {
        title: "Schedule-aware delivery",
        body:
          "Materials and site works planned around readiness, access, and milestones so crews stay productive.",
      },
      {
        title: "Documentation discipline",
        body:
          "Datasheets, certificates when applicable, and handover basics prepared to match project requirements.",
      },
    ],
    addressLabel: "Registered office",
    servicesCta: "Explore services",
    equipmentCta: "See coverage",
  },
  tr: {
    badge: "Miramar Hakkinda",
    heading: "Insaat projeleri icin tedarik ve saha hizmetleri ortaginiz.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Miramar, insaat ve saha gelistirme projelerini; malzeme tedarigi ve elektrik, sihhi tesisat ile pompa sistemlerinin uygulama destegiyle destekler. Tedarikte ve sahada pratik koordinasyon, net iletisim ve kalite odakli calisiriz.",
    lead2:
      "Yaklasimimiz net: Kapsami erken belirlemek, metraj ve sartlari teyit etmek, teslimatlari saha gercekligine gore planlamak ve uygulamalari disiplin ve guvenlikle yürütmek.",
    principles: [
      {
        title: "Nasil dusunuruz",
        body:
          "Insaat; takvim, sira ve sorumluluktur. Her paketi ve saha aktivitesini gecikme ve tekrar is azaltacak sekilde planliyoruz.",
      },
      {
        title: "Onceliklerimiz",
        body: "Kalite, net dokumantasyon, guvenli uygulama ve guvenilir teslimat.",
      },
      {
        title: "Kime hizmet veririz",
        body:
          "Konut, ticari ve altyapi projelerini yürüten yukleniciler, gelistiriciler, isletme sahipleri ve proje mudurleri.",
      },
      {
        title: "Bolgesel erisim",
        body:
          "Turkiye ve yakin pazarlara iki dilli iletisim ve satin alma/saha ekipleriyle dogrudan koordinasyonla hizmet.",
      },
      {
        title: "Seffaf tedarik",
        body:
          "Dogrulanmis uretici ve distribütorler; alternatifler kontrollu, dokümante ve onayli.",
      },
    ],
    secondaryCards: [
      {
        title: "Takvime duyarlı teslim",
        body:
          "Malzemeler ve saha işleri, hazirlik, erisim ve kilometre taslarina gore planlanir; ekipler verimli kalir.",
      },
      {
        title: "Dokumantasyon disiplini",
        body:
          "Gerekli oldugunda teknik dokumanlar, sertifikalar ve teslim evraklari proje sartlarina uygun sekilde hazirlanir.",
      },
    ],
    addressLabel: "Kayitli ofis",
    servicesCta: "Hizmetleri kesfet",
    equipmentCta: "Kapsami gor",
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

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {t.principles.map((item) => (
          <AnimatedCard key={item.title} className="h-full p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              {item.title}
            </p>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{item.body}</p>
          </AnimatedCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {t.secondaryCards.map((card) => (
          <AnimatedCard key={card.title} className="h-full p-6">
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{card.body}</p>
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
