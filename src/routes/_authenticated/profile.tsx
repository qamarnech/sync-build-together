import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { myProfileQuery } from "@/lib/data";
import { CAPABILITIES, ROLE_TYPES } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_authenticated/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — MR Longevity" },
      { name: "description", content: "Edit your MR Longevity member profile, expertise and needs." },
    ],
  }),
  component: ProfilePage,
});

const profileSchema = z.object({
  full_name: z.string().trim().min(2, "Add your name").max(120),
  headline: z.string().trim().max(160),
  organisation: z.string().trim().max(140),
  country: z.string().trim().max(80),
  bio: z.string().trim().max(2000),
  role_type: z.string(),
  expertise: z.array(z.string()).max(20),
  needs: z.array(z.string()).max(20),
});

function ProfilePage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: profile, isLoading } = useQuery(myProfileQuery(user?.id));

  const [form, setForm] = useState({
    full_name: "",
    headline: "",
    organisation: "",
    country: "",
    bio: "",
    role_type: "researcher",
  });
  const [expertise, setExpertise] = useState<string[]>([]);
  const [needs, setNeeds] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!profile) return;
    setForm({
      full_name: profile.full_name,
      headline: profile.headline,
      organisation: profile.organisation,
      country: profile.country,
      bio: profile.bio,
      role_type: profile.role_type,
    });
    setExpertise(profile.expertise);
    setNeeds(profile.needs);
  }, [profile]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) return;
    const parsed = profileSchema.safeParse({ ...form, expertise, needs });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setBusy(true);
    const { error } = profile
      ? await supabase.from("profiles").update(parsed.data).eq("id", profile.id)
      : await supabase.from("profiles").insert({ ...parsed.data, user_id: user.id });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    await queryClient.invalidateQueries();
    toast.success("Profile saved");
  };

  if (isLoading) {
    return (
      <div className="bg-sand px-6 py-20 text-center">
        <p className="font-serif italic text-ink-mute">Loading your profile…</p>
      </div>
    );
  }

  return (
    <div className="bg-sand px-6 py-14">
      <form onSubmit={save} className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-line bg-white p-8">
        <div>
          <p className="font-serif text-sm italic text-gold">Your membership</p>
          <h1 className="text-3xl font-bold text-navy">Member profile</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Your expertise and needs power MR Match across the ecosystem.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="full_name">Full name</Label>
            <Input
              id="full_name"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              maxLength={120}
            />
          </div>
          <div>
            <Label htmlFor="role_type">Role</Label>
            <select
              id="role_type"
              value={form.role_type}
              onChange={(e) => setForm({ ...form, role_type: e.target.value })}
              className="mt-1 h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
            >
              {ROLE_TYPES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="organisation">Organisation</Label>
            <Input
              id="organisation"
              value={form.organisation}
              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
              maxLength={140}
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              maxLength={80}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="headline">Headline</Label>
          <Input
            id="headline"
            value={form.headline}
            onChange={(e) => setForm({ ...form, headline: e.target.value })}
            maxLength={160}
            placeholder="Cellular senescence researcher"
          />
        </div>

        <div>
          <Label htmlFor="bio">About your work</Label>
          <Textarea
            id="bio"
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            rows={5}
            maxLength={2000}
          />
        </div>

        <div>
          <Label>My expertise</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability) => (
              <button
                type="button"
                key={capability}
                onClick={() => toggle(expertise, setExpertise, capability)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  expertise.includes(capability)
                    ? "border-gold bg-gold text-white"
                    : "border-line bg-sand text-ink-soft hover:border-gold"
                }`}
              >
                {capability}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>What I'm looking for</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability) => (
              <button
                type="button"
                key={capability}
                onClick={() => toggle(needs, setNeeds, capability)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  needs.includes(capability)
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-sand text-ink-soft hover:border-navy"
                }`}
              >
                {capability}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={busy} className="bg-navy text-white hover:bg-navy-2">
          {busy ? "Saving…" : "Save profile"}
        </Button>
      </form>
    </div>
  );
}
