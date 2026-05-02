import Link from "next/link";
import { Logo } from "./Logo";

const COLS: { title: string; items: string[] }[] = [
  {
    title: "Platform",
    items: ["Coaching", "Engagement", "On-Demand", "Scale", "Integrations"],
  },
  {
    title: "Resources",
    items: ["Blog", "Help Center", "Changelog", "Community", "API"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact", "Brand"],
  },
  {
    title: "Legal",
    items: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-max container-px py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-white/55">
              The all-in-one fitness coaching platform. Train, manage, and grow
              your business — all from one place.
            </p>
            <div className="mt-5 flex gap-2">
              <Link href="#" className="btn-secondary text-xs">
                iOS App
              </Link>
              <Link href="#" className="btn-secondary text-xs">
                Android App
              </Link>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.items.map((it) => (
                  <li key={it}>
                    <Link
                      href="#"
                      className="text-white/55 transition hover:text-white"
                    >
                      {it}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} Podium Lab. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/45">
            <span>Made with care</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Built on Next.js + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
