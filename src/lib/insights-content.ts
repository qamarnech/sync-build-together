export type NewsItem = {
  slug: string;
  title: string;
  source: string;
  url: string;
  topic: string;
  summary: string;
};

export const LONGEVITY_NEWS: NewsItem[] = [
  {
    slug: "nature-aging",
    title: "Nature Aging, ageing biology and geroscience research",
    source: "Nature Aging",
    url: "https://www.nature.com/nataging/",
    topic: "Geroscience",
    summary:
      "Peer-reviewed research across the biology of ageing, interventions and translational geroscience. A primary signal source for the mission.",
  },
  {
    slug: "who-healthy-ageing",
    title: "WHO, Decade of Healthy Ageing",
    source: "World Health Organization",
    url: "https://www.who.int/initiatives/decade-of-healthy-ageing",
    topic: "Population Impact",
    summary:
      "Global policy framework for healthy ageing, functional ability and population-level healthspan targets to 2030.",
  },
  {
    slug: "uk-ageing-society",
    title: "UKRI, Healthy Ageing Challenge",
    source: "UK Research and Innovation",
    url: "https://www.ukri.org/what-we-do/our-main-funds-and-areas-of-support/browse-our-areas-of-investment-and-support/healthy-ageing-challenge/",
    topic: "UK Mission",
    summary:
      "UK national investment connecting research, industry and services to extend healthy, independent living.",
  },
  {
    slug: "hevolution",
    title: "Hevolution Foundation, funding healthspan science",
    source: "Hevolution",
    url: "https://hevolution.com/",
    topic: "Funding",
    summary:
      "Large-scale non-profit funding for geroscience research and biotech translation in ageing.",
  },
  {
    slug: "arpa-h-proact",
    title: "Biomarkers of ageing consortium",
    source: "Biomarkers of Aging Consortium",
    url: "https://www.agingconsortium.org/",
    topic: "Biomarkers",
    summary:
      "Community effort to validate and standardise biological-age measures so interventions can be compared credibly.",
  },
  {
    slug: "cell-hallmarks",
    title: "Hallmarks of Aging: an expanding universe",
    source: "Cell",
    url: "https://www.cell.com/cell/fulltext/S0092-8674(22)01377-0",
    topic: "Foundations",
    summary:
      "The 2023 update to the hallmarks framework, the shared vocabulary underpinning most ageing research programmes.",
  },
];

export type EventItem = {
  slug: string;
  name: string;
  cadence: string;
  location: string;
  url: string;
  focus: string;
  summary: string;
};

export const EVENTS: EventItem[] = [
  {
    slug: "ardd",
    name: "Aging Research & Drug Discovery (ARDD)",
    cadence: "Annual · Late August",
    location: "Copenhagen, Denmark",
    url: "https://agingpharma.org/",
    focus: "Geroscience · Drug discovery",
    summary:
      "The largest academic meeting on ageing pharmacology, bringing together geroscience, biotech and clinical translation.",
  },
  {
    slug: "longevity-summit-dublin",
    name: "Longevity Summit Dublin",
    cadence: "Annual",
    location: "Dublin, Ireland",
    url: "https://longevitysummitdublin.com/",
    focus: "Translation · Investment",
    summary:
      "Scientists, founders and investors working on rejuvenation biotechnology and the path to clinical use.",
  },
  {
    slug: "british-society-research-ageing",
    name: "British Society for Research on Ageing",
    cadence: "Annual conference",
    location: "United Kingdom",
    url: "https://bsra.org.uk/",
    focus: "UK research community",
    summary:
      "The UK's principal scientific society for biogerontology, a key node in the UK longevity directory.",
  },
  {
    slug: "gsa",
    name: "Gerontological Society of America, Annual Scientific Meeting",
    cadence: "Annual · November",
    location: "United States",
    url: "https://www.geron.org/",
    focus: "Gerontology · Clinical",
    summary:
      "Interdisciplinary gerontology from biology through clinical care, policy and social science.",
  },
  {
    slug: "iagg",
    name: "IAGG World Congress of Gerontology and Geriatrics",
    cadence: "Every four years",
    location: "Rotating, global",
    url: "https://iagg.info/",
    focus: "Global · Policy",
    summary:
      "Global convening point for gerontology, geriatrics and healthy-ageing policy across regions.",
  },
  {
    slug: "mr-longevity-roundtables",
    name: "MR Longevity roundtables",
    cadence: "Rolling",
    location: "China · UK · Global",
    url: "/contact",
    focus: "Collaboration",
    summary:
      "Invitation-based working sessions matching researchers, clinicians, innovators and partners around active projects.",
  },
];

export type HighlightItem = {
  slug: string;
  title: string;
  area: string;
  body: string;
  implication: string;
};

export const RESEARCH_HIGHLIGHTS: HighlightItem[] = [
  {
    slug: "senescence",
    title: "Cellular senescence as a modifiable driver",
    area: "Cellular Senescence",
    body: "Senescent cells accumulate with age and drive chronic inflammation and tissue dysfunction. Selective clearance and modulation strategies remain among the most actively studied interventions in ageing biology.",
    implication:
      "Needs validated biomarkers of senescent burden before clinical claims can be made responsibly.",
  },
  {
    slug: "biological-age",
    title: "Biological age clocks are converging on standards",
    area: "Biological Age",
    body: "Epigenetic, proteomic and functional measures increasingly agree on direction, but not magnitude. Consortium work is standardising how clocks are reported and validated.",
    implication:
      "Comparable endpoints make it possible to judge whether an intervention actually changes ageing trajectory.",
  },
  {
    slug: "immune-ageing",
    title: "Immune ageing shapes outcomes across disease",
    area: "Immune Ageing",
    body: "Thymic involution, clonal expansion and inflammageing alter response to infection, cancer and vaccination, connecting ageing biology directly to mainstream clinical medicine.",
    implication:
      "A strong entry point for clinical validation partnerships within existing care pathways.",
  },
  {
    slug: "regenerative",
    title: "Regenerative and cell-based approaches move toward the clinic",
    area: "Regenerative Medicine",
    body: "Stem-cell, NK-cell and exosome technologies are progressing from mechanism to manufacturable products, with manufacturing and regulatory capability now the limiting step.",
    implication:
      "Manufacturing and supply capability determines which discoveries reach patients.",
  },
  {
    slug: "metabolic",
    title: "Metabolic health remains the highest-leverage foundation",
    area: "Metabolic Ageing",
    body: "Nutrition, body composition, muscle mass and mitochondrial function influence nearly every downstream ageing pathway, and are measurable and modifiable at population scale.",
    implication:
      "Population impact is achievable now, without waiting for novel therapeutics.",
  },
  {
    slug: "ai-models",
    title: "AI models of ageing require evidence discipline",
    area: "AI Models of Ageing",
    body: "Multi-omic and multimodal models can predict health trajectories, but generalisability across cohorts and ethnicities is the open question. Reporting guidelines are emerging.",
    implication:
      "Model claims need external validation cohorts before entering clinical or consumer use.",
  },
];
