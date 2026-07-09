"use client";

import { Card, IconBadge } from "@/components/ui/card";
import { ImagePanel } from "@/components/media/image-panel";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { servicePillars } from "@/content/site";

export function ServiceGrid() {
  const { lang } = useLanguage();

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {servicePillars.map((pillar, index) => (
        <Reveal key={pillar.title.en} delay={index * 0.05}>
          <Card className="flex h-full flex-col overflow-hidden">
            <ImagePanel
              src={pillar.image}
              alt={pillar.title[lang]}
              className="h-48 rounded-none border-x-0 border-t-0"
              priority={index === 0}
            />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-4">
                <IconBadge icon={pillar.icon} />
                <span className="rounded bg-brand-amber px-2 py-1 text-xs font-black uppercase tracking-[0.14em] text-graphite-950">
                  {pillar.tag[lang]}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-cream">{pillar.title[lang]}</h3>
              <p className="mt-3 text-sm leading-6 text-steel-300">{pillar.body[lang]}</p>
              <ul className="mt-5 space-y-2 text-sm text-steel-200">
                {pillar.bullets[lang].map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
