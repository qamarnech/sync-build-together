import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { Section, SectionHead, Tag, Flourish } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import allianceMap from "@/assets/ilma-world-alliance.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ILMRI, Longevity MR Alliance" },
      {
        name: "description",
        content:
          "Contact the International Longevity Medicine Research Institute. Send a message about research, clinical collaboration, innovation, investment or partnership in healthy longevity.",
      },
      { property: "og:title", content: "Contact ILMRI, Longevity MR Alliance" },
      {
        property: "og:description",
        content:
          "Send a message to the International Longevity Medicine Research Institute and join the LONGEVITY MR alliance.",
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

const PILLARS = [
  {
    title: "Empowering Healthspan Through Science",
    body: "Empowering a healthier future through scientific innovation and global collaboration, the International Longevity Medicine Research Institute leads the way in longevity medicine, transforming research into real-world solutions for a vibrant, extended life for all.",
  },
  {
    title: "Empowering Global Longevity Research",
    body: "Welcome to the International Longevity Medicine Research Institute (ILMRI), where we pioneer scientific innovation, foster interdisciplinary collaboration, and empower society. Join us in revolutionizing health and longevity, ensuring a longer, healthier life for all.",
  },
  {
    title: "Leading Global Longevity Innovations",
    body: "Welcome to the International Longevity Medicine Research Institute (ILMRI), where we pioneer scientific innovation in longevity medicine. Our mission is to promote breakthroughs and global cooperation, empowering society to embrace healthier, vibrant lives. Together, let's transform longevity dreams into reality.",
  },
];

const FAQ = [
  {
    q: "What is the International Longevity Medicine Research Institute (ILMRI)?",
    a: "ILMRI is the research institute behind MR Longevity. It advances longevity medicine by connecting ageing biology, biomarkers, clinical translation and AI, and by turning validated research into practice that clinicians and individuals can use responsibly.",
  },
  {
    q: "Who can contact you?",
    a: "Researchers, clinicians, innovators and companies, investors, universities, public-health organisations and individuals. Choose the description that fits you in the form so your message reaches the right part of the mission.",
  },
  {
    q: "How do I join the LONGEVITY MR alliance?",
    a: "Send a message describing your work and what you would like to contribute or find. You can also create a member profile and add your capabilities, so the mission can match you with relevant people and projects.",
  },
  {
    q: "What happens after I send a message?",
    a: "Your message is recorded and routed to the relevant team. We normally reply within five working days. Complex research or partnership enquiries may take longer because they are reviewed by the appropriate specialists.",
  },
  {
    q: "Do you provide medical advice or diagnosis?",
    a: "No. MR Longevity and ILMRI share educational and scientific information. We do not diagnose conditions, prescribe treatment or replace professional medical care. Speak with a qualified healthcare professional before changing medication, testing, diet or activity.",
  },
  {
    q: "How do you treat evidence and claims?",
    a: "Evidence before hype. We distinguish scientific hypothesis, emerging evidence, clinical evidence and validated practice, and we state the limitations of the research we present.",
  },
  {
    q: "How is my information handled?",
    a: "Details you send are used only to answer your enquiry and, where relevant, to progress a collaboration. We do not sell contact details, and you can ask us to delete your message at any time.",
  },
  {
    q: "Can we collaborate internationally?",
    a: "Yes. The mission is international by design, with active interest in UK, European and China partnerships across research, clinical validation, translation and public health.",
  },
];





function ContactPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          as="h1"
          kicker="Longevity MR Alliance"
          title="Welcome to join LONGEVITY MR alliance, where pioneers in Longevity Medicine Research gather"
        />
        <figure className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_60px_-40px_oklch(0.28_0.05_255_/_0.45)]">
          <img
            src={allianceMap.url}
            alt="International Longevity Medicine Alliance world map showing partner hubs across North America, Europe and Asia"
            className="w-full"
            loading="lazy"
          />
          <figcaption className="border-t border-line px-6 py-4 text-center text-xs uppercase tracking-[0.18em] text-ink-mute">
            International Longevity Medicine Alliance, partner hubs worldwide
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point} className="rounded-xl border border-line bg-paper p-6">
              <p className="text-sm text-ink-soft">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead
          kicker="International Longevity Medicine Research Institute"
          title="Empowering healthspan through science"
          intro="Three commitments that shape every conversation we start."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_18px_40px_-24px_oklch(0.28_0.05_255_/_0.35)]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 font-serif text-sm font-bold text-navy">
                {["I", "II", "III"][index]}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{pillar.title}</h3>
              <Flourish align="left" className="my-3" />
              <p className="text-sm leading-relaxed text-ink-soft">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact-form" tone="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <SectionHead
              align="left"
              kicker="Get in touch"
              title="Please send us an email"
              intro="The simplest way to reach the MR Longevity and ILMRI team is by email. We normally reply within five working days."
            />

            <div className="mt-8 rounded-2xl border border-line bg-paper p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-serif text-xl text-navy">Email us</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Write to us with your question, collaboration idea or partnership proposal. Please
                    do not include health information you would rather not share.
                  </p>
                  <a
                    href="mailto:mr.longevity@longevitymr.com"
                    className="mt-4 inline-flex items-center gap-2 font-serif text-lg text-gold underline-offset-4 hover:underline"
                  >
                    <Mail className="h-5 w-5" />
                    mr.longevity@longevitymr.com
                  </a>
                  <p className="mt-3 text-xs text-ink-mute">
                    Your message is handled under our{" "}
                    <a className="text-gold underline" href="/privacy">privacy notice</a>. Enquiries are
                    kept for up to 24 months and you can ask us to delete them at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <Tag tone="navy">Before you write</Tag>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>
                  Looking for people or projects?{" "}
                  <a className="text-gold underline-offset-4 hover:underline" href="/participate/members">
                    Meet MR Longevity members
                  </a>
                </li>
                <li>
                  Exploring the science?{" "}
                  <a className="text-gold underline-offset-4 hover:underline" href="/discover">
                    Start with Discover
                  </a>
                </li>
                <li>
                  Ready to work together?{" "}
                  <a className="text-gold underline-offset-4 hover:underline" href="/collaborate/projects">
                    See open projects
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="faq" tone="sand">
        <SectionHead
          kicker="FAQ"
          title="Questions we are asked most"
          intro="Straight answers about the institute, membership and how we handle evidence."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="rounded-xl border border-line bg-white px-5"
              >
                <AccordionTrigger className="text-left font-serif text-base text-navy hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Tag tone="gold">International Longevity Medicine Research Institute</Tag>
          <h2 className="mt-4 font-serif text-3xl text-white">
            Let's transform longevity dreams into reality
          </h2>
          <p className="mt-3 text-sm text-gold-pale/80">
            Join the alliance, contribute your expertise and help move healthy longevity from research
            into everyday life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="/auth">Join the alliance</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
