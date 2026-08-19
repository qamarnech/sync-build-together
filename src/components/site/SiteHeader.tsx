import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const publicLinks = [
  { to: "/", label: "Home" },
  { to: "/discover", label: "Discover" },
  { to: "/about", label: "About" },
] as const;

const memberLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/members", label: "Members" },
] as const;


export function SiteHeader() {
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    void navigate({ to: "/" });
  };

  const links = user ? [...publicLinks, ...memberLinks] : publicLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="font-serif text-lg font-bold tracking-[0.14em] text-navy">
          MR. LONGEVITY
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link, index) => (
            <div key={link.to} className="contents">
              <Link
                to={link.to}
                className="text-sm text-ink-soft transition-colors hover:text-navy"
                activeProps={{ className: "text-navy font-semibold" }}
              >
                {link.label}
              </Link>
              {index === 0 && (
                <div className="group relative">
                  <Link
                    to="/ecosystem"
                    className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-navy"
                    activeProps={{ className: "text-navy font-semibold" }}
                  >
                    Ecosystem
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-xl border border-line bg-paper p-2 shadow-lg">
                      {ECOSYSTEM_PILLARS.map((pillar) => (
                        <Link
                          key={pillar.slug}
                          to={pillar.to}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-gold/10 hover:text-navy"
                          activeProps={{ className: "text-navy font-semibold" }}
                        >
                          {pillar.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-soft"
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
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
