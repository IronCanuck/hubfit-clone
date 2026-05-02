import { Activity, Apple, Dumbbell, Heart, MessageCircle, Star, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function MobileAppSection() {
  return (
    <section id="mobile" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Mobile App"
            title={
              <>
                An app your clients will{" "}
                <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                  actually love.
                </span>
              </>
            }
            description="A beautiful, branded experience on iOS and Android with everything your clients need to train, eat, and stay connected."
            primaryCta={{ label: "Start for free", href: "#start" }}
            secondaryCta={{ label: "See pricing", href: "#pricing" }}
          />
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-radial-spot opacity-70 blur-2xl" />
            <PhoneMock />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: "4.9", l: "App Store rating" },
            { v: "iOS + Android", l: "Native apps" },
            { v: "Custom branding", l: "Your logo, your colors" },
            { v: "Offline ready", l: "Train without signal" },
          ].map((s) => (
            <div key={s.l} className="card p-4 text-center">
              <div className="font-display text-xl font-semibold text-white">
                {s.v}
              </div>
              <div className="mt-0.5 text-xs text-white/55">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="relative rounded-[3rem] border border-white/[0.08] bg-gradient-to-b from-ink-800 to-ink-900 p-3 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.6)]">
        <div className="rounded-[2.4rem] bg-ink-900 p-4">
          {/* Status */}
          <div className="flex items-center justify-between text-[10px] text-white/55">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-3 rounded-sm bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-white/55">Hi, Sarah</div>
              <div className="font-display text-lg font-semibold">Today</div>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-xs font-bold text-ink-950">
              SW
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-500/30 via-ink-800 to-ink-900 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-wider text-white/55">
                Today's workout
              </div>
              <Dumbbell className="h-3.5 w-3.5 text-accent-lime" />
            </div>
            <div className="mt-1.5 font-display text-base font-semibold">
              Push Day · Upper
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-white/65">
              <span>4 supersets</span>
              <span className="opacity-50">·</span>
              <span>~52 min</span>
            </div>
            <button className="mt-3 w-full rounded-full bg-accent-lime py-2 text-xs font-semibold text-ink-950">
              Start workout
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center gap-1.5">
                <Apple className="h-3.5 w-3.5 text-brand-300" />
                <span className="text-[10px] uppercase tracking-wider text-white/55">
                  Macros
                </span>
              </div>
              <div className="mt-1 font-display text-base font-semibold">
                1,840
              </div>
              <div className="text-[9px] text-white/45">/ 2,200 kcal</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-accent-lime" />
                <span className="text-[10px] uppercase tracking-wider text-white/55">
                  Steps
                </span>
              </div>
              <div className="mt-1 font-display text-base font-semibold">
                8,420
              </div>
              <div className="text-[9px] text-white/45">/ 10,000</div>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="flex items-center justify-between text-[10px] text-white/55">
              <span className="flex items-center gap-1">
                <Trophy className="h-3 w-3 text-accent-lime" />
                Step challenge
              </span>
              <span>#3 of 124</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-accent-lime to-brand-400"
                style={{ width: "62%" }}
              />
            </div>
          </div>

          {/* Tab bar */}
          <div className="mt-4 flex items-center justify-around rounded-2xl border border-white/[0.06] bg-white/[0.025] py-2">
            {[Activity, Dumbbell, Apple, MessageCircle, Heart].map((Icon, i) => (
              <Icon
                key={i}
                className={`h-4 w-4 ${
                  i === 0 ? "text-accent-lime" : "text-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating */}
      <div className="absolute -left-6 top-24 hidden rounded-2xl border border-white/[0.08] bg-ink-800/90 px-3 py-2 shadow-2xl backdrop-blur md:flex md:items-center md:gap-2">
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3 w-3 fill-accent-lime text-accent-lime" />
          ))}
        </div>
        <div className="text-[10px] font-semibold">4.9 App Store</div>
      </div>
      <div className="absolute -right-4 bottom-24 hidden items-center gap-2 rounded-2xl border border-white/[0.08] bg-ink-800/90 px-3 py-2 shadow-2xl backdrop-blur md:flex">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400">
          <Trophy className="h-3.5 w-3.5 text-ink-950" />
        </div>
        <div>
          <div className="text-[10px] text-white/55">Streak</div>
          <div className="text-xs font-semibold">28 days 🔥</div>
        </div>
      </div>
    </div>
  );
}
