import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Translation Flywheel — circular cycle with a Data + AI core         */
/* ------------------------------------------------------------------ */

const FLYWHEEL_STAGES = [
  { label: "Science", note: "Discovery in labs and institutions" },
  { label: "Discovery", note: "Mechanisms, targets, hypotheses" },
  { label: "Validate", note: "Biomarkers, trials, evidence" },
  { label: "Translate", note: "Products, protocols, practice" },
  { label: "People", note: "Personalised, preventive health" },
  { label: "Outcomes", note: "Real-world data returns to science" },
];

export function TranslationFlywheel({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const size = 420;
  const c = size / 2;
  const r = 150;

  return (
    <div className={cn("grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_260px]", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto w-full max-w-[420px]"
        role="img"
        aria-label="MR Longevity translation flywheel: science, discovery, validation, translation, people, outcomes"
      >
        <defs>
          <marker id="fw-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" className="fill-gold" />
          </marker>
        </defs>

        {[r + 34, r + 16].map((rad, i) => (
          <circle
            key={rad}
            cx={c}
            cy={c}
            r={rad}
            fill="none"
            className="text-line"
            stroke="currentColor"
            strokeWidth={i === 0 ? 0.75 : 0.5}
            strokeDasharray={i === 0 ? "2 6" : undefined}
          />
        ))}

        {/* rotation arc */}
        <path
          d={`M ${c + r} ${c} A ${r} ${r} 0 1 1 ${c - r * 0.5} ${c - r * 0.866}`}
          fill="none"
          className="text-gold/50"
          stroke="currentColor"
          strokeWidth="1.25"
          markerEnd="url(#fw-arrow)"
        />

        {/* core */}
        <circle cx={c} cy={c} r="58" className="fill-navy" />
        <circle cx={c} cy={c} r="66" fill="none" className="text-gold/40" stroke="currentColor" strokeWidth="0.75" />
        <text x={c} y={c - 4} textAnchor="middle" className="fill-gold-pale text-[13px] tracking-[0.2em]">
          DATA
        </text>
        <text x={c} y={c + 16} textAnchor="middle" className="fill-gold-light text-[15px] font-semibold">
          + AI
        </text>

        {FLYWHEEL_STAGES.map((stage, i) => {
          const a = (i / FLYWHEEL_STAGES.length) * Math.PI * 2 - Math.PI / 2;
          const x = c + Math.cos(a) * r;
          const y = c + Math.sin(a) * r;
          const on = active === i;
          return (
            <g
              key={stage.label}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="cursor-pointer outline-none"
            >
              <line
                x1={c + Math.cos(a) * 70}
                y1={c + Math.sin(a) * 70}
                x2={c + Math.cos(a) * (r - 30)}
                y2={c + Math.sin(a) * (r - 30)}
                className="text-line"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <circle cx={x} cy={y} r={on ? 30 : 27} className={on ? "fill-gold" : "fill-white"} />
              <circle cx={x} cy={y} r={on ? 30 : 27} fill="none" className="text-gold/50" stroke="currentColor" strokeWidth="1" />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className={cn("text-[10px] font-semibold", on ? "fill-white" : "fill-navy")}
              >
                {stage.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-xl border border-line bg-white p-5">
        <p className="font-serif text-sm italic text-gold">
          Stage {String(active + 1).padStart(2, "0")} / 06
        </p>
        <h4 className="mt-1 text-lg font-semibold text-navy">{FLYWHEEL_STAGES[active]?.label}</h4>
        <p className="mt-2 text-sm text-ink-soft">{FLYWHEEL_STAGES[active]?.note}</p>
        <p className="mt-4 border-t border-line pt-3 text-xs text-ink-mute">
          Hover a node — the cycle never ends: outcomes feed back into better science.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Healthspan vs lifespan curve                                        */
/* ------------------------------------------------------------------ */

export function HealthspanCurve({ className }: { className?: string }) {
  const w = 720;
  const h = 300;
  const pad = { l: 52, r: 24, t: 24, b: 44 };
  const x = (t: number) => pad.l + t * (w - pad.l - pad.r);
  const y = (v: number) => h - pad.b - v * (h - pad.t - pad.b);

  const today = `M ${x(0)} ${y(0.92)} C ${x(0.35)} ${y(0.9)}, ${x(0.5)} ${y(0.82)}, ${x(0.66)} ${y(0.52)} S ${x(0.86)} ${y(0.14)}, ${x(1)} ${y(0.04)}`;
  const goal = `M ${x(0)} ${y(0.95)} C ${x(0.5)} ${y(0.94)}, ${x(0.74)} ${y(0.9)}, ${x(0.88)} ${y(0.62)} S ${x(0.97)} ${y(0.12)}, ${x(1)} ${y(0.05)}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn("w-full", className)}
      role="img"
      aria-label="Chart comparing today's decline in health with a compressed-morbidity healthspan curve"
    >
      <defs>
        <linearGradient id="hs-gain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="text-gold" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" className="text-gold" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0, 0.25, 0.5, 0.75, 1].map((g) => (
        <line
          key={g}
          x1={pad.l}
          x2={w - pad.r}
          y1={y(g)}
          y2={y(g)}
          className="text-line"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray={g === 0 ? undefined : "2 6"}
        />
      ))}

      <path d={`${goal} L ${x(1)} ${y(0)} L ${x(0)} ${y(0)} Z`} fill="url(#hs-gain)" />
      <path d={`${today} L ${x(1)} ${y(0)} L ${x(0)} ${y(0)} Z`} className="fill-white" opacity="0.85" />

      <path d={today} fill="none" className="text-ink-mute" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" />
      <path d={goal} fill="none" className="text-gold" stroke="currentColor" strokeWidth="2.5" />

      <text x={pad.l} y={pad.t - 6} className="fill-ink-mute text-[11px] tracking-[0.18em]">
        FUNCTIONAL CAPACITY
      </text>
      <text x={w - pad.r} y={h - 14} textAnchor="end" className="fill-ink-mute text-[11px] tracking-[0.18em]">
        AGE →
      </text>

      <g>
        <circle cx={x(0.66)} cy={y(0.52)} r="4" className="fill-ink-mute" />
        <text x={x(0.66) - 10} y={y(0.52) - 10} textAnchor="end" className="fill-ink-soft text-[12px]">
          Decline today
        </text>
        <circle cx={x(0.88)} cy={y(0.62)} r="4.5" className="fill-gold" />
        <text x={x(0.88) - 8} y={y(0.62) - 12} textAnchor="end" className="fill-navy text-[12px] font-semibold">
          Health extended
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Systems rings — dimensions of healthy longevity                     */
/* ------------------------------------------------------------------ */

const DIMENSIONS = [
  "Cellular & Molecular",
  "Metabolic & Physiological",
  "Movement & Capacity",
  "Nutrition",
  "Sleep & Recovery",
  "Mental & Social",
  "Environment & Behaviour",
];

export function SystemsRings({ className }: { className?: string }) {
  const size = 380;
  const c = size / 2;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("mx-auto w-full max-w-[380px]", className)}
      role="img"
      aria-label="Concentric map of the dimensions of healthy longevity"
    >
      {[168, 140, 112, 84, 56].map((r, i) => (
        <circle
          key={r}
          cx={c}
          cy={c}
          r={r}
          fill="none"
          className={i % 2 ? "text-gold/25" : "text-line"}
          stroke="currentColor"
          strokeWidth="0.75"
        />
      ))}
      {Array.from({ length: 72 }).map((_, i) => {
        const a = (i / 72) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={c + Math.cos(a) * 170}
            y1={c + Math.sin(a) * 170}
            x2={c + Math.cos(a) * (i % 6 === 0 ? 158 : 165)}
            y2={c + Math.sin(a) * (i % 6 === 0 ? 158 : 165)}
            className="text-line"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        );
      })}
      <circle cx={c} cy={c} r="34" className="fill-navy" />
      <text x={c} y={c + 4} textAnchor="middle" className="fill-gold-pale text-[11px] tracking-[0.16em]">
        PERSON
      </text>
      {DIMENSIONS.map((d, i) => {
        const a = (i / DIMENSIONS.length) * Math.PI * 2 - Math.PI / 2;
        const rr = 126;
        const px = c + Math.cos(a) * rr;
        const py = c + Math.sin(a) * rr;
        const anchor = Math.abs(Math.cos(a)) < 0.25 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
        const lines = d.split(" & ");
        return (
          <g key={d}>
            <line
              x1={c + Math.cos(a) * 36}
              y1={c + Math.sin(a) * 36}
              x2={px - Math.cos(a) * 8}
              y2={py - Math.sin(a) * 8}
              className="text-gold/40"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            <circle cx={px} cy={py} r="5" className="fill-gold" />
            <text
              x={px + Math.cos(a) * 12}
              y={py + Math.sin(a) * 16 + (lines.length > 1 ? -2 : 4)}
              textAnchor={anchor}
              className="fill-navy text-[10.5px] font-medium"
            >
              {lines.map((ln, j) => (
                <tspan key={ln} x={px + Math.cos(a) * 14} dy={j === 0 ? 0 : 12}>
                  {j === 0 ? ln : `& ${ln}`}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Evidence ladder                                                     */
/* ------------------------------------------------------------------ */

const EVIDENCE = [
  { label: "Hypothesis", note: "Open to ideas" },
  { label: "Emerging Evidence", note: "Signals, early data" },
  { label: "Clinical Evidence", note: "Trials, replication" },
  { label: "Validated Practice", note: "Rigorous about proof" },
];

export function EvidenceLadder({ invert = false, className }: { invert?: boolean; className?: string }) {
  return (
    <ol className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {EVIDENCE.map((step, i) => (
        <li
          key={step.label}
          className={cn(
            "relative overflow-hidden rounded-xl border p-4",
            invert ? "border-white/10 bg-white/5" : "border-line bg-white",
          )}
        >
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-sm italic text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span className={cn("text-[10px] tracking-[0.2em]", invert ? "text-gold-pale/50" : "text-ink-mute")}>
              {`${25 * (i + 1)}%`}
            </span>
          </div>
          <p className={cn("mt-2 text-sm font-semibold", invert ? "text-white" : "text-navy")}>{step.label}</p>
          <p className={cn("mt-1 text-xs", invert ? "text-gold-pale/70" : "text-ink-soft")}>{step.note}</p>
          <div className={cn("mt-4 h-1 w-full rounded-full", invert ? "bg-white/10" : "bg-sand")}>
            <div className="h-1 rounded-full bg-gold" style={{ width: `${25 * (i + 1)}%` }} />
          </div>
        </li>
      ))}
    </ol>
  );
}
