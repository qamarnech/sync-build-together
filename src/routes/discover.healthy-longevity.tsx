import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";

const pillar = DISCOVER_PILLARS[0]!;

export const Route = createFileRoute("/discover/healthy-longevity")({
  head: () => ({
    meta: [
      { title: "Healthy Longevity | MR Longevity Discover" },
      { name: "description", content: "Healthspan foundations and precision longevity: the physical, metabolic, cognitive and emotional capacities that allow people to live well as they age." },
      { property: "og:title", content: "Healthy Longevity | MR Longevity Discover" },
      { property: "og:description", content: "Explore the foundations of healthspan and how precision longevity personalises prevention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { name: "twitter:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { property: "og:url", content: "https://www.longevitymr.com/discover/healthy-longevity" },
    ],
    links: [{ rel: "canonical", href: "https://www.longevitymr.com/discover/healthy-longevity" }],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)} />,
});
