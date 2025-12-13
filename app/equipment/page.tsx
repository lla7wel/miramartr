'use client';

import { motion, useReducedMotion } from "framer-motion";
import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";

const EQUIPMENT_COPY = {
  en: {
    badge: "Materials & systems coverage",
    heading: "What we supply and support on construction projects.",
    lead:
      "Miramar supplies construction materials and supports complete site scopes for electrical, plumbing, and pump systems. Packages are aligned to project specifications with practical documentation and delivery coordination.",
    families: [
      {
        name: "Construction materials",
        image: "/miramar-service-logistics.png",
        bullets: [
          "Structural materials and profiles (as specified).",
          "Finishing materials and jobsite consumables.",
          "Fixings, fasteners, accessories, and protective items.",
          "Staged deliveries aligned to site sequence.",
        ],
      },
      {
        name: "Electrical materials & systems",
        image: "/miramar-3d-power.png",
        bullets: [
          "LV panels, distribution boards, protection and accessories.",
          "Cables, conduits, trays, terminations, and labeling.",
          "Lighting materials and installation accessories.",
          "Testing/commissioning support (as scoped).",
        ],
      },
      {
        name: "Plumbing, drainage & pumps",
        image: "/miramar-3d-steel-piping.png",
        bullets: [
          "Pipes, fittings, valves, and sanitary components.",
          "Drainage materials, chambers, and accessories.",
          "Pumps: booster, transfer, circulation, dewatering.",
          "Commissioning support and spares strategy (as scoped).",
        ],
      },
    ],
    partnerRolesTitle: "Typical partner roles",
    partnerSelectTitle: "How we choose and align partners",
    partnerRoles: [
      "Manufacturers/distributors for building materials and MEP products.",
      "Installation teams for electrical, plumbing, and pump systems.",
      "Logistics providers for staged deliveries and site access timing.",
    ],
    partnerSelection: [
      "Fit with project specifications and delivery requirements.",
      "Consistent quality and availability.",
      "Clear documentation and after-sales support.",
      "Transparent roles between supplier, installer, and site management.",
    ],
    catalogTitle: "Key families by category",
    catalogIntro:
      "Structured view of the core categories we cover for construction and site development scopes.",
    catalog: [
      {
        title: "Construction Materials",
        description: "Structural, finishing, consumables",
        items: "Profiles, drywall, finishes, adhesives, fasteners, protection",
      },
      {
        title: "Electrical",
        description: "LV distribution, cabling, containment, accessories",
        items: "Panels, breakers, trays/conduits, cables, terminations, labeling",
      },
      {
        title: "Plumbing",
        description: "Water/drainage materials, valves, sanitary",
        items: "Pipes, fittings, valves, traps, drainage channels, fixtures",
      },
      {
        title: "Pumps",
        description: "Booster/transfer/circulation/dewatering packages",
        items: "Hydrofor sets, transfer pumps, circulation pumps, drainage/dewatering",
      },
      {
        title: "Site Utilities Support",
        description: "Trenching coordination inputs, drainage solutions",
        items: "Routes, quantities, sequencing notes, chambers, sumps, gullies",
      },
    ],
  },
  tr: {
    badge: "Malzeme ve sistem kapsami",
    heading: "Insaat projelerinde sagladigimiz ve destekledigimiz kapsam.",
    lead:
      "Miramar, insaat malzemeleri tedarik eder ve elektrik, sihhi tesisat ve pompa sistemleri icin tam saha kapsamlarini destekler. Paketler, pratik dokumantasyon ve teslimat koordinasyonu ile proje sartnamelerine gore hizalanir.",
    families: [
      {
        name: "Insaat malzemeleri",
        image: "/miramar-service-logistics.png",
        bullets: [
          "Sartnameye gore yapi malzemeleri ve profiller.",
          "Ince is malzemeleri ve saha sarf malzemeleri.",
          "Baglanti elemanlari, aksesuarlari ve koruyucu kalemler.",
          "Saha siralamasina gore kademeli teslimatlar.",
        ],
      },
      {
        name: "Elektrik malzemeleri ve sistemleri",
        image: "/miramar-3d-power.png",
        bullets: [
          "LV panolar, dagitim tabloları, koruma ve aksesuarlar.",
          "Kablo, boru/kanal, tava, sonlandirma ve etiketleme.",
          "Aydinlatma malzemeleri ve montaj aksesuarları.",
          "Kapsama gore test/devreye alma destegi.",
        ],
      },
      {
        name: "Sihhi tesisat, drenaj ve pompalar",
        image: "/miramar-3d-steel-piping.png",
        bullets: [
          "Boru, fiting, vana ve vitrifiye/saniter elemanlar.",
          "Drenaj malzemeleri, bacalar ve aksesuarlar.",
          "Pompalar: hidrofor, transfer, sirkülasyon, dewatering.",
          "Kapsama gore devreye alma ve yedek stratejisi destegi.",
        ],
      },
    ],
    partnerRolesTitle: "Tipik is ortagi rolleri",
    partnerSelectTitle: "Partnerleri nasil secer ve hizalariz",
    partnerRoles: [
      "Insaat ve MEP urunleri icin uretici/distribütorler.",
      "Elektrik, sihhi tesisat ve pompa sistemleri icin montaj ekipleri.",
      "Kademeli teslimatlar ve saha erisimi icin lojistik saglayicilar.",
    ],
    partnerSelection: [
      "Proje sartlari ve teslim gereklilikleri ile uyum.",
      "Tutarlı kalite ve bulunabilirlik.",
      "Net dokumantasyon ve satis sonrasi destek.",
      "Tedarikci, uygulayici ve saha yonetimi arasinda seffaf roller.",
    ],
    catalogTitle: "Kategori bazinda ana aileler",
    catalogIntro:
      "Insaat ve saha gelistirme kapsamlarinda sundugumuz temel kategorilerin duzenli görünümü.",
    catalog: [
      {
        title: "Insaat Malzemeleri",
        description: "Yapi, ince is, sarf malzemeleri",
        items: "Profiller, alci-pan, finisajlar, yapistiricilar, baglanti elemanlari, koruma",
      },
      {
        title: "Elektrik",
        description: "LV dagitim, kablolama, kanal/tepsi, aksesuarlar",
        items: "Panolar, kesiciler, tava/kanal, kablolar, sonlandirma, etiketleme",
      },
      {
        title: "Sihhi Tesisat",
        description: "Su/drenaj malzemeleri, vanalar, saniter",
        items: "Boru, fiting, vana, sifonlar, drenaj kanallari, vitrifiye",
      },
      {
        title: "Pompalar",
        description: "Hidrofor/transfer/sirkülasyon/dewatering paketleri",
        items: "Hidrofor setleri, transfer pompalar, sirkülasyon pompalar, drenaj/dewatering",
      },
      {
        title: "Saha Altyapi Destegi",
        description: "Kazı koordinasyonu girdileri, drenaj cozumleri",
        items: "Guzergah, metraj, sira notlari; bacalar, toplama kuyulari, mazgallar",
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
            Our role is to source materials and systems from vetted partners and align deliveries with project requirements.
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
