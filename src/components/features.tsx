import { Reveal } from "@/components/reveal";
import { asset } from "@/lib/base-path";
import { cn } from "@/lib/cn";

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

function CardCorners() {
  return (
    <>
      <span aria-hidden className="absolute -left-2 -top-2 h-3 w-3 border-l border-t border-accent opacity-0 transition-all duration-300 group-hover:-left-4 group-hover:-top-4 group-hover:opacity-100" />
      <span aria-hidden className="absolute -right-2 -top-2 h-3 w-3 border-r border-t border-accent opacity-0 transition-all duration-300 group-hover:-right-4 group-hover:-top-4 group-hover:opacity-100" />
      <span aria-hidden className="absolute -bottom-2 -left-2 h-3 w-3 border-b border-l border-accent opacity-0 transition-all duration-300 group-hover:-bottom-4 group-hover:-left-4 group-hover:opacity-100" />
      <span aria-hidden className="absolute -bottom-2 -right-2 h-3 w-3 border-b border-r border-accent opacity-0 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4 group-hover:opacity-100" />
    </>
  );
}

export function Features() {
  return (
    <section id="platform" className="relative isolate scroll-mt-20 overflow-hidden border-t border-border bg-background-subtle">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fine opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

        {/* drafting-table margin rules, matching the hero */}
        <div className="margin-rule absolute left-[48px] top-0 hidden h-full lg:block" />
        <div className="margin-rule absolute right-[48px] top-0 hidden h-full lg:block" />
      </div>

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

        <div className="mx-auto mt-14 flex max-w-[960px] flex-col gap-8 md:gap-10">
          {FEATURES.map((f, i) => {
            const reversed = i % 2 === 1;
            const illustration = (
              <div className="relative flex h-[168px] items-center justify-center overflow-hidden border-[0.5px] border-foreground bg-accent-soft md:h-[218px]">
                <div aria-hidden className="absolute inset-0 bg-grid-tile opacity-30" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(f.img)}
                  alt=""
                  className="relative z-10 h-[78%] max-w-[82%] object-contain transition-transform duration-500 group-hover:scale-105 md:h-[82%]"
                  loading="lazy"
                />
              </div>
            );
            const content = (
              <div className="flex h-[168px] items-center border-[0.5px] border-foreground bg-card px-6 py-6 md:h-[218px] md:px-7">
                <div className="max-w-[230px]">
                  <h3 className="text-[20px] font-semibold leading-[1.06] tracking-tight text-foreground md:text-[22px]">
                    <span className="text-accent">/</span> {f.tag}
                  </h3>
                  <p className="mt-2.5 text-[12px] leading-[1.36] text-muted-foreground md:text-[13px] md:leading-[18px]">
                    <span className="font-medium text-foreground">{f.title}</span> {f.body}
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal
                key={f.tag}
                delay={i * 0.06}
                className={cn("w-full md:max-w-[560px]", reversed ? "lg:ml-auto lg:mr-[1%]" : "lg:mr-auto lg:ml-[1%]")}
              >
                <div className="group relative">
                  <CardCorners />
                  <div className="grid overflow-hidden md:grid-cols-[265fr_295fr]">
                    {reversed ? (
                      <>
                        {content}
                        {illustration}
                      </>
                    ) : (
                      <>
                        {illustration}
                        {content}
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
