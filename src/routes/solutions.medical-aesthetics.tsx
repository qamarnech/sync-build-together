import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("medical-aesthetics");
const description =
  "Skin repair and facial rejuvenation, private health and tissue regeneration, and customised anti-ageing services blending medical aesthetics with regenerative medicine.";

export const Route = createFileRoute("/solutions/medical-aesthetics")({
  head: () => ({
    meta: [
      { title: "Medical Aesthetics & Anti-Aging Aesthetics | MR Longevity Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Medical Aesthetics & Anti-Aging Aesthetics | MR Longevity Solutions" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
