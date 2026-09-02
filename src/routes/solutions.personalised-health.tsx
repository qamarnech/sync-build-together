import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";

const pillar = SOLUTION_PILLARS[3]!;

export const Route = createFileRoute("/solutions/personalised-health")({
  head: () => ({
    meta: [
      { title: "Personalised Health | MR Longevity Solutions" },
      { name: "description", content: "Individual biological-age assessment, personalised planning and biomarker-informed programmes coordinated with qualified professionals." },
      { property: "og:title", content: "Personalised Health | MR Longevity Solutions" },
      { property: "og:description", content: "Individual biological-age assessment, personalised planning and biomarker-informed programmes coordinated with qualified professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
