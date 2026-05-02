import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  preview,
  className,
  span,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  preview?: React.ReactNode;
  className?: string;
  span?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "card card-hover group relative flex flex-col overflow-hidden p-6",
        span === "lg" && "md:col-span-2",
        className
      )}
    >
      {preview ? (
        <div className="pointer-events-none mb-5 h-44 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent">
          {preview}
        </div>
      ) : null}
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-white/[0.06]">
          <Icon className="h-4.5 w-4.5 text-accent-lime" />
        </div>
        <h3 className="display-h3 text-white">{title}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-white/65">
        {description}
      </p>
    </div>
  );
}
