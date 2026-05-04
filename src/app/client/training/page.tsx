import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock,
  Dumbbell,
  Flame,
  Play,
  Video,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const WEEK = [
  {
    day: "Mon",
    date: "May 4",
    name: "Push · Upper Strength",
    duration: "55 min",
    state: "today",
    blocks: 5,
  },
  {
    day: "Tue",
    date: "May 5",
    name: "Lower · Squat focus",
    duration: "60 min",
    state: "upcoming",
    blocks: 6,
  },
  {
    day: "Wed",
    date: "May 6",
    name: "Active recovery walk",
    duration: "40 min",
    state: "upcoming",
    blocks: 1,
  },
  {
    day: "Thu",
    date: "May 7",
    name: "Pull · Back & biceps",
    duration: "55 min",
    state: "upcoming",
    blocks: 6,
  },
  {
    day: "Fri",
    date: "May 8",
    name: "Lower · Deadlift",
    duration: "65 min",
    state: "upcoming",
    blocks: 5,
  },
  {
    day: "Sat",
    date: "May 9",
    name: "Conditioning circuit",
    duration: "30 min",
    state: "upcoming",
    blocks: 4,
  },
  {
    day: "Sun",
    date: "May 10",
    name: "Rest day",
    duration: "—",
    state: "rest",
    blocks: 0,
  },
];

const TODAY_EXERCISES = [
  {
    name: "Bench Press",
    target: "4 × 6 @ 62.5kg",
    rest: "2:30",
    note: "Pause briefly at the chest. Stop at 6 even if you feel more.",
    sets: [
      { reps: 6, weight: 62.5, done: true },
      { reps: 6, weight: 62.5, done: true },
      { reps: 6, weight: 62.5, done: false },
      { reps: 6, weight: 62.5, done: false },
    ],
  },
  {
    name: "Overhead Press",
    target: "3 × 8 @ 32.5kg",
    rest: "2:00",
    note: "Brace hard, ribs down, no leg drive.",
    sets: [
      { reps: 8, weight: 32.5, done: false },
      { reps: 8, weight: 32.5, done: false },
      { reps: 8, weight: 32.5, done: false },
    ],
  },
  {
    name: "Incline DB Press",
    target: "3 × 10 @ 20kg",
    rest: "1:30",
    sets: [
      { reps: 10, weight: 20, done: false },
      { reps: 10, weight: 20, done: false },
      { reps: 10, weight: 20, done: false },
    ],
  },
  {
    name: "Cable Fly",
    target: "3 × 12 @ 12kg",
    rest: "1:00",
    sets: [
      { reps: 12, weight: 12, done: false },
      { reps: 12, weight: 12, done: false },
      { reps: 12, weight: 12, done: false },
    ],
  },
  {
    name: "Tricep Pushdown",
    target: "3 × 12 @ 22kg",
    rest: "1:00",
    sets: [
      { reps: 12, weight: 22, done: false },
      { reps: 12, weight: 22, done: false },
      { reps: 12, weight: 22, done: false },
    ],
  },
];

