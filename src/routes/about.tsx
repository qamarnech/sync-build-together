import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "@/components/site/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MR Longevity — Vision, Mission and Governance" },
      {
        name: "description",
        content:
          "MR Longevity's vision and mission, the China–UK–global translation corridor, and the governance and standards that hold the ecosystem together.",
      },
      { property: "og:title", content: "About MR Longevity" },
      {
        property: "og:description",
        content:
          "Vision, mission, international translation corridor and governance standards behind the MR Longevity ecosystem.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="About"
          title="A better pathway between science and health"
          intro="MR Longevity exists to shorten the distance between what science discovers and what people can actually benefit from."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Our Vision</h3>
            <p className="mt-2 text-sm text-ink-soft">
              A future where longer life means healthier life. A world where ageing is better
              understood, health changes can be detected earlier, disease can increasingly be
              prevented or delayed, and scientific progress helps people maintain health and
              function for longer.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Our Mission</h3>
            <p className="mt-2 text-sm text-ink-soft">
              To make life healthier and longer — by connecting Science, Discovery, Validation,
              Translation, Personalised Health and Real-World Outcomes, and using Data + AI to
              continuously learn and improve.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead title="China ↔ UK ↔ Global" invert intro="A translation corridor built between two major scientific and innovation environments, designed for global collaboration. 探索 · 福祉" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-serif text-lg text-white">UK: Science &amp; Regulatory Expertise</h4>
            <p className="mt-2 text-sm text-gold-pale/70">
              Deep research capability, clinical infrastructure and regulatory know-how.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-serif text-lg text-white">
              China: Development &amp; Manufacturing Scale
            </h4>
            <p className="mt-2 text-sm text-gold-pale/70">
              Speed of development, manufacturing scale and large-population evidence generation.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-serif text-lg text-white">Governance &amp; standards</h4>
          <p className="mt-2 text-sm text-gold-pale/70">
            Shared approaches to evidence classification, biological-age measurement, clinical
            outcomes, data standards, interoperability, AI governance and ethics.
          </p>
        </div>
      </Section>

      <Section tone="sand" className="text-center">
        <h2 className="font-serif text-3xl text-navy">Who is MR Longevity for?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
          Researchers, clinicians, innovators, investors, international partners, public-health
          organisations and individuals who want to live healthier for longer.
        </p>
        <Button asChild className="mt-6 bg-gold text-white hover:bg-gold-light">
          <Link to="/auth">Join MR Longevity</Link>
        </Button>
      </Section>
    </div>
  );
}
