import { CheckCircle2, ChevronRight, Clock, Filter } from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const CHECKINS = [
  {
    n: "Sarah Williams",
    w: "Week 4",
    body: "Down 1.2lb · macros on point · feeling strong on Push Day. Asking about adding cardio.",
    color: "from-pink-400 to-fuchsia-500",
    when: "2h ago",
    sentiment: "positive",
  },
  {
    n: "Conor Reilly",
    w: "Week 8",
    body: "Sleep dipped to 5.5h average · stress at work spiked · weight up 0.8lb.",
    color: "from-sky-400 to-indigo-500",
    when: "3h ago",
    sentiment: "watch",
  },
  {
    n: "Alice Martin",
    w: "Week 2",
    body: "Loving the program · hit all sessions · Q on whether to add a 4th day.",
    color: "from-emerald-400 to-teal-500",
    when: "5h ago",
    sentiment: "positive",
  },
  {
    n: "Charlie Brown",
    w: "Week 12",
    body: "Hit deadlift PR (440lb) · ready for the next program · wants powerbuild.",
    color: "from-amber-400 to-orange-500",
    when: "8h ago",
    sentiment: "positive",
  },
  {
    n: "Chloe Tan",
    w: "Week 6",
    body: "Macros tracked all 7 days · weight stable · flagging knee discomfort.",
    color: "from-rose-400 to-pink-500",
    when: "1d ago",
    sentiment: "watch",
  },
];

const sentimentStyle: Record<string, string> = {
  positive: "bg-brand-500/10 text-brand-300 border-brand-500/30",
  watch: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  alert: "bg-rose-500/10 text-rose-300 border-rose-500/30",
};

export default function CheckinsPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Check-ins"
        subtitle="8 new responses · 4 awaiting first reply"
        actions={
          <button className="btn-secondary text-xs">
            <Filter className="h-3.5 w-3.5" /> Filter
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-1 border-b border-white/[0.06] p-3">
              {["Inbox", "Reviewed", "Scheduled", "Templates"].map((t, i) => (
                <button
                  key={t}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    i === 0
                      ? "bg-white/[0.08] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="divide-y divide-white/[0.04]">
              {CHECKINS.map((c) => (
                <article
                  key={c.n}
                  className="flex flex-col gap-3 p-5 hover:bg-white/[0.02] sm:flex-row"
                >
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${c.color} text-xs font-bold text-ink-950`}
                  >
                    {c.n.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold text-white">{c.n}</span>
                      <span className="text-[11px] text-white/55">{c.w}</span>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${sentimentStyle[c.sentiment]}`}
                      >
                        {c.sentiment}
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-white/45">
                        <Clock className="h-3 w-3" /> {c.when}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/75">{c.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button className="btn-primary text-xs">
                        Reply & mark reviewed
                      </button>
                      <button className="btn-secondary text-xs">
                        Open profile
                      </button>
                      <button className="btn-secondary text-xs">
                        Adjust program
                      </button>
                    </div>
                  </div>
                  <ChevronRight className="ml-auto hidden h-4 w-4 text-white/35 sm:block" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-4">
          <div className="card p-5">
            <h3 className="display-h3 text-base">This week</h3>
            <div className="mt-4 space-y-3">
              {[
                { l: "Sent", v: 84, c: "bg-accent-lime" },
                { l: "Completed", v: 76, c: "bg-brand-400" },
                { l: "Reviewed", v: 68, c: "bg-accent-violet" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/65">{s.l}</span>
                    <span className="font-semibold tabular-nums">{s.v}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full ${s.c}`}
                      style={{ width: `${(s.v / 84) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="display-h3 text-base">Cadence</h3>
            <p className="mt-1 text-sm text-white/55">
              Set how often clients check in
            </p>
            <div className="mt-4 space-y-2">
              {[
                { l: "Daily", v: 22 },
                { l: "Weekly", v: 88, active: true },
                { l: "Bi-weekly", v: 24 },
                { l: "Monthly", v: 8 },
              ].map((row) => (
                <div
                  key={row.l}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
                    row.active
                      ? "border-accent-lime/40 bg-accent-lime/[0.06] text-white"
                      : "border-white/[0.06] bg-white/[0.025] text-white/75"
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={`h-3.5 w-3.5 ${
                        row.active ? "text-accent-lime" : "text-white/30"
                      }`}
                    />
                    {row.l}
                  </div>
                  <span className="text-[11px] text-white/55">
                    {row.v} clients
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
