import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Flourish({ align = "center", className }: { align?: "center" | "left"; className?: string }) {
  return (
    <div className={cn("flourish my-5", align === "center" ? "justify-center" : "justify-start", className)}>
      {align === "center" && <span className="flourish-line" />}
      <span className="gold-diamond" />
      <span className="flourish-line" />
    </div>
  );
}

export function Kicker({ num, children }: { num?: string | number | undefined; children: ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 font-serif text-sm font-semibold italic tracking-wide text-gold">
      {num !== undefined && (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold not-italic text-white shadow-[0_0_0_3px_oklch(0.606_0.076_72.6_/_0.15)]">
          {num}
        </span>
      )}
      {children}
    </span>
  );
}

export function SectionHead({
  kicker,
  num,
  title,
  intro,
  align = "center",
  invert = false,
}: {
  kicker?: string | undefined;
  num?: string | number | undefined;
  title: string;
  intro?: string | undefined;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "max-w-none text-left")}>
      {kicker && <Kicker num={num}>{kicker}</Kicker>}
      <h2
        className={cn(
          "text-balance text-3xl font-bold md:text-4xl",
          invert ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <Flourish align={align} />
      {intro && (
        <p className={cn("text-base", invert ? "text-gold-pale/80" : "text-ink-soft")}>{intro}</p>
      )}
    </div>
  );
}

export function Tag({ children, tone = "sand" }: { children: ReactNode; tone?: "sand" | "gold" | "navy" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "sand" && "border-line bg-sand text-ink-soft",
        tone === "gold" && "border-gold/40 bg-gold/10 text-gold",
        tone === "navy" && "border-navy/20 bg-navy/5 text-navy",
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  id,
  tone = "paper",
  children,
  className,
}: {
  id?: string | undefined;
  tone?: "paper" | "white" | "sand" | "navy";
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-20 md:py-24",
        tone === "paper" && "bg-paper",
        tone === "white" && "bg-white",
        tone === "sand" && "bg-sand",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
