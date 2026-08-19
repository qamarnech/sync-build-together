import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHead, Flourish, Kicker, Tag } from "@/components/site/ui-bits";
import {
  FounderAffiliations,
  FounderDomains,
  FounderFigures,
  FounderGrants,
  FounderPatents,
  FounderPublications,
} from "@/components/site/FounderRecord";
import {
  FOUNDER_ABOUT,
  FOUNDER_EXPERTISE,
  FOUNDER_HEADLINE,
  FOUNDER_LOCATIONS,
  FOUNDER_NAME,
  FOUNDER_SAME_AS,
} from "@/lib/founder-fu";
import { Button } from "@/components/ui/button";

const URL = "https://mrlongevity-ecosystem.lovable.app/founder";
const DESCRIPTION =
  "Professor Qiang Fu 付强 — longevity scientist and biotech entrepreneur. Research record: publications in Nature Metabolism and Aging Cell, patents in NK-cell and exosome technology, and NSFC grants.";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Professor Qiang Fu 付强 — Founder, MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Professor Qiang Fu 付强 — Founder, MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Qiang Fu",
          alternateName: "付强",
          jobTitle: "Professor; Founder, MR Longevity",
          description: DESCRIPTION,
          url: URL,
          affiliation: [
            { "@type": "Organization", name: "Binzhou Medical University" },
            { "@type": "Organization", name: "MR Longevity" },
          ],
          knowsAbout: [
            "Cellular senescence",
            "Geroscience",
            "NK-cell immunology",
            "Regenerative medicine",
            "Longevity biotechnology",
          ],
          sameAs: FOUNDER_SAME_AS,
        }),
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <div>
      <section className="bg-navy px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>Founder</Kicker>
          <h1 className="text-balance text-4xl font-bold md:text-5xl">{FOUNDER_NAME}</h1>
          <Flourish />
          <p className="font-serif text-lg italic text-gold-pale/90">{FOUNDER_HEADLINE}</p>
          <p className="mt-2 text-sm text-gold-pale/70">{FOUNDER_LOCATIONS}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {FOUNDER_EXPERTISE.map((item) => (
              <Tag key={item} tone="gold">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      <Section tone="paper">
        <SectionHead kicker="About" num="01" title="Science, translated into healthier lives" />
        <div className="mx-auto max-w-3xl space-y-4 text-ink-soft">
          {FOUNDER_ABOUT.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <FounderFigures />
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Research domains"
          num="02"
          title="Where the work sits"
          intro="From mechanisms of ageing to the technologies and evidence needed to apply them."
        />
        <div className="mt-8 flex justify-center">
          <div className="max-w-3xl">
            <FounderDomains />
          </div>
        </div>
        <div className="mt-12">
          <FounderAffiliations />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="Publications"
          num="03"
          title="Selected peer-reviewed record"
          intro="Verified publications from 2014 to 2025. Each entry links to its public source."
        />
        <div className="mt-10">
          <FounderPublications />
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Patents"
          num="04"
          title="Translated technology"
          intro="Granted patents in NK-cell manufacturing, exosome compositions and diagnostics."
        />
        <div className="mt-10">
          <FounderPatents />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead
          kicker="Grants"
          num="05"
          title="Funded research programmes"
          intro="National and provincial research funding supporting the work."
        />
        <div className="mt-10">
          <FounderGrants />
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead
          kicker="Join"
          title="Build the healthy longevity ecosystem"
          intro="Researchers, clinicians, innovators, investors and partners — collaborate on projects inside MR Longevity."
          invert
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-gold text-white hover:bg-gold-light">
            <Link to="/auth" search={{ mode: "signup" }}>
              Join MR Longevity
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
            <Link to="/ecosystem">Explore the ecosystem</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
