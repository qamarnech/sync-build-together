export type ArticleSection = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  topic: string;
  intro: string;
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-longevity-science",
    title: "What Is Longevity Science? A Plain-Language Guide to the Fastest-Growing Field in US Health Research",
    description:
      "Longevity science explained for a US audience: what researchers actually study, how the biology of ageing became a serious field, and where the evidence stands today.",
    date: "2026-09-20",
    readTime: "7 min read",
    topic: "Longevity Science",
    intro:
      "Searches for longevity science have grown sharply in the United States, yet the term is still widely misunderstood. This guide explains what the field actually studies, how it differs from anti-ageing marketing, and why credible researchers treat ageing as a biological process that can be measured and, in part, modified.",
    sections: [
      {
        heading: "A working definition",
        body: [
          "Longevity science is the study of the biological mechanisms that drive ageing, and of interventions that may extend the years lived in good health, often called healthspan. It is not about immortality, and it is not the same as the anti-ageing industry. The field's serious core is geroscience, the discipline that asks why ageing is the largest shared risk factor for cancer, cardiovascular disease, dementia and most other chronic conditions.",
          "The organising idea is straightforward. If ageing biology can be slowed or modified, many diseases could be delayed at once, rather than treated one by one. That hypothesis now shapes research programmes at the US National Institute on Aging, major universities and a growing number of biotechnology companies.",
        ],
      },
      {
        heading: "What researchers actually study",
        body: [
          "Most programmes are organised around the hallmarks of ageing, a framework first proposed in 2013 and expanded in 2023 in the journal Cell. The hallmarks include genomic instability, cellular senescence, mitochondrial dysfunction, chronic inflammation and altered nutrient sensing, among others. They give the field a shared vocabulary, so results from different laboratories can be compared.",
          "Practical work falls into a few broad streams. Some groups study pathways such as mTOR and AMPK that regulate how cells respond to nutrients and stress. Others develop senolytic compounds that clear damaged senescent cells in animal models. A third stream builds biomarkers of ageing, measurable indicators intended to show whether an intervention is changing biological age, not just symptoms.",
        ],
      },
      {
        heading: "What is established and what is not",
        body: [
          "Established: ageing is malleable in model organisms, exercise and cardiometabolic health strongly influence healthspan in humans, and several drugs approved for other uses are being formally tested against ageing-related outcomes. The TAME trial, led from the United States, is testing whether metformin can delay the onset of multiple age-related diseases, a landmark design for the field.",
          "Not established: no therapy is approved anywhere to treat ageing itself, claims of reversing ageing in humans remain unproven, and most consumer longevity products lack controlled human evidence. Responsible sources, including the National Institute on Aging, are explicit about this boundary. Anyone claiming otherwise should be read with caution.",
        ],
      },
      {
        heading: "Why the United States leads",
        body: [
          "The US combines the largest concentration of ageing research funding, the National Institute on Aging's budget, deep venture capital interest and a large consumer market searching for answers. That mix produces both world-class science and aggressive marketing, which is exactly why a clear-eyed definition of the field matters.",
          "For MR Longevity, the mission is to connect the credible side of this landscape, researchers, clinicians, investors and members of the public, so that promising science reaches people responsibly. Explore our missions and the UK longevity directory to see how that work is organised.",
        ],
      },
    ],
    sources: [
      { label: "National Institute on Aging", url: "https://www.nia.nih.gov/" },
      {
        label: "Hallmarks of Aging: An Expanding Universe, Cell (2023)",
        url: "https://www.cell.com/cell/fulltext/S0092-8674(22)01377-0",
      },
      { label: "TAME Trial, American Federation for Aging Research", url: "https://www.afar.org/tame-trial" },
    ],
  },
  {
    slug: "biomarkers-of-ageing-explained",
    title: "Biomarkers of Ageing, Explained: What Biological Age Tests Can and Cannot Tell You",
    description:
      "A clear guide to biomarkers of ageing for US readers: epigenetic clocks, biological age tests, what the science supports, and how validation efforts are trying to standardise the field.",
    date: "2026-09-20",
    readTime: "8 min read",
    topic: "Biomarkers",
    intro:
      "Biological age tests are among the most searched longevity products in the United States. But what do these tests actually measure, how reliable are they, and why do researchers say the field still lacks validated standards? This guide separates the promising science from the marketing.",
    sections: [
      {
        heading: "What a biomarker of ageing is",
        body: [
          "A biomarker of ageing is a measurable characteristic that tracks biological ageing better than the date on your passport. Chronological age is fixed. Biological age, in principle, reflects how quickly your tissues and systems are accumulating damage, and it may respond to lifestyle, disease and potentially to interventions.",
          "Good biomarkers matter because clinical trials of longevity interventions cannot wait decades for outcomes. If a validated marker moved reliably within months, researchers could test whether a treatment slows ageing far faster and more cheaply than traditional trials allow.",
        ],
      },
      {
        heading: "The main types in use today",
        body: [
          "Epigenetic clocks are the best known. First developed by Steve Horvath at UCLA in 2013, they estimate biological age from chemical marks on DNA called methylation. Later clocks, such as GrimAge and DunedinPACE, were trained to predict health outcomes and pace of ageing rather than chronological age, and they correlate with mortality and disease risk in large cohorts.",
          "Other approaches use blood chemistry panels, immune cell profiles, proteomics, imaging and wearable-derived measures such as heart rate variability. Each captures a different slice of biology. None, on its own, captures ageing as a whole.",
        ],
      },
      {
        heading: "What the tests can and cannot tell you",
        body: [
          "What they can do, in research settings: distinguish faster from slower agers at population level, and flag elevated risk before disease appears. A 2023 study in Nature Aging linked proteomic ageing signatures to future disease risk across thousands of participants.",
          "What they cannot yet do: give an individual a precise, actionable biological age. Test-retest variation between samples from the same person can be large, different commercial tests often disagree, and there is no consensus that changing a test score means you have changed your underlying health trajectory. The Biomarkers of Aging Consortium, a community of leading researchers, exists precisely to fix this through validation and standardisation.",
        ],
      },
      {
        heading: "How to read the marketing",
        body: [
          "Treat any test sold with promises of reversing ageing as unsupported. The credible position, shared by academic groups and the consortium, is that these measures are promising research tools moving towards clinical utility, not yet proven guides for individual decisions.",
          "If you do take a test, interpret it alongside conventional measures with strong evidence, blood pressure, lipids, glucose control, fitness and sleep, and discuss results with a clinician. That combination reflects where the science genuinely stands.",
        ],
      },
    ],
    sources: [
      { label: "Biomarkers of Aging Consortium", url: "https://www.agingconsortium.org/" },
      { label: "Horvath's epigenetic clock, Genome Biology (2013)", url: "https://genomebiology.biomedcentral.com/articles/10.1186/gb-2013-14-10-r115" },
      { label: "Nature Aging", url: "https://www.nature.com/nataging/" },
    ],
  },
  {
    slug: "us-aging-research-landscape",
    title: "Inside US Aging Research: The Institutes, Trials and Funding Shaping Longevity Science in 2026",
    description:
      "A map of the US aging research landscape: the National Institute on Aging, landmark trials like TAME, federal and philanthropic funding, and what it means for the future of healthy longevity.",
    date: "2026-09-20",
    readTime: "8 min read",
    topic: "Aging Research",
    intro:
      "The United States is the centre of gravity for ageing research, home to the world's largest public funder of the field, its most-watched clinical trials and an expanding base of private capital. This article maps the landscape for researchers, clinicians, investors and curious readers who want to understand where the science is heading.",
    sections: [
      {
        heading: "The public engine, the National Institute on Aging",
        body: [
          "The National Institute on Aging, part of the National Institutes of Health, is the primary federal funder of ageing research in the US. Its programmes span basic biology, translational geroscience, Alzheimer's disease and related dementias, and clinical trials. Its Interventions Testing Program has spent two decades rigorously testing compounds in mice, producing some of the field's most cited results, including early evidence for rapamycin.",
          "Public funding matters because it de-risks the questions private capital will not touch, long timescales, unpatentable compounds, and the basic biology on which everything else depends.",
        ],
      },
      {
        heading: "Trials that could change the field",
        body: [
          "The TAME trial, Targeting Aging with Metformin, is the field's reference point. Led by researchers at the Albert Einstein College of Medicine and coordinated by the American Federation for Aging Research, it tests whether metformin delays the onset of multiple age-related diseases in older adults. Whatever its outcome, TAME is designed to show regulators a pathway for approving therapies that target ageing biology rather than single diseases.",
          "Alongside it, a growing portfolio of trials tests senolytics, NAD-related compounds, GLP-1 medicines and exercise mimetics against ageing-related endpoints. Results have been mixed, which is normal for a young field, and the failures are as instructive as the successes.",
        ],
      },
      {
        heading: "The private and philanthropic surge",
        body: [
          "Private investment in longevity biotechnology has grown from a niche to a multi-billion-dollar category over the past decade. Philanthropic funders have changed the scale of ambition: the Hevolution Foundation has committed up to one billion dollars to healthspan science, and the XPRIZE Healthspan competition offers one hundred and one million dollars for therapies that restore function in older adults.",
          "This capital brings speed and talent, but also pressure to overstate results. The healthiest parts of the US landscape pair investment with scientific governance, peer review and honest communication about uncertainty.",
        ],
      },
      {
        heading: "What it means for healthy longevity",
        body: [
          "The direction of travel is clear. Ageing biology is moving from the periphery of medicine towards its centre, and the US leads that shift in funding, trials and talent. The open questions are translational: which interventions work in humans, how to measure their effects credibly, and how to deliver benefits equitably.",
          "Those are precisely the questions MR Longevity exists to help answer, by connecting science, clinical validation, responsible innovation and public understanding across borders. If you work in this space, we invite you to collaborate with the mission.",
        ],
      },
    ],
    sources: [
      { label: "National Institute on Aging", url: "https://www.nia.nih.gov/" },
      { label: "TAME Trial, American Federation for Aging Research", url: "https://www.afar.org/tame-trial" },
      { label: "Hevolution Foundation", url: "https://hevolution.com/" },
      { label: "XPRIZE Healthspan", url: "https://www.xprize.org/prizes/healthspan" },
    ],
  },
];
