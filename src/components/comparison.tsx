import { Check } from "lucide-react";
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="rounded-2xl border border-border bg-background-subtle p-7 sm:p-9">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Traditional ERP setup
            </h3>
            <ul className="mt-5 space-y-3">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/3 bg-foreground/70" />
                <div className="h-full w-1/3 bg-foreground/45" />
                <div className="h-full w-1/3 bg-foreground/25" />
              </div>
              <div className="mt-3 grid grid-cols-3 text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                <span>Discovery</span>
                <span>Configuration</span>
                <span>Handover</span>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-2xl border border-accent/30 bg-card p-7 shadow-sm ring-1 ring-accent/10 sm:p-9"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                With onesherpa
              </h3>
              <span className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                Faster
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {ONESHERPA.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-accent">
                    <Check className="size-3 text-accent-foreground" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-accent" />
              <div className="mt-3 text-center text-[11px] font-medium uppercase tracking-wide text-accent">
                Describe it, done
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
