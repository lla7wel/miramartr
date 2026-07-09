import Link from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: "primary" | "secondary" | "ghost";
    icon?: boolean;
  }
>;

const variants = {
  primary:
    "bg-brand-red text-white shadow-[0_16px_40px_rgba(184,32,42,0.3)] hover:bg-brand-red-dark",
  secondary:
    "border border-steel-600/80 bg-steel-900/70 text-cream hover:border-steel-400 hover:bg-steel-800",
  ghost: "text-cream hover:bg-white/8",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  icon = true,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  const body = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950",
    variants[variant],
    className
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} rel="noreferrer noopener" target="_blank" {...props}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {body}
    </Link>
  );
}
