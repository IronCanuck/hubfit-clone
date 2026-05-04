"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Apple,
  Bell,
  CalendarCheck,
  ChevronDown,
  Dumbbell,
  Home,
  LineChart,
  LogOut,
  Menu,
  MessageCircle,
  User,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/cn";

const NAV: {
  label: string;
  href: string;
  icon: typeof Home;
  badge?: string;
}[] = [
  { label: "Today", href: "/client", icon: Home },
  { label: "Training", href: "/client/training", icon: Dumbbell },
  { label: "Nutrition", href: "/client/nutrition", icon: Apple },
  { label: "Progress", href: "/client/progress", icon: LineChart },
  { label: "Check-in", href: "/client/checkin", icon: CalendarCheck, badge: "Due" },
  { label: "Messages", href: "/client/messages", icon: MessageCircle, badge: "2" },
];

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen pb-20 lg:pb-0">
      {/* Mobile sidebar overlay */}
      {sidebarOpen ? (
        <div
          aria-hidden
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-ink-900/70 backdrop-blur-sm lg:hidden"
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/[0.06] bg-ink-900/80 backdrop-blur-xl transition-transform lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/[0.06] px-5">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-3.5 pb-2 pt-3">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-xs font-bold text-ink-950">
                SW
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">
                  Sarah Williams
                </div>
                <div className="truncate text-[11px] text-white/55">
                  12-Week Program · Week 4
                </div>
              </div>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-accent-lime to-brand-400"
                style={{ width: "33%" }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-white/55">
              <span>Week 4 of 12</span>
              <span className="text-accent-lime">72% adherence</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <div className="mb-2 mt-2 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Your training
          </div>
          <ul className="flex flex-col gap-0.5">
            {NAV.map((it) => {
              const active =
                pathname === it.href ||
                (it.href !== "/client" && pathname?.startsWith(it.href));
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                      active
                        ? "bg-white/[0.06] text-white"
                        : "text-white/65 hover:bg-white/[0.03] hover:text-white"
                    )}
                  >
                    <it.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active ? "text-accent-lime" : "text-white/55"
                      )}
                    />
                    <span className="flex-1">{it.label}</span>
                    {it.badge ? (
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                          it.badge === "Due"
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-white/[0.05] text-white/65"
                        )}
                      >
                        {it.badge}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Account
          </div>
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href="/client/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/[0.03] hover:text-white"
              >
                <User className="h-4 w-4 text-white/55" />
                Profile & settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-white/[0.06] p-3">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400 text-[10px] font-bold text-ink-950">
                CF
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[11px] uppercase tracking-wider text-white/45">
                  Your coach
                </div>
                <div className="truncate text-sm font-semibold">
                  Cody Fairburn
                </div>
              </div>
            </div>
            <Link
              href="/client/messages"
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/80 hover:bg-white/[0.06]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Message coach
            </Link>
          </div>
          <Link
            href="/login"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[11px] text-white/55 hover:text-white"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log out
          </Link>
        </div>
      </aside>

      {/* Main panel */}
      <div className="flex min-h-screen flex-col lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-white/[0.06] bg-ink-900/70 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>

          <Link
            href="/client"
            className="flex items-center gap-2 lg:hidden"
            aria-label="Home"
          >
            <Logo />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Notifications"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-lime" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3 hover:bg-white/[0.08]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-[10px] font-bold text-ink-950">
                SW
              </span>
              <span className="hidden text-xs font-medium sm:block">
                Sarah
              </span>
              <ChevronDown className="hidden h-3.5 w-3.5 text-white/55 sm:block" />
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.06] bg-ink-900/85 backdrop-blur-xl lg:hidden">
        <ul className="grid grid-cols-5">
          {NAV.slice(0, 5).map((it) => {
            const active =
              pathname === it.href ||
              (it.href !== "/client" && pathname?.startsWith(it.href));
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={cn(
                    "relative flex flex-col items-center gap-1 px-2 py-3 text-[10px] font-medium transition",
                    active ? "text-accent-lime" : "text-white/55"
                  )}
                >
                  <it.icon className="h-5 w-5" />
                  {it.label}
                  {it.badge ? (
                    <span
                      className={cn(
                        "absolute right-3 top-2 h-1.5 w-1.5 rounded-full",
                        it.badge === "Due" ? "bg-amber-400" : "bg-accent-lime"
                      )}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
