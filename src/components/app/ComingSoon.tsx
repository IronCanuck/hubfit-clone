import { LucideIcon, Sparkles } from "lucide-react";
import { PageHeader } from "./PageHeader";

export function ComingSoon({
  icon: Icon,
  title,
  subtitle,
  features,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
}) {
  return (
    <div className="container-max">
      <PageHeader title={title} subtitle={subtitle} />

      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div aria-hidden className="absolute inset-0 -z-10 bg-radial-spot opacity-60" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-lime to-brand-400 shadow-[0_0_40px_rgba(198,248,75,0.25)]">
              <Icon className="h-7 w-7 text-ink-950" />
            </div>
            <h2 className="display-h2 mt-6">
              {title}{" "}
              <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
                module
              </span>
            </h2>
            <p className="mt-4 max-w-md text-white/65">
              We're rolling out the {title.toLowerCase()} workspace next. Here's
              a peek at what's shipping.
            </p>
            <button className="btn-primary mt-6">
              <Sparkles className="h-4 w-4" />
              Join beta waitlist
            </button>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-lime" />
                <span className="text-white/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
