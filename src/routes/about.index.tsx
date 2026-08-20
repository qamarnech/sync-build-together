import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About MR Longevity — Our Approach and What We Are Building" },
      {
        name: "description",
        content:
          "MR Longevity connects science, healthcare, innovation, industry, capital and public health into a global translation ecosystem for healthy longevity.",
      },
      { property: "og:title", content: "About MR Longevity" },
      {
        property: "og:description",
        content:
          "Why we exist, our vision and mission, our approach, and the people building the ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutIndex,
});

const CARDS = [
  {
    to: "/about/why",
    name: "Why MR Longevity",
    body: "The knowledge needed for healthy longevity is fragmented. We exist to connect it.",
    tag: "The problem",
  },
  {
    to: "/about/vision-mission",
    name: "Vision & Mission",
    body: "Helping people live healthier for longer — and the principle that keeps us credible.",
    tag: "Direction",
  },
  {
    to: "/about/approach",
    name: "Our Approach",
    body: "Systems thinking, bridged knowledge systems and personalised longevity.",
    tag: "Method",
  },
  {
    to: "/founder",
    name: "Founder",
    body: "Professor Qiang Fu 付强 — publications, patents and funded research programmes.",
    tag: "People",
  },
  {
    to: "/about/team",
    name: "Team",
    body: "How the ecosystem is organised, and the roles we are building around.",
    tag: "People",
  },
] as const;

function AboutIndex() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="About"
          title="A better pathway between science and health"
          intro="MR Longevity exists to shorten the distance between what science discovers and what people can actually benefit from."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <Tag tone="gold">{card.tag}</Tag>
              <h3 className="mt-4 font-serif text-xl text-navy">{card.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{card.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold">
                Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
