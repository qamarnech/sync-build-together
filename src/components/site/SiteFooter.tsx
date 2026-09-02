import { Link } from "@tanstack/react-router";
import { DISCOVER_PILLARS } from "@/lib/discover-pillars";
import { COLLABORATE_ITEMS } from "@/lib/collaborate-pillars";
import { PARTICIPATE_ITEMS } from "@/lib/participate-nav";
import { SOLUTION_PILLARS } from "@/lib/solutions-pillars";
import { ECOSYSTEM_PILLARS } from "@/lib/ecosystem-pillars";

const footerLink =
  "text-sm text-gold-pale/70 transition-colors hover:text-gold-light";

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
          <div className="mt-4 flex flex-col gap-1">
            <Link to="/about" className={footerLink}>About</Link>
            <Link to="/founder" className={footerLink}>Founder</Link>
            <Link to="/contact" className={footerLink}>Contact</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-white">Discover</p>
          <Link to="/discover" className={footerLink}>Overview</Link>
          {DISCOVER_PILLARS.map((item) => (
            <Link key={item.slug} to={item.to} className={footerLink}>{item.name}</Link>
          ))}
          <Link to="/solutions" className="mt-1 font-serif text-white">Longevity Solutions</Link>
          {SOLUTION_PILLARS.map((item) => (
            <Link key={item.slug} to={item.to} className={footerLink}>{item.name}</Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-white">Longevity Landscape</p>
          <Link to="/ecosystem" className={footerLink}>Overview</Link>
          {ECOSYSTEM_PILLARS.map((item) => (
            <Link key={item.slug} to={item.to} className={footerLink}>{item.name}</Link>
          ))}
          <Link to="/ecosystem/uk-directory" className={footerLink}>UK Longevity Directory</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-white">Collaborate</p>
          <Link to="/collaborate" className={footerLink}>Overview</Link>
          {COLLABORATE_ITEMS.map((item) => (
            <Link key={item.slug} to={item.to} className={footerLink}>{item.name}</Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-white">Participate</p>
          <Link to="/participate" className={footerLink}>Overview</Link>
          {PARTICIPATE_ITEMS.map((item) => (
            <Link key={item.slug} to={item.to} className={footerLink}>{item.name}</Link>
          ))}
          <Link to="/dashboard" className="mt-1 font-serif text-white">Members</Link>
          <Link to="/projects" className={footerLink}>Projects</Link>
          <Link to="/auth" className={footerLink}>Join MR Longevity</Link>
        </div>
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
