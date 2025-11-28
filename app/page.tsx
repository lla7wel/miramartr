'use client';

import Link from "next/link";
import InteractiveImage from "../components/InteractiveImage";
import { useLanguage } from "../components/LanguageProvider";

const HERO_COPY = {
  en: {
    badge: "Istanbul | Energy & Industrial Equipment",
    title: "Project-ready supply for oil & gas, power, and heavy industry.",
    body:
      "Miramar supplies spec-compliant rotating equipment, valves, and steel-based items for regional private oil & gas, power, and industrial companies. Share RFQs or equipment lists and we'll respond with options from vetted mills and OEMs.",
    primaryCta: "Share an RFQ / package list",
    secondaryCta: "View equipment coverage",
  },
  tr: {
    badge: "Istanbul | Enerji ve Endüstriyel Ekipman",
    title: "Petrol, enerji ve ağır sanayi için proje odaklı tedarik.",
    body:
      "Miramar, bölgesel özel petrol ve gaz, enerji ve endüstriyel şirketler için şartnameye uygun döner ekipman, vanalar ve çelik ürünleri tedarik eder. Teklif veya ekipman listenizi paylaşın; onaylı haddehane ve OEM seçenekleriyle geri dönüş yapalım.",
    primaryCta: "Teklif / ekipman listesi paylaş",
    secondaryCta: "Ekipman kapsamını gör",
  },
} as const;

export default function Home() {
  const { lang } = useLanguage();
  const c = HERO_COPY[lang];

  return (
    <div className="text-slate-50">
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#081427] via-[#0E172A] to-[#030712]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-[46px] bg-gradient-to-br from-[#B8202A]/80 via-[#b8202a]/40 to-transparent blur-[110px] opacity-90" />
          <div className="absolute -right-12 top-0 h-80 w-80 rounded-[52px] bg-gradient-to-br from-[#102A5C]/90 via-[#0f1f44]/70 to-[#050814] blur-[90px] opacity-95" />
          <div className="absolute left-12 bottom-0 h-64 w-64 -rotate-6 rounded-[38px] bg-gradient-to-tr from-white/10 via-transparent to-transparent blur-3xl opacity-50 animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="relative z-10 flex-1 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                {c.badge}
              </p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {c.title}
              </h1>
              <p className="max-w-2xl text-sm text-slate-200/90 sm:text-base">
                {c.body}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#B8202A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#B8202A]/35 transition hover:-translate-y-0.5 hover:bg-[#9c1b24]"
                >
                  {c.primaryCta}
                </Link>
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-300/70 hover:bg-white/10"
                >
                  {c.secondaryCta}
                </Link>
              </div>
              <div className="grid gap-4 pt-2 text-xs sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-700/70 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-1 font-semibold text-slate-100">
                    Oil &amp; gas, power, heavy industry
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Clients</p>
                  <p className="mt-1 font-semibold text-slate-100">
                    Private industrial groups &amp; EPCs
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Deliverables</p>
                  <p className="mt-1 font-semibold text-slate-100">
                    Heavy equipment supply with basic manufacturer documentation on request
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex-1 space-y-4">
              <InteractiveImage
                src="/miramar-3d-hero.png"
                alt="Miramar industrial 3D visual"
                fill
                priority
                className="object-cover"
                containerClassName="relative mb-4 h-56 sm:h-64 w-full"
              />
              <div className="relative h-[320px] sm:h-[380px] lg:h-[460px]">
                <div className="absolute left-6 top-6 w-[65%] max-w-md -rotate-3 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-5 shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-2 hover:shadow-black/70">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Oil &amp; gas mechanical equipment
                    </p>
                    <span className="h-2 w-2 rounded-full bg-[#B8202A]" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    API/ISO rotating equipment and valves for energy service.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      API/ISO pumps, compressors, and turbines for upstream and midstream services.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      Gate, ball, and control valves sized to pressure class, media, and service.
                    </li>
                  </ul>
                </div>

                <div className="absolute right-4 top-16 w-[62%] max-w-sm rotate-3 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 transition duration-500 hover:-translate-y-2 hover:shadow-black/60">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Steel &amp; piping
                    </p>
                    <span className="rounded-full bg-[#F6D365] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                      Mills
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    Steel-based items for pipelines and industrial projects.
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-200/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      Line pipe, butt-weld fittings, and flanges for oil, gas, and process lines.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      Structural steel and plate for industrial projects.
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-6 left-12 w-[72%] max-w-md -rotate-2 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-4 shadow-2xl shadow-black/45 transition duration-500 hover:-translate-y-2 hover:shadow-black/60">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Power &amp; electrification
                    </p>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B8202A]/80 shadow-lg shadow-[#B8202A]/40" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    Distribution equipment for industrial loads.
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-200/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      Switchgear, switchboards, and motor control centers for industrial loads.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8202A]" />
                      Power and control cables with accessories for plant distribution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">Overview</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">Miramar at a glance</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Istanbul-based supplier serving oil &amp; gas, power, and heavy industry with heavy equipment from vetted mills and OEMs.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "About Miramar",
                body: "Regional supplier for private oil &amp; gas, power, and industrial companies.",
                href: "/about",
              },
              {
                title: "Services",
                body: "Equipment definition and supply, basic documentation support on request, and lifecycle replacement support.",
                href: "/services",
              },
              {
                title: "Sectors",
                body: "Upstream, midstream, power generation, and industrial plants.",
                href: "/sectors",
              },
              {
                title: "Equipment",
                body: "Oil &amp; gas rotating and valves, steel and piping, and electrical power equipment with vetted partners.",
                href: "/equipment",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-[#F6D365] transition group-hover:translate-x-1">
                    <span>Learn more</span>
                    <span aria-hidden="true">-&gt;</span>
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


