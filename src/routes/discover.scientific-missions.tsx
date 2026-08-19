import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[2]!;

export const Route = createFileRoute("/discover/scientific-missions")({
  head: () => ({
    meta: [
      { title: "Scientific Missions — MR Longevity Discover" },
      { name: "description", content: "The major scientific challenges MR Longevity is organised around, from cellular senescence and biological age to AI models of ageing and population impact." },
      { property: "og:title", content: "Scientific Missions — MR Longevity Discover" },
      { property: "og:description", content: "The collaborative scientific missions advancing healthy longevity across research, clinics and industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
