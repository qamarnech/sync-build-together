import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[2]!;

export const Route = createFileRoute("/discover/science-of-ageing")({
  head: () => ({
    meta: [
      { title: "Science of Ageing — MR Longevity" },
      { name: "description", content: "Cellular senescence, biological age, metabolic and immune ageing, brain and musculoskeletal longevity, and AI models of ageing." },
      { property: "og:title", content: "Science of Ageing — MR Longevity" },
      { property: "og:description", content: "The mechanisms of ageing and how they can be measured and influenced." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
