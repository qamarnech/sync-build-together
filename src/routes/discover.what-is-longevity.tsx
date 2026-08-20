import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[0]!;

export const Route = createFileRoute("/discover/what-is-longevity")({
  head: () => ({
    meta: [
      { title: "What is Longevity? — MR Longevity" },
      { name: "description", content: "Lifespan, healthspan, biological age and functional ability — what longevity actually means and which measures matter." },
      { property: "og:title", content: "What is Longevity? — MR Longevity" },
      { property: "og:description", content: "The difference between living longer and living well for longer, explained." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
