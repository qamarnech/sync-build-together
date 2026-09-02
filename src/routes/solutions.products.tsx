import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("products");

export const Route = createFileRoute("/solutions/products")({
  head: () => ({
    meta: [
      { title: "Products | MR Longevity Solutions" },
      { name: "description", content: "Diagnostics and tests alongside wellness and personal-care products, presented with evidence status and intended use." },
      { property: "og:title", content: "Products | MR Longevity Solutions" },
      { property: "og:description", content: "Diagnostics and tests alongside wellness and personal-care products, presented with evidence status and intended use." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
