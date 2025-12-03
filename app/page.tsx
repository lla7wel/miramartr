'use client';

import Link from "next/link";
import InteractiveImage from "../components/InteractiveImage";
import { useLanguage } from "../components/LanguageProvider";
import AnimatedCard from "../components/AnimatedCard";
import { CORE_POSITIONING } from "../lib/constants";

const HOME_COPY = {
  en: {
    badge: "Istanbul | Energy & Industrial Equipment",
    title: "Project-ready supply for oil & gas, power, and heavy industry.",
    positioning: CORE_POSITIONING.en,
    body:
      "We plan equipment packages to client specifications, align documentation early, and coordinate with mills, OEMs, and inspectors to de-risk delivery for regional energy and industrial projects.",
    primaryCta: "Share an RFQ / package list",
    secondaryCta: "View equipment coverage",
    focusBlocks: [
      { label: "Focus", value: "Energy, oil & gas, heavy industry" },
      { label: "Clients", value: "Private industrial groups, EPCs, utilities" },
      {
        label: "Deliverables",
        value:
          "Heavy equipment supply with manufacturer documentation and QA/QC packs when required.",
      },
    ],
    overviewOverline: "Overview",
    overviewTitle: "Miramar at a glance",
    overviewBody:
      "Istanbul-based institutional supplier supporting oil & gas, power, and industrial projects with traceable heavy equipment from vetted mills and OEMs.",
    learnMore: "Learn more",
    overviewCards: [
      {
        title: "About Miramar",
        body:
          "Institutional partner for private oil & gas, power, and industrial companies based in Istanbul.",
        href: "/about",
      },
      {
        title: "Services",
        body:
          "Equipment definition, documentation and QA/QC coordination, lifecycle and replacement support.",
        href: "/services",
      },
      {
        title: "Sectors",
        body:
          "Upstream, midstream, power generation, industrial plants, and infrastructure clients.",
        href: "/sectors",
      },
      {
        title: "Equipment",
        body:
          "Rotating equipment, valves, piping and steel, and electrification packages aligned to client specs.",
        href: "/equipment",
      },
    ],
    featureStacks: [
      {
        overline: "Oil & gas mechanical equipment",
        tag: "API / ISO",
        summary: "Spec-compliant rotating equipment and valves for energy service.",
        bullets: [
          "API/ISO pumps, compressors, and turbines sized for upstream and midstream services.",
          "Gate, ball, control, and safety valves aligned to pressure class, media, and service.",
        ],
      },
      {
        overline: "Steel & piping",
        tag: "Mills",
        summary: "Steel-based items for pipelines and industrial projects.",
        bullets: [
          "Line pipe, butt-weld fittings, flanges, gaskets, and bolting sets.",
          "Structural steel and plate for industrial projects.",
        ],
      },
      {
        overline: "Power & electrification",
        tag: "Power",
        summary: "Distribution equipment for industrial loads.",
        bullets: [
          "Switchgear, switchboards, and motor control centers for industrial loads.",
          "Power and control cables with accessories and terminations.",
        ],
      },
    ],
    whyOverline: "Why Miramar",
    whyTitle: "Why Miramar for institutional projects",
    whyBody:
      "Built for clients that need specification alignment, documentation discipline, and reliable delivery.",
    whyCards: [
      {
        title: "Technical compliance",
        body: "API / ISO / IEC-aligned products and documentation where required.",
      },
      {
        title: "Documentation quality",
        body:
          "Manufacturer data books, test certificates, EN 10204 MTCs, and QA/QC packs prepared for client handover.",
      },
      {
        title: "Transparent supply chain",
        body: "Traceability from mill or OEM to site, with clear documentation at each step.",
      },
      {
        title: "On-time delivery",
        body: "Planning around project schedules, inspection windows, and site constraints.",
      },
    ],
    hseTitle: "HSE & compliance",
    hseBody:
      "Miramar aligns equipment selection and documentation with client HSE and QA/QC frameworks. Where required, we coordinate third-party inspection (DNV, SGS, TÜV or equivalent) and deliver the associated test reports and certificates as part of the project handover package.",
  },
  tr: {
    badge: "Istanbul | Energy & Industrial Equipment",
    title: "Project-ready supply for oil & gas, power, and heavy industry.",
    positioning: CORE_POSITIONING.tr,
    body:
      "We plan equipment packages to client specifications, align documentation early, and coordinate with mills, OEMs, and inspectors to de-risk delivery for regional energy and industrial projects.",
    primaryCta: "Share an RFQ / package list",
    secondaryCta: "View equipment coverage",
    focusBlocks: [
      { label: "Focus", value: "Energy, oil & gas, heavy industry" },
      { label: "Clients", value: "Private industrial groups, EPCs, utilities" },
      {
        label: "Deliverables",
        value:
          "Heavy equipment supply with manufacturer documentation and QA/QC packs when required.",
      },
    ],
    overviewOverline: "Overview",
    overviewTitle: "Miramar at a glance",
    overviewBody:
      "Istanbul-based institutional supplier supporting oil & gas, power, and industrial projects with traceable heavy equipment from vetted mills and OEMs.",
    learnMore: "Learn more",
    overviewCards: [
      {
        title: "About Miramar",
        body:
          "Institutional partner for private oil & gas, power, and industrial companies based in Istanbul.",
        href: "/about",
      },
      {
        title: "Services",
        body:
          "Equipment definition, documentation and QA/QC coordination, lifecycle and replacement support.",
        href: "/services",
      },
      {
        title: "Sectors",
        body:
          "Upstream, midstream, power generation, industrial plants, and infrastructure clients.",
        href: "/sectors",
      },
      {
        title: "Equipment",
        body:
          "Rotating equipment, valves, piping and steel, and electrification packages aligned to client specs.",
        href: "/equipment",
      },
    ],
    featureStacks: [
      {
        overline: "Oil & gas mechanical equipment",
        tag: "API / ISO",
        summary: "Spec-compliant rotating equipment and valves for energy service.",
        bullets: [
          "API/ISO pumps, compressors, and turbines sized for upstream and midstream services.",
          "Gate, ball, control, and safety valves aligned to pressure class, media, and service.",
        ],
      },
      {
        overline: "Steel & piping",
        tag: "Mills",
        summary: "Steel-based items for pipelines and industrial projects.",
        bullets: [
          "Line pipe, butt-weld fittings, flanges, gaskets, and bolting sets.",
          "Structural steel and plate for industrial projects.",
        ],
      },
      {
        overline: "Power & electrification",
        tag: "Power",
        summary: "Distribution equipment for industrial loads.",
        bullets: [
          "Switchgear, switchboards, and motor control centers for industrial loads.",
          "Power and control cables with accessories and terminations.",
        ],
      },
    ],
    whyOverline: "Why Miramar",
    whyTitle: "Why Miramar for institutional projects",
    whyBody:
      "Built for clients that need specification alignment, documentation discipline, and reliable delivery.",
    whyCards: [
      {
        title: "Technical compliance",
        body: "API / ISO / IEC-aligned products and documentation where required.",
      },
      {
        title: "Documentation quality",
        body:
          "Manufacturer data books, test certificates, EN 10204 MTCs, and QA/QC packs prepared for client handover.",
      },
      {
        title: "Transparent supply chain",
        body: "Traceability from mill or OEM to site, with clear documentation at each step.",
      },
      {
        title: "On-time delivery",
        body: "Planning around project schedules, inspection windows, and site constraints.",
      },
    ],
    hseTitle: "HSE & compliance",
    hseBody:
      "Miramar aligns equipment selection and documentation with client HSE and QA/QC frameworks. Where required, we coordinate third-party inspection (DNV, SGS, TÜV or equivalent) and deliver the associated test reports and certificates as part of the project handover package.",
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
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.focusBlocks.map((item, idx) => (
                  <AnimatedCard
                    key={item.label}
                    className="h-full min-h-[150px] border border-slate-700/70 bg-white/5 px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-[11px] font-semibold text-slate-200">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-100">{item.value}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 lg:mt-0 space-y-6">
              <AnimatedCard className="overflow-hidden">
                <InteractiveImage
                  src="/miramar-3d-hero.png"
                  alt="Miramar industrial 3D visual"
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
                    <p className="mt-3 text-sm font-semibold text-white">
                      {feature.summary}
                    </p>
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
            <p className="text-sm text-slate-300 sm:text-base">{c.overviewBody}</p>
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
                <p className="mt-2 text-sm text-slate-200">{item.body}</p>
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
                <p className="text-sm text-slate-200">{c.hseBody}</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
