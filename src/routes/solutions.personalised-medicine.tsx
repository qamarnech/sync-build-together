import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("personalised-medicine");
const description =
  "Customised health management for individuals and families, precision services to international standards, integrated rejuvenation and one-to-one care from an international expert team.";

export const Route = createFileRoute("/solutions/personalised-medicine")({
  head: () => ({
    meta: [
      { title: "High-End Personalized Medicine | MR Longevity Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "High-End Personalized Medicine | MR Longevity Solutions" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
