import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, FlaskConical, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import { Section, SectionHead, Tag, Flourish, Kicker } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";


const URL = "https://mrlongevity-ecosystem.lovable.app/participate/community";
const DESCRIPTION =
  "The MR Longevity Action Community: understand healthy longevity science, turn reliable knowledge into responsible action, and learn through shared experience.";

const HOW_STEPS = [
  {
    num: "01",
    kicker: "Understand",
    title: "Evidence-based knowledge",
    body: "Members receive accessible updates and discussions covering the biology of ageing, biomarkers and biological age, nutrition and metabolic health, movement and physical capacity, sleep and recovery, mental and social wellbeing, preventive health, regenerative medicine, new health technologies, and data and AI in longevity. Research is presented with its evidence level, limitations and practical relevance.",
    link: { to: "/discover/biology-of-aging", label: "Start with the biology of ageing" },
  },
  {
    num: "02",
    kicker: "Act",
    title: "Turn understanding into responsible action",
    body: "Members can choose appropriate actions related to nutrition, exercise and movement, sleep, recovery, stress management, social connection, preventive-health routines, health monitoring, and learning and reflection. Members may keep a private personal record or voluntarily share selected experiences with the community. The community does not prescribe medical treatments; clinical decisions remain between individuals and qualified healthcare professionals.",
    link: { to: "/discover/healthy-longevity", label: "See what healthy longevity means in practice" },
  },
  {
    num: "03",
    kicker: "Share",
    title: "Learn through experience",
    body: "Members can share actions they have tried, what they observed, challenges they encountered, questions arising from their experience, research or technologies they are exploring, and lessons that may benefit other members. Personal experiences are clearly described as experiences, not scientific proof or medical recommendations.",
    link: { to: "/profile", label: "Share it from your member profile" },
  },
  {
    num: "04",
    kicker: "Progress Together",
    title: "A collaborative learning environment",
    body: "The community functions as an open learning network where members can participate in topic discussions, attend expert sessions, join community challenges, explore research and projects, find relevant collaborators, contribute professional expertise, and learn from different disciplines and cultures.",
    link: { to: "/projects", label: "Find collaborators on open projects" },
  },
] as const;

const ACTIVITIES = [
  {
    icon: BookOpen,
    title: "Research Briefings",
    detail: "Accessible interpretations of important developments in longevity science.",
    to: "/participate/news",
    action: "Read the briefings",
  },
  {
    icon: MessagesSquare,
    title: "Expert Conversations",
    detail: "Sessions with researchers, clinicians, innovators and other specialists.",
    to: "/participate/events",
    action: "See upcoming sessions",
  },
  {
    icon: Compass,
    title: "Action Journals",
    detail: "Optional structured records covering personal healthspan actions and reflections.",
    to: "/profile",
    action: "Keep yours on your profile",
  },
  {
    icon: Users,
    title: "Community Challenges",
    detail: "Time-limited activities related to movement, sleep, nutrition, learning or another responsible health behaviour.",
    to: "/dashboard",
    action: "Track your participation",
  },
  {
    icon: FlaskConical,
    title: "Questions and Discussions",
    detail: "Evidence-aware conversations about research, interventions and technologies.",
    to: "/participate/members",
    action: "Meet the people answering them",
  },
  {
    icon: ArrowRight,
    title: "Projects and Collaboration",
    detail: "Opportunities to participate in or contribute to relevant MR Longevity projects.",
    to: "/collaborate/projects",
    action: "Browse collaboration routes",
  },
] as const;

const WHO_CAN_JOIN = [
  { label: "Individuals interested in healthier ageing", to: "/discover/healthy-longevity" },
  { label: "Researchers and scientists", to: "/discover/scientific-missions" },
  { label: "Clinicians and healthcare professionals", to: "/ecosystem/clinical-validation" },
  { label: "Nutrition, movement and wellbeing specialists", to: "/discover/healthy-longevity" },
  { label: "Longevity and biotechnology innovators", to: "/collaborate/translation-innovation" },
  { label: "Data and AI professionals", to: "/collaborate/opportunities" },
  { label: "Universities and research institutions", to: "/ecosystem/science-discovery" },
  { label: "Investors and strategic partners", to: "/ecosystem/investment-commercial" },
  { label: "Public-health organisations", to: "/collaborate/partners" },
] as const;

