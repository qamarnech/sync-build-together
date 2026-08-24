import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const pillar = ECOSYSTEM_PILLARS[2]!;

export const Route = createFileRoute("/ecosystem/manufacturing-supply")({
  head: () => ({
    meta: [
      { title: "Manufacturing & Supply | MR Longevity Mission" },
      { name: "description", content: "Scale-up, quality systems, supply chains and cost reduction that make validated longevity solutions available." },
      { property: "og:title", content: "Manufacturing & Supply | MR Longevity Mission" },
      { property: "og:description", content: "Producing, distributing and pricing healthy longevity solutions so they reach people reliably." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/ecosystem" sequence={ECOSYSTEM_PILLARS.map((p) => p.name)} />,
});
