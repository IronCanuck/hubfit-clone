"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Apple,
  CalendarCheck,
  CheckCircle2,
  Dumbbell,
  Flame,
  MessageCircle,
  Trophy,
} from "lucide-react";

export function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="absolute inset-x-10 -top-10 -bottom-10 -z-10 rounded-[2.5rem] bg-gradient-to-b from-accent-lime/20 via-brand-500/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-ink-800/80 to-ink-900/80 p-3 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.04]" />
        </div>

        <div className="grid grid-cols-12 gap-3 rounded-2xl bg-ink-900 p-3">
          {/* Sidebar */}
          <aside className="col-span-3 hidden flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 lg:flex">
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] p-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-lime to-brand-400">
                <Dumbbell className="h-3.5 w-3.5 text-ink-950" />
              </div>
              <div className="text-xs font-semibold">My Coaching</div>
            </div>
            {[
              { icon: Activity, label: "Dashboard", active: true },
              { icon: Dumbbell, label: "Training" },
              { icon: Apple, label: "Nutrition" },
              { icon: CalendarCheck, label: "Check-ins" },
              { icon: Trophy, label: "Challenges" },
              { icon: MessageCircle, label: "Messages" },
            ].map((it) => (
              <div
                key={it.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                  it.active
                    ? "bg-white/[0.06] text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                <it.icon className="h-3.5 w-3.5" />
                {it.label}
              </div>
            ))}
            <div className="mt-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="text-[10px] uppercase tracking-wider text-white/45">
                Active clients
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">142</div>
              <div className="mt-1 text-[10px] text-brand-300">+12 this month</div>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="col-span-12 rounded-xl border border-white/[0.06] bg-gradient-to-br from-brand-700/20 via-ink-800 to-ink-900 p-4 sm:col-span-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-white/50">Today's session</div>
                    <div className="mt-0.5 font-display text-lg font-semibold">
                      Push Day · Upper Body
                    </div>
                  </div>
                  <span className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
                    <Flame className="h-3 w-3" /> 4 supersets
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {[
                    { name: "Bench Press", sets: "4 × 6", done: true },
                    { name: "Incline DB Press", sets: "3 × 8", done: true },
                    { name: "Cable Fly", sets: "3 × 12", done: false },
                    { name: "Tricep Pushdown", sets: "3 × 10", done: false },
                  ].map((ex, i) => (
                    <motion.div
                      key={ex.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 ${
                            ex.done ? "text-brand-300" : "text-white/20"
                          }`}
                        />
                        <span className="text-sm">{ex.name}</span>
                      </div>
                      <span className="text-xs text-white/55">{ex.sets}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="col-span-12 flex flex-col gap-3 sm:col-span-5"
              >
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/50">Macros today</div>
                    <span className="text-[10px] text-brand-300">on track</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { l: "Protein", v: 168, t: 200, c: "bg-accent-lime" },
                      { l: "Carbs", v: 220, t: 280, c: "bg-brand-400" },
                      { l: "Fats", v: 62, t: 80, c: "bg-accent-violet" },
                    ].map((m) => (
                      <div key={m.l}>
                        <div className="text-[10px] text-white/50">{m.l}</div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full ${m.c}`}
                            style={{ width: `${(m.v / m.t) * 100}%` }}
                          />
                        </div>
                        <div className="mt-1 text-[10px] text-white/65">
                          {m.v}/{m.t}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/50">Habits</div>
                    <span className="text-[10px] text-white/55">5 / 6</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {[
                      "10k steps",
                      "Hydrate 3L",
                      "Sleep 8h",
                      "Stretch",
                      "No alcohol",
                      "Read 15m",
                    ].map((h, i) => (
                      <span
                        key={h}
                        className={`chip ${
                          i < 5
                            ? "border-brand-500/40 bg-brand-500/10 text-brand-200"
                            : "opacity-60"
                        }`}
                      >
                        <CheckCircle2 className="h-3 w-3" /> {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <div className="text-xs text-white/50">Latest check-in</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-xs font-bold text-ink-950">
                      SW
                    </div>
                    <div>
                      <div className="text-sm font-medium">Sarah W.</div>
                      <div className="text-[11px] text-white/55">
                        "Week 4 — feeling strong, scale down 1.2lb."
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="absolute -left-2 top-24 hidden rounded-2xl border border-white/[0.08] bg-ink-800/90 px-4 py-3 shadow-2xl backdrop-blur md:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-white/45">
          Live community
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse-soft rounded-full bg-brand-300" />
          <span className="text-sm font-medium">312 online</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-2 bottom-12 hidden rounded-2xl border border-white/[0.08] bg-ink-800/90 px-4 py-3 shadow-2xl backdrop-blur md:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400">
            <Trophy className="h-3.5 w-3.5 text-ink-950" />
          </div>
          <div>
            <div className="text-xs text-white/55">Step challenge</div>
            <div className="text-sm font-semibold">+1,240 this week</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
