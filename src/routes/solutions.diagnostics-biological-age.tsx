import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("diagnostics-biological-age");

export const Route = createFileRoute("/solutions/diagnostics-biological-age")({
  head: () => ({
    meta: [
      { title: "Diagnostics & Biological Age | MR Longevity Solutions" },
      { name: "description", content: "Epigenetic, inflammatory, cellular and metabolic senescence detection plus the MetaAge biological age test." },
      { property: "og:title", content: "Diagnostics & Biological Age | MR Longevity Solutions" },
      { property: "og:description", content: "Epigenetic, inflammatory, cellular and metabolic senescence detection plus the MetaAge biological age test." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
