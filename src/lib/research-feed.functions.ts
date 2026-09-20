import { createServerFn } from "@tanstack/react-start";

export type ResearchItem = {
  id: string;
  title: string;
  journal: string;
  date: string;
  authors: string;
  url: string;
  abstract: string;
};

const QUERY =
  '(TITLE:"healthy longevity" OR TITLE:"healthspan" OR TITLE:"geroscience" OR TITLE:"biological ageing" OR TITLE:"biological aging" OR TITLE:"biomarkers of aging" OR TITLE:"biomarkers of ageing" OR TITLE:"cellular senescence") AND (FIRST_PDATE:[NOW-120DAYS TO NOW]) AND SRC:MED';

const ENDPOINT =
  "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=" +
  encodeURIComponent(QUERY) +
  "&format=json&pageSize=24&sort=P_PDATE_D%20desc&resultType=lite";

type EuropePmcResult = {
  id?: string;
  doi?: string;
  pmid?: string;
  title?: string;
  journalTitle?: string;
  firstPublicationDate?: string;
  authorString?: string;
  abstractText?: string;
};

function tidy(value: string | undefined, fallback = "") {
  if (!value) return fallback;
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Latest peer-reviewed healthy longevity research, pulled live from Europe PMC
 * (open REST API, no key required). Titles, journals and links come straight
 * from the indexed record, so nothing is paraphrased or invented here.
 */
export const getLatestResearch = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ items: ResearchItem[]; fetchedAt: string }> => {
    const fetchedAt = new Date().toISOString();
    try {
      const response = await fetch(ENDPOINT, {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) return { items: [], fetchedAt };

      const data = (await response.json()) as {
        resultList?: { result?: EuropePmcResult[] };
      };
      const results = data.resultList?.result ?? [];

      const items: ResearchItem[] = results
        .filter((r) => r.title && r.id)
        .map((r) => {
          const link = r.pmid
            ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`
            : r.doi
              ? `https://doi.org/${r.doi}`
              : `https://europepmc.org/article/MED/${r.id}`;
          const abstract = tidy(r.abstractText);
          return {
            id: String(r.id),
            title: tidy(r.title).replace(/\.$/, ""),
            journal: tidy(r.journalTitle, "Journal not listed"),
            date: tidy(r.firstPublicationDate),
            authors: tidy(r.authorString),
            url: link,
            abstract: abstract.length > 260 ? `${abstract.slice(0, 260)}…` : abstract,
          };
        })
        .slice(0, 18);

      return { items, fetchedAt };
    } catch {
      return { items: [], fetchedAt };
    }
  },
);
