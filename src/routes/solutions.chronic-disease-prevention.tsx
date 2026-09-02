import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("chronic-disease-prevention");
const description =
  "Early detection of cardiovascular and neurodegenerative disease, tumour risk assessment, immune and inflammation management, glycan-based prediction and precise blood biomarker monitoring.";

export const Route = createFileRoute("/solutions/chronic-disease-prevention")({
  head: () => ({
    meta: [
      { title: "Chronic & Major Disease Prevention | MR Longevity Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Chronic & Major Disease Prevention | MR Longevity Solutions" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
