import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Log in — Podium Lab",
  description: "Log into your Podium Lab coaching account.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="display-h2">Welcome back</h1>
        <p className="mt-3 text-sm text-white/65">
          Log in to your coaching workspace.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="btn-secondary justify-center">
          <GoogleMark className="h-4 w-4" /> Continue with Google
        </button>
        <button className="btn-secondary justify-center">
          <AppleMark className="h-4 w-4" /> Continue with Apple
        </button>
      </div>

      <div className="flex items-center gap-3 text-xs text-white/45">
        <div className="h-px flex-1 bg-white/10" />
        or use email
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <AuthForm mode="login" />

      <p className="text-center text-sm text-white/55">
        New to Podium Lab?{" "}
        <Link href="/signup" className="font-semibold text-accent-lime hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#EA4335" d="M12 11v3.2h4.5c-.2 1.2-1.4 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2L17.5 7C16.2 5.8 14.3 5 12 5 7.6 5 4 8.6 4 13s3.6 8 8 8c4.6 0 7.6-3.2 7.6-7.7 0-.5-.1-.9-.1-1.3H12z" />
    </svg>
  );
}
function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M16.5 12.4c0-2.4 2-3.6 2.1-3.6-1.1-1.6-2.9-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9s-2-.9-3.2-.9c-1.6 0-3.2.9-4 2.5-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1 0-2.6-1-2.6-3.9zM14.5 4.8c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.2-.6 2.9-1.5z" />
    </svg>
  );
}
