import { BookOpenText, Film, FolderOpen, Play, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";

export function OnDemandSection() {
  return (
    <section id="on-demand" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <SectionHeader
          eyebrow="On-Demand"
          title={
            <>
              Content that{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                coaches for you
              </span>
            </>
          }
          description="Build a library of recipes, workouts, and resources your clients can access anytime — so you can scale without repeating yourself."
          primaryCta={{ label: "Start for free", href: "#start" }}
          secondaryCta={{ label: "Explore on-demand", href: "#" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <FeatureCard
            icon={BookOpenText}
            title="Recipe Books"
            description="Build recipe books your clients browse on demand. Full macro breakdowns, instructions, and one-tap meal logging."
            preview={<RecipesPreview />}
          />
          <FeatureCard
            icon={Film}
            title="Workout Studio"
            description="Record and upload follow-along workout videos. Clients stream on-demand from the app, anywhere."
            preview={<StudioPreview />}
          />
          <FeatureCard
            icon={FolderOpen}
            title="Resource Collections"
            description="PDFs, guides, checklists, and documents organised into collections clients can access anytime."
            preview={<ResourcesPreview />}
          />
        </div>

        <figure className="mt-16 flex flex-col items-center text-center">
          <Quote className="h-6 w-6 text-accent-lime" />
          <blockquote className="mt-4 max-w-3xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            "Podium Lab completely transformed how I run my coaching business — cut
            my admin time by 75% and let me focus on what I do best."
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 text-sm">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 font-bold text-ink-950">
              JA
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Jesse Astill</div>
              <div className="text-white/55">ASTL Performance</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function RecipesPreview() {
  const recipes = [
    { n: "Chicken bowl", k: 540, c: "from-amber-400 to-orange-500" },
    { n: "Salmon plate", k: 620, c: "from-pink-400 to-rose-500" },
    { n: "Veggie wrap", k: 380, c: "from-emerald-400 to-teal-500" },
  ];
  return (
    <div className="grid h-full grid-cols-3 gap-1.5 p-2.5">
      {recipes.map((r) => (
        <div
          key={r.n}
          className="flex flex-col overflow-hidden rounded-md border border-white/[0.05] bg-white/[0.02]"
        >
          <div className={`h-16 bg-gradient-to-br ${r.c} opacity-70`} />
          <div className="px-2 py-1.5">
            <div className="text-[10px] font-semibold">{r.n}</div>
            <div className="text-[9px] text-white/50">{r.k} kcal</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StudioPreview() {
  return (
    <div className="grid h-full grid-cols-2 gap-1.5 p-2.5">
      {[
        { l: "Full body burn", t: "32 min", c: "from-rose-500 to-orange-400" },
        { l: "Mobility flow", t: "18 min", c: "from-emerald-400 to-teal-500" },
        { l: "Core finisher", t: "12 min", c: "from-violet-400 to-purple-500" },
        { l: "HIIT sprint", t: "20 min", c: "from-amber-400 to-yellow-500" },
      ].map((v) => (
        <div
          key={v.l}
          className="relative flex flex-col overflow-hidden rounded-md border border-white/[0.05]"
        >
          <div className={`flex-1 bg-gradient-to-br ${v.c} opacity-60`} />
          <div className="absolute inset-0 grid place-items-center">
            <Play className="h-5 w-5 fill-white text-white drop-shadow" />
          </div>
          <div className="bg-ink-900/85 px-2 py-1 backdrop-blur">
            <div className="text-[10px] font-semibold">{v.l}</div>
            <div className="text-[9px] text-white/55">{v.t}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ResourcesPreview() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-3">
      {[
        { n: "New Client Guide.pdf", k: "PDF · 1.2MB" },
        { n: "Macro tracker.xlsx", k: "Sheet" },
        { n: "Mobility checklist", k: "List" },
        { n: "Stretching e-book.pdf", k: "PDF · 4.8MB" },
      ].map((f) => (
        <div
          key={f.n}
          className="flex items-center gap-2.5 rounded-md border border-white/[0.05] bg-white/[0.025] px-2.5 py-1.5"
        >
          <div className="grid h-6 w-6 place-items-center rounded bg-white/[0.06]">
            <FolderOpen className="h-3 w-3 text-accent-lime" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-medium">{f.n}</div>
            <div className="text-[9px] text-white/45">{f.k}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
