import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/site/ui-bits";
import { EvidenceLadder } from "@/components/site/infographics";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — MR Longevity" },
      {
        name: "description",
        content:
          "Our vision: helping people live healthier for longer. Our mission: connect science, healthcare, innovation, capital and public health into one translation ecosystem.",
      },
      { property: "og:title", content: "Vision & Mission — MR Longevity" },
      { property: "og:description", content: "One ecosystem. One shared direction. Open to ideas, rigorous about evidence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionMissionPage,
});

const DIRECTION = [
  "Understand ageing better.",
  "Detect change earlier.",
  "Prevent disease where possible.",
  "Translate discoveries faster.",
  "Personalise health more intelligently.",
  "Help people remain healthier for longer.",
];

function VisionMissionPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Vision & Mission"
          num="01"
          title="Helping people live healthier for longer"
          intro="Not simply adding years to life — preserving health, capability and quality of life throughout those years."
          invert
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-sm italic text-gold">Our vision</p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">
              A world where healthy years, not just years, are the measure of progress
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              We see healthy longevity as an achievable, measurable outcome of a connected system —
              one in which discovery, clinical practice, industry, capital and public health work
              towards the same target.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-sm italic text-gold">Our mission</p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">
              Connect the ecosystem and shorten the distance from science to benefit
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              We build the connections, shared language and collaboration infrastructure that let
              researchers, clinicians, innovators, investors and public-health organisations move
              knowledge into real-world outcomes faster.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-navy">From knowledge to evidence to impact</h3>
          <p className="mt-3 font-serif text-lg font-semibold tracking-wide text-gold">
            SCIENCE → DISCOVERY → VALIDATION → TRANSLATION → PERSONALISED HEALTH → REAL-WORLD OUTCOMES
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            At the centre sits <span className="font-semibold text-navy">DATA + AI</span>, returning
            what is learned back into the ecosystem:
          </p>
          <p className="mt-3 font-serif text-lg font-semibold tracking-wide text-gold">
            Science → People → Data → Better Science
          </p>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead
          kicker="Our principle"
          num="02"
          title="Open to ideas. Rigorous about evidence."
          intro="Valuable insight can come from many traditions and disciplines. Its evidence must always be transparent."
          invert
        />
        <figure className="mt-8">
          <figcaption className="mb-4 font-serif text-sm italic text-gold-light">
            Fig. — From hypothesis to validated practice
          </figcaption>
          <EvidenceLadder invert />
        </figure>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold/20 bg-gold/10 p-6 text-center md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-navy">One ecosystem. One shared direction.</h3>
          <ul className="mx-auto mt-4 inline-block text-left text-sm leading-relaxed text-ink-soft">
            {DIRECTION.map((item) => (
              <li key={item} className="flex items-center gap-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
