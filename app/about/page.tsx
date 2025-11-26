"use client";

import Link from "next/link";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const ABOUT_COPY = {
  en: {
    badge: "About Miramar",
    heading: "Istanbul-based energy and industrial equipment partner.",
    lead1:
      "Miramar is a mid-size regional supplier focused on oil & gas, power, and heavy industry. We serve state-owned entities and private groups that require spec-compliant equipment, clear documentation, and traceable supply chains.",
    lead2:
      "From Istanbul, we coordinate mills, OEMs, fabricators, and inspection partners so each package arrives documented and aligned with project and lender requirements. Our teams speak the language of technical standards, procurement gates, and audit-ready handover.",
    section1Title: "How we think",
    section1Body:
      "Equipment is risk, uptime, and reputation. We plan every package as if it will be audited.",
    section2Title: "What we prioritize",
    section2Body:
      "Safety, technical compliance, documentation quality, and delivery under real project constraints.",
    section3Title: "Who we serve",
    section3Body:
      "NOCs, ministries, utilities, EPCs, and industrial groups managing long-life assets.",
  },
  tr: {
    badge: "Miramar Hakkında",
    heading: "İstanbul merkezli enerji ve endüstriyel ekipman ortağı.",
    lead1:
      "Miramar, petrol ve gaz, enerji ve ağır sanayiye odaklanan bölgesel bir tedarikçidir. Standartlara uygun ekipman, net dokümantasyon ve izlenebilir tedarik zincirleri isteyen kamu ve özel kurumlarla çalışır.",
    lead2:
      "İstanbul’dan, her paketin proje ve kredi şartlarına uygun, eksiksiz dokümantasyonla teslim edilmesi için haddehane, üretici, imalatçı ve gözetim firmalarını koordine ederiz.",
    section1Title: "Nasıl düşünürüz",
    section1Body:
      "Ekipman; risk, duruş süresi ve itibar demektir. Her paketi denetleniyormuş gibi planlarız.",
    section2Title: "Neye öncelik veririz",
    section2Body:
      "Güvenlik, teknik uygunluk, dokümantasyon kalitesi ve gerçek proje kısıtları altında teslimat.",
    section3Title: "Kime hizmet veririz",
    section3Body:
      "NOC’ler, bakanlıklar, kamu kuruluşları, elektrik dağıtım şirketleri, EPC’ler ve ağır sanayi grupları.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = ABOUT_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 space-y-10 text-slate-50">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            {t.badge}
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
          <p className="text-sm text-slate-200 sm:text-base">{t.lead1}</p>
          <p className="text-sm text-slate-200 sm:text-base">{t.lead2}</p>
        </div>
        <InteractiveImage
          src="/miramar-about-overview.png"
          alt="Miramar overview"
          width={480}
          height={320}
          className="object-cover"
          containerClassName="mt-8 lg:mt-0 h-64 w-full lg:h-72"
          priority
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {[
          { title: t.section1Title, body: t.section1Body },
          { title: t.section2Title, body: t.section2Body },
          { title: t.section3Title, body: t.section3Body },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              {item.title}
            </p>
            <p className="mt-3 text-sm text-slate-200">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">Regional reach, institutional mindset</h2>
          <p className="mt-3 text-sm text-slate-200">
            Miramar works across the Middle East, North Africa, and adjacent industrial markets. We
            respond to institutional procurement processes, offer structured documentation sets, and
            adapt to governance requirements without compromising delivery.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">Transparent, traceable supply</h2>
          <p className="mt-3 text-sm text-slate-200">
            Equipment moves through verified mills, OEMs, and inspection agencies with clear tagging
            and QA/MTC packages. We align to project specs, approved vendor lists, and lender
            expectations so stakeholders remain confident end to end.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
        <Link
          href="/services"
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
        >
          Explore services
        </Link>
        <Link
          href="/equipment"
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
        >
          See equipment coverage
        </Link>
      </div>
    </div>
  );
}
