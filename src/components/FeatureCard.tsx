import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconChrome, BlueprintCorners } from "./lab/IconChrome";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  preview,
  className,
  span,
  label,
  tone = "lime",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  preview?: React.ReactNode;
  className?: string;
  span?: "sm" | "md" | "lg";
  label?: string;
  tone?: "lime" | "violet" | "mint" | "white";
}) {
  return (
    <div
      className={cn(
        "card card-hover group relative flex flex-col overflow-hidden p-6",
        span === "lg" && "md:col-span-2",
        className
      )}
    >
      <BlueprintCorners colorClass="border-white/15" inset={10} size={10} />
      {preview ? (
        <div className="pointer-events-none mb-5 h-44 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent">
          {preview}
        </div>
      ) : null}
      <div className="flex items-center gap-3">
        <IconChrome
          icon={<Icon className="h-full w-full" strokeWidth={1.6} />}
          tone={tone}
          size="md"
          label={label}
        />
        <h3 className="display-h3 text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {description}
      </p>
    </div>
  );
}
