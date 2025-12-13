'use client';

import Link from "next/link";
import InteractiveImage from "../components/InteractiveImage";
import { useLanguage } from "../components/LanguageProvider";
import AnimatedCard from "../components/AnimatedCard";
import { CORE_POSITIONING } from "../lib/constants";

const HOME_COPY = {
  en: {
    badge: "Istanbul | Construction Materials & Site Services",
    title: "Project-ready supply and site services for modern construction.",
    positioning: CORE_POSITIONING.en,
    body:
      "Miramar supplies construction materials and delivers on-site electrical, plumbing, and pump systems for residential, commercial, and infrastructure projects. We align scope early, coordinate procurement and delivery, and support installation to keep projects moving on schedule.",
    primaryCta: "Share an RFQ / BOQ",
    secondaryCta: "View coverage",
    focusBlocks: [
      {
        label: "Construction Materials",
        value:
          "Structural, finishing, and jobsite essentials aligned to drawings, quantities, and delivery plans.",
      },
      {
        label: "Electrical & Low Voltage",
        value:
          "Supply and installation support for distribution, cabling, containment, lighting, and control.",
      },
      {
        label: "Plumbing, Pumps & Water",
        value:
          "Piping, fittings, drainage, and pumping solutions for buildings and site utilities.",
      },
    ],
    overviewOverline: "Overview",
    overviewTitle: "Miramar at a glance",
    overviewBody:
      "Miramar is an Istanbul-based trading and services partner for construction and site development. We help clients source the right materials, organize deliveries, and execute electrical/plumbing scopes with clear documentation and practical site coordination.",
    learnMore: "Learn more",
    overviewCards: [
      {
        title: "About Miramar",
        body:
          "Built for construction and site development teams that need clear scopes, bilingual support, and disciplined delivery.",
        href: "/about",
      },
      {
        title: "Services",
        body:
          "Materials supply, electrical works, plumbing and pump systems, with schedule-aware delivery.",
        href: "/services",
      },
      {
        title: "Sectors",
        body:
          "Residential, commercial, industrial, infrastructure, and renovation projects across the region.",
        href: "/sectors",
      },
      {
        title: "Equipment",
        body:
          "Construction materials, electrical systems, plumbing/pumps—aligned to specs with documentation.",
        href: "/equipment",
      },
    ],
    featureStacks: [
      {
        overline: "Materials supply & logistics",
        tag: "Construction",
        summary:
          "Structural materials, finishing materials, fasteners, consumables, coordinated delivery windows.",
        bullets: [
          "Packages aligned to drawings, quantities, and delivery phasing.",
          "Jobsite essentials with staged drop-offs to match site readiness.",
        ],
      },
      {
        overline: "Electrical works & systems",
        tag: "Electrical",
        summary:
          "Panels, switchboards, conduits/trays, cables, terminations, testing and commissioning support.",
        bullets: [
          "LV distribution with labeling, containment, and routing clarity.",
          "Basic testing/commissioning support aligned to site requirements.",
        ],
      },
      {
        overline: "Plumbing & pumping systems",
        tag: "MEP",
        summary:
          "Domestic water, drainage, valves, manifolds, booster sets, dewatering and transfer pumps.",
        bullets: [
          "Site utilities and building services aligned to approved materials.",
          "Commissioning inputs and spare strategies where scoped.",
        ],
      },
    ],
    whyOverline: "Why Miramar",
    whyTitle: "Why Miramar for construction teams",
    whyBody:
      "Built for clients that need scope clarity, documentation discipline, and schedule-aware delivery.",
    whyCards: [
      {
        title: "Scope clarity",
        body: "BOQ-first approach with transparent substitutions and approvals.",
      },
      {
        title: "Documentation",
        body:
          "Datasheets, certificates where applicable, and handover basics for site records.",
      },
      {
        title: "Schedule-aware delivery",
        body: "Staged deliveries aligned to site readiness and milestones.",
      },
      {
        title: "Quality & safety mindset",
        body: "Work methods aligned with site rules and project requirements.",
      },
    ],
    hseTitle: "Compliance & site safety",
    hseBody:
      "Miramar aligns materials and installation practices with applicable standards, project specifications, and on-site safety requirements. When required, we coordinate testing, inspections, and basic handover documentation for client records.",
  },
  tr: {
    badge: "Istanbul | Insaat Malzemeleri ve Saha Hizmetleri",
    title: "Modern insaat icin proje hazir tedarik ve saha hizmetleri.",
    positioning: CORE_POSITIONING.tr,
    body:
      "Miramar, konut, ticari ve altyapi projeleri icin insaat malzemeleri tedarik eder; sahada elektrik, mekanik (sihhi tesisat) ve pompa sistemlerini kurulum destegiyle saglar. Kapsami erken netlestirir, satin alma/lojistigi koordine eder ve montaja destek olarak programi korur.",
    primaryCta: "Teklif / metraj gonder",
    secondaryCta: "Kapsami goruntule",
    focusBlocks: [
      {
        label: "Insaat Malzemeleri",
        value:
          "Statik, ince isler ve saha ihtiyaclari; projeye, metraja ve teslim planina gore hizalanir.",
      },
      {
        label: "Elektrik & Zayif Akim",
        value:
          "Dagitim, kablolama, kablo yolu/kanal, aydinlatma ve kontrol icin tedarik ve kurulum destegi.",
      },
      {
        label: "Sihhi Tesisat & Pompalar",
        value:
          "Boru, baglanti elemanlari, drenaj ve pompa cozumleri; bina ve saha altyapilari icin.",
      },
    ],
    overviewOverline: "Genel Bakis",
    overviewTitle: "Miramar ozet",
    overviewBody:
      "Miramar, insaat ve saha gelistirme projeleri icin malzeme tedarigi ve saha hizmetleri sunan Istanbul merkezli bir is ortagidir. Dogru malzemeleri bulur, teslimatlari organize eder ve elektrik/sihhi tesisat islerini net dokumantasyon ve pratik koordinasyonla destekler.",
    learnMore: "Incele",
    overviewCards: [
      {
        title: "Miramar Hakkinda",
        body:
          "Acik kapsam, iki dilli destek ve disiplinli teslimat isteyen insaat ekipleri icin.",
        href: "/about",
      },
      {
        title: "Hizmetler",
        body:
          "Malzeme tedarigi, elektrik isleri, sihhi tesisat ve pompa sistemleri; takvime duyarlı teslim.",
        href: "/services",
      },
      {
        title: "Sektorler",
        body:
          "Konut, ticari, endustriyel, altyapi ve renovasyon projeleri icin destegimiz.",
        href: "/sectors",
      },
      {
        title: "Ekipman",
        body:
          "Insaat malzemeleri, elektrik sistemleri, sihhi tesisat/pompalar; sartnameye uygun ve dokumantasyonlu.",
        href: "/equipment",
      },
    ],
    featureStacks: [
      {
        overline: "Malzeme tedarigi ve lojistik",
        tag: "Insaat",
        summary:
          "Yapi ve ince is malzemeleri, baglanti elemanlari, sarf malzemeleri; zamaninda teslimat.",
        bullets: [
          "Cizim, metraj ve teslim fazlarina gore paketlenmis malzemeler.",
          "Saha hazirligina gore kademeli teslimatlar.",
        ],
      },
      {
        overline: "Elektrik isleri ve sistemleri",
        tag: "Elektrik",
        summary:
          "Pano, tablo, kanal/tepsi, kablo, sonlandirma; test ve devreye alma destegi.",
        bullets: [
          "Zayif akim ve LV dagitim; etiketleme ve guzergah netligi ile.",
          "Saha sartlarina gore temel test/devreye alma destegi.",
        ],
      },
      {
        overline: "Sihhi tesisat ve pompa sistemleri",
        tag: "MEP",
        summary:
          "Icme suyu, drenaj, vanalar, kollektorlere ek olarak hidrofor, transfer ve kurutma/dewatering pompalar.",
        bullets: [
          "Onayli malzemelere gore bina ve saha altyapilari.",
          "Kapsama gore devreye alma girdileri ve yedek parca stratejileri.",
        ],
      },
    ],
    whyOverline: "Neden Miramar",
    whyTitle: "Insaat ekipleri icin Miramar",
    whyBody:
      "Kapsam netligi, dokumantasyon duzeni ve takvime duyarlı teslimat icin tasarlandi.",
    whyCards: [
      {
        title: "Kapsam netligi",
        body: "BOQ-oncelikli yaklasim; acik alternatifler ve onaylarla.",
      },
      {
        title: "Dokumantasyon",
        body:
          "Gerekli oldugunda teknik dokumanlar, sertifikalar ve teslim evraklari.",
      },
      {
        title: "Takvime uygun teslim",
        body: "Saha hazirligina ve kilometre taslarina gore kademeli teslimatlar.",
      },
      {
        title: "Kalite ve guvenlik",
        body: "Saha kurallari ve proje sartlarina gore calisma yontemleri.",
      },
    ],
    hseTitle: "Uygunluk ve saha guvenligi",
    hseBody:
      "Miramar, malzemeler ve uygulamalari ilgili standartlar, proje sartnameleri ve saha guvenlik kurallariyla hizalar. Gerektiginde test, muayene ve temel teslim dokumantasyonunu koordine eder.",
  },
} as const;

