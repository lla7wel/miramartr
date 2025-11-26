'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const SERVICES_COPY = {
  en: {
    badge: "Services",
    heading: "From equipment definition to documented delivery.",
    lead:
      "Engage Miramar for compliant sourcing, project logistics with complete documentation, and lifecycle support tailored to institutional energy and industrial clients.",
    pillars: [
      { tag: "Pillar I", title: "Equipment definition & supply" },
      { tag: "Pillar II", title: "Project logistics & documentation" },
      { tag: "Pillar III", title: "Lifecycle & replacement support" },
    ],
  },
  tr: {
    badge: "Hizmetler",
    heading: "Ekipman tanımından belgeli teslimata kadar.",
    lead:
      "Miramar, kurumsal enerji ve sanayi müşterileri için uygunluk gözeten tedarik, eksiksiz dokümantasyonla lojistik ve yaşam döngüsü desteği sunar.",
    pillars: [
      { tag: "Sütun I", title: "Ekipman tanımı ve tedarik" },
      { tag: "Sütun II", title: "Proje lojistiği ve dokümantasyon" },
      { tag: "Sütun III", title: "Yaşam döngüsü ve yedek destek" },
    ],
  },
} as const;

const services = [
  {
    bullets: [
      "Oil & gas rotating equipment, valves, and process items classified to spec.",
      "Steel, piping, flanges, fittings, and structural packages.",
      "Electrical power: transformers, switchgear, UPS, storage.",
      "Protection & control: relays, SCADA, PLCs, I/O modules.",
    ],
    image: "/miramar-service-supply.png",
  },
  {
    bullets: [
      "Packing and tagging aligned to project BOMs and work packs.",
      "MTCs, test reports, and EN 10204 documentation sets.",
      "Third-party inspection (DNV, SGS, TUV or equivalent).",
      "Shipping, Incoterms, and customs coordination.",
    ],
    image: "/miramar-service-logistics.png",
  },
  {
    bullets: [
      "Spares and replacement strategies for critical lines.",
      "Equivalency checks when original models are obsolete.",
      "Support for upgrades, brownfield modifications, tie-ins.",
      "Coordination with local service providers when needed.",
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
