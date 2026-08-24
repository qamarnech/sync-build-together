import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Search } from "lucide-react";
import { Section, SectionHead, Flourish, Kicker, Tag } from "@/components/site/ui-bits";
import { Input } from "@/components/ui/input";
import {
  UK_DIRECTORY,
  UK_DIRECTORY_CAVEAT,
  UK_DIRECTORY_CLASSIFICATION,
  UK_DIRECTORY_COUNT,
  UK_DIRECTORY_INTRO,
} from "@/lib/uk-directory";

const PAGE_URL = "https://mrlongevity-ecosystem.lovable.app/ecosystem/uk-directory";
const DESCRIPTION =
  "A curated directory of the UK healthy longevity mission: geroscience institutes, gerontology centres, NHS research units, longevity clinics, biotech companies, AgeTech, charities, funders and population cohorts, each with a source link.";

export const Route = createFileRoute("/ecosystem/uk-directory")({
  head: () => ({
    meta: [
      { title: "UK Longevity Directory, MR. LONGEVITY" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "UK Longevity Directory" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: UkDirectoryPage,
});

function sentence(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function hostOf(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function UkDirectoryPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("all");

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return UK_DIRECTORY.filter((section) => group === "all" || section.id === group)
      .map((section) => ({
        ...section,
        items: needle
          ? section.items.filter(
              (item) =>
                item.name.toLowerCase().includes(needle) ||
                item.description.toLowerCase().includes(needle),
            )
          : section.items,
      }))
      .filter((section) => section.items.length > 0);
  }, [query, group]);

  const shown = groups.reduce((total, section) => total + section.items.length, 0);

  return (
    <div>
      <section className="bg-navy px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>United Kingdom</Kicker>
          <h1 className="text-balance text-4xl font-bold md:text-5xl">UK Longevity Directory</h1>
          <Flourish />
          <p className="font-serif text-lg italic text-gold-pale/90">
            {UK_DIRECTORY_COUNT} organisations across {UK_DIRECTORY.length} functional categories
          </p>
        </div>
      </section>

      <Section tone="paper">
        <SectionHead kicker="Overview" num="01" title="One national map, organised by function" />
        <div className="mx-auto max-w-3xl space-y-4 text-ink-soft">
          {UK_DIRECTORY_INTRO.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
          <p className="rounded-2xl border border-line bg-white p-5 text-sm">{UK_DIRECTORY_CAVEAT}</p>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Directory"
          num="02"
          title="Search the mission"
          intro="Filter by category or search by name and focus. Every entry links to its public source."
        />

        <div className="mt-8">
          <div className="relative mx-auto max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search organisations…"
              className="pl-9"
              aria-label="Search the UK longevity directory"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setGroup("all")}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                group === "all"
                  ? "border-gold bg-gold/10 text-navy"
                  : "border-line text-ink-soft hover:border-gold"
              }`}
            >
              All ({UK_DIRECTORY_COUNT})
            </button>
            {UK_DIRECTORY.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setGroup(section.id)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  group === section.id
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-line text-ink-soft hover:border-gold"
                }`}
              >
                {section.title} ({section.items.length})
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-ink-mute">
            Showing {shown} of {UK_DIRECTORY_COUNT} organisations
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {groups.map((section) => (
            <div key={section.id}>
              <h2 className="font-serif text-2xl font-semibold text-navy">{section.title}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <a
                    key={item.href + item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-line bg-white p-5 transition-colors hover:border-gold"
                  >
                    <p className="font-serif text-base font-semibold text-navy group-hover:text-gold">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">{sentence(item.description)}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-ink-mute group-hover:text-gold">
                      {hostOf(item.href)} <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
          {groups.length === 0 && (
            <p className="text-center text-sm text-ink-mute">No organisations match that search.</p>
          )}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="How to use this list"
          num="03"
          title="Classifying the landscape"
          intro="For a research map, start with the directory hubs. For a market map, verify each company through Companies House, its own website and current clinical or regulatory information."
        />
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {UK_DIRECTORY_CLASSIFICATION.map((item) => (
            <Tag key={item} tone="navy">
              {item}
            </Tag>
          ))}
        </div>
      </Section>
    </div>
  );
}
