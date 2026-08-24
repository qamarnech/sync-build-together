import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const pillar = ECOSYSTEM_PILLARS[3]!;

export const Route = createFileRoute("/ecosystem/investment-commercial")({
  head: () => ({
    meta: [
      { title: "Investment & Commercial | MR Longevity Mission" },
      { name: "description", content: "Capital, business models, market access and adoption that scale healthy longevity solutions." },
      { property: "og:title", content: "Investment & Commercial | MR Longevity Mission" },
      { property: "og:description", content: "How funding, partnerships and market access carry validated longevity solutions to scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/ecosystem" sequence={ECOSYSTEM_PILLARS.map((p) => p.name)} />,
});
