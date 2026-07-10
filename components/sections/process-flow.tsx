"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Card, IconBadge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { processSteps, uiCopy } from "@/content/site";

export function ProcessFlow() {
  const { lang } = useLanguage();
  const copy = uiCopy[lang];

  return (
    <Section className="bg-graphite-900/75">
      <SectionHeader
        eyebrow={copy.projectFlow}
        title={
          lang === "tr"
            ? "Kapsamdan teslimata kontrollu akis."
            : "A controlled path from scope to handover."
        }
        body={
          lang === "tr"
            ? "Miramar, teklif ve saha uygulamalarini belge, onay, teslimat ve uygulama adimlariyla izlenebilir hale getirir."
            : "Miramar keeps RFQ and site work traceable through documentation, approvals, delivery planning, and closeout basics."
        }
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.title.en} delay={index * 0.05}>
            <Card className="h-full p-5">
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={step.icon} />
                <span className="font-mono text-xs text-steel-500">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cream">{step.title[lang]}</h3>
              <p className="mt-3 text-sm leading-6 text-steel-300">{step.body[lang]}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
