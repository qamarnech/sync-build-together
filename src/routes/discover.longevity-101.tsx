import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[4]!;

export const Route = createFileRoute("/discover/longevity-101")({
  head: () => ({
    meta: [
      { title: "Longevity 101 — MR Longevity" },
      { name: "description", content: "A plain-language introduction to healthy longevity: the vocabulary, what the evidence supports today, and how to judge a claim." },
      { property: "og:title", content: "Longevity 101 — MR Longevity" },
      { property: "og:description", content: "Start here: core terms, current evidence and how to tell strong claims from weak ones." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
