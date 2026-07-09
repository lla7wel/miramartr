import type { ComponentType, PropsWithChildren, SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "industrial-card rounded-lg border border-steel-700/70 bg-steel-950/72 shadow-[0_22px_55px_rgba(0,0,0,0.38)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  className,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-red/35 bg-brand-red/12 text-brand-red",
        className
      )}
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}
