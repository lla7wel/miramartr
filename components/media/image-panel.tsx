import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImagePanel({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-steel-700 bg-steel-950 shadow-[0_22px_55px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/35 via-transparent to-white/5" />
    </div>
  );
}
