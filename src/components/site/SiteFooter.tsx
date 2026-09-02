import { Link } from "@tanstack/react-router";

const footerLink =
  "text-sm text-gold-pale/70 transition-colors hover:text-gold-light";

const COLUMNS = [
  {
    title: "Discover",
    to: "/discover" as const,
    links: [
      { to: "/discover/healthy-longevity" as const, label: "Healthy Longevity" },
      { to: "/discover/scientific-missions" as const, label: "Scientific Missions" },
      { to: "/solutions" as const, label: "Longevity Solutions" },
    ],
  },
  {
    title: "Collaborate",
    to: "/collaborate" as const,
    links: [
      { to: "/collaborate/projects" as const, label: "Projects" },
      { to: "/collaborate/partners" as const, label: "Partners" },
      { to: "/collaborate/opportunities" as const, label: "Opportunities" },
    ],
  },
  {
    title: "Participate",
    to: "/participate" as const,
    links: [
      { to: "/participate/community" as const, label: "Community" },
      { to: "/participate/events" as const, label: "Events" },
      { to: "/participate/members" as const, label: "Members" },
    ],
  },
  {
    title: "MR Longevity",
    to: "/about" as const,
    links: [
      { to: "/founder" as const, label: "Founder" },
      { to: "/contact" as const, label: "Contact" },
      { to: "/auth" as const, label: "Join MR Longevity" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-6 py-14 text-gold-pale/70">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-bold tracking-[0.14em] text-white">MR. LONGEVITY</p>
          <p className="mt-3 max-w-md text-sm">
            A global healthy longevity mission connecting science, healthcare, innovation, people,
            capital, data and AI, making life healthier and longer.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-2">
            <Link to={column.to} className="font-serif text-white hover:text-gold-light">
              {column.title}
            </Link>
            {column.links.map((link) => (
              <Link key={link.to} to={link.to} className={footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>


      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} MR.Longevity & ILMRI (International Longevity Medicine
          Research Institute). All Rights Reserved.
        </p>
        <nav className="flex flex-wrap gap-4">
          <Link to="/privacy">Privacy Notice</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Terms of Use</Link>
        </nav>
      </div>
    </footer>
  );
}
