import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const ABOUT_ITEMS = [
  { slug: "why", to: "/about/why", name: "Why MR Longevity" },
  { slug: "vision-mission", to: "/about/vision-mission", name: "Vision & Mission" },
  { slug: "approach", to: "/about/approach", name: "Our Approach" },
  { slug: "founder", to: "/founder", name: "Founder" },
  { slug: "team", to: "/about/team", name: "Team" },
] as const;

export const Route = createFileRoute("/about")({
  component: AboutLayout,
});

function AboutLayout() {
  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          <Link
            to="/about"
            activeOptions={{ exact: true }}
            className="text-sm text-ink-soft transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            Overview
          </Link>
          {ABOUT_ITEMS.map((item) => (
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
