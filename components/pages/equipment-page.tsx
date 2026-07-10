"use client";

import { CtaBand } from "@/components/sections/cta-band";
import { EquipmentFilter } from "@/components/sections/equipment-filter";
import { PageHero, Section } from "@/components/ui/section";
import { useLanguage } from "@/components/LanguageProvider";
import { pages } from "@/content/site";

export function EquipmentPage() {
  const { lang } = useLanguage();
  const copy = pages.equipment[lang];

  return (
    <>
      <PageHero eyebrow={copy.badge} title={copy.title} body={copy.lead} />
      <Section className="bg-graphite-950">
        <EquipmentFilter />
      </Section>
      <CtaBand />
    </>
  );
}
