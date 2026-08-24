import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FigureTitle, Section, SectionHead } from "@/components/site/ui-bits";
import { EvidenceLadder } from "@/components/site/infographics";

const DESCRIPTION =
  "The vision, mission and guiding principle of MR Longevity: open to ideas, rigorous about evidence, and built to connect science, health, technology, business and people.";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Vision & Mission — MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Vision & Mission"
          title="Helping people live healthier for longer"
          intro="Why MR Longevity exists, what it is working towards, and the principle that keeps it credible."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-sm italic text-gold">Our vision</p>
            <h3 className="mt-1 font-serif text-2xl text-navy">A world where longer lives are healthier lives</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              A future in which ageing is better understood, decline is detected earlier, prevention is
              normal practice, and the years people gain are years they can actually use.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-sm italic text-gold">Our mission</p>
            <h3 className="mt-1 font-serif text-2xl text-navy">Shorten the distance between science and everyday health</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              To connect the people, disciplines, organisations and capabilities of the longevity
              landscape — so discoveries reach validation, validation reaches practice, and practice
              returns evidence to science.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead title="Our Principle" invert intro="Open to ideas. Rigorous about evidence." />
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
              That means distinguishing between each level of certainty.
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
          intro="MR Longevity is more than a longevity information platform. It is an emerging global platform connecting:"
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
            ["Data + AI", "the intelligence layer connecting and improving the network"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-line bg-white p-5">
              <h4 className="font-serif text-lg font-semibold text-navy">{title}</h4>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/10 p-6 text-center md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-navy">One platform. One shared direction.</h3>
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

      <Section tone="white" className="text-center">
        <h2 className="font-serif text-3xl text-navy">Where next?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">
          See what makes up the world of healthy longevity, or find where you could take part.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-gold text-white hover:bg-gold-light">
            <Link to="/discover/longevity-landscape">Explore the Longevity Landscape</Link>
          </Button>
          <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            <Link to="/collaborate">See how to collaborate</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
