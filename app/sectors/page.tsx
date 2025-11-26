'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const SECTORS_COPY = {
  en: {
    badge: "Sectors",
    heading: "Where Miramar operates.",
    lead:
      "Reliability, uptime, and compliance drive our work. We tailor equipment packages and documentation to the demands of each sector.",
    sectors: [
      "Upstream oil & gas",
      "Midstream & downstream",
      "Power generation & utilities",
      "Industrial plants",
      "Infrastructure & logistics",
      "Government & programs",
    ],
  },
  tr: {
    badge: "Sektörler",
    heading: "Miramar’ın faaliyet gösterdiği alanlar.",
    lead:
      "İşimizde güvenilirlik, çalışma süresi ve uygunluk esastır. Her sektörün gereksinimlerine göre ekipman paketlerini ve dokümantasyonu şekillendiriyoruz.",
    sectors: [
      "Yukarı akış petrol ve gaz",
      "Orta ve aşağı akış",
      "Enerji üretimi ve kamu hizmetleri",
      "Endüstriyel tesisler",
      "Altyapı ve lojistik",
      "Kamu projeleri ve programlar",
    ],
  },
} as const;

const sectorsData = [
  {
    body: "Field development, gathering systems, surface facilities, and early production infrastructure.",
    image: "/miramar-sector-upstream.png",
  },
  {
    body: "Pipelines, terminals, storage farms, and refinery or petrochemical units.",
    image: "/miramar-sector-midstream.png",
  },
  {
    body: "Thermal and gas-fired plants, substations, grid support, and backup systems.",
    image: "/miramar-sector-power.png",
  },
  {
    body: "Steel, cement, process plants, and other energy-intensive industrial sites.",
    image: "/miramar-sector-industrial.png",
  },
  {
    body: "Ports, logistics hubs, storage terminals, and fuel distribution networks.",
    image: "/miramar-sector-infrastructure.png",
  },
  {
    body: "Projects sponsored by ministries, NOCs, and public entities with high documentation requirements.",
    image: "/miramar-sector-government.png",
  },
];

export default function SectorsPage() {
  const { lang } = useLanguage();
  const t = SECTORS_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{t.badge}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sectorsData.map((sector, idx) => (
          <div
            key={t.sectors[idx]}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/30"
          >
            <InteractiveImage
              src={sector.image}
              alt={t.sectors[idx]}
              width={320}
              height={160}
              className="object-cover"
              containerClassName="mb-3 h-28 w-full"
            />
            <h2 className="text-[1.05rem] font-semibold text-white">{t.sectors[idx]}</h2>
            <p className="text-sm text-slate-200">{sector.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
