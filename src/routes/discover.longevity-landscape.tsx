import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FigureTitle, Section, SectionHead, Tag } from "@/components/site/ui-bits";
import {
  CAPABILITY_AREAS,
  CAPABILITY_RING,
  OPPORTUNITY_CYCLE,
  PARTICIPANT_GROUPS,
} from "@/lib/ecosystem-content";
import { CycleWheel, ParticipantOrbit, SystemsRings } from "@/components/site/infographics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/discover/longevity-landscape")({
  head: () => ({
    meta: [
      { title: "Ecosystem Architecture — MR Longevity" },
      {
        name: "description",
        content:
          "Who is in the healthy longevity ecosystem, the capability areas it spans and the continuous opportunity cycle that connects discovery to real-world impact.",
      },
      { property: "og:title", content: "Ecosystem Architecture — MR Longevity" },
      {
        property: "og:description",
        content:
          "Participants, capability areas and the continuous opportunity cycle of the MR Longevity ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  const [participant, setParticipant] = useState(0);
  const [stage, setStage] = useState(0);

  const activeGroup = PARTICIPANT_GROUPS[participant]!;
  const activeStage = OPPORTUNITY_CYCLE[stage]!;

  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Ecosystem architecture"
          title="One ecosystem, many capabilities"
          intro="The ecosystem is designed as a connected system: participants, capability areas and a continuous opportunity cycle that keeps returning evidence to the beginning."
          invert
        />
      </Section>

      {/* Participants */}
      <Section tone="white">
        <SectionHead
          kicker="Participants"
          num="I"
          title="Who is in the ecosystem"
          intro="Healthy longevity only works when science, healthcare, industry, capital, policy and society move together."
        />

        <figure className="mt-10">
          <ParticipantOrbit
            labels={PARTICIPANT_GROUPS.map((g) => g.label)}
            active={participant}
            onSelect={setParticipant}
          />
          <figcaption className="mt-4">
            <FigureTitle
              title="The Participant Orbit"
              note="Every participant group orbits the same goal. Hover a node to read its role."
            />
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {PARTICIPANT_GROUPS.map((group, index) => (
              <button
                key={group.label}
                onClick={() => setParticipant(index)}
                className={cn(
                  "rounded-full border px-4 py-2 text-left text-sm transition-colors lg:rounded-xl",
                  index === participant
                    ? "border-gold bg-gold/10 font-semibold text-navy"
                    : "border-line bg-paper text-ink-soft hover:border-gold/50",
                )}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-sm italic text-gold">Participant group</p>
            <h3 className="mt-1 font-serif text-2xl text-navy">{activeGroup.title}</h3>
            <p className="mt-3 max-w-2xl text-sm text-ink-soft">{activeGroup.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeGroup.items.map((item) => (
                <Tag key={item} tone="navy">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Capability areas */}
      <Section tone="sand">
        <SectionHead
          kicker="Capability areas"
          num="II"
          title="What healthy longevity encompasses"
          intro="Human foundations at the centre, supported by the scientific, clinical, technological and environmental systems around them."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Tag tone="gold">Healthy Human Life</Tag>
          {CAPABILITY_RING.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <figure className="mt-10">
          <SystemsRings />
          <figcaption className="mt-4">
            <FigureTitle
              title="The Person as a System"
              note="The person sits at the centre; capability areas surround them as one system."
            />
          </figcaption>
        </figure>

        {["Human foundations", "Systems & science"].map((group) => (
          <div key={group} className="mt-12">
            <h3 className="font-serif text-sm italic tracking-wide text-gold">{group}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {CAPABILITY_AREAS.filter((area) => area.group === group).map((area) => (
                <div key={area.title} className="rounded-2xl border border-line bg-white p-6">
                  <h4 className="font-semibold text-navy">{area.title}</h4>
                  <p className="mt-2 text-sm text-ink-soft">{area.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Opportunity cycle */}
      <Section tone="white">
        <SectionHead
          kicker="Opportunity cycle"
          num="III"
          title="A continuous learning ecosystem"
          intro="Not a linear innovation pipeline. Every cycle returns evidence and learning to the beginning."
        />

        <figure className="mt-10">
          <CycleWheel
            labels={OPPORTUNITY_CYCLE.map((item) => item.title)}
            active={stage}
            onSelect={setStage}
          />
          <figcaption className="mt-4">
            <FigureTitle
              title="The Opportunity Cycle"
              note="A loop, not a pipeline: each stage feeds the next and learning returns to the start."
            />
          </figcaption>
        </figure>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
          <p className="font-serif text-sm italic text-gold">
            Stage {String(stage + 1).padStart(2, "0")} of {OPPORTUNITY_CYCLE.length}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-navy">{activeStage.title}</h3>
          <p className="mt-3 text-sm text-ink-soft">{activeStage.body}</p>
        </div>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">
            Find your place in the ecosystem
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            Join MR Longevity to browse projects, meet collaborators and use MR Match.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to="/discover">Discover the science</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
