import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
  strokeWidth?: number;
  title?: string;
};

const STROKE = 1.5;

function Base({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden={!title}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function Beaker({ className, title, strokeWidth }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden={!title}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 3h6" />
      <path d="M10 3v5.2L5.6 17.6A2 2 0 0 0 7.4 20.6h9.2a2 2 0 0 0 1.8-2.9L14 8.2V3" />
      <path
        d="M7.4 14h9.2"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeDasharray="1.4 1.4"
      />
      <circle cx="10.5" cy="16.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13.2" cy="17.4" r="0.45" fill="currentColor" stroke="none" />
      <circle cx="11.6" cy="18.6" r="0.4" fill="currentColor" stroke="none" />
      <path d="M16 4.5h1.5" strokeOpacity="0.55" />
      <path d="M17 3v3" strokeOpacity="0.55" />
    </svg>
  );
}

export function Atom({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="3" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="21" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function Caliper({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M3 9h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H3z" />
      <path d="M3 9V5" />
      <path d="M9 9V6" strokeOpacity="0.6" />
      <path d="M13 9V6.5" strokeOpacity="0.6" />
      <path d="M17 9V5" />
      <path d="M5 13v3" />
      <path d="M11 13v3" strokeOpacity="0.6" />
      <path d="M17 13v3" />
      <path d="M3 19h18" />
      <path d="M3 17v2" />
      <path d="M21 17v2" />
    </Base>
  );
}

export function OscilloscopeWave({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path
        d="M2.5 12h19"
        strokeOpacity="0.35"
        strokeDasharray="1.2 1.2"
      />
      <path
        d="M12 4.5v15"
        strokeOpacity="0.35"
        strokeDasharray="1.2 1.2"
      />
      <path
        d="M3.5 13c1.5 0 2-3 3.5-3s2 4 3.5 4 2-7 3.5-7 2 6 3.5 6 1.5-2 3-2"
        stroke="currentColor"
      />
      <circle cx="3.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="11" r="0.6" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function Hexagon({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z" />
      <path
        d="M12 2.8v18.4M3.5 7l17 10M20.5 7l-17 10"
        strokeOpacity="0.35"
      />
    </Base>
  );
}

export function Microscope({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M9 3h4l2 2-2 2H9z" />
      <path d="M11 7v6" />
      <path d="M8 13h6" />
      <path d="M11 13a4 4 0 0 1 4 4v1H7v-1a4 4 0 0 1 4-4z" />
      <path d="M5 21h14" />
      <path d="M14 5l3-1.5" strokeOpacity="0.55" />
      <circle cx="17.5" cy="3.4" r="0.5" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function Schematic({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M3 7h6l2 3h4l2-3h4" />
      <path d="M3 17h4l2-3h6l2 3h4" />
      <circle cx="9" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="17" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="17" r="1" fill="currentColor" stroke="none" />
      <path d="M11 10v4" />
      <path d="M13 10v4" />
    </Base>
  );
}

export function Crosshair({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" strokeOpacity="0.55" />
      <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function Blueprint({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 8h18M3 14h18M8 3v18M14 3v18" strokeOpacity="0.35" />
      <path d="M3 3l2 2M21 3l-2 2M3 21l2-2M21 21l-2-2" />
    </Base>
  );
}

export function Pulse({ className, title }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M2 12h4l2-6 4 12 3-9 2 3h5" />
      <circle cx="2" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="22" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </Base>
  );
}
