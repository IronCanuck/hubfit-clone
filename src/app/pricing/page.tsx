import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingTiers } from "@/components/PricingTiers";

export const metadata: Metadata = {
  title: "Pricing — Podium Lab",
  description:
    "Simple, transparent pricing that scales with your coaching business. Start with a 14-day free trial.",
};

const FAQS = [
  {
    q: "Can I switch plans anytime?",
    a: "Yes. You can upgrade or downgrade at any time — your billing is prorated automatically.",
  },
  {
    q: "Do my clients pay anything?",
    a: "No. Clients access your branded coaching app for free. You only pay based on the number of active clients you coach.",
  },
  {
    q: "Is there a free trial?",
    a: "Every plan starts with a 14-day free trial. No credit card required. Bring as many clients as you want during the trial.",
  },
  {
    q: "What happens if I exceed my client limit?",
    a: "We'll prompt you to upgrade. We never lock your clients out — you'll have a 7-day grace period to upgrade or pause.",
  },
  {
    q: "Do you support teams of coaches?",
    a: "Absolutely. The Studio and Pro plans support multiple coach seats with role-based access. Pro adds advanced team analytics.",
  },
  {
    q: "Can I import clients from another platform?",
    a: "Yes. Our import wizard supports CSV and direct integrations with the most common coaching platforms.",
  },
];

export default function PricingPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-28 sm:pt-32">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-grid-fade pointer-events-none" />
        <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />

        <div className="container-max container-px text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-accent-lime" />
            Simple, scaling pricing
          </span>
          <h1 className="display-h1 mx-auto mt-6 max-w-3xl">
            Plans that grow with{" "}
            <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
              your business
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65 sm:text-lg">
            Start free. Pay only when you're ready. Every plan includes the
            full Podium Lab platform — branded apps, training, nutrition, and
            community.
          </p>
        </div>

        <div className="container-max container-px mt-14">
          <PricingTiers />
        </div>

        <div className="container-max container-px mt-20">
          <div className="card overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="eyebrow">Compare</span>
                <h2 className="display-h2 mt-5">Everything you need, on every plan</h2>
                <p className="mt-4 text-white/65">
                  Every plan ships with the full coaching engine. Higher tiers
                  unlock automations, teams, and dedicated support.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                {[
                  "Custom branded mobile app",
                  "Unlimited training programs",
                  "Macros + meal logging",
                  "Habits & check-ins",
                  "Community feed",
                  "Challenges & leaderboards",
                  "Stripe payments",
                  "Wearable integrations",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2.5 text-sm"
                  >
                    <Check className="h-4 w-4 text-accent-lime" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-max container-px mt-20 sm:mt-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2 mt-5">Frequently asked questions</h2>
              <p className="mt-4 text-white/65">
                Anything we missed? Drop us a line and we'll get back to you in
                under 4 hours.
              </p>
              <Link
                href="#contact"
                className="btn-secondary mt-6 inline-flex"
              >
                Contact support
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
                {FAQS.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      {f.q}
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-white/55 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-white/65">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-max container-px mt-20 sm:mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-700/30 via-ink-800 to-ink-900 px-6 py-14 text-center sm:px-12">
            <div className="absolute inset-0 -z-10 bg-radial-spot opacity-80" />
            <h3 className="display-h2">Try Podium Lab free for 14 days</h3>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Bring your clients, programs, and content. No credit card required.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup" className="btn-primary">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
