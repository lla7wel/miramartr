import type { Metadata } from "next";
import { EquipmentPage } from "@/components/pages/equipment-page";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = metadataCopy.equipment.en;

export default function Page() {
  return <EquipmentPage />;
}
