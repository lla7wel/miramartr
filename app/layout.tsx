import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import BrandBackground from "../components/BrandBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Miramar - Energy & Industrial Equipment",
  description:
    "Miramar is an Istanbul-based supplier of energy and industrial equipment, serving oil & gas, power, and infrastructure clients with compliant, project-ready solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-slate-950 text-slate-50 antialiased scroll-smooth relative`}
      >
        <BrandBackground />
        <LanguageProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
