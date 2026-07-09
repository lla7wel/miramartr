import {
  Building2,
  Cable,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  PackageCheck,
  PanelsTopLeft,
  PlugZap,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { Language } from "@/lib/language";
import { REGISTERED_ADDRESS } from "@/lib/constants";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
export type Localized<T> = Record<Language, T>;
export type EquipmentCategory = "materials" | "electrical" | "plumbing" | "pumps" | "utilities";

export const corePositioning: Localized<string> = {
  en: "Istanbul-based supplier and service provider for construction and site development: materials supply, electrical and plumbing systems, pumps, and site preparation support.",
  tr: "Istanbul merkezli; insaat ve saha gelistirme projeleri icin malzeme tedarigi, elektrik ve sihhi tesisat sistemleri, pompalar ve saha hazirlik destegi sunan tedarikci ve hizmet saglayici.",
};

export const navItems = [
  { href: "/", label: { en: "Home", tr: "Ana Sayfa" } },
  { href: "/about", label: { en: "About", tr: "Hakkimizda" } },
  { href: "/services", label: { en: "Services", tr: "Hizmetler" } },
  { href: "/sectors", label: { en: "Sectors", tr: "Sektorler" } },
  { href: "/equipment", label: { en: "Equipment", tr: "Ekipman" } },
] as const;

export const uiCopy = {
  en: {
    brandSubtitle: "Construction Materials & Site Services",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    language: "Language",
    primaryCta: "Share RFQ / BOQ",
    secondaryCta: "View coverage",
    learnMore: "Learn more",
    openMaps: "Open in Maps",
    quickLinks: "Quick links",
    builtFor: "Built for construction, electrical, and site development projects.",
    legal: "Miramar Construction Materials & Site Services Ltd. Istanbul, Turkiye.",
    disclaimer:
      "Specifications and documentation are provided in detail with RFQs and orders. This site is for general guidance only.",
    registeredOffice: "Registered office",
    projectFlow: "Project flow",
    featuredCoverage: "Featured coverage",
  },
  tr: {
    brandSubtitle: "Insaat Malzemeleri ve Saha Hizmetleri",
    contact: "Iletisim",
    menu: "Menu",
    close: "Kapat",
    language: "Dil",
    primaryCta: "Teklif / metraj gonder",
    secondaryCta: "Kapsami gor",
    learnMore: "Incele",
    openMaps: "Haritada ac",
    quickLinks: "Hizli baglantilar",
    builtFor: "Insaat, elektrik ve saha gelistirme projeleri icin.",
    legal: "Miramar Insaat Malzemeleri ve Saha Hizmetleri Ltd. Istanbul, Turkiye.",
    disclaimer:
      "Teknik sartlar ve dokumantasyon tekliflerle ve siparislerle detayli olarak saglanir. Bu site yalnizca genel bilgilendirme icindir.",
    registeredOffice: "Kayitli ofis",
    projectFlow: "Proje akisi",
    featuredCoverage: "One cikan kapsam",
  },
} as const;

export const metadataCopy = {
  home: {
    en: {
      title: "Miramar | Construction Materials & Site Services",
      description:
        "Miramar supplies construction materials and supports electrical, plumbing, pump, and site development scopes from Istanbul.",
    },
    tr: {
      title: "Miramar | Insaat Malzemeleri ve Saha Hizmetleri",
      description:
        "Miramar, Istanbul merkezli insaat malzemeleri tedarigi, elektrik, sihhi tesisat, pompa ve saha hizmetleri destegi sunar.",
    },
  },
  about: {
    en: {
      title: "About Miramar | Construction Supply Partner",
      description:
        "Learn how Miramar supports construction and site teams with scope clarity, documentation discipline, and reliable delivery.",
    },
    tr: {
      title: "Miramar Hakkinda | Insaat Tedarik Ortagi",
      description:
        "Miramar'in insaat ve saha ekiplerini kapsam netligi, dokumantasyon ve guvenilir teslimatla nasil destekledigini inceleyin.",
    },
  },
  services: {
    en: {
      title: "Services | Materials, Electrical, Plumbing & Pumps",
      description:
        "Construction material supply, electrical works, plumbing systems, pump packages, logistics, and site coordination.",
    },
    tr: {
      title: "Hizmetler | Malzeme, Elektrik, Sihhi Tesisat ve Pompa",
      description:
        "Insaat malzeme tedarigi, elektrik isleri, sihhi tesisat, pompa paketleri, lojistik ve saha koordinasyonu.",
    },
  },
  sectors: {
    en: {
      title: "Sectors | Miramar Construction Coverage",
      description:
        "Miramar supports residential, commercial, industrial, infrastructure, utility, renovation, and retrofit projects.",
    },
    tr: {
      title: "Sektorler | Miramar Insaat Kapsami",
      description:
        "Miramar konut, ticari, endustriyel, altyapi, kamu hizmetleri, renovasyon ve yenileme projelerini destekler.",
    },
  },
  equipment: {
    en: {
      title: "Equipment & Materials | Miramar Coverage",
      description:
        "Browse Miramar coverage across construction materials, electrical systems, plumbing, drainage, pumps, and site utilities.",
    },
    tr: {
      title: "Ekipman ve Malzemeler | Miramar Kapsami",
      description:
        "Insaat malzemeleri, elektrik sistemleri, sihhi tesisat, drenaj, pompalar ve saha altyapi kapsamlarini inceleyin.",
    },
  },
  contact: {
    en: {
      title: "Contact Miramar | Share RFQ, BOQ or Project Scope",
      description:
        "Share your RFQ, BOQ, drawings, timeline, and site location with Miramar for material supply and site services.",
    },
    tr: {
      title: "Miramar Iletisim | Teklif, BOQ veya Proje Kapsami",
      description:
        "Malzeme tedarigi ve saha hizmetleri icin teklif, metraj, cizim, zamanlama ve saha konumunuzu Miramar ile paylasin.",
    },
  },
} satisfies Record<string, Localized<{ title: string; description: string }>>;

export const homePage = {
  en: {
    badge: "Istanbul | Construction Materials & Site Services",
    title: "Project-ready supply and site services for modern construction.",
    lead: corePositioning.en,
    body: "Miramar supplies construction materials and delivers on-site electrical, plumbing, and pump systems for residential, commercial, and infrastructure projects. We align scope early, coordinate procurement and delivery, and support installation to keep projects moving on schedule.",
    heroStats: [
      { label: "Core scope", value: "Materials + MEP" },
      { label: "Delivery model", value: "BOQ-first" },
      { label: "Base", value: "Istanbul" },
    ],
    overviewTitle: "A sharper operating partner for practical construction work.",
    overviewBody:
      "The rebuilt Miramar experience presents the company as a disciplined supply and site-services partner: clear categories, documented scopes, staged deliveries, and a direct path for RFQ conversations.",
  },
  tr: {
    badge: "Istanbul | Insaat Malzemeleri ve Saha Hizmetleri",
    title: "Modern insaat icin proje hazir tedarik ve saha hizmetleri.",
    lead: corePositioning.tr,
    body: "Miramar, konut, ticari ve altyapi projeleri icin insaat malzemeleri tedarik eder; sahada elektrik, sihhi tesisat ve pompa sistemlerini kurulum destegiyle saglar. Kapsami erken netlestirir, satin alma ve lojistigi koordine eder, montaja destek olarak programi korur.",
    heroStats: [
      { label: "Ana kapsam", value: "Malzeme + MEP" },
      { label: "Teslim modeli", value: "BOQ-oncelikli" },
      { label: "Merkez", value: "Istanbul" },
    ],
    overviewTitle: "Saha gercekligine uygun, daha net bir is ortagi.",
    overviewBody:
      "Yenilenen Miramar deneyimi sirketi disiplinli bir tedarik ve saha hizmetleri ortagi olarak konumlandirir: net kategoriler, dokumante kapsamlar, kademeli teslimatlar ve dogrudan teklif akisi.",
  },
} as const;

export const servicePillars = [
  {
    icon: PackageCheck,
    image: "/miramar-service-supply.png",
    tag: { en: "Supply", tr: "Tedarik" },
    title: { en: "Materials supply & procurement", tr: "Malzeme tedarigi ve satin alma" },
    body: {
      en: "Structural, finishing, electrical, plumbing, and jobsite essentials aligned to drawings, quantities, and delivery windows.",
      tr: "Statik, ince isler, elektrik, sihhi tesisat ve saha ihtiyaclari; cizim, metraj ve teslim planina gore hizalanir.",
    },
    bullets: {
      en: [
        "BOQ-based package planning",
        "Controlled alternatives and approvals",
        "Staged delivery coordination",
      ],
      tr: [
        "BOQ bazli paket planlama",
        "Kontrollu alternatifler ve onaylar",
        "Kademeli teslim koordinasyonu",
      ],
    },
  },
  {
    icon: PlugZap,
    image: "/miramar-3d-power.png",
    tag: { en: "Electrical", tr: "Elektrik" },
    title: { en: "Electrical supply & installation", tr: "Elektrik tedarigi ve montaj" },
    body: {
      en: "LV distribution, cabling, containment, grounding, lighting materials, terminations, and testing support as scoped.",
      tr: "LV dagitim, kablolama, kanal ve tava, topraklama, aydinlatma malzemeleri, sonlandirma ve kapsama gore test destegi.",
    },
    bullets: {
      en: [
        "Panels and distribution boards",
        "Cables, trays, conduits, labeling",
        "Testing and commissioning inputs",
      ],
      tr: [
        "Pano ve dagitim tablolari",
        "Kablo, tava, boru, etiketleme",
        "Test ve devreye alma girdileri",
      ],
    },
  },
  {
    icon: Waves,
    image: "/miramar-3d-steel-piping.png",
    tag: { en: "MEP", tr: "MEP" },
    title: {
      en: "Plumbing, pumps & site utilities",
      tr: "Sihhi tesisat, pompalar ve saha altyapilari",
    },
    body: {
      en: "Domestic water, drainage, valves, sanitary materials, booster sets, transfer pumps, circulation, and dewatering support.",
      tr: "Icme suyu, drenaj, vanalar, saniter malzemeler, hidrofor setleri, transfer pompalar, sirkulasyon ve dewatering destegi.",
    },
    bullets: {
      en: [
        "Pipes, fittings, drainage systems",
        "Pump packages and spares strategy",
        "Route and sequencing inputs",
      ],
      tr: [
        "Boru, fiting, drenaj sistemleri",
        "Pompa paketleri ve yedek stratejisi",
        "Guzergah ve siralama girdileri",
      ],
    },
  },
] as const;

export const processSteps = [
  {
    icon: ClipboardCheck,
    title: { en: "Define scope", tr: "Kapsami belirle" },
    body: {
      en: "Confirm BOQ, drawings, specifications, site constraints, and delivery phasing.",
      tr: "BOQ, cizimler, sartname, saha kisitlari ve teslim fazlari netlestirilir.",
    },
  },
  {
    icon: FileCheck2,
    title: { en: "Match materials", tr: "Malzemeyi eslestir" },
    body: {
      en: "Align approved products, controlled alternatives, documentation, and package boundaries.",
      tr: "Onayli urunler, kontrollu alternatifler, dokumantasyon ve paket sinirlari hizalanir.",
    },
  },
  {
    icon: Truck,
    title: { en: "Deliver & execute", tr: "Teslim et ve uygula" },
    body: {
      en: "Coordinate staged deliveries and electrical, plumbing, pump, or utility site works.",
      tr: "Kademeli teslimatlar ve elektrik, sihhi tesisat, pompa veya altyapi isleri koordine edilir.",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Handover basics", tr: "Teslim dokumanlari" },
    body: {
      en: "Prepare datasheets, certificates where applicable, testing notes, and closeout basics.",
      tr: "Gerekli dokumanlar, sertifikalar, test notlari ve kapanis bilgileri hazirlanir.",
    },
  },
] as const;

export const pages = {
  about: {
    en: {
      badge: "About Miramar",
      title: "Istanbul-based supplier and site services partner for construction projects.",
      lead: "Miramar supports construction and site development by supplying project materials and executing critical building services scopes: electrical, plumbing, and pump systems.",
      body: "The operating approach is straightforward: define the scope early, confirm quantities and specifications, plan deliveries around site reality, and execute installations with discipline and safety.",
      image: "/miramar-about-overview.png",
      cta: "Explore services",
      secondaryCta: "See equipment coverage",
    },
    tr: {
      badge: "Miramar Hakkinda",
      title: "Insaat projeleri icin Istanbul merkezli tedarik ve saha hizmetleri ortagi.",
      lead: "Miramar, insaat ve saha gelistirme projelerini malzeme tedarigi ve elektrik, sihhi tesisat ile pompa sistemleri uygulama destegiyle destekler.",
      body: "Yaklasim nettir: Kapsami erken belirlemek, metraj ve sartlari teyit etmek, teslimatlari saha gercekligine gore planlamak ve uygulamalari disiplinle yurutmek.",
      image: "/miramar-about-overview.png",
      cta: "Hizmetleri kesfet",
      secondaryCta: "Ekipman kapsamini gor",
    },
  },
  services: {
    en: {
      badge: "Services",
      title: "From BOQ to delivered materials and completed site scope.",
      lead: "Engage Miramar for construction material supply and coordinated site services covering electrical, plumbing, and pumping systems.",
    },
    tr: {
      badge: "Hizmetler",
      title: "BOQ'dan teslim edilmis malzemelere ve tamamlanmis saha kapsamlarina.",
      lead: "Miramar, insaat malzeme tedarigi ile elektrik, sihhi tesisat ve pompa sistemlerini kapsayan koordine saha hizmetlerini sunar.",
    },
  },
  sectors: {
    en: {
      badge: "Sectors",
      title: "Where Miramar operates.",
      lead: "Miramar supports construction and site development projects where reliable materials supply and well-coordinated MEP execution are critical.",
    },
    tr: {
      badge: "Sektorler",
      title: "Miramar nerede calisir.",
      lead: "Miramar, guvenilir malzeme tedarigi ve koordine MEP uygulamasinin kritik oldugu insaat ve saha projelerini destekler.",
    },
  },
  equipment: {
    en: {
      badge: "Materials & systems coverage",
      title: "What Miramar supplies and supports on construction projects.",
      lead: "Filter the core coverage families used across material supply, electrical, plumbing, pump, and site utility scopes.",
      all: "All",
    },
    tr: {
      badge: "Malzeme ve sistem kapsami",
      title: "Miramar'in insaat projelerinde sagladigi ve destekledigi kapsam.",
      lead: "Malzeme tedarigi, elektrik, sihhi tesisat, pompa ve saha altyapi kapsamlarinda kullanilan ana aileleri filtreleyin.",
      all: "Tumu",
    },
  },
  contact: {
    en: {
      badge: "Contact",
      title: "Share your RFQ, BOQ, or scope.",
      lead: "Send drawings, BOQ, timeline, and site location. Miramar can respond with availability, alternatives where needed, and a delivery or installation plan aligned to your schedule.",
      response:
        "The form opens your email client with a prepared RFQ message. No paid service or fake submission is used.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      messagePlaceholder: "Scope, timelines, delivery phasing, key systems.",
      submit: "Prepare email enquiry",
      typical: "What we typically receive",
    },
    tr: {
      badge: "Iletisim",
      title: "Teklif, metraj veya kapsam paylasin.",
      lead: "Cizimleriniz, BOQ, zamanlama ve saha konumunu paylasin. Miramar uygunluk, alternatifler ve proje takviminize uygun teslim ya da uygulama planiyla yanit verebilir.",
      response:
        "Form, hazirlanmis teklif mesajiyla e-posta istemcinizi acar. Ucretli servis veya sahte gonderim kullanilmaz.",
      name: "Ad Soyad",
      email: "E-posta",
      company: "Sirket",
      message: "Mesaj",
      messagePlaceholder: "Kapsam, zamanlama, teslim fazlari, ana sistemler.",
      submit: "E-posta talebi hazirla",
      typical: "Genellikle aldigimiz bilgiler",
    },
  },
} as const;

export const operatingPrinciples = [
  {
    icon: Gauge,
    title: { en: "Scope clarity", tr: "Kapsam netligi" },
    body: {
      en: "BOQ-first planning with documented alternatives, approvals, and handover basics.",
      tr: "BOQ-oncelikli planlama; dokumante alternatifler, onaylar ve teslim dokumanlari.",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Quality & safety mindset", tr: "Kalite ve guvenlik" },
    body: {
      en: "Materials and site practices aligned to specifications, site rules, and safety requirements.",
      tr: "Malzemeler ve saha uygulamalari sartname, saha kurallari ve guvenlik ihtiyaclariyla uyumlu.",
    },
  },
  {
    icon: FileCheck2,
    title: { en: "Documentation discipline", tr: "Dokumantasyon disiplini" },
    body: {
      en: "Datasheets, certificates where applicable, testing inputs, and clear package records.",
      tr: "Teknik dokumanlar, gerekli sertifikalar, test girdileri ve net paket kayitlari.",
    },
  },
  {
    icon: Truck,
    title: { en: "Schedule-aware delivery", tr: "Takvime uygun teslim" },
    body: {
      en: "Deliveries and site activities planned around readiness, access, and milestones.",
      tr: "Teslimatlar ve saha aktiviteleri hazirlik, erisim ve kilometre taslarina gore planlanir.",
    },
  },
] as const;

export const sectors = [
  {
    icon: Building2,
    image: "/miramar-service-supply.png",
    title: { en: "Residential & mixed-use", tr: "Konut ve karma projeler" },
    body: {
      en: "Apartments, compounds, and mixed developments with materials and building services support.",
      tr: "Daireler, siteler ve karma gelismeler icin malzeme ve bina servisleri destegi.",
    },
  },
  {
    icon: PanelsTopLeft,
    image: "/miramar-contact-office.png",
    title: { en: "Commercial buildings", tr: "Ticari binalar" },
    body: {
      en: "Offices, retail, and hospitality projects requiring structured supply and coordinated scopes.",
      tr: "Ofis, perakende ve konaklama projelerinde duzenli tedarik ve koordine kapsamlar.",
    },
  },
  {
    icon: Factory,
    image: "/miramar-service-logistics.png",
    title: { en: "Industrial facilities & warehouses", tr: "Endustriyel tesisler ve depolar" },
    body: {
      en: "Fit-out and utility-ready installations for operational sites where scope clarity matters.",
      tr: "Kapsam netliginin onemli oldugu isletme sahalari icin fit-out ve altyapiya hazir uygulamalar.",
    },
  },
  {
    icon: Cable,
    image: "/miramar-3d-power.png",
    title: { en: "Infrastructure & utilities", tr: "Altyapi ve kamu hizmetleri" },
    body: {
      en: "Site utilities, civil preparation support, pumping, drainage, and electrical coordination.",
      tr: "Saha altyapisi, saha hazirlik destegi, pompa, drenaj ve elektrik koordinasyonu.",
    },
  },
  {
    icon: Wrench,
    image: "/miramar-service-lifecycle.png",
    title: { en: "Renovation & retrofit", tr: "Renovasyon ve yenileme" },
    body: {
      en: "Upgrades, replacements, and phased works planned to reduce disruption.",
      tr: "Kesintiyi azaltmak icin planlanan yukseltme, degisim ve asamali isler.",
    },
  },
] as const;

export const equipmentCategories = [
  { id: "materials", label: { en: "Materials", tr: "Malzemeler" } },
  { id: "electrical", label: { en: "Electrical", tr: "Elektrik" } },
  { id: "plumbing", label: { en: "Plumbing", tr: "Sihhi tesisat" } },
  { id: "pumps", label: { en: "Pumps", tr: "Pompalar" } },
  { id: "utilities", label: { en: "Site utilities", tr: "Saha altyapi" } },
] satisfies Array<{ id: EquipmentCategory; label: Localized<string> }>;

export const equipmentItems = [
  {
    category: "materials",
    icon: Hammer,
    title: { en: "Construction materials", tr: "Insaat malzemeleri" },
    body: {
      en: "Structural materials, profiles, finishing materials, fixings, fasteners, adhesives, protection, and jobsite consumables.",
      tr: "Yapi malzemeleri, profiller, ince is malzemeleri, baglanti elemanlari, yapistiricilar, koruma ve saha sarflari.",
    },
    image: "/miramar-service-logistics.png",
  },
  {
    category: "electrical",
    icon: PlugZap,
    title: { en: "LV distribution", tr: "LV dagitim" },
    body: {
      en: "Panels, distribution boards, breakers, protection accessories, labeling, and basic commissioning inputs.",
      tr: "Panolar, dagitim tablolari, kesiciler, koruma aksesuarlari, etiketleme ve temel devreye alma girdileri.",
    },
    image: "/miramar-3d-power.png",
  },
  {
    category: "electrical",
    icon: Cable,
    title: { en: "Cables & containment", tr: "Kablo ve kanal/tava" },
    body: {
      en: "Cables, conduits, cable trays, routing accessories, terminations, and grounding materials.",
      tr: "Kablolar, borular, kablo tavalari, guzergah aksesuarlari, sonlandirma ve topraklama malzemeleri.",
    },
    image: "/miramar-3d-safety-control.png",
  },
  {
    category: "plumbing",
    icon: Waves,
    title: { en: "Plumbing & drainage", tr: "Sihhi tesisat ve drenaj" },
    body: {
      en: "Pipes, fittings, valves, traps, drainage channels, chambers, sanitary components, and fixture support.",
      tr: "Boru, fiting, vana, sifon, drenaj kanali, baca, saniter elemanlar ve armaturlere destek.",
    },
    image: "/miramar-3d-steel-piping.png",
  },
  {
    category: "pumps",
    icon: Gauge,
    title: { en: "Pump packages", tr: "Pompa paketleri" },
    body: {
      en: "Booster sets, transfer pumps, circulation pumps, drainage and dewatering packages, commissioning support, and spares strategy.",
      tr: "Hidrofor setleri, transfer pompalari, sirkulasyon pompalari, drenaj/dewatering paketleri, devreye alma destegi ve yedek stratejisi.",
    },
    image: "/miramar-3d-oil-gas.png",
  },
  {
    category: "utilities",
    icon: HardHat,
    title: { en: "Site utilities support", tr: "Saha altyapi destegi" },
    body: {
      en: "Route inputs, quantity coordination, sequencing notes, sumps, gullies, chambers, and logistics planning.",
      tr: "Guzergah girdileri, metraj koordinasyonu, siralama notlari, toplama kuyulari, mazgallar, bacalar ve lojistik planlama.",
    },
    image: "/miramar-sector-infrastructure.png",
  },
] satisfies Array<{
  category: EquipmentCategory;
  icon: IconComponent;
  title: Localized<string>;
  body: Localized<string>;
  image: string;
}>;

export const contactIntake = {
  en: [
    "BOQs / material take-offs and project drawings",
    "Electrical single-lines, layouts, and cable schedules",
    "Plumbing schematics, risers, and fixture schedules",
    "Pump duty points, flow/head requirements, and site conditions",
    "Delivery phasing, access constraints, and required dates",
  ],
  tr: [
    "BOQ / metrajlar ve proje cizimleri",
    "Elektrik tek hatlari, yerlesimler ve kablo listeleri",
    "Sihhi tesisat semalari, kolonlar ve armaturlere ait programlar",
    "Pompa debi/basma yuksekligi ihtiyaclari ve saha kosullari",
    "Teslim fazlari, erisim kisitlari ve gerekli tarihler",
  ],
} as const;

export const contactCards = [
  {
    icon: Mail,
    title: { en: "RFQ-ready communication", tr: "Teklife hazir iletisim" },
    body: {
      en: "The form prepares an email with the project details you enter, keeping the process free and transparent.",
      tr: "Form, girdiginiz proje detaylariyla e-posta hazirlar; surec ucretsiz ve seffaf kalir.",
    },
  },
  {
    icon: MapPin,
    title: { en: "Registered office", tr: "Kayitli ofis" },
    body: { en: REGISTERED_ADDRESS, tr: REGISTERED_ADDRESS },
  },
] as const;
