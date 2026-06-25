import { BuildForm } from "@/components/build-form";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-6 py-16 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-[680px] -translate-x-1/2 rounded-full bg-accent opacity-25 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-background sm:text-4xl">
              Build your ERP by describing it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-background/70">
              Start with your company website. onesherpa scopes a starter ERPNext setup
              you can shape from there.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <BuildForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
