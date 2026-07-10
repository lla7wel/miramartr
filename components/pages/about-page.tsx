"use client";

import { ButtonLink } from "@/components/ui/button";
import { Card, IconBadge } from "@/components/ui/card";
import { ImagePanel } from "@/components/media/image-panel";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { useLanguage } from "@/components/LanguageProvider";
import { operatingPrinciples, pages } from "@/content/site";
import { REGISTERED_ADDRESS } from "@/lib/constants";

export function AboutPage() {
  const { lang } = useLanguage();
  const copy = pages.about[lang];

  return (
    <>
      <Section className="blueprint-bg bg-graphite-950">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <SectionHeader eyebrow={copy.badge} title={copy.title} body={copy.lead} />
          <ImagePanel
            src={copy.image}
            alt={copy.title}
            className="min-h-[320px] lg:min-h-[440px]"
            priority
          />
        </div>
        <p className="mt-8 max-w-4xl text-base leading-7 text-steel-300">{copy.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">{copy.cta}</ButtonLink>
          <ButtonLink href="/equipment" variant="secondary">
            {copy.secondaryCta}
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-graphite-900/75">
        <SectionHeader
          eyebrow={lang === "tr" ? "Calisma prensipleri" : "Operating principles"}
          title={
            lang === "tr"
              ? "Saha ekiplerinin ihtiyac duydugu netlik."
              : "The clarity site teams need."
          }
          body={
            lang === "tr"
              ? "Mevcut sirket bilgileri korunur; sunum, kapsam ve dokumantasyon yapisi profesyonel hale getirilir."
              : "Existing company facts are preserved while the presentation, scope, and documentation structure become more professional."
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {operatingPrinciples.map((principle, index) => (
            <Reveal key={principle.title.en} delay={index * 0.04}>
              <Card className="h-full p-5">
                <IconBadge icon={principle.icon} />
                <h2 className="mt-5 text-lg font-semibold text-cream">{principle.title[lang]}</h2>
                <p className="mt-3 text-sm leading-6 text-steel-300">{principle.body[lang]}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite-950">
        <Card className="grid gap-6 p-6 lg:grid-cols-[0.65fr_1fr] lg:p-8">
          <div>
            <p className="eyebrow">{lang === "tr" ? "Kayitli ofis" : "Registered office"}</p>
            <h2 className="mt-3 text-2xl font-semibold text-cream">Miramar</h2>
          </div>
          <p className="text-base leading-7 text-steel-200">{REGISTERED_ADDRESS}</p>
        </Card>
      </Section>

      <CtaBand />
    </>
  );
}
