'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { CORE_POSITIONING } from "../../lib/constants";

const SERVICES_COPY = {
  en: {
    badge: "Services",
    heading: "From BOQ to delivered materials and completed site scope.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Engage Miramar for construction material supply and coordinated site services covering electrical, plumbing, and pumping systems—delivered with schedule awareness and clear documentation.",
    pillars: [
      {
        tag: "Pillar I",
        title: "Materials supply & procurement",
        bullets: [
          "Structural and finishing materials aligned to project specifications.",
          "Cable containment, conduits, trays, and accessories.",
          "Pipes, fittings, valves, sanitary and drainage materials.",
          "Delivery planning, staged shipments, and site coordination.",
        ],
        image: "/miramar-service-supply.png",
      },
      {
        tag: "Pillar II",
        title: "Electrical supply & installation",
        bullets: [
          "LV distribution: panels, breakers, protection, terminations.",
          "Cabling, containment, grounding, and basic testing support.",
          "Lighting materials and installation coordination (as scoped).",
          "Documentation for installed systems (as required).",
        ],
        image: "/miramar-3d-power.png",
      },
      {
        tag: "Pillar III",
        title: "Plumbing, pumps & site utilities",
        bullets: [
          "Domestic water, drainage, and building plumbing materials.",
          "Pump supply: booster, transfer, circulation, dewatering.",
          "Installation coordination and commissioning support (as scoped).",
          "Utility trenching coordination inputs (routes, quantities, sequencing).",
        ],
        image: "/miramar-3d-steel-piping.png",
      },
    ],
  },
  tr: {
    badge: "Hizmetler",
    heading: "BOQ'dan teslim edilmis malzemelere ve tamamlanmis saha kapsamlarina.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Miramar, insaat malzeme tedarigi ile elektrik, sihhi tesisat ve pompa sistemlerini kapsayan koordine saha hizmetlerini; takvime duyarlı ve net dokümantasyonla teslim eder.",
    pillars: [
      {
        tag: "Pillar I",
        title: "Malzeme tedarigi ve satin alma",
        bullets: [
          "Proje sartnamelerine uygun yapi ve ince is malzemeleri.",
          "Kablo tavası, kanal, boru ve aksesuarlar.",
          "Boru, baglanti elemanlari, vanalar, sıhhi ve drenaj malzemeleri.",
          "Teslimat planlama, kademeli sevkiyat ve saha koordinasyonu.",
        ],
        image: "/miramar-service-supply.png",
      },
      {
        tag: "Pillar II",
        title: "Elektrik tedarigi ve montaj",
        bullets: [
          "LV dagitim: pano, kesici, koruma, sonlandirma.",
          "Kablolama, kanal/tepsi, topraklama ve temel test destegi.",
          "Aydinlatma malzemeleri ve kapsam dahilinde montaj koordinasyonu.",
          "Gerekli durumlarda kurulu sistemler icin dokumantasyon.",
        ],
        image: "/miramar-3d-power.png",
      },
      {
        tag: "Pillar III",
        title: "Sihhi tesisat, pompalar ve saha altyapilari",
        bullets: [
          "Icme suyu, drenaj ve bina sihhi malzemeleri.",
          "Pompa tedariği: hidrofor, transfer, sirkulasyon, dewatering.",
          "Kapsama gore montaj koordinasyonu ve devreye alma destegi.",
          "Hendek/altyapi koordinasyon girdileri (guzergah, metraj, sira).",
        ],
        image: "/miramar-3d-steel-piping.png",
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
              containerClassName="h-36 w-full rounded-2xl"
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
