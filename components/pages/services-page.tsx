"use client";

import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/sections/process-flow";
import { ServiceGrid } from "@/components/sections/service-grid";
import { PageHero, Section } from "@/components/ui/section";
import { useLanguage } from "@/components/LanguageProvider";
import { pages } from "@/content/site";

export function ServicesPage() {
  const { lang } = useLanguage();
  const copy = pages.services[lang];

  return (
    <>
      <PageHero eyebrow={copy.badge} title={copy.title} body={copy.lead} />
      <Section className="bg-graphite-950">
        <ServiceGrid />
      </Section>
      <ProcessFlow />
      <CtaBand />
    </>
  );
}