export default function Home() {
  const { lang } = useLanguage();
  const c = HOME_COPY[lang];

  return (
    <div className="text-slate-50">
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#081427] via-[#0E172A] to-[#030712]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-[46px] bg-gradient-to-br from-[#B8202A]/80 via-[#b8202a]/40 to-transparent blur-[110px] opacity-90" />
          <div className="absolute -right-12 top-0 h-80 w-80 rounded-[52px] bg-gradient-to-br from-[#102A5C]/90 via-[#0f1f44]/70 to-[#050814] blur-[90px] opacity-95" />
          <div className="absolute left-12 bottom-0 h-64 w-64 -rotate-6 rounded-[38px] bg-gradient-to-tr from-white/10 via-transparent to-transparent blur-3xl opacity-50 animate-pulse" />
        </div>

        <section className="relative py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12 items-start">
            <div className="relative z-10 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                {c.badge}
              </p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {c.title}
              </h1>
              <p className="max-w-2xl text-sm text-slate-200/90 sm:text-base">
                {c.positioning}
              </p>
              <p className="max-w-3xl text-sm text-slate-200/90 sm:text-base">
                {c.body}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#B8202A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#B8202A]/35 transition hover:-translate-y-0.5 hover:bg-[#9c1b24]"
                >
                  {c.primaryCta}
                </Link>
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-300/70 hover:bg-white/10"
                >
                  {c.secondaryCta}
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.focusBlocks.map((item, idx) => (
                  <AnimatedCard
                    key={item.label}
                    float
                    className="h-full min-h-[160px] border border-slate-700/70 bg-white/5 px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-[11px] font-semibold text-slate-200">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-100 leading-relaxed">
                      {item.value}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 lg:mt-0 space-y-6">
              <AnimatedCard className="overflow-hidden">
                <InteractiveImage
                  src="/miramar-3d-hero.png"
                  alt="Miramar construction systems visual"
                  width={1024}
                  height={540}
                  className="w-full rounded-3xl object-cover"
                  containerClassName="w-full aspect-[16/9]"
                  priority
                />
              </AnimatedCard>
              <div className="space-y-4">
                {c.featureStacks.map((feature) => (
                  <AnimatedCard key={feature.overline} className="h-full p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        {feature.overline}
                      </p>
                      <span className="rounded-full bg-[#F6D365] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                        {feature.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{feature.summary}</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-200/90">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="border-b border-slate-900/60 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              {c.overviewOverline}
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">{c.overviewTitle}</h2>
            <p className="text-sm text-slate-300 sm:text-base leading-relaxed">{c.overviewBody}</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {c.overviewCards.map((item) => (
              <AnimatedCard key={item.title} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-3xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8202A]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-[#F6D365] transition group-hover:translate-x-1">
                      <span>{c.learnMore}</span>
                      <span aria-hidden="true">-&gt;</span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{item.body}</p>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/60 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              {c.whyOverline}
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">{c.whyTitle}</h2>
            <p className="text-sm text-slate-300 sm:text-base">{c.whyBody}</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {c.whyCards.map((item) => (
              <AnimatedCard key={item.title} className="h-full p-5">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">{item.body}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <AnimatedCard className="p-6 sm:p-8 border border-slate-800/70 bg-slate-900/70">
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
                HSE
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{c.hseTitle}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{c.hseBody}</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
