export const PROJECT_CATEGORIES = [
  {
    slug: "research",
    name: "Research Projects",
    body: "Laboratory and computational work on ageing biology, biomarkers and mechanisms of decline.",
    examples: ["Ageing biology", "Biomarker discovery", "Multi-omics", "Preclinical models"],
  },
  {
    slug: "clinical",
    name: "Clinical Studies",
    body: "Studies and trials that test safety, effectiveness and clinical relevance in people.",
    examples: ["Interventional trials", "Observational cohorts", "Diagnostic validation"],
  },
  {
    slug: "innovation",
    name: "Innovation Projects",
    body: "Translational programmes turning validated findings into products, services and protocols.",
    examples: ["Spin-outs", "Prototyping", "Regulatory strategy", "Health service design"],
  },
  {
    slug: "technology",
    name: "Technology Projects",
    body: "AI, data platforms, wearables and digital tools that make health measurable and personalised.",
    examples: ["AI models", "Digital biomarkers", "Data platforms", "Remote monitoring"],
  },
  {
    slug: "international",
    name: "International Initiatives",
    body: "Cross-border collaborations connecting research groups, clinics and companies in different countries.",
    examples: ["UK–China programmes", "Multi-site studies", "Knowledge exchange"],
  },
  {
    slug: "public-health",
    name: "Public Health Projects",
    body: "Population-level prevention, screening and healthy-environment programmes.",
    examples: ["Prevention pilots", "Screening pathways", "Age-friendly environments"],
  },
];

export const PROJECT_FIELDS = [
  "Project title",
  "Purpose",
  "Challenge",
  "Participants",
  "Current stage",
  "Location",
  "What is needed",
  "Collaboration opportunities",
];

export const PARTNER_CATEGORIES = [
  { slug: "universities", name: "Universities", body: "Academic departments, centres and doctoral programmes." },
  { slug: "research-institutes", name: "Research Institutes", body: "Dedicated geroscience and biomedical research institutes." },
  { slug: "healthcare", name: "Healthcare Organisations", body: "Hospitals, health systems, clinics and clinical research units." },
  { slug: "biotech", name: "Biotechnology Companies", body: "Therapeutics, diagnostics, regenerative medicine and cell technologies." },
  { slug: "technology", name: "Technology Companies", body: "AI, digital health, sensors and health-data platforms." },
  { slug: "longevity", name: "Longevity Companies", body: "Longevity clinics, nutrition, supplements and preventative health services." },
  { slug: "investors", name: "Investors", body: "Venture, corporate, angel and translational capital." },
  { slug: "government", name: "Government Organisations", body: "Ministries, agencies, regulators and funding councils." },
  { slug: "public-health", name: "Public Health Organisations", body: "Population health bodies and prevention programmes." },
  { slug: "innovation-networks", name: "Innovation Networks", body: "Accelerators, clusters, catapults and translation networks." },
  { slug: "international", name: "International Partners", body: "Partners connecting the landscape across borders." },
];

export const PARTNER_FIELDS = [
  "Organisation",
  "Expertise",
  "Location",
  "Role in longevity",
  "Projects",
  "Collaboration interests",
];

export const TRANSLATION_STAGES = [
  {
    slug: "discovery",
    name: "Discovery",
    body: "Mechanisms, targets and biomarkers emerge from ageing biology and data science.",
  },
  {
    slug: "validation",
    name: "Validation",
    body: "Preclinical and analytical work establishes whether a finding holds up.",
  },
  {
    slug: "clinical-translation",
    name: "Clinical Translation",
    body: "Studies and trials test safety, effectiveness and clinical relevance in people.",
  },
  {
    slug: "product-development",
    name: "Product & Technology Development",
    body: "Validated science becomes a therapy, test, device, platform or service.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    body: "Reproducible, quality-assured production and resilient supply.",
  },
  {
    slug: "commercialisation",
    name: "Commercialisation",
    body: "Business models, capital, market access and reimbursement.",
  },
  {
    slug: "adoption",
    name: "Adoption",
    body: "Clinicians, organisations and individuals put solutions into everyday use.",
  },
  {
    slug: "real-world-evidence",
    name: "Real-World Evidence",
    body: "Outcomes and data return to discovery and validation, so the next cycle starts better informed.",
  },
];

export const OPPORTUNITY_TYPES = [
  "Research Collaborations",
  "Calls for Partners",
  "Clinical Studies",
  "Pilot Programmes",
  "Funding Opportunities",
  "Investment Opportunities",
  "Technology Collaborations",
  "Expert Opportunities",
  "International Collaborations",
];

export const OPPORTUNITY_FILTERS = [
  "Type",
  "Field",
  "Location",
  "Organisation",
  "Stage",
  "Expertise needed",
];

