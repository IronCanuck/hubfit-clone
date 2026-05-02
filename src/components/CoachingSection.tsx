import { Apple, CalendarCheck, CheckCircle2, Dumbbell, Flame, Quote, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";

export function CoachingSection() {
  return (
    <section id="coaching" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <SectionHeader
          eyebrow="Coaching"
          title={
            <>
              Everything you need to{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                coach
              </span>
            </>
          }
          description="Training, nutrition, check-ins, and habits — the core pillars of coaching, all built into one platform."
          primaryCta={{ label: "Start for free", href: "#start" }}
          secondaryCta={{ label: "Explore coaching", href: "#" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <FeatureCard
            icon={Dumbbell}
            title="Training"
            description="Build workouts, track history, and run every training style: supersets, circuits, intervals, and AMRAP."
            preview={<TrainingPreview />}
          />
          <FeatureCard
            icon={Apple}
            title="Nutrition"
            description="Create meal plans, set macro targets, and let clients log meals with the in-app nutrition tracker."
            preview={<NutritionPreview />}
          />
          <FeatureCard
            icon={CalendarCheck}
            title="Check-ins"
            description="Schedule daily, weekly, bi-weekly, or monthly check-ins. Review everything in a dedicated review inbox."
            preview={<CheckinsPreview />}
          />
          <FeatureCard
            icon={Target}
            title="Habits"
            description="Daily habit tracking that keeps clients accountable. Pick from a ready-made library or build your own."
            preview={<HabitsPreview />}
          />
        </div>

        <figure className="mt-16 flex flex-col items-center text-center">
          <Quote className="h-6 w-6 text-accent-lime" />
          <blockquote className="mt-4 max-w-3xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            "I've used a lot of coaching platforms and this is the only one
            where I've been really happy with how it works. Everything is in one
            place."
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 text-sm">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-purple-500 font-bold text-ink-950">
              VM
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Vegard Mikalsen</div>
              <div className="text-white/55">VM Coaching</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function TrainingPreview() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-3">
      {[
        { name: "Superset A", e: ["Bench", "Row"], reps: "4×8" },
        { name: "Superset B", e: ["Press", "Pull"], reps: "3×10" },
        { name: "AMRAP 8m", e: ["Squat", "Burpee"], reps: "—" },
      ].map((b) => (
        <div
          key={b.name}
          className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.025] px-2.5 py-2"
        >
          <div className="flex items-center gap-2">
            <Flame className="h-3.5 w-3.5 text-accent-lime" />
            <span className="text-xs font-medium">{b.name}</span>
            <span className="text-[10px] text-white/50">
              {b.e.join(" · ")}
            </span>
          </div>
          <span className="text-[10px] text-white/55">{b.reps}</span>
        </div>
      ))}
    </div>
  );
}

function NutritionPreview() {
  const macros = [
    { l: "Protein", v: 168, t: 200, c: "bg-accent-lime" },
    { l: "Carbs", v: 220, t: 280, c: "bg-brand-400" },
    { l: "Fats", v: 62, t: 80, c: "bg-accent-violet" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[10px] text-white/50">Today</div>
          <div className="font-display text-lg font-semibold">1,840 kcal</div>
        </div>
        <span className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
          on plan
        </span>
      </div>
      <div className="space-y-2">
        {macros.map((m) => (
          <div key={m.l}>
            <div className="flex justify-between text-[10px] text-white/55">
              <span>{m.l}</span>
              <span>
                {m.v}/{m.t}g
              </span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full ${m.c}`}
                style={{ width: `${(m.v / m.t) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckinsPreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      {[
        { n: "Sarah W.", c: "from-pink-400 to-fuchsia-500", t: "Week 4 · -1.2lb" },
        { n: "Conor R.", c: "from-sky-400 to-indigo-500", t: "Week 8 · macros" },
        { n: "Alice M.", c: "from-emerald-400 to-teal-500", t: "Bi-weekly" },
      ].map((c) => (
        <div
          key={c.n}
          className="flex items-center gap-2.5 rounded-md border border-white/[0.05] bg-white/[0.025] px-2.5 py-2"
        >
          <div
            className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${c.c} text-[10px] font-bold text-ink-950`}
          >
            {c.n
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">{c.n}</div>
            <div className="text-[10px] text-white/55">{c.t}</div>
          </div>
          <span className="chip">Review</span>
        </div>
      ))}
    </div>
  );
}

function HabitsPreview() {
  return (
    <div className="flex h-full flex-wrap content-start gap-1.5 p-4">
      {[
        "10k steps",
        "Hydrate 3L",
        "Sleep 8h",
        "Stretch",
        "Protein hit",
        "Mobility",
        "No alcohol",
        "Read 15m",
      ].map((h, i) => (
        <span
          key={h}
          className={`chip ${
            i % 3 !== 2 ? "border-brand-500/40 bg-brand-500/10 text-brand-200" : ""
          }`}
        >
          <CheckCircle2
            className={`h-3 w-3 ${
              i % 3 !== 2 ? "text-brand-300" : "text-white/30"
            }`}
          />
          {h}
        </span>
      ))}
    </div>
  );
}
