import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-6 py-14 text-gold-pale/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-bold tracking-[0.14em] text-white">MR. LONGEVITY</p>
          <p className="mt-3 max-w-md text-sm">
            A global healthy longevity mission connecting science, healthcare, innovation, people,
            capital, data and AI, making life healthier and longer.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-serif text-white">Explore</p>
          <Link to="/discover">Discover</Link>
          <Link to="/about">About</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="font-serif text-white">Participate</p>
          <Link to="/participate/community">Action Community</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/members">Members</Link>
          <Link to="/auth">Join MR Longevity</Link>
        </div>

      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs">
        © {new Date().getFullYear()} MR.Longevity & ILMRI (International Longevity Medicine
        Research Institute). All Rights Reserved.
      </div>
    </footer>
  );
}
