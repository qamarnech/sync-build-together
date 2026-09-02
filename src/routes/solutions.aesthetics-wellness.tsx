import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";

const pillar = SOLUTION_PILLARS[4]!;

export const Route = createFileRoute("/solutions/aesthetics-wellness")({
  head: () => ({
    meta: [
      { title: "Aesthetics & Wellness | MR Longevity Solutions" },
      { name: "description", content: "Skin-health programmes, regenerative aesthetics, personalised aesthetic programmes and non-clinical wellness interventions." },
      { property: "og:title", content: "Aesthetics & Wellness | MR Longevity Solutions" },
      { property: "og:description", content: "Skin-health programmes, regenerative aesthetics, personalised aesthetic programmes and non-clinical wellness interventions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
