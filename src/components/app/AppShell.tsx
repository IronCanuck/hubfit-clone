"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Apple,
  Bell,
  CalendarCheck,
  ChevronDown,
  Dumbbell,
  FolderOpen,
  HelpCircle,
  LogOut,
  Menu,
  MessageCircle,
  Plus,
  Search,
  Settings,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";

const NAV: { label: string; href: string; icon: typeof Activity; badge?: string }[] = [
  { label: "Dashboard", href: "/app", icon: Activity },
  { label: "Clients", href: "/app/clients", icon: Users, badge: "142" },
  { label: "Training", href: "/app/training", icon: Dumbbell },
  { label: "Nutrition", href: "/app/nutrition", icon: Apple },
  { label: "Check-ins", href: "/app/checkins", icon: CalendarCheck, badge: "8" },
  { label: "Challenges", href: "/app/challenges", icon: Trophy },
  { label: "Messages", href: "/app/messages", icon: MessageCircle, badge: "3" },
  { label: "Library", href: "/app/library", icon: FolderOpen },
  { label: "Automations", href: "/app/automations", icon: Zap },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
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

        <div className="px-3.5 py-3">
          <button className="flex w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.06]">
            <Search className="h-4 w-4" />
            Search clients, programs…
            <kbd className="ml-auto rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Coaching
          </div>
          <ul className="flex flex-col gap-0.5">
            {NAV.map((it) => {
              const active =
                pathname === it.href ||
                (it.href !== "/app" && pathname?.startsWith(it.href));
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
                      <span className="rounded-full bg-white/[0.05] px-1.5 py-0.5 text-[10px] tabular-nums text-white/65">
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
            {[
              { label: "Settings", href: "/app/settings", icon: Settings },
              { label: "Help & Docs", href: "#", icon: HelpCircle },
            ].map((it) => (
              <li key={it.label}>
                <Link
                  href={it.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/[0.03] hover:text-white"
                >
                  <it.icon className="h-4 w-4 text-white/55" />
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/[0.06] p-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400 text-xs font-bold text-ink-950">
              CF
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">Cody Fairburn</div>
              <div className="truncate text-[10px] text-white/55">
                cody@podiumlab.local
              </div>
            </div>
            <Link
              href="/login"
              className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white"
              aria-label="Log out"
            >
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
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

          <div className="hidden flex-1 sm:block">
            <div className="flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2">
              <Search className="h-4 w-4 text-white/45" />
              <input
                placeholder="Search clients, programs, recipes…"
                className="flex-1 bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
              />
              <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-white/55">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="hidden btn-primary text-xs sm:inline-flex">
              <Plus className="h-3.5 w-3.5" />
              New client
            </button>
            <button
              aria-label="Notifications"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-lime" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3 hover:bg-white/[0.08]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400 text-[10px] font-bold text-ink-950">
                CF
              </span>
              <span className="hidden text-xs font-medium sm:block">
                Cody
              </span>
              <ChevronDown className="hidden h-3.5 w-3.5 text-white/55 sm:block" />
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
