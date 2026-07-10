"use client";

import { ContactForm } from "@/components/sections/contact-form";
import { ImagePanel } from "@/components/media/image-panel";
import { Card, IconBadge } from "@/components/ui/card";
import { PageHero, Section } from "@/components/ui/section";
import { useLanguage } from "@/components/LanguageProvider";
import { contactCards, contactIntake, pages } from "@/content/site";
import { MAP_LINK } from "@/lib/constants";

export function ContactPage() {
  const { lang } = useLanguage();
  const copy = pages.contact[lang];

  return (
    <>
      <PageHero eyebrow={copy.badge} title={copy.title} body={copy.lead} />
      <Section className="bg-graphite-950">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <Card className="p-5 sm:p-6">
            <ContactForm />
          </Card>
          <div className="space-y-5">
            <ImagePanel
              src="/miramar-contact-office.png"
              alt="Miramar registered office"
              className="min-h-[280px]"
              priority
            />
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-cream">{copy.typical}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-steel-300">
                {contactIntake[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite-900/75">
        <div className="grid gap-4 md:grid-cols-2">
          {contactCards.map((card) => (
            <Card key={card.title.en} className="p-5">
              <IconBadge icon={card.icon} />
              <h2 className="mt-5 text-xl font-semibold text-cream">{card.title[lang]}</h2>
              <p className="mt-3 text-sm leading-6 text-steel-300">{card.body[lang]}</p>
            </Card>
          ))}
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex rounded-md border border-steel-700 bg-steel-950 px-4 py-2.5 text-sm font-bold text-cream"
        >
          {lang === "tr" ? "Haritada ac" : "Open in Maps"}
        </a>
      </Section>
    </>
  );
}
