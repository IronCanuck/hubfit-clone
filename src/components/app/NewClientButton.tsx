"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Copy,
  Mail,
  Plus,
  Send,
  Sparkles,
  UserPlus,
  X,
} from "lucide-react";
import { IconChrome } from "@/components/lab/IconChrome";
import { Beaker } from "@/components/lab/icons";

const COLORS = [
  "from-accent-lime to-brand-400",
  "from-pink-400 to-fuchsia-500",
  "from-sky-400 to-indigo-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
];

const PLANS = [
  "12-Week Program",
  "Monthly Coaching",
  "Starter Pack",
  "Premium Plan",
];

const PROGRAMS = [
  "Push/Pull/Legs",
  "Hybrid Athlete",
  "Beginner Strength",
  "Advanced Powerbuild",
  "Fat Loss Focus",
  "Mass Builder",
  "Mobility Prime",
  "Hypertrophy 101",
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 32);
}

function randomCode(len = 6) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < len; i++)
    out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

type Step = "form" | "success";

type Variant = "primary" | "secondary";

export function NewClientButton({
  variant = "primary",
  className = "",
  hideOnMobile = false,
}: {
  variant?: Variant;
  className?: string;
  hideOnMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(PLANS[0]);
  const [program, setProgram] = useState(PROGRAMS[0]);
  const [color, setColor] = useState(COLORS[0]);
  const [sendInvite, setSendInvite] = useState(true);
  const [autoAssignProgram, setAutoAssignProgram] = useState(true);

  const [createdSlug, setCreatedSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const inviteLink = useMemo(() => {
    if (!createdSlug) return "";
    if (typeof window === "undefined") return `/invite/${createdSlug}`;
    return `${window.location.origin}/invite/${createdSlug}`;
  }, [createdSlug]);

  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "NC";
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }, [name]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function closeModal() {
    setOpen(false);
    setTimeout(() => {
      setStep("form");
      setName("");
      setEmail("");
      setPlan(PLANS[0]);
      setProgram(PROGRAMS[0]);
      setColor(COLORS[0]);
      setSendInvite(true);
      setAutoAssignProgram(true);
      setCreatedSlug(null);
      setCopied(false);
    }, 200);
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const slug = `${slugify(name) || "client"}-${randomCode()}`;
    setCreatedSlug(slug);
    setStep("success");
  }

  async function copyLink() {
    if (!inviteLink) return;
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  const triggerClass =
    variant === "primary"
      ? "btn-primary text-xs"
      : "btn-secondary text-xs";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${triggerClass}${hideOnMobile ? " hidden sm:inline-flex" : ""}${className ? ` ${className}` : ""}`}
      >
        <Plus className="h-3.5 w-3.5" /> New client
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-client-title"
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        >
          <div
            aria-hidden
            onClick={closeModal}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
          />

          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-3xl border border-white/[0.08] bg-ink-900/95 shadow-[0_30px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:rounded-3xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-accent-lime/10 blur-3xl" />

            <div className="relative flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-2.5">
                {step === "success" ? (
                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white"
                    aria-label="Back"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                ) : (
                  <IconChrome
                    icon={<Beaker className="h-full w-full" />}
                    tone="lime"
                    size="sm"
                    label="NC"
                  />
                )}
                <div>
                  <h2
                    id="new-client-title"
                    className="font-display text-base font-semibold tracking-tight"
                  >
                    {step === "form" ? "Add a client" : "Client invited"}
                  </h2>
                  <p className="text-[11px] text-white/55">
                    {step === "form"
                      ? "Set up their plan and send an invite"
                      : "Share the personal invite link to get them started"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="grid h-8 w-8 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {step === "form" ? (
              <form onSubmit={handleCreate} className="relative p-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${color} text-sm font-bold text-ink-950`}
                  >
                    {initials}
                  </div>
                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Full name
                    </span>
                    <input
                      autoFocus
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Sarah Williams"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                  />
                </label>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Plan
                    </span>
                    <select
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                    >
                      {PLANS.map((p) => (
                        <option key={p} value={p} className="bg-ink-900">
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Program
                    </span>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p} value={p} className="bg-ink-900">
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Avatar color
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {COLORS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setColor(c)}
                        aria-label={`Pick color ${c}`}
                        className={`h-8 w-8 rounded-full bg-gradient-to-br ${c} ring-offset-2 ring-offset-ink-900 transition ${
                          color === c
                            ? "ring-2 ring-white"
                            : "ring-1 ring-white/10 hover:ring-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Toggle
                    label="Send email invite"
                    description="Email a personal signup link as soon as you save"
                    value={sendInvite}
                    onChange={setSendInvite}
                  />
                  <Toggle
                    label="Auto-assign program"
                    description="Drop this client straight into the selected program"
                    value={autoAssignProgram}
                    onChange={setAutoAssignProgram}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-[11px] text-white/55">
                    <Sparkles className="h-3.5 w-3.5 text-accent-lime" />
                    A personal invite link will be generated next
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="btn-ghost text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!name.trim()}
                      className="btn-primary text-xs disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <UserPlus className="h-3.5 w-3.5" /> Add client
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="relative p-5">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${color} text-sm font-bold text-ink-950`}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{name}</div>
                    <div className="truncate text-[11px] text-white/55">
                      {plan} · {program}
                    </div>
                  </div>
                  <span className="chip border-accent-lime/30 bg-accent-lime/10 text-accent-lime">
                    <Check className="h-3 w-3" /> Added
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Personal invite link
                  </span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                    <span className="truncate text-sm text-white/85">
                      {inviteLink}
                    </span>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-white/80 hover:bg-white/[0.08]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-accent-lime" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <a
                      href={`mailto:${encodeURIComponent(
                        email || ""
                      )}?subject=${encodeURIComponent(
                        `You're invited to coach with Podium Lab`
                      )}&body=${encodeURIComponent(
                        `Hey ${name.split(" ")[0] || ""} — sign up to start your ${plan}: ${inviteLink}`
                      )}`}
                      className="btn-secondary justify-center text-xs"
                    >
                      <Mail className="h-3.5 w-3.5" /> Email invite
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="btn-secondary justify-center text-xs"
                    >
                      <Send className="h-3.5 w-3.5" /> Send link
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-white/65">
                  We&apos;ll
                  {sendInvite
                    ? " email this invite right away and "
                    : " hold off on the email and "}
                  {autoAssignProgram
                    ? `drop ${name.split(" ")[0] || "them"} straight into ${program}.`
                    : `let you assign a program when you're ready.`}
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-ghost text-xs"
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep("form");
                      setName("");
                      setEmail("");
                      setCreatedSlug(null);
                    }}
                    className="btn-primary text-xs"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function Toggle({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-left transition hover:bg-white/[0.04]"
    >
      <span className="flex-1">
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block text-[11px] text-white/55">{description}</span>
      </span>
      <span
        aria-hidden
        className={`relative h-5 w-9 shrink-0 rounded-full transition ${
          value ? "bg-accent-lime" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
            value ? "left-[18px]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
}
