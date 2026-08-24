import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { myProfileQuery, profilesQuery, projectMembersQuery, projectsQuery } from "@/lib/data";
import { matchScore, matchedCapabilities } from "@/lib/match";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/_authenticated/projects/$projectId")({
  head: () => ({
    meta: [
      { title: "Project | MR Longevity" },
      { name: "description", content: "Project detail, collaborators and MR Match suggestions." },
    ],
  }),
  component: ProjectDetailPage,
});

const messageSchema = z.string().trim().max(500);

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: projects = [] } = useQuery(projectsQuery);
  const { data: profiles = [] } = useQuery(profilesQuery);
  const { data: memberships = [] } = useQuery(projectMembersQuery);
  const { data: myProfile } = useQuery(myProfileQuery(user?.id));
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return (
      <div className="bg-sand px-6 py-20 text-center">
        <p className="font-serif italic text-ink-mute">Loading project…</p>
      </div>
    );
  }

  const owner = profiles.find((p) => p.id === project.owner_id);
  const isOwner = myProfile?.id === project.owner_id;
  const projectMemberships = memberships.filter((m) => m.project_id === project.id);
  const myMembership = projectMemberships.find((m) => m.profile_id === myProfile?.id);

  const suggestions = profiles
    .filter((p) => p.id !== project.owner_id && !projectMemberships.some((m) => m.profile_id === p.id))
    .map((profile) => ({ profile, score: matchScore(project, profile) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const refresh = () => queryClient.invalidateQueries({ queryKey: ["project_members"] });

  const express = async () => {
    if (!myProfile) return;
    const parsed = messageSchema.safeParse(message);
    if (!parsed.success) {
      toast.error("Message is too long");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("project_members").insert({
      project_id: project.id,
      profile_id: myProfile.id,
      message: parsed.data,
      status: "interested",
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setMessage("");
    await refresh();
    toast.success("Interest sent to the project lead");
  };

  const leave = async () => {
    if (!myMembership) return;
    const { error } = await supabase.from("project_members").delete().eq("id", myMembership.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    await refresh();
    toast.success("Removed from project");
  };

  const setStatus = async (membershipId: string, status: string) => {
    const { error } = await supabase.from("project_members").update({ status }).eq("id", membershipId);
    if (error) {
      toast.error(error.message);
      return;
    }
    await refresh();
  };

  return (
    <div className="bg-sand px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-8">
            <div className="flex flex-wrap gap-2">
              <Tag tone="navy">{project.mission_area}</Tag>
              <Tag>{project.status}</Tag>
              <Tag>{project.project_type}</Tag>
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold text-navy">{project.title}</h1>
            <p className="mt-2 text-ink-soft">{project.summary}</p>
            <p className="mt-5 whitespace-pre-line text-sm text-ink-soft">{project.description}</p>

            <p className="mt-6 text-xs uppercase tracking-wide text-ink-mute">Capabilities needed</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.needed_capabilities.map((cap) => (
                <Tag key={cap} tone="gold">
                  {cap}
                </Tag>
              ))}
            </div>

            {owner && (
              <p className="mt-6 text-sm text-ink-mute">
                Led by{" "}
                <Link
                  to="/members/$profileId"
                  params={{ profileId: owner.id }}
                  className="text-navy underline-offset-2 hover:underline"
                >
                  {owner.full_name}
                </Link>{" "}
                · {owner.organisation || owner.country}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-xl text-navy">Collaborators</h2>
            <div className="mt-4 space-y-3">
              {projectMemberships.length === 0 && (
                <p className="text-sm text-ink-mute">No collaborators yet.</p>
              )}
              {projectMemberships.map((membership) => {
                const profile = profiles.find((p) => p.id === membership.profile_id);
                return (
                  <div
                    key={membership.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line p-4"
                  >
                    <div>
                      <p className="font-semibold text-navy">{profile?.full_name ?? "Member"}</p>
                      <p className="text-sm text-ink-soft">
                        {membership.role} · {membership.status}
                      </p>
                      {membership.message && (
                        <p className="mt-1 text-sm italic text-ink-mute">“{membership.message}”</p>
                      )}
                    </div>
                    {isOwner && membership.status === "interested" && (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => setStatus(membership.id, "accepted")}>
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setStatus(membership.id, "declined")}
                        >
                          Decline
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-navy">Join this project</h2>
            {isOwner ? (
              <p className="mt-2 text-sm text-ink-mute">You lead this project.</p>
            ) : myMembership ? (
              <div className="mt-3 space-y-3">
                <p className="text-sm text-ink-soft">Your status: {myMembership.status}</p>
                <Button variant="outline" onClick={leave} className="w-full">
                  Withdraw
                </Button>
              </div>
            ) : (
              <div className="mt-3 space-y-3">
                <Textarea
                  placeholder="What can you contribute?"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <Button
                  onClick={express}
                  disabled={busy}
                  className="w-full bg-gold text-white hover:bg-gold-light"
                >
                  Express interest
                </Button>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-serif text-lg text-navy">MR Match, suggested collaborators</h2>
            <div className="mt-3 space-y-3">
              {suggestions.length === 0 && (
                <p className="text-sm text-ink-mute">No matches for these needs yet.</p>
              )}
              {suggestions.map(({ profile, score }) => (
                <Link
                  key={profile.id}
                  to="/members/$profileId"
                  params={{ profileId: profile.id }}
                  className="block rounded-xl border border-line p-4 hover:border-gold"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-navy">{profile.full_name}</p>
                    <span className="rounded-full bg-gold/10 px-2 py-1 text-xs font-semibold text-gold">
                      {score}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft">{profile.headline}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {matchedCapabilities(project, profile).map((cap) => (
                      <Tag key={cap}>{cap}</Tag>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
