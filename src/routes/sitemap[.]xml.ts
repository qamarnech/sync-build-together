import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { FOUNDER_PUBLICATIONS, publicationSlug } from "@/lib/founder-fu";

const BASE_URL = "https://mrlongevity.life";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_PATHS: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/founder", changefreq: "monthly", priority: "0.7" },
  { path: "/discover", changefreq: "monthly", priority: "0.9" },
  { path: "/discover/healthy-longevity", changefreq: "monthly", priority: "0.7" },
  { path: "/discover/biology-of-aging", changefreq: "monthly", priority: "0.7" },
  { path: "/discover/scientific-missions", changefreq: "monthly", priority: "0.7" },
  { path: "/ecosystem", changefreq: "monthly", priority: "0.7" },
  { path: "/ecosystem/science-discovery", changefreq: "monthly", priority: "0.6" },
  { path: "/ecosystem/clinical-validation", changefreq: "monthly", priority: "0.6" },
  { path: "/ecosystem/manufacturing-supply", changefreq: "monthly", priority: "0.6" },
  { path: "/ecosystem/investment-commercial", changefreq: "monthly", priority: "0.6" },
  { path: "/ecosystem/uk-directory", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions/chronic-disease-prevention", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions/regenerative-medicine", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions/longevity-health-management", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions/personalised-medicine", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions/medical-aesthetics", changefreq: "monthly", priority: "0.6" },
  { path: "/solutions/products", changefreq: "monthly", priority: "0.6" },
  { path: "/collaborate", changefreq: "monthly", priority: "0.8" },
  { path: "/collaborate/projects", changefreq: "monthly", priority: "0.6" },
  { path: "/collaborate/partners", changefreq: "monthly", priority: "0.6" },
  { path: "/collaborate/translation-innovation", changefreq: "monthly", priority: "0.6" },
  { path: "/collaborate/opportunities", changefreq: "monthly", priority: "0.6" },
  { path: "/participate", changefreq: "weekly", priority: "0.8" },
  { path: "/participate/news", changefreq: "weekly", priority: "0.6" },
  { path: "/participate/events", changefreq: "weekly", priority: "0.6" },
  { path: "/participate/members", changefreq: "monthly", priority: "0.6" },
  { path: "/participate/community", changefreq: "monthly", priority: "0.6" },
  { path: "/publications", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_PATHS,
          ...FOUNDER_PUBLICATIONS.map((publication) => ({
            path: `/publications/${encodeURIComponent(publicationSlug(publication))}`,
            changefreq: "yearly" as const,
            priority: "0.5",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
