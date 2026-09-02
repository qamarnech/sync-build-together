import { createFileRoute, Link } from "@tanstack/react-router";

import { Section, SectionHead } from "@/components/site/ui-bits";
import { LegalNav } from "@/routes/privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use, MR Longevity & ILMRI" },
      {
        name: "description",
        content:
          "Terms of use for the MR Longevity member platform: acceptable use, member content, evidence standards, medical disclaimer and account closure.",
      },
      { property: "og:title", content: "Terms of Use, MR Longevity & ILMRI" },
      {
        property: "og:description",
        content:
          "The rules for using the MR Longevity platform, publishing member content and taking part in the Action Community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "Using the platform",
    body: "The site provides information about healthy longevity science and a members' platform for collaboration. You may use it for lawful professional and personal purposes. You must not misuse it, attempt to gain unauthorised access, scrape member data or use it to send unsolicited marketing.",
  },
  {
    title: "Member accounts",
    body: "You are responsible for the accuracy of the information in your profile and for keeping your sign-in credentials secure. Accounts are personal. Tell us promptly if you believe your account has been used without your permission.",
  },
  {
    title: "Content you publish",
    body: "You keep ownership of the profile, project and community content you publish, and you grant us a licence to display it on the platform for as long as you choose to keep it there. You must have the right to publish it, and it must not be misleading, defamatory, confidential to someone else or in breach of any third-party rights.",
  },
  {
    title: "Evidence standards",
    body: "Content should distinguish scientific hypothesis, emerging evidence, clinical evidence, validated practice and personal experience. Personal experience must not be presented as proof. Commercial relationships and potential conflicts of interest must be disclosed.",
  },
  {
    title: "No medical advice",
    body: "The platform provides education and discussion. It does not provide medical diagnosis, treatment or personalised medical advice, and it does not replace care from a qualified healthcare professional. Consult an appropriately qualified clinician before making decisions about medication, testing, treatment, diet or physical activity.",
  },
  {
    title: "Availability and accuracy",
    body: "We work to keep the platform available and its content accurate, but we provide it as is. Scientific information changes, and external sources we link to are outside our control. Nothing in these terms limits liability for death or personal injury caused by negligence, fraud, or anything else that cannot be limited under UK law.",
  },
  {
    title: "Moderation and account closure",
    body: "We may remove content or suspend an account that breaches these terms, harms other members or creates legal risk. You can close your account at any time; see the privacy notice for what happens to your data afterwards.",
  },
  {
    title: "Governing law",
    body: "These terms and any dispute arising from them are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction.",
  },
];

function TermsPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Legal"
          title="Terms of Use"
          intro="The rules for using this site, publishing member content and taking part in the mission."
        />
        <LegalNav current="terms" />
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
          {SECTIONS.map((section, index) => (
            <div key={section.title} className="rounded-xl border border-line bg-white p-6">
              <p className="font-serif text-lg text-navy">
                {index + 1}. {section.title}
              </p>
              <p className="mt-2">{section.body}</p>
            </div>
          ))}
          <p className="text-xs text-ink-mute">
            Personal data is handled as described in the{" "}
            <Link className="text-gold underline" to="/privacy">
              privacy notice
            </Link>
            . Questions about these terms can be sent to{" "}
            <a className="text-gold underline" href="mailto:Mr.Longevity@LongevityMR.com">
              Mr.Longevity@LongevityMR.com
            </a>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}
