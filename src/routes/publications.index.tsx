import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead, Flourish, Kicker } from "@/components/site/ui-bits";
import { FOUNDER_NAME, FOUNDER_PUBLICATIONS, publicationSlug, sourceName } from "@/lib/founder-fu";

const URL = "https://mrlongevity-ecosystem.lovable.app/publications";
const DESCRIPTION =
  "Peer-reviewed publications by Professor Qiang Fu, 2014–2025, full citations and links to each public source record.";

export const Route = createFileRoute("/publications/")({
  head: () => ({
    meta: [
      { title: "Publications, Professor Qiang Fu, MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Publications, Professor Qiang Fu" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: PublicationsIndex,
});

function PublicationsIndex() {
  return (
    <div>
      <section className="bg-navy px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>Research record</Kicker>
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Publications</h1>
          <Flourish />
          <p className="font-serif text-lg italic text-gold-pale/90">
            {FOUNDER_NAME} · {FOUNDER_PUBLICATIONS.length} peer-reviewed entries, 2014–2025
          </p>
        </div>
      </section>

      <Section tone="paper">
        <SectionHead
          kicker="Index"
          num="01"
          title="Full citations and sources"
          intro="Each publication has its own page with the citation, journal, contribution and a link to the public source record."
        />
        <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {FOUNDER_PUBLICATIONS.map((publication) => (
            <Link
              key={publication.title}
              to="/publications/$slug"
              params={{ slug: publicationSlug(publication) }}
              className="group flex gap-4 p-5 transition-colors hover:bg-gold/5"
            >
              <span className="mt-0.5 w-12 shrink-0 font-serif text-sm font-bold text-gold">
                {publication.year}
              </span>
              <span className="min-w-0">
                <span className="block font-medium text-navy group-hover:text-gold">
                  {publication.title}
                </span>
                <span className="mt-1 block text-xs text-ink-mute">
                  {publication.journal} · {publication.role} · {sourceName(publication.href)}
                </span>
              </span>
              <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-mute group-hover:text-gold" />
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink-mute">
          Back to the{" "}
          <Link to="/founder" className="underline hover:text-gold">
            founder profile
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