export type Opportunity = {
  id: string;
  title: string;
  type: string;
  field: string;
  location: string;
  stage: string;
  expertise: string[];
  body: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "senescence-biomarker",
    title: "Senescence biomarker validation partners",
    type: "Research Collaborations",
    field: "Biology of Ageing",
    location: "UK · Global",
    stage: "Validation",
    expertise: ["Cell biology", "Assay development", "Bioinformatics"],
    body: "Seeking laboratories able to cross-validate senescence markers across independent cohorts and sample types.",
  },
  {
    id: "prevention-clinic-pilot",
    title: "Preventative health clinic pilot",
    type: "Pilot Programmes",
    field: "Longevity Medicine",
    location: "United Kingdom",
    stage: "Clinical Translation",
    expertise: ["Clinical operations", "Preventative medicine", "Health economics"],
    body: "Clinics interested in piloting a structured healthspan assessment pathway with shared outcome measurement.",
  },
  {
    id: "digital-biomarker-ai",
    title: "AI partners for digital biomarkers",
    type: "Technology Collaborations",
    field: "AI & Digital Health",
    location: "Global · Remote",
    stage: "Product & Technology Development",
    expertise: ["Machine learning", "Wearable data", "Data engineering"],
    body: "Building models that translate continuous wearable data into interpretable healthspan signals.",
  },
  {
    id: "translational-capital",
    title: "Translational capital for regenerative programmes",
    type: "Investment Opportunities",
    field: "Regenerative Medicine",
    location: "UK · China",
    stage: "Commercialisation",
    expertise: ["Venture investment", "Regulatory strategy", "Manufacturing"],
    body: "Investors and corporate partners interested in early-stage regenerative and cell technology programmes.",
  },
  {
    id: "uk-china-exchange",
    title: "UK–China research exchange",
    type: "International Collaborations",
    field: "Geroscience",
    location: "UK · China",
    stage: "Discovery",
    expertise: ["Geroscience", "Programme management", "Bilingual research"],
    body: "Connecting research groups for joint programmes, visiting researchers and shared datasets.",
  },
  {
    id: "public-health-screening",
    title: "Population screening pathway partners",
    type: "Calls for Partners",
    field: "Prevention & Public Health",
    location: "Europe",
    stage: "Adoption",
    expertise: ["Public health", "Epidemiology", "Service design"],
    body: "Public health organisations exploring earlier risk detection pathways at population scale.",
  },
  {
    id: "grant-consortium",
    title: "Grant consortium for healthspan endpoints",
    type: "Funding Opportunities",
    field: "Clinical Research",
    location: "Global",
    stage: "Validation",
    expertise: ["Trial design", "Biostatistics", "Grant writing"],
    body: "Forming a consortium to define and test healthspan endpoints suitable for regulatory acceptance.",
  },
  {
    id: "expert-review-panel",
    title: "Expert reviewers for evidence labelling",
    type: "Expert Opportunities",
    field: "Evidence & Standards",
    location: "Global · Remote",
    stage: "Real-World Evidence",
    expertise: ["Evidence appraisal", "Clinical science", "Editorial review"],
    body: "Experts to review and label the evidence status of interventions presented across the platform.",
  },
  {
    id: "nutrition-study",
    title: "Nutrition intervention study sites",
    type: "Clinical Studies",
    field: "Nutrition & Metabolic Health",
    location: "UK · Europe",
    stage: "Clinical Translation",
    expertise: ["Clinical nutrition", "Study coordination", "Metabolic phenotyping"],
    body: "Recruiting study sites for a metabolic health intervention with standardised measurement.",
  },
];

export const COLLABORATE_AREAS = [
  {
    slug: "projects",
    to: "/collaborate/projects",
    kicker: "Projects",
    name: "Projects",
    question: "What are we working on?",
    body: "Research, clinical, innovation, technology, international and public health projects — each with its purpose, stage, participants and what it still needs.",
    cta: "Explore Projects",
  },
  {
    slug: "partners",
    to: "/collaborate/partners",
    kicker: "Partners",
    name: "Partners",
    question: "Who are we working with?",
    body: "The network of universities, institutes, healthcare organisations, companies, investors and public bodies contributing capability.",
    cta: "Explore Partners",
  },
  {
    slug: "translation-innovation",
    to: "/collaborate/translation-innovation",
    kicker: "Translation & Innovation",
    name: "Translation & Innovation",
    question: "How do discoveries become real-world solutions?",
    body: "The connected pathway from discovery to adoption — and how real-world evidence feeds back into science.",
    cta: "Explore Translation & Innovation",
  },
  {
    slug: "opportunities",
    to: "/collaborate/opportunities",
    kicker: "Opportunities",
    name: "Opportunities",
    question: "Where can I participate?",
    body: "Open collaborations, calls for partners, studies, pilots, funding and expert roles across the landscape.",
    cta: "Explore Opportunities",
  },
];
