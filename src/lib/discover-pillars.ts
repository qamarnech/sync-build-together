import type { Pillar } from "@/components/site/PillarPage";

export type DiscoverPillar = Pillar & {
  to:
    | "/discover/what-is-longevity"
    | "/discover/healthy-longevity"
    | "/discover/science-of-ageing"
    | "/discover/prevention-healthspan"
    | "/discover/longevity-101";
};

export const DISCOVER_PILLARS: DiscoverPillar[] = [
  {
    slug: "what-is-longevity",
    to: "/discover/what-is-longevity",
    name: "What is Longevity?",
    kicker: "What is Longevity?",
    num: "I",
    title: "Lifespan, healthspan and the difference that matters",
    intro:
      "Longevity is often reduced to living longer. The more useful question is how long a person stays healthy, capable and independent — and what determines that trajectory.",
    focus: [
      { title: "Lifespan", body: "Total years lived — the measure most familiar, and the least informative on its own." },
      { title: "Healthspan", body: "The years lived in good health, free of significant disease or functional limitation." },
      { title: "Functional ability", body: "Strength, mobility, cognition and independence — what people actually experience day to day." },
      { title: "Biological age", body: "How old the body behaves, measured through biomarkers rather than birthdays." },
      { title: "Compression of morbidity", body: "Shortening the period of illness and decline at the end of life." },
      { title: "Why it is a systems question", body: "Biology, behaviour, environment, healthcare and society all shape the same trajectory." },
    ],
    participants: [
      "Individuals",
      "Clinicians",
      "Researchers",
      "Public health professionals",
      "Educators",
      "Policymakers",
    ],
    outputs: [
      "Shared definitions",
      "Healthspan literacy",
      "Comparable measures",
      "Clear public communication",
    ],
    handoff:
      "A shared definition of longevity sets up the healthy longevity dimensions that follow.",
  },
  {
    slug: "healthy-longevity",
    to: "/discover/healthy-longevity",
    name: "Healthy Longevity",
    kicker: "Healthy Longevity",
    num: "II",
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
      "Healthy longevity foundations inform the science of ageing and set priorities for research.",
  },
  {
    slug: "science-of-ageing",
    to: "/discover/science-of-ageing",
    name: "Science of Ageing",
    kicker: "Science of Ageing",
    num: "III",
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
      "Mechanistic insight guides what can realistically be prevented, delayed or reversed.",
  },
  {
    slug: "prevention-healthspan",
    to: "/discover/prevention-healthspan",
    name: "Prevention & Healthspan",
    kicker: "Prevention & Healthspan",
    num: "IV",
    title: "Detecting change earlier and acting before disease is established",
    intro:
      "Most age-related disease develops silently for years. Prevention is the discipline of finding that change early and intervening while the trajectory can still be altered.",
    focus: [
      { title: "Early detection", body: "Screening, diagnostics and biomarkers that surface risk before symptoms." },
      { title: "Risk stratification", body: "Identifying who benefits most from which intervention, and when." },
      { title: "Lifestyle medicine", body: "Movement, nutrition, sleep and stress as first-line, evidence-backed interventions." },
      { title: "Metabolic and cardiovascular prevention", body: "The largest modifiable contributors to lost healthy years." },
      { title: "Cognitive and musculoskeletal preservation", body: "Protecting the capacities that determine independence." },
      { title: "Population prevention", body: "Turning individual prevention science into population healthspan gains." },
    ],
    participants: [
      "Clinicians",
      "Diagnostics providers",
      "Public health organisations",
      "Digital health innovators",
      "Employers and insurers",
      "Individuals",
    ],
    outputs: [
      "Prevention pathways",
      "Screening protocols",
      "Real-world evidence",
      "Population programmes",
      "Healthspan outcome measures",
    ],
    handoff:
      "Prevention turns scientific insight into everyday practice — and generates the data that improves it.",
  },
  {
    slug: "longevity-101",
    to: "/discover/longevity-101",
    name: "Longevity 101",
    kicker: "Longevity 101",
    num: "V",
    title: "A plain-language starting point for the whole field",
    intro:
      "A short orientation for anyone new to healthy longevity: the core vocabulary, what the evidence currently supports, and how to tell a strong claim from a weak one.",
    focus: [
      { title: "The vocabulary", body: "Healthspan, biological age, hallmarks of ageing, geroscience, senolytics — defined plainly." },
      { title: "What the evidence supports today", body: "Physical activity, nutrition quality, sleep, smoking cessation, metabolic and blood-pressure control." },
      { title: "What is promising but unproven", body: "Most longevity therapeutics remain investigational; strong preclinical data is not clinical proof." },
      { title: "Reading a study", body: "Study design, sample size, endpoints, replication and conflicts of interest." },
      { title: "Spotting weak claims", body: "Anecdote, surrogate endpoints presented as outcomes, and products sold ahead of evidence." },
      { title: "Where to go next", body: "Follow the mechanisms in Science of Ageing, or the practice in Prevention & Healthspan." },
    ],
    participants: [
      "Individuals",
      "Students",
      "Clinicians new to the field",
      "Journalists",
      "Investors",
      "Policy teams",
    ],
    outputs: [
      "Shared literacy",
      "Evidence labelling",
      "Better questions",
      "Informed participation",
    ],
    handoff:
      "With the basics in place, the ecosystem pages show who does what and where you can contribute.",
  },
];
