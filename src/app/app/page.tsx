import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  Flame,
  MessageCircle,
  Plus,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/app/PageHeader";
import { cn } from "@/lib/cn";
import { IconChrome, BlueprintCorners } from "@/components/lab/IconChrome";

export default function DashboardPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Welcome back, Cody 👋"
        subtitle="Here's what's happening across your coaching business today."
        actions={
          <>
            <Link href="/app/clients" className="btn-secondary text-xs">
              View clients
            </Link>
            <Link href="/app/clients" className="btn-primary text-xs">
              <Plus className="h-3.5 w-3.5" /> New client
            </Link>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Active clients",
            value: "142",
            change: "+12",
            up: true,
            icon: Users,
            tone: "lime" as const,
            id: "S-01",
          },
          {
            label: "MRR",
            value: "$12,840",
            change: "+8.4%",
            up: true,
            icon: TrendingUp,
            tone: "mint" as const,
            id: "S-02",
          },
          {
            label: "Pending check-ins",
            value: "8",
            change: "−3",
            up: false,
            icon: CalendarCheck,
            tone: "violet" as const,
            id: "S-03",
          },
          {
            label: "Sessions this week",
            value: "612",
            change: "+19%",
            up: true,
            icon: Dumbbell,
            tone: "lime" as const,
            id: "S-04",
          },
        ].map((s) => (
          <div key={s.label} className="card relative p-5">
            <BlueprintCorners colorClass="border-white/15" inset={10} size={8} />
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                  {s.label}
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  {s.value}
                </div>
              </div>
              <IconChrome
                icon={<s.icon className="h-full w-full" strokeWidth={1.6} />}
                tone={s.tone}
                size="md"
                label={s.id}
              />
            </div>
            <div
              className={cn(
                "mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                s.up
                  ? "bg-brand-500/10 text-brand-300"
                  : "bg-rose-500/10 text-rose-300"
              )}
            >
              {s.up ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {s.change}
              <span className="text-white/45">vs last week</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Activity & schedule */}
        <div className="card p-5 lg:col-span-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="display-h3">Today's coaching schedule</h2>
              <p className="mt-1 text-sm text-white/55">
                7 sessions · 4 check-ins · 3 messages flagged
              </p>
            </div>
            <Link
              href="/app/checkins"
              className="text-xs text-accent-lime hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-5 space-y-2.5">
            {[
              {
                t: "8:00 AM",
                title: "Sarah W. · Push Day",
                tag: "Live coaching",
                icon: Dumbbell,
                color: "from-pink-400 to-fuchsia-500",
              },
              {
                t: "9:30 AM",
                title: "Conor R. · Bi-weekly check-in",
                tag: "Review needed",
                icon: CalendarCheck,
                color: "from-sky-400 to-indigo-500",
              },
              {
                t: "11:00 AM",
                title: "Alice M. · Macro review",
                tag: "Nutrition",
                icon: Activity,
                color: "from-emerald-400 to-teal-500",
              },
              {
                t: "1:00 PM",
                title: "Charlie B. · Mobility flow",
                tag: "On-demand",
                icon: Flame,
                color: "from-amber-400 to-orange-500",
              },
              {
                t: "3:30 PM",
                title: "Chloe T. · Welcome onboarding",
                tag: "New client",
                icon: Trophy,
                color: "from-violet-400 to-purple-500",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
              >
                <div className="w-16 text-xs font-medium tabular-nums text-white/55">
                  {s.t}
                </div>
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${s.color}`}
                >
                  <s.icon className="h-4 w-4 text-ink-950" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{s.title}</div>
                  <div className="text-[11px] text-white/55">{s.tag}</div>
                </div>
                <button className="grid h-7 w-7 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue card */}
        <div className="card flex flex-col p-5 lg:col-span-4">
          <div>
            <h2 className="display-h3">Revenue</h2>
            <p className="mt-1 text-sm text-white/55">Last 7 months</p>
          </div>
          <div className="mt-5 flex items-baseline gap-2">
            <div className="font-display text-3xl font-semibold">$48,240</div>
            <span className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
              +12%
            </span>
          </div>
          <div className="mt-5 flex h-32 items-end gap-1.5">
            {[18, 24, 22, 30, 28, 36, 44].map((v, i) => (
              <div key={i} className="group relative flex-1">
                <div
                  className="rounded-t bg-gradient-to-t from-brand-500/40 to-accent-lime/80 transition group-hover:brightness-125"
                  style={{ height: `${(v / 50) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-white/45">
            {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <Link
            href="#"
            className="btn-secondary mt-5 justify-center text-xs"
          >
            Open billing dashboard
          </Link>
        </div>

        {/* Pending check-ins */}
        <div className="card p-5 lg:col-span-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="display-h3">Check-ins to review</h2>
              <p className="mt-1 text-sm text-white/55">
                8 new responses waiting
              </p>
            </div>
            <Link
              href="/app/checkins"
              className="text-xs text-accent-lime hover:underline"
            >
              Open inbox →
            </Link>
          </div>
          <div className="mt-5 space-y-2">
            {[
              {
                n: "Sarah W.",
                w: "Week 4",
                d: "Down 1.2lb · Macros on point",
                c: "from-pink-400 to-fuchsia-500",
              },
              {
                n: "Conor R.",
                w: "Week 8",
                d: "Sleep dipped · Stress flagged",
                c: "from-sky-400 to-indigo-500",
              },
              {
                n: "Alice M.",
                w: "Week 2",
                d: "Loving the program · Q on cardio",
                c: "from-emerald-400 to-teal-500",
              },
              {
                n: "Charlie B.",
                w: "Week 12",
                d: "Hit PR · Wants new program",
                c: "from-amber-400 to-orange-500",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${c.c} text-xs font-bold text-ink-950`}
                >
                  {c.n
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium">{c.n}</span>
                    <span className="text-[10px] text-white/55">{c.w}</span>
                  </div>
                  <div className="truncate text-[11px] text-white/55">{c.d}</div>
                </div>
                <button className="chip border-brand-500/40 bg-brand-500/10 text-[10px] text-brand-200">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="card p-5 lg:col-span-4">
          <div className="flex items-center justify-between">
            <h2 className="display-h3">Messages</h2>
            <span className="chip">3 new</span>
          </div>
          <div className="mt-5 space-y-2">
            {[
              { n: "Sarah W.", m: "Just nailed my bench PR 🎉", c: "from-pink-400 to-fuchsia-500", time: "2m" },
              { n: "Conor R.", m: "Quick Q on tomorrow's session…", c: "from-sky-400 to-indigo-500", time: "12m" },
              { n: "Alice M.", m: "Loving the new meal plan!", c: "from-emerald-400 to-teal-500", time: "1h" },
              { n: "Group: 12-Week Crew", m: "Charlie hit a new PR 💪", c: "from-amber-400 to-orange-500", time: "2h" },
            ].map((c) => (
              <Link
                key={c.n}
                href="/app/messages"
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5 hover:bg-white/[0.05]"
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${c.c} text-xs font-bold text-ink-950`}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm font-medium">{c.n}</span>
                    <span className="text-[10px] text-white/45">{c.time}</span>
                  </div>
                  <div className="truncate text-[11px] text-white/55">{c.m}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Live challenge */}
        <div className="card p-5 lg:col-span-3">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-accent-lime" />
            <h2 className="display-h3 text-base">March Step Challenge</h2>
          </div>
          <p className="mt-1 text-xs text-white/55">124 clients · 8 days left</p>
          <div className="mt-5 space-y-2">
            {[
              { p: 1, n: "Sarah W.", v: "182,400", c: "from-pink-400 to-fuchsia-500" },
              { p: 2, n: "Conor R.", v: "171,920", c: "from-sky-400 to-indigo-500" },
              { p: 3, n: "Alice M.", v: "168,300", c: "from-emerald-400 to-teal-500" },
              { p: 4, n: "Charlie B.", v: "159,820", c: "from-amber-400 to-orange-500" },
            ].map((u) => (
              <div
                key={u.n}
                className="flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.025] px-2 py-1.5"
              >
                <span className="w-4 text-[10px] font-bold text-white/55">
                  #{u.p}
                </span>
                <div
                  className={`grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${u.c} text-[9px] font-bold text-ink-950`}
                >
                  {u.n.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="text-[11px] font-medium">{u.n}</div>
                <div className="ml-auto text-[10px] tabular-nums text-white/65">
                  {u.v}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/app/challenges"
            className="btn-secondary mt-5 justify-center text-xs"
          >
            Open challenge
          </Link>
        </div>

        {/* Habits */}
        <div className="card p-5 lg:col-span-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="display-h3">Habits this week</h2>
              <p className="mt-1 text-sm text-white/55">
                Aggregate completion across active clients
              </p>
            </div>
            <Link href="#" className="text-xs text-accent-lime hover:underline">
              View report →
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { l: "10k steps", v: 88 },
              { l: "Hydrate 3L", v: 76 },
              { l: "Sleep 8h", v: 64 },
              { l: "Stretch", v: 71 },
              { l: "Protein hit", v: 92 },
              { l: "Mobility", v: 58 },
            ].map((h) => (
              <div
                key={h.l}
                className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-300" />
                  <span className="text-xs font-medium">{h.l}</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-lg font-semibold">
                    {h.v}%
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-accent-lime to-brand-400"
                    style={{ width: `${h.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
