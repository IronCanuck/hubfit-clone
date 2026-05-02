import { cn } from "@/lib/cn";

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9" />
      {withWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          Podium
          <span className="text-accent-lime">·Lab</span>
        </span>
      ) : null}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden rounded-[9px]",
        "bg-gradient-to-br from-ink-800 to-ink-900",
        "ring-1 ring-white/10",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-12px_rgba(198,248,75,0.45)]",
        className
      )}
    >
      {/* micro grid */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />
      {/* corner registration ticks */}
      <svg
        aria-hidden
        viewBox="0 0 36 36"
        className="absolute inset-0 h-full w-full text-accent-lime/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M2 2h3M2 2v3M34 2h-3M34 2v3M2 34h3M2 34v-3M34 34h-3M34 34v-3" />
      </svg>

      {/* mark: flask + crosshair */}
      <svg
        aria-hidden
        viewBox="0 0 36 36"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="pl-liquid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#C6F84B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#16B05F" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="pl-glass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#C6F84B" />
            <stop offset="100%" stopColor="#7CF5C2" />
          </linearGradient>
        </defs>

        {/* horizon registration line */}
        <line
          x1="3"
          y1="18"
          x2="33"
          y2="18"
          stroke="rgba(198,248,75,0.18)"
          strokeWidth="1"
          strokeDasharray="1.2 1.4"
        />

        {/* flask outline */}
        <path
          d="M14.5 7.5h7"
          stroke="url(#pl-glass)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15.5 8v5L10.5 24a2.6 2.6 0 0 0 2.4 3.7h10.2a2.6 2.6 0 0 0 2.4-3.7L20.5 13V8"
          stroke="url(#pl-glass)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* gradation ticks */}
        <path
          d="M16 14h1.4M16 16.5h1.4M16 19h1.4"
          stroke="rgba(198,248,75,0.55)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* liquid */}
        <path
          d="M12.4 23 L23.6 23 L25 26.2a1.4 1.4 0 0 1-1.3 2H12.3a1.4 1.4 0 0 1-1.3-2z"
          fill="url(#pl-liquid)"
          opacity="0.95"
        />
        {/* bubbles */}
        <circle cx="15" cy="20.5" r="0.55" fill="#C6F84B" opacity="0.9" />
        <circle cx="17.4" cy="18.5" r="0.4" fill="#C6F84B" opacity="0.7" />
        <circle cx="19.6" cy="16.5" r="0.35" fill="#C6F84B" opacity="0.55" />

        {/* crosshair around bottom — the "podium" target */}
        <circle
          cx="18"
          cy="25.5"
          r="3.6"
          stroke="#05060a"
          strokeOpacity="0.55"
          strokeWidth="0.9"
          fill="none"
        />
        <circle cx="18" cy="25.5" r="0.7" fill="#05060a" />
      </svg>
    </span>
  );
}
