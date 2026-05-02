import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Gianni Fabrizio",
    role: "Online Fitness Coach",
    avatar: "GF",
    color: "from-amber-400 to-orange-500",
    body:
      "Having used multiple platforms over my 15 years in fitness — this one has delivered more than any other and it's only getting better.",
  },
  {
    name: "Vegard Mikalsen",
    role: "VM Coaching",
    avatar: "VM",
    color: "from-violet-400 to-purple-500",
    body:
      "I've used a lot of coaching platforms and this is the only one I've been really happy with. Everything is in one place.",
  },
  {
    name: "Jesse Astill",
    role: "ASTL Performance",
    avatar: "JA",
    color: "from-sky-400 to-indigo-500",
    body:
      "HubFit transformed how I run my coaching business. Cut my admin by 75% and let me focus on what I do best — coaching.",
  },
  {
    name: "Jenny Coached",
    role: "Coached by Jenny",
    avatar: "JC",
    color: "from-pink-400 to-fuchsia-500",
    body:
      "My clients adore the app. The branded experience makes us look ten times more professional than spreadsheets ever did.",
  },
  {
    name: "Marco Trans4M",
    role: "Trans4M Performance",
    avatar: "MT",
    color: "from-emerald-400 to-teal-500",
    body:
      "Automations alone saved me hours per week. Onboarding new clients is one click and they're fully set up.",
  },
  {
    name: "Hannah Capo",
    role: "Guerrera Del Capo",
    avatar: "HC",
    color: "from-rose-400 to-red-500",
    body:
      "Community + challenges are a retention dream. My clients show up because they want to — not because I'm chasing them.",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="relative py-24 sm:py-32">
      <div className="container-max container-px">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Customer love</span>
          <h2 className="display-h2 mt-5 max-w-3xl text-white">
            Trusted by coaches{" "}
            <span className="bg-gradient-to-br from-accent-lime to-brand-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
            Join 50,000+ coaches who use HubFit to manage, grow, and scale their
            fitness coaching business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="card card-hover flex flex-col p-6">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-accent-lime text-accent-lime"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                "{r.body}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${r.color} text-xs font-bold text-ink-950`}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {r.name}
                  </div>
                  <div className="text-xs text-white/55">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
