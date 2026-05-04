import Link from "next/link";
import {
  Apple,
  Camera,
  ChevronRight,
  Coffee,
  Plus,
  Sandwich,
  Soup,
  UtensilsCrossed,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const MACROS = [
  { l: "Calories", v: 1420, target: 2100, unit: "", c: "from-accent-lime to-brand-400" },
  { l: "Protein", v: 92, target: 150, unit: "g", c: "from-rose-400 to-pink-500" },
  { l: "Carbs", v: 168, target: 220, unit: "g", c: "from-sky-400 to-indigo-500" },
  { l: "Fats", v: 38, target: 65, unit: "g", c: "from-amber-400 to-orange-500" },
];

const MEALS = [
  {
    label: "Breakfast",
    icon: Coffee,
    time: "7:40 am",
    logged: true,
    items: [
      { name: "Oats with berries", kcal: 380, p: 14, c: 62, f: 8 },
      { name: "Black coffee", kcal: 5, p: 0, c: 0, f: 0 },
    ],
  },
  {
    label: "Lunch",
    icon: Sandwich,
    time: "12:30 pm",
    logged: true,
    items: [
      { name: "Chicken & rice bowl", kcal: 620, p: 52, c: 78, f: 12 },
      { name: "Mixed greens", kcal: 90, p: 3, c: 8, f: 5 },
    ],
  },
  {
    label: "Snack",
    icon: Apple,
    time: "3:30 pm",
    logged: true,
    items: [{ name: "Greek yogurt + honey", kcal: 220, p: 18, c: 22, f: 8 }],
  },
  {
    label: "Dinner",
    icon: Soup,
    time: "Not logged",
    logged: false,
    items: [],
    suggested: "Salmon, sweet potato, asparagus",
  },
];

const PLAN_TIPS = [
  "Aim for 30g+ protein per meal — you're tracking 8g short of today's target.",
  "Hit your carb window 90 min before training for best lifts.",
  "Hydration goal: 2.5L. Last logged at lunch.",
];

export default function ClientNutritionPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Nutrition"
        subtitle="Sunday · 1,420 / 2,100 kcal logged"
        actions={
          <>
            <button className="btn-secondary text-xs">
              <Camera className="h-3.5 w-3.5" />
              Snap meal
            </button>
            <button className="btn-primary text-xs">
              <Plus className="h-3.5 w-3.5" />
              Log meal
            </button>
          </>
        }
      />

      {/* Daily targets */}
      <section className="card p-5 sm:p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="display-h3 text-base">Today&apos;s targets</h3>
            <p className="mt-1 text-sm text-white/55">
              From your coach · updated this week
            </p>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-[11px] uppercase tracking-wider text-white/45">
              Remaining
            </div>
            <div className="font-display text-xl font-semibold text-accent-lime">
              680 kcal
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MACROS.map((m) => {
            const pct = Math.min(100, Math.round((m.v / m.target) * 100));
            return (
              <div
                key={m.l}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/45">
                  {m.l}
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  {m.v}
                  <span className="text-[11px] font-normal text-white/45">
                    {" "}
                    / {m.target}
                    {m.unit}
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full bg-gradient-to-r ${m.c}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-1.5 text-[10px] text-white/45">
                  {pct}% · {m.target - m.v}
                  {m.unit} remaining
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Meals */}
      <section className="mt-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="display-h3 text-base">Today&apos;s meals</h3>
            <p className="mt-1 text-sm text-white/55">
              3 of 4 logged · tap to edit
            </p>
          </div>
          <Link href="#" className="text-[11px] text-white/55 hover:text-white">
            Meal history
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {MEALS.map((m) => (
            <div key={m.label} className="card overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full ${
                    m.logged
                      ? "bg-accent-lime/15 text-accent-lime"
                      : "bg-white/[0.05] text-white/55"
                  }`}
                >
                  <m.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{m.label}</div>
                  <div className="text-[11px] text-white/55">{m.time}</div>
                </div>
                {m.logged ? (
                  <div className="text-right">
                    <div className="font-display text-sm font-semibold tabular-nums">
                      {m.items.reduce((s, i) => s + i.kcal, 0)} kcal
                    </div>
                    <div className="text-[10px] text-white/55">
                      {m.items.reduce((s, i) => s + i.p, 0)}P ·{" "}
                      {m.items.reduce((s, i) => s + i.c, 0)}C ·{" "}
                      {m.items.reduce((s, i) => s + i.f, 0)}F
                    </div>
                  </div>
                ) : (
                  <button className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/85 hover:bg-white/[0.08]">
                    <Plus className="mr-1 inline h-3 w-3" />
                    Log
                  </button>
                )}
              </div>

              {m.logged ? (
                <ul className="divide-y divide-white/[0.04]">
                  {m.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <div className="min-w-0">
                        <div className="text-sm">{it.name}</div>
                        <div className="text-[11px] text-white/55">
                          {it.p}P · {it.c}C · {it.f}F
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="font-display text-sm tabular-nums text-white/75">
                          {it.kcal}
                          <span className="ml-0.5 text-[10px] text-white/45">
                            kcal
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-white/35" />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-center justify-between px-4 py-3 text-sm">
                  <div className="flex items-center gap-2 text-white/65">
                    <UtensilsCrossed className="h-4 w-4 text-white/45" />
                    <span>Coach suggestion: {m.suggested}</span>
                  </div>
                  <button className="text-[11px] font-medium text-accent-lime hover:underline">
                    Use suggestion
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Coach plan tips */}
      <section className="mt-8 card p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-accent-lime" />
          <h3 className="display-h3 text-base">Coach plan tips</h3>
        </div>
        <ul className="mt-4 space-y-2.5">
          {PLAN_TIPS.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm text-white/80"
            >
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
              {t}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
