export type DirectoryEntry = {
  name: string;
  description: string;
  href: string;
};

export type DirectoryGroup = {
  id: string;
  title: string;
  items: DirectoryEntry[];
};

export const UK_DIRECTORY_INTRO = [
  "A consolidated map of the United Kingdom's healthy longevity landscape, separated by function: geroscience laboratories, gerontology and population-ageing institutes, NHS research units, preventive and longevity clinics, therapeutic biotechnology, AgeTech, charities, policy bodies and population cohorts.",
  "The broadest public directories are the UKAgeNet member directory, the British Society of Gerontology centre directory, Age UK's research-centre list and the Longevity Platform ecosystem database. UKAgeNet describes itself as connecting more than 70 national centres, institutes, networks and research groups.",
];

export const UK_DIRECTORY_CAVEAT =
  "Clinics and companies listed here are commercial providers rather than research institutes. Services, claims, clinician qualifications and evidence standards differ, so each entry should be assessed independently. Some aggregated databases are partly AI-compiled and should be verified before relying on individual records.";

export const UK_DIRECTORY_CLASSIFICATION = [
  "Biological ageing or geroscience",
  "Clinical research and NHS translation",
  "Preventive and longevity medicine",
  "Therapeutic biotechnology",
  "Diagnostics and biomarkers",
  "AgeTech and independent living",
  "Social care and dementia",
  "Public health and policy",
  "Charities and advocacy",
  "Investment, incubation and ecosystem support",
];