const GAINS = [
  { label: "Develop a structured understanding of healthy longevity", to: "/discover" },
  { label: "Follow relevant scientific developments", to: "/participate/news" },
  { label: "Discover evidence-based practices", to: "/discover/scientific-missions" },
  { label: "Record personal actions and reflections", to: "/profile" },
  { label: "Learn from experts and other participants", to: "/participate/events" },
  { label: "Join discussions, activities and projects", to: "/projects" },
  { label: "Connect with people who share relevant interests", to: "/members" },
  { label: "Contribute knowledge, experience or capabilities", to: "/collaborate" },
] as const;



const PRINCIPLES = [
  {
    title: "Evidence before hype",
    body: "Claims should reflect the quality and limitations of the available evidence.",
  },
  {
    title: "Experience is not proof",
    body: "Members may share personal experiences, but these must not be presented as universal outcomes.",
  },
  {
    title: "Respect and openness",
    body: "Different questions and perspectives are welcome when expressed constructively.",
  },
  {
    title: "No medical prescribing",
    body: "The community does not diagnose conditions or replace professional medical care.",
  },
  {
    title: "Transparent interests",
    body: "Commercial relationships, product affiliations and potential conflicts of interest should be disclosed.",
  },
  {
    title: "Privacy and choice",
    body: "Members decide what personal information and experiences they share.",
  },
  {
    title: "Responsible innovation",
    body: "Emerging science and technology should be explored with appropriate attention to safety, ethics and evidence.",
  },
];

