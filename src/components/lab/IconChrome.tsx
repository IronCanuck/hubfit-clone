import { cn } from "@/lib/cn";

type Tone = "lime" | "violet" | "mint" | "white";
type Size = "sm" | "md" | "lg";
type Variant = "tile" | "hex";

const TONE_STYLES: Record<
  Tone,
  { ring: string; glow: string; text: string; tickStroke: string }
> = {
  lime: {
    ring: "ring-accent-lime/30",
    glow: "shadow-[inset_0_0_0_1px_rgba(198,248,75,0.10),0_0_24px_-12px_rgba(198,248,75,0.55)]",
    text: "text-accent-lime",
    tickStroke: "stroke-accent-lime/70",
  },
  violet: {
    ring: "ring-accent-violet/30",
    glow: "shadow-[inset_0_0_0_1px_rgba(159,123,255,0.10),0_0_24px_-12px_rgba(159,123,255,0.55)]",
    text: "text-accent-violet",
    tickStroke: "stroke-accent-violet/70",
  },
  mint: {
    ring: "ring-brand-400/30",
    glow: "shadow-[inset_0_0_0_1px_rgba(124,245,194,0.10),0_0_24px_-12px_rgba(124,245,194,0.55)]",
    text: "text-brand-300",
    tickStroke: "stroke-brand-300/70",
  },
  white: {
    ring: "ring-white/15",
    glow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
    text: "text-white",
    tickStroke: "stroke-white/45",
  },
};

const SIZE_STYLES: Record<
  Size,
  { box: string; icon: string; label: string; tickLen: number }
> = {
  sm: { box: "h-8 w-8", icon: "h-3.5 w-3.5", label: "text-[8px]", tickLen: 3 },
  md: { box: "h-10 w-10", icon: "h-4 w-4", label: "text-[9px]", tickLen: 4 },
  lg: { box: "h-12 w-12", icon: "h-5 w-5", label: "text-[10px]", tickLen: 5 },
};

export function IconChrome({
  icon,
  tone = "lime",
  size = "md",
  variant = "tile",
  label,
  className,
}: {
  icon: React.ReactNode;
  tone?: Tone;
  size?: Size;
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const t = TONE_STYLES[tone];
  const s = SIZE_STYLES[size];
  const isHex = variant === "hex";

  return (
    <span
      className={cn(
        "relative inline-grid place-items-center",
        s.box,
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 ring-1",
          t.ring,
          t.glow,
          isHex ? "[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]" : "rounded-[7px]",
          "bg-white/[0.025]"
        )}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "6px 6px",
        }}
      />

      {!isHex ? (
        <svg
          aria-hidden
          viewBox="0 0 40 40"
          className={cn("absolute inset-0 h-full w-full", t.tickStroke)}
          fill="none"
          strokeWidth={1}
          strokeLinecap="round"
        >
          <path d={`M2 2 L${2 + s.tickLen} 2 M2 2 L2 ${2 + s.tickLen}`} />
          <path
            d={`M38 2 L${38 - s.tickLen} 2 M38 2 L38 ${2 + s.tickLen}`}
          />
          <path
            d={`M2 38 L${2 + s.tickLen} 38 M2 38 L2 ${38 - s.tickLen}`}
          />
          <path
            d={`M38 38 L${38 - s.tickLen} 38 M38 38 L38 ${38 - s.tickLen}`}
          />
        </svg>
      ) : null}

      {label ? (
        <span
          className={cn(
            "absolute -right-1 -top-1.5 rounded-[3px] border bg-ink-900/90 px-[3px] py-[1px] font-mono uppercase leading-none tracking-[0.08em]",
            "border-white/10",
            s.label,
            t.text
          )}
        >
          {label}
        </span>
      ) : null}

      <span className={cn("relative z-10", t.text, s.icon)}>{icon}</span>
    </span>
  );
}

export function BlueprintCorners({
  className,
  size = 12,
  inset = 8,
  colorClass = "border-white/35",
}: {
  className?: string;
  size?: number;
  inset?: number;
  colorClass?: string;
}) {
  const base: React.CSSProperties = {
    width: size,
    height: size,
    position: "absolute",
  };
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <span
        className={cn("border-l border-t", colorClass)}
        style={{ ...base, top: inset, left: inset }}
      />
      <span
        className={cn("border-r border-t", colorClass)}
        style={{ ...base, top: inset, right: inset }}
      />
      <span
        className={cn("border-l border-b", colorClass)}
        style={{ ...base, bottom: inset, left: inset }}
      />
      <span
        className={cn("border-r border-b", colorClass)}
        style={{ ...base, bottom: inset, right: inset }}
      />
    </span>
  );
}
