import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Implement",
    body: "Describe your business in plain language. onesherpa scopes the projects, DocTypes, and data model and stands up a working ERPNext setup.",
  },
  {
    n: "02",
    title: "Customize",
    body: "Refine anything by talking to it. Add fields, links, and views, or import your existing data. Every change stays consistent across the system.",
  },
  {
    n: "03",
    title: "Run",
    body: "Publish and operate from one cockpit. Projects, objects, imports, and settings live together instead of scattered across ERP admin screens.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From idea to running ERP in three steps.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The same spine the product follows. Implement, customize, run, without
            wrestling raw ERP configuration.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="bg-card p-7">
              <span className="font-mono text-sm text-accent">{step.n}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
