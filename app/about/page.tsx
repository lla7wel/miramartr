"use client";

import Link from "next/link";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";

const ABOUT_COPY = {
  en: {
    badge: "About Miramar",
    heading: "Istanbul-based energy and industrial equipment partner.",
    lead1:
      "Miramar is a mid-size regional supplier focused on oil & gas, power, and heavy industry. We serve regional private oil & gas, power, and industrial companies that require spec-compliant equipment and clear communication.",
    lead2:
      "From Istanbul, we source heavy industrial equipment from vetted mills and OEMs for oil, gas, power, and industrial projects.",
    section1Title: "How we think",
    section1Body:
      "Equipment is risk, uptime, and reputation. We plan every package as if it will be audited.",
    section2Title: "What we prioritize",
    section2Body:
      "Safety, technical compliance, documentation quality, and delivery under real project constraints.",
    section3Title: "Who we serve",
    section3Body:
      "Private industrial groups, EPCs, and energy companies managing long-life assets.",
  },
  tr: {
    badge: "Miramar Hakkında",
    heading: "İstanbul merkezli enerji ve endüstriyel ekipman ortağı.",
    lead1:
      "Miramar, petrol ve gaz, enerji ve ağır sanayi odaklı bölgesel bir tedarikçidir. Bölgedeki özel petrol ve gaz, enerji ve endüstri şirketlerine şartnameye uygun ekipman ve net iletişim sunar.",
    lead2:
      "İstanbul'dan, petrol, gaz, enerji ve endüstriyel projeler için onaylı haddehane ve OEM'lerden ağır ekipman tedarik ediyoruz.",
    section1Title: "Nasıl düşünürüz",
    section1Body:
      "Ekipman; risk, duruş süresi ve itibar demektir. Her paketi denetleniyormuş gibi planlarız.",
    section2Title: "Neye öncelik veririz",
    section2Body:
      "Güvenlik, teknik uygunluk, dokümantasyon kalitesi ve gerçek proje kısıtlarında teslimat.",
    section3Title: "Kime hizmet veririz",
    section3Body:
      "Özel sanayi grupları, EPC'ler ve uzun ömürlü varlıkları yöneten enerji şirketleri.",
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
          <h2 className="text-lg font-semibold text-white">Regional reach, clear communication</h2>
          <p className="mt-3 text-sm text-slate-200">
            Miramar supports projects in Turkey and nearby regional markets. We work with engineering and procurement teams that need reliable heavy equipment and clear communication without unnecessary complexity.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30">
          <h2 className="text-lg font-semibold text-white">Transparent, traceable supply</h2>
          <p className="mt-3 text-sm text-slate-200">
            Equipment is sourced from vetted mills and OEMs. When available, manufacturer certificates and basic test reports can be provided with deliveries.
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
