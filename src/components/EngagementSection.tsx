import { MessageSquareText, Users2, Trophy, Heart, Mic, ImageIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";

export function EngagementSection() {
  return (
    <section id="engagement" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-radial-spot opacity-60" />
      <div className="container-max container-px">
        <SectionHeader
          eyebrow="Engagement"
          title={
            <>
              Keep clients{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                coming back
              </span>
            </>
          }
          description="Build a connected coaching experience with community, challenges, and messaging that drives retention and results."
          primaryCta={{ label: "Start for free", href: "#start" }}
          secondaryCta={{ label: "Explore engagement", href: "#" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <FeatureCard
            icon={Users2}
            title="Community"
            description="An in-app community feed with scheduled posts, polls, reactions, and threads. No Facebook groups needed."
            preview={<CommunityPreview />}
          />
          <FeatureCard
            icon={Trophy}
            title="Challenges"
            description="Launch fitness challenges with live leaderboards, milestone badges, and automatic progress tracking."
            preview={<ChallengesPreview />}
          />
          <FeatureCard
            icon={MessageSquareText}
            title="Messaging"
            description="Chat, voice notes, polls, GIFs, and group threads. Everything you need to stay connected with every client."
            preview={<MessagingPreview />}
          />
        </div>
      </div>
    </section>
  );
}

function CommunityPreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="rounded-md border border-white/[0.05] bg-white/[0.025] p-2.5">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[9px] font-bold text-ink-950">
            JA
          </div>
          <div className="text-[10px] font-medium">Jesse · 2h</div>
        </div>
        <p className="mt-1.5 text-[11px] text-white/75">
          Crushed week 4 strength tests — share your numbers below 💪
        </p>
        <div className="mt-2 flex items-center gap-3 text-[10px] text-white/55">
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3 w-3 text-rose-400" /> 124
          </span>
          <span>32 replies</span>
        </div>
      </div>
      <div className="rounded-md border border-white/[0.05] bg-white/[0.025] p-2.5">
        <div className="text-[10px] font-medium">Poll · Best post-workout?</div>
        <div className="mt-1.5 space-y-1">
          {[
            { l: "Whey + banana", v: 64 },
            { l: "Greek yogurt", v: 22 },
            { l: "Smoothie", v: 14 },
          ].map((o) => (
            <div key={o.l} className="relative h-5 rounded bg-white/[0.04]">
              <div
                className="absolute inset-y-0 left-0 rounded bg-brand-500/40"
                style={{ width: `${o.v}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px]">
                <span>{o.l}</span>
                <span className="text-white/65">{o.v}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChallengesPreview() {
  const lb = [
    { p: 1, n: "Sarah W.", v: "182,400", c: "from-pink-400 to-fuchsia-500" },
    { p: 2, n: "Conor R.", v: "171,920", c: "from-sky-400 to-indigo-500" },
    { p: 3, n: "Alice M.", v: "168,300", c: "from-emerald-400 to-teal-500" },
    { p: 4, n: "Charlie B.", v: "159,820", c: "from-amber-400 to-orange-500" },
  ];
  return (
    <div className="flex h-full flex-col gap-1 p-3">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold">
          <Trophy className="h-3.5 w-3.5 text-accent-lime" /> March Step Challenge
        </div>
        <span className="text-[10px] text-white/50">Live</span>
      </div>
      {lb.map((u) => (
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
  );
}

function MessagingPreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-end gap-2">
        <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-[9px] font-bold text-ink-950">
          SW
        </div>
        <div className="rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-[11px]">
          Just nailed PR on bench 🎉
        </div>
      </div>
      <div className="ml-auto flex items-end gap-2">
        <div className="rounded-2xl rounded-br-sm bg-accent-lime px-3 py-1.5 text-[11px] font-medium text-ink-950">
          Massive! Let's add 5lb next session.
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-[9px] font-bold text-ink-950">
          SW
        </div>
        <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-2">
          <Mic className="h-3.5 w-3.5 text-accent-lime" />
          <div className="flex items-end gap-0.5">
            {[6, 10, 14, 8, 12, 16, 10, 6, 14, 8].map((h, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-white/70"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <span className="text-[10px] text-white/55">0:14</span>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-2">
        <ImageIcon className="h-3.5 w-3.5 text-white/50" />
        <span className="text-[10px] text-white/45">Message Sarah…</span>
      </div>
    </div>
  );
}
