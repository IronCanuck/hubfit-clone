import {
  Image as ImageIcon,
  Mic,
  Paperclip,
  Search,
  Send,
  Smile,
  CheckCircle2,
} from "lucide-react";

const THREADS = [
  {
    n: "Sarah Williams",
    last: "Just nailed my bench PR 🎉",
    time: "2m",
    unread: 1,
    color: "from-pink-400 to-fuchsia-500",
    active: true,
  },
  {
    n: "Conor Reilly",
    last: "Quick Q on tomorrow's session",
    time: "12m",
    unread: 1,
    color: "from-sky-400 to-indigo-500",
  },
  {
    n: "Alice Martin",
    last: "Loving the new meal plan!",
    time: "1h",
    unread: 0,
    color: "from-emerald-400 to-teal-500",
  },
  {
    n: "12-Week Crew",
    last: "Charlie hit a new PR 💪",
    time: "2h",
    unread: 2,
    color: "from-amber-400 to-orange-500",
    group: true,
  },
  {
    n: "Charlie Brown",
    last: "Renewal sorted, thanks!",
    time: "Yesterday",
    unread: 0,
    color: "from-violet-400 to-purple-500",
  },
  {
    n: "Chloe Tan",
    last: "How's the macros split?",
    time: "Yesterday",
    unread: 0,
    color: "from-rose-400 to-pink-500",
  },
  {
    n: "Diego Alvarez",
    last: "Booking session for Sat",
    time: "2d",
    unread: 0,
    color: "from-lime-300 to-emerald-400",
  },
];

export default function MessagesPage() {
  return (
    <div className="container-max">
      <div className="card flex h-[calc(100vh-7.5rem)] overflow-hidden">
        {/* Threads */}
        <aside className="hidden w-72 shrink-0 flex-col border-r border-white/[0.06] sm:flex">
          <div className="border-b border-white/[0.06] p-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
              <Search className="h-4 w-4 text-white/45" />
              <input
                placeholder="Search messages…"
                className="flex-1 bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {THREADS.map((t) => (
              <button
                key={t.n}
                className={`flex w-full items-center gap-3 border-b border-white/[0.04] px-3 py-3 text-left transition ${
                  t.active
                    ? "bg-white/[0.04]"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-ink-950`}
                >
                  {t.n
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm font-semibold">
                      {t.n}
                    </span>
                    <span className="shrink-0 text-[10px] text-white/45">
                      {t.time}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="truncate text-[11px] text-white/55">
                      {t.last}
                    </span>
                    {t.unread ? (
                      <span className="ml-auto grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-lime text-[9px] font-bold text-ink-950">
                        {t.unread}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Conversation */}
        <section className="flex flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-xs font-bold text-ink-950">
                SW
              </div>
              <div>
                <div className="text-sm font-semibold">Sarah Williams</div>
                <div className="text-[11px] text-white/55">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-300" />
                  Active now · Week 4 · Push/Pull/Legs
                </div>
              </div>
            </div>
            <button className="btn-secondary text-xs">View profile</button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-6">
            <div className="text-center text-[10px] uppercase tracking-wider text-white/35">
              Today
            </div>

            <Bubble side="left">
              <p>Coach! Just finished my session 🎉</p>
            </Bubble>
            <Bubble side="left">
              <p>Hit a PR on bench — 5lbs over my last best 💪</p>
            </Bubble>

            <Bubble side="right">
              <p>That's massive Sarah! How did the warmup feel today?</p>
            </Bubble>
            <Bubble side="right">
              <p>
                Let's add 5lb to the working sets next session and keep your
                accessories the same.
              </p>
            </Bubble>

            <Bubble side="left">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-accent-lime" />
                <div className="flex items-end gap-0.5">
                  {[6, 10, 14, 8, 12, 16, 10, 6, 14, 8, 12, 16, 10].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="w-0.5 rounded-full bg-white/70"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>
                <span className="text-[10px] text-white/55">0:18</span>
              </div>
            </Bubble>

            <Bubble side="right">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-ink-950" />
                <span className="text-xs font-semibold">Session reviewed</span>
              </div>
              <p className="mt-1.5 text-[11px] text-ink-950/80">
                Logged · Notes added · See you Thursday.
              </p>
            </Bubble>
          </div>

          <div className="border-t border-white/[0.06] p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
              <button className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05]">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05]">
                <ImageIcon className="h-4 w-4" />
              </button>
              <input
                placeholder="Message Sarah…"
                className="flex-1 bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05]">
                <Smile className="h-4 w-4" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05]">
                <Mic className="h-4 w-4" />
              </button>
              <button
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-full bg-accent-lime text-ink-950 hover:brightness-110"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "left" | "right";
  children: React.ReactNode;
}) {
  if (side === "left") {
    return (
      <div className="flex max-w-md items-end gap-2">
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-[9px] font-bold text-ink-950">
          SW
        </div>
        <div className="rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.04] px-3.5 py-2 text-sm">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="ml-auto flex max-w-md items-end justify-end gap-2">
      <div className="rounded-2xl rounded-br-sm bg-accent-lime px-3.5 py-2 text-sm font-medium text-ink-950">
        {children}
      </div>
    </div>
  );
}
