# Founder Record — Professor Qiang Fu 付强

Add a verified, source-linked research record for Professor Qiang Fu: a new public founder page plus an expanded members-only profile that links to it. Only public credentials are published — no ownership stake, no editorial-concern notice, no internal diligence questions.

## What gets published

Drawn from the uploaded document, credentials only, each item carrying its public source link (PubMed, PMC, Nature, university profile):

- **Identity and affiliations** — Professor and postgraduate supervisor, Institute of Aging Medicine / School of Pharmacy, Binzhou Medical University (Yantai); former UNC postdoctoral researcher; Shandong Cellogene affiliation as listed on his papers; founder of MR Longevity.
- **Research domains** — cellular senescence and geroscience, NK-cell immunology, reproductive immunology, stem cells and ovarian function, exosomes, cancer, biomarkers and AI in ageing.
- **Selected publications** — the 15 verified entries from 2014 to 2025, each with year, title, journal, his role (author / corresponding / equal contribution) and an external link.
- **Patents** — the three enumerated granted patents (NK-cell expansion device, MSC exosome compositions, automated NK-cell culture device) plus the NK-cell activity detection kit, with grant dates.
- **Grants** — NSFC 81370730 and 81571512, Shandong Natural Science Foundation ZR2023MH262, Yantai Double Hundred Program, and the 2021XDHZ082 collaborative programme.
- **At-a-glance figures** — presented as institutionally reported (20+ first/corresponding-author SCI papers, two monographs, eight granted patents), attributed to the university profile rather than stated as independent bibliometrics.

## Pages

- **`/founder`** (new, public) — hero with name, title, affiliations and expertise tags; About; research domains; a filterable/sectioned publications list; patents; grants; a closing link to join the ecosystem. Own `head()` metadata, canonical, `og:*`, and Person JSON-LD with `sameAs` links.
- **Member profile** (`/members/$profileId`, members-only) — when the profile is Professor Fu's, render the same research-record sections beneath the existing bio, plus a "View public founder page" link.
- **Navigation** — add "Founder" under the Home dropdown in the header (alongside About and Contact) and a footer link. Link from the About page's leadership context.

## Data storage

Content lives in code at `src/lib/founder-fu.ts` as typed arrays (publications, patents, grants, affiliations, domains), so the founder page and member profile render from one source. No schema changes; the existing database profile row is left as is except for a bio refresh matching the new About copy.

## Technical notes

- New route `src/routes/founder.tsx`; shared section components reuse existing `ui-bits` (`Kicker`, `SectionHead`, `Tag`, `Section`) and the navy/gold/sand tokens — no new colours.
- Shared render component `src/components/site/FounderRecord.tsx` used by both the public page and the member profile.
- Member-profile match keyed off the profile's `full_name` so no migration is needed.
- All external links open in a new tab with `rel="noopener noreferrer"`.
