import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import {
  EVIDENCE_LABELS,
  FOUNDATIONS,
  MISSION_CARDS,
  TRANSLATION_STAGES,
} from "@/lib/site-content";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";
import { EvidenceLadder, HealthspanCurve, PathwayTrack } from "@/components/site/infographics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/discover/")({
  head: () => ({
    meta: [
      { title: "Discover Healthy Longevity — MR Longevity" },
      {
        name: "description",
        content:
          "Healthspan foundations, precision longevity, the biology of ageing, the eight-stage translation pathway, evidence labelling and the scientific missions MR Longevity is organised around.",
      },
      { property: "og:title", content: "Discover Healthy Longevity — MR Longevity" },
      {
        property: "og:description",
        content:
          "Explore healthspan foundations, the biology of ageing, the translation pathway, MR Match and the scientific missions of the ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  const [stage, setStage] = useState(0);
  const activeStage = TRANSLATION_STAGES[stage]!;

  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Discover"
          title="Explore the science and focus of healthy longevity"
          intro="Three lenses into the knowledge that powers the ecosystem: what healthy longevity means, the biology of ageing, and the scientific missions we are organised around."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Healthy Longevity"
          num={1}
          title="What does healthy longevity mean?"
          intro="Protecting and improving the physical, metabolic, cognitive and emotional capacities that allow people to keep living well as they age."
        />
        <figure className="mt-10">
          <HealthspanCurve />
          <figcaption className="mt-3 text-center text-xs text-ink-mute">
            Fig. 05 — The goal is not simply more years, but keeping function high for longer.
          </figcaption>
        </figure>
        <h3 className="mt-12 text-center font-serif text-xl text-navy">Healthspan Foundations</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FOUNDATIONS.map((item) => (
            <div key={item.title} className="rounded-xl border border-line bg-paper p-6">
              <h4 className="font-semibold text-navy">{item.title}</h4>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
          <h4 className="font-serif text-lg text-navy">Precision Longevity</h4>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-ink-soft">
            Where appropriate, these foundations can be supported by emerging and established health
            technologies. Advanced longevity science should build upon the foundations of health —
            not replace them.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              "Biomarkers",
              "Diagnostics",
              "Personalised Nutrition",
              "Digital Health",
              "Therapeutics",
              "Regenerative Medicine",
            ].map((tag) => (
              <Tag key={tag} tone="gold">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-navy/30 text-navy hover:bg-navy/5">
            <Link to="/discover/healthy-longevity">Read more on Healthy Longevity</Link>
          </Button>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="Biology of Aging"
          num={2}
          title="Connecting the Biology of Ageing"
          intro="Ageing is not one process. MR Longevity brings metabolism, immunity, cellular repair, movement, nutrition, sleep, mental wellbeing, environment and genetics into one connected ecosystem."
        />
        <figure className="mt-10">
          <PathwayTrack
            labels={TRANSLATION_STAGES.map((s) => s.title)}
            active={stage}
            onSelect={setStage}
          />
          <figcaption className="mt-4 text-center text-xs text-ink-mute">
            Fig. 06 — The eight-stage translation pathway, from first insight to population impact.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TRANSLATION_STAGES.map((stage) => (
            <button
              key={stage.code}
              onClick={() => setStage(TRANSLATION_STAGES.indexOf(stage))}
              className={cn(
                "rounded-xl border p-5 text-left transition-colors",
                stage.code === activeStage.code
                  ? "border-gold bg-white"
                  : "border-line bg-white/60 hover:border-gold/50",
              )}
            >
              <p className="text-[11px] font-semibold tracking-wider text-gold">{stage.code}</p>
              <h4 className="mt-2 font-serif text-base text-navy">{stage.title}</h4>
              <p className="mt-1 text-sm text-ink-soft">{stage.body}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="font-serif text-xl text-navy">MR Match — need meets capability</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Matchmaking actively connects what a project is missing with who can provide it. Every
              project on the board is scored against the expertise of every member.
            </p>
            <Button asChild className="mt-5 bg-gold text-white hover:bg-gold-light">
              <Link to="/projects">See live matches</Link>
            </Button>
          </div>
          <div className="rounded-xl border border-line bg-white p-6">
            <h3 className="font-serif text-xl text-navy">MR Longevity Intelligence</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Connecting research, biomarkers, interventions, clinical evidence and real-world
              outcomes to understand, predict, personalise, measure and learn.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Discover Connections",
                "Generate Hypotheses",
                "Identify Research Gaps",
                "Find Collaborators",
                "Surface Opportunities",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-line bg-white p-6">
          <h3 className="font-serif text-lg text-navy">
            Every claim is labelled by its evidence status
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {EVIDENCE_LABELS.map((item) => (
              <div key={item.label} className="rounded-lg border border-gold/20 bg-gold/5 p-4">
                <p className="text-sm font-semibold text-gold">{item.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
          <EvidenceLadder className="mt-6" />
          <p className="mt-3 text-center text-xs text-ink-mute">
            Fig. 07 — How confidence grows as a claim moves from hypothesis to validated practice.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-navy/30 text-navy hover:bg-navy/5">
            <Link to="/discover/biology-of-aging">Read more on Biology of Aging</Link>
          </Button>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="Scientific Missions"
          num={3}
          title="The challenges the ecosystem is organised around"
          intro="Rather than a directory of researchers, MR Longevity is organised around major challenges where collaboration can meaningfully advance healthy longevity."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MISSION_CARDS.map((mission) => (
            <div key={mission.title} className="rounded-xl border border-line bg-paper p-6">
              <h4 className="font-semibold text-navy">{mission.title}</h4>
              <p className="mt-2 text-sm text-ink-soft">{mission.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-navy/30 text-navy hover:bg-navy/5">
            <Link to="/discover/scientific-missions">Read more on Scientific Missions</Link>
          </Button>
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
              <Link to="/ecosystem">Explore the ecosystem</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
