import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { SOLUTION_PILLARS, solutionPillar } from "@/lib/solutions-pillars";
import logoAsset from "@/assets/mr-longevity-logo.png.asset.json";

const pillar = solutionPillar("products");

type Product = {
  name: string;
  category: "Diagnostics and Tests" | "Wellness and Personal Care";
  body: string;
  markers?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Epigenetic Senescence Detection",
    category: "Diagnostics and Tests",
    body: "A biological-age test based on epigenetic markers, reading DNA methylation patterns associated with ageing and cellular senescence.",
    markers: "Epigenetic methylation",
  },
  {
    name: "Inflammatory Senescence Detection",
    category: "Diagnostics and Tests",
    body: "A test measuring inflammation-related ageing markers, quantifying chronic low-grade inflammation linked to the senescence-associated secretory phenotype.",
    markers: "Inflammatory SASP markers",
  },
  {
    name: "Cellular Senescence Detection",
    category: "Diagnostics and Tests",
    body: "A test measuring cellular ageing and senescence markers, identifying senescent cell burden through validated molecular signatures.",
    markers: "Cellular senescence",
  },
  {
    name: "Metabolic Senescence Detection",
    category: "Diagnostics and Tests",
    body: "A test measuring metabolic ageing markers, assessing metabolic decline that accompanies cellular senescence and biological ageing.",
    markers: "Metabolic ageing",
  },
  {
    name: "MetaAge Biological Age Test",
    category: "Diagnostics and Tests",
    body: "A combined biological-age readout that integrates the senescence panels above into a single baseline used to set and track a personal healthspan plan.",
    markers: "Integrated biological age",
  },
  {
    name: "Wellness and Personal Care",
    category: "Wellness and Personal Care",
    body: "Everyday skin-health and recovery products supporting daily longevity routines alongside the diagnostic programme.",
  },
];

export const Route = createFileRoute("/solutions/products")({
  head: () => ({
    meta: [
      { title: "Products | MR Longevity Solutions" },
      { name: "description", content: "Diagnostics and tests alongside wellness and personal-care products, presented with evidence status and intended use." },
      { property: "og:title", content: "Products | MR Longevity Solutions" },
      { property: "og:description", content: "Diagnostics and tests alongside wellness and personal-care products, presented with evidence status and intended use." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PillarPage pillar={pillar} backTo="/solutions" sequence={SOLUTION_PILLARS.map((p) => p.name)}>
      <Section tone="white">
        <SectionHead
          kicker="Product range"
          title="Products carrying the MR Longevity mark"
          intro="Each product is presented with its category, intended use and evidence status."
          align="left"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <div className="flex h-28 items-center justify-center rounded-xl bg-white">
                <img
                  src={logoAsset.url}
                  alt={`MR Longevity logo on ${product.name}`}
                  loading="lazy"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg text-navy">{product.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{product.body}</p>
              <div className="mt-4">
                <Tag>{product.category}</Tag>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PillarPage>
  ),
});
