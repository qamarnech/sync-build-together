import type { Pillar } from "@/components/site/PillarPage";

export type SolutionPillar = Pillar & {
  to:
    | "/solutions/diagnostics-biological-age"
    | "/solutions/preventive-longevity-health"
    | "/solutions/regenerative-medicine"
    | "/solutions/personalised-health"
    | "/solutions/aesthetics-wellness"
    | "/solutions/products";
};

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    slug: "diagnostics-biological-age",
    to: "/solutions/diagnostics-biological-age",
    name: "Diagnostics & Biological Age",
    kicker: "Diagnostics & Biological Age",
    num: "I",
    title: "Making biological ageing measurable",
    intro:
      "Measurement comes first. Senescence and biological-age testing turn ageing from an abstract idea into signals that can be tracked, compared and acted on responsibly.",
    focus: [
      { title: "Epigenetic Senescence Detection", body: "DNA methylation patterns associated with cellular ageing and senescent burden." },
      { title: "Inflammatory Senescence Detection", body: "Inflammatory signalling linked with age-related decline and senescent activity." },
      { title: "Cellular Senescence Detection", body: "Direct markers of senescent cells and their accumulation in tissue." },
      { title: "Metabolic Senescence Detection", body: "Metabolic and mitochondrial signals of biological ageing." },
      { title: "MetaAge Biological Age Test", body: "A combined biological-age readout used to guide and track personal programmes." },
    ],
    participants: ["Individuals", "Clinicians", "Laboratories", "Diagnostic developers", "Research groups", "Longevity clinics"],
    outputs: ["Biological-age reports", "Senescence profiles", "Baseline and follow-up tracking", "Validated test panels", "Data for research collaboration"],
    handoff: "Measurement results inform preventive and longevity health planning, where they become actionable programmes.",
  },
  {
    slug: "preventive-longevity-health",
    to: "/solutions/preventive-longevity-health",
    name: "Preventive & Longevity Health",
    kicker: "Preventive & Longevity Health",
    num: "II",
    title: "Reducing risk before disease appears",
    intro:
      "Prevention is where most healthspan is won. Risk assessment, biomarker monitoring and structured lifestyle planning keep people functioning well for longer.",
    focus: [
      { title: "Chronic and major disease risk assessment", body: "Structured evaluation of cardiometabolic, cognitive and other major risks." },
      { title: "Biomarker monitoring", body: "Repeated measurement to track direction of travel, not a single snapshot." },
      { title: "Longevity health management", body: "Ongoing management of healthspan priorities with qualified professionals." },
      { title: "Nutrition, movement, sleep and recovery planning", body: "The foundations of healthspan, planned and reviewed as a whole." },
      { title: "Personal healthspan programmes", body: "Programmes that combine measurement, action and review over time." },
    ],
    participants: ["Individuals", "Clinicians", "Public health professionals", "Nutritionists", "Fitness professionals", "Employers"],
    outputs: ["Risk assessments", "Monitoring plans", "Healthspan programmes", "Lifestyle interventions", "Progress reviews"],
    handoff: "Prevention data highlights where regenerative and advanced interventions may be appropriate.",
  },
  {
    slug: "regenerative-medicine",
    to: "/solutions/regenerative-medicine",
    name: "Regenerative Medicine",
    kicker: "Regenerative Medicine",
    num: "III",
    title: "Maintaining and restoring function",
    intro:
      "Regenerative approaches aim to repair, replace and restore tissue function. This is an active research field, and claims are labelled by evidence status throughout.",
    focus: [
      { title: "Regenerative medicine research", body: "Mechanistic and translational research into repair and restoration of function." },
      { title: "Cell-therapy development", body: "Development and evaluation of cell-based therapeutic approaches." },
      { title: "iPSC technology", body: "Induced pluripotent stem-cell platforms for modelling, screening and therapy." },
      { title: "Tissue repair", body: "Restoring structure and function in ageing or damaged tissue." },
      { title: "Clinical and research collaboration", body: "Partnerships that move promising work toward rigorous clinical testing." },
    ],
    participants: ["Research institutes", "Universities", "Biotech companies", "Clinical research units", "Regulators", "Investors"],
    outputs: ["Research collaborations", "Therapeutic candidates", "Preclinical and clinical evidence", "Platform technologies", "Translation projects"],
    handoff: "Validated regenerative work feeds personalised health programmes and clinical practice.",
  },
  {
    slug: "personalised-health",
    to: "/solutions/personalised-health",
    name: "Personalised Health",
    kicker: "Personalised Health",
    num: "IV",
    title: "One person, one plan, measured over time",
    intro:
      "Personalised health brings measurement and action together for an individual, coordinated with qualified professionals rather than delivered as a product.",
    focus: [
      { title: "Individual biological-age assessment", body: "A personal baseline built from validated measures." },
      { title: "Personalised health planning", body: "Priorities chosen for one person's biology, context and goals." },
      { title: "Biomarker-informed programmes", body: "Programmes adjusted as markers change, not fixed in advance." },
      { title: "One-to-one health management", body: "Continuity of support across measurement, action and review." },
      { title: "Coordination with qualified professionals", body: "Clinical decisions stay with appropriately qualified healthcare professionals." },
    ],
    participants: ["Individuals", "Clinicians", "Health coaches", "Longevity clinics", "Digital health platforms", "Data specialists"],
    outputs: ["Personal baselines", "Individual health plans", "Progress tracking", "Coordinated care pathways", "Longitudinal personal data"],
    handoff: "Personal programmes often extend into aesthetics and wellness, where function and appearance meet.",
  },
  {
    slug: "aesthetics-wellness",
    to: "/solutions/aesthetics-wellness",
    name: "Aesthetics & Wellness",
    kicker: "Aesthetics & Wellness",
    num: "V",
    title: "Visible ageing, skin health and wellbeing",
    intro:
      "Skin and wellbeing are part of how ageing is experienced. This area covers non-clinical and regenerative aesthetic approaches, described honestly and without overclaiming.",
    focus: [
      { title: "Skin-health programmes", body: "Structured care for skin function, barrier health and resilience." },
      { title: "Regenerative aesthetics", body: "Aesthetic approaches informed by regenerative science." },
      { title: "Personalised aesthetic programmes", body: "Plans matched to individual skin type, history and goals." },
      { title: "Wellness and non-clinical interventions", body: "Recovery, stress and wellbeing practices that support healthspan." },
    ],
    participants: ["Individuals", "Aesthetic practitioners", "Dermatology specialists", "Wellness providers", "Product developers", "Clinics"],
    outputs: ["Skin-health plans", "Aesthetic programmes", "Wellness protocols", "Practitioner collaboration", "Consumer education"],
    handoff: "Programme needs shape the products and tests offered across the mission.",
  },
  {
    slug: "products",
    to: "/solutions/products",
    name: "Products",
    kicker: "Products",
    num: "VI",
    title: "Tests and everyday products that support the plan",
    intro:
      "Products should follow the evidence, not lead it. Diagnostics and personal-care products are presented with their evidence status and intended use.",
    focus: [
      { title: "Diagnostics and Tests", body: "Senescence detection, biological-age testing and biomarker panels." },
      { title: "Wellness and Personal Care", body: "Everyday products supporting skin health, recovery and daily routines." },
    ],
    participants: ["Individuals", "Clinics", "Laboratories", "Manufacturers", "Distributors", "Regulatory specialists"],
    outputs: ["Validated tests", "Quality-assured products", "Clear evidence labelling", "Supply partnerships", "Access at reasonable cost"],
    handoff: "Product use generates real-world data that returns to research and prevention.",
  },
];
