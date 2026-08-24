import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { myProfileQuery, projectMembersQuery, projectsQuery } from "@/lib/data";
import { matchScore, matchedCapabilities } from "@/lib/match";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Member Dashboard | MR Longevity" },
      { name: "description", content: "Your MR Longevity profile, projects and MR Match suggestions." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user } = useAuth();
  const { data: profile } = useQuery(myProfileQuery(user?.id));
  const { data: projects = [] } = useQuery(projectsQuery);
  const { data: memberships = [] } = useQuery(projectMembersQuery);

  const myProjects = profile ? projects.filter((p) => p.owner_id === profile.id) : [];
  const myMemberships = profile ? memberships.filter((m) => m.profile_id === profile.id) : [];
  const joinedProjects = projects.filter((p) => myMemberships.some((m) => m.project_id === p.id));

  const matches = profile
    ? projects
        .filter((p) => p.owner_id !== profile.id && p.open_to_collaborators)
        .map((project) => ({ project, score: matchScore(project, profile) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
    : [];

  return (
    <div className="bg-sand px-6 py-14">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-2xl border border-line bg-white p-8">
          <p className="font-serif text-sm italic text-gold">Welcome back</p>
          <h1 className="mt-1 text-3xl font-bold text-navy">
            {profile?.full_name?.trim() ? profile.full_name : "Complete your member profile"}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {profile?.headline?.trim()
              ? profile.headline
              : "Add your expertise and needs so MR Match can connect you with the right projects."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(profile?.expertise ?? []).map((tag) => (
              <Tag key={tag} tone="gold">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild className="bg-navy text-white hover:bg-navy-2">
              <Link to="/profile">Edit profile</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects/new">Propose a project</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-xl text-navy">Projects that match you</h2>
            <p className="mt-1 text-sm text-ink-soft">
              MR Match scores every open project against your expertise.
            </p>
            <div className="mt-4 space-y-3">
              {matches.length === 0 && (
                <p className="text-sm text-ink-mute">
                  Add expertise to your profile to see matches.
                </p>
              )}
              {matches.map(({ project, score }) => (
                <Link
                  key={project.id}
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  className="block rounded-xl border border-line p-4 transition-colors hover:border-gold"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-navy">{project.title}</h3>
                    <span className="shrink-0 rounded-full bg-gold/10 px-2 py-1 text-xs font-semibold text-gold">
                      match {score}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{project.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile &&
                      matchedCapabilities(project, profile).map((cap) => <Tag key={cap}>{cap}</Tag>)}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-xl text-navy">Your projects</h2>
            <div className="mt-4 space-y-3">
              {myProjects.length === 0 && (
                <p className="text-sm text-ink-mute">You haven't proposed a project yet.</p>
              )}
              {myProjects.map((project) => (
                <Link
                  key={project.id}
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  className="block rounded-xl border border-line p-4 hover:border-gold"
                >
                  <h3 className="font-semibold text-navy">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{project.status}</p>
                </Link>
              ))}
            </div>

            <h2 className="mt-8 font-serif text-xl text-navy">Projects you've joined</h2>
            <div className="mt-4 space-y-3">
              {joinedProjects.length === 0 && (
                <p className="text-sm text-ink-mute">No collaborations yet.</p>
              )}
              {joinedProjects.map((project) => (
                <Link
                  key={project.id}
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  className="block rounded-xl border border-line p-4 hover:border-gold"
                >
                  <h3 className="font-semibold text-navy">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {myMemberships.find((m) => m.project_id === project.id)?.status}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
