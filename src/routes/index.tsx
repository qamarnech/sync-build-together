import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Flourish, Kicker, Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { HealthspanCurve, TranslationFlywheel } from "@/components/site/infographics";
import { FLYWHEEL, PERSONAS, VERBS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MR Longevity — Making Life Healthier and Longer" },
      {
        name: "description",
        content:
          "A global healthy longevity ecosystem connecting science, healthcare, innovation, capital and AI — join researchers, clinicians and innovators building measurable healthspan.",
      },
      { property: "og:title", content: "MR Longevity — Making Life Healthier and Longer" },
      {
        property: "og:description",
        content:
          "Connect with researchers, clinicians, innovators and partners turning ageing research into longer, healthier lives.",
      },
    ],
  }),
  component: Index,
});

const FIVE_PATHS = [
  { num: "I. Why", label: "Why does MR Longevity exist?" },
  { num: "II. What", label: "What is it?" },
  { num: "III. How", label: "How does it work?" },
  { num: "IV. Gain", label: "What can I get from it?" },
  { num: "V. Join", label: "How can I participate?" },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>Global Healthy Longevity Ecosystem</Kicker>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            Making Life <span className="text-gold-light">Healthier</span> and{" "}
            <span className="text-gold-light">Longer</span>
          </h1>
          <Flourish />
          <p className="mx-auto max-w-2xl text-base text-gold-pale/80 md:text-lg">
            A healthy longevity ecosystem connecting science, healthcare, innovation, people,
            capital, data and AI — turning advances in ageing research into measurable improvements
            in human healthspan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth">Join MR Longevity</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold-pale/40 bg-transparent text-gold-pale hover:bg-white/10 hover:text-white"
            >
              <Link to="/ecosystem">Explore the Ecosystem</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-3 md:grid-cols-5">
          {FIVE_PATHS.map((path) => (
            <div key={path.num} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-serif text-sm italic text-gold-light">{path.num}</p>
              <p className="mt-1 text-sm text-gold-pale/80">{path.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section tone="white">
        <SectionHead
          kicker="Why MR Longevity?"
          num={1}
          title="We Were Built to Survive. Can We Learn to Thrive Longer?"
          intro="Human biology is extraordinarily resilient — but it was not shaped for the lives we live today. Longer lifespans require a new approach to health."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            "Ageing Biology",
            "Regenerative Medicine",
            "Biomarkers",
            "Preventive Health",
            "Biotechnology",
            "Nutrition",
            "AI",
          ].map((tag) => (
            <Tag key={tag} tone="gold">
              {tag}
            </Tag>
          ))}
        </div>
        <blockquote className="mx-auto mt-10 max-w-3xl border-l-2 border-gold pl-6 font-serif text-xl italic text-navy">
          “The opportunity is not simply to extend life. It is to extend healthy, active and
          independent life — this is the purpose of MR Longevity.”
        </blockquote>
        <figure className="mt-12 rounded-2xl border border-line bg-paper p-6 md:p-8">
          <figcaption className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <span className="font-serif text-sm italic text-gold">Fig. 01 — Compressing morbidity</span>
            <span className="flex items-center gap-5 text-xs text-ink-soft">
              <span className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-ink-mute" /> Health today
              </span>
              <span className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-gold" /> Health extended
              </span>
            </span>
          </figcaption>
          <HealthspanCurve />
        </figure>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Our Vision</h3>
            <p className="mt-2 text-sm text-ink-soft">
              A future where longer life means healthier life — ageing better understood, health
              changes detected earlier, disease prevented or delayed.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Our Mission</h3>
            <p className="mt-2 text-sm text-ink-soft">
              To make life healthier and longer — connecting science, discovery, validation,
              translation, personalised health and real-world outcomes with Data + AI.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="What is MR Longevity?"
          num={2}
          title="From Treating Disease to Extending Health"
          intro="Medicine helped us survive diseases that once shortened human life. The next challenge is understanding ageing itself and protecting health before disease takes it away."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FLYWHEEL.map((step) => (
            <div key={step.title} className="rounded-xl border border-line bg-white p-6">
              <p className="font-serif text-sm italic text-gold">{step.num}</p>
              <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-serif italic text-ink-mute">
          Science → People → Data → Better Science — the MR Longevity Translation Flywheel
        </p>
      </Section>

      <Section tone="white">
        <SectionHead
          kicker="What can I get from it?"
          num={4}
          title="Turning Longevity Science Into Longer, Healthier Lives"
          intro="MR Longevity connects scientific discovery, data, technology, prevention and real-world application to help translate knowledge into better health."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {VERBS.map((verb) => (
            <div key={verb.title} className="rounded-xl border border-line bg-paper p-6">
              <h3 className="text-lg font-semibold text-navy">{verb.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{verb.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          kicker="How can I participate?"
          num={5}
          title="Become Part of the Healthy Longevity Evolution"
          intro="Individuals, scientists, clinicians, innovators, businesses and institutions all have a role in building systems that help future generations live healthier for longer."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PERSONAS.map((persona) => (
            <div key={persona.kicker} className="rounded-xl border border-line bg-white p-6">
              <p className="font-serif text-sm italic text-gold">{persona.kicker}</p>
              <h3 className="mt-1 text-lg font-semibold text-navy">{persona.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{persona.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            What could you bring to healthy longevity?
          </h2>
          <Flourish />
          <p className="text-gold-pale/80">
            Create your member profile, publish the project you need help with, and let MR Match
            connect your needs with the capabilities of the ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-white hover:bg-gold-light">
              <Link to="/auth">
                Join MR Longevity <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold-pale/40 bg-transparent text-gold-pale hover:bg-white/10 hover:text-white"
            >
              <Link to="/projects">Browse projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
