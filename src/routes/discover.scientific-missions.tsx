import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { RESEARCH_HIGHLIGHTS } from "@/lib/insights-content";
import { ExternalLink } from "lucide-react";

const pillar = DISCOVER_PILLARS[2]!;

export const Route = createFileRoute("/discover/scientific-missions")({
  head: () => ({
    meta: [
      { title: "Scientific Missions | MR Longevity Discover" },
      { name: "description", content: "The major scientific challenges MR Longevity is organised around, from cellular senescence and biological age to AI models of ageing and population impact." },
      { property: "og:title", content: "Scientific Missions | MR Longevity Discover" },
      { property: "og:description", content: "The collaborative scientific missions advancing healthy longevity across research, clinics and industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ScientificMissionsPage,
});

function ResearchHighlights() {
  return (
    <Section tone="white">
      <SectionHead
        kicker="Research highlights"
        title="What the evidence is showing now"
        intro="Signals from current research shaping how these missions are prioritised, with the practical implication for collaboration and a link to the source."
        align="left"
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {RESEARCH_HIGHLIGHTS.map((item) => (
          <article key={item.slug} className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
            <Tag tone="navy">{item.area}</Tag>
            <h3 className="mt-4 font-serif text-xl text-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm italic text-gold">{item.implication}</p>
            <a
              href={item.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-start gap-2 text-xs text-navy underline decoration-gold/60 underline-offset-4 hover:text-gold"
            >
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>
                <span className="font-semibold">Source: {item.source.label}</span>
                <span className="block text-ink-soft">{item.source.citation}</span>
              </span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ScientificMissionsPage() {
  return (
    <PillarPage pillar={pillar} backTo="/discover" sequence={DISCOVER_PILLARS.map((p) => p.name)}>
      <ResearchHighlights />
    </PillarPage>
  );
}
