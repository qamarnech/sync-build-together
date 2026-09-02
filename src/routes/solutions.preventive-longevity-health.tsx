import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";

const pillar = SOLUTION_PILLARS[1]!;

export const Route = createFileRoute("/solutions/preventive-longevity-health")({
  head: () => ({
    meta: [
      { title: "Preventive & Longevity Health | MR Longevity Solutions" },
      { name: "description", content: "Disease risk assessment, biomarker monitoring and personal healthspan programmes covering nutrition, movement, sleep and recovery." },
      { property: "og:title", content: "Preventive & Longevity Health | MR Longevity Solutions" },
      { property: "og:description", content: "Disease risk assessment, biomarker monitoring and personal healthspan programmes covering nutrition, movement, sleep and recovery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
