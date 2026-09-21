import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { LONGEVITY_NEWS } from "@/lib/insights-content";
import { ARTICLES } from "@/lib/articles";
import { getLatestResearch } from "@/lib/research-feed.functions";

const researchQuery = queryOptions({
  queryKey: ["latest-research"],
  queryFn: () => getLatestResearch(),
  staleTime: 1000 * 60 * 60,
});

export const Route = createFileRoute("/participate/news")({
  loader: ({ context }) => context.queryClient.ensureQueryData(researchQuery),
  head: () => ({
    meta: [
      { title: "News | MR Longevity Participate" },
      {
        name: "description",
        content:
          "Curated longevity news sources: geroscience research, healthy ageing policy, biomarkers standards and funding signals shaping the field.",
      },
      { property: "og:title", content: "News | MR Longevity Participate" },
      {
        property: "og:description",
        content: "Sources and signals shaping healthy longevity worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.longevitymr.com/participate/news" },
    ],
    links: [{ rel: "canonical", href: "https://www.longevitymr.com/participate/news" }],
  }),
  component: NewsPage,
});

function formatDate(value: string) {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function LatestResearch() {
  const { data } = useSuspenseQuery(researchQuery);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-2xl font-bold text-navy">
          Latest published research
        </h2>
        <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">
          Updated automatically from Europe PMC
        </p>
      </div>
      <p className="mt-2 max-w-3xl text-sm text-ink-soft">
        Peer-reviewed papers on healthspan, geroscience, biological ageing and
        biomarkers of ageing, published in the last four months. Titles, journals
        and dates come directly from the indexed record.
      </p>

      {data.items.length === 0 ? (
        <p className="mt-6 rounded-xl border border-line bg-paper p-6 text-sm text-ink-soft">
          The live research feed is unavailable at the moment. Please try again
          shortly, or browse the sources we track below.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-line rounded-xl border border-line bg-paper">
          {data.items.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group block p-6 transition-colors hover:bg-white"
              >
                <div className="flex items-center justify-between gap-3">
                  <Tag tone="navy">{item.journal}</Tag>
                  <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-gold" />
                </div>
                <h3 className="mt-3 font-serif text-lg text-navy group-hover:text-gold">
                  {item.title}
                </h3>
                {item.abstract ? (
                  <p className="mt-2 text-sm text-ink-soft">{item.abstract}</p>
                ) : null}
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  {formatDate(item.date)}
                  {item.authors ? ` · ${item.authors.split(",")[0]} et al.` : ""}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function NewsPage() {
  return (
    <Section tone="white">
      <SectionHead
        as="h1"
        kicker="News"
        title="Where the field is moving"
        intro="A live feed of newly published longevity science, alongside our own articles and the primary sources we track. Each entry links to the original record."
      />
      <LatestResearch />
      <div className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-navy">From the mission, in-depth articles</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to="/articles/$slug"
              params={{ slug: article.slug }}
              className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-gold/50"
            >
              <Tag tone="navy">{article.topic}</Tag>
              <h3 className="mt-4 font-serif text-lg text-navy group-hover:text-gold">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{article.description}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-gold">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Link>
          ))}
        </div>
      </div>

      <h2 className="mt-14 font-serif text-2xl font-bold text-navy">Sources we track</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {LONGEVITY_NEWS.map((item) => (
          <a
            key={item.slug}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
          >
            <div className="flex items-center justify-between gap-3">
              <Tag tone="navy">{item.topic}</Tag>
              <ExternalLink className="h-4 w-4 text-ink-soft transition-colors group-hover:text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-lg text-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{item.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">{item.source}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
