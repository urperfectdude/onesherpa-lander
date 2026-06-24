import { Sparkles, Check } from "lucide-react";
import { BuildForm } from "@/components/build-form";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand wash behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute left-1/2 top-[-120px] h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-glow opacity-[0.10] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            AI-native admin console for ERPNext
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Configure your ERP with natural language.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            OneSherpa sits on top of ERPNext and configures it the moment you describe
            what you want. Implement, customize, and run from one clean cockpit.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <BuildForm />
            <p className="mt-3 text-xs text-muted-foreground">
              Drop in your company site. We scope a starter ERPNext setup for you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <WorkspaceMock />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * A static mock of the OneSherpa chat workspace: the conversational cockpit
 * where you describe what you want and it configures ERPNext for you.
 */
function WorkspaceMock() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-44px_rgba(11,18,32,0.45)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="ml-3 inline-flex items-center gap-2 rounded-md bg-card px-2.5 py-1 text-xs text-muted-foreground">
          onesherpa.ai / chat
        </div>
      </div>

      <div className="grid sm:grid-cols-[200px_1fr]">
        {/* side rail */}
        <aside className="hidden border-r border-border bg-background-subtle p-4 sm:block">
          <p className="px-1 text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
            Workspace
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {[
              { label: "Chat", active: true },
              { label: "Projects" },
              { label: "DocTypes & Objects" },
              { label: "Imports" },
              { label: "Published" },
              { label: "Settings" },
            ].map((item) => (
              <li
                key={item.label}
                className={
                  "rounded-lg px-3 py-2 " +
                  (item.active
                    ? "bg-accent-soft font-medium text-accent"
                    : "text-muted-foreground")
                }
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* chat thread */}
        <div className="p-5 sm:p-7">
          <p className="text-lg font-medium text-foreground">
            Hi Maya, what do you want to make?
          </p>

          <div className="mt-5 space-y-4">
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent px-4 py-3 text-sm text-accent-foreground">
              Set up a project tracker with tasks, owners, and due dates, linked to
              our existing Customers.
            </div>

            <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm">
              <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden /> Building in ERPNext
              </p>
              <ul className="space-y-1.5 text-muted-foreground">
                {[
                  "Created DocType: Project Task (tasks, owner, due date)",
                  "Linked Project Task to Customer",
                  "Added a board view grouped by owner",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* prompt box */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-background-subtle px-4 py-3 text-sm text-muted-foreground">
            Describe your next change...
            <span className="ml-auto rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
              Send
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
