import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[1]!;

export const Route = createFileRoute("/discover/biology-of-aging")({
  head: () => ({
    meta: [
      { title: "Biology of Aging — MR Longevity Discover" },
      { name: "description", content: "The mechanisms of ageing — cellular senescence, biological age, metabolism, immunity, brain and musculoskeletal health — and how they can be influenced." },
      { property: "og:title", content: "Biology of Aging — MR Longevity Discover" },
      { property: "og:description", content: "Understand the biology of ageing and the research priorities turning mechanistic insight into interventions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
