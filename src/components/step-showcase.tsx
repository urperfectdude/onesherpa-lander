"use client";

import { useEffect, useRef, useState } from "react";
import { CornerDownLeft } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/base-path";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: "01",
    tab: "Implement",
    img: "/illustrations/describe-business.svg",
    headline: "Describe your business in plain language.",
    body: "onesherpa scopes the projects, DocTypes, and data model and stands up a working ERPNext setup.",
    note: "Stand up a working setup in a sitting.",
  },
  {
    n: "02",
    tab: "Customize",
    img: "/illustrations/customize-anything.svg",
    headline: "Refine anything by talking to it.",
    body: "Add fields, links, and views, or import your existing data. Every change stays consistent across the system.",
    note: "Owners and consultants self-serve.",
  },
  {
    n: "03",
    tab: "Run",
    img: "/illustrations/run-control-panel.svg",
    headline: "Publish and operate from one cockpit.",
    body: "Projects, objects, imports, and settings live together instead of scattered across ERP admin screens.",
    note: "Projects, objects, and data in one cockpit.",
  },
];

function StepBlock({
  index,
  step,
  active,
  onActive,
}: {
  index: number;
  step: (typeof STEPS)[number];
  active: boolean;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div
      ref={ref}
      id={`step-${index}`}
      className={cn(
        "grid min-h-[48vh] grid-cols-1 items-center gap-8 py-10 transition-opacity duration-300 sm:grid-cols-[1fr_auto] sm:gap-12",
        active ? "opacity-100" : "opacity-40"
      )}
    >
      <div>
        <span
          className={cn(
            "inline-flex w-fit items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs transition-colors duration-300",
            active ? "bg-accent-soft text-accent" : "bg-muted text-muted-foreground"
          )}
        >
          <CornerDownLeft className="h-3 w-3" aria-hidden />
          {step.n}
        </span>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {step.headline}
        </h3>

        <p className="mt-3 max-w-md text-pretty text-muted-foreground">{step.body}</p>

        <p className="mt-5 max-w-md border-t border-border pt-4 text-sm text-muted-foreground">
          {step.note}
        </p>
      </div>

      <div className="relative mx-auto h-36 w-52 shrink-0 sm:h-40 sm:w-60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(step.img)} alt="" className="h-full w-full object-contain" loading="lazy" />
      </div>
    </div>
  );
}

/**
 * Scroll-driven step showcase: a sticky tab rail tracks which block is
 * centered in the viewport as you scroll (no timers), and doubles as a
 * quick-jump nav — clicking a tab scrolls its block into view.
 */
export function StepShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  function goTo(i: number) {
    document.getElementById(`step-${i}`)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
      <div className="flex gap-6 overflow-x-auto lg:sticky lg:top-32 lg:h-fit lg:flex-col lg:gap-2 lg:overflow-visible">
        {STEPS.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            onClick={() => goTo(i)}
            className={cn(
              "shrink-0 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
              i === active ? "bg-accent-soft text-accent" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="divide-y divide-border">
        {STEPS.map((step, i) => (
          <StepBlock key={step.n} index={i} step={step} active={active === i} onActive={setActive} />
        ))}
      </div>
    </div>
  );
}
