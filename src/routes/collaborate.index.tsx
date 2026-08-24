import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FigureTitle, Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { CycleWheel } from "@/components/site/infographics";
import { COLLABORATE_AREAS } from "@/lib/collaborate-content";
import { OPPORTUNITY_CYCLE } from "@/lib/landscape-content";

const DESCRIPTION =
  "See what people and organisations are doing across healthy longevity — projects, partners, translation and innovation, and open opportunities to take part.";

export const Route = createFileRoute("/collaborate/")({
  head: () => ({
    meta: [
      { title: "Collaborate — Projects, Partners & Opportunities | MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Collaborate — MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollaboratePage,
});

function CollaboratePage() {
  const [stage, setStage] = useState(0);
  const activeStage = OPPORTUNITY_CYCLE[stage]!;

  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Collaborate"
          title="What is being done — and how you can take part"
          intro="Discover explains the longevity landscape. Collaborate shows the work happening inside it: the projects, the network of partners, the pathway from discovery to real-world use, and where you can join in."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Four ways in"
          title="Start with the question you are asking"
          align="left"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {COLLABORATE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={area.to}
              className="group flex flex-col rounded-2xl border border-line bg-paper p-8 transition-colors hover:border-gold/60"
            >
              <p className="font-serif text-sm italic text-gold">{area.kicker}</p>
              <h3 className="mt-1 font-serif text-2xl text-navy">{area.question}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{area.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">
                {area.cta}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="How collaboration works"
          title="From discovery to shared outcomes"
          intro="Collaboration on MR Longevity follows a repeating cycle. Each turn returns evidence and learning to the beginning."
        />

        <figure className="mt-10">
          <CycleWheel
            labels={OPPORTUNITY_CYCLE.map((item) => item.title)}
            active={stage}
            onSelect={setStage}
          />
          <figcaption className="mt-4">
            <FigureTitle
              title="The Collaboration Cycle"
              note="A loop, not a pipeline: each stage feeds the next and learning returns to the start."
            />
          </figcaption>
        </figure>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gold/30 bg-white p-8 text-center">
          <p className="font-serif text-sm italic text-gold">
            Stage {String(stage + 1).padStart(2, "0")} of {OPPORTUNITY_CYCLE.length}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-navy">{activeStage.title}</h3>
          <p className="mt-3 text-sm text-ink-soft">{activeStage.body}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <Tag tone="gold">Collaboration</Tag>
          <Tag tone="navy">Network</Tag>
          <Tag>Translation &amp; Innovation</Tag>
        </div>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">Ready to collaborate?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            Join MR Longevity to publish a project, meet collaborators and use MR Match.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to="/discover/longevity-landscape">See the Longevity Landscape</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
