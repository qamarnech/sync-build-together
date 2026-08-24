import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { StageChain } from "@/components/site/infographics";

export interface Pillar {
  slug: string;
  to: string;
  name: string;
  kicker: string;
  num: string;
  title: string;
  intro: string;
  focus: { title: string; body: string }[];
  participants: string[];
  outputs: string[];
  handoff: string;
}

export function PillarPage({
  pillar,
  backTo,
  sequence,
}: {
  pillar: Pillar;
  backTo: string;
  sequence?: string[];
}) {
  const activeIndex = sequence ? sequence.indexOf(pillar.name) : -1;
  return (
    <div>
      <Section tone="navy">
        <SectionHead kicker={pillar.kicker} num={pillar.num} title={pillar.title} intro={pillar.intro} invert />
        {sequence && activeIndex >= 0 && (
          <StageChain items={sequence} activeIndex={activeIndex} className="mt-8" />
        )}
      </Section>

      <Section tone="white">
        <SectionHead kicker="Focus areas" title="What this stage covers" align="left" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillar.focus.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <p className="font-serif text-sm italic text-gold">Who takes part</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pillar.participants.map((item) => (
                <Tag key={item} tone="navy">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <p className="font-serif text-sm italic text-gold">What it produces</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pillar.outputs.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-ink-soft">{pillar.handoff}</p>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">
            Explore {pillar.name.toLowerCase()}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            Join MR Longevity to find projects, collaborators and capital aligned with this focus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold">
              <Link to="/auth" search={{ mode: "signup" }}>
                Join MR Longevity
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to={backTo}>Back to discover</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
