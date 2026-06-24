"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FAQS = [
  {
    q: "Do I need to know ERPNext to use OneSherpa?",
    a: "No. You describe what your business needs in plain language and OneSherpa configures ERPNext for you. You stay focused on outcomes, not ERP internals.",
  },
  {
    q: "Does it work with my existing ERPNext setup?",
    a: "Yes. OneSherpa works on top of ERPNext. You can import existing data and configure new projects, DocTypes, and views alongside what you already run.",
  },
  {
    q: "Who is OneSherpa built for?",
    a: "Business owners standing up ERPNext, consultants configuring client systems, and ERP implementation companies, including Frappe Partners, doing this at scale.",
  },
  {
    q: "Can I review changes before they go live?",
    a: "Yes. Configurations move through a clear publishing step, so you can review what was built before it reaches your live system.",
  },
  {
    q: "How fast can I get started?",
    a: "Drop in your company website and describe what you want to make. OneSherpa scopes a starter ERPNext setup you can refine from there.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What teams ask before switching to OneSherpa.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="text-base font-medium text-foreground">{item.q}</span>
                    <Plus
                      aria-hidden
                      className={
                        "h-5 w-5 shrink-0 text-accent transition-transform duration-200 " +
                        (isOpen ? "rotate-45" : "")
                      }
                    />
                  </button>
                </h3>
                <div
                  className={
                    "grid overflow-hidden transition-all duration-200 " +
                    (isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")
                  }
                >
                  <div className="min-h-0">
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
