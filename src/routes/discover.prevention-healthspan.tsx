import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[3]!;

export const Route = createFileRoute("/discover/prevention-healthspan")({
  head: () => ({
    meta: [
      { title: "Prevention & Healthspan — MR Longevity" },
      { name: "description", content: "Early detection, risk stratification, lifestyle medicine and population prevention — acting before age-related disease is established." },
      { property: "og:title", content: "Prevention & Healthspan — MR Longevity" },
      { property: "og:description", content: "Detecting change earlier and intervening while the trajectory can still be altered." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
