import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={cn("relative border-b border-steel-800/70", className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {body ? <p className="mt-4 text-pretty text-base leading-7 text-steel-200">{body}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Section className="blueprint-bg bg-graphite-950">
      <SectionHeader eyebrow={eyebrow} title={title} body={body} />
    </Section>
  );
}
