import type { Metadata } from "next";
import { SectorsPage } from "@/components/pages/sectors-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.sectors.en;

export default function Page() {
  return <SectorsPage />;
}
