import {
  ArrowDown,
  ArrowUp,
  Camera,
  Image as ImageIcon,
  Ruler,
  Scale,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const WEIGHT_DATA = [
  { wk: "W1", v: 72.4 },
  { wk: "W2", v: 72.0 },
  { wk: "W3", v: 71.7 },
  { wk: "W4", v: 71.5 },
  { wk: "W5", v: 71.2 },
  { wk: "W6", v: 70.9 },
  { wk: "W7", v: 70.5 },
  { wk: "W8", v: 70.2 },
  { wk: "W9", v: 69.8 },
  { wk: "W10", v: 69.5 },
  { wk: "W11", v: 69.1 },
  { wk: "W12", v: 68.7 },
];

const PRS = [
  { lift: "Bench Press", v: "62.5kg × 6", delta: "+2.5kg", date: "3d ago" },
  { lift: "Back Squat", v: "85kg × 5", delta: "+5kg", date: "1w ago" },
  { lift: "Deadlift", v: "110kg × 3", delta: "+2.5kg", date: "2w ago" },
  { lift: "Strict Press", v: "37.5kg × 5", delta: "+2.5kg", date: "3w ago" },
];

const MEASUREMENTS = [
  { l: "Weight", v: "68.7", unit: "kg", delta: "−1.2", up: false },
  { l: "Waist", v: "71", unit: "cm", delta: "−2", up: false },
  { l: "Hips", v: "92", unit: "cm", delta: "−1", up: false },
  { l: "Chest", v: "94", unit: "cm", delta: "+0.5", up: true },
  { l: "Arm", v: "29", unit: "cm", delta: "+0.5", up: true },
  { l: "Thigh", v: "55", unit: "cm", delta: "+0", up: false },
];

const PHOTOS = [
  { l: "Week 1", color: "from-pink-400/30 to-fuchsia-500/20" },
  { l: "Week 4", color: "from-sky-400/30 to-indigo-500/20" },
  { l: "Week 8", color: "from-emerald-400/30 to-teal-500/20" },
  { l: "Week 12", color: "from-amber-400/30 to-orange-500/20" },
];

export default function ClientProgressPage() {
  // Build SVG polyline for weight chart
  const min = Math.min(...WEIGHT_DATA.map((d) => d.v));
  const max = Math.max(...WEIGHT_DATA.map((d) => d.v));
  const range = max - min || 1;
  const points = WEIGHT_DATA.map((d, i) => {
    const x = (i / (WEIGHT_DATA.length - 1)) * 100;
    const y = 100 - ((d.v - min) / range) * 100;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  return (
    <div className="container-max">
      <PageHeader
        title="Progress"
        subtitle="Down 3.7kg over 12 weeks · 4 PRs this block"
        actions={
          <button className="btn-secondary text-xs">
            <Camera className="h-3.5 w-3.5" />
            Add photo
          </button>
        }
      />

      {/* Top stats */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {MEASUREMENTS.slice(0, 4).map((m) => (
          <div key={m.l} className="card p-4">
            <div className="text-[10px] uppercase tracking-wider text-white/45">
              {m.l}
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <div className="font-display text-2xl font-semibold">{m.v}</div>
              <div className="text-[11px] text-white/55">{m.unit}</div>
            </div>
            <div
              className={`mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                m.up
                  ? "border-brand-500/30 bg-brand-500/10 text-brand-300"
                  : "border-accent-lime/30 bg-accent-lime/10 text-accent-lime"
              }`}
            >
              {m.up ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              )}
              {m.delta}
              {m.unit}
            </div>
          </div>
        ))}
      </section>

      {/* Weight chart */}
      <section className="mt-6 card p-5 sm:p-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-accent-lime" />
              <h3 className="display-h3 text-base">Weight trend</h3>
            </div>
            <p className="mt-1 text-sm text-white/55">
              12 weeks · weekly average · target 68kg
            </p>
          </div>
          <div className="flex gap-1">
            {["4w", "12w", "1y", "All"].map((p, i) => (
              <button
                key={p}
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  i === 1
                    ? "bg-white/[0.08] text-white"
                    : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 h-56 w-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="weightFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(198 248 75)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="rgb(198 248 75)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[20, 40, 60, 80].map((y) => (
              <line
                key={y}
                x1="0"
                x2="100"
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.2"
              />
            ))}
            <polygon
              points={`0,100 ${points} 100,100`}
              fill="url(#weightFill)"
            />
            <polyline
              points={points}
              fill="none"
              stroke="rgb(198 248 75)"
              strokeWidth="0.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {WEIGHT_DATA.map((d, i) => {
              const x = (i / (WEIGHT_DATA.length - 1)) * 100;
              const y = 100 - ((d.v - min) / range) * 100;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="0.9"
                  fill="rgb(198 248 75)"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-white/45">
          {WEIGHT_DATA.map((d) => (
            <span key={d.wk}>{d.wk}</span>
          ))}
        </div>
      </section>

      {/* PRs + Measurements */}
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-amber-300" />
            <h3 className="display-h3 text-base">Personal records</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {PRS.map((p) => (
              <li
                key={p.lift}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-400/15 text-amber-300">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium">{p.lift}</div>
                  <div className="text-[11px] text-white/55">{p.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-sm font-semibold tabular-nums">
                    {p.v}
                  </div>
                  <div className="text-[11px] text-accent-lime">{p.delta}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-accent-lime" />
            <h3 className="display-h3 text-base">Measurements</h3>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {MEASUREMENTS.map((m) => (
              <div
                key={m.l}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45">
                    {m.l}
                  </div>
                  <div className="font-display text-base font-semibold tabular-nums">
                    {m.v}
                    <span className="ml-0.5 text-[10px] font-normal text-white/55">
                      {m.unit}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-[11px] font-medium ${
                    m.up ? "text-brand-300" : "text-accent-lime"
                  }`}
                >
                  {m.delta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="mt-6 card p-5 sm:p-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-accent-lime" />
              <h3 className="display-h3 text-base">Progress photos</h3>
            </div>
            <p className="mt-1 text-sm text-white/55">
              Front-facing · standardized lighting
            </p>
          </div>
          <button className="btn-secondary text-xs">
            <Camera className="h-3.5 w-3.5" />
            Add this week
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PHOTOS.map((p) => (
            <div
              key={p.l}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.06]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color}`}
              />
              <div className="absolute inset-0 grid place-items-center text-white/40">
                <ImageIcon className="h-8 w-8" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-900/85 to-transparent px-3 py-2.5">
                <span className="text-[11px] font-semibold">{p.l}</span>
                <span className="text-[10px] text-white/55">May</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
