import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { RESEARCH_HIGHLIGHTS } from "@/lib/insights-content";

export const Route = createFileRoute("/insights/research-highlights")({
  head: () => ({
    meta: [
      { title: "Research Highlights | MR Longevity Insights" },
      {
        name: "description",
        content:
          "What the evidence now supports across senescence, biological age, immune ageing, regenerative medicine, metabolic health and AI models of ageing.",
      },
      { property: "og:title", content: "Research Highlights | MR Longevity Insights" },
      {
        property: "og:description",
        content: "Evidence summaries and what each one means for translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HighlightsPage,
});

function HighlightsPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Research Highlights"
          title="What the evidence is telling us"
          intro="Each highlight pairs the current state of the science with the practical implication for translation."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {RESEARCH_HIGHLIGHTS.map((item) => (
            <article key={item.slug} className="rounded-xl border border-line bg-paper p-6">
              <Tag tone="navy">{item.area}</Tag>
              <h3 className="mt-4 font-serif text-lg text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm text-ink-soft">
                <span className="font-semibold text-navy">Implication: </span>
                {item.implication}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white">Source-linked research record</h2>
          <p className="mt-3 text-sm text-white/70">
            Explore the founder&apos;s peer-reviewed publications, patents and grants with links to every original record.
          </p>
          <Link
            to="/publications"
            className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-light"
          >
            View publications
          </Link>
        </div>
      </Section>
    </div>
  );
}
