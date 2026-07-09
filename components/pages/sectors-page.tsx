"use client";

import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/sections/process-flow";
import { ImagePanel } from "@/components/media/image-panel";
import { Card, IconBadge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { PageHero, Section } from "@/components/ui/section";
import { useLanguage } from "@/components/LanguageProvider";
import { pages, sectors } from "@/content/site";

export function SectorsPage() {
  const { lang } = useLanguage();
  const copy = pages.sectors[lang];

  return (
    <>
      <PageHero eyebrow={copy.badge} title={copy.title} body={copy.lead} />
      <Section className="bg-graphite-950">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <Reveal key={sector.title.en} delay={index * 0.04}>
              <Card className="h-full overflow-hidden">
                <ImagePanel
                  src={sector.image}
                  alt={sector.title[lang]}
                  className="h-44 rounded-none border-x-0 border-t-0"
                />
                <div className="p-5">
                  <IconBadge icon={sector.icon} />
                  <h2 className="mt-5 text-xl font-semibold text-cream">{sector.title[lang]}</h2>
                  <p className="mt-3 text-sm leading-6 text-steel-300">{sector.body[lang]}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
      <ProcessFlow />
      <CtaBand />
    </>
  );
}
