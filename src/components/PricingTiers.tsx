"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type Tier = {
  name: string;
  blurb: string;
  monthly: number;
  yearly: number;
  highlight?: boolean;
  features: string[];
  cta: string;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    blurb: "For new coaches getting their first clients on a branded platform.",
    monthly: 39,
    yearly: 29,
    features: [
      "Up to 25 active clients",
      "Branded iOS + Android app",
      "Training, nutrition & habits",
      "Check-ins + community",
      "Stripe payments",
      "Email support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Studio",
    blurb: "Best for established coaches scaling beyond solo work.",
    monthly: 89,
    yearly: 69,
    highlight: true,
    badge: "Most popular",
    features: [
      "Up to 150 active clients",
      "Everything in Starter",
      "Automations + AutoFlow",
      "Up to 3 coach seats",
      "Recipe books + workout studio",
      "Zapier + 5,000 apps",
      "Priority chat support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    blurb: "For multi-coach teams running a serious coaching business.",
    monthly: 199,
    yearly: 159,
    features: [
      "Unlimited active clients",
      "Everything in Studio",
      "Unlimited coach seats",
      "Advanced team analytics",
      "Custom roles & permissions",
      "API access",
      "Dedicated success manager",
    ],
    cta: "Start free trial",
  },
];

export function PricingTiers() {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm",
            !yearly ? "text-white" : "text-white/55"
          )}
        >
          Monthly
        </span>
        <button
          aria-label="Toggle billing period"
          onClick={() => setYearly((y) => !y)}
          className={cn(
            "relative h-7 w-12 rounded-full border border-white/10 transition",
            yearly ? "bg-accent-lime" : "bg-white/[0.06]"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-ink-950 transition",
              yearly ? "left-6" : "left-0.5"
            )}
          />
        </button>
        <span
          className={cn(
            "flex items-center gap-2 text-sm",
            yearly ? "text-white" : "text-white/55"
          )}
        >
          Yearly
          <span className="chip border-brand-500/40 bg-brand-500/10 text-[10px] text-brand-200">
            Save 25%
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {TIERS.map((t) => {
          const price = yearly ? t.yearly : t.monthly;
          return (
            <div
              key={t.name}
              className={cn(
                "card relative flex flex-col p-7",
                t.highlight &&
                  "border-accent-lime/35 bg-gradient-to-b from-accent-lime/[0.07] to-transparent shadow-[0_0_0_1px_rgba(198,248,75,0.18),0_30px_80px_-20px_rgba(198,248,75,0.18)]"
              )}
            >
              {t.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-lime px-3 py-1 text-[11px] font-semibold text-ink-950">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> {t.badge}
                  </span>
                </span>
              ) : null}
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                  {t.name}
                </div>
                <p className="mt-2 text-sm text-white/65">{t.blurb}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  ${price}
                </span>
                <span className="text-sm text-white/55">/month</span>
              </div>
              <div className="mt-1 text-xs text-white/45">
                {yearly
                  ? `billed annually · $${price * 12}/yr`
                  : "billed monthly"}
              </div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-lime" />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                  t.highlight
                    ? "bg-accent-lime text-ink-950 hover:brightness-110"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                )}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
