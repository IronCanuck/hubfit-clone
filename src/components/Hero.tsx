"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { CoachMarquee } from "./CoachMarquee";
import { HeroPreview } from "./HeroPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[640px] bg-grid-fade pointer-events-none"
      />

      <div className="container-max container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-accent-lime" />
            #1 Coaching Platform
          </span>

          <h1 className="display-h1 mt-6 max-w-4xl text-white">
            Powering your{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-br from-accent-lime via-brand-300 to-brand-500 bg-clip-text text-transparent">
                coaching business
              </span>
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 80 2, 160 12, 298 5"
                  stroke="url(#g)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#C6F84B" />
                    <stop offset="1" stopColor="#2EC772" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/65 sm:text-lg">
            HubFit makes it easy to build, scale, and automate your fitness
            business — all without being slow or clunky.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="#start" className="btn-primary">
              Start for free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#google" className="btn-secondary">
              <GoogleMark className="h-4 w-4" />
              Sign up with Google
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-white/55">
            <div className="flex -space-x-1.5">
              {["#5DD994", "#C6F84B", "#9F7BFF", "#7CF5C2"].map((c, i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-full border-2 border-ink-950"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent-lime text-accent-lime" />
              ))}
            </div>
            <span>50,000+ coaches · 4.9 average rating</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mt-16"
        >
          <HeroPreview />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              k: "50,000+",
              label: "Coaches Trust HubFit",
              copy: "Thousands of coaches use HubFit to grow and manage their fitness business.",
            },
            {
              k: "350+",
              label: "Trustpilot Reviews",
              copy: "#1 rated coaching platform, with hundreds of five-star reviews.",
            },
            {
              k: "99%",
              label: "Coach Satisfaction",
              copy: "99% of coaches on HubFit rate their experience as excellent.",
            },
          ].map((s) => (
            <div key={s.label} className="card card-hover p-6">
              <div className="font-display text-4xl font-semibold tracking-tight text-white">
                {s.k}
              </div>
              <div className="mt-1 text-sm font-medium text-accent-lime">
                {s.label}
              </div>
              <p className="mt-2 text-sm text-white/60">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Coaches who chose HubFit
          </p>
          <CoachMarquee />
        </div>
      </div>
    </section>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#EA4335" d="M12 11v3.2h4.5c-.2 1.2-1.4 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2L17.5 7C16.2 5.8 14.3 5 12 5 7.6 5 4 8.6 4 13s3.6 8 8 8c4.6 0 7.6-3.2 7.6-7.7 0-.5-.1-.9-.1-1.3H12z" />
    </svg>
  );
}
