'use client';

import { motion, useReducedMotion } from "framer-motion";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";

const EQUIPMENT_COPY = {
  en: {
    badge: "Equipment & partners",
    heading: "Equipment families we support.",
    lead:
      "Miramar supplies heavy equipment across oil & gas, power, and heavy industry. Packages align to project specifications with manufacturer documentation and QA/QC deliverables coordinated as required.",
    families: [
      {
        name: "Oil & gas mechanical equipment",
        image: "/miramar-3d-oil-gas.png",
        bullets: [
          "Rotating equipment: API 610 pumps, compressors, turbines.",
          "Valves: gate, ball, control, safety, and choke valves.",
          "Process equipment: exchangers, vessels, filters via qualified OEMs.",
          "Metering, loading, and terminal equipment when required.",
        ],
      },
      {
        name: "Steel, piping & fabricated items",
        image: "/miramar-3d-steel-piping.png",
        bullets: [
          "Seamless and welded line pipe in carbon and alloy steel.",
          "Butt-weld fittings, flanges, gaskets, and bolting sets.",
          "Steel plate, sheet, and structural profiles.",
          "Prefabricated spools and simple shop-fabricated items.",
        ],
      },
      {
        name: "Power & electrification",
        image: "/miramar-3d-power.png",
        bullets: [
          "Switchgear and switchboards for industrial power distribution.",
          "Motor control centers (MCCs), drives, and starters.",
          "Power and control cables with terminations and accessories.",
          "Bus ducts and panelboards for plant electrification.",
        ],
      },
    ],
    partnerRolesTitle: "Typical partner roles in a Miramar package",
    partnerSelectTitle: "How we choose and align partners",
    partnerRoles: [
      "Steel mills and pipe manufacturers for line pipe and structures.",
      "OEMs for rotating equipment, valves, electrical equipment.",
      "Fabricators for spools, skids, and simple assemblies.",
    ],
    partnerSelection: [
      "Fit with required standards (API, ISO, IEC, and project specs).",
      "Ability to meet project specifications and communicate clearly.",
      "Experience in oil & gas, power, and critical infrastructure.",
      "Clarity on roles between mills, OEMs, agents, and on-site teams.",
    ],
    catalogTitle: "Key equipment families by category",
    catalogIntro:
      "Structured view of the core categories we supply for energy, oil & gas, and heavy industrial projects.",
    catalog: [
      {
        title: "Rotating Equipment",
        description: "API/ISO compliant rotating equipment for process and utility service.",
        items: "API 610 pumps, compressors, blowers, gearboxes, turbines",
        priority: "Critical",
      },
      {
        title: "Valves & Flow Control",
        description: "Valves and actuators sized to pressure class, media, and control philosophy.",
        items: "Gate, globe, ball, check valves, control valves, actuators",
      },
      {
        title: "Static Equipment",
        description: "Pressure-retaining equipment for midstream and plant applications.",
        items: "Pressure vessels, tanks, heat exchangers, filters, strainers",
      },
      {
        title: "Instrumentation & Controls",
        description: "Measurement and control devices tied to client DCS/PLC standards.",
        items: "Transmitters, gauges, analyzers, control valves, metering skids",
      },
      {
        title: "Electrical Power & Distribution",
        description: "Power distribution equipment for industrial loads and utilities.",
        items: "Transformers, switchgear, MCCs, drives, bus ducts, industrial cabling",
      },
      {
        title: "Piping & Fittings",
        description: "Piping components with material traceability and certification.",
        items: "Pipes, flanges, fittings, gaskets, supports, bolting",
      },
    ],
  },
  tr: {
    badge: "Equipment & partners",
    heading: "Equipment families we support.",
    lead:
      "Miramar supplies heavy equipment across oil & gas, power, and heavy industry. Packages align to project specifications with manufacturer documentation and QA/QC deliverables coordinated as required.",
    families: [
      {
        name: "Oil & gas mechanical equipment",
        image: "/miramar-3d-oil-gas.png",
        bullets: [
          "Rotating equipment: API 610 pumps, compressors, turbines.",
          "Valves: gate, ball, control, safety, and choke valves.",
          "Process equipment: exchangers, vessels, filters via qualified OEMs.",
          "Metering, loading, and terminal equipment when required.",
        ],
      },
      {
        name: "Steel, piping & fabricated items",
        image: "/miramar-3d-steel-piping.png",
        bullets: [
          "Seamless and welded line pipe in carbon and alloy steel.",
          "Butt-weld fittings, flanges, gaskets, and bolting sets.",
          "Steel plate, sheet, and structural profiles.",
          "Prefabricated spools and simple shop-fabricated items.",
        ],
      },
      {
        name: "Power & electrification",
        image: "/miramar-3d-power.png",
        bullets: [
          "Switchgear and switchboards for industrial power distribution.",
          "Motor control centers (MCCs), drives, and starters.",
          "Power and control cables with terminations and accessories.",
          "Bus ducts and panelboards for plant electrification.",
        ],
      },
    ],
    partnerRolesTitle: "Typical partner roles in a Miramar package",
    partnerSelectTitle: "How we choose and align partners",
    partnerRoles: [
      "Steel mills and pipe manufacturers for line pipe and structures.",
      "OEMs for rotating equipment, valves, electrical equipment.",
      "Fabricators for spools, skids, and simple assemblies.",
    ],
    partnerSelection: [
      "Fit with required standards (API, ISO, IEC, and project specs).",
      "Ability to meet project specifications and communicate clearly.",
      "Experience in oil & gas, power, and critical infrastructure.",
      "Clarity on roles between mills, OEMs, agents, and on-site teams.",
    ],
    catalogTitle: "Key equipment families by category",
    catalogIntro:
      "Structured view of the core categories we supply for energy, oil & gas, and heavy industrial projects.",
    catalog: [
      {
        title: "Rotating Equipment",
        description: "API/ISO compliant rotating equipment for process and utility service.",
        items: "API 610 pumps, compressors, blowers, gearboxes, turbines",
        priority: "Critical",
      },
      {
        title: "Valves & Flow Control",
        description: "Valves and actuators sized to pressure class, media, and control philosophy.",
        items: "Gate, globe, ball, check valves, control valves, actuators",
      },
      {
        title: "Static Equipment",
        description: "Pressure-retaining equipment for midstream and plant applications.",
        items: "Pressure vessels, tanks, heat exchangers, filters, strainers",
      },
      {
        title: "Instrumentation & Controls",
        description: "Measurement and control devices tied to client DCS/PLC standards.",
        items: "Transmitters, gauges, analyzers, control valves, metering skids",
      },
      {
        title: "Electrical Power & Distribution",
        description: "Power distribution equipment for industrial loads and utilities.",
        items: "Transformers, switchgear, MCCs, drives, bus ducts, industrial cabling",
      },
      {
        title: "Piping & Fittings",
        description: "Piping components with material traceability and certification.",
        items: "Pipes, flanges, fittings, gaskets, supports, bolting",
      },
    ],
  },
} as const;

