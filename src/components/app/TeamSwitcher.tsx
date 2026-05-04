"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Users } from "lucide-react";
import { cn } from "@/lib/cn";

export type Team = {
  id: string;
  name: string;
  color: string;
  count: number;
  sport?: string;
};

export function TeamSwitcher({
  teams,
  value,
  onChange,
}: {
  teams: Team[];
  value: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const active = teams.find((t) => t.id === value) ?? teams[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3 text-left transition hover:bg-white/[0.08]"
      >
        <span
          className={cn(
            "grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br text-[10px] font-bold text-ink-950",
            active.color
          )}
        >
          {active.id === "all" ? (
            <Users className="h-3.5 w-3.5" />
          ) : (
            active.name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
          )}
        </span>
        <span className="min-w-0">
          <span className="block text-[10px] uppercase tracking-[0.14em] text-white/45">
            Viewing
          </span>
          <span className="block truncate text-xs font-medium">
            {active.name}
          </span>
        </span>
        <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[10px] tabular-nums text-white/65">
          {active.count}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-white/55 transition",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div
          role="listbox"
          className="absolute right-0 z-30 mt-2 w-72 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/95 p-1.5 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Team profiles
          </div>
          <ul className="flex flex-col gap-0.5">
            {teams.map((t) => {
              const selected = t.id === value;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(t.id);
                      setOpen(false);
                    }}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition",
                      selected
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.04]"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-ink-950",
                        t.color
                      )}
                    >
                      {t.id === "all" ? (
                        <Users className="h-4 w-4" />
                      ) : (
                        t.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-white">
                        {t.name}
                      </span>
                      <span className="block truncate text-[11px] text-white/55">
                        {t.sport ?? "All active members"} · {t.count} members
                      </span>
                    </span>
                    {selected ? (
                      <Check className="h-4 w-4 shrink-0 text-accent-lime" />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
