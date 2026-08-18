export const ROLE_TYPES = [
  { value: "researcher", label: "Researcher" },
  { value: "clinician", label: "Clinician" },
  { value: "innovator", label: "Innovator / Company" },
  { value: "investor", label: "Investor" },
  { value: "partner", label: "International partner" },
  { value: "public-health", label: "Public health" },
  { value: "individual", label: "Individual" },
] as const;

export const MISSION_AREAS = [
  "Cellular Senescence",
  "Biological Age",
  "Regenerative Medicine",
  "Metabolic Ageing",
  "Women's Healthy Longevity",
  "Brain Longevity",
  "Immune Ageing",
  "Musculoskeletal Longevity",
  "Longevity Therapeutics",
  "AI Models of Ageing",
  "Population Impact",
] as const;

export const PROJECT_TYPES = [
  "Research collaboration",
  "Clinical study",
  "Translation",
  "International partnership",
  "Public health programme",
  "Venture / product",
] as const;

export const PROJECT_STATUSES = [
  "Discovery",
  "Scientific Validation",
  "Preclinical",
  "Clinical Validation",
  "Demonstration",
  "Commercialisation",
  "Healthcare Adoption",
  "Population Impact",
] as const;

export const CAPABILITIES = [
  "Ageing Biology",
  "Biomarkers",
  "Clinical Trials",
  "Diagnostics",
  "Regenerative Medicine",
  "Nutrition",
  "AI Models of Ageing",
  "Data Standards",
  "Regulatory expertise",
  "Funding",
  "Manufacturing",
  "Population Impact",
  "Real-world evidence",
  "Governance",
  "Translation",
  "Commercialisation",
  "Preventive Health",
  "Metabolic Ageing",
  "Immune Ageing",
] as const;

export const FLYWHEEL = [
  { num: "I", title: "Discover", body: "Understand ageing biology, mechanisms, targets and technologies." },
  { num: "II", title: "Connect", body: "Bring together the researchers, clinicians and companies needed to move ideas forward." },
  { num: "III", title: "Validate", body: "Test safety, effectiveness and clinical relevance." },
  { num: "IV", title: "Build", body: "Turn evidence into diagnostics, therapeutics, nutrition, technology and prevention." },
  { num: "V", title: "Apply", body: "Deliver personalised interventions according to individual biology and risk." },
  { num: "VI", title: "Learn", body: "Measure real-world outcomes with Data + AI to improve future decisions." },
];

export const FOUNDATIONS = [
  { title: "Movement", body: "Strength, cardiovascular fitness, mobility and physical resilience." },
  { title: "Nutrition & Metabolic Health", body: "Nutrition, metabolic function, healthy body composition and resilience." },
  { title: "Sleep & Recovery", body: "Sleep quality, circadian health, recovery and restoration." },
  { title: "Emotional Health & Social Connection", body: "Stress resilience, relationships, purpose and social connection." },
];

export const TRANSLATION_STAGES = [
  { code: "01 · DISCOVERY", title: "Insight or technology", body: "A scientific insight, hypothesis or emerging technology." },
  { code: "02 · SCIENTIFIC VALIDATION", title: "Credible evidence?", body: "Does the underlying mechanism hold up?" },
  { code: "03 · PRECLINICAL", title: "Safety & mechanism", body: "Can efficacy be demonstrated appropriately?" },
  { code: "04 · CLINICAL VALIDATION", title: "What happens in humans?", body: "Evidence generated in people." },
  { code: "05 · DEMONSTRATION", title: "Real-world environments", body: "Does the solution work outside the lab?" },
  { code: "06 · COMMERCIALISATION", title: "Sustainable product", body: "Can it become a viable product or service?" },
  { code: "07 · HEALTHCARE ADOPTION", title: "Responsible use", body: "Can clinicians and individuals use it responsibly?" },
  { code: "08 · POPULATION IMPACT", title: "Measurable healthspan", body: "Does it improve health at scale?" },
];

export const EVIDENCE_LABELS = [
  { label: "Established Evidence", body: "Robust scientific and clinical evidence." },
  { label: "Emerging Science", body: "Promising, still requires validation." },
  { label: "Future Ambition", body: "What MR Longevity aims to build." },
];

export const MISSION_CARDS = [
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
];

export const PERSONAS = [
  { kicker: "I am a Researcher", title: "Move your research towards impact", body: "Find collaborators, clinical partners and funding." },
  { kicker: "I am a Clinician", title: "Connect evidence with practice", body: "Bring healthy-longevity science into responsible clinical use." },
  { kicker: "I am an Innovator", title: "Move innovation to adoption", body: "Validate, demonstrate and scale technologies and products." },
  { kicker: "I am an Investor", title: "Discover grounded opportunities", body: "See validated science before it becomes a crowded market." },
  { kicker: "I am a Partner", title: "Build international partnerships", body: "Work across the China ↔ UK ↔ global translation corridor." },
  { kicker: "I work in Public Health", title: "Connect innovation to population impact", body: "Turn prevention science into measurable population healthspan." },
  { kicker: "I am an Individual", title: "Live healthier for longer", body: "Assess, understand, personalise, act, measure, improve." },
];

export const VERBS = [
  { title: "Discover", body: "Research, technologies, scientists, evidence, companies, clinical studies, biomarkers." },
  { title: "Connect", body: "The right researchers, clinicians, universities, companies, investors and international partners." },
  { title: "Validate", body: "Move promising innovation through scientific, preclinical and clinical validation to real-world evidence." },
  { title: "Build", body: "Research projects, trials, technologies, products, programmes and ventures." },
  { title: "Fund", body: "Research, grants, investors, co-investment and translational capital." },
  { title: "Apply", body: "Diagnostics, prevention, personalised programmes, clinical services, monitoring." },
  { title: "Contribute", body: "Your research, expertise, technology, data, infrastructure or funding." },
];
