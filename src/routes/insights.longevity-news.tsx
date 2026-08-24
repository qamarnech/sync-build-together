import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { LONGEVITY_NEWS } from "@/lib/insights-content";

export const Route = createFileRoute("/insights/longevity-news")({
  head: () => ({
    meta: [
      { title: "Longevity News | MR Longevity Insights" },
      {
        name: "description",
        content:
          "Curated longevity news sources: geroscience research, healthy ageing policy, biomarkers standards and funding signals shaping the field.",
      },
      { property: "og:title", content: "Longevity News | MR Longevity Insights" },
      {
        property: "og:description",
        content: "Sources and signals shaping healthy longevity worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <Section tone="white">
      <SectionHead
        kicker="Longevity News"
        title="Where the field is moving"
        intro="A curated set of primary sources we track, research, policy, standards and funding. Each links to the original record."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
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
