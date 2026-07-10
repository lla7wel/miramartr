import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { metadataCopy } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: metadataCopy.home.en.title,
    template: "%s | Miramar",
  },
  description: metadataCopy.home.en.description,
  applicationName: "Miramar",
  authors: [{ name: "Miramar" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Miramar",
    title: metadataCopy.home.en.title,
    description: metadataCopy.home.en.description,
    images: [
      {
        url: "/miramar-3d-hero.png",
        width: 1200,
        height: 630,
        alt: "Miramar construction materials and site services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataCopy.home.en.title,
    description: metadataCopy.home.en.description,
    images: ["/miramar-3d-hero.png"],
  },
  icons: {
    icon: ["/miramar-favicon.png", "/favicon.ico"],
    shortcut: ["/miramar-favicon.png", "/favicon.ico"],
    apple: ["/miramar-favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
