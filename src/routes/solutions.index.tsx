import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Longevity Solutions | MR Longevity" },
      {
        name: "description",
        content:
          "Diagnostics and biological age, preventive and longevity health, regenerative medicine, personalised health, aesthetics and wellness, and products across the MR Longevity mission.",
      },
      { property: "og:title", content: "Longevity Solutions | MR Longevity" },
      {
        property: "og:description",
        content:
          "Six connected areas that turn healthy longevity science into measurement, prevention, treatment and everyday practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Longevity Solutions"
          title="From measurement to everyday practice"
          intro="Six connected areas that turn healthy longevity science into practical capability: measure biological ageing, reduce risk, restore function, personalise care, support wellbeing, and deliver validated products."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Areas"
          title="What Longevity Solutions covers"
          intro="Each area links to the science behind it and to the members, projects and partners working on it."
          align="left"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTION_PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              to={pillar.to}
              className="rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold"
            >
              <p className="text-[11px] font-semibold tracking-wider text-gold">{pillar.num}</p>
              <h3 className="mt-2 font-serif text-lg text-navy">{pillar.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{pillar.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.focus.slice(0, 3).map((item) => (
                  <Tag key={item.title}>{item.title}</Tag>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="rounded-2xl border border-line bg-white p-8 text-center">
          <h2 className="font-serif text-2xl text-navy">Evidence status is labelled throughout</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
            Solutions are described with their evidence level and intended use. Nothing here is
            medical advice, and clinical decisions remain between individuals and qualified
            healthcare professionals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-navy/30 text-navy hover:bg-navy/5">
              <Link to="/discover">Back to discover</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
