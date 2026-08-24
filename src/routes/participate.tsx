import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { PARTICIPATE_ITEMS } from "@/lib/participate-nav";

export const Route = createFileRoute("/participate")({
  component: InsightsLayout,
});

function InsightsLayout() {
  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          <Link
            to="/participate"
            activeOptions={{ exact: true }}
            className="text-sm text-ink-soft transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            Overview
          </Link>
          {PARTICIPATE_ITEMS.map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