export const Route = createFileRoute("/participate/community")({
  head: () => ({
    meta: [
      { title: "Action Community | MR Longevity Participate" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "MR Longevity Action Community" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const { user } = useAuth();
  const signedIn = Boolean(user);
  return (

    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>MR Longevity Action Community</Kicker>
          <h1 className="text-balance text-4xl font-bold md:text-5xl">
            From Longevity Knowledge to Everyday Action
          </h1>
          <Flourish />
          <p className="mx-auto max-w-2xl text-lg text-gold-pale/90">
            The MR Longevity Action Community brings together people who want to understand
            healthy-longevity science, translate reliable knowledge into practical action and learn
            through shared experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gold text-white hover:bg-gold-light">
              {signedIn ? (
                <Link to="/dashboard">Go to your dashboard</Link>
              ) : (
                <Link to="/auth" search={{ mode: "signup" }}>
                  Join the Community
                </Link>
              )}
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/participate/events">Explore Community Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why the Community Exists */}
      <Section tone="paper">
        <SectionHead
          kicker="Why"
          num="01"
          title="Healthy longevity requires knowledge, and action"
          intro="Longevity research is advancing rapidly, but new information can be complex, fragmented and difficult to evaluate. Scientific discovery creates potential; meaningful impact depends on how responsibly that knowledge is understood, tested and applied."
          align="left"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="font-serif text-lg font-semibold text-navy">
              The MR Longevity Action Community creates a structured environment where members can:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {[
                "Understand emerging longevity research",
                "Distinguish evidence from speculation",
                "Apply appropriate insights to everyday life",
                "Record and reflect on personal actions",
                "Exchange experiences and questions",
                "Progress alongside an international community",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-ink-soft">
              The purpose is not to promote quick fixes or unverified anti-ageing claims. It is to
              encourage informed, consistent and responsible action in support of healthier, longer
              lives.
            </p>
          </div>
        </div>
      </Section>

      {/* Scientific Grounding */}
      <Section tone="white">
        <SectionHead
          kicker="Scientific grounding"
          num="02"
          title="Ageing can be studied, and aspects of it may be influenced"
          intro="The community is informed by the scientific direction expressed in the Dublin Longevity Declaration: ageing is a biological process that can be investigated scientifically and may become increasingly open to responsible intervention. This provides a direction for exploration, not a promise that ageing can currently be prevented or reversed."
        />
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-line bg-paper p-6 text-center">
          <p className="font-serif text-xl font-semibold text-navy">
            MR Longevity remains: Open to ideas. Rigorous about evidence.
          </p>
          <p className="mt-3 text-sm text-ink-soft">Community content should distinguish between:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              "Scientific hypothesis",
              "Emerging evidence",
              "Clinical evidence",
              "Validated practice",
              "Personal experience",
            ].map((tier) => (
              <Tag key={tier} tone="navy">
                {tier}
              </Tag>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://www.dublinlongevitydeclaration.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light"
            >
              Read the Dublin Longevity Declaration <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* How the Community Works */}
      <Section tone="sand">
        <SectionHead
          kicker="How it works"
          num="03"
          title="A four-step learning cycle"
          intro="Understand, act, share and progress together."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {HOW_STEPS.map((step) => (
            <div key={step.num} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-bold text-gold/40">{step.num}</span>
                <div>
                  <Kicker>{step.kicker}</Kicker>
                  <p className="font-serif text-lg font-semibold text-navy">{step.title}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              <Link
                to={step.link.to}
                className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-navy transition-colors hover:text-gold"
              >
                {step.link.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Community Activities */}
      <Section tone="white">
        <SectionHead
          kicker="Activities"
          num="04"
          title="Concrete activities, not an abstract idea"
          intro="The community shows up as things members can actually do. Every activity links to a live part of the platform."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ACTIVITIES.map((activity) => (
            <Link
              key={activity.title}
              to={activity.to}
              className="group flex flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <activity.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{activity.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{activity.detail}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-gold">
                {activity.action}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Your profile in the community */}
      <Section tone="navy">
        <SectionHead
          kicker="Your profile"
          title="The community runs on member profiles"
          intro="What you record on your profile is what makes collaboration possible. Your expertise, needs and interests decide which projects, briefings and people the platform puts in front of you."
          invert
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { to: "/profile", title: "Set up your profile", body: "Identity, expertise, interests and what you are looking for." },
            { to: "/dashboard", title: "Your dashboard", body: "Your projects, memberships and MR Match suggestions in one place." },
            { to: "/projects", title: "Projects you can join", body: "Open collaborations looking for the capabilities you hold." },
            { to: "/members", title: "Member directory", body: "Find people whose work meets your questions." },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-gold/50"
            >
              <p className="font-serif text-lg font-semibold text-white">{card.title}</p>
              <p className="mt-2 text-sm text-gold-pale/70">{card.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold">
                Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Who Can Join */}
      <Section tone="paper">
        <SectionHead
          kicker="Who can join"
          num="05"
          title="A community for many perspectives"
          intro="The community is designed for individuals and specialists across the healthy longevity field. Members select their identity and interests when creating a profile, so MR Longevity can surface relevant content, people and projects."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {WHO_CAN_JOIN.map((who) => (
            <Link
              key={who.label}
              to={who.to}
              className="group flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-soft transition-colors hover:border-gold/50 hover:text-navy"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {who.label}
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </Section>

      {/* What Members Gain */}
      <Section tone="white">
        <SectionHead
          kicker="What members gain"
          num="06"
          title="A structured path through the longevity field"
          intro="Members can:"
          align="left"
        />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {GAINS.map((gain) => (
            <Link
              key={gain.label}
              to={gain.to}
              className="group flex items-start gap-3 rounded-xl border border-line bg-paper p-4 text-sm text-ink-soft transition-colors hover:border-gold/50 hover:text-navy"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {gain.label}
              <ArrowRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-mute">
          Participation does not extend life, reverse biological age or prevent disease.
        </p>
      </Section>

      {/* Community Principles */}
      <Section tone="sand">
        <SectionHead
          kicker="Principles"
          num="07"
          title="How the community stays trustworthy"
          intro="The principles members and content are expected to follow."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-line bg-white p-6">
              <p className="font-serif text-base font-semibold text-navy">{principle.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Safety Notice */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-gold/5 p-7">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <Kicker>Community Safety Notice</Kicker>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            MR Longevity Action Community provides educational information and opportunities for
            discussion. It does not provide medical diagnosis, treatment or personalised medical
            advice. Members should consult an appropriately qualified healthcare professional before
            making significant decisions concerning medication, testing, treatment, diet or physical
            activity.
          </p>
          <p className="mt-3 text-xs text-ink-mute">
            The disclaimer will later be reviewed against the countries in which the community
            operates.
          </p>
        </div>
      </Section>

      {/* Join */}
      <Section tone="navy">
        <SectionHead
          kicker={signedIn ? "You are in" : "Join the community"}
          title="Learn. Act. Share. Progress together."
          intro={
            signedIn
              ? "Your profile is your place in the community. Keep it current so the right people, projects and briefings reach you."
              : "Create your MR Longevity profile, select the subjects that matter to you and become part of an international community working towards healthier, longer lives."
          }
          invert
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {signedIn ? (
            <>
              <Button asChild className="bg-gold text-white hover:bg-gold-light">
                <Link to="/dashboard">Go to your dashboard</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/profile">Update your profile</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="bg-gold text-white hover:bg-gold-light">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Join the Community
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/auth">Sign In</Link>
              </Button>
            </>
          )}
        </div>
        <p className="mt-5 text-center text-sm text-gold-pale/70">
          {signedIn
            ? "Community discussions, activities and projects are open to you."
            : "Already a member? Sign in to access community discussions, activities and projects."}
        </p>
      </Section>

    </div>
  );
}
