import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-lime to-brand-400 shadow-[0_4px_20px_rgba(198,248,75,0.35)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#05060a"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6.5 6.5l3 3" />
          <path d="M14.5 14.5l3 3" />
          <path d="M4 10l2-2" />
          <path d="M16 20l2-2" />
          <path d="M10.5 13.5L13.5 10.5" />
          <rect x="7" y="7" width="3" height="3" rx="0.5" transform="rotate(45 8.5 8.5)" />
          <rect x="14" y="14" width="3" height="3" rx="0.5" transform="rotate(45 15.5 15.5)" />
        </svg>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        Podium<span className="text-accent-lime"> Lab</span>
      </span>
    </div>
  );
}
