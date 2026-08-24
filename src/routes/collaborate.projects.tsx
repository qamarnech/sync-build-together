import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { COLLABORATE_PILLARS } from "@/lib/collaborate-pillars";

const pillar = COLLABORATE_PILLARS[0]!;

export const Route = createFileRoute("/collaborate/projects")({
  head: () => ({
    meta: [
      { title: "Projects | MR Longevity Collaborate" },
      { name: "description", content: "Current and emerging longevity projects: aims, teams, stage and where collaborators are needed." },
      { property: "og:title", content: "Projects | MR Longevity Collaborate" },
      { property: "og:description", content: "Research, clinical, technology, public health and commercial longevity projects open to collaborators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/collaborate" sequence={COLLABORATE_PILLARS.map((p) => p.name)} />
  ),
});
