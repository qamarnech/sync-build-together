import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FigureTitle, Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { EvidenceLadder, SystemsRings } from "@/components/site/infographics";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MR Longevity, Our Approach and What We Are Building" },
      {
        name: "description",
        content:
          "MR Longevity connects science, healthcare, innovation, industry, capital and public health into a global translation mission for healthy longevity.",
      },
      { property: "og:title", content: "About MR Longevity" },
      {
        property: "og:description",
        content:
          "Our approach: systems thinking, rigorous evidence, and a connected translation mission for healthy longevity.",
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
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-navy md:text-4xl">Our Approach</h2>
        </div>

        <figure className="mt-10 grid items-center gap-8 rounded-2xl border border-line bg-white p-6 md:grid-cols-2 md:p-8">
          <SystemsRings />
          <figcaption className="text-sm leading-relaxed text-ink-soft">
            <FigureTitle title="The Person as a System" align="left" />
            <p className="mt-3">
              Healthy longevity is not a single lever. Seven interacting dimensions surround every
              individual, each measurable, each modifiable, none sufficient alone.
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] text-ink-mute">
              CONCENTRIC MAP · 7 DIMENSIONS · ONE PERSON
            </p>
          </figcaption>
        </figure>



        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">Longevity is a systems challenge</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Human ageing is not driven by a single mechanism. It emerges through the interaction of
              biology, metabolism, immunity, lifestyle, environment, psychological wellbeing and social
              factors.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Yet the knowledge and capabilities needed to address healthy longevity remain fragmented
              across research institutions, healthcare, biotechnology, diagnostics, nutrition,
              technology, traditional health systems and public health.
            </p>
            <p className="mt-3 text-sm font-medium text-navy">MR Longevity exists to connect these pieces.</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              We are building an integrated environment where different disciplines, organisations and
              perspectives can contribute to a shared goal: helping people live healthier for longer.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">From reductionism to systems thinking</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Modern biomedicine has transformed our understanding of ageing through molecular biology,
              genetics, biomarkers, multi-omics, clinical research and increasingly sophisticated
              therapeutics.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              These capabilities provide the scientific precision needed to understand and intervene in
              biological ageing.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              At the same time, healthy longevity requires us to look beyond individual molecules,
              diseases or interventions and understand the person as an interconnected system.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Biology", "Medicine", "Prevention", "Lifestyle", "Environment", "Data + AI"].map((tag) => (
                <Tag key={tag} tone="gold">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">Bridging knowledge systems</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              We believe valuable insights can emerge from different medical and scientific traditions, but they must be examined through rigorous evidence.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              MR Longevity creates a framework in which modern biomedical science can interact with
              established approaches to preventive and holistic health, including perspectives
              originating from Eastern health traditions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The objective is not to replace evidence-based medicine. It is to investigate, validate and
              translate potentially valuable knowledge using modern scientific methods.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Biomarkers, multi-omics, clinical studies, real-world evidence and AI can help determine
              what works, for whom, under what conditions and through which biological mechanisms.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">From isolated interventions to personalised longevity</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              There is unlikely to be a single intervention capable of solving ageing.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Healthy longevity may instead require coordinated strategies addressing multiple
              dimensions of health:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              {[
                ["Cellular & Molecular Biology", "Understanding the mechanisms and hallmarks of ageing."],
                ["Metabolic & Physiological Health", "Maintaining metabolic, cardiovascular, immune and systemic resilience."],
                ["Movement & Physical Capacity", "Protecting strength, mobility, cardiovascular fitness and functional independence."],
                ["Nutrition", "Supporting metabolic health and physiological function."],
                ["Sleep & Recovery", "Supporting repair, neurological health and biological regulation."],
                ["Mental & Social Wellbeing", "Recognising the relationship between psychological health, social connection and biological ageing."],
                ["Environment & Behaviour", "Understanding how everyday exposures and behaviours influence long-term health."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <span className="font-medium text-navy">{title}</span>, {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-navy">
              The goal is not simply to add years to life. It is to preserve health, capability and
              quality of life throughout those years.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-navy">From Knowledge to Evidence to Impact</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            MR Longevity is designed as a translation mission.
          </p>
          <p className="mt-3 font-serif text-lg font-semibold tracking-wide text-gold">
            SCIENCE → DISCOVERY → VALIDATION → TRANSLATION → PERSONALISED HEALTH → REAL-WORLD OUTCOMES
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            At the centre sits: <span className="font-semibold text-navy">DATA + AI</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Data generated through research, diagnostics, clinical practice and real-world outcomes can
            continuously return to the mission. This creates a learning cycle:
          </p>
          <p className="mt-3 font-serif text-lg font-semibold tracking-wide text-gold">
            Science → People → Data → Better Science
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Over time, this can help researchers identify new questions, clinicians make better-informed
            decisions, innovators develop better solutions and individuals receive increasingly
            personalised approaches to healthy longevity.
          </p>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead
          title="Our Principle"
          invert
          intro="Open to ideas. Rigorous about evidence."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-relaxed text-gold-pale/80">
              MR Longevity is designed to encourage scientific exploration without confusing possibility
              with proof.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gold-pale/80">
              Emerging discoveries, traditional knowledge, new technologies and novel interventions
              should be explored. But their evidence must also be transparent.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-relaxed text-gold-pale/80">
              That means distinguishing between each level of certainty:
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gold-pale/80">
              This principle allows MR Longevity to remain ambitious about what may become possible
              while maintaining scientific credibility about what is known today.
            </p>
          </div>
        </div>
        <figure className="mt-8">
          <figcaption className="mb-5">
            <FigureTitle title="From Hypothesis to Validated Practice" invert />
          </figcaption>
          <EvidenceLadder invert />
        </figure>

      </Section>

      <Section tone="sand">
        <SectionHead
          title="What We Are Building"
          intro="MR Longevity is more than a longevity information platform. It is an emerging global translation mission connecting:"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Science", "researchers, universities and discoveries"],
            ["Healthcare", "clinicians, diagnostics and personalised prevention"],
            ["Innovation", "biotechnology, health technology and AI"],
            ["Industry", "development, manufacturing and commercialisation"],
            ["Capital", "investors and strategic partners"],
            ["Public Health", "prevention and population-scale healthy ageing"],
            ["People", "the ultimate beneficiaries and participants"],
            ["Data + AI", "the intelligence layer connecting and improving the mission"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-line bg-white p-5">
              <h4 className="font-serif text-lg font-semibold text-navy">{title}</h4>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/10 p-6 text-center md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-navy">One mission. One shared direction.</h3>
          <ul className="mx-auto mt-4 inline-block text-left text-sm leading-relaxed text-ink-soft">
            {[
              "Understand ageing better.",
              "Detect change earlier.",
              "Prevent disease where possible.",
              "Translate discoveries faster.",
              "Personalise health more intelligently.",
              "Help people remain healthier for longer.",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper" className="text-center">
        <h2 className="font-serif text-3xl text-navy">Founded by Professor Daniel Qiang Fu 付强</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
          Longevity scientist and biotech entrepreneur working across cellular senescence,
          geroscience, regenerative medicine and longevity biotechnology, with a peer-reviewed
          publication record, granted patents and nationally funded research programmes.
        </p>
        <Button asChild variant="outline" className="mt-6 border-navy text-navy hover:bg-navy hover:text-white">
          <Link to="/founder">See the founder's research record</Link>
        </Button>
      </Section>

      <Section tone="white" className="text-center">
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
