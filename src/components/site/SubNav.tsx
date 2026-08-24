import { Link } from "@tanstack/react-router";
import type { NavItem } from "@/lib/nav";

export function SubNav({
  overviewTo,
  items,
}: {
  overviewTo: string;
  items: NavItem[];
}) {
  return (
    <div className="border-b border-line bg-paper">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
        <Link
          to={overviewTo}
          activeOptions={{ exact: true }}
          className="text-sm text-ink-soft transition-colors hover:text-navy"
          activeProps={{ className: "text-navy font-semibold" }}
        >
          Overview
        </Link>
        {items
          .filter((item) => item.to !== overviewTo)
          .map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {item.name}
            </Link>
          ))}
      </nav>
    </div>
  );
}
