import { createFileRoute, Link } from "@tanstack/react-router";

import { Section, SectionHead } from "@/components/site/ui-bits";
import { LegalNav } from "@/routes/privacy";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Notice, MR Longevity & ILMRI" },
      {
        name: "description",
        content:
          "The cookies and local storage used by the MR Longevity platform: strictly necessary only, with no advertising or third-party tracking.",
      },
      { property: "og:title", content: "Cookie Notice, MR Longevity & ILMRI" },
      {
        property: "og:description",
        content:
          "MR Longevity uses only strictly necessary cookies and storage for sign-in and security. No tracking or advertising cookies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiesPage,
});

const COOKIES = [
  {
    name: "Authentication session",
    purpose: "Keeps you signed in to your member account and protects the session.",
    type: "Strictly necessary",
    duration: "Session and refresh tokens, until you sign out or they expire.",
  },
  {
    name: "Security and request protection",
    purpose: "Protects form submissions and server requests against cross-site request forgery.",
    type: "Strictly necessary",
    duration: "Session.",
  },
  {
    name: "Cookie notice acknowledgement",
    purpose: "Remembers that you have seen this notice so it is not shown on every page.",
    type: "Strictly necessary",
    duration: "Stored in your browser until you clear site data.",
  },
  {
    name: "Interface preferences",
    purpose: "Remembers small display choices, such as whether a side panel is open.",
    type: "Strictly necessary",
    duration: "Up to 7 days.",
  },
];

function CookiesPage() {
  return (
    <div>
      <Section tone="white">
        <SectionHead
          kicker="Legal"
          title="Cookie Notice"
          intro="We use only strictly necessary cookies and storage. No advertising, no analytics profiling, no third-party tracking."
        />
        <LegalNav current="cookies" />
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-ink-soft">
          <p>
            Under the Privacy and Electronic Communications Regulations, consent is required before
            non-essential cookies are placed. This site does not set any non-essential cookies, so there
            is nothing to opt into or out of. The items below are needed for the site to work and to keep
            your account secure.
          </p>

          <div className="overflow-hidden rounded-xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-sand text-xs uppercase tracking-wide text-navy">
                <tr>
                  <th className="px-4 py-3">Cookie or storage</th>
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {COOKIES.map((cookie) => (
                  <tr key={cookie.name} className="border-t border-line align-top">
                    <td className="px-4 py-3 font-medium text-navy">{cookie.name}</td>
                    <td className="px-4 py-3">{cookie.purpose}</td>
                    <td className="px-4 py-3 text-xs">{cookie.type}</td>
                    <td className="px-4 py-3 text-xs">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">Managing cookies</h2>
            <p className="mt-3">
              You can block or delete cookies in your browser settings. Blocking the strictly necessary
              items above will prevent sign-in and form submission from working. Clearing site data also
              removes your acknowledgement of this notice, so it will appear again.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy">If this changes</h2>
            <p className="mt-3">
              If we later add analytics, embedded media or any other non-essential technology, we will ask
              for your consent first through a banner with a genuine choice, and update this page. See the{" "}
              <Link className="text-gold underline" to="/privacy">
                privacy notice
              </Link>{" "}
              for how personal data is handled more generally.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
