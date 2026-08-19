import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const HOME_ITEMS = [
  { slug: "about", to: "/about", name: "About" },
  { slug: "contact", to: "/contact", name: "Contact" },
];


const memberLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/members", label: "Members" },
] as const;


function Dropdown({
  label,
  to,
  items,
}: {
  label: string;
  to: string;
  items: { slug: string; to: string; name: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        to={to}
        className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-navy"
        activeProps={{ className: "text-navy font-semibold" }}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-xl border border-line bg-paper p-2 shadow-lg">
          <Link
            to={to}
            activeOptions={{ exact: true }}
            className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-gold/10 hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            Overview
          </Link>
          {items.map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-gold/10 hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    void navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="font-serif text-lg font-bold tracking-[0.14em] text-navy">
          MR. LONGEVITY
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Dropdown label="Home" to="/" items={HOME_ITEMS} />
          <Dropdown label="Discover" to="/discover" items={DISCOVER_PILLARS} />
          <Dropdown label="Ecosystem" to="/ecosystem" items={ECOSYSTEM_PILLARS} />

          {user &&
            memberLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-ink-soft transition-colors hover:text-navy"
                activeProps={{ className: "text-navy font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {!loading && user ? (
            <>
              <Button asChild variant="outline" size="sm">
                <Link to="/profile">My profile</Link>
              </Button>
              <Button size="sm" variant="ghost" onClick={signOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="bg-gold text-white hover:bg-gold-light">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Join MR Longevity
                </Link>
              </Button>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5 text-navy" /> : <Menu className="h-5 w-5 text-navy" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm font-semibold text-navy">
              Home
            </Link>
            <div className="flex flex-col gap-2 border-l border-line pl-3">
              {HOME_ITEMS.map((item) => (
                <Link
                  key={item.slug}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink-soft"
                >
                  {item.name}
                </Link>
              ))}
            </div>


            <Link to="/discover" onClick={() => setOpen(false)} className="text-sm font-semibold text-navy">
              Discover
            </Link>
            <div className="flex flex-col gap-2 border-l border-line pl-3">
              <Link to="/discover" onClick={() => setOpen(false)} className="text-sm text-ink-soft">
                Overview
              </Link>
              {DISCOVER_PILLARS.map((pillar) => (
                <Link
                  key={pillar.slug}
                  to={pillar.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink-soft"
                >
                  {pillar.name}
                </Link>
              ))}
            </div>

            <Link to="/ecosystem" onClick={() => setOpen(false)} className="text-sm font-semibold text-navy">
              Ecosystem
            </Link>
            <div className="flex flex-col gap-2 border-l border-line pl-3">
              <Link to="/ecosystem" onClick={() => setOpen(false)} className="text-sm text-ink-soft">
                Overview
              </Link>
              {ECOSYSTEM_PILLARS.map((pillar) => (
                <Link
                  key={pillar.slug}
                  to={pillar.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink-soft"
                >
                  {pillar.name}
                </Link>
              ))}
            </div>

            {user ? (
              <>
                {memberLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-sm text-ink-soft"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/profile" onClick={() => setOpen(false)} className="text-sm text-ink-soft">
                  My profile
                </Link>
                <button onClick={signOut} className="text-left text-sm text-ink-soft">
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setOpen(false)} className="text-sm font-semibold text-gold">
                Sign in / Join
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
