"use client";

import { useState } from "react";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Image as ImageIcon,
  MoonStar,
  Ruler,
  Scale,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const SLIDERS = [
  { id: "sleep", label: "Sleep quality", icon: MoonStar, value: 7 },
  { id: "energy", label: "Energy", icon: Zap, value: 6 },
  { id: "stress", label: "Stress", icon: Sparkles, value: 4 },
  { id: "hunger", label: "Hunger", icon: CheckCircle2, value: 5 },
];

const MEASUREMENTS = [
  { id: "weight", label: "Weight", unit: "kg", value: "68.7" },
  { id: "waist", label: "Waist", unit: "cm", value: "71" },
  { id: "hips", label: "Hips", unit: "cm", value: "92" },
  { id: "chest", label: "Chest", unit: "cm", value: "94" },
];

const PHOTO_SLOTS = ["Front", "Side", "Back", "Pose"];

export default function ClientCheckinPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="container-max">
      <PageHeader
        title="Weekly check-in"
        subtitle="Week 4 · Sunday May 3 · ~3 minutes"
      />

      {/* Stepper */}
      <div className="mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
        {[
          { n: 1, l: "Measurements" },
          { n: 2, l: "Photos" },
          { n: 3, l: "How you feel" },
          { n: 4, l: "Notes" },
        ].map((s) => {
          const active = step === s.n;
          const done = step > s.n;
          return (
            <button
              key={s.n}
              onClick={() => setStep(s.n)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                active
                  ? "border-accent-lime/40 bg-accent-lime/10 text-white"
                  : done
                  ? "border-brand-500/30 bg-brand-500/10 text-brand-300"
                  : "border-white/10 bg-white/[0.03] text-white/55"
              }`}
            >
              <span
                className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${
                  active
                    ? "bg-accent-lime text-ink-950"
                    : done
                    ? "bg-brand-500/30 text-brand-300"
                    : "bg-white/[0.06] text-white/65"
                }`}
              >
                {done ? <CheckCircle2 className="h-3 w-3" /> : s.n}
              </span>
              {s.l}
            </button>
          );
        })}
      </div>

      <div className="card p-5 sm:p-7">
        {step === 1 ? (
          <>
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-accent-lime" />
              <h2 className="display-h3 text-lg">Measurements</h2>
            </div>
            <p className="mt-1 text-sm text-white/55">
              First thing in the morning, after the bathroom, before food.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {MEASUREMENTS.map((m) => (
                <label
                  key={m.id}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-white/55">
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-3 w-3" />
                      {m.label}
                    </span>
                    <span>{m.unit}</span>
                  </div>
                  <input
                    defaultValue={m.value}
                    className="mt-2 w-full bg-transparent font-display text-2xl font-semibold tabular-nums focus:outline-none"
                  />
                </label>
              ))}
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-accent-lime" />
              <h2 className="display-h3 text-lg">Progress photos</h2>
            </div>
            <p className="mt-1 text-sm text-white/55">
              Same lighting and pose each week. Only your coach sees these.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PHOTO_SLOTS.map((slot) => (
                <button
                  key={slot}
                  className="group flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.025] text-white/55 transition hover:border-accent-lime/40 hover:bg-accent-lime/[0.04] hover:text-white"
                >
                  <ImageIcon className="h-7 w-7" />
                  <span className="text-xs font-medium">{slot}</span>
                  <span className="text-[10px] text-white/45">Tap to add</span>
                </button>
              ))}
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-lime" />
              <h2 className="display-h3 text-lg">How are you feeling?</h2>
            </div>
            <p className="mt-1 text-sm text-white/55">
              1 = rough · 10 = exceptional. Be honest, this drives next week.
            </p>

            <div className="mt-6 space-y-4">
              {SLIDERS.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <s.icon className="h-4 w-4 text-white/55" />
                      <span className="font-medium">{s.label}</span>
                    </div>
                    <span className="font-display text-lg font-semibold tabular-nums text-accent-lime">
                      {s.value}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    defaultValue={s.value}
                    className="mt-3 w-full accent-[rgb(198,248,75)]"
                  />
                  <div className="mt-1 flex justify-between text-[10px] text-white/45">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {step === 4 ? (
          <>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent-lime" />
              <h2 className="display-h3 text-lg">Anything for Cody?</h2>
            </div>
            <p className="mt-1 text-sm text-white/55">
              Aches, schedule changes, wins, frustrations — keep him in the
              loop.
            </p>
            <textarea
              rows={6}
              placeholder="Felt strong on bench but right shoulder a bit cranky during OHP. Slept badly Wednesday. Otherwise a great week."
              className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-accent-lime/40"
            />

            <div className="mt-6 rounded-2xl border border-accent-lime/20 bg-accent-lime/[0.05] p-4 text-sm text-white/85">
              <div className="flex items-center gap-2 text-accent-lime">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Almost done
                </span>
              </div>
              <p className="mt-1.5 text-[13px]">
                Your check-in will be sent to Cody. Expect a written reply with
                program updates within 24 hours.
              </p>
            </div>
          </>
        ) : null}

        <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.06] pt-5 sm:flex-row sm:justify-between">
          <button
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="btn-secondary text-xs disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>
          {step < 4 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="btn-primary text-xs"
            >
              Continue <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button className="btn-primary text-xs">
              Submit check-in <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
