import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { OPPORTUNITIES, OPPORTUNITY_TYPES } from "@/lib/collaborate-content";
import { cn } from "@/lib/utils";

const DESCRIPTION =
  "Open calls for research collaborations, clinical studies, pilots, funding, investment, technology partnerships and expert contributions across healthy longevity.";

export const Route = createFileRoute("/collaborate/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Collaborate | MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Opportunities — MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return OPPORTUNITIES.filter((item) => {
      if (type && item.type !== type) return false;
      if (!q) return true;
      return [item.title, item.field, item.location, item.stage, item.body, ...item.expertise]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, type]);

  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Opportunities"
          title="Where can I take part?"
          intro="Open opportunities across the longevity landscape — from research collaborations and clinical studies to pilots, funding, investment and expert contributions."
          invert
        />
      </Section>

      <Section tone="white">
        <div className="flex flex-col gap-4">
          <label className="relative block max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search opportunities, fields or expertise"
              className="pl-9"
              aria-label="Search opportunities"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setType(null)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition-colors",
                type === null
                  ? "border-gold bg-gold/10 font-semibold text-navy"
                  : "border-line bg-paper text-ink-soft hover:border-gold/50",
              )}
            >
              All types
            </button>
            {OPPORTUNITY_TYPES.map((item) => (
              <button
                key={item}
                onClick={() => setType(item)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition-colors",
                  type === item
                    ? "border-gold bg-gold/10 font-semibold text-navy"
                    : "border-line bg-paper text-ink-soft hover:border-gold/50",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-xs text-ink-soft">
            Showing {results.length} of {OPPORTUNITIES.length} opportunities
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {results.map((item) => (
            <article key={item.id} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <p className="font-serif text-sm italic text-gold">{item.type}</p>
              <h3 className="mt-1 font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{item.body}</p>
              <dl className="mt-4 grid gap-1 text-xs text-ink-soft">
                <div className="flex gap-2">
                  <dt className="font-semibold text-navy">Field</dt>
                  <dd>{item.field}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-navy">Location</dt>
                  <dd>{item.location}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-navy">Stage</dt>
                  <dd>{item.stage}</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.expertise.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-soft">
            No opportunities match that search yet.
          </p>
        )}
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">Express interest</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            Members can respond to opportunities directly and be matched to new ones as they are posted.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to="/contact">Post an opportunity</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
