import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FigureTitle, Flourish, Kicker, Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { HealthspanCurve, TranslationFlywheel } from "@/components/site/infographics";
import { FLYWHEEL, PERSONAS, VERBS } from "@/lib/site-content";
import personaResearcher from "@/assets/persona-researcher.jpg";
import personaClinician from "@/assets/persona-clinician.jpg";
import personaCompany from "@/assets/persona-company.jpg";
import personaInvestor from "@/assets/persona-investor.jpg";
import personaUniversity from "@/assets/persona-university.jpg";
import personaGovernment from "@/assets/persona-government.jpg";
import personaIndividual from "@/assets/persona-individual.jpg";

const PERSONA_IMAGES: Record<string, { src: string; alt: string }> = {
  "I am a Researcher": { src: personaResearcher, alt: "Illustration of a researcher at a microscope studying molecules" },
  "I am a Clinician": { src: personaClinician, alt: "Illustration of a clinician with a stethoscope reviewing a patient's health data" },
  "I am a Company or Startup": { src: personaCompany, alt: "Illustration of startup founders presenting a prototype and growth curve" },
  "I am an Investor or Funder": { src: personaInvestor, alt: "Illustration of an investor reviewing charts and funding growth" },
  "I represent a University": { src: personaUniversity, alt: "Illustration of academics in front of a university building" },
  "I represent Government / Public Health": { src: personaGovernment, alt: "Illustration of public health officials before a civic building with a world map" },
  "I am an Individual": { src: personaIndividual, alt: "Illustration of an active older person walking with healthy lifestyle symbols" },
};

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

const JOURNEY = [
  {
    num: "I",
    step: "Why",
    title: "The Vision",
    body: "A shared ambition for healthier, longer lives.",
    href: "#why",
  },
  {
    num: "II",
    step: "What",
    title: "The World of Longevity",
    body: "The science, systems and people that shape how we age.",
    href: "#what",
  },
  {
    num: "III",
    step: "How",
    title: "From Science to Life",
    body: "Discovery translated into validated, everyday health.",
    href: "#how",
  },
  {
    num: "IV",
    step: "Gain",
    title: "What's Possible",
    body: "The value the ecosystem creates for you.",
    href: "#gain",
  },
  {
    num: "V",
    step: "Join",
    title: "Be Part of It",
    body: "Your place in the healthy longevity movement.",
    href: "#join",
  },
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

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="flourish-line" />
            <span className="whitespace-nowrap font-serif text-xs italic tracking-[0.25em] text-gold-light uppercase">
              The MR Longevity story in five steps
            </span>
            <span className="flourish-line" />
          </div>
          <ol className="grid gap-3 md:grid-cols-5">
            {JOURNEY.map((item) => (
              <li key={item.step}>
                <a
                  href={item.href}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/60 hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-gold/50 px-1 font-serif text-[11px] text-gold-light">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-gold-light uppercase">
                      {item.step}
                    </span>
                  </span>
                  <span className="mt-3 font-serif text-lg leading-snug text-white">
                    {item.title}
                  </span>
                  <span className="mt-2 text-sm text-gold-pale/70">{item.body}</span>
                  <span className="mt-auto pt-4 text-gold-light opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section id="why" tone="white">
        <SectionHead
          kicker="Why — The Vision"
          num={1}
          title="A Shared Ambition for Healthier, Longer Lives"
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
            <FigureTitle title="Compressing Morbidity" align="left" />
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

      <Section id="what" tone="sand">
        <SectionHead
          kicker="What — The World of Longevity"
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
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-navy/25 text-navy hover:bg-navy/5">
            <Link to="/ecosystem">
              Explore the world of longevity <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section id="how" tone="white">
        <SectionHead
          kicker="How — From Science to Life"
          num={3}
          title="One Continuous Loop, From Discovery to Daily Health"
          intro="Nothing stops at publication. Insight becomes evidence, evidence becomes practice, and real-world outcomes feed the next question."
        />
        <figure className="mt-10 rounded-2xl border border-line bg-paper p-6 md:p-8">
          <figcaption className="mb-5">
            <FigureTitle title="The MR Longevity Translation Flywheel" />
          </figcaption>
          <TranslationFlywheel />
        </figure>
        <p className="mt-8 text-center font-serif italic text-ink-mute">
          Science → People → Data → Better Science
        </p>
      </Section>

      <Section id="gain" tone="sand">
        <SectionHead
          kicker="Gain — What's Possible"
          num={4}
          title="Turning Longevity Science Into Longer, Healthier Lives"
          intro="MR Longevity connects scientific discovery, data, technology, prevention and real-world application to help translate knowledge into better health."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {VERBS.map((verb) => (
            <div key={verb.title} className="rounded-xl border border-line bg-white p-6">
              <h3 className="text-lg font-semibold text-navy">{verb.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{verb.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="join" tone="white">
        <SectionHead
          kicker="Join — Be Part of It"
          num={5}
          title="Become Part of the Healthy Longevity Evolution"
          intro="Healthy longevity cannot be created by medicine alone. Individuals, scientists, clinicians, innovators, businesses and institutions all have a role in building the systems that could help future generations live healthier for longer."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PERSONAS.map((persona) => (
            <div key={persona.kicker} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition-colors hover:border-gold/40 hover:bg-white">
              {PERSONA_IMAGES[persona.kicker] ? (
                <img
                  src={PERSONA_IMAGES[persona.kicker]!.src}
                  alt={PERSONA_IMAGES[persona.kicker]!.alt}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-44 w-full border-b border-line object-cover"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-6">
              <p className="font-serif text-sm italic text-gold">{persona.kicker}</p>
              <h3 className="mt-1 text-lg font-semibold text-navy">{persona.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{persona.body}</p>
              <ul className="mt-4 space-y-1.5">
                {persona.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-ink-mute">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                to={persona.cta.href}
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-navy transition-colors group-hover:text-gold"
              >
                {persona.cta.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            Join MR Longevity
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
