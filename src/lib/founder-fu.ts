export type LinkedItem = {
  title: string;
  meta?: string;
  detail?: string;
  href?: string;
};

export type Publication = {
  year: string;
  title: string;
  journal: string;
  role: string;
  href: string;
};

export const FOUNDER_NAME = "Professor Daniel Qiang Fu 付强";

export const FOUNDER_HEADLINE =
  "Longevity Scientist · Biotech Entrepreneur · MR Longevity Founder";

export const FOUNDER_LOCATIONS = "China · UK · Global";

export const FOUNDER_ABOUT = [
  "Professor Qiang Fu is a scientist and biotechnology entrepreneur working to understand the biology of ageing and translate scientific discoveries into practical solutions for healthier, longer lives.",
  "His research spans cellular senescence, NK-cell immunology, reproductive immunology, stem-cell and ovarian biology, exosomes, cancer, and the use of biomarkers and AI in ageing. Alongside fundamental science, his focus is increasingly translational: identifying promising interventions, validating them rigorously, and creating pathways through which research becomes technologies, products and health solutions.",
  "As founder of MR Longevity, his wider ambition is to build an international mission connecting science, people, technology, healthcare, data and investment to accelerate progress in healthy longevity.",
];

export const FOUNDER_AFFILIATIONS: LinkedItem[] = [
  {
    title: "Professor & Postgraduate Supervisor",
    meta: "Institute of Aging Medicine · School of Pharmacy, Binzhou Medical University (Yantai)",
    detail: "Listed in the university's Aging Medicine Innovation Team.",
    href: "https://kyc.sdmpu.edu.cn/2024/0626/c5166a122862/page.htm",
  },
  {
    title: "Shandong Cellogene",
    meta: "Company affiliation listed on peer-reviewed publications",
    detail: "Academic–industry bridge for NK-cell and stem-cell technologies.",
  },
  {
    title: "Founder, MR Longevity",
    meta: "Global healthy longevity mission",
    detail: "Connecting science, healthcare, innovation, capital, data and AI.",
  },
  {
    title: "Former Postdoctoral Researcher",
    meta: "University of North Carolina (UNC), United States",
  },
];

export const FOUNDER_DOMAINS = [
  "Cellular senescence & geroscience",
  "NK-cell immunology",
  "Reproductive immunology",
  "Stem cells & ovarian function",
  "Exosomes",
  "Cancer biology",
  "Biomarkers & AI in ageing",
  "Longevity biotechnology",
];

export const FOUNDER_EXPERTISE = [
  "Cellular Senescence",
  "Geroscience",
  "Regenerative Medicine",
  "Stem Cells",
  "Pharmacology",
  "Longevity Biotechnology",
];

/** Institutionally reported figures, attributed to the university profile, not independent bibliometrics. */
export const FOUNDER_FIGURES: { value: string; label: string }[] = [
  { value: "20+", label: "SCI papers as first or corresponding author" },
  { value: "2", label: "Scientific monographs" },
  { value: "8", label: "Granted patents" },
];

export const FOUNDER_FIGURES_SOURCE = "https://kyc.sdmpu.edu.cn/2024/0626/c5166a122862/page.htm";

