import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SubNav } from "@/components/site/SubNav";
import { COLLABORATE_ITEMS } from "@/lib/nav";

export const Route = createFileRoute("/collaborate")({
  component: CollaborateLayout,
});

function CollaborateLayout() {
  return (
    <div>
      <SubNav overviewTo="/collaborate" items={COLLABORATE_ITEMS} />
      <Outlet />
    </div>
  );
}
