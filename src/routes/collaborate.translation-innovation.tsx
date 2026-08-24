import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { COLLABORATE_PILLARS } from "@/lib/collaborate-pillars";

const pillar = COLLABORATE_PILLARS[2]!;

export const Route = createFileRoute("/collaborate/translation-innovation")({
  head: () => ({
    meta: [
      { title: "Translation & Innovation | MR Longevity Collaborate" },
      { name: "description", content: "The pathway moving longevity science from discovery through validation, technology, manufacturing and adoption." },
      { property: "og:title", content: "Translation & Innovation | MR Longevity Collaborate" },
      { property: "og:description", content: "How research, clinical validation, AI, manufacturing and commercialisation connect into real-world application." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/collaborate" sequence={COLLABORATE_PILLARS.map((p) => p.name)} />
  ),
});
