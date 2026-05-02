import {
  Clock,
  Copy,
  Dumbbell,
  Flame,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const PROGRAMS = [
  {
    name: "Push/Pull/Legs",
    desc: "Classic 6-day hypertrophy split with progressive overload.",
    weeks: 12,
    sessions: 72,
    clients: 38,
    tag: "Hypertrophy",
    color: "from-pink-400 to-fuchsia-500",
  },
  {
    name: "Hybrid Athlete",
    desc: "Strength + conditioning for athletes balancing both.",
    weeks: 16,
    sessions: 80,
    clients: 24,
    tag: "Hybrid",
    color: "from-sky-400 to-indigo-500",
  },
  {
    name: "Beginner Strength",
    desc: "Linear progression for first-time lifters.",
    weeks: 8,
    sessions: 24,
    clients: 22,
    tag: "Strength",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Mobility Prime",
    desc: "Daily mobility & recovery for desk-bound clients.",
    weeks: 4,
    sessions: 28,
    clients: 18,
    tag: "Mobility",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Fat Loss Focus",
    desc: "Conditioning-led with full-body strength on rest days.",
    weeks: 10,
    sessions: 50,
    clients: 30,
    tag: "Fat loss",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Powerbuild Advanced",
    desc: "Powerlifting peaks with bodybuilding accessories.",
    weeks: 14,
    sessions: 70,
    clients: 10,
    tag: "Strength",
    color: "from-violet-400 to-purple-500",
  },
];

const TODAYS_BLOCK = [
  { name: "Bench Press", sets: "4 × 6 @ 80%" },
  { name: "Incline DB Press", sets: "3 × 8" },
  { name: "Cable Fly", sets: "3 × 12" },
  { name: "Tricep Pushdown", sets: "3 × 10" },
  { name: "Lateral Raise", sets: "3 × 15" },
];

export default function TrainingPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Training programs"
        subtitle="Build, edit, and assign programs across your roster"
        actions={
          <>
            <button className="btn-secondary text-xs">
              <Copy className="h-3.5 w-3.5" /> Duplicate template
            </button>
            <button className="btn-primary text-xs">
              <Plus className="h-3.5 w-3.5" /> New program
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
          {PROGRAMS.map((p) => (
            <div key={p.name} className="card card-hover flex flex-col p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${p.color}`}
                  >
                    <Dumbbell className="h-5 w-5 text-ink-950" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{p.name}</div>
                    <span className="chip mt-1">{p.tag}</span>
                  </div>
                </div>
                <button className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-sm text-white/65">{p.desc}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">
                    Length
                  </div>
                  <div className="mt-0.5 font-semibold">{p.weeks} wks</div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">
                    Sessions
                  </div>
                  <div className="mt-0.5 font-semibold">{p.sessions}</div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">
                    Assigned
                  </div>
                  <div className="mt-0.5 font-semibold">{p.clients}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <button className="btn-secondary flex-1 text-xs">
                  Open builder
                </button>
                <button className="btn-primary text-xs">Assign</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="card flex flex-col gap-4 p-5">
            <div>
              <h2 className="display-h3 text-base">Today's session</h2>
              <p className="mt-1 text-sm text-white/55">
                Sarah Williams · Push Day
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
                <Flame className="h-3 w-3" /> 4 supersets
              </span>
              <span className="chip">
                <Clock className="h-3 w-3" /> ~52 min
              </span>
              <span className="chip">
                <Users className="h-3 w-3" /> Live
              </span>
            </div>

            <div className="space-y-2">
              {TODAYS_BLOCK.map((ex) => (
                <div
                  key={ex.name}
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2"
                >
                  <span className="text-sm">{ex.name}</span>
                  <span className="text-[11px] text-white/55">{ex.sets}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary justify-center">Open session</button>
          </div>

          <div className="card mt-4 p-5">
            <h3 className="display-h3 text-base">Exercise library</h3>
            <p className="mt-1 text-sm text-white/55">
              480 exercises · 92 demo videos
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "Push",
                "Pull",
                "Squat",
                "Hinge",
                "Carry",
                "Core",
                "Conditioning",
                "Mobility",
                "Plyo",
                "Olympic",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
