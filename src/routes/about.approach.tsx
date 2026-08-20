import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { TranslationFlywheel } from "@/components/site/infographics";

export const Route = createFileRoute("/about/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Systems Thinking for Healthy Longevity" },
      {
        name: "description",
        content:
          "Systems thinking, bridged knowledge systems and personalised longevity: how MR Longevity turns fragmented capability into a working translation ecosystem.",
      },
      { property: "og:title", content: "Our Approach — MR Longevity" },
      {
        property: "og:description",
        content: "From reductionism to systems thinking, and from isolated interventions to personalised longevity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

const DIMENSIONS: [string, string][] = [
  ["Cellular & Molecular Biology", "Understanding the mechanisms and hallmarks of ageing."],
  ["Metabolic & Physiological Health", "Maintaining metabolic, cardiovascular, immune and systemic resilience."],
  ["Movement & Physical Capacity", "Protecting strength, mobility, cardiovascular fitness and functional independence."],
  ["Nutrition", "Supporting metabolic health and physiological function."],
  ["Sleep & Recovery", "Supporting repair, neurological health and biological regulation."],
  ["Mental & Social Wellbeing", "Recognising the relationship between psychological health, social connection and biological ageing."],
  ["Environment & Behaviour", "Understanding how everyday exposures and behaviours influence long-term health."],
];

const BUILDING: [string, string][] = [
  ["Science", "researchers, universities and discoveries"],
  ["Healthcare", "clinicians, diagnostics and personalised prevention"],
  ["Innovation", "biotechnology, health technology and AI"],
  ["Industry", "development, manufacturing and commercialisation"],
  ["Capital", "investors and strategic partners"],
  ["Public Health", "prevention and population-scale healthy ageing"],
  ["People", "the ultimate beneficiaries and participants"],
  ["Data + AI", "the intelligence layer connecting and improving the ecosystem"],
];

function ApproachPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Our Approach"
          num="01"
          title="Systems thinking, rigorous evidence, personalised longevity"
          intro="An integrated environment where different disciplines, organisations and perspectives contribute to one shared goal: helping people live healthier for longer."
          invert
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">From reductionism to systems thinking</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Modern biomedicine has transformed our understanding of ageing through molecular
              biology, genetics, biomarkers, multi-omics, clinical research and increasingly
              sophisticated therapeutics.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Healthy longevity also requires us to look beyond individual molecules, diseases or
              interventions and understand the person as an interconnected system.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Biology", "Medicine", "Prevention", "Lifestyle", "Environment", "Data + AI"].map((tag) => (
                <Tag key={tag} tone="gold">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Bridging knowledge systems</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Valuable insights can emerge from different medical and scientific traditions — but they
              must be examined through rigorous evidence.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              MR Longevity creates a framework in which modern biomedical science can interact with
              established approaches to preventive and holistic health, including perspectives
              originating from Eastern health traditions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The objective is not to replace evidence-based medicine, but to investigate, validate and
              translate potentially valuable knowledge using modern scientific methods.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-line bg-paper p-6">
          <h3 className="text-xl font-semibold text-navy">
            From isolated interventions to personalised longevity
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            There is unlikely to be a single intervention capable of solving ageing. Healthy longevity
            instead requires coordinated strategies across multiple dimensions of health:
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-ink-soft md:grid-cols-2">
            {DIMENSIONS.map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <span className="font-medium text-navy">{title}</span> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead
          kicker="Translation"
          num="02"
          title="A learning ecosystem, not a linear pipeline"
          intro="Data generated through research, diagnostics, clinical practice and real-world outcomes returns to the ecosystem, improving the next cycle."
        />
        <figure className="mt-10">
          <TranslationFlywheel />
          <figcaption className="mt-4 text-center font-serif text-sm italic text-gold">
            Fig. — Science → People → Data → Better Science
          </figcaption>
        </figure>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="What we are building"
          num="03"
          title="An emerging global translation ecosystem"
          intro="MR Longevity is more than a longevity information platform. It connects:"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BUILDING.map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-line bg-white p-5">
              <h4 className="font-serif text-lg font-semibold text-navy">{title}</h4>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
