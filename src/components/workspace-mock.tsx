"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCw, Lock, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  "Created DocType: Project Task (tasks, owner, due date)",
  "Linked Project Task to Customer",
  "Added a board view grouped by owner",
];

type Phase = "idle" | "asked" | "thinking" | "responded";

/**
 * Animated mock of the OneSherpa chat workspace: the conversational cockpit
 * where you describe what you want and it configures ERPNext for you.
 * Plays a short, one-time reveal on mount (user message, then a thinking
 * beat, then the AI response building in); skips straight to the final
 * state under prefers-reduced-motion.
 */
export function WorkspaceMock() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(reduce ? "responded" : "idle");

  useEffect(() => {
    if (reduce) return;
    const timers = [
      setTimeout(() => setPhase("asked"), 300),
      setTimeout(() => setPhase("thinking"), 1000),
      setTimeout(() => setPhase("responded"), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-44px_rgba(11,18,32,0.45)]">
      <span
        aria-hidden
        className="corner-orb animate-float absolute -left-4 -top-4 hidden font-mono text-xs sm:flex"
      >
        +
      </span>
      <span
        aria-hidden
        className="corner-orb animate-float absolute -right-4 -top-4 hidden font-mono text-xs [animation-delay:-3s] sm:flex"
      >
        +
      </span>

      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="hidden items-center gap-2 text-muted-foreground/50 sm:flex">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          <RotateCw className="h-3.5 w-3.5" aria-hidden />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md bg-card px-2.5 py-1 text-xs text-muted-foreground sm:max-w-[260px]">
          <Lock className="h-3 w-3 shrink-0" aria-hidden />
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="truncate">onesherpa.ai / chat</span>
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
        <div className="bg-background-subtle p-5 sm:p-7">
          <p className="text-lg font-medium text-foreground">
            Hi Maya, what do you want to make?
          </p>

          <div className="mt-5 min-h-[132px] space-y-4">
            <AnimatePresence mode="popLayout">
              {phase !== "idle" && (
                <motion.div
                  key="ask"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm"
                >
                  Set up a project tracker with tasks, owners, and due dates, linked to
                  our existing Customers.
                </motion.div>
              )}

              {phase === "thinking" && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3.5 shadow-sm"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </motion.div>
              )}

              {phase === "responded" && (
                <motion.div
                  key="response"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="max-w-[88%] px-1 py-1 text-sm text-foreground"
                >
                  <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden /> Building in ERPNext
                  </p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {STEPS.map((line, i) => (
                      <motion.li
                        key={line}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: EASE, delay: 0.15 * i }}
                        className="flex items-start gap-2"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                        <span>{line}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* prompt box */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm">
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
