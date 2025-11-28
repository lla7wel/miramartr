'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const SERVICES_COPY = {
  en: {
    badge: "Services",
    heading: "From equipment definition to documented delivery.",
    lead:
      "Engage Miramar for compliant sourcing and lifecycle support tailored to regional private oil & gas, power, and industrial companies.",
    pillars: [
      { tag: "Pillar I", title: "Equipment definition & supply" },
      { tag: "Pillar II", title: "Documentation support" },
      { tag: "Pillar III", title: "Lifecycle & replacement support" },
    ],
  },
  tr: {
    badge: "Hizmetler",
    heading: "Ekipman tanımından teslimata kadar.",
    lead:
      "Miramar, bölgesel özel petrol ve gaz, enerji ve sanayi şirketleri için uygunluk gözeten tedarik ve yaşam döngüsü desteği sunar.",
    pillars: [
      { tag: "Sütun I", title: "Ekipman tanımı ve tedarik" },
      { tag: "Sütun II", title: "Dokümantasyon desteği" },
      { tag: "Sütun III", title: "Yaşam döngüsü ve yedek destek" },
    ],
  },
} as const;

const services = [
  {
    bullets: [
      "Oil & gas rotating equipment, valves, and process items classified to spec.",
      "Steel, piping, flanges, fittings, and structural packages.",
      "Electrical power: switchgear, switchboards, and motor control centers.",
      "Power and control cables with accessories for plant distribution.",
    ],
    image: "/miramar-service-supply.png",
  },
  {
    bullets: [
      "Coordinate basic manufacturer documentation (datasheets, manuals, and available test reports).",
      "Include manufacturer certificates with deliveries when requested.",
      "Keep documentation lean and aligned with what project teams actually need.",
    ],
    image: "/miramar-service-logistics.png",
  },
  {
    bullets: [
      "Spares and replacement strategies for critical lines.",
      "Equivalency checks when original models are obsolete.",
      "Support for upgrades, brownfield modifications, and tie-ins.",
      "Technical sourcing support to keep plants online.",
    ],
    image: "/miramar-service-lifecycle.png",
  },
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = SERVICES_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{t.badge}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={t.pillars[idx].title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/30"
          >
            <InteractiveImage
              src={service.image}
              alt={t.pillars[idx].title}
              width={320}
              height={200}
              className="object-cover"
              containerClassName="h-32 w-full"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8202A]">
              {t.pillars[idx].tag}
            </p>
            <h2 className="text-sm font-semibold text-white">{t.pillars[idx].title}</h2>
            <ul className="space-y-1.5 text-sm text-slate-200">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
