import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section, Flourish, Kicker, Tag } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import {
  FOUNDER_NAME,
  FOUNDER_PUBLICATIONS,
  citation,
  findPublication,
  publicationSlug,
  sourceName,
} from "@/lib/founder-fu";

const BASE = "https://mrlongevity-ecosystem.lovable.app/publications";

export const Route = createFileRoute("/publications/$slug")({
  loader: ({ params }) => {
    const publication = findPublication(params.slug);
    if (!publication) throw notFound();
    return { publication };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Publication not found" }, { name: "robots", content: "noindex" }] };
    }
    const { publication } = loaderData;
    const url = `${BASE}/${params.slug}`;
    const description = citation(publication);
    return {
      meta: [
        { title: `${publication.title}, Qiang Fu` },
        { name: "description", content: description },
        { property: "og:title", content: publication.title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: publication.title,
            datePublished: publication.year,
            author: { "@type": "Person", name: "Qiang Fu" },
            isPartOf: { "@type": "Periodical", name: publication.journal },
            url,
            sameAs: publication.href,
          }),
        },
      ],
    };
  },
  notFoundComponent: PublicationNotFound,
  component: PublicationPage,
});

function PublicationNotFound() {
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-serif text-3xl font-bold text-navy">Publication not found</h1>
        <p className="mt-3 text-ink-soft">This record is not part of the published research index.</p>
        <Button asChild className="mt-6 bg-navy text-white hover:bg-navy/90">
          <Link to="/publications">All publications</Link>
        </Button>
      </div>
    </Section>
  );
}

function PublicationPage() {
  const { publication } = Route.useLoaderData();
  const others = FOUNDER_PUBLICATIONS.filter((item) => item.title !== publication.title).slice(0, 4);

  return (
    <div>
      <section className="bg-navy px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Publication · {publication.year}</Kicker>
          <h1 className="text-balance text-3xl font-bold md:text-4xl">{publication.title}</h1>
          <Flourish />
          <p className="font-serif text-lg italic text-gold-pale/90">{publication.journal}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Tag tone="gold">{publication.role}</Tag>
            <Tag tone="gold">{sourceName(publication.href)}</Tag>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-xl font-semibold text-navy">Citation</h2>
          <p className="mt-3 rounded-2xl border border-line bg-white p-5 font-serif text-ink-soft">
            {citation(publication)}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Year", value: publication.year },
              { label: "Journal", value: publication.journal },
              { label: "Contribution", value: publication.role },
            ].map((row) => (
              <div key={row.label} className="rounded-2xl border border-line bg-white p-5">
                <dt className="text-xs uppercase tracking-wide text-gold">{row.label}</dt>
                <dd className="mt-1 text-sm text-navy">{row.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-serif text-xl font-semibold text-navy">Source</h2>
          <a
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-gold"
          >
            <span className="min-w-0">
              <span className="block text-sm font-medium text-navy group-hover:text-gold">
                View on {sourceName(publication.href)}
              </span>
              <span className="mt-1 block break-all text-xs text-ink-mute">{publication.href}</span>
            </span>
            <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-ink-mute group-hover:text-gold" />
          </a>

          <p className="mt-8 text-sm text-ink-mute">
            Part of the research record of {FOUNDER_NAME}.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-line">
              <Link to="/publications">
                <ArrowLeft className="mr-1 h-4 w-4" /> All publications
              </Link>
            </Button>
            <Button asChild className="bg-navy text-white hover:bg-navy/90">
              <Link to="/founder">Founder profile</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <h2 className="text-center font-serif text-2xl font-semibold text-navy">More publications</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
          {others.map((item) => (
            <Link
              key={item.title}
              to="/publications/$slug"
              params={{ slug: publicationSlug(item) }}
              className="group rounded-2xl border border-line bg-white p-5 transition-colors hover:border-gold"
            >
              <p className="text-xs uppercase tracking-wide text-gold">{item.year}</p>
              <p className="mt-1 font-medium text-navy group-hover:text-gold">{item.title}</p>
              <p className="mt-1 text-xs text-ink-mute">{item.journal}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
