import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { Section, SectionHead, Tag } from "@/components/site/ui-bits";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice, MR Longevity & ILMRI" },
      {
        name: "description",
        content:
          "How MR Longevity and ILMRI collect, use, store and protect personal data under the UK GDPR and the Data Protection Act 2018, including your rights and how to exercise them.",
      },
      { property: "og:title", content: "Privacy Notice, MR Longevity & ILMRI" },
      {
        property: "og:description",
        content:
          "UK GDPR privacy notice for the MR Longevity platform: what data we hold, why, how long, and your data protection rights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const LAST_UPDATED = "2 September 2026";

const DATA_WE_HOLD = [
  {
    title: "Enquiry data",
    body: "Name, email address, organisation, the role you select and the content of your message when you use the contact form or write to us by email.",
    basis: "Legitimate interests (Article 6(1)(f)): responding to enquiries addressed to us.",
    keep: "Kept for up to 24 months after our last exchange, then deleted.",
  },
  {
    title: "Member account data",
    body: "Email address, name, password credentials held by our authentication provider, and, where you sign in with Google, the basic profile data Google returns.",
    basis: "Contract (Article 6(1)(b)): creating and running the member account you asked for.",
    keep: "Kept while your account is active and for up to 6 months after deletion in backups.",
  },
  {
    title: "Member profile and project data",
    body: "The professional information you choose to publish: role, organisation, country, mission areas, capabilities, biography, links, and the projects and collaboration requests you create.",
    basis: "Consent (Article 6(1)(a)) for what you publish to other members; you control and can remove it at any time.",
    keep: "Kept until you edit or delete it, or close your account.",
  },
  {
    title: "Community contributions",
    body: "Comments, shared experiences and activity records you voluntarily post in the Action Community.",
    basis: "Consent (Article 6(1)(a)). Do not post health information you do not wish to share.",
    keep: "Kept until you delete the contribution or close your account.",
  },
  {
    title: "Technical and security data",
    body: "Server and security logs generated when you use the site, including IP address, browser type and timestamps, produced by our hosting and backend providers.",
    basis: "Legitimate interests (Article 6(1)(f)): keeping the service secure, available and free of abuse.",
    keep: "Kept for a short operational period by our providers, normally no more than 90 days.",
  },
];

const RIGHTS = [
  { title: "Access", body: "Ask for a copy of the personal data we hold about you." },
  { title: "Rectification", body: "Ask us to correct data that is inaccurate or incomplete." },
  { title: "Erasure", body: "Ask us to delete your data where there is no overriding reason to keep it." },
  { title: "Restriction", body: "Ask us to pause processing while a concern is investigated." },
  { title: "Portability", body: "Receive data you gave us in a structured, machine-readable format." },
  { title: "Object", body: "Object to processing carried out under legitimate interests." },
  { title: "Withdraw consent", body: "Withdraw consent at any time, without affecting past processing." },
  { title: "Complain", body: "Complain to the UK Information Commissioner's Office at ico.org.uk." },
];

const SHARING = [
  "Hosting, database, authentication and email infrastructure providers acting as our processors under written terms.",
  "Members of the platform, but only the profile and project information you choose to publish.",
  "Professional advisers, auditors or authorities where we are legally required to disclose.",
];

const SECURITY = [
  "Access to member data is enforced at the database level with row-level security policies.",
  "Data is encrypted in transit and at rest by our infrastructure providers.",
  "Administrative access is limited to the people who need it to run the mission.",
  "Passwords are never stored by us in readable form; authentication is handled by our provider.",
];

export function LegalNav({ current }: { current: "privacy" | "cookies" | "terms" }) {
  const items = [
    { to: "/privacy", label: "Privacy Notice", key: "privacy" as const },
    { to: "/cookies", label: "Cookies", key: "cookies" as const },
    { to: "/terms", label: "Terms of Use", key: "terms" as const },
  ];
  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Link
          key={item.key}
          to={item.to}
          className={
            item.key === current
              ? "rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold"
              : "rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-gold/40 hover:text-gold"
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function PrivacyPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          as="h1"
          kicker="Legal"
          title="Privacy Notice"
          intro="How we collect, use and protect personal data under the UK GDPR and the Data Protection Act 2018."
        />
        <LegalNav current="privacy" />
        <p className="mt-6 text-center text-xs text-ink-mute">Last updated {LAST_UPDATED}</p>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-serif text-2xl text-navy">Who we are</h2>
            <p className="mt-3">
              This site is operated by MR Longevity together with ILMRI, the International Longevity
              Medicine Research Institute. For the purposes of UK data protection law we are the data
              controller for personal data processed through this website and the member platform.
              You can reach us, including our data protection contact, at{" "}
              <a className="text-gold underline" href="mailto:Mr.Longevity@LongevityMR.com">
                Mr.Longevity@LongevityMR.com
              </a>
              . Our correspondence address is available on request.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">What we collect and why</h2>
            <div className="mt-4 space-y-4">
              {DATA_WE_HOLD.map((item) => (
                <div key={item.title} className="rounded-xl border border-line bg-white p-5">
                  <p className="font-serif text-lg text-navy">{item.title}</p>
                  <p className="mt-2">{item.body}</p>
                  <p className="mt-2 text-xs text-ink-mute">
                    <span className="font-semibold text-navy">Lawful basis:</span> {item.basis}
                  </p>
                  <p className="mt-1 text-xs text-ink-mute">
                    <span className="font-semibold text-navy">Retention:</span> {item.keep}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              We do not sell personal data, we do not use it for advertising, and we do not carry out
              automated decision-making or profiling that produces legal or similarly significant
              effects.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Health information</h2>
            <p className="mt-3">
              We do not ask you for health data and this site does not provide medical diagnosis or
              treatment. If you voluntarily include health information in a message, a profile or a
              community contribution, we process it only with your explicit consent under Article 9(2)(a)
              of the UK GDPR, and only to respond to you or display what you chose to publish. Please share
              no more than you are comfortable making known.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Who we share data with</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {SHARING.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">International transfers</h2>
            <p className="mt-3">
              Our infrastructure providers may process data outside the United Kingdom. Where that
              happens, transfers are covered by UK adequacy regulations or by the International Data
              Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses, together with
              additional safeguards where needed. You can ask us for details of the safeguards that apply.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">How we keep data safe</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {SECURITY.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Your rights</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {RIGHTS.map((right) => (
                <div key={right.title} className="rounded-xl border border-line bg-white p-4">
                  <p className="font-semibold text-navy">{right.title}</p>
                  <p className="mt-1 text-xs">{right.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any right, email us or use the contact form and choose the subject
              “Privacy request (data rights)”. We respond within one month, as required by the UK GDPR.
              Members can also view, edit and delete most of their information directly from their profile.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:Mr.Longevity@LongevityMR.com?subject=Data%20rights%20request"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy/90"
              >
                <Mail className="h-4 w-4" /> Make a data rights request
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-gold/40 hover:text-gold"
              >
                Use the contact form
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Cookies</h2>
            <p className="mt-3">
              We use a small number of strictly necessary cookies and similar storage. There is no
              advertising or third-party tracking. See the <Link className="text-gold underline" to="/cookies">cookie notice</Link>{" "}
              for the full list.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Children</h2>
            <p className="mt-3">
              The platform is intended for adults working in or interested in longevity science. We do not
              knowingly create member accounts for anyone under 18. If you believe a child has provided us
              with personal data, contact us and we will remove it.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Changes and complaints</h2>
            <p className="mt-3">
              We update this notice when our processing changes and record the date at the top. If you are
              unhappy with how we handle your data, tell us first so we can put it right. You also have the
              right to complain to the Information Commissioner's Office,{" "}
              <a className="text-gold underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
                ico.org.uk
              </a>
              , or by calling 0303 123 1113.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-5">
            <Tag tone="sand">Note</Tag>
            <p className="mt-3 text-xs">
              This notice describes our current practice in plain English. Before large-scale processing,
              new markets or clinical data handling, it should be reviewed by a qualified data protection
              adviser in each country where the mission operates.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
