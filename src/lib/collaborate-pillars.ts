import type { Pillar } from "@/components/site/PillarPage";

export type CollaboratePillar = Pillar & {
  to:
    | "/collaborate/projects"
    | "/collaborate/partners"
    | "/collaborate/translation-innovation"
    | "/collaborate/opportunities";
  question: string;
  summary: string;
};

export const COLLABORATE_PILLARS: CollaboratePillar[] = [
  {
    slug: "projects",
    to: "/collaborate/projects",
    name: "Projects",
    kicker: "Projects",
    num: "I",
    question: "What are we working on?",
    summary:
      "Current and emerging longevity initiatives across research, clinical, technology, public health and commercial work.",
    title: "Current and emerging longevity initiatives",
    intro:
      "Projects show what the mission is actively building: what each initiative aims to achieve, who is involved, the stage it has reached and where collaborators are needed.",
    focus: [
      { title: "Research projects", body: "Discovery science, ageing biology, biomarkers and translational research programmes." },
      { title: "Clinical projects", body: "Trials, validation studies, diagnostics and longevity clinic protocols." },
      { title: "Technology projects", body: "AI, data platforms, digital health, devices and measurement tools." },
      { title: "Public health projects", body: "Population prevention, healthy ageing programmes and policy pilots." },
      { title: "Commercial projects", body: "Ventures, products and services moving validated science into the market." },
      { title: "Stage & needs", body: "Every project states its current stage and the collaborators, skills or resources it is seeking." },
    ],
    participants: ["Researchers", "Clinicians", "Technologists", "Public health teams", "Founders", "Funders"],
    outputs: ["Project profiles", "Stated collaboration needs", "Progress and stage updates", "Named project teams", "Routes to join"],
    handoff: "Projects point to the partners whose capabilities can move them forward.",
  },
  {
    slug: "partners",
    to: "/collaborate/partners",
    name: "Partners",
    kicker: "Partners",
    num: "II",
    question: "Who can we work with?",
    summary:
      "Organisations contributing capabilities to the mission, each with a profile of expertise, projects and collaboration interests.",
    title: "Organisations contributing capabilities to the mission",
    intro:
      "Partners are the organisations that make delivery possible. Each partner profile sets out expertise, capabilities, active projects and the collaborations they are open to.",
    focus: [
      { title: "Universities & institutes", body: "Research groups, centres and academic capability across ageing science." },
      { title: "Healthcare organisations", body: "Hospitals, clinics and health systems delivering and validating care." },
      { title: "Biotech & technology companies", body: "Therapeutics, diagnostics, AI, data and digital health companies." },
      { title: "Manufacturers & supply", body: "CDMOs, device makers, quality partners and distribution capability." },
      { title: "Investors & funders", body: "Venture, corporate, philanthropic and public funding partners." },
      { title: "Public bodies & strategic partners", body: "Regulators, policy bodies, standards organisations and networks." },
    ],
    participants: ["Universities", "Research institutes", "Hospitals & clinics", "Biotech & tech companies", "Manufacturers", "Investors", "Public bodies"],
    outputs: ["Partner profiles", "Capability directories", "Project involvement", "Collaboration interests", "Introductions"],
    handoff: "Partner capability feeds the translation pathway that turns ideas into application.",
  },
  {
    slug: "translation-innovation",
    to: "/collaborate/translation-innovation",
    name: "Translation & Innovation",
    kicker: "Translation & Innovation",
    num: "III",
    question: "How do we move ideas into application?",
    summary:
      "The pathway that moves longevity science from discovery towards validated, manufacturable, adoptable solutions.",
    title: "Moving longevity science towards real-world application",
    intro:
      "Translation joins the stages that turn discovery into everyday impact: research, clinical validation, technology and AI, manufacturing, commercialisation and routes to adoption.",
    focus: [
      { title: "Research & discovery", body: "Targets, mechanisms and measurement emerging from ageing science." },
      { title: "Clinical validation", body: "Trials, endpoints, diagnostics validation and regulatory pathways." },
      { title: "Technology & AI", body: "Models, data infrastructure and digital tools that accelerate translation." },
      { title: "Manufacturing", body: "Scale-up, quality systems and supply that make solutions reliable." },
      { title: "Commercialisation", body: "Business models, licensing, ventures and partnerships." },
      { title: "Routes to adoption", body: "Market access, reimbursement, health systems and real-world outcomes." },
    ],
    participants: ["Translational researchers", "Clinical teams", "AI & data teams", "Manufacturing partners", "Commercial teams", "Payers & policymakers"],
    outputs: ["Translation roadmaps", "Validated pathways", "Scalable products", "Adoption models", "Real-world evidence"],
    handoff: "Each stage of translation creates concrete opportunities to get involved.",
  },
  {
    slug: "opportunities",
    to: "/collaborate/opportunities",
    name: "Opportunities",
    kicker: "Opportunities",
    num: "IV",
    question: "Where can I get involved?",
    summary:
      "Open calls for collaboration, funding, investment, expertise and resources across the mission.",
    title: "Practical ways to work together",
    intro:
      "Opportunities is the practical entry point: specific, current calls where expertise, capital or capability is needed and collaboration can start quickly.",
    focus: [
      { title: "Research collaborations", body: "Joint studies, co-authorship, shared cohorts and data partnerships." },
      { title: "Project participation", body: "Open roles on active projects for skills, sites and contributors." },
      { title: "Funding & grants", body: "Grant calls, translational funding and non-dilutive support." },
      { title: "Investment", body: "Ventures raising capital and investors seeking pipeline." },
      { title: "Technology & clinical partnerships", body: "Platform access, pilots, trial sites and clinical collaboration." },
      { title: "Manufacturing & market access", body: "Scale-up capacity, distribution and routes into health systems." },
    ],
    participants: ["Members", "Partner organisations", "Investors", "Clinics & trial sites", "Manufacturers", "Policy and market access teams"],
    outputs: ["Open calls", "Matched collaborators", "Funded work", "Signed partnerships", "New projects"],
    handoff: "Opportunities taken up become the next generation of projects.",
  },
];

export const COLLABORATE_ITEMS = COLLABORATE_PILLARS.map((p) => ({
  slug: p.slug,
  to: p.to,
  name: p.name,
}));
