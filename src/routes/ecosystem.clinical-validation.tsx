import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const pillar = ECOSYSTEM_PILLARS[1]!;

export const Route = createFileRoute("/ecosystem/clinical-validation")({
  head: () => ({
    meta: [
      { title: "Clinical & Validation — MR Longevity Ecosystem" },
      { name: "description", content: "Trials, healthspan endpoints, diagnostics validation and regulatory pathways that prove longevity interventions work." },
      { property: "og:title", content: "Clinical & Validation — MR Longevity Ecosystem" },
      { property: "og:description", content: "How promising longevity science earns clinical trust through rigorous evidence and responsible practice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PillarPage pillar={pillar} backTo="/ecosystem" sequence={ECOSYSTEM_PILLARS.map((p) => p.name)} />,
});
