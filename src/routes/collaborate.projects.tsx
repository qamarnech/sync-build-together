import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { PROJECT_CATEGORIES, PROJECT_FIELDS } from "@/lib/collaborate-content";

const DESCRIPTION =
  "Research, clinical, innovation, technology, international and public health projects across healthy longevity — what they are working on and what they still need.";

export const Route = createFileRoute("/collaborate/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Collaborate | MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Projects — MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Projects"
          title="What are we working on?"
          intro="Projects are where collaboration becomes concrete: a defined purpose, a real challenge, named participants and a clear statement of what is still needed."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead kicker="Project types" title="Six kinds of work" align="left" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECT_CATEGORIES.map((category) => (
            <div key={category.slug} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-semibold text-navy">{category.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{category.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <Tag key={example}>{example}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead kicker="Project profile" title="What every project shows" align="left" />
            <p className="mt-3 max-w-xl text-sm text-ink-soft">
              Each project on the platform is described the same way, so collaborators can judge quickly
              whether they can contribute.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PROJECT_FIELDS.map((field) => (
              <li key={field} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-medium text-navy">{field}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">Explore Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            The live project board is open to members. Sign in to browse projects, publish your own and
            find collaborators through MR Match.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to="/collaborate/opportunities">See open opportunities</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
