import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Form panel */}
      <div className="relative flex flex-col">
        <header className="container-px flex items-center justify-between py-6">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <Link href="/" className="btn-ghost text-xs">
            Back to site
          </Link>
        </header>
        <div className="flex flex-1 items-center justify-center px-6 pb-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>

      {/* Visual panel */}
      <aside className="relative hidden overflow-hidden border-l border-white/[0.06] bg-gradient-to-br from-brand-700/30 via-ink-800 to-ink-900 lg:block">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="absolute inset-0 bg-radial-spot opacity-70" />
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <div>
            <span className="eyebrow">
              The all-in-one coaching platform
            </span>
            <h2 className="display-h2 mt-6 max-w-md text-white">
              Build, scale, and{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                automate
              </span>{" "}
              your coaching business.
            </h2>
            <p className="mt-5 max-w-md text-white/65">
              Training, nutrition, check-ins, habits, community, payments — and
              your own branded mobile app — all in one place.
            </p>
          </div>

          <figure className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur">
            <blockquote className="font-display text-lg leading-snug text-white/90">
              "I've used a lot of coaching platforms — this is the only one
              where everything's in one place."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-purple-500 font-bold text-ink-950">
                VM
              </div>
              <div>
                <div className="font-semibold text-white">Vegard Mikalsen</div>
                <div className="text-white/55">VM Coaching</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </aside>
    </div>
  );
}
