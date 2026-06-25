import { Reveal } from "@/components/reveal";
import { asset } from "@/lib/base-path";

const FEATURES = [
  {
    img: "/illustrations/robotic-process-automation.svg",
    tag: "AI-native configuration",
    title: "Describe it, onesherpa builds it.",
    body: "Spin up projects, DocTypes, and workflows from plain language instead of digging through dense, developer-heavy ERP menus.",
  },
  {
    img: "/illustrations/document-processing.svg",
    tag: "DocTypes & objects",
    title: "Model your business cleanly.",
    body: "Create and connect the objects your work runs on, with fields, links, and views that stay consistent across the whole system.",
  },
  {
    img: "/illustrations/orchestration.svg",
    tag: "Unified cockpit",
    title: "One dashboard, not ten screens.",
    body: "Projects, imports, publishing, and settings live together in a single consistent console instead of scattered ERP admin pages.",
  },
  {
    img: "/illustrations/data-transformation.svg",
    tag: "Data & imports",
    title: "Bring your data with you.",
    body: "Import, map, and clean existing records so your ERP starts with real context rather than a blank slate.",
  },
];

export function Features() {
  return (
    <section id="platform" className="scroll-mt-20 border-t border-border bg-background-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">The platform</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A unified admin cockpit built for ERPNext teams.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to configure and run ERPNext, in one consistent place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.tag}
              delay={i * 0.06}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center border-b border-border bg-accent-soft/40 p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(f.img)}
                  alt=""
                  className="h-40 w-full max-w-[320px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{f.tag}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
