import type { Pillar } from "@/components/site/PillarPage";

export type SolutionPillar = Pillar & {
  to:
    | "/solutions/chronic-disease-prevention"
    | "/solutions/regenerative-medicine"
    | "/solutions/longevity-health-management"
    | "/solutions/personalised-medicine"
    | "/solutions/medical-aesthetics"
    | "/solutions/products";
};

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    slug: "chronic-disease-prevention",
    to: "/solutions/chronic-disease-prevention",
    name: "Chronic & Major Disease Prevention",
    kicker: "Chronic & Major Disease Prevention",
    num: "I",
    title: "Finding major disease risk early enough to act",
    intro:
      "Most healthspan is won before disease appears. Early detection, precise biomarker monitoring and immune and inflammation management shift care from treatment to prevention.",
    focus: [
      { title: "Cardiovascular and neurodegenerative prevention", body: "Early detection and prevention of cardiovascular disease and neurodegenerative conditions such as Alzheimer's." },
      { title: "Early tumour risk assessment", body: "Risk stratification and early signals that support timely clinical follow-up." },
      { title: "Immune enhancement and inflammation management", body: "Managing chronic inflammation and supporting immune resilience with ageing." },
      { title: "Glycan-chemistry-based disease prediction", body: "Glycomic signatures used as predictive markers of disease risk." },
      { title: "Peripheral blood testing and biomarker monitoring", body: "Minimally invasive blood panels with precise, repeated biomarker tracking." },
    ],
    participants: ["Individuals", "Clinicians", "Public health professionals", "Laboratories", "Diagnostic developers", "Employers"],
    outputs: ["Risk assessments", "Early-detection pathways", "Monitoring plans", "Preventive programmes", "Progress reviews"],
    handoff: "Prevention data highlights where regenerative and cell-based interventions may be appropriate.",
  },
  {
    slug: "regenerative-medicine",
    to: "/solutions/regenerative-medicine",
    name: "Regenerative Medicine & Cell Therapy",
    kicker: "Regenerative Medicine & Cell Therapy",
    num: "II",
    title: "Repairing tissue and restoring function",
    intro:
      "Regenerative approaches aim to repair tissue, regenerate organ function and intervene in the biology of ageing itself. This is an active research field, and claims are labelled by evidence status throughout.",
    focus: [
      { title: "Tissue repair and organ regeneration", body: "Restoring structure and function in ageing or damaged tissue." },
      { title: "iPSC technology", body: "Induced pluripotent stem-cell platforms for modelling, screening and therapy." },
      { title: "Anti-ageing intervention", body: "Research aiming to slow or reverse biological age, reported with its evidence level." },
      { title: "Gene and cell therapy for chronic disease", body: "Therapeutic development targeting conditions such as diabetes and cardiovascular disease." },
      { title: "Clinical and research collaboration", body: "Partnerships that move promising work toward rigorous clinical testing." },
    ],
    participants: ["Research institutes", "Universities", "Biotech companies", "Clinical research units", "Regulators", "Investors"],
    outputs: ["Research collaborations", "Therapeutic candidates", "Preclinical and clinical evidence", "Platform technologies", "Translation projects"],
    handoff: "Validated regenerative work feeds longevity health management and clinical practice.",
  },
  {
    slug: "longevity-health-management",
    to: "/solutions/longevity-health-management",
    name: "Longevity Health Management",
    kicker: "Longevity Health Management",
    num: "III",
    title: "Managing healthspan across ten body systems",
    intro:
      "Health management brings measurement and action together over time: biological-age assessment across body systems, early screening and intervention plans reviewed as markers change.",
    focus: [
      { title: "Precise biological-age assessment", body: "Assessment and intervention across ten body systems, including cardiovascular, neurological and immune." },
      { title: "Early screening for chronic disease", body: "Structured screening with personalised intervention plans where risk is found." },
      { title: "MetaAge biological age test", body: "The MetaAge readout, also listed under Products, used to set and track a personal baseline." },
      { title: "Comprehensive intervention plans", body: "Nutrition, exercise and medication combined to extend healthy lifespan." },
      { title: "Ongoing review", body: "Plans adjusted as biomarkers move, with qualified professionals leading clinical decisions." },
    ],
    participants: ["Individuals", "Clinicians", "Health coaches", "Nutritionists", "Longevity clinics", "Data specialists"],
    outputs: ["Personal baselines", "System-level assessments", "Screening pathways", "Healthspan programmes", "Longitudinal tracking"],
    handoff: "Health management extends into high-end personalised medicine for members who need concierge-level care.",
  },
  {
    slug: "personalised-medicine",
    to: "/solutions/personalised-medicine",
    name: "High-End Personalized Medicine",
    kicker: "High-End Personalized Medicine",
    num: "IV",
    title: "Concierge-level precision care",
    intro:
      "Personalised medicine coordinates precision services around one person, delivered to international standards by a named expert team rather than sold as a product.",
    focus: [
      { title: "Customised health management", body: "Tailored programmes for high-net-worth individuals and their families." },
      { title: "International-standard precision services", body: "Precision medical services meeting recognised international standards." },
      { title: "Integrated rejuvenation", body: "Longevity medicine combined with aesthetic design as one coherent plan." },
      { title: "One-to-one management", body: "Continuity of care backed by an international expert team." },
      { title: "Coordination with qualified professionals", body: "Clinical decisions stay with appropriately qualified healthcare professionals." },
    ],
    participants: ["Individuals and families", "Clinicians", "Longevity clinics", "Concierge health providers", "Aesthetic specialists", "Data specialists"],
    outputs: ["Individual health plans", "Coordinated care pathways", "Expert panel reviews", "Progress tracking", "Longitudinal personal data"],
    handoff: "Personal programmes often extend into medical aesthetics, where function and appearance meet.",
  },
  {
    slug: "medical-aesthetics",
    to: "/solutions/medical-aesthetics",
    name: "Medical Aesthetics & Anti-Aging Aesthetics",
    kicker: "Medical Aesthetics & Anti-Aging Aesthetics",
    num: "V",
    title: "Visible ageing, skin health and tissue regeneration",
    intro:
      "Skin and appearance are part of how ageing is experienced. This area blends medical aesthetics with regenerative techniques, described honestly and without overclaiming.",
    focus: [
      { title: "Skin repair and facial rejuvenation", body: "Structured care for skin function, barrier health and facial appearance." },
      { title: "Private health and tissue regeneration", body: "Discreet regenerative approaches to tissue health and recovery." },
      { title: "Aesthetics with regenerative medicine", body: "Medical aesthetic practice informed by regenerative science." },
      { title: "Customised anti-ageing services", body: "Rejuvenation plans matched to individual skin type, history and goals." },
    ],
    participants: ["Individuals", "Aesthetic practitioners", "Dermatology specialists", "Regenerative clinicians", "Product developers", "Clinics"],
    outputs: ["Skin-health plans", "Aesthetic programmes", "Regenerative protocols", "Practitioner collaboration", "Consumer education"],
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

export function solutionPillar(slug: string): SolutionPillar {
  const found = SOLUTION_PILLARS.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown solution pillar: ${slug}`);
  return found;
}
