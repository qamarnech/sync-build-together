import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/participate/members")({
  head: () => ({
    meta: [
      { title: "Meet MR Longevity Members | MR Longevity" },
      {
        name: "description",
        content:
          "Meet the scientists, clinicians, innovators, investors and institutions taking part in the healthy longevity mission, and join them.",
      },
      { property: "og:title", content: "Meet MR Longevity Members | MR Longevity" },
      {
        property: "og:description",
        content: "Meet the people advancing healthy longevity, and find where you fit in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MembersPage,
});

const GROUPS = [
  {
    name: "Scientists and researchers",
    body: "Biologists of ageing, geroscientists and translational researchers sharing questions, data and methods.",
  },
  {
    name: "Clinicians and health professionals",
    body: "Practitioners turning evidence into safe, measurable care pathways.",
  },
  {
    name: "Innovators and companies",
    body: "Teams building diagnostics, therapeutics, devices and digital tools for healthy longevity.",
  },
  {
    name: "Investors and institutions",
    body: "Funders, universities, and public bodies supporting validation and real-world adoption.",
  },
];

function MembersPage() {
  return (
    <Section tone="white">
      <SectionHead
        kicker="Meet MR Longevity Members"
        title="The people behind the mission"
        intro="Members bring expertise, projects and needs into one shared space, so collaborations start from real capability rather than chance."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {GROUPS.map((group) => (
          <div key={group.name} className="rounded-xl border border-line bg-paper p-6">
            <Tag tone="gold">Member group</Tag>
            <h3 className="mt-4 font-serif text-lg text-navy">{group.name}</h3>
            <p className="mt-2 text-sm text-ink-soft">{group.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-line bg-sand/40 p-6">
        <div className="flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 text-gold" />
          <div>
            <h3 className="font-serif text-lg text-navy">Member directory</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Full profiles, expertise and MR Match suggestions are available to members. Sign in to
              browse the directory, or join to create your profile.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/members"
                className="inline-flex items-center gap-1 rounded-lg bg-navy px-4 py-2 text-sm text-paper transition-colors hover:bg-navy/90"
              >
                Browse members <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className="inline-flex items-center gap-1 rounded-lg border border-line px-4 py-2 text-sm text-navy transition-colors hover:border-gold/60"
              >
                Join MR Longevity
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
