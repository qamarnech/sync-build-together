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

const SUBJECTS = [
  "Research collaboration",
  "Clinical collaboration",
  "Innovation or startup",
  "Investment or funding",
  "University or institutional partnership",
  "Public health programme",
  "Membership question",
  "Media or speaking",
  "Privacy request (data rights)",
  "Other",
];


type FormState = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  subject: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  subject: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);
  const send = useServerFn(sendContactMessage);

  const mutation = useMutation({
    mutationFn: (data: FormState) => send({ data }),
    onSuccess: () => {
      setSent(true);
      setForm(EMPTY);
      toast.success("Message sent. We will be in touch.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const [consent, setConsent] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const valid =
    consent &&
    form.name.trim().length >= 2 &&
    /.+@.+\..+/.test(form.email.trim()) &&
    form.subject.trim().length >= 2 &&
    form.message.trim().length >= 10;


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
              kicker="Send a message"
              title="Tell us what you are working on"
              intro="Share your focus and what you are looking for. Your message reaches the part of the mission best placed to answer."
            />

            {sent ? (
              <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/5 p-8">
                <CheckCircle2 className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-serif text-2xl text-navy">Thank you, your message is with us</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  We normally reply within five working days. In the meantime you can create a member
                  profile so we can match you with relevant people and projects.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="/auth">Create a member profile</a>
                  </Button>
                  <Button variant="outline" onClick={() => setSent(false)}>
                    Send another message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!valid || mutation.isPending) return;
                  mutation.mutate(form);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      placeholder="you@organisation.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organisation">Organisation</Label>
                    <Input
                      id="organisation"
                      value={form.organisation}
                      onChange={(e) => set("organisation")(e.target.value)}
                      placeholder="University, company or institute"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">I am a</Label>
                    <Select value={form.role} onValueChange={set("role")}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select what describes you" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLE_TYPES.map((role) => (
                          <SelectItem key={role.value} value={role.label}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={form.subject} onValueChange={set("subject")}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="What is your message about?" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="message">Message</Label>
                    <span className="text-xs text-ink-mute">{form.message.trim().length}/4000</span>
                  </div>
                  <Textarea
                    id="message"
                    required
                    rows={7}
                    maxLength={4000}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    placeholder="Describe your work, your question and what you are looking for."
                  />
                </div>

                <div className="rounded-xl border border-line bg-paper p-4">
                  <label htmlFor="consent" className="flex items-start gap-3 text-xs text-ink-soft">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[oklch(0.606_0.076_72.6)]"
                    />
                    <span>
                      I agree that MR Longevity and ILMRI may store and use the details above to
                      respond to my enquiry, as described in the{" "}
                      <a className="text-gold underline" href="/privacy">
                        privacy notice
                      </a>
                      . Enquiries are kept for up to 24 months and you can ask us to delete them at any
                      time. Please do not include health information you would rather not share.
                    </span>
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" disabled={!valid || mutation.isPending}>
                    {mutation.isPending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {mutation.isPending ? "Sending" : "Send message"}
                  </Button>

                  <p className="text-xs text-ink-mute">
                    We use your details only to answer your enquiry.
                  </p>
                </div>
              </form>
            )}
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
            <Button asChild variant="outline" className="border-white/30 bg-white/5 text-gold-pale hover:bg-white/10">
              <a href="#contact-form">Send a message</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
