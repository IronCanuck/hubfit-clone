import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  Flame,
  MessageCircle,
  Play,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const TODAY_WORKOUT = {
  name: "Push Day · Upper Strength",
  block: "Week 4 · Day 1",
  duration: "55 min",
  blocks: [
    { name: "Bench Press", sets: "4 × 6", weight: "62.5 kg" },
    { name: "Overhead Press", sets: "3 × 8", weight: "32.5 kg" },
    { name: "Incline DB Press", sets: "3 × 10", weight: "20 kg" },
    { name: "Cable Fly", sets: "3 × 12", weight: "12 kg" },
    { name: "Tricep Pushdown", sets: "3 × 12", weight: "22 kg" },
  ],
};

const MACROS = [
  { l: "Calories", v: 1420, target: 2100, c: "from-accent-lime to-brand-400" },
  { l: "Protein", v: 92, target: 150, unit: "g", c: "from-rose-400 to-pink-500" },
  { l: "Carbs", v: 168, target: 220, unit: "g", c: "from-sky-400 to-indigo-500" },
  { l: "Fats", v: 38, target: 65, unit: "g", c: "from-amber-400 to-orange-500" },
];

const STREAK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const STREAK_DONE = [true, true, true, true, false, false, false];

export default function ClientHomePage() {
  return (
    <div className="container-max">
      <PageHeader
        title={
          <>
            Hey Sarah, <span className="text-accent-lime">let&apos;s lift.</span>
          </>
        }
        subtitle="Sunday · Day 1 of week 4"
        actions={
          <Link href="/client/checkin" className="btn-secondary text-xs">
            <CalendarCheck className="h-3.5 w-3.5" />
            Check-in due
          </Link>
        }
      />

      {/* Today's workout — hero card */}
      <section className="card relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-lime/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-violet/15 blur-3xl" />

        <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow">
                <Dumbbell className="h-3.5 w-3.5" /> Today&apos;s training
              </span>
              <span className="chip">{TODAY_WORKOUT.duration}</span>
              <span className="chip text-accent-lime">
                <Sparkles className="h-3.5 w-3.5" /> New PR opportunity
              </span>
            </div>
            <h2 className="display-h2 mt-4">{TODAY_WORKOUT.name}</h2>
            <p className="mt-1 text-sm text-white/55">{TODAY_WORKOUT.block}</p>

            <ul className="mt-6 space-y-2">
              {TODAY_WORKOUT.blocks.map((b) => (
                <li
                  key={b.name}
                  className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.05] text-[11px] font-semibold text-white/70">
                      {b.sets.split(" ")[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{b.name}</div>
                      <div className="text-[11px] text-white/50">
                        {b.sets} · target {b.weight}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/35" />
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/client/training"
                className="btn-primary text-sm"
              >
                <Play className="h-4 w-4" />
                Start workout
              </Link>
              <Link
                href="/client/training"
                className="btn-secondary text-sm"
              >
                View full program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Streak / quick stats */}
          <aside className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-300" />
              <div className="text-sm font-semibold">11-day streak</div>
            </div>
            <p className="mt-1 text-[11px] text-white/55">
              Keep it going — one more session locks the week.
            </p>

            <div className="mt-5 grid grid-cols-7 gap-1.5">
              {STREAK_DAYS.map((d, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border px-1.5 py-2 text-[10px] ${
                    STREAK_DONE[i]
                      ? "border-accent-lime/30 bg-accent-lime/10 text-white"
                      : "border-white/[0.06] bg-white/[0.02] text-white/45"
                  }`}
                >
                  <span>{d}</span>
                  {STREAK_DONE[i] ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-lime" />
                  ) : (
                    <span className="h-3.5 w-3.5 rounded-full border border-white/15" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <Stat l="Workouts" v="14" sub="this month" />
              <Stat l="Volume" v="42t" sub="lifted" />
              <Stat l="Adherence" v="92%" sub="last 4 wks" />
            </div>
          </aside>
        </div>
      </section>

      {/* Today macros + check-in nudge */}
      <section className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="card p-5 sm:p-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-accent-lime" />
                <h3 className="display-h3 text-base">Today&apos;s nutrition</h3>
              </div>
              <p className="mt-1 text-sm text-white/55">
                Logged 2 of 4 meals — you&apos;re on track.
              </p>
            </div>
            <Link
              href="/client/nutrition"
              className="btn-secondary text-xs"
            >
              Log meal
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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
                  <div className="mt-1 font-display text-xl font-semibold">
                    {m.v}
                    <span className="text-[11px] font-normal text-white/45">
                      {" "}
                      / {m.target}
                      {m.unit ?? ""}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full bg-gradient-to-r ${m.c}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-1.5 text-[10px] text-white/45">
                    {pct}% of target
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card relative overflow-hidden p-5 sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-amber-300" />
            <h3 className="display-h3 text-base">Weekly check-in</h3>
          </div>
          <p className="mt-1 text-sm text-white/55">
            Due today. Takes about 3 minutes.
          </p>
          <ul className="mt-4 space-y-2 text-[13px] text-white/75">
            {[
              "Body weight & 3 measurements",
              "4 progress photos (front/side/back)",
              "Sleep, energy & stress sliders",
              "Anything you want Cody to know",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-lime" />
                {b}
              </li>
            ))}
          </ul>
          <Link
            href="/client/checkin"
            className="btn-primary mt-5 w-full justify-center text-sm"
          >
            Start check-in <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Coach message + recent PRs */}
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-accent-lime" />
            <h3 className="display-h3 text-base">From your coach</h3>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400 text-[11px] font-bold text-ink-950">
              CF
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">Cody Fairburn</span>
                <span className="text-[11px] text-white/45">2h ago</span>
              </div>
              <p className="mt-1 text-sm text-white/80">
                Loved your last bench session — form looked dialed. Try +2.5kg
                today, but stop at 6 reps even if you&apos;ve got more. We&apos;re
                building, not testing.
              </p>
              <div className="mt-3 flex gap-2">
                <Link
                  href="/client/messages"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/85 hover:bg-white/[0.08]"
                >
                  Reply
                </Link>
                <button className="rounded-full px-3 py-1.5 text-[11px] font-medium text-white/55 hover:text-white">
                  React
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-300" />
              <h3 className="display-h3 text-base">Recent wins</h3>
            </div>
            <Link
              href="/client/progress"
              className="text-[11px] text-white/55 hover:text-white"
            >
              View all
            </Link>
          </div>
          <ul className="mt-4 space-y-2.5">
            {[
              { l: "Bench Press · 60kg × 6", sub: "+2.5kg PR · 3 days ago" },
              { l: "Squat · 80kg × 5", sub: "Tied PR · 5 days ago" },
              { l: "Down 1.2kg this month", sub: "On target trajectory" },
            ].map((w) => (
              <li
                key={w.l}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-400/15 text-amber-300">
                  <Trophy className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium">{w.l}</div>
                  <div className="text-[11px] text-white/55">{w.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Stat({ l, v, sub }: { l: string; v: string; sub: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
      <div className="text-[9px] uppercase tracking-wider text-white/45">
        {l}
      </div>
      <div className="mt-0.5 font-display text-lg font-semibold">{v}</div>
      <div className="text-[9px] text-white/45">{sub}</div>
    </div>
  );
}
