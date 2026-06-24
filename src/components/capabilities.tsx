import {
  MessageSquare,
  Boxes,
  GitBranch,
  Upload,
  Rocket,
  ShieldCheck,
  History,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  {
    icon: MessageSquare,
    title: "Conversational setup",
    body: "Greet the home screen with what you want to make and watch it take shape in ERPNext.",
  },
  {
    icon: Boxes,
    title: "DocTypes & objects",
    body: "Create and link the data models your business runs on, no schema spelunking required.",
  },
  {
    icon: GitBranch,
    title: "Projects",
    body: "Organize work into projects that map to how your team actually operates.",
  },
  {
    icon: Upload,
    title: "Imports",
    body: "Pull in existing records, map columns, and clean inconsistencies before they go live.",
  },
  {
    icon: Rocket,
    title: "Publish & run",
    body: "Move configurations from draft to live with a clear, reviewable publishing step.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent guardrails",
    body: "Changes stay coherent across the system so one edit never quietly breaks another.",
  },
  {
    icon: History,
    title: "Clear history",
    body: "See what was built, when, and why, so every change is reviewable and traceable.",
  },
  {
    icon: Users,
    title: "Built for implementers",
    body: "Owners, consultants, and Frappe Partners can configure client systems fast.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 border-t border-border bg-background-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            If you can describe it, OneSherpa can build it.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One console for the whole job, from first setup to day-to-day operation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 0.05}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
