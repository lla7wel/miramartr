import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.contact.en;

export default function Page() {
  return <ContactPage />;
}
