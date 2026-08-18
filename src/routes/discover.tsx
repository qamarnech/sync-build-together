import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import {
  EVIDENCE_LABELS,
  FOUNDATIONS,
  MISSION_CARDS,
  TRANSLATION_STAGES,
} from "@/lib/site-content";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover Healthy Longevity — MR Longevity" },
      {
        name: "description",
        content:
          "Healthspan foundations, precision longevity, the eight-stage translation pathway, evidence labelling and the scientific missions MR Longevity is organised around.",
      },
      { property: "og:title", content: "Discover Healthy Longevity — MR Longevity" },
      {
        property: "og:description",
        content:
          "Explore healthspan foundations, the translation pathway, MR Match and the scientific missions of the ecosystem.",
      },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Healthy Longevity"
          title="What does healthy longevity mean?"
          intro="Protecting and improving the physical, metabolic, cognitive and emotional capacities that allow people to keep living well as they age."
        />
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
      </Section>

      <Section tone="navy">
        <SectionHead
          kicker="Intelligence"
          title="Connecting the Biology of Ageing"
          intro="Ageing is not one process. MR Longevity brings metabolism, immunity, cellular repair, movement, nutrition, sleep, mental wellbeing, environment and genetics into one connected ecosystem."
          invert
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TRANSLATION_STAGES.map((stage) => (
            <div key={stage.code} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] font-semibold tracking-wider text-gold-light">
                {stage.code}
              </p>
              <h4 className="mt-2 font-serif text-base text-white">{stage.title}</h4>
              <p className="mt-1 text-sm text-gold-pale/70">{stage.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-xl text-white">MR Match — need meets capability</h3>
            <p className="mt-2 text-sm text-gold-pale/70">
              Matchmaking actively connects what a project is missing with who can provide it. Every
              project on the board is scored against the expertise of every member.
            </p>
            <Button asChild className="mt-5 bg-gold text-white hover:bg-gold-light">
              <Link to="/projects">See live matches</Link>
            </Button>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-xl text-white">MR Longevity Intelligence</h3>
            <p className="mt-2 text-sm text-gold-pale/70">
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
                  className="rounded-full border border-gold-pale/25 px-3 py-1 text-xs text-gold-pale/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-serif text-lg text-white">
            Every claim is labelled by its evidence status
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {EVIDENCE_LABELS.map((item) => (
              <div key={item.label} className="rounded-lg border border-gold-pale/20 p-4">
                <p className="text-sm font-semibold text-gold-light">{item.label}</p>
                <p className="mt-1 text-sm text-gold-pale/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="Scientific Missions"
          title="The challenges the ecosystem is organised around"
          intro="Rather than a directory of researchers, MR Longevity is organised around major challenges where collaboration can meaningfully advance healthy longevity."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MISSION_CARDS.map((mission) => (
            <div key={mission.title} className="rounded-xl border border-line bg-white p-6">
              <h4 className="font-semibold text-navy">{mission.title}</h4>
              <p className="mt-2 text-sm text-ink-soft">{mission.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="bg-navy text-white hover:bg-navy-2">
            <Link to="/projects">Explore projects in these missions</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
