import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { myProfileQuery } from "@/lib/data";
import { CAPABILITIES, MISSION_AREAS, PROJECT_STATUSES, PROJECT_TYPES } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_authenticated/projects/new")({
  head: () => ({
    meta: [
      { title: "Propose a Project | MR Longevity" },
      { name: "description", content: "Publish a healthy longevity project and state what it needs." },
    ],
  }),
  component: NewProjectPage,
});

const projectSchema = z.object({
  title: z.string().trim().min(6, "Give the project a clear title").max(140),
  summary: z.string().trim().min(20, "Add a one-line summary").max(300),
  description: z.string().trim().max(4000),
  mission_area: z.string(),
  project_type: z.string(),
  status: z.string(),
  needed_capabilities: z.array(z.string()).min(1, "Select at least one capability you need"),
});

function NewProjectPage() {
  const { user } = useAuth();
  const { data: profile } = useQuery(myProfileQuery(user?.id));
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [missionArea, setMissionArea] = useState<string>(MISSION_AREAS[0]);
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [status, setStatus] = useState<string>(PROJECT_STATUSES[0]);
  const [needs, setNeeds] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);

  const toggleNeed = (capability: string) =>
    setNeeds((current) =>
      current.includes(capability)
        ? current.filter((item) => item !== capability)
        : [...current, capability],
    );

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!profile) {
      toast.error("Complete your profile first");
      return;
    }
    const parsed = projectSchema.safeParse({
      title,
      summary,
      description,
      mission_area: missionArea,
      project_type: projectType,
      status,
      needed_capabilities: needs,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setBusy(true);
    const { data, error } = await supabase
      .from("projects")
      .insert({ ...parsed.data, owner_id: profile.id })
      .select("id")
      .single();
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    await queryClient.invalidateQueries({ queryKey: ["projects"] });
    toast.success("Project published");
    void navigate({ to: "/projects/$projectId", params: { projectId: data.id as string } });
  };

  return (
    <div className="bg-sand px-6 py-14">
      <form onSubmit={submit} className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-line bg-white p-8">
        <div>
          <p className="font-serif text-sm italic text-gold">Propose a project</p>
          <h1 className="text-3xl font-bold text-navy">What are you trying to move forward?</h1>
        </div>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={140} />
        </div>
        <div>
          <Label htmlFor="summary">One-line summary</Label>
          <Input
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            maxLength={300}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            maxLength={4000}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="mission">Mission area</Label>
            <select
              id="mission"
              value={missionArea}
              onChange={(e) => setMissionArea(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
            >
              {MISSION_AREAS.map((area) => (
                <option key={area}>{area}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="type">Project type</Label>
            <select
              id="type"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="status">Stage</Label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
            >
              {PROJECT_STATUSES.map((stage) => (
                <option key={stage}>{stage}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label>What does this project need?</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability) => (
              <button
                type="button"
                key={capability}
                onClick={() => toggleNeed(capability)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  needs.includes(capability)
                    ? "border-gold bg-gold text-white"
                    : "border-line bg-sand text-ink-soft hover:border-gold"
                }`}
              >
                {capability}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={busy} className="bg-navy text-white hover:bg-navy-2">
          {busy ? "Publishing…" : "Publish project"}
        </Button>
      </form>
    </div>
  );
}
