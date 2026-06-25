import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TRADITIONAL = [
  "Months-long implementation projects",
  "Dense, developer-heavy admin menus",
  "Specialist needed for every change",
  "Configuration scattered across screens",
];

const ONESHERPA = [
  "Stand up a working setup in a sitting",
  "Describe changes in plain language",
  "Owners and consultants self-serve",
  "Projects, objects, and data in one cockpit",
];

export function Comparison() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Skip the long, painful ERP rollout.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The outcome of a traditional ERPNext implementation, without the complexity
            that usually comes with it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-background-subtle p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Traditional ERP setup
            </h3>
            <ul className="mt-5 space-y-3">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted">
                    <X className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-accent/30 bg-card p-7 shadow-sm ring-1 ring-accent/10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              With onesherpa
            </h3>
            <ul className="mt-5 space-y-3">
              {ONESHERPA.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft">
                    <Check className="h-3 w-3 text-accent" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
