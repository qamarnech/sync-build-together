import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";

const pillar = solutionPillar("regenerative-medicine");

export const Route = createFileRoute("/solutions/regenerative-medicine")({
  head: () => ({
    meta: [
      { title: "Regenerative Medicine | MR Longevity Solutions" },
      { name: "description", content: "Regenerative medicine research, cell-therapy development, iPSC technology, tissue repair and clinical research collaboration." },
      { property: "og:title", content: "Regenerative Medicine | MR Longevity Solutions" },
      { property: "og:description", content: "Regenerative medicine research, cell-therapy development, iPSC technology, tissue repair and clinical research collaboration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { name: "twitter:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { property: "og:url", content: "https://www.longevitymr.com/solutions/regenerative-medicine" },
    ],
    links: [{ rel: "canonical", href: "https://www.longevitymr.com/solutions/regenerative-medicine" }],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)} />
  ),
});
