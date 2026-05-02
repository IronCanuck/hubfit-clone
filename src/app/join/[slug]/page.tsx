import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { Logo } from "@/components/Logo";

export default async function JoinTeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teamName = humanizeSlug(slug);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[120%] -translate-x-1/2 rounded-full bg-accent-lime/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[480px] rounded-full bg-accent-violet/15 blur-3xl" />
      </div>

      <header className="container-max container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <Link href="/login" className="btn-ghost text-xs">
          Already on Podium Lab? Log in
        </Link>
      </header>

      <main className="container-max container-px grid gap-8 pb-16 pt-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-10">
        <section>
          <span className="eyebrow">
            <Users className="h-3.5 w-3.5" /> Team invite
          </span>
          <h1 className="display-h1 mt-5">
            Join <span className="text-accent-lime">{teamName}</span> on Podium Lab
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/65 sm:text-lg">
            Your coach has invited you to train with the team. Create your
            athlete profile in under a minute and get instant access to
            programs, check-ins, and team challenges.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Personalized training and nutrition built for you",
              "Track lifts, photos, and weekly check-ins from your phone",
              "Compete with teammates on shared challenges",
              "Direct messaging with your coach",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-lime" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/signup?team=${slug}`}
              className="btn-primary text-sm"
            >
              Join the team <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-lime" />
              Secure invite · code{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-white/80">
                {slug}
              </code>
            </span>
          </div>
        </section>

        <aside className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-accent-lime/20 blur-3xl" />

          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-lime to-brand-400 text-base font-bold text-ink-950">
              {initials(teamName)}
            </div>
            <div>
              <div className="text-base font-semibold">{teamName}</div>
              <div className="text-[11px] text-white/55">
                Coached on Podium Lab · {randomBetween(8, 48)} active athletes
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: "Athletes", v: randomBetween(8, 48).toString() },
              { l: "Programs", v: randomBetween(2, 8).toString() },
              { l: "Adherence", v: `${randomBetween(82, 96)}%` },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3 text-center"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/45">
                  {s.l}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="text-[11px] uppercase tracking-wider text-white/45">
              What happens next
            </div>
            <ol className="mt-3 space-y-2.5 text-sm text-white/80">
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-lime/15 text-[11px] font-semibold text-accent-lime">
                  1
                </span>
                Create your athlete profile
              </li>
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-lime/15 text-[11px] font-semibold text-accent-lime">
                  2
                </span>
                Answer a few onboarding questions
              </li>
              <li className="flex gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-lime/15 text-[11px] font-semibold text-accent-lime">
                  3
                </span>
                Get matched with your team program
              </li>
            </ol>
          </div>

          <Link
            href={`/signup?team=${slug}`}
            className="btn-primary mt-6 w-full justify-center text-sm"
          >
            Continue to signup <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </main>
    </div>
  );
}

function humanizeSlug(slug: string) {
  const stripped = slug.replace(/-[a-z0-9]{4,6}$/i, "");
  return stripped
    .split("-")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ") || "Your Team";
}

function initials(name: string) {
  return (
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "TM"
  );
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
