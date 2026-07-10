import type { PropsWithChildren } from "react";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden bg-graphite-950 text-cream">
        <div className="site-depth" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
