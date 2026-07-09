"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, FileCheck2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ButtonLink } from "@/components/ui/button";
import { Card, IconBadge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { HeroVisual } from "@/components/sections/hero-visual";
import { ProcessFlow } from "@/components/sections/process-flow";
import { ServiceGrid } from "@/components/sections/service-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { homePage, navItems, operatingPrinciples, uiCopy } from "@/content/site";

const overviewIcons = [Building2, FileCheck2, ShieldCheck];

export function HomePage() {
  const { lang } = useLanguage();
  const copy = homePage[lang];
  const ui = uiCopy[lang];

  return (
    <>
      <section className="blueprint-bg border-b border-steel-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{copy.badge}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-cream sm:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-steel-200">{copy.lead}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-steel-300">{copy.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">{ui.primaryCta}</ButtonLink>
              <ButtonLink href="/equipment" variant="secondary">
                {ui.secondaryCta}
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {copy.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-steel-700 bg-steel-950/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-steel-400">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-cream">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Section className="bg-graphite-950">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="Overview" title={copy.overviewTitle} body={copy.overviewBody} />
          <div className="grid gap-4 sm:grid-cols-2">
            {navItems.slice(1).map((item, index) => {
              const Icon = overviewIcons[index % overviewIcons.length];
              return (
                <Reveal key={item.href} delay={index * 0.04}>
                  <Link
                    href={item.href}
                    className="industrial-card group block h-full rounded-lg border border-steel-700 bg-steel-950/72 p-5 transition hover:border-brand-red/55"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <IconBadge icon={Icon} />
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-5 w-5 text-steel-500 transition group-hover:text-brand-amber"
                      />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-cream">{item.label[lang]}</h2>
                    <p className="mt-3 text-sm leading-6 text-steel-300">
                      {lang === "tr"
                        ? "Miramar kapsamlarini daha net ve profesyonel bir yapida inceleyin."
                        : "Explore Miramar coverage in a clearer, more professional structure."}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-graphite-900/75">
        <SectionHeader
          eyebrow={ui.featuredCoverage}
          title={
            lang === "tr"
              ? "Tedarik, MEP ve saha koordinasyonu tek akista."
              : "Supply, MEP, and site coordination in one flow."
          }
          body={
            lang === "tr"
              ? "Hizmet yapisi; malzeme tedariğini, elektrik ve sihhi tesisat kapsamlarini, pompa paketlerini ve teslim koordinasyonunu birlikte anlatir."
              : "The service structure connects material supply, electrical and plumbing scopes, pump packages, and delivery coordination."
          }
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </Section>

      <ProcessFlow />

      <Section className="bg-graphite-900/75">
        <SectionHeader
          eyebrow={lang === "tr" ? "Neden Miramar" : "Why Miramar"}
          title={
            lang === "tr"
              ? "Insaat ekipleri icin daha net kapsam kontrolu."
              : "Sharper scope control for construction teams."
          }
          body={
            lang === "tr"
              ? "Miramar'in gucu abartili iddialar degil; kapsam netligi, belge disiplini, guvenli uygulama ve takvime uygun teslimdir."
              : "Miramar's value is not inflated claims; it is scope clarity, documentation discipline, safe execution, and schedule-aware delivery."
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {operatingPrinciples.map((principle, index) => (
            <Reveal key={principle.title.en} delay={index * 0.04}>
              <Card className="h-full p-5">
                <IconBadge icon={principle.icon} />
                <h3 className="mt-5 text-lg font-semibold text-cream">{principle.title[lang]}</h3>
                <p className="mt-3 text-sm leading-6 text-steel-300">{principle.body[lang]}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
