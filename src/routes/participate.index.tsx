import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { PARTICIPATE_ITEMS } from "@/lib/participate-nav";
import { EVENTS, LONGEVITY_NEWS } from "@/lib/insights-content";
import bannerParticipate from "@/assets/banner-participate.jpg";


export const Route = createFileRoute("/participate/")({
  head: () => ({
    meta: [
      { title: "Participate | MR Longevity" },
      {
        name: "description",
        content:
          "News, events and members of the MR Longevity mission. Find what is happening, where the mission meets, and who to work with.",
      },
      { property: "og:title", content: "Participate | MR Longevity" },
      {
        property: "og:description",
        content: "Longevity news, global events and the people taking part.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ParticipateIndex,
});

const SUMMARY: Record<string, { count: string; body: string }> = {
  community: { count: "Open to all", body: "Understand the science, act on it, share experience and progress together." },
  news: { count: `${LONGEVITY_NEWS.length} entries`, body: "Sources and signals shaping healthy longevity worldwide." },
  events: { count: `${EVENTS.length} entries`, body: "Where the mission convenes across science, clinic and capital." },
  members: { count: "Member directory", body: "The people taking part, and how to join them." },
};


function ParticipateIndex() {
  return (
    <div>
      <div className="relative overflow-hidden bg-navy">
        <img
          src={bannerParticipate}
          alt="A large audience in a glowing holographic amphitheatre with floating data panels"
          width={1920}
          height={768}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy/60" />
        <div className="relative">
          <Section tone="navy" className="bg-transparent">
            <SectionHead
              as="h1"
              kicker="Participate"
              title="Take part in the healthy longevity mission"
              intro="Follow what is happening, join the gatherings, and meet the people building healthy longevity."
              invert
            />
          </Section>
        </div>
      </div>

      <Section tone="white">

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PARTICIPATE_ITEMS.map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="group rounded-xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <Tag tone="gold">{SUMMARY[item.slug]!.count}</Tag>
              <h3 className="mt-4 font-serif text-xl text-navy">{item.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{SUMMARY[item.slug]!.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

      </Section>
    </div>
  );
}
