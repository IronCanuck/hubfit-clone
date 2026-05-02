import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="display-h2 max-w-3xl text-white">{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
      {(primaryCta || secondaryCta) && (
        <div
          className={cn(
            "mt-2 flex flex-wrap items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {primaryCta ? (
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
