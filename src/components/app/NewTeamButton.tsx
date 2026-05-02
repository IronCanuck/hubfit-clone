"use client";

import { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
  Mail,
  Plus,
  QrCode,
  Share2,
  Sparkles,
  Users,
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

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 32);
}

function randomCode(len = 5) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < len; i++)
    out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

type Step = "form" | "success";

export function NewTeamButton() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState<number | "">(25);
  const [color, setColor] = useState(COLORS[0]);
  const [requireApproval, setRequireApproval] = useState(true);
  const [autoAssignProgram, setAutoAssignProgram] = useState(true);

  const [createdSlug, setCreatedSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const teamLink = useMemo(() => {
    if (!createdSlug) return "";
    if (typeof window === "undefined") return `/join/${createdSlug}`;
    return `${window.location.origin}/join/${createdSlug}`;
  }, [createdSlug]);

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
  }, [open]);

  function closeModal() {
    setOpen(false);
    setTimeout(() => {
      setStep("form");
      setName("");
      setSport("");
      setDescription("");
      setCapacity(25);
      setColor(COLORS[0]);
      setRequireApproval(true);
      setAutoAssignProgram(true);
      setCreatedSlug(null);
      setCopied(false);
    }, 200);
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const slug = `${slugify(name) || "team"}-${randomCode()}`;
    setCreatedSlug(slug);
    setStep("success");
  }

  async function copyLink() {
    if (!teamLink) return;
    try {
      await navigator.clipboard.writeText(teamLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  function downloadQr() {
    const svg = document.getElementById("team-qr") as SVGSVGElement | null;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${createdSlug ?? "team"}-qr.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-secondary text-xs"
      >
        <Users className="h-3.5 w-3.5" /> New team
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-team-title"
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
                    label="TM"
                  />
                )}
                <div>
                  <h2
                    id="new-team-title"
                    className="font-display text-base font-semibold tracking-tight"
                  >
                    {step === "form" ? "Create a team" : "Team created"}
                  </h2>
                  <p className="text-[11px] text-white/55">
                    {step === "form"
                      ? "Group athletes under one shared profile"
                      : "Share the link or QR with your athletes"}
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
                <label className="block">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Team name
                  </span>
                  <input
                    autoFocus
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Westside Barbell Crew"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                  />
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Sport / focus
                    </span>
                    <input
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                      placeholder="Powerlifting"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Capacity
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={capacity}
                      onChange={(e) =>
                        setCapacity(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      placeholder="25"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Description
                  </span>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                    placeholder="What's this team about? (optional)"
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
                  />
                </label>

                <div className="mt-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Team color
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
                    label="Require approval to join"
                    description="Review athletes before they appear in your roster"
                    value={requireApproval}
                    onChange={setRequireApproval}
                  />
                  <Toggle
                    label="Auto-assign default program"
                    description="New members get your starter program on signup"
                    value={autoAssignProgram}
                    onChange={setAutoAssignProgram}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-[11px] text-white/55">
                    <Sparkles className="h-3.5 w-3.5 text-accent-lime" />
                    A signup link & QR will be generated next
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
                      <Plus className="h-3.5 w-3.5" /> Create team
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
                    {name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase() || "TM"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{name}</div>
                    <div className="truncate text-[11px] text-white/55">
                      {sport ? `${sport} · ` : ""}
                      {capacity ? `${capacity} seats` : "Unlimited"}
                    </div>
                  </div>
                  <span className="chip border-accent-lime/30 bg-accent-lime/10 text-accent-lime">
                    <Check className="h-3 w-3" /> Live
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-stretch">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      Team signup link
                    </span>
                    <div className="mt-1.5 flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                      <span className="truncate text-sm text-white/85">
                        {teamLink}
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
                        href={`mailto:?subject=${encodeURIComponent(
                          `Join ${name} on Podium Lab`
                        )}&body=${encodeURIComponent(
                          `Hey — sign up to join the team here: ${teamLink}`
                        )}`}
                        className="btn-secondary justify-center text-xs"
                      >
                        <Mail className="h-3.5 w-3.5" /> Email
                      </a>
                      <button
                        type="button"
                        onClick={async () => {
                          if (
                            typeof navigator !== "undefined" &&
                            "share" in navigator
                          ) {
                            try {
                              await (
                                navigator as Navigator & {
                                  share: (data: ShareData) => Promise<void>;
                                }
                              ).share({
                                title: `Join ${name}`,
                                text: `Sign up to join ${name} on Podium Lab`,
                                url: teamLink,
                              });
                            } catch {
                              /* user canceled */
                            }
                          } else {
                            copyLink();
                          }
                        }}
                        className="btn-secondary justify-center text-xs"
                      >
                        <Share2 className="h-3.5 w-3.5" /> Share
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                      QR code
                    </span>
                    <div className="mt-1.5 rounded-xl border border-white/10 bg-white p-2.5">
                      <QRCodeSVG
                        id="team-qr"
                        value={teamLink}
                        size={132}
                        bgColor="#ffffff"
                        fgColor="#05060a"
                        level="M"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={downloadQr}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] text-white/65 hover:text-white"
                    >
                      <Download className="h-3 w-3" /> Download SVG
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex items-start gap-2.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent-violet/15 text-accent-violet">
                      <QrCode className="h-3.5 w-3.5" />
                    </span>
                    <div className="text-[11px] leading-relaxed text-white/65">
                      Athletes who scan this code or open the link land on the
                      team profile and can sign up in seconds. New signups will
                      {requireApproval
                        ? " appear in your approvals queue"
                        : " join the team automatically"}
                      {autoAssignProgram
                        ? " and receive your default program."
                        : "."}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-ghost text-xs"
                  >
                    Done
                  </button>
                  <a
                    href={teamLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs"
                  >
                    Preview team page
                  </a>
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
