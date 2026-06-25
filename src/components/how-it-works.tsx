import { Reveal } from "@/components/reveal";
import { StepShowcase } from "@/components/step-showcase";

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

        <StepShowcase />
      </div>
    </section>
  );
}
