'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { CORE_POSITIONING } from "../../lib/constants";

const SERVICES_COPY = {
  en: {
    badge: "Services",
    heading: "From equipment definition to documented delivery.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Engage Miramar for specification-aligned sourcing and lifecycle support tailored to regional private oil & gas, power, and industrial companies.",
    pillars: [
      {
        tag: "Pillar I",
        title: "Equipment definition & supply",
        bullets: [
          "Oil & gas rotating equipment, valves, and process items classified to specification.",
          "Steel, piping, flanges, fittings, and structural packages.",
          "Electrical power: switchgear, switchboards, and motor control centers.",
          "Power and control cables with accessories for plant distribution.",
        ],
        image: "/miramar-service-supply.png",
      },
      {
        tag: "Pillar II",
        title: "Documentation and QA/QC",
        bullets: [
          "Coordinate manufacturer data books, manuals, and available test reports.",
          "Include manufacturer certificates, EN 10204 material certificates, and QA/QC packs when required.",
          "Align documentation structure with client expectations for handover.",
        ],
        image: "/miramar-service-logistics.png",
      },
      {
        tag: "Pillar III",
        title: "Lifecycle & replacement support",
        bullets: [
          "Spares and replacement strategies for critical lines.",
          "Equivalency checks when original models are obsolete.",
          "Support for upgrades, brownfield modifications, and tie-ins.",
          "Technical sourcing support to keep plants online.",
        ],
        image: "/miramar-service-lifecycle.png",
      },
    ],
  },
  tr: {
    badge: "Services",
    heading: "From equipment definition to documented delivery.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Engage Miramar for specification-aligned sourcing and lifecycle support tailored to regional private oil & gas, power, and industrial companies.",
    pillars: [
      {
        tag: "Pillar I",
        title: "Equipment definition & supply",
        bullets: [
          "Oil & gas rotating equipment, valves, and process items classified to specification.",
          "Steel, piping, flanges, fittings, and structural packages.",
          "Electrical power: switchgear, switchboards, and motor control centers.",
          "Power and control cables with accessories for plant distribution.",
        ],
        image: "/miramar-service-supply.png",
      },
      {
        tag: "Pillar II",
        title: "Documentation and QA/QC",
        bullets: [
          "Coordinate manufacturer data books, manuals, and available test reports.",
          "Include manufacturer certificates, EN 10204 material certificates, and QA/QC packs when required.",
          "Align documentation structure with client expectations for handover.",
        ],
        image: "/miramar-service-logistics.png",
      },
      {
        tag: "Pillar III",
        title: "Lifecycle & replacement support",
        bullets: [
          "Spares and replacement strategies for critical lines.",
          "Equivalency checks when original models are obsolete.",
          "Support for upgrades, brownfield modifications, and tie-ins.",
          "Technical sourcing support to keep plants online.",
        ],
        image: "/miramar-service-lifecycle.png",
      },
    ],
  },
} as const;

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = SERVICES_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{t.badge}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.positioning}</p>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t.pillars.map((pillar) => (
          <AnimatedCard key={pillar.title} className="flex h-full flex-col gap-3 p-5">
            <InteractiveImage
              src={pillar.image}
              alt={pillar.title}
              width={320}
              height={200}
              className="object-cover"
              containerClassName="h-32 w-full rounded-2xl"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8202A]">
              {pillar.tag}
            </p>
            <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
            <ul className="space-y-1.5 text-sm text-slate-200">
              {pillar.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
