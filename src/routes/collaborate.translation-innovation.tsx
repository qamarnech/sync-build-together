import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SubNav } from "@/components/site/SubNav";
import { TRANSLATION_PILLARS } from "@/lib/translation-pillars";

export const Route = createFileRoute("/collaborate/translation-innovation")({
  component: TranslationLayout,
});

function TranslationLayout() {
  return (
    <div>
      <SubNav
        overviewTo="/collaborate/translation-innovation"
        items={TRANSLATION_PILLARS.map((pillar) => ({
          slug: pillar.slug,
          to: pillar.to,
          name: pillar.name,
        }))}
      />
      <Outlet />
    </div>
  );
}
