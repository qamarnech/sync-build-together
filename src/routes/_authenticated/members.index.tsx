import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { profilesQuery } from "@/lib/data";
import { ROLE_TYPES } from "@/lib/site-content";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/_authenticated/members/")({
  head: () => ({
    meta: [
      { title: "Member Directory — MR Longevity" },
      {
        name: "description",
        content: "Browse researchers, clinicians, innovators, investors and partners in the ecosystem.",
      },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  const { data: profiles = [], isLoading } = useQuery(profilesQuery);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [country, setCountry] = useState("all");

  const countries = Array.from(new Set(profiles.map((p) => p.country).filter(Boolean))).sort();

  const filtered = profiles.filter((profile) => {
    const haystack =
      `${profile.full_name} ${profile.headline} ${profile.organisation} ${profile.expertise.join(" ")}`.toLowerCase();
    return (
      haystack.includes(search.trim().toLowerCase()) &&
      (role === "all" || profile.role_type === role) &&
      (country === "all" || profile.country === country)
    );
  });

  return (
    <div className="bg-sand px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="font-serif text-sm italic text-gold">Connect</p>
        <h1 className="text-3xl font-bold text-navy">Member directory</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">
          Find the researchers, clinicians, innovators, investors and partners who can move your work
          forward.
        </p>

        <div className="mt-8 grid gap-3 rounded-2xl border border-line bg-white p-4 md:grid-cols-3">
          <Input
            placeholder="Search name, organisation or expertise"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            maxLength={100}
          />
          <select
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="h-10 rounded-md border border-input bg-white px-3 text-sm"
          >
            <option value="all">All roles</option>
            {ROLE_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="h-10 rounded-md border border-input bg-white px-3 text-sm"
          >
            <option value="all">All countries</option>
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && <p className="text-sm text-ink-mute">Loading members…</p>}
          {!isLoading && filtered.length === 0 && (
            <p className="text-sm text-ink-mute">No members match those filters.</p>
          )}
          {filtered.map((profile) => (
            <Link
              key={profile.id}
              to="/members/$profileId"
              params={{ profileId: profile.id }}
              className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-gold"
            >
              <p className="font-serif text-lg text-navy">{profile.full_name || "New member"}</p>
              <p className="mt-1 text-sm text-ink-soft">{profile.headline}</p>
              <p className="mt-2 text-xs text-ink-mute">
                {[profile.organisation, profile.country].filter(Boolean).join(" · ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.expertise.slice(0, 3).map((tag) => (
                  <Tag key={tag} tone="gold">
                    {tag}
                  </Tag>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