export const UK_DIRECTORY: DirectoryGroup[] = [
  {
    title: "Directory hubs",
    items: [
      {
        name: "UKAgeNet",
        description: "national cross-disciplinary ageing-research network.",
        href: "https://ukagenet.co.uk/"
      },
      {
        name: "UKAgeNet member directory",
        description: "centres, institutes and networks represented in the membership.",
        href: "https://ukagenet.co.uk/directory/"
      },
      {
        name: "British Society of Gerontology: ageing research centres",
        description: "searchable UK and Ireland directory.",
        href: "https://www.britishgerontology.org/centres"
      },
      {
        name: "Age UK: centres for ageing research",
        description: "universities, research centres, consortia, councils and funding programmes.",
        href: "https://www.ageuk.org.uk/our-impact/policy-research/what-we-research/resources-for-further-research/centres-for-ageing-research/"
      },
      {
        name: "UK longevity ecosystem",
        description: "broad database of companies, clinics, investors and hubs; the platform states that its database is partly AI-aggregated and should be checked before relying on individual entries.",
        href: "https://www.longevity.international/uk"
      },
      {
        name: "Benchscope: UK ageing and longevity companies",
        description: "commercial company directory.",
        href: "https://benchscope.com/uk/directory/ageing-longevity"
      },
      {
        name: "UK SPINE ageing networks",
        description: "organisations supporting healthy-ageing research.",
        href: "https://kespine.org.uk/resources/networks/"
      }
    ],
    id: "directories"
  },
  {
    title: "Biological ageing & geroscience",
    items: [
      {
        name: "UCL Institute of Healthy Ageing",
        description: "biology of ageing and age-related disease.",
        href: "https://www.ucl.ac.uk/life-sciences/iha"
      },
      {
        name: "Healthy Lifespan Institute, University of Sheffield",
        description: "multimorbidity, frailty and healthy lifespan.",
        href: "https://sheffield.ac.uk/healthy-lifespan"
      },
      {
        name: "Babraham Institute",
        description: "epigenetics, immunology, cell signalling and lifelong health.",
        href: "https://www.babraham.ac.uk/"
      },
      {
        name: "Glasgow Geroscience Group",
        description: "molecular, cellular and organismal mechanisms of ageing.",
        href: "https://g-3.co.uk/"
      },
      {
        name: "Glasgow Ageing Research Network",
        description: "interdisciplinary ageing research.",
        href: "https://www.gla.ac.uk/schools/bohvm/research/sigs/garner/"
      },
      {
        name: "Aston Research Centre for Healthy Ageing",
        description: "healthy ageing and age-related disease research.",
        href: "https://www.aston.ac.uk/research/centres/archa"
      },
      {
        name: "Brunel Institute for Ageing Studies",
        description: "ageing and environmental, health and social research.",
        href: "https://www.brunel.ac.uk/research/Institutes/Institute-of-Environment-Health-and-Societies"
      },
      {
        name: "Centre for Integrated Systems Biology of Ageing and Nutrition",
        description: "systems biology, nutrition and ageing.",
        href: "https://www.birmingham.ac.uk/research/centres/centre-for-systems-biology"
      },
      {
        name: "Centre for Integrated Research into Musculoskeletal Ageing",
        description: "musculoskeletal ageing and disease.",
        href: "https://www.liverpool.ac.uk/cima/"
      },
      {
        name: "University of Liverpool Institute of Ageing and Chronic Disease",
        description: "ageing, chronic disease and translational research.",
        href: "https://www.liverpool.ac.uk/ageing-and-chronic-disease/"
      },
      {
        name: "Wolfson Centre for Age-Related Diseases",
        description: "age-related neurological and sensory disorders.",
        href: "https://www.kcl.ac.uk/research/wolfson-centre-for-age-related-diseases"
      },
      {
        name: "Medawar Centre for Healthy Ageing Research",
        description: "biological and clinical healthy-ageing research.",
        href: "https://www.kcl.ac.uk/research/centres/medawar-centre-for-healthy-ageing-research"
      },
      {
        name: "Francis Crick Institute",
        description: "fundamental biomedical research, including ageing-related biology.",
        href: "https://www.crick.ac.uk/"
      },
      {
        name: "The Alan Turing Institute",
        description: "AI and data science relevant to ageing, health and biomedical research.",
        href: "https://www.turing.ac.uk/"
      },
      {
        name: "UbbLE: UK Longevity Explorer",
        description: "population and genetic research relating to longevity.",
        href: "https://www.bristol.ac.uk/population-health-sciences/projects/ubble/"
      },
      {
        name: "Cambridge Centre for Ageing and Neuroscience",
        description: "ageing, cognition and neuroscience.",
        href: "https://www.cam-can.com/"
      },
      {
        name: "Centre for Cognitive Ageing and Cognitive Epidemiology, Edinburgh",
        description: "cognitive ageing and epidemiology.",
        href: "https://www.ed.ac.uk/healthy-ageing"
      },
      {
        name: "Centre for Healthier Lives, Newcastle University",
        description: "lifestyle, nutrition, physical activity and healthy lifespan.",
        href: "https://www.ncl.ac.uk/healthier-lives/"
      },
      {
        name: "Centre for Nutrition, Exercise and Metabolism, University of Bath",
        description: "nutrition, exercise, metabolism and ageing-related health.",
        href: "https://www.bath.ac.uk/research-centres/centre-for-nutrition-exercise-and-metabolism/"
      }
    ],
    id: "geroscience"
  },
  {
    title: "Gerontology, population and social ageing",
    items: [
      {
        name: "Oxford Institute of Population Ageing",
        description: "demographic, economic, social and health implications of population ageing.",
        href: "https://www.ageing.ox.ac.uk/"
      },
      {
        name: "Institute of Gerontology, King’s College London",
        description: "healthy ageing, long-term care, employment, housing and social policy.",
        href: "https://www.kcl.ac.uk/research/institute-of-gerontology"
      },
      {
        name: "Ageing Research at King’s",
        description: "cross-faculty healthy-longevity consortium.",
        href: "https://www.kcl.ac.uk/research/ageing-research-at-kings"
      },
      {
        name: "Manchester Institute for Collaborative Research on Ageing",
        description: "interdisciplinary ageing research.",
        href: "https://micra.manchester.ac.uk/"
      },
      {
        name: "Manchester Urban Ageing Research Group",
        description: "urban ageing and age-friendly cities.",
        href: "https://micra.manchester.ac.uk/muarg/"
      },
      {
        name: "Centre for Ageing Research, Lancaster University",
        description: "active, healthy ageing and compression of morbidity.",
        href: "https://www.lancaster.ac.uk/health-and-medicine/research/c4ar/"
      },
      {
        name: "Centre for Research on Ageing, University of Southampton",
        description: "ageing, health and later-life research.",
        href: "https://www.southampton.ac.uk/research/institutes/centre-for-research-on-ageing"
      },
      {
        name: "Centre for Research on Ageing and Generations, University of Surrey",
        description: "life course, generations and social ageing.",
        href: "https://www.surrey.ac.uk/centre-research-ageing-generations"
      },
      {
        name: "Centre for Social Gerontology, Keele University",
        description: "social gerontology and later life.",
        href: "https://www.keele.ac.uk/healthandrehabilitation/centres/socialgerontology/"
      },
      {
        name: "Centre for Ageing and Biographical Studies, Open University",
        description: "ageing across the life course and later life.",
        href: "https://wels.open.ac.uk/research/centres/cabs"
      },
      {
        name: "Centre for Ageing and the Life Course, University of Liverpool",
        description: "inequalities and lived experience in ageing.",
        href: "https://www.liverpool.ac.uk/sociology-social-policy-and-criminology/research/research-clusters/centre-ageing-life-course/"
      },
      {
        name: "Centre for Ageing and Mental Health, University of Chester",
        description: "mental health and later life.",
        href: "https://www1.chester.ac.uk/research/centre-ageing-and-mental-health"
      },
      {
        name: "Centre for Ageing Population Studies, UCL",
        description: "health, independence and ageing interventions.",
        href: "https://www.ucl.ac.uk/epidemiology-health-care/research/primary-care-and-population-health/research/caps"
      },
      {
        name: "Centre for Ageing Research, University of Greenwich",
        description: "chronic illness and ageing.",
        href: "https://www.gre.ac.uk/research/centres/centre-for-chronic-illness-and-ageing"
      },
      {
        name: "The Geller Institute of Ageing and Memory",
        description: "ageing, memory and dementia.",
        href: "https://www.uwl.ac.uk/research/research-centres/geller-institute-ageing-and-memory"
      },
      {
        name: "Centre for Ageing and Biographical Studies",
        description: "interdisciplinary later-life research.",
        href: "https://wels.open.ac.uk/research/projects/ageing-and-later-life-cabs"
      },
      {
        name: "Centre for Research into the Older Workforce",
        description: "older workers, employment and later-life careers.",
        href: "https://agediversity.org/"
      },
      {
        name: "Cambridge Public Health: life course and ageing",
        description: "population health, ageing and age-friendly environments.",
        href: "https://www.cph.cam.ac.uk/research/life-course-and-ageing"
      },
      {
        name: "Queen’s on Ageing Research Network",
        description: "ageing research across Queen’s University Belfast.",
        href: "https://www.qub.ac.uk/Research/Our-impact/ageing/"
      }
    ],
    id: "gerontology"
  },
  {
    title: "Dementia, cognition and care",
    items: [
      {
        name: "Centre for Ageing and Dementia Research, Wales",
        description: "biological, psychosocial, environmental and policy research.",
        href: "https://cadr.cymru/"
      },
      {
        name: "Centre for Environment, Dementia and Ageing Research, University of Stirling",
        description: "environments, dementia and later life.",
        href: "https://www.stir.ac.uk/about/faculties/social-sciences/research/cedar/"
      },
      {
        name: "Association for Dementia Studies, University of Worcester",
        description: "evidence-based dementia care and living well.",
        href: "https://www.worcester.ac.uk/about/academic-schools/school-of-allied-health-and-community/allied-health-research/association-for-dementia-studies/"
      },
      {
        name: "Salford Institute for Dementia",
        description: "dementia research, education and practice.",
        href: "https://www.salford.ac.uk/salford-institute-for-dementia"
      },
      {
        name: "UK DRI Care Research & Technology",
        description: "AI, robotics, home care and dementia technology.",
        href: "https://ukdri.ac.uk/centres/care-research-technology"
      },
      {
        name: "Dementia Research Centre, UCL Queen Square",
        description: "dementia and neurodegenerative disease.",
        href: "https://www.ucl.ac.uk/ion/research/research-centres/dementia-research-centre"
      },
      {
        name: "Dementia Studies, University of Bradford",
        description: "dementia care and research.",
        href: "https://www.bradford.ac.uk/health/dementia-studies/"
      },
      {
        name: "TwinsUK",
        description: "twin registry supporting research into ageing, disease, genetics, diet and the microbiome.",
        href: "https://twinsuk.ac.uk/"
      },
      {
        name: "Centre for Integrative Neuroscience and Neurodynamics, University of Reading",
        description: "neuroscience, behaviour and lifespan development.",
        href: "https://research.reading.ac.uk/cinn/"
      },
      {
        name: "NICOLA study",
        description: "Northern Ireland Cohort for the Longitudinal Study of Ageing.",
        href: "https://www.qub.ac.uk/sites/NICOLA/"
      },
      {
        name: "English Longitudinal Study of Ageing",
        description: "longitudinal population study of ageing in England.",
        href: "https://www.elsa-project.ac.uk/"
      }
    ],
    id: "dementia"
  },
  {
    title: "Healthy ageing and chronic conditions",
    items: [
      {
        name: "Healthy Ageing and Chronic Conditions Research Institute, Swansea",
        description: "lifelong health and chronic-condition management.",
        href: "https://www.swansea.ac.uk/medicine-health-life-science/research/research-institutes/healthy-ageing-and-chronic-conditions/"
      },
      {
        name: "Centre for Ageing and Dementia Research, Wales",
        description: "ageing and dementia across biological, social and environmental dimensions.",
        href: "https://cadr.cymru/"
      },
      {
        name: "Centre for Adult Social Care Research, Cardiff",
        description: "adult social care research and evidence implementation.",
        href: "https://careresearchwales.org/"
      },
      {
        name: "Advanced Care Research Centre, University of Edinburgh",
        description: "data, technology and care in later life.",
        href: "https://usher.ed.ac.uk/advanced-care-research-centre/"
      },
      {
        name: "Centre for Health Technology, University of Plymouth",
        description: "digital health, AI, robotics and care technology.",
        href: "https://www.plymouth.ac.uk/research/centre-for-health-technology"
      },
      {
        name: "Robotics Engineering and Computing for Healthcare",
        description: "robotics, sensors, AI and assistive healthcare.",
        href: "https://www.uwe.ac.uk/research/centres-and-groups/reach"
      },
      {
        name: "Plymouth Institute of Health and Care Research",
        description: "health, care, dementia and community research.",
        href: "https://www.plymouth.ac.uk/research/institutes/health"
      },
      {
        name: "NIHR Policy Research Unit in Healthy Ageing",
        description: "evidence for healthy-ageing policy.",
        href: "https://www.hapru.nihr.ac.uk/"
      }
    ],
    id: "healthy-ageing"
  },
  {
    title: "NHS and clinical research",
    items: [
      {
        name: "NIHR Newcastle Biomedical Research Centre",
        description: "ageing, multimorbidity, sarcopenia, dementia and precision care.",
        href: "https://newcastlebrc.nihr.ac.uk/"
      },
      {
        name: "Clinical Ageing Research Unit",
        description: "clinical ageing research and early-phase trials.",
        href: "https://newcastle.crf.nihr.ac.uk/facilities/clinical-ageing-research-unit/"
      },
      {
        name: "NIHR Newcastle Clinical Research Facility",
        description: "clinical trials and experimental medicine.",
        href: "https://newcastle.crf.nihr.ac.uk/"
      },
      {
        name: "Newcastle Campus for Ageing and Vitality",
        description: "ageing research, clinical translation and innovation.",
        href: "https://www.ncl.ac.uk/ageing/"
      },
      {
        name: "NIHR Biomedical Research Centres",
        description: "university–NHS translational research infrastructure.",
        href: "https://www.nihr.ac.uk/explore-nihr/support/biomedical-research-centres.htm"
      },
      {
        name: "NIHR Clinical Research Network",
        description: "supports recruitment and delivery of clinical research.",
        href: "https://www.nihr.ac.uk/explore-nihr/support/clinical-research-network.htm"
      },
      {
        name: "NIHR Applied Research Collaboration network",
        description: "applied health and care research.",
        href: "https://www.nihr.ac.uk/explore-nihr/support/collaborating-centres.htm"
      },
      {
        name: "NHS England: healthy ageing and caring",
        description: "healthy-ageing guidance and NHS policy.",
        href: "https://www.england.nhs.uk/ourwork/clinical-policy/older-people/healthy-ageing-caring/"
      },
      {
        name: "NHS England: ageing well",
        description: "older people’s healthcare and ageing-well programmes.",
        href: "https://www.england.nhs.uk/ourwork/clinical-policy/older-people/ageing-well/"
      }
    ],
    id: "nhs-clinical"
  },
  {
    title: "Longevity medicine and preventive-health clinics",
    items: [
      {
        name: "The London General Practice: longevity programme",
        description: "biological-age and multi-system health assessment.",
        href: "https://www.thelondongeneralpractice.com/longevity-biological-age-testing/"
      },
      {
        name: "Medical Express Clinic: longevity screening",
        description: "imaging, DEXA and biomarker screening.",
        href: "https://www.medicalexpressclinic.co.uk/screening/longevity-screening"
      },
      {
        name: "Harpal Clinic: longevity medicine tests",
        description: "biological-age, inflammation, hormone and cardiovascular testing.",
        href: "https://www.harpalclinic.co.uk/longevity-medicine/longevity-medicine-lab-tests/"
      },
      {
        name: "EGA Clinic",
        description: "longevity consultations, diagnostics and health optimisation.",
        href: "https://egaclinic.com/"
      },
      {
        name: "The National Longevity Clinic",
        description: "preventive healthcare and longevity assessments.",
        href: "https://www.thenationallongevityclinic.co.uk/"
      },
      {
        name: "Zen Healthcare: biological-age testing",
        description: "biological-age and health-optimisation services.",
        href: "https://www.zenhealthcare.co.uk/biological-age-longevity-london/"
      },
      {
        name: "London Longevity",
        description: "personalised longevity and wellness services.",
        href: "https://londonlongevity.co.uk/"
      },
      {
        name: "Human Longevity UK",
        description: "precision-health and longevity assessment provider.",
        href: "https://www.humanlongevity.com/"
      },
      {
        name: "Nuffield Health executive health",
        description: "preventive and executive-health screening.",
        href: "https://www.nuffieldhealth.com/health-assessments"
      },
      {
        name: "HCA UK executive health",
        description: "private preventive-health assessments.",
        href: "https://www.hcahealthcare.co.uk/locations/executive-health"
      },
      {
        name: "The Physicians’ Clinic",
        description: "specialist private medical assessment and prevention services.",
        href: "https://www.thephysiciansclinic.co.uk/"
      },
      {
        name: "Harley Street clinics directory",
        description: "directory of private providers, including preventive and longevity-related services.",
        href: "https://www.harleystreet.com/"
      }
    ],
    id: "clinics"
  },
  {
    title: "Biotechnology and therapeutics",
    items: [
      {
        name: "Shift Bioscience",
        description: "cellular reprogramming and ageing biology.",
        href: "https://www.shiftbioscience.com/"
      },
      {
        name: "clock.bio",
        description: "cellular rejuvenation and healthy-lifespan research.",
        href: "https://clock.bio/"
      },
      {
        name: "Genflow Biosciences",
        description: "gene-therapy approaches to ageing biology.",
        href: "https://genflowbio.com/"
      },
      {
        name: "SENISCA",
        description: "RNA therapeutics targeting cellular senescence.",
        href: "https://www.seniscatherapeutics.com/"
      },
      {
        name: "LinkGevity",
        description: "anti-necrotic drug discovery and age-related disease.",
        href: "https://linkgevity.com/"
      },
      {
        name: "Longaevus Technologies",
        description: "Cambridge-based healthy-longevity research organisation.",
        href: "https://longaevus.com/"
      },
      {
        name: "OptiBiotix Health",
        description: "microbiome modulation, metabolic health and nutraceuticals.",
        href: "https://www.optibiotix.com/"
      },
      {
        name: "Magnitude Biosciences",
        description: "C. elegans ageing and preclinical drug-screening platform.",
        href: "https://magnitudebiosciences.com/"
      },
      {
        name: "biomodal",
        description: "genomic and epigenomic sequencing technologies.",
        href: "https://www.biomodal.com/"
      },
      {
        name: "Mitra Bio",
        description: "non-invasive skin epigenomics.",
        href: "https://www.mitrabio.com/"
      },
      {
        name: "BioRes",
        description: "cellular rejuvenation platform.",
        href: "https://biores.bio/"
      },
      {
        name: "Skin Life Analytics",
        description: "mitochondrial DNA damage testing.",
        href: "https://skinlifeanalytics.com/"
      },
      {
        name: "clock.health",
        description: "genomics and cellular-ageing research.",
        href: "https://clock.health/"
      },
      {
        name: "Hurdle",
        description: "diagnostics infrastructure and biomarker services.",
        href: "https://hurdle.bio/"
      },
      {
        name: "Complement Therapeutics",
        description: "gene therapy and complement-mediated disease.",
        href: "https://complement-therapeutics.com/"
      },
      {
        name: "Abcodia",
        description: "early cancer detection and biomarker research.",
        href: "https://www.abcodia.com/"
      },
      {
        name: "Abingdon Health",
        description: "diagnostic development and testing.",
        href: "https://www.abingdonhealth.com/"
      },
      {
        name: "Abzena",
        description: "bioconjugate and biologics development.",
        href: "https://abzena.com/"
      },
      {
        name: "Akari Therapeutics",
        description: "complement and immune-mediated disease therapeutics.",
        href: "https://akaritx.com/"
      },
      {
        name: "Achilles Therapeutics",
        description: "precision cancer immunotherapy.",
        href: "https://www.achillestx.com/"
      },
      {
        name: "Adaptimmune",
        description: "T-cell receptor therapies.",
        href: "https://www.adaptimmune.com/"
      },
      {
        name: "AMO Pharma",
        description: "rare-disease therapeutics.",
        href: "https://amopharma.com/"
      },
      {
        name: "Senotherapeutics-related research at Exeter",
        description: "research on reprogramming ageing cells.",
        href: "https://news.exeter.ac.uk/faculty-of-health-and-life-sciences/exeter-spinout-company-partners-with-loreal-on-research-to-reprogramme-ageing-cells/"
      }
    ],
    id: "biotech"
  },
  {
    title: "AgeTech and innovation",
    items: [
      {
        name: "National Innovation Centre for Ageing",
        description: "ageing innovation, longevity economy, human experience and business design.",
        href: "https://uknica.co.uk/"
      },
      {
        name: "The Catalyst, Newcastle Helix",
        description: "headquarters and innovation environment for NICA.",
        href: "https://uknica.co.uk/who-we-are/the-catalyst/"
      },
      {
        name: "VOICE",
        description: "public and citizen engagement in ageing innovation.",
        href: "https://uknica.co.uk/voice/"
      },
      {
        name: "AgeTech & Longevity Hub, Innovation Warehouse",
        description: "startup incubation and acceleration.",
        href: "https://innovationwarehouse.org/"
      },
      {
        name: "Digital Health.London",
        description: "digital-health innovation and adoption.",
        href: "https://digitalhealth.london/"
      },
      {
        name: "Digital Health and Care Institute",
        description: "digital health and care innovation.",
        href: "https://digitalsocialcare.co.uk/"
      },
      {
        name: "Digital Health and Care Alliance",
        description: "digital health and care ecosystem.",
        href: "https://dhaca.org.uk/"
      },
      {
        name: "Health Foundry",
        description: "digital-health accelerator and community.",
        href: "https://healthfoundry.org/"
      },
      {
        name: "Imperial White City Innovation District",
        description: "life-science and health innovation.",
        href: "https://www.imperial.ac.uk/white-city-campus/"
      },
      {
        name: "UCL Innovation & Enterprise",
        description: "university commercialisation and startup support.",
        href: "https://www.ucl.ac.uk/enterprise/"
      },
      {
        name: "Zinc",
        description: "mission-driven venture builder, including healthy-ageing themes.",
        href: "https://www.zinc.vc/"
      },
      {
        name: "UK National Innovation Centre for Ageing: business opportunities",
        description: "products and services for the longevity economy.",
        href: "https://uknica.co.uk/"
      }
    ],
    id: "agetech"
  },
  {
    title: "Charities and civil society",
    items: [
      {
        name: "Age UK",
        description: "ageing, independence, health and social participation.",
        href: "https://www.ageuk.org.uk/"
      },
      {
        name: "Centre for Ageing Better",
        description: "evidence and policy for better later lives.",
        href: "https://ageing-better.org.uk/"
      },
      {
        name: "International Longevity Centre–UK",
        description: "demographic change, longevity and public policy.",
        href: "https://ilcuk.org.uk/"
      },
      {
        name: "Alzheimer’s Society",
        description: "dementia support and research.",
        href: "https://www.alzheimers.org.uk/"
      },
      {
        name: "Alzheimer’s Research UK",
        description: "dementia and neurodegeneration research funding.",
        href: "https://www.alzheimersresearchuk.org/"
      },
      {
        name: "Independent Age",
        description: "support and policy for older people.",
        href: "https://www.independentage.org/"
      },
      {
        name: "British Society of Gerontology",
        description: "professional and academic gerontology society.",
        href: "https://www.britishgerontology.org/"
      },
      {
        name: "British Geriatrics Society",
        description: "professional society for specialists in older people’s healthcare.",
        href: "https://www.bgs.org.uk/"
      },
      {
        name: "British Society for Research on Ageing",
        description: "ageing biology and research.",
        href: "https://www.bsra.org.uk/"
      },
      {
        name: "British Longevity Society",
        description: "longevity science and public engagement.",
        href: "https://www.thebritishlongevitysociety.org/"
      },
      {
        name: "Biogerontology Research Foundation",
        description: "longevity and geroscience research support.",
        href: "https://www.bg-rf.org.uk/"
      },
      {
        name: "Centre for Policy on Ageing",
        description: "ageing and social-policy evidence.",
        href: "https://www.cpa.org.uk/"
      },
      {
        name: "HelpAge International",
        description: "rights and wellbeing of older people globally.",
        href: "https://www.helpage.org/"
      },
      {
        name: "Friends of the Elderly",
        description: "support and services for older people.",
        href: "https://www.fote.org.uk/"
      },
      {
        name: "The Silver Line",
        description: "telephone companionship for older people.",
        href: "https://www.thesilverline.org.uk/"
      },
      {
        name: "Contact the Elderly",
        description: "social connection and befriending.",
        href: "https://www.contact-the-elderly.org.uk/"
      },
      {
        name: "Beth Johnson Foundation",
        description: "later-life wellbeing and age-friendly communities.",
        href: "https://bjf.org.uk/"
      },
      {
        name: "CADA: Creative Ageing Development & Agency",
        description: "creative ageing and inclusion.",
        href: "https://cadaengland.org/"
      },
      {
        name: "Agile Ageing Alliance",
        description: "innovation and ageing.",
        href: "https://agileageing.org/"
      },
      {
        name: "Association for Education and Ageing",
        description: "education, learning and later life.",
        href: "https://www.associationforeducationandageing.org/"
      },
      {
        name: "Age Diversity Centre for Research into the Older Workforce",
        description: "work, ageing and age diversity.",
        href: "https://agediversity.org/"
      }
    ],
    id: "charities"
  },
  {
    title: "Government, funders and policy",
    items: [
      {
        name: "UK Research and Innovation",
        description: "national research funding.",
        href: "https://www.ukri.org/"
      },
      {
        name: "UKRI healthy ageing",
        description: "healthy-ageing research priority.",
        href: "https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/healthy-ageing-across-the-life-course/"
      },
      {
        name: "UKRI Healthy Ageing Challenge",
        description: "healthy-ageing innovation and research programme.",
        href: "https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/healthy-ageing/"
      },
      {
        name: "National Institute for Health and Care Research",
        description: "health and care research funding.",
        href: "https://www.nihr.ac.uk/"
      },
      {
        name: "Innovate UK",
        description: "business innovation funding.",
        href: "https://www.ukri.org/councils/innovate-uk/"
      },
      {
        name: "Office for Health Improvement and Disparities",
        description: "public health and healthy life expectancy.",
        href: "https://www.gov.uk/government/organisations/office-for-health-improvement-and-disparities"
      },
      {
        name: "Department of Health and Social Care",
        description: "health and care policy.",
        href: "https://www.gov.uk/government/organisations/department-of-health-and-social-care"
      },
      {
        name: "NHS England",
        description: "NHS policy and delivery.",
        href: "https://www.england.nhs.uk/"
      },
      {
        name: "Healthy ageing consensus statement",
        description: "cross-sector healthy-ageing framework.",
        href: "https://www.gov.uk/government/publications/healthy-ageing-consensus-statement"
      },
      {
        name: "UK Network of Age-friendly Communities",
        description: "local government and community ageing initiatives.",
        href: "https://www.ageing-better.org.uk/age-friendly-communities"
      },
      {
        name: "Health and Care Research Wales",
        description: "Welsh health and care research.",
        href: "https://healthandcareresearchwales.org/"
      },
      {
        name: "Scottish Government: ageing well",
        description: "ageing, independence and social care policy.",
        href: "https://www.gov.scot/policies/independent-living/"
      },
      {
        name: "Northern Ireland Executive: older people’s strategy",
        description: "health and ageing policy in Northern Ireland.",
        href: "https://www.health-ni.gov.uk/"
      }
    ],
    id: "policy"
  },
  {
    title: "Data and cohorts",
    items: [
      {
        name: "UK Biobank",
        description: "large-scale biomedical and population-health resource.",
        href: "https://www.ukbiobank.ac.uk/"
      },
      {
        name: "English Longitudinal Study of Ageing",
        description: "health, work, wealth and ageing in England.",
        href: "https://www.elsa-project.ac.uk/"
      },
      {
        name: "TwinsUK",
        description: "genetics, environment, ageing and disease.",
        href: "https://twinsuk.ac.uk/"
      },
      {
        name: "NICOLA",
        description: "Northern Ireland ageing cohort.",
        href: "https://www.qub.ac.uk/sites/NICOLA/"
      },
      {
        name: "Newcastle 85+ Study",
        description: "ageing and health in people aged 85 and over.",
        href: "https://www.ncl.ac.uk/ageing/research/85-study/"
      },
      {
        name: "MRC Unit for Lifelong Health and Ageing",
        description: "lifelong health and ageing cohort research.",
        href: "https://www.ucl.ac.uk/epidemiology-health-care/research/epidemiology-and-public-health/research/mrc-unit-lifelong-health-and-ageing"
      },
      {
        name: "UK DRI",
        description: "dementia research infrastructure.",
        href: "https://www.ukdri.ac.uk/"
      },
      {
        name: "UK Longitudinal Linkage Collaboration",
        description: "linked longitudinal research data.",
        href: "https://ukllc.ac.uk/"
      },
      {
        name: "NHS Digital / NHS England datasets",
        description: "health and care data infrastructure.",
        href: "https://digital.nhs.uk/"
      }
    ],
    id: "data"
  }
];

export const UK_DIRECTORY_COUNT = UK_DIRECTORY.reduce((total, group) => total + group.items.length, 0);
