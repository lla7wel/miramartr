'use client';

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

export default function SectorsPage() {
  const { lang } = useLanguage();
  const t = SECTORS_COPY[lang];

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
          <AnimatedCard key={sector.title} className="flex h-full flex-col p-4">
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
