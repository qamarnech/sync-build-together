import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("longevity-health-management");
const description =
  "Precise biological-age assessment across ten body systems, early chronic-disease screening, the MetaAge test and intervention plans combining nutrition, exercise and medication.";

export const Route = createFileRoute("/solutions/longevity-health-management")({
  head: () => ({
    meta: [
      { title: "Longevity Health Management | MR Longevity Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Longevity Health Management | MR Longevity Solutions" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { name: "twitter:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { property: "og:url", content: "https://www.longevitymr.com/solutions/longevity-health-management" },
    ],
    links: [{ rel: "canonical", href: "https://www.longevitymr.com/solutions/longevity-health-management" }],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
