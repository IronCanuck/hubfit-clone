"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 600);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {mode === "signup" ? (
        <Field label="Full name" name="name">
          <input
            name="name"
            required
            placeholder="Sarah Coach"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
          />
        </Field>
      ) : null}

      <Field label="Email" name="email">
        <input
          name="email"
          type="email"
          required
          placeholder="you@gym.com"
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
        />
      </Field>

      <Field
        label="Password"
        name="password"
        right={
          mode === "login" ? (
            <Link href="#forgot" className="text-xs text-white/55 hover:text-white">
              Forgot?
            </Link>
          ) : null
        }
      >
        <div className="relative">
          <input
            name="password"
            type={showPw ? "text" : "password"}
            required
            placeholder={
              mode === "signup" ? "Create a strong password" : "Enter password"
            }
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-11 text-sm text-white placeholder:text-white/35 focus:border-accent-lime/60 focus:outline-none focus:ring-2 focus:ring-accent-lime/20"
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-white/55 hover:bg-white/[0.05] hover:text-white"
            aria-label={showPw ? "Hide password" : "Show password"}
          >
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </Field>

      {mode === "login" ? (
        <label className="flex items-center gap-2 text-xs text-white/55">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/15 bg-white/[0.05] accent-accent-lime"
          />
          Keep me signed in
        </label>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-2 justify-center"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {mode === "signup" ? "Create account" : "Log in"}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  children,
  right,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/65">{label}</span>
        {right}
      </div>
      {children}
    </label>
  );
}
