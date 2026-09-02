import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";

export const Route = createFileRoute("/solutions")({
  component: SolutionsLayout,
});

function SolutionsLayout() {
  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          <Link
            to="/solutions"
            activeOptions={{ exact: true }}
            className="text-sm text-ink-soft transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            Overview
          </Link>
          {SOLUTION_PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              to={pillar.to}
              className="text-sm text-ink-soft transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {pillar.name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
