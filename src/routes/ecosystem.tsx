import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

export const Route = createFileRoute("/ecosystem")({
  component: EcosystemLayout,
});

function EcosystemLayout() {
  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              to={pillar.to}
              className="text-sm text-ink-soft transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {pillar.name}
            </Link>
          ))}
          <Link
            to="/ecosystem/uk-directory"
            className="text-sm text-ink-soft transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            UK Directory
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
