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
  {
    kicker: "I am a Researcher",
    title: "Move your research towards impact",
    body: "Find collaborators, clinical partners and funding.",
    bullets: ["Laboratories & datasets", "Clinical & industry partners", "International collaborators", "Translation opportunities"],
    cta: { label: "Explore Research", href: "/ecosystem/science-discovery" },
  },
  {
    kicker: "I am a Clinician",
    title: "Connect evidence with practice",
    body: "Bring healthy-longevity science into responsible care.",
    bullets: ["Emerging evidence & biomarkers", "Validated interventions", "Clinical studies", "Healthy-ageing programmes"],
    cta: { label: "Explore Clinical Collaboration", href: "/ecosystem/clinical-validation" },
  },
  {
    kicker: "I am a Company or Startup",
    title: "Move innovation to adoption",
    body: "Validate and scale what you're building.",
    bullets: ["Scientific & validation partners", "Clinical partners", "Investors & manufacturing", "Market-access partners"],
    cta: { label: "Explore Innovation", href: "/ecosystem/investment-commercial" },
  },
  {
    kicker: "I am an Investor or Funder",
    title: "Discover grounded opportunities",
    body: "Back science with a credible translation pathway.",
    bullets: ["Emerging science & technologies", "Startups & validation projects", "Translational & co-investment"],
    cta: { label: "Explore Opportunities", href: "/ecosystem/investment-commercial" },
  },
  {
    kicker: "I represent a University",
    title: "Build international partnerships",
    body: "Extend research and translation reach.",
    bullets: ["Institutional & industry partners", "Joint projects & funding", "China–UK opportunities"],
    cta: { label: "Explore Partnerships", href: "/about" },
  },
  {
    kicker: "I represent Government / Public Health",
    title: "Connect innovation to population impact",
    body: "Bring prevention and evidence to scale.",
    bullets: ["Prevention & population health", "Evidence standards", "Policy & international collaboration"],
    cta: { label: "Explore Public Health", href: "/ecosystem/manufacturing-supply" },
  },
  {
    kicker: "I am an Individual",
    title: "Live healthier for longer",
    body: "Understand and act on your own healthspan.",
    bullets: ["Health assessments & biomarkers", "Movement, nutrition, sleep, connection", "Personalised programmes"],
    cta: { label: "Explore My Health", href: "/discover/healthy-longevity" },
  },
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

export const VALUES = [
  { title: "Scientific Rigor", body: "Evidence before hype. Every claim grounded in transparent, rigorous science and honest about its limits." },
  { title: "Innovation & Excellence", body: "Pursue breakthroughs with discipline, creativity and high standards across science and translation." },
  { title: "Collaboration & Openness", body: "Connect disciplines, institutions and cultures behind a shared goal, openly and without silos." },
  { title: "Human-Oriented", body: "People are the purpose. Science serves longer, healthier and more vibrant lives." },
  { title: "Ethical Responsibility", body: "Explore responsibly. Safety, honesty, privacy and transparency come before ambition." },
];

export const GOALS = [
  { title: "Uncover Core Mechanisms", body: "Understand the biology of ageing, its hallmarks and drivers.", href: "/discover/biology-of-aging" },
  { title: "Optimize Detection & Evaluation", body: "Advance biomarkers and biological-age measurement to detect change earlier.", href: "/discover/healthy-longevity" },
  { title: "Develop Intervention Methods", body: "Translate mechanisms into validated therapeutics, nutrition and technologies.", href: "/collaborate/translation-innovation" },
  { title: "Promote Clinical Practice", body: "Move evidence into responsible, personalised clinical care and adoption.", href: "/collaborate/projects" },
  { title: "Advocate Proactive Health", body: "Shift from treating disease to preventing it, for individuals and populations.", href: "/participate/community" },
];
