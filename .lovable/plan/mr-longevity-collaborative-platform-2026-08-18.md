# MR Longevity — Collaborative Platform

Port the uploaded homepage design into a real multi-page app with accounts, member profiles, a projects board, and a member directory with MR Match. Homepage stays public; everything else is members-only.

## Design system

Port the navy/gold/sand palette, Playfair Display + Cormorant Garamond serif typography, flourish rules, kickers, and card styles into semantic tokens in `src/styles.css`. Shared header (nav + auth state) and footer live in the root layout.

## Pages

- `/` — public landing: hero, Why, What, How, Gain, Join CTAs (content from the upload, condensed so deep sections get their own pages)
- `/discover` — healthy longevity + intelligence content
- `/about` — vision, mission, governance, China/UK/global
- `/auth` — sign up / sign in
- `/dashboard` — member home: your profile summary, your projects, match suggestions
- `/projects` — browse/filter projects; `/projects/new` propose; `/projects/$id` detail with join/interest
- `/members` — directory with role/expertise/country filters; `/members/$id` profile
- `/profile` — edit your own profile

## Backend (Lovable Cloud)

Tables:
- `profiles` — user_id, full name, headline, role type (researcher / clinician / innovator / investor / partner / public-health / individual), organisation, country, expertise tags, needs tags, bio, avatar
- `projects` — owner, title, summary, description, mission area, project type, needed capabilities (tags), status, open-to-collaborators flag
- `project_members` — project_id, user_id, role, status (interested / accepted)
- `user_roles` — separate table with `app_role` enum + `has_role()` function (admin/moderator/member), used for moderation

All tables: grants + RLS. Since content is members-only, every SELECT policy is scoped to `authenticated` (no anon reads). Insert/update/delete scoped to the owner; project membership changes limited to the project owner or the requesting user.

## MR Match

Server-side scoring: overlap between a project's `needed_capabilities` and a member's `expertise`, plus mission-area and country signals. Surfaces as "Suggested collaborators" on a project page and "Projects that match you" on the dashboard.

## Technical notes

- Enable Lovable Cloud for auth (email/password, auto-confirm) and database.
- Route gate at `src/routes/_authenticated/route.tsx` redirects signed-out users to `/auth`.
- Reads via TanStack Query; writes via server functions with Zod validation; tag arrays stored as `text[]`.
- Seed a handful of demo projects and profiles in the migration so the directory and board aren't empty.
- Per-route `head()` metadata on every public page.
