import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const pillar = ECOSYSTEM_PILLARS[0]!;

export const Route = createFileRoute("/ecosystem/science-discovery")({
  head: () => ({
    meta: [
      { title: "Science & Discovery — MR Longevity Ecosystem" },
      { name: "description", content: "Ageing biology, target identification, biomarkers and translational research in the healthy longevity ecosystem." },
      { property: "og:title", content: "Science & Discovery — MR Longevity Ecosystem" },
      { property: "og:description", content: "How discovery science generates the targets, biomarkers and knowledge the longevity ecosystem depends on." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/ecosystem" />,
});
