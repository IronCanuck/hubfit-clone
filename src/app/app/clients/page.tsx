import Link from "next/link";
import {
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";
import { NewTeamButton } from "@/components/app/NewTeamButton";

const CLIENTS = [
  {
    name: "Sarah Williams",
    plan: "12-Week Program",
    program: "Push/Pull/Legs",
    week: 4,
    progress: 72,
    status: "Active",
    color: "from-pink-400 to-fuchsia-500",
    last: "2m ago",
  },
  {
    name: "Conor Reilly",
    plan: "Monthly Coaching",
    program: "Hybrid Athlete",
    week: 8,
    progress: 64,
    status: "Active",
    color: "from-sky-400 to-indigo-500",
    last: "1h ago",
  },
  {
    name: "Alice Martin",
    plan: "Starter Pack",
    program: "Beginner Strength",
    week: 2,
    progress: 28,
    status: "Active",
    color: "from-emerald-400 to-teal-500",
    last: "3h ago",
  },
  {
    name: "Charlie Brown",
    plan: "Premium Plan",
    program: "Advanced Powerbuild",
    week: 12,
    progress: 96,
    status: "Renewing",
    color: "from-amber-400 to-orange-500",
    last: "Yesterday",
  },
  {
    name: "Chloe Tan",
    plan: "Monthly Coaching",
    program: "Fat Loss Focus",
    week: 6,
    progress: 50,
    status: "Active",
    color: "from-rose-400 to-pink-500",
    last: "5h ago",
  },
  {
    name: "John Peters",
    plan: "12-Week Program",
    program: "Mass Builder",
    week: 1,
    progress: 8,
    status: "Onboarding",
    color: "from-violet-400 to-purple-500",
    last: "Just joined",
  },
  {
    name: "Maya Singh",
    plan: "Monthly Coaching",
    program: "Mobility Prime",
    week: 14,
    progress: 100,
    status: "Paused",
    color: "from-teal-400 to-cyan-500",
    last: "2 days ago",
  },
  {
    name: "Diego Alvarez",
    plan: "Premium Plan",
    program: "Hypertrophy 101",
    week: 5,
    progress: 42,
    status: "Active",
    color: "from-lime-300 to-emerald-400",
    last: "30m ago",
  },
];

function statusStyle(s: string) {
  switch (s) {
    case "Active":
      return "bg-brand-500/10 text-brand-300 border-brand-500/30";
    case "Renewing":
      return "bg-amber-500/10 text-amber-300 border-amber-500/30";
    case "Onboarding":
      return "bg-violet-500/10 text-violet-300 border-violet-500/30";
    case "Paused":
      return "bg-white/[0.04] text-white/55 border-white/10";
    default:
      return "bg-white/[0.04] text-white/55 border-white/10";
  }
}

export default function ClientsPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Clients"
        subtitle="142 active · 8 onboarding · 4 paused"
        actions={
          <>
            <button className="btn-secondary text-xs">
              <Filter className="h-3.5 w-3.5" /> Filter
            </button>
            <NewTeamButton />
            <button className="btn-primary text-xs">
              <Plus className="h-3.5 w-3.5" /> New client
            </button>
          </>
        }
      />

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-4">
        {[
          { l: "Active", v: "142", c: "text-brand-300" },
          { l: "Onboarding", v: "8", c: "text-violet-300" },
          { l: "Renewing", v: "4", c: "text-amber-300" },
          { l: "Avg. retention", v: "9.2 mo", c: "text-accent-lime" },
        ].map((s) => (
          <div key={s.l} className="card p-4">
            <div className="text-[11px] uppercase tracking-wider text-white/45">
              {s.l}
            </div>
            <div className={`mt-1 font-display text-2xl font-semibold ${s.c}`}>
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-white/[0.06] p-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2">
            <Search className="h-4 w-4 text-white/45" />
            <input
              placeholder="Search clients by name, email, program…"
              className="flex-1 bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {["All", "Active", "Onboarding", "Renewing", "Paused"].map(
              (t, i) => (
                <button
                  key={t}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    i === 0
                      ? "bg-white/[0.08] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {t}
                </button>
              )
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-left text-[11px] uppercase tracking-wider text-white/45">
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Plan</th>
                <th className="px-4 py-3 font-medium">Program</th>
                <th className="px-4 py-3 font-medium">Progress</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Last active</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {CLIENTS.map((c) => (
                <tr key={c.name} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${c.color} text-xs font-bold text-ink-950`}
                      >
                        {c.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-white">{c.name}</div>
                        <div className="text-[11px] text-white/45">
                          Week {c.week}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-white/75">{c.plan}</td>
                  <td className="px-4 py-3.5 text-white/65">{c.program}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-accent-lime to-brand-400"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <span className="w-9 text-[11px] tabular-nums text-white/65">
                        {c.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium ${statusStyle(
                        c.status
                      )}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-[11px] text-white/55">
                    {c.last}
                  </td>
                  <td className="px-4 py-3.5">
                    <button
                      aria-label="More"
                      className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3 text-xs text-white/55">
          <div>Showing 1–8 of 142 clients</div>
          <div className="flex items-center gap-1">
            <button className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 hover:bg-white/[0.08]">
              Prev
            </button>
            <button className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 hover:bg-white/[0.08]">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card p-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent-lime" />
            <h3 className="display-h3 text-base">Growth</h3>
          </div>
          <p className="mt-1 text-sm text-white/55">
            Net new clients per month
          </p>
          <div className="mt-5 flex h-32 items-end gap-2">
            {[6, 8, 7, 11, 14, 12, 18, 22].map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-accent-violet/40 to-accent-violet/90"
                style={{ height: `${(v / 25) * 100}%` }}
              />
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h3 className="display-h3 text-base">Top performers</h3>
          <p className="mt-1 text-sm text-white/55">
            Most consistent clients this month
          </p>
          <div className="mt-5 space-y-2">
            {CLIENTS.slice(0, 4).map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
              >
                <div
                  className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${c.color} text-[10px] font-bold text-ink-950`}
                >
                  {c.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div className="text-sm font-medium">{c.name}</div>
                <div className="ml-auto text-[10px] text-brand-300">
                  {c.progress}% adherence
                </div>
              </div>
            ))}
          </div>
          <Link href="#" className="btn-secondary mt-5 justify-center text-xs">
            View leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}