export default function EquipmentPage() {
  const { lang } = useLanguage();
  const t = EQUIPMENT_COPY[lang];
  const reduceMotion = useReducedMotion();
  const familyOffsets = ["lg:-translate-y-3", "lg:translate-y-2", "lg:-translate-y-1"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 space-y-10 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
          {t.badge}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">{t.lead}</p>
      </div>

      <section className="relative">
        <motion.div
          className="pointer-events-none absolute inset-0 m-auto h-[640px] w-[640px] max-w-[90vw] rounded-full border border-white/5 blur-[0.5px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [0, 360],
                }
          }
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 m-auto h-[520px] w-[520px] max-w-[80vw] rounded-full border border-[#B8202A]/25"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [360, 0],
                  x: [0, 6, -4, 0],
                  y: [0, -6, 4, 0],
                }
          }
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {t.families.map((family, idx) => (
            <AnimatedCard
              key={family.name}
              float
              className={`flex h-full flex-col p-5 ${familyOffsets[idx % familyOffsets.length]}`}
            >
              <InteractiveImage
                src={family.image}
                alt={family.name}
                width={400}
                height={260}
                className="w-full rounded-3xl object-cover"
                containerClassName="mb-3 h-48 w-full"
              />
              <div className="flex flex-1 flex-col gap-3">
                <h2 className="text-sm font-semibold text-white">{family.name}</h2>
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
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-200 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">{t.partnerRolesTitle}</h2>
          <ul className="space-y-1.5 text-sm text-slate-200">
            {t.partnerRoles.map((item) => (
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
            {t.partnerSelection.map((item) => (
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

      <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              {t.catalogTitle}
            </p>
            <p className="text-sm text-slate-200">{t.catalogIntro}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {t.catalog.map((category) => (
            <AnimatedCard key={category.title} className="h-full p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-white">{category.title}</p>
                  <p className="text-xs text-slate-300">{category.description}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-200">{category.items}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}


