"use client";

import { SectionHeader } from "./SectionHeader";

const INTEGRATIONS = [
  { name: "Cronometer", initials: "CR", color: "from-emerald-400 to-teal-500" },
  { name: "Oura", initials: "Ou", color: "from-zinc-300 to-zinc-500" },
  { name: "Zapier", initials: "Z", color: "from-orange-400 to-red-500" },
  { name: "Apple Health", initials: "", color: "from-rose-400 to-pink-500", icon: "" },
  { name: "Fitbit", initials: "Fb", color: "from-teal-400 to-cyan-500" },
  { name: "Whoop", initials: "Wh", color: "from-zinc-200 to-zinc-400" },
  { name: "Health Connect", initials: "HC", color: "from-green-400 to-lime-500" },
  { name: "Ultrahuman", initials: "Uh", color: "from-amber-400 to-orange-500" },
  { name: "Garmin", initials: "Gm", color: "from-sky-400 to-blue-600" },
  { name: "Stripe", initials: "S", color: "from-violet-400 to-purple-600" },
  { name: "Eight Sleep", initials: "8", color: "from-indigo-400 to-blue-500" },
];

function IntegrationTile({
  name,
  initials,
  color,
}: {
  name: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5">
      <div
        className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${color} text-sm font-bold text-ink-950`}
      >
        {initials}
      </div>
      <span className="whitespace-nowrap text-sm font-medium">{name}</span>
    </div>
  );
}

export function IntegrationsSection() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];
  return (
    <section id="integrations" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <SectionHeader
          align="center"
          eyebrow="Integrations"
          title={
            <>
              Connect with your{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                favorite tools
              </span>
            </>
          }
          description="Sync wearables, plug into Zapier, and connect Podium Lab to the tools you already use to run your business."
        />

        <div className="mt-12 space-y-3">
          <div className="fade-mask-x relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-3">
              {items.map((it, i) => (
                <IntegrationTile key={`a-${it.name}-${i}`} {...it} />
              ))}
            </div>
          </div>
          <div className="fade-mask-x relative w-full overflow-hidden">
            <div
              className="flex w-max animate-marquee-slow gap-3"
              style={{ animationDirection: "reverse" }}
            >
              {items.map((it, i) => (
                <IntegrationTile key={`b-${it.name}-${i}`} {...it} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