export const FOUNDER_PUBLICATIONS: Publication[] = [
  {
    year: "2025",
    title: "mRNA vaccines in the context of cancer treatment",
    journal: "Journal of Translational Medicine",
    role: "Equal contribution",
    href: "https://pubmed.ncbi.nlm.nih.gov/39762875/",
  },
  {
    year: "2024",
    title:
      "Longevity biotechnology: bridging AI, biomarkers, geroscience and clinical applications",
    journal: "Review",
    role: "Coauthor",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11552646/",
  },
  {
    year: "2024",
    title:
      "hUMSCs restore ovarian function in POI mice via GSK3β-mediated mitochondrial dynamics",
    journal: "Peer-reviewed article",
    role: "Author (Binzhou · Cellogene)",
    href: "https://pubmed.ncbi.nlm.nih.gov/39152165/",
  },
  {
    year: "2023",
    title: "Rutin is a potent senomorphic agent",
    journal: "Aging Cell",
    role: "Corresponding author",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10776113/",
  },
  {
    year: "2023",
    title:
      "PDK4-dependent hypercatabolism and lactate production of senescent cells promotes cancer malignancy",
    journal: "Nature Metabolism",
    role: "Coauthor",
    href: "https://pubmed.ncbi.nlm.nih.gov/37276826/",
  },
  {
    year: "2023",
    title: "hUMSCs transplantation regulates AMPK/NR4A1 signalling in POI rats",
    journal: "Peer-reviewed article",
    role: "Author (Binzhou · Cellogene)",
    href: "https://pubmed.ncbi.nlm.nih.gov/36307672/",
  },
  {
    year: "2021",
    title:
      "The flavonoid procyanidin C1 has senotherapeutic activity and increases lifespan in mice",
    journal: "Nature Metabolism",
    role: "Equal contribution",
    href: "https://pubmed.ncbi.nlm.nih.gov/34873338/",
  },
  {
    year: "2021",
    title:
      "Hypoxia enhances the production and antitumor effect of exosomes derived from NK cells",
    journal: "Peer-reviewed article",
    role: "Corresponding author",
    href: "https://pdfs.semanticscholar.org/d748/178c9a555de01be0678f850272e4f27c70e3.pdf",
  },
  {
    year: "2020",
    title:
      "hUMSCs regulate differentiation of ovarian stromal cells via TGF-β1/Smad3 signalling",
    journal: "Peer-reviewed article",
    role: "Corresponding author",
    href: "https://pubmed.ncbi.nlm.nih.gov/32894203/",
  },
  {
    year: "2020",
    title:
      "hUMSC transplantation restores ovarian function in POI rats via AMPK/mTOR signalling",
    journal: "Peer-reviewed article",
    role: "Author",
    href: "https://pubmed.ncbi.nlm.nih.gov/32620136/",
  },
  {
    year: "2019",
    title:
      "CD83+CCR7+ NK cells induced by interleukin 18 in experimental autoimmune uveitis",
    journal: "Journal of Cellular and Molecular Medicine",
    role: "Corresponding author",
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6378215/",
  },
  {
    year: "2017",
    title: "NK cells are negatively regulated by sCD83 in experimental autoimmune uveitis",
    journal: "Scientific Reports",
    role: "Corresponding author",
    href: "https://pubmed.ncbi.nlm.nih.gov/29038541/",
  },
  {
    year: "2017",
    title: "Involvement of the JAK-STAT pathway in collagen regulation of decidual NK cells",
    journal: "Peer-reviewed article",
    role: "Author",
    href: "https://pubmed.ncbi.nlm.nih.gov/28975683/",
  },
  {
    year: "2017",
    title: "Human decidua mesenchymal stem cells regulate decidual NK cell function",
    journal: "Peer-reviewed article",
    role: "Author",
    href: "https://pubmed.ncbi.nlm.nih.gov/28677766/",
  },
  {
    year: "2015",
    title:
      "PROX1 promotes hepatocellular carcinoma proliferation and sorafenib resistance",
    journal: "Oncogene",
    role: "Corresponding author",
    href: "https://pubmed.ncbi.nlm.nih.gov/25772246/",
  },
  {
    year: "2014",
    title:
      "Trophoblasts and decidual stromal cells regulate decidual NK cell functions via collagen–LAIR-1 interaction",
    journal: "Peer-reviewed article",
    role: "Author",
    href: "https://pubmed.ncbi.nlm.nih.gov/24548186/",
  },
];

export const FOUNDER_PATENTS: LinkedItem[] = [
  {
    title: "Simple device for efficient expansion of peripheral-blood NK cells",
    meta: "ZL201711290960.6 · Granted 4 May 2021",
    detail: "Core NK-cell manufacturing process technology; licensed in 2022.",
  },
  {
    title: "Mesenchymal stem-cell exosomes and compositions, cosmetic applications",
    meta: "ZL202111445023.X · Granted 10 October 2023",
    detail: "Biological materials and cosmetic applications; transferred in 2024.",
  },
  {
    title: "Automated NK-cell culture device",
    meta: "ZL20230548727.8 · Utility model, granted 18 August 2023",
    detail: "Automation supporting scalable NK-cell production; transferred in 2024.",
  },
  {
    title: "NK-cell activity detection kit",
    meta: "Authorised patent transfer reported 2022",
    detail: "Diagnostic assay for NK-cell activity.",
  },
];

export const FOUNDER_GRANTS: LinkedItem[] = [
  {
    title: "LAIRs' regulation of decidual NK-cell functional development in early pregnancy",
    meta: "National Natural Science Foundation of China · 81370730",
    detail: "RMB 660,000 · 2014–2017",
  },
  {
    title: "STAT-mediated regulation of decidual NK-cell functional development",
    meta: "National Natural Science Foundation of China · 81571512",
    detail: "RMB 700,000 · 2016–2019",
  },
  {
    title: "Provincial research programme",
    meta: "Shandong Natural Science Foundation · ZR2023MH262",
    detail: "Acknowledged in 2024–25 publications.",
  },
  {
    title: "Yantai Double Hundred Program",
    meta: "Talent and research support",
    detail: "Cited in senomorphic therapeutics research.",
  },
  {
    title: "University–locality collaborative programme",
    meta: "2021XDHZ082",
    detail: "Collaborative research funding.",
  },
];

export const FOUNDER_SAME_AS = [
  "https://kyc.sdmpu.edu.cn/2024/0626/c5166a122862/page.htm",
  "https://pubmed.ncbi.nlm.nih.gov/?term=Qiang+Fu+Binzhou+Medical+University",
];

/** Stable URL slug derived from a publication title. */
export function publicationSlug(publication: Pick<Publication, "title" | "year">): string {
  const base = publication.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .slice(0, 10)
    .join("-");
  return `${base}-${publication.year}`;
}

export function findPublication(slug: string): Publication | undefined {
  return FOUNDER_PUBLICATIONS.find((publication) => publicationSlug(publication) === slug);
}

/** Human-readable name of the host serving the public source record. */
export function sourceName(href: string): string {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    if (host.includes("pubmed")) return "PubMed";
    if (host.includes("pmc")) return "PubMed Central";
    if (host.includes("semanticscholar")) return "Semantic Scholar";
    return host;
  } catch {
    return "External source";
  }
}

/** Formatted citation line for a publication. */
export function citation(publication: Publication): string {
  return `Fu Q. ${publication.title}. ${publication.journal}. ${publication.year}. ${publication.role}.`;
}
