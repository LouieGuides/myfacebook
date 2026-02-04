import { AppShell } from "@/app/components/app-shell";

const phases = [
  {
    title: "Phase 1: MVP",
    label: "Now",
    description:
      "Clickable demo powered by mock data to prove the two-mode community concept.",
    outcomes: [
      "Huddle + HobbyHub mode switching",
      "Community discovery and feed experiences",
      "Post composer with local state",
      "Pitch-ready visual system",
    ],
    status: "Currently demonstrating",
  },
  {
    title: "Phase 2: Real users + auth",
    label: "Next",
    description:
      "Introduce real accounts, onboarding, and community management tools.",
    outcomes: [
      "Authentication and user profiles",
      "Invite flows and community moderation",
      "Real-time posting and reactions",
      "Analytics for community health",
    ],
    status: "Planned for build",
  },
  {
    title: "Phase 3: Monetization",
    label: "Scale",
    description:
      "Layer in revenue while keeping the community-first experience intact.",
    outcomes: [
      "Ads and promoted posts",
      "Creator subscriptions",
      "Sponsored community hubs",
      "Marketplace partnerships",
    ],
    status: "Business expansion",
  },
];

export default function RoadmapPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-[fade-up_700ms_ease-out]">
            <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Pitch roadmap
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Roadmap to launch myFacebookai
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              A clear, staged plan for turning the demo into a revenue-generating
              community platform.
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              This page is designed for stakeholder pitch conversations, not end
              users.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-lg animate-[float-in_700ms_ease-out]">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Narrative
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              Build trust, then scale revenue
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                Phase 1 proves product-market fit in two community modes.
              </p>
              <p>
                Phase 2 brings real users with safety, moderation, and identity.
              </p>
              <p>
                Phase 3 introduces monetization after engagement is stable.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md animate-[fade-up_600ms_ease-out]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {phase.label}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {phase.status}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
              <div className="mt-5 space-y-2">
                {phase.outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Pitch notes
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Why this sequencing works
              </h2>
            </div>
            <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Stakeholder ready
            </span>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Fast validation",
                description:
                  "Mock data proves interaction design before heavy engineering.",
              },
              {
                title: "Risk reduction",
                description:
                  "Auth and moderation arrive only after the concept resonates.",
              },
              {
                title: "Revenue timing",
                description:
                  "Monetization waits until engagement and trust are established.",
              },
            ].map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600"
              >
                <p className="font-semibold text-slate-900">{note.title}</p>
                <p className="mt-2">{note.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
