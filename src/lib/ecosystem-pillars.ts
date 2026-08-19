export type EcosystemPillar = {
  slug: string;
  to:
    | "/ecosystem/science-discovery"
    | "/ecosystem/clinical-validation"
    | "/ecosystem/manufacturing-supply"
    | "/ecosystem/investment-commercial";
  name: string;
  kicker: string;
  num: string;
  title: string;
  intro: string;
  focus: { title: string; body: string }[];
  participants: string[];
  outputs: string[];
  handoff: string;
};

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    slug: "science-discovery",
    to: "/ecosystem/science-discovery",
    name: "Science & Discovery",
    kicker: "Science & Discovery",
    num: "I",
    title: "Understanding why we age — and what can be changed",
    intro:
      "Discovery generates the knowledge the whole ecosystem depends on: the biology of ageing, the mechanisms of decline and the targets worth pursuing.",
    focus: [
      { title: "Biology of ageing", body: "Cellular ageing, senescence, mitochondrial and metabolic decline, and the pathways that govern them." },
      { title: "Target identification", body: "Turning mechanistic insight into credible, modifiable targets for prevention and therapy." },
      { title: "Biomarkers & measurement", body: "Molecular, digital and functional markers that make biological ageing measurable." },
      { title: "Data & computation", body: "Multi-omics, cohort data and AI models that accelerate hypothesis generation." },
      { title: "Translational research", body: "Bridging laboratory findings toward interventions that can be tested in people." },
    ],
    participants: ["Research groups", "Laboratories", "Universities", "Institutes", "Funding councils", "Computational biology teams"],
    outputs: ["Validated targets", "Biomarker panels", "Publications & datasets", "IP and spin-out potential", "Research collaborations"],
    handoff: "Discovery hands validated targets and measurement tools to clinical teams for testing in people.",
  },
  {
    slug: "clinical-validation",
    to: "/ecosystem/clinical-validation",
    name: "Clinical & Validation",
    kicker: "Clinical & Validation",
    num: "II",
    title: "Proving that interventions are safe, effective and clinically relevant",
    intro:
      "Validation is where promising science earns trust: rigorous evidence, real patients, credible endpoints and responsible clinical practice.",
    focus: [
      { title: "Clinical trials", body: "Study design, recruitment and execution across prevention, therapeutics and diagnostics." },
      { title: "Endpoints & healthspan measures", body: "Defining outcomes that reflect healthy years lived, not only disease events." },
      { title: "Diagnostics validation", body: "Analytical and clinical validation of screening, imaging and biomarker tests." },
      { title: "Regulatory pathways", body: "Working with regulators on approvals, classification and evidence requirements." },
      { title: "Clinical practice", body: "Longevity clinics and health systems translating evidence into everyday care." },
    ],
    participants: ["Hospitals", "Clinics", "Physicians", "Clinical research units", "Regulators", "Contract research organisations"],
    outputs: ["Trial evidence", "Regulatory submissions", "Validated diagnostics", "Clinical protocols", "Real-world outcome data"],
    handoff: "Validated interventions move to manufacturing and supply so they can be produced reliably at scale.",
  },
  {
    slug: "manufacturing-supply",
    to: "/ecosystem/manufacturing-supply",
    name: "Manufacturing & Supply",
    kicker: "Manufacturing & Supply",
    num: "III",
    title: "Making validated solutions reliable, affordable and available",
    intro:
      "Nothing improves healthspan at population scale until it can be produced consistently, distributed safely and delivered at a price people can meet.",
    focus: [
      { title: "Process development & scale-up", body: "Moving from bench batches to reproducible, compliant production." },
      { title: "Quality & GMP", body: "Quality systems, testing and standards that keep every batch trustworthy." },
      { title: "Supply chains", body: "Raw materials, logistics, cold chain and resilience across borders." },
      { title: "Devices & digital delivery", body: "Wearables, monitoring hardware and the platforms that support them." },
      { title: "Cost & access", body: "Engineering cost out so evidence-based solutions reach more people." },
    ],
    participants: ["Manufacturers", "CDMOs", "Supply-chain partners", "Quality & standards bodies", "Device makers", "Distributors"],
    outputs: ["Scalable processes", "Quality-assured products", "Resilient supply", "Cost reduction", "Distribution capability"],
    handoff: "Reliable supply enables commercial partners and investors to build sustainable adoption.",
  },
  {
    slug: "investment-commercial",
    to: "/ecosystem/investment-commercial",
    name: "Investment & Commercial",
    kicker: "Investment & Commercial",
    num: "IV",
    title: "Capital, business models and adoption at scale",
    intro:
      "Capital and commercial capability decide how fast validated healthy longevity solutions reach the people who need them.",
    focus: [
      { title: "Funding the pipeline", body: "Grants, translational capital, venture and corporate investment across every stage." },
      { title: "Business models", body: "Reimbursement, employer health, consumer and clinic models that can sustain themselves." },
      { title: "Market access", body: "Payers, health systems and policy conditions that make adoption possible." },
      { title: "Partnerships & M&A", body: "Corporate partnerships, licensing and consolidation that scale capability." },
      { title: "Impact measurement", body: "Tracking healthspan outcomes and economic value, and returning learning to discovery." },
    ],
    participants: ["Venture capital", "Corporate investors", "Angel investors", "Entrepreneurs", "Payers", "Policymakers"],
    outputs: ["Funded ventures", "Commercial partnerships", "Market access", "Adoption at scale", "Outcome and value evidence"],
    handoff: "Real-world results feed back into science and discovery, so every cycle starts better informed.",
  },
];
