import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { PARTICIPATE_ITEMS } from "@/lib/participate-nav";
import { EVENTS, LONGEVITY_NEWS, RESEARCH_HIGHLIGHTS } from "@/lib/insights-content";

export const Route = createFileRoute("/participate/")({
  head: () => ({
    meta: [
      { title: "Insights | MR Longevity" },
      {
        name: "description",
        content:
          "Longevity news, events and research highlights curated for the MR Longevity mission, signals that move healthy longevity from science to real-world outcomes.",
      },
      { property: "og:title", content: "Insights | MR Longevity" },
      {
        property: "og:description",
        content: "Curated longevity news, global events and research highlights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsIndex,
});

const SUMMARY = [
  { name: "Longevity News", count: LONGEVITY_NEWS.length, body: "Sources and signals shaping healthy longevity worldwide." },
  { name: "Events", count: EVENTS.length, body: "Where the mission convenes across science, clinic and capital." },
  { name: "Research Highlights", count: RESEARCH_HIGHLIGHTS.length, body: "What the evidence is telling us, and what it means next." },
];

function InsightsIndex() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Insights"
          title="Signals, gatherings and evidence from the healthy longevity mission"
          intro="Insights keeps the mission oriented: what is happening, where people meet, and what the science now supports."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PARTICIPATE_ITEMS.map((item, i) => (
            <Link
              key={item.slug}
              to={item.to}
              className="group rounded-xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <Tag tone="gold">{SUMMARY[i]!.count} entries</Tag>
              <h3 className="mt-4 font-serif text-xl text-navy">{item.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{SUMMARY[i]!.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
