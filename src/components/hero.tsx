import { BuildForm } from "@/components/build-form";
import { Reveal } from "@/components/reveal";
import { ScrollLine } from "@/components/scroll-line";
import { WorkspaceMock } from "@/components/workspace-mock";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand wash behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-grid-fine opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute left-1/2 top-[-120px] h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-glow opacity-[0.10] blur-2xl" />

        <ScrollLine className="absolute inset-0 hidden h-full w-full lg:block" />

        {/* drafting-table margin rules, large screens only */}
        <div className="margin-rule absolute left-[48px] top-0 hidden h-full lg:block" />
        <div className="margin-rule absolute right-[48px] top-0 hidden h-full lg:block" />

        {/* static ink-mark dots and ring, in the spirit of ramain.ai's hero markings */}
        <span className="absolute left-[8%] top-[36%] hidden h-2 w-2 bg-border md:block" />
        <span className="absolute right-[7%] top-[20%] hidden h-2 w-2 bg-border md:block" />
        <span className="absolute left-[34%] top-[15%] hidden h-2 w-2 bg-border md:block" />
        <span className="absolute bottom-[14%] right-[23%] hidden h-2 w-2 bg-border md:block" />
        <span className="absolute bottom-[10%] right-[15%] hidden h-[34px] w-[34px] rounded-full border border-border md:block" />

        {/* floating pixel-clusters, each drifting slowly out of phase */}
        <PixelCluster
          className="left-[10%] top-[10%] hidden h-[70px] w-[70px] md:block"
          delay="-2s"
          cell={8}
          gap={22}
          cells={[
            [0, 0], [1, 0], [2, 0],
            [0, 1], [1, 1], [2, 1],
            [0, 2], [1, 2], [2, 2],
          ]}
        />
        <PixelCluster
          className="right-[9%] top-[8%] hidden h-[64px] w-[64px] md:block"
          delay="-6s"
          cell={8}
          gap={22}
          cells={[
            [0, 0], [1, 0], [2, 0],
            [1, 1], [2, 1],
            [2, 2],
          ]}
        />
        <PixelCluster
          className="left-[15%] top-[58%] hidden h-[60px] w-[60px] md:block"
          delay="-4s"
          cell={10}
          gap={24}
          cells={[
            [0, 0], [1, 0],
            [0, 1], [1, 1],
            [0, 2],
          ]}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-32 pt-32 sm:pt-44">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            ERP Implementations,{" "}
            <span className="relative isolate inline-block px-[0.05em]">
              <span aria-hidden className="absolute left-[-0.08em] right-[-0.04em] top-[0.14em] -z-10 h-[0.8em] bg-accent-soft" />
              <span aria-hidden className="absolute left-[-0.1em] top-[-0.08em] size-[9px] rounded-full bg-foreground" />
              <span aria-hidden className="absolute right-[-0.06em] bottom-[-0.06em] size-[9px] rounded-full bg-foreground" />
              <span aria-hidden className="absolute left-[-0.08em] top-[-0.01em] h-[1.05em] w-px rotate-[4deg] bg-foreground" />
              <span aria-hidden className="absolute right-[-0.04em] top-[0em] h-[1.05em] w-px rotate-[4deg] bg-foreground" />
              <span className="relative">Simplified</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm text-muted-foreground sm:text-base">
            onesherpa is the mission-specific AI agent that implements the ERP system based
            on plain language requirements from the business.
          </p>

          <div className="relative mx-auto mt-8 max-w-xl">
            <span aria-hidden className="absolute -left-3 -top-3 h-3 w-3 border-l border-t border-foreground/30" />
            <span aria-hidden className="absolute -right-3 -top-3 h-3 w-3 border-r border-t border-foreground/30" />
            <span aria-hidden className="absolute -bottom-3 -left-3 h-3 w-3 border-b border-l border-foreground/30" />
            <span aria-hidden className="absolute -bottom-3 -right-3 h-3 w-3 border-b border-r border-foreground/30" />
            <BuildForm />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-28 sm:mt-32">
          <WorkspaceMock />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * A small grid of square specks, modeled on ramain.ai's floating hero
 * pixel-clusters: a sparse set of cells on a regular grid, drifting via
 * the shared .animate-float keyframe at a caller-supplied phase offset.
 */
function PixelCluster({
  cells,
  cell,
  gap,
  className,
  delay,
}: {
  cells: [number, number][];
  cell: number;
  gap: number;
  className: string;
  delay: string;
}) {
  return (
    <div
      aria-hidden
      className={`animate-float pointer-events-none absolute ${className}`}
      style={{ animationDelay: delay }}
    >
      {cells.map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute block bg-border"
          style={{ left: x * gap, top: y * gap, width: cell, height: cell }}
        />
      ))}
    </div>
  );
}

