import { ExternalLink } from "lucide-react";
import { Tag } from "@/components/site/ui-bits";
import {
  FOUNDER_AFFILIATIONS,
  FOUNDER_DOMAINS,
  FOUNDER_FIGURES,
  FOUNDER_FIGURES_SOURCE,
  FOUNDER_GRANTS,
  FOUNDER_PATENTS,
  FOUNDER_PUBLICATIONS,
  type LinkedItem,
} from "@/lib/founder-fu";

function Card({ item }: { item: LinkedItem }) {
  const body = (
    <>
      <p className="font-serif text-base font-semibold text-navy">{item.title}</p>
      {item.meta && <p className="mt-1 text-xs uppercase tracking-wide text-gold">{item.meta}</p>}
      {item.detail && <p className="mt-2 text-sm text-ink-soft">{item.detail}</p>}
    </>
  );

  if (!item.href) {
    return <div className="rounded-2xl border border-line bg-white p-5">{body}</div>;
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-line bg-white p-5 transition-colors hover:border-gold"
    >
      {body}
      <span className="mt-3 inline-flex items-center gap-1 text-xs text-ink-mute group-hover:text-gold">
        Source <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}

export function FounderFigures() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {FOUNDER_FIGURES.map((figure) => (
          <div key={figure.label} className="rounded-2xl border border-line bg-white p-6 text-center">
            <p className="font-serif text-4xl font-bold text-gold">{figure.value}</p>
            <p className="mt-2 text-sm text-ink-soft">{figure.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-ink-mute">
        As reported by{" "}
        <a
          href={FOUNDER_FIGURES_SOURCE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold"
        >
          Binzhou Medical University
        </a>
        , June 2024.
      </p>
    </div>
  );
}

export function FounderDomains() {
  return (
    <div className="flex flex-wrap gap-2">
      {FOUNDER_DOMAINS.map((domain) => (
        <Tag key={domain} tone="navy">
          {domain}
        </Tag>
      ))}
    </div>
  );
}

export function FounderAffiliations() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {FOUNDER_AFFILIATIONS.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}

export function FounderPublications() {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {FOUNDER_PUBLICATIONS.map((publication) => (
        <a
          key={publication.title}
          href={publication.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-4 p-5 transition-colors hover:bg-gold/5"
        >
          <span className="mt-0.5 w-12 shrink-0 font-serif text-sm font-bold text-gold">
            {publication.year}
          </span>
          <span className="min-w-0">
            <span className="block font-medium text-navy group-hover:text-gold">
              {publication.title}
            </span>
            <span className="mt-1 block text-xs text-ink-mute">
              {publication.journal} · {publication.role}
            </span>
          </span>
          <ExternalLink className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-mute group-hover:text-gold" />
        </a>
      ))}
    </div>
  );
}

export function FounderPatents() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {FOUNDER_PATENTS.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}

export function FounderGrants() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {FOUNDER_GRANTS.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
