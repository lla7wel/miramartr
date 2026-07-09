"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { ImagePanel } from "@/components/media/image-panel";
import { Card, IconBadge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { equipmentCategories, equipmentItems, pages, type EquipmentCategory } from "@/content/site";
import { cn } from "@/lib/utils";

type Filter = EquipmentCategory | "all";

export function EquipmentFilter() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const copy = pages.equipment[lang];

  const filteredItems = useMemo(
    () => equipmentItems.filter((item) => filter === "all" || item.category === filter),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={copy.title}>
        <button
          type="button"
          role="tab"
          aria-selected={filter === "all"}
          onClick={() => setFilter("all")}
          className={filterClass(filter === "all")}
        >
          {copy.all}
        </button>
        {equipmentCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={filter === category.id}
            onClick={() => setFilter(category.id)}
            className={filterClass(filter === category.id)}
          >
            {category.label[lang]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Reveal key={`${item.category}-${item.title.en}`} delay={index * 0.04}>
            <Card className="h-full overflow-hidden">
              <ImagePanel
                src={item.image}
                alt={item.title[lang]}
                className="h-44 rounded-none border-x-0 border-t-0"
              />
              <div className="p-5">
                <IconBadge icon={item.icon} />
                <h2 className="mt-5 text-xl font-semibold text-cream">{item.title[lang]}</h2>
                <p className="mt-3 text-sm leading-6 text-steel-300">{item.body[lang]}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function filterClass(active: boolean) {
  return cn(
    "min-h-10 rounded-md border px-3 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber",
    active
      ? "border-brand-red bg-brand-red text-white"
      : "border-steel-700 bg-steel-950 text-steel-200 hover:border-steel-500"
  );
}
