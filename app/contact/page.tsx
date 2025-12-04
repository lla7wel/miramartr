'use client';

import InteractiveImage from "../../components/InteractiveImage";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedCard from "../../components/AnimatedCard";
import { MAP_LINK, REGISTERED_ADDRESS, CORE_POSITIONING } from "../../lib/constants";

const CONTACT_COPY = {
  en: {
    badge: "Contact",
    heading: "Share your RFQ or equipment list.",
    positioning: CORE_POSITIONING.en,
    lead:
      "Miramar responds to enquiries from regional private oil & gas, power, and industrial companies. Share your scope and key equipment items and we'll respond with options from vetted mills and OEMs.",
    reasonsLabel: "What we typically receive",
    reasons: [
      "Project RFQs for oil & gas, power, or industrial plants.",
      "Equipment lists covering line pipe, steel, valves, rotating, and electrical items.",
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      messagePlaceholder: "Scope, timelines, and key equipment families.",
      submit: "Submit enquiry",
    },
    officeLabel: "Registered office",
    mapCta: "Open in Maps",
  },
  tr: {
    badge: "Contact",
    heading: "Share your RFQ or equipment list.",
    positioning: CORE_POSITIONING.tr,
    lead:
      "Miramar responds to enquiries from regional private oil & gas, power, and industrial companies. Share your scope and key equipment items and we'll respond with options from vetted mills and OEMs.",
    reasonsLabel: "What we typically receive",
    reasons: [
      "Project RFQs for oil & gas, power, or industrial plants.",
      "Equipment lists covering line pipe, steel, valves, rotating, and electrical items.",
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      messagePlaceholder: "Scope, timelines, and key equipment families.",
      submit: "Submit enquiry",
    },
    officeLabel: "Registered office",
    mapCta: "Open in Maps",
  },
} as const;

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = CONTACT_COPY[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 text-slate-50">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              {t.badge}
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">{t.heading}</h1>
            <p className="text-sm text-slate-200 sm:text-base">{t.positioning}</p>
            <p className="text-sm text-slate-200 sm:text-base">{t.lead}</p>
          </div>

          <AnimatedCard className="p-4 sm:p-5">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">{t.reasonsLabel}</p>
              <ul className="space-y-1.5 text-sm text-slate-200">
                {t.reasons.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-5 sm:p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-slate-200">
                    {t.formLabels.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-slate-200">
                    {t.formLabels.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-xs font-medium text-slate-200">
                  {t.formLabels.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-medium text-slate-200">
                  {t.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                  placeholder={t.formLabels.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#B8202A] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#B8202A]/40 transition hover:bg-[#9c1b24]"
              >
                {t.formLabels.submit}
              </button>
            </form>
          </AnimatedCard>
        </div>

        <div className="space-y-4 mt-8 lg:mt-0">
          <AnimatedCard className="p-3">
            <InteractiveImage
              src="/miramar-contact-office.png"
              alt="Miramar contact office"
              width={640}
              height={420}
              className="object-cover"
              containerClassName="h-80 w-full max-h-80 rounded-2xl"
              priority
            />
          </AnimatedCard>
        </div>
      </div>

      <div className="mt-10 grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-lg shadow-black/40 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            {t.officeLabel}
          </p>
          <p>{REGISTERED_ADDRESS}</p>
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 shadow hover:bg-slate-700"
        >
          {t.mapCta}
        </a>
      </div>
    </div>
  );
}

