import {
  Bell,
  CalendarDays,
  CreditCard,
  Globe,
  HelpCircle,
  KeyRound,
  Link2,
  LogOut,
  Mail,
  Phone,
  Shield,
  Target,
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/app/PageHeader";

export default function ClientProfilePage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Profile & settings"
        subtitle="Manage your account, plan, and preferences"
      />

      {/* Identity card */}
      <section className="card relative overflow-hidden p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-400/15 blur-3xl" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 text-lg font-bold text-ink-950">
              SW
            </div>
            <div>
              <div className="text-lg font-semibold">Sarah Williams</div>
              <div className="text-[12px] text-white/55">
                Athlete · Member since Jan 2026
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="chip">12-Week Program</span>
                <span className="chip text-accent-lime">Week 4</span>
              </div>
            </div>
          </div>
          <button className="btn-secondary text-xs">Edit profile</button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Field icon={Mail} label="Email" value="sarah@example.com" />
          <Field icon={Phone} label="Phone" value="+44 7700 900123" />
          <Field icon={CalendarDays} label="Birthday" value="Mar 14, 1994" />
        </div>
      </section>

      {/* Goals & program */}
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-accent-lime" />
            <h3 className="display-h3 text-base">Your goals</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {[
              { l: "Primary goal", v: "Body recomposition" },
              { l: "Target weight", v: "68 kg" },
              { l: "Sessions / week", v: "5" },
              { l: "Equipment", v: "Full gym + dumbbells at home" },
              { l: "Dietary notes", v: "No shellfish · vegetarian-flex" },
            ].map((r) => (
              <li
                key={r.l}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm"
              >
                <span className="text-white/55">{r.l}</span>
                <span className="font-medium">{r.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-accent-lime" />
            <h3 className="display-h3 text-base">Your plan</h3>
          </div>
          <div className="mt-4 rounded-2xl border border-accent-lime/20 bg-accent-lime/[0.05] p-4">
            <div className="text-[11px] uppercase tracking-wider text-accent-lime">
              Active subscription
            </div>
            <div className="mt-1 font-display text-xl font-semibold">
              12-Week Program
            </div>
            <div className="mt-1 text-[12px] text-white/65">
              £79 / month · renews on Jun 12, 2026
            </div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/85 hover:bg-white/[0.08]">
                Manage billing
              </button>
              <button className="rounded-full px-3 py-1.5 text-[11px] font-medium text-white/55 hover:text-white">
                View invoices
              </button>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Field icon={CreditCard} label="Card on file" value="Visa ending 4242" />
            <Field icon={Globe} label="Currency" value="GBP (£)" />
          </div>
        </div>
      </section>

      {/* Settings groups */}
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <SettingsGroup
          title="Notifications"
          rows={[
            { icon: Bell, label: "Workout reminders", value: "Daily · 7:00 AM" },
            { icon: Bell, label: "Check-in reminder", value: "Sundays" },
            { icon: Bell, label: "Coach messages", value: "Push + Email" },
          ]}
        />
        <SettingsGroup
          title="Integrations"
          rows={[
            { icon: Link2, label: "Apple Health", value: "Connected" },
            { icon: Link2, label: "Whoop", value: "Connected" },
            { icon: Link2, label: "MyFitnessPal", value: "Not connected" },
          ]}
        />
        <SettingsGroup
          title="Privacy & security"
          rows={[
            { icon: KeyRound, label: "Password", value: "Updated 3 weeks ago" },
            { icon: Shield, label: "Two-factor auth", value: "On" },
            { icon: Shield, label: "Photo visibility", value: "Coach only" },
          ]}
        />
        <SettingsGroup
          title="Help"
          rows={[
            { icon: HelpCircle, label: "Help center", value: "" },
            { icon: HelpCircle, label: "Contact support", value: "" },
          ]}
        />
      </section>

      <div className="mt-6">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65 hover:bg-white/[0.08] hover:text-white"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </Link>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
      <Icon className="h-4 w-4 text-white/55" />
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-wider text-white/45">
          {label}
        </div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function SettingsGroup({
  title,
  rows,
}: {
  title: string;
  rows: { icon: typeof Bell; label: string; value: string }[];
}) {
  return (
    <div className="card p-5 sm:p-6">
      <h3 className="display-h3 text-base">{title}</h3>
      <ul className="mt-4 divide-y divide-white/[0.04]">
        {rows.map((r) => (
          <li
            key={r.label}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            <r.icon className="h-4 w-4 text-white/55" />
            <span className="flex-1 text-sm">{r.label}</span>
            <span className="text-[11px] text-white/55">{r.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
