const COACHES = [
  { name: "FiercelyFit", color: "from-rose-500 to-orange-400" },
  { name: "The Coach", color: "from-zinc-300 to-zinc-500" },
  { name: "Trans4M", color: "from-emerald-400 to-teal-500" },
  { name: "Proven", color: "from-amber-400 to-yellow-500" },
  { name: "ASTL/Performance", color: "from-sky-400 to-indigo-500" },
  { name: "coached by Jenny", color: "from-pink-400 to-fuchsia-500" },
  { name: "vm·coaching", color: "from-violet-400 to-purple-500" },
  { name: "GuerreraDel Capo", color: "from-red-400 to-rose-600" },
  { name: "GianniCoaching", color: "from-lime-300 to-emerald-400" },
  { name: "For Her Kind", color: "from-pink-300 to-rose-400" },
];

function CoachBadge({ name, color }: { name: string; color: string }) {
  const initials = name
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4">
      <div
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br ${color} text-[10px] font-bold text-ink-950`}
      >
        {initials || "HF"}
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-white/85">
        {name}
      </span>
    </div>
  );
}

export function CoachMarquee() {
  const items = [...COACHES, ...COACHES];
  return (
    <div className="fade-mask-x relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee gap-3">
        {items.map((c, i) => (
          <CoachBadge key={`${c.name}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}
