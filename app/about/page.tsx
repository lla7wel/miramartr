import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.about.en;

export default function Page() {
  return <AboutPage />;
}
