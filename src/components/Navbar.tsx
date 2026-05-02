"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const NAV: { label: string; href: string; menu?: { label: string; desc: string }[] }[] = [
  {
    label: "Platform",
    href: "#coaching",
    menu: [
      { label: "Coaching", desc: "Training, nutrition, check-ins, habits" },
      { label: "Engagement", desc: "Community, challenges, messaging" },
      { label: "On-Demand", desc: "Recipes, workouts, resources" },
      { label: "Scale", desc: "Automations, payments, teams" },
      { label: "Integrations", desc: "Wearables, Stripe, Zapier" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-max container-px flex h-16 items-center justify-between">
        <Link href="/" aria-label="HubFit home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/75 transition hover:text-white"
            >
              {item.label}
              {item.menu ? (
                <ChevronDown className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="#login" className="btn-ghost">
            Log in
          </Link>
          <Link href="#start" className="btn-primary">
            Start for free
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-ink-950/95 md:hidden">
          <div className="container-max container-px flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/[0.04]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="#login" className="btn-secondary flex-1">
                Log in
              </Link>
              <Link href="#start" className="btn-primary flex-1">
                Start free
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
