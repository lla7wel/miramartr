import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 px-4 py-5 sm:px-6 sm:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]">
            <div className="space-y-3">
            <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-2xl">
                  <Image
                    src="/miramar-logo.png"
                    alt="Miramar logo"
                    fill
                    className="object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-200">
                    MIRAMAR
                  </p>
                  <p className="text-xs text-slate-400">
                    Energy &amp; Industrial Equipment
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300">
                Energy &amp; industrial equipment for oil &amp; gas, power, and infrastructure projects.
              </p>

              <div className="space-y-1 text-xs text-slate-400">
                <p className="font-semibold text-slate-300">Head office</p>
                <p>Ergenekon, Halaskargazi Cd., Şişli/İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
                    QUICK LINKS
                  </p>
                  <nav className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
                    <Link href="/about" className="hover:text-slate-50">
                      About
                    </Link>
                    <Link href="/services" className="hover:text-slate-50">
                      Services
                    </Link>
                    <Link href="/sectors" className="hover:text-slate-50">
                      Sectors
                    </Link>
                    <Link href="/equipment" className="hover:text-slate-50">
                      Equipment
                    </Link>
                    <Link href="/contact" className="hover:text-slate-50">
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-xl shadow-black/50">
                <div className="h-40 w-full">
                  <iframe
                    title="Miramar head office on Google Maps"
                    src="https://www.google.com/maps?q=Ergenekon,+Halaskargazi+Cd.,+Şişli/İstanbul,+Türkiye&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-3 py-2 text-[11px] text-slate-200">
                  <span className="line-clamp-2">
                    Ergenekon, Halaskargazi Cd., Şişli/İstanbul, Türkiye
                  </span>
                  <a
                    href="https://www.google.com/maps/place/Ergenekon,+Halaskargazi+Cd.,+Şişli/İstanbul,+Türkiye"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-semibold text-slate-50 shadow hover:bg-slate-700"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Miramar. All rights reserved.</p>
            <p className="text-slate-500">Built for institutional energy &amp; industrial clients.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
