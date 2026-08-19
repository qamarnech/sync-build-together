import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { profilesQuery, projectMembersQuery, projectsQuery } from "@/lib/data";
import { ROLE_TYPES } from "@/lib/site-content";
import { Tag } from "@/components/site/ui-bits";
import { FOUNDER_NAME } from "@/lib/founder-fu";
import {
  FounderAffiliations,
  FounderGrants,
  FounderPatents,
  FounderPublications,
} from "@/components/site/FounderRecord";

export const Route = createFileRoute("/_authenticated/members/$profileId")({
  head: () => ({
    meta: [
      { title: "Member Profile — MR Longevity" },
      { name: "description", content: "Member expertise, needs and projects in the MR Longevity ecosystem." },
    ],
  }),
  component: MemberProfilePage,
});

function MemberProfilePage() {
  const { profileId } = Route.useParams();
  const { data: profiles = [] } = useQuery(profilesQuery);
  const { data: projects = [] } = useQuery(projectsQuery);
  const { data: memberships = [] } = useQuery(projectMembersQuery);

  const profile = profiles.find((p) => p.id === profileId);
  if (!profile) {
    return (
      <div className="bg-sand px-6 py-20 text-center">
        <p className="font-serif italic text-ink-mute">Loading member…</p>
      </div>
    );
  }

  const roleLabel = ROLE_TYPES.find((r) => r.value === profile.role_type)?.label ?? profile.role_type;
  const isFounder = profile.full_name === FOUNDER_NAME;
  const led = projects.filter((p) => p.owner_id === profile.id);
  const joined = projects.filter((p) =>
    memberships.some((m) => m.project_id === p.id && m.profile_id === profile.id),
  );

  return (
    <div className="bg-sand px-6 py-14">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-2xl border border-line bg-white p-8">
          <p className="font-serif text-sm italic text-gold">{roleLabel}</p>
          <h1 className="mt-1 font-serif text-3xl font-bold text-navy">{profile.full_name}</h1>
          <p className="mt-2 text-ink-soft">{profile.headline}</p>
          <p className="mt-2 text-sm text-ink-mute">
            {[profile.organisation, profile.country].filter(Boolean).join(" · ")}
          </p>
          {profile.bio && <p className="mt-5 whitespace-pre-line text-sm text-ink-soft">{profile.bio}</p>}

          <p className="mt-6 text-xs uppercase tracking-wide text-ink-mute">Expertise</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.expertise.map((tag) => (
              <Tag key={tag} tone="gold">
                {tag}
              </Tag>
            ))}
          </div>

          {profile.needs.length > 0 && (
            <>
              <p className="mt-5 text-xs uppercase tracking-wide text-ink-mute">Looking for</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.needs.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </>
          )}
          {isFounder && (
            <Link
              to="/founder"
              className="mt-6 inline-flex items-center rounded-full border border-gold px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-white"
            >
              View public founder page
            </Link>
          )}
        </div>

        {isFounder && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-serif text-xl font-bold text-navy">Affiliations</h2>
              <div className="mt-4">
                <FounderAffiliations />
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-serif text-xl font-bold text-navy">Selected publications</h2>
              <div className="mt-4">
                <FounderPublications />
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-serif text-xl font-bold text-navy">Patents</h2>
              <div className="mt-4">
                <FounderPatents />
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-serif text-xl font-bold text-navy">Grants</h2>
              <div className="mt-4">
                <FounderGrants />
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-navy">Leading</h2>
            <div className="mt-3 space-y-2">
              {led.length === 0 && <p className="text-sm text-ink-mute">No projects yet.</p>}
              {led.map((project) => (
                <Link
                  key={project.id}
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  className="block rounded-xl border border-line p-3 text-sm text-navy hover:border-gold"
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-navy">Collaborating on</h2>
            <div className="mt-3 space-y-2">
              {joined.length === 0 && <p className="text-sm text-ink-mute">No collaborations yet.</p>}
              {joined.map((project) => (
                <Link
                  key={project.id}
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  className="block rounded-xl border border-line p-3 text-sm text-navy hover:border-gold"
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
