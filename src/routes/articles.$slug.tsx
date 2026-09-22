import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section, Tag, Kicker, Flourish } from "@/components/site/ui-bits";
import { ARTICLES } from "@/lib/articles";

const BASE_URL = "https://www.longevitymr.com";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${BASE_URL}/articles/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | MR Longevity` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      { name: "twitter:image", content: "https://www.longevitymr.com/social/mr-longevity-share.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "MR Longevity" },
  };

  return (
    <div>
      <section className="bg-navy px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <Kicker>{article.topic}</Kicker>
          <h1 className="mt-4 text-balance text-3xl font-bold md:text-4xl">{article.title}</h1>
          <Flourish />
          <p className="mt-2 text-sm text-white/70">
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {article.readTime}
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-lg italic leading-relaxed text-ink">{article.intro}</p>

          {article.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-navy">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12 rounded-xl border border-line bg-white p-6">
            <Tag tone="navy">Sources</Tag>
            <ul className="mt-4 space-y-2">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-navy underline decoration-gold/40 underline-offset-4 hover:text-gold"
                  >
                    {source.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              This article is for general information only and is not medical advice. Decisions
              about your health should be made with a qualified clinician.
            </p>
          </div>

          <Link
            to="/participate/news"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to news and articles
          </Link>
        </div>
      </Section>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </div>
  );
}
