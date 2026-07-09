import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.home.en;

export default function Page() {
  return <HomePage />;
}
