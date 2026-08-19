import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe } from "lucide-react";
import { Section, SectionHead, Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Longevity MR Alliance" },
      {
        name: "description",
        content:
          "Join the LONGEVITY MR alliance — pioneers bridging AI, biomarkers, clinical medicine and geroscience research for healthy longevity. Get in touch with the team.",
      },
      { property: "og:title", content: "Contact — Longevity MR Alliance" },
      {
        property: "og:description",
        content:
          "Reach the International Longevity Medicine Research Institute and join the LONGEVITY MR alliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const POINTS = [
  "We share insight in bridging AI, biomarkers, clinical medicine and geroscience research for Healthy Longevity.",
  "We released guidelines for the development and application of AI models for ageing biomarkers.",
  "Our understanding of ageing and vision for longevity magnetically resonate with that of the United Nations scientists and ageing biologists.",
];

function ContactPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Longevity MR Alliance"
          title="Welcome to join LONGEVITY MR alliance, where pioneers in Longevity Medicine Research gather"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point} className="rounded-xl border border-line bg-paper p-6">
              <p className="text-sm text-ink-soft">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Tag tone="gold">International Longevity Medicine Research Institute</Tag>
          <h2 className="mt-4 font-serif text-3xl text-white">Get in touch</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:Mr.Longevity@LongevityMR.com"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-gold-pale transition-colors hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Mr.Longevity@LongevityMR.com
            </a>
            <a
              href="https://longevitymr.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-gold-pale transition-colors hover:bg-white/10"
            >
              <Globe className="h-5 w-5" />
              LongevityMR.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
