import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Team — MR Longevity" },
      {
        name: "description",
        content:
          "MR Longevity is built by a distributed team of researchers, clinicians, innovators and partners across China, the UK and the wider world.",
      },
      { property: "og:title", content: "Team — MR Longevity" },
      { property: "og:description", content: "The people and roles building the healthy longevity translation ecosystem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const CIRCLES: [string, string, string[]][] = [
  [
    "Scientific leadership",
    "Sets research direction, evaluates evidence and guides which programmes move forward.",
    ["Geroscience", "Cell biology", "Regenerative medicine", "Pharmacology"],
  ],
  [
    "Clinical & translational",
    "Connects discovery to diagnostics, clinical validation and personalised prevention.",
    ["Clinicians", "Trials", "Diagnostics", "Biomarkers"],
  ],
  [
    "Innovation & technology",
    "Builds the data, AI and product layer that makes the ecosystem usable.",
    ["Data + AI", "HealthTech", "Platform"],
  ],
  [
    "Partnerships & capital",
    "Links credible programmes with investors, industry and international partners.",
    ["Investors", "Industry", "Public health"],
  ],
];

function TeamPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Team"
          num="01"
          title="A distributed team, organised around capability"
          intro="MR Longevity is deliberately built as a network rather than a single institution — scientific leadership at the centre, with collaborators contributing where their capability is strongest."
          invert
        />
      </Section>

      <Section tone="white">
        <div className="rounded-2xl border border-line bg-paper p-6 md:p-8">
          <Tag tone="gold">Founder</Tag>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-navy">Professor Qiang Fu 付强</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Longevity Scientist · Biotech Entrepreneur · MR Longevity Founder — China · UK · Global
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Professor Fu's work spans cellular senescence, geroscience, regenerative medicine, stem
            cells, pharmacology and longevity biotechnology, with peer-reviewed publications, granted
            patents and funded research programmes.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/founder">
              View the full research record <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead kicker="How we are organised" num="02" title="Four working circles" align="left" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {CIRCLES.map(([title, body, tags]) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} tone="navy">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand" className="text-center">
        <h2 className="font-serif text-3xl text-navy">Join the team of collaborators</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
          Members create a profile, propose or join projects, and are matched with collaborators whose
          capabilities fit what their work needs.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-gold text-white hover:bg-gold-light">
            <Link to="/auth" search={{ mode: "signup" }}>
              Join MR Longevity
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
