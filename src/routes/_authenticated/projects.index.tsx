import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { profilesQuery, projectsQuery } from "@/lib/data";
import { MISSION_AREAS, PROJECT_STATUSES } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/_authenticated/projects/")({
  head: () => ({
    meta: [
      { title: "Projects Board — MR Longevity" },
      {
        name: "description",
        content: "Browse healthy longevity projects seeking collaborators, capabilities and funding.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { data: projects = [], isLoading } = useQuery(projectsQuery);
  const { data: profiles = [] } = useQuery(profilesQuery);
  const [search, setSearch] = useState("");
  const [mission, setMission] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = projects.filter((project) => {
    const haystack = `${project.title} ${project.summary} ${project.needed_capabilities.join(" ")}`.toLowerCase();
    return (
      haystack.includes(search.trim().toLowerCase()) &&
      (mission === "all" || project.mission_area === mission) &&
      (status === "all" || project.status === status)
    );
  });

  return (
    <div className="bg-sand px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-serif text-sm italic text-gold">Projects, not just members</p>
            <h1 className="text-3xl font-bold text-navy">Projects board</h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">
              Every project states what it is missing. Find where your capability meets a need.
            </p>
          </div>
          <Button asChild variant="gold">
            <Link to="/projects/new">Propose a project</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-3 rounded-2xl border border-line bg-white p-4 md:grid-cols-3">
          <Input
            placeholder="Search projects or capabilities"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            maxLength={100}
          />
          <select
            value={mission}
            onChange={(event) => setMission(event.target.value)}
            className="h-10 rounded-md border border-input bg-white px-3 text-sm"
          >
            <option value="all">All mission areas</option>
            {MISSION_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-10 rounded-md border border-input bg-white px-3 text-sm"
          >
            <option value="all">All stages</option>
            {PROJECT_STATUSES.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {isLoading && <p className="text-sm text-ink-mute">Loading projects…</p>}
          {!isLoading && filtered.length === 0 && (
            <p className="text-sm text-ink-mute">No projects match those filters yet.</p>
          )}
          {filtered.map((project) => {
            const owner = profiles.find((p) => p.id === project.owner_id);
            return (
              <Link
                key={project.id}
                to="/projects/$projectId"
                params={{ projectId: project.id }}
                className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-gold"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Tag tone="navy">{project.mission_area}</Tag>
                  <Tag>{project.status}</Tag>
                </div>
                <h2 className="mt-3 font-serif text-xl text-navy">{project.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{project.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-ink-mute">Needs</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.needed_capabilities.map((cap) => (
                    <Tag key={cap} tone="gold">
                      {cap}
                    </Tag>
                  ))}
                </div>
                {owner && (
                  <p className="mt-4 text-xs text-ink-mute">
                    Led by {owner.full_name} · {owner.organisation || owner.country}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
