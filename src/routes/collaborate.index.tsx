import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "@/components/site/ui-bits";
import { COLLABORATE_PILLARS } from "@/lib/collaborate-pillars";
import bannerCollaborate from "@/assets/banner-collaborate.jpg";


export const Route = createFileRoute("/collaborate/")({
  head: () => ({
    meta: [
      { title: "Collaborate | MR Longevity" },
      {
        name: "description",
        content:
          "Turn knowledge, expertise and ideas into research, innovation, partnerships and real-world impact: projects, partners, translation and open opportunities.",
      },
      { property: "og:title", content: "Collaborate | MR Longevity" },
      {
        property: "og:description",
        content: "Projects, partners, translation and innovation, and open opportunities across the healthy longevity mission.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollaborateOverview,
});

function CollaborateOverview() {
  return (
    <div>
      <div className="relative overflow-hidden bg-navy">
        <img
          src={bannerCollaborate}
          alt="Teams collaborating around a glowing holographic globe linked by golden network lines"
          width={1920}
          height={768}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 to-navy/90" />
        <div className="relative">
          <Section tone="navy">
            <SectionHead
              kicker="Collaborate"
              title="Turning knowledge and expertise into real-world impact"
              intro="A space for turning knowledge, expertise and ideas into research, innovation, partnerships and real-world impact."
              invert
            />
          </Section>
        </div>
      </div>


      <Section tone="white">
        <SectionHead kicker="The logic" title="Four questions, four routes in" align="left" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {COLLABORATE_PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              to={pillar.to}
              className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold"
            >
              <div className="flex items-center justify-between">
                <p className="font-serif text-sm italic text-gold">{pillar.num}</p>
                <ArrowRight className="h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy">{pillar.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{pillar.question}</p>
              <p className="mt-3 text-sm text-ink-soft">{pillar.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-navy">Ready to collaborate?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
            Join MR Longevity to publish a project, list your organisation's capabilities and respond to open calls.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Talk to the team</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
