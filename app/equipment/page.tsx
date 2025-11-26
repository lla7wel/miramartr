'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const EQUIPMENT_COPY = {
  en: {
    badge: "Equipment & partners",
    heading: "Equipment families we support.",
    lead:
      "Miramar curates equipment across oil & gas, power, and heavy industry. Packages are classified, documented, and aligned with project requirements.",
    families: [
      "Oil & gas equipment",
      "Steel, piping & fabricated items",
      "Electrical power equipment",
      "Protection, control & safety",
    ],
    partnerRolesTitle: "Typical partner roles in a Miramar package",
    partnerSelectTitle: "How we choose and align partners",
  },
  tr: {
    badge: "Ekipman ve iş ortakları",
    heading: "Desteklediğimiz ekipman aileleri.",
    lead:
      "Miramar; petrol ve gaz, enerji ve ağır sanayide ekipmanları sınıflandırır ve projeye uygun dokümantasyonla teslim eder.",
    families: [
      "Petrol ve gaz ekipmanları",
      "Çelik, boru ve imalat ürünleri",
      "Elektrik enerji ekipmanları",
      "Koruma, kontrol ve güvenlik",
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
      "MV/LV transformers and switchgear.",
      "MCCs, drives, and motor starters.",
      "Energy storage: UPS batteries and backup systems.",
      "Surge protection and grounding systems.",
    ],
  },
  {
    image: "/miramar-3d-safety-control.png",
    bullets: [
      "Relays, SCADA, PLCs, and I/O modules.",
      "Fire-fighting skids, detection, and alarm systems.",
      "Gas detection and safety instrumentation.",
      "Control valves, field instruments, and junction boxes.",
    ],
  },
];

const partnerRoles = [
  "Steel mills and pipe manufacturers for line pipe and structures.",
  "OEMs for rotating equipment, valves, electrical, and control.",
  "Fabricators for spools, skids, and simple assemblies.",
  "Testing laboratories with ISO/CNAS accreditation.",
  "Third-party inspection firms (e.g., DNV, SGS, TUV equivalents).",
];

const partnerSelection = [
  "Fit with required standards (API, ISO, IEC, and project specs).",
  "Ability to support documentation and after-sales obligations.",
  "Experience in oil & gas, power, and critical infrastructure.",
  "Clarity on roles between mills, OEMs, agents, and local service.",
];

export default function EquipmentPage() {
  const { lang } = useLanguage();
  const t = EQUIPMENT_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 space-y-10 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
          {t.badge}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {equipmentFamilies.map((family, idx) => (
          <div
            key={t.families[idx]}
            className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/30"
          >
            <InteractiveImage
              src={family.image}
              alt={t.families[idx]}
              width={400}
              height={260}
              className="object-cover"
              containerClassName="mb-3 h-40 w-full"
            />
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
            Our role is to design the supply chain so that each piece of equipment is documented,
            traceable, and aligned with approved vendor lists and specifications.
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
            Detailed partner information and references can be provided as part of a formal
            capability or prequalification package when required by your procedures.
          </p>
        </div>
      </section>
    </div>
  );
}
