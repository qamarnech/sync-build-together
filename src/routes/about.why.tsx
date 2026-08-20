import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { SystemsRings } from "@/components/site/infographics";

export const Route = createFileRoute("/about/why")({
  head: () => ({
    meta: [
      { title: "Why MR Longevity — Connecting a Fragmented Field" },
      {
        name: "description",
        content:
          "Healthy longevity knowledge is scattered across research, healthcare, biotech, diagnostics, technology and public health. MR Longevity exists to connect it.",
      },
      { property: "og:title", content: "Why MR Longevity" },
      { property: "og:description", content: "Longevity is a systems challenge — and the system is fragmented." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPage,
});

const GAPS = [
  ["Fragmented knowledge", "Research, healthcare, biotech, nutrition, technology and public health rarely share a common map."],
  ["Slow translation", "Discoveries take years or decades to reach the people who could benefit."],
  ["Unclear evidence", "Strong science and unproven marketing sit side by side, indistinguishable to most people."],
  ["Disconnected capital", "Investors and partners struggle to find credible, well-scoped opportunities early."],
  ["Missing collaborators", "The right expertise usually exists — it just cannot find the project that needs it."],
  ["Population blind spots", "Prevention science rarely converts into measurable population healthspan."],
];

function WhyPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Why MR Longevity"
          num="01"
          title="Longevity is a systems challenge — and the system is fragmented"
          intro="Human ageing emerges through the interaction of biology, metabolism, immunity, lifestyle, environment, psychological wellbeing and social factors. Yet the capabilities needed to address it sit in separate institutions that rarely work as one."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead kicker="The gaps" num="02" title="What is holding healthy longevity back" align="left" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GAPS.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <figure className="grid items-center gap-8 rounded-2xl border border-line bg-white p-6 md:grid-cols-2 md:p-8">
          <SystemsRings />
          <figcaption className="text-sm leading-relaxed text-ink-soft">
            <span className="font-serif text-sm italic text-gold">Fig. — The person as a system</span>
            <p className="mt-3">
              Healthy longevity is not a single lever. Seven interacting dimensions surround every
              individual, each measurable, each modifiable, none sufficient alone. No single
              organisation can address all of them.
            </p>
            <p className="mt-3 font-medium text-navy">MR Longevity exists to connect these pieces.</p>
          </figcaption>
        </figure>
      </Section>

      <Section tone="sand" className="text-center">
        <h2 className="font-serif text-3xl text-navy">Who is MR Longevity for?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
          Researchers, clinicians, innovators, investors, international partners, public-health
          organisations and individuals who want to live healthier for longer.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Researchers", "Clinicians", "Innovators", "Investors", "Partners", "Public health", "Individuals"].map(
            (item) => (
              <Tag key={item} tone="navy">
                {item}
              </Tag>
            ),
          )}
        </div>
        <Button asChild className="mt-8 bg-gold text-white hover:bg-gold-light">
          <Link to="/auth" search={{ mode: "signup" }}>
            Join MR Longevity
          </Link>
        </Button>
      </Section>
    </div>
  );
}