export default function ClientTrainingPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Training"
        subtitle="Week 4 of 12 · Push/Pull/Legs"
        actions={
          <>
            <Link href="#" className="btn-secondary text-xs">
              <Video className="h-3.5 w-3.5" />
              Exercise demos
            </Link>
            <Link href="#" className="btn-primary text-xs">
              <Play className="h-3.5 w-3.5" />
              Start today
            </Link>
          </>
        }
      />

      {/* Week strip */}
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {WEEK.map((d) => {
          const isToday = d.state === "today";
          const isRest = d.state === "rest";
          return (
            <div
              key={d.day}
              className={`rounded-2xl border p-3.5 transition ${
                isToday
                  ? "border-accent-lime/40 bg-accent-lime/[0.06]"
                  : isRest
                  ? "border-white/[0.04] bg-white/[0.02] text-white/55"
                  : "border-white/[0.06] bg-white/[0.025] hover:border-white/[0.12]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {d.day}
                </div>
                <div className="text-[10px] text-white/45">{d.date}</div>
              </div>
              <div className="mt-2 text-sm font-medium leading-tight">
                {d.name}
              </div>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-white/55">
                <Clock className="h-3 w-3" />
                {d.duration}
                {!isRest ? (
                  <span className="ml-auto rounded-full bg-white/[0.05] px-1.5 py-0.5 text-[10px] tabular-nums">
                    {d.blocks} blk
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Today header */}
      <div className="card mb-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-lime to-brand-400 text-ink-950">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-white/45">
              Today · Day 1
            </div>
            <div className="display-h3 text-base">
              Push · Upper Strength
            </div>
            <div className="mt-1 flex items-center gap-3 text-[11px] text-white/55">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> ~55 min
              </span>
              <span className="flex items-center gap-1">
                <Flame className="h-3 w-3 text-amber-300" /> Hard intensity
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn-secondary text-xs">Swap workout</button>
          <Link href="#" className="btn-primary text-xs">
            <Play className="h-3.5 w-3.5" />
            Begin
          </Link>
        </div>
      </div>

      {/* Exercise list */}
      <div className="space-y-4">
        {TODAY_EXERCISES.map((ex, idx) => (
          <div key={ex.name} className="card overflow-hidden">
            <div className="flex flex-col gap-3 border-b border-white/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.05] text-[11px] font-semibold text-white/70">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold">{ex.name}</div>
                  <div className="text-[11px] text-white/55">
                    {ex.target} · rest {ex.rest}
                  </div>
                </div>
              </div>
              <button className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/85 hover:bg-white/[0.08]">
                <Video className="mr-1.5 inline h-3 w-3" />
                Watch demo
              </button>
            </div>

            {ex.note ? (
              <div className="border-b border-white/[0.06] bg-white/[0.015] px-4 py-2.5 text-[11px] text-white/65">
                <span className="font-semibold text-white/80">Coach note:</span>{" "}
                {ex.note}
              </div>
            ) : null}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-wider text-white/45">
                    <th className="px-4 py-2.5 font-medium">Set</th>
                    <th className="px-4 py-2.5 font-medium">Target reps</th>
                    <th className="px-4 py-2.5 font-medium">Weight (kg)</th>
                    <th className="px-4 py-2.5 font-medium">RPE</th>
                    <th className="px-4 py-2.5 font-medium">Done</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {ex.sets.map((s, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="px-4 py-3 text-[11px] text-white/55">
                        Set {i + 1}
                      </td>
                      <td className="px-4 py-3">
                        <input
                          defaultValue={s.reps}
                          className="w-16 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-sm tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-lime/40"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          defaultValue={s.weight}
                          className="w-20 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-sm tabular-nums focus:outline-none focus:ring-1 focus:ring-accent-lime/40"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          defaultValue=""
                          className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-sm focus:outline-none"
                        >
                          <option value="">—</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        {s.done ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2 py-0.5 text-[11px] font-medium text-brand-300">
                            <CheckCircle2 className="h-3 w-3" />
                            Logged
                          </span>
                        ) : (
                          <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-white/70 hover:bg-white/[0.08]">
                            <Circle className="h-3 w-3" />
                            Log
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Link
          href="/client"
          className="btn-secondary text-xs"
        >
          Back to today
        </Link>
        <button className="btn-primary text-xs">
          Finish workout
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Up next */}
      <div className="mt-10">
        <h3 className="display-h3 text-base">Up next this week</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WEEK.filter((w) => w.state === "upcoming")
            .slice(0, 3)
            .map((w) => (
              <Link
                key={w.day}
                href="#"
                className="card card-hover flex items-center gap-4 p-4"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05]">
                  <Dumbbell className="h-4 w-4 text-white/65" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-white/45">
                    {w.day} · {w.date}
                  </div>
                  <div className="text-sm font-medium">{w.name}</div>
                  <div className="text-[11px] text-white/55">
                    {w.duration} · {w.blocks} blocks
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-white/35" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
