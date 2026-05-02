import { CreditCard, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function ScaleSection() {
  return (
    <section id="scale" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <SectionHeader
          eyebrow="Scale"
          title={
            <>
              Built to scale your{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                coaching business
              </span>
            </>
          }
          description="Automate onboarding, get paid on time, and manage your team — everything you need to scale from 10 clients to 1,000."
          primaryCta={{ label: "Start for free", href: "#start" }}
          secondaryCta={{ label: "Explore Scale", href: "#" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <ScaleCard
            icon={<Zap className="h-4.5 w-4.5 text-accent-lime" />}
            title="Automations"
            description="Automate onboarding with flows, schedule content delivery with AutoFlow, and connect to 5,000+ apps with Zapier."
            preview={<AutomationsPreview />}
            span="lg"
          />
          <ScaleCard
            icon={<CreditCard className="h-4.5 w-4.5 text-accent-lime" />}
            title="Payments"
            description="Collect one-time and recurring payments. Free trials, coupons, setup fees, and automatic invoices built in."
            preview={<PaymentsPreview />}
          />
          <ScaleCard
            icon={<Users className="h-4.5 w-4.5 text-accent-lime" />}
            title="Teams"
            description="Invite coaches, assign roles, and manage clients across your team. Multiple coaches per client supported."
            preview={<TeamsPreview />}
          />
        </div>
      </div>
    </section>
  );
}

function ScaleCard({
  icon,
  title,
  description,
  preview,
  span,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  preview: React.ReactNode;
  span?: "lg";
}) {
  return (
    <div
      className={`card card-hover flex flex-col overflow-hidden p-6 ${
        span === "lg" ? "lg:col-span-3" : ""
      }`}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className={span === "lg" ? "lg:col-span-5" : ""}>
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-white/[0.06]">
              {icon}
            </div>
            <h3 className="display-h3 text-white">{title}</h3>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-white/65">
            {description}
          </p>
        </div>
        <div className={span === "lg" ? "lg:col-span-7" : ""}>
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent">
            {preview}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationsPreview() {
  const steps = [
    { e: "👤", l: "When new client added", s: "Trigger when a new client signs up" },
    { e: "⚡", l: "Run onboarding flow", s: "Kick off the new client setup sequence" },
    { e: "📋", l: "Schedule first check-in", s: "Send the welcome check-in form" },
    { e: "🏋️", l: "Assign training program", s: "Auto-assign starter strength program" },
    { e: "👟", l: "Add to steps challenge", s: "Drop into this month's active challenge" },
    { e: "💬", l: "Add to community", s: "Welcome them into your member community" },
  ];
  return (
    <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
      {steps.map((step, i) => (
        <div
          key={step.l}
          className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
        >
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white/[0.04] text-base">
            {step.e}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-white">{step.l}</span>
              {i === 0 ? null : (
                <ArrowRight className="h-3 w-3 text-white/35" />
              )}
            </div>
            <div className="mt-0.5 text-[11px] text-white/55">{step.s}</div>
          </div>
          <span className="chip border-brand-500/40 bg-brand-500/10 text-[10px] text-brand-200">
            <CheckCircle2 className="h-3 w-3" /> done
          </span>
        </div>
      ))}
    </div>
  );
}

function PaymentsPreview() {
  const data = [22, 28, 24, 32, 36, 30, 44];
  const max = Math.max(...data);
  const recent = [
    { n: "Sarah W.", p: "12-Week Program", a: "$297" },
    { n: "Conor R.", p: "Monthly Coaching", a: "$149" },
    { n: "Alice M.", p: "Starter Pack", a: "$97" },
  ];
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs text-white/55">Revenue</div>
          <div className="font-display text-2xl font-semibold">$48,240</div>
        </div>
        <span className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
          +12%
        </span>
      </div>
      <div className="flex h-16 items-end gap-1.5">
        {data.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-brand-500/40 to-accent-lime/80"
            style={{ height: `${(v / max) * 100}%` }}
          />
        ))}
      </div>
      <div className="space-y-1.5">
        {recent.map((r) => (
          <div
            key={r.n}
            className="flex items-center gap-2.5 rounded-md border border-white/[0.05] bg-white/[0.025] px-2.5 py-1.5"
          >
            <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-[9px] font-bold text-ink-950">
              {r.n.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-medium">{r.n}</div>
              <div className="text-[9px] text-white/55">{r.p}</div>
            </div>
            <div className="text-[11px] font-semibold tabular-nums">{r.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamsPreview() {
  const team = [
    { n: "Alex K.", role: "Owner", c: "from-amber-400 to-orange-500", clients: 14 },
    { n: "Sarah M.", role: "Admin", c: "from-pink-400 to-fuchsia-500", clients: 9 },
    { n: "Jake T.", role: "Standard", c: "from-sky-400 to-indigo-500", clients: 6 },
    { n: "Lisa R.", role: "Standard", c: "from-emerald-400 to-teal-500", clients: 4 },
  ];
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-white/55">Team Members</div>
        <button className="chip border-brand-500/40 bg-brand-500/10 text-brand-200">
          Invite
        </button>
      </div>
      {team.map((m) => (
        <div
          key={m.n}
          className="flex items-center gap-2.5 rounded-md border border-white/[0.05] bg-white/[0.025] px-2.5 py-1.5"
        >
          <div
            className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${m.c} text-[10px] font-bold text-ink-950`}
          >
            {m.n.split(" ").map((p) => p[0]).join("")}
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-medium">{m.n}</div>
            <div className="text-[9px] text-white/55">{m.role}</div>
          </div>
          <div className="text-[10px] text-white/65">{m.clients} clients</div>
        </div>
      ))}
      <div className="mt-1 text-[10px] text-white/45">
        4 members · Role-based access
      </div>
    </div>
  );
}
