import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="start" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-700/30 via-ink-800 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-radial-spot opacity-80" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

          <span className="eyebrow">14-day free trial</span>
          <h2 className="display-h2 mx-auto mt-5 max-w-3xl text-white">
            Supercharge your{" "}
            <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
              coaching business
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            See why HubFit is the coaching platform of choice for modern fitness
            professionals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="#" className="btn-primary">
              Start for free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#pricing" className="btn-secondary">
              See our plans
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/45">
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
