import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SubNav } from "@/components/site/SubNav";
import { ABOUT_ITEMS } from "@/lib/nav";

export const Route = createFileRoute("/about")({
  component: AboutLayout,
});

function AboutLayout() {
  return (
    <div>
      <SubNav overviewTo="/about" items={ABOUT_ITEMS} />
      <Outlet />
    </div>
  );
}
