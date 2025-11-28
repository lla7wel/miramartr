'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";

const SECTORS_COPY = {
  en: {
    badge: "Sectors",
    heading: "Where Miramar operates.",
    lead:
      "Reliability, uptime, and technical fit drive our work. We tailor heavy equipment supply to the demands of each sector.",
    sectors: [
      "Upstream oil & gas",
      "Midstream & downstream",
      "Power generation & utilities",
      "Industrial plants",
      "Infrastructure & logistics",
    ],
  },
  tr: {
    badge: "Sektörler",
    heading: "Miramar'ın faaliyet gösterdiği alanlar.",
    lead:
      "Güvenilirlik, çalışma süresi ve teknik uyum işe yön verir. Her sektörün gereksinimine göre ağır ekipman tedarikini şekillendiriyoruz.",
    sectors: [
      "Yukarı akış petrol ve gaz",
      "Orta ve aşağı akış",
      "Enerji üretimi ve kamu hizmetleri",
      "Endüstriyel tesisler",
      "Altyapı ve lojistik",
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
];

export default function SectorsPage() {
  const { lang } = useLanguage();
  const t = SECTORS_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{t.badge}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sectorsData.map((sector, idx) => (
          <AnimatedCard key={t.sectors[idx]} className="flex h-full flex-col p-4">
            <InteractiveImage
              src={sector.image}
              alt={t.sectors[idx]}
              width={320}
              height={160}
              className="w-full max-h-52 rounded-3xl object-cover"
              containerClassName="mb-3 h-40 w-full"
            />
            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-[1.05rem] font-semibold text-white">{t.sectors[idx]}</h2>
              <p className="text-sm text-slate-200">{sector.body}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
