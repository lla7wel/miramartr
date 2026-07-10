import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.services.en;

export default function Page() {
  return <ServicesPage />;
}
