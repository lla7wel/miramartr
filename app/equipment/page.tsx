'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";

const EQUIPMENT_COPY = {
  en: {
    badge: "Equipment & partners",
    heading: "Equipment families we support.",
    lead:
      "Miramar supplies heavy equipment across oil & gas, power, and heavy industry. Packages align to project specifications with basic manufacturer documentation available on request.",
    families: [
      "Oil & gas mechanical equipment",
      "Steel, piping & fabricated items",
      "Power & electrification",
    ],
    partnerRolesTitle: "Typical partner roles in a Miramar package",
    partnerSelectTitle: "How we choose and align partners",
  },
  tr: {
    badge: "Ekipman ve iş ortakları",
    heading: "Desteklediğimiz ekipman aileleri.",
    lead:
      "Miramar; petrol ve gaz, enerji ve ağır sanayide ekipmanları projeye uygun şekilde tedarik eder. Gerektiğinde temel üretici dokümantasyonu ile teslim eder.",
    families: [
      "Petrol ve gaz mekanik ekipmanları",
      "Çelik, boru ve imalat ürünleri",
      "Güç ve elektrifikasyon",
    ],
    partnerRolesTitle: "Miramar paketindeki tipik ortak rolleri",
    partnerSelectTitle: "Ortakları nasıl seçiyor ve hizalıyoruz",
  },
} as const;

const equipmentFamilies = [
  {
    image: "/miramar-3d-oil-gas.png",
    bullets: [
      "Rotating equipment: API 610 pumps, compressors, turbines.",
      "Valves: gate, ball, control, safety, and choke valves.",
      "Process equipment: exchangers, vessels, filters via qualified OEMs.",
      "Metering, loading, and terminal equipment when required.",
    ],
  },
  {
    image: "/miramar-3d-steel-piping.png",
    bullets: [
      "Seamless and welded line pipe in carbon and alloy steel.",
      "Butt-weld fittings, flanges, gaskets, and bolting sets.",
      "Steel plate, sheet, and structural profiles.",
      "Prefabricated spools and simple shop-fabricated items.",
    ],
  },
  {
    image: "/miramar-3d-power.png",
    bullets: [
      "Switchgear and switchboards for industrial power distribution.",
      "Motor control centers (MCCs), drives, and starters.",
      "Power and control cables with terminations and accessories.",
      "Bus ducts and panelboards for plant electrification.",
    ],
  },
];

const partnerRoles = [
  "Steel mills and pipe manufacturers for line pipe and structures.",
  "OEMs for rotating equipment, valves, electrical equipment.",
  "Fabricators for spools, skids, and simple assemblies.",
];

const partnerSelection = [
  "Fit with required standards (API, ISO, IEC, and project specs).",
  "Ability to meet project specifications and communicate clearly.",
  "Experience in oil & gas, power, and critical infrastructure.",
  "Clarity on roles between mills, OEMs, agents, and on-site teams.",
];

export default function EquipmentPage() {
  const { lang } = useLanguage();
  const t = EQUIPMENT_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 space-y-10 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
          {t.badge}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <section className="grid gap-8 lg:grid-cols-3">
        {equipmentFamilies.map((family, idx) => (
          <AnimatedCard key={t.families[idx]} className="flex h-full flex-col p-5">
            <InteractiveImage
              src={family.image}
              alt={t.families[idx]}
              width={400}
              height={260}
              className="w-full max-h-56 rounded-3xl object-cover"
              containerClassName="mb-3 h-48 w-full"
            />
            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-sm font-semibold text-white">{t.families[idx]}</h2>
              <ul className="space-y-1.5 text-sm text-slate-200">
                {family.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-200 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">{t.partnerRolesTitle}</h2>
          <ul className="space-y-1.5 text-sm text-slate-200">
            {partnerRoles.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-1 text-sm text-slate-200">
            Our role is to source heavy equipment from vetted manufacturers and align deliveries with your technical specifications.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-200 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">{t.partnerSelectTitle}</h2>
          <ul className="space-y-1.5 text-sm text-slate-200">
            {partnerSelection.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-1 text-sm text-slate-200">
            Detailed partner information can be shared as part of capability or prequalification material when requested.
          </p>
        </div>
      </section>
    </div>
  );
}
