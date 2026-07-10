"use client";

import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useLanguage } from "@/components/LanguageProvider";
import { uiCopy } from "@/content/site";

export function CtaBand() {
  const { lang } = useLanguage();
  const copy = uiCopy[lang];

  return (
    <Section className="bg-graphite-950">
      <div className="industrial-card grid gap-6 rounded-lg border border-brand-red/35 bg-gradient-to-br from-brand-red/16 via-steel-950 to-graphite-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">RFQ / BOQ</p>
          <h2 className="mt-3 text-2xl font-semibold text-cream sm:text-3xl">
            {lang === "tr"
              ? "Proje kapsamlarini net bir teklif akisiyla baslatin."
              : "Start project scopes with a clear enquiry path."}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-steel-300">
            {lang === "tr"
              ? "Metraj, cizim, zamanlama ve saha konumunu paylasin; Miramar tedarik ve saha hizmetleri icin uygulanabilir kapsam bilgileriyle yanit verebilir."
              : "Share quantities, drawings, timing, and site location so Miramar can respond with practical scope information for supply and site services."}
          </p>
        </div>
        <ButtonLink href="/contact">{copy.primaryCta}</ButtonLink>
      </div>
    </Section>
  );
}
