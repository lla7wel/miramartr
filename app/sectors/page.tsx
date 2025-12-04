'use client';

import { motion, useReducedMotion } from "framer-motion";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { CORE_POSITIONING } from "../../lib/constants";

const SECTORS_COPY = {
  en: {
    badge: "Sectors",
    heading: "Where Miramar operates.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Reliability, uptime, and technical fit drive our work. We tailor heavy equipment supply to the demands of each sector.",
    sectors: [
      {
        title: "Upstream oil & gas",
        body: "Field development, gathering systems, surface facilities, and early production infrastructure.",
        image: "/miramar-sector-upstream.png",
      },
      {
        title: "Midstream & downstream",
        body: "Pipelines, terminals, storage farms, and refinery or petrochemical units.",
        image: "/miramar-sector-midstream.png",
      },
      {
        title: "Power generation & utilities",
        body: "Thermal and gas-fired plants, substations, grid support, and backup systems.",
        image: "/miramar-sector-power.png",
      },
      {
        title: "Industrial plants",
        body: "Steel, cement, process plants, and other energy-intensive industrial sites.",
        image: "/miramar-sector-industrial.png",
      },
      {
        title: "Infrastructure & logistics",
        body: "Ports, logistics hubs, storage terminals, and fuel distribution networks.",
        image: "/miramar-sector-infrastructure.png",
      },
    ],
    complianceTitle: "Compliance alignment",
    complianceBody:
      "Project documentation, QA/QC packs, and inspection protocols are aligned with each sector's expectations.",
  },
  tr: {
    badge: "Sectors",
    heading: "Where Miramar operates.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Reliability, uptime, and technical fit drive our work. We tailor heavy equipment supply to the demands of each sector.",
    sectors: [
      {
        title: "Upstream oil & gas",
        body: "Field development, gathering systems, surface facilities, and early production infrastructure.",
        image: "/miramar-sector-upstream.png",
      },
      {
        title: "Midstream & downstream",
        body: "Pipelines, terminals, storage farms, and refinery or petrochemical units.",
        image: "/miramar-sector-midstream.png",
      },
      {
        title: "Power generation & utilities",
        body: "Thermal and gas-fired plants, substations, grid support, and backup systems.",
        image: "/miramar-sector-power.png",
      },
      {
        title: "Industrial plants",
        body: "Steel, cement, process plants, and other energy-intensive industrial sites.",
        image: "/miramar-sector-industrial.png",
      },
      {
        title: "Infrastructure & logistics",
        body: "Ports, logistics hubs, storage terminals, and fuel distribution networks.",
        image: "/miramar-sector-infrastructure.png",
      },
    ],
    complianceTitle: "Compliance alignment",
    complianceBody:
      "Project documentation, QA/QC packs, and inspection protocols are aligned with each sector's expectations.",
  },
} as const;

const FLOW_STEPS = {
  en: [
    { title: "Define scope", body: "Clarify service, conditions, and documentation expectations." },
    { title: "Match equipment", body: "Align mills and OEMs to specifications and inspection plans." },
    { title: "Documentation & QA/QC", body: "Coordinate data books, certificates, and inspection records for handover." },
    { title: "Delivery & lifecycle", body: "Schedule-aware delivery with replacement and upgrade support." },
  ],
  tr: [
    { title: "Kapsami belirle", body: "Hizmeti, sartlari ve dokumantasyon beklentilerini netlestir." },
    { title: "Ekipmani eslestir", body: "Haddehane ve OEM'leri sartnameler ve muayene planlariyla hizala." },
    { title: "Dokumantasyon ve QA/QC", body: "Teslim icin data book'lar, sertifikalar ve muayene kayitlarini koordine et." },
    { title: "Teslimat ve yasam dongusu", body: "Takvime duyarlı teslimat, yedek ve modernizasyon destegi sagla." },
  ],
} as const;

export default function SectorsPage() {
  const { lang } = useLanguage();
  const t = SECTORS_COPY[lang];
  const steps = FLOW_STEPS[lang];
  const stepLabel = lang === "tr" ? "Adim" : "Step";
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{t.badge}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.positioning}</p>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {t.sectors.map((sector) => (
          <AnimatedCard key={sector.title} className="flex h-full flex-col p-4" float>
            <InteractiveImage
              src={sector.image}
              alt={sector.title}
              width={320}
              height={160}
              className="w-full rounded-3xl object-cover"
              containerClassName="mb-3 h-40 w-full"
            />
            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-[1.05rem] font-semibold text-white">{sector.title}</h2>
              <p className="text-sm text-slate-200">{sector.body}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Flow</p>
          <h2 className="text-xl font-semibold text-white">Project pipeline</h2>
          <p className="text-sm text-slate-200">
            How Miramar moves scopes from definition through delivery with QA/QC discipline.
          </p>
        </div>

        <div className="relative mt-6 hidden md:block">
          <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-[#B8202A] via-white/25 to-[#102A5C] blur-[0.5px]" />
          <motion.div
            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#B8202A] shadow-[0_0_18px_rgba(184,32,42,0.45)]"
            animate={reduceMotion ? undefined : { x: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ translateZ: 0 }}
          />
          <div className="relative grid grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <AnimatedCard key={step.title} float className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {stepLabel} {idx + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-slate-200">{step.body}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div className="relative mt-4 md:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#B8202A] via-white/25 to-[#102A5C] blur-[0.5px]" />
          <motion.div
            className="absolute left-[11px] h-4 w-4 rounded-full bg-[#B8202A] shadow-[0_0_18px_rgba(184,32,42,0.45)]"
            animate={reduceMotion ? undefined : { y: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ translateZ: 0 }}
          />
          <div className="space-y-4 pl-8">
            {steps.map((step, idx) => (
              <AnimatedCard key={step.title} float className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {stepLabel} {idx + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-slate-200">{step.body}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <AnimatedCard className="mt-8 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-white">{t.complianceTitle}</h2>
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            QA/QC
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-200">{t.complianceBody}</p>
      </AnimatedCard>
    </div>
  );
}

