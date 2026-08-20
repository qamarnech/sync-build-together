import type { Pillar } from "@/components/site/PillarPage";

export type DiscoverPillar = Pillar & {
  to:
    | "/discover/healthy-longevity"
    | "/discover/biology-of-aging"
    | "/discover/scientific-missions";
};

export const DISCOVER_PILLARS: DiscoverPillar[] = [
  {
    slug: "healthy-longevity",
    to: "/discover/healthy-longevity",
    name: "Healthy Longevity",
    kicker: "Healthy Longevity",
    num: "I",
    title: "Protecting and improving the capacity to live well as we age",
    intro:
      "Healthy longevity is about more than lifespan. It is the physical, metabolic, cognitive and emotional resilience that allows people to keep living well as they age.",
    focus: [
      { title: "Movement", body: "Strength, cardiovascular fitness, mobility and physical resilience across the lifespan." },
      { title: "Nutrition & Metabolic Health", body: "Nutrition, metabolic function, healthy body composition and metabolic resilience." },
      { title: "Sleep & Recovery", body: "Sleep quality, circadian health, recovery and restoration." },
      { title: "Emotional Health & Social Connection", body: "Stress resilience, relationships, purpose and social connection." },
      { title: "Precision Longevity", body: "Personalising prevention using biomarkers, diagnostics, digital health, nutrition and therapeutics where appropriate." },
    ],
    participants: [
      "Individuals",
      "Clinicians",
      "Public health professionals",
      "Nutritionists",
      "Fitness professionals",
      "Mental health practitioners",
      "Digital health innovators",
    ],
    outputs: [
      "Personalised prevention plans",
      "Healthspan assessments",
      "Lifestyle interventions",
      "Digital health programmes",
      "Population health guidance",
    ],
    handoff:
      "Healthy longevity foundations inform biology of ageing research and set priorities for scientific missions.",
  },
  {
    slug: "biology-of-aging",
    to: "/discover/biology-of-aging",
    name: "Biology of Aging",
    kicker: "Biology of Aging",
    num: "II",
    title: "Understanding the mechanisms of ageing and how they can be influenced",
    intro:
      "Ageing is not a single process. It is the interplay of cellular senescence, metabolism, immunity, repair, brain health and musculoskeletal decline — and the systems that coordinate them.",
    focus: [
      { title: "Cellular Senescence", body: "Senescent cells and their effects on tissue function and ageing." },
      { title: "Biological Age", body: "Measuring biological ageing and response to interventions." },
      { title: "Metabolic Ageing", body: "Metabolism, mitochondrial health and metabolic resilience." },
      { title: "Immune Ageing", body: "Immune-system change across the lifespan and its consequences." },
      { title: "Brain Longevity", body: "Cognitive resilience and neurodegeneration." },
      { title: "Musculoskeletal Longevity", body: "Muscle, bone, mobility and independence." },
      { title: "Regenerative Medicine", body: "Maintaining and restoring function through repair and regeneration." },
      { title: "AI Models of Ageing", body: "Computation for complex health trajectories and ageing biology." },
    ],
    participants: [
      "Research groups",
      "Biologists",
      "Computational biologists",
      "Universities",
      "Research institutes",
      "Biobanks",
      "Technology platforms",
    ],
    outputs: [
      "Validated targets",
      "Biomarker panels",
      "Publications & datasets",
      "Research collaborations",
      "IP and spin-out potential",
    ],
    handoff:
      "Biology of ageing insights feed into scientific missions and guide translational research priorities.",
  },
  {
    slug: "scientific-missions",
    to: "/discover/scientific-missions",
    name: "Scientific Missions",
    kicker: "Scientific Missions",
    num: "III",
    title: "The challenges the ecosystem is organised around",
    intro:
      "Rather than a directory of researchers, MR Longevity is organised around major scientific challenges where collaboration can meaningfully advance healthy longevity.",
    focus: [
      { title: "Cellular Senescence", body: "Senescent cells and their effects on ageing." },
      { title: "Biological Age", body: "Measuring ageing and intervention response." },
      { title: "Regenerative Medicine", body: "Maintaining and restoring function." },
      { title: "Metabolic Ageing", body: "Metabolism and mitochondrial health." },
      { title: "Women's Healthy Longevity", body: "Reproductive ageing and menopause." },
      { title: "Brain Longevity", body: "Cognitive resilience and neurodegeneration." },
      { title: "Immune Ageing", body: "Immune-system change across the lifespan." },
      { title: "Musculoskeletal Longevity", body: "Muscle, bone, mobility, independence." },
      { title: "Longevity Therapeutics", body: "Validating interventions on ageing mechanisms." },
      { title: "AI Models of Ageing", body: "Computation for complex health trajectories." },
      { title: "Population Impact", body: "Turning prevention science into measurable population healthspan." },
    ],
    participants: [
      "Researchers",
      "Clinicians",
      "Innovators",
      "Investors",
      "International partners",
      "Public health experts",
      "Policymakers",
    ],
    outputs: [
      "Research collaborations",
      "Clinical studies",
      "Translation projects",
      "International partnerships",
      "Public health programmes",
    ],
    handoff:
      "Scientific missions guide project creation and MR Match connections across the ecosystem.",
  },
];
