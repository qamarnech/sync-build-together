import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { COLLABORATE_PILLARS } from "@/lib/collaborate-pillars";

const pillar = COLLABORATE_PILLARS[3]!;

export const Route = createFileRoute("/collaborate/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities | MR Longevity Collaborate" },
      { name: "description", content: "Open calls for research collaboration, project participation, funding, investment, technology and clinical partnerships." },
      { property: "og:title", content: "Opportunities | MR Longevity Collaborate" },
      { property: "og:description", content: "Practical ways to get involved across the healthy longevity mission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { name: "twitter:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { property: "og:url", content: "https://www.longevitymr.com/collaborate/opportunities" },
    ],
    links: [{ rel: "canonical", href: "https://www.longevitymr.com/collaborate/opportunities" }],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/collaborate" sequence={COLLABORATE_PILLARS.map((p) => p.name)} />
  ),
});
