import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";
import { PARTNER_CATEGORIES, PARTNER_FIELDS } from "@/lib/collaborate-content";
import { UK_DIRECTORY_COUNT } from "@/lib/uk-directory";

const DESCRIPTION =
  "The MR Longevity network: universities, research institutes, healthcare organisations, biotech, technology and longevity companies, investors, public bodies and international partners.";

export const Route = createFileRoute("/collaborate/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Collaborate | MR Longevity" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Partners — MR Longevity" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div>
      <Section tone="navy">
        <SectionHead
          kicker="Partners"
          title="Who are we working with?"
          intro="Healthy longevity is built by a network, not a single organisation. These are the kinds of partners whose capability the platform connects."
          invert
        />
      </Section>

      <Section tone="white">
        <SectionHead kicker="Partner types" title="Capability across the network" align="left" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PARTNER_CATEGORIES.map((category) => (
            <div key={category.slug} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-semibold text-navy">{category.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{category.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHead kicker="Partner profile" title="What every partner profile shows" align="left" />
            <div className="mt-5 flex flex-wrap gap-2">
              {PARTNER_FIELDS.map((field) => (
                <Tag key={field} tone="navy">
                  {field}
                </Tag>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-white p-8">
            <p className="font-serif text-sm italic text-gold">Mapped already</p>
            <h3 className="mt-1 font-serif text-2xl text-navy">
              {UK_DIRECTORY_COUNT} UK organisations
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              The UK Longevity Directory already maps institutes, clinics, biotech companies, AgeTech,
              charities, funders and population cohorts — a working view of one national network.
            </p>
            <Button asChild variant="outline" className="mt-5 border-navy text-navy hover:bg-navy hover:text-white">
              <Link to="/discover/uk-directory">Browse the UK directory</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-white">Explore Partners</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gold-pale/80">
            Member organisations and experts are listed in the member directory, with MR Match to surface
            complementary capability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              <Link to="/members">Explore Partners</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link to="/contact">Propose a partnership</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
