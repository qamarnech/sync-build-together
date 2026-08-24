export type NavItem = { slug: string; to: string; name: string };

export const ABOUT_ITEMS: NavItem[] = [
  { slug: "about-overview", to: "/about", name: "Overview" },
  { slug: "vision-mission", to: "/about/vision-mission", name: "Vision & Mission" },
  { slug: "founder", to: "/founder", name: "Founder" },
  { slug: "contact", to: "/contact", name: "Contact" },
];

export const DISCOVER_ITEMS: NavItem[] = [
  { slug: "healthy-longevity", to: "/discover/healthy-longevity", name: "Healthy Longevity" },
  { slug: "biology-of-aging", to: "/discover/biology-of-aging", name: "Biology of Ageing" },
  { slug: "scientific-missions", to: "/discover/scientific-missions", name: "Scientific Missions" },
  { slug: "longevity-landscape", to: "/discover/longevity-landscape", name: "Longevity Landscape" },
  { slug: "uk-directory", to: "/discover/uk-directory", name: "UK Longevity Directory" },
];

export const COLLABORATE_ITEMS: NavItem[] = [
  { slug: "projects", to: "/collaborate/projects", name: "Projects" },
  { slug: "partners", to: "/collaborate/partners", name: "Partners" },
  {
    slug: "translation-innovation",
    to: "/collaborate/translation-innovation",
    name: "Translation & Innovation",
  },
  { slug: "opportunities", to: "/collaborate/opportunities", name: "Opportunities" },
];

export const INSIGHTS_NAV_ITEMS: NavItem[] = [
  { slug: "longevity-news", to: "/insights/longevity-news", name: "Longevity News" },
  { slug: "events", to: "/insights/events", name: "Events" },
  { slug: "research-highlights", to: "/insights/research-highlights", name: "Research Highlights" },
];
