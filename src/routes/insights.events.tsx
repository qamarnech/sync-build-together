import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { EVENTS } from "@/lib/insights-content";

export const Route = createFileRoute("/insights/events")({
  head: () => ({
    meta: [
      { title: "Events — MR Longevity Insights" },
      {
        name: "description",
        content:
          "Global healthy longevity events: geroscience conferences, gerontology congresses, translation summits and MR Longevity collaboration roundtables.",
      },
      { property: "og:title", content: "Events — MR Longevity Insights" },
      {
        property: "og:description",
        content: "Where the healthy longevity ecosystem convenes across science, clinic and capital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <Section tone="white">
      <SectionHead
        kicker="Events"
        title="Where the ecosystem convenes"
        intro="The recurring meetings that move healthy longevity forward — plus our own invitation-based collaboration roundtables."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {EVENTS.map((event) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-3">
                <Tag tone="gold">{event.focus}</Tag>
                <ExternalLink className="h-4 w-4 text-ink-soft" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-navy">{event.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{event.summary}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-soft">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-gold" />
                  {event.cadence}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {event.location}
                </span>
              </div>
            </>
          );
          const cls =
            "block rounded-xl border border-line bg-paper p-6 transition-colors hover:border-gold/50";
          return event.url.startsWith("/") ? (
            <Link key={event.slug} to="/contact" className={cls}>
              {inner}
            </Link>
          ) : (
            <a key={event.slug} href={event.url} target="_blank" rel="noreferrer" className={cls}>
              {inner}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
