import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { COLLABORATE_PILLARS } from "@/lib/collaborate-pillars";

const pillar = COLLABORATE_PILLARS[1]!;

export const Route = createFileRoute("/collaborate/partners")({
  head: () => ({
    meta: [
      { title: "Partners | MR Longevity Collaborate" },
      { name: "description", content: "Organisations contributing capabilities to the longevity mission, with expertise, projects and collaboration interests." },
      { property: "og:title", content: "Partners | MR Longevity Collaborate" },
      { property: "og:description", content: "Universities, healthcare organisations, companies, manufacturers, investors and public bodies in the mission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/collaborate" sequence={COLLABORATE_PILLARS.map((p) => p.name)} />
  ),
});
