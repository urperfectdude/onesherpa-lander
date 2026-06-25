"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { CornerBrackets } from "@/components/corner-brackets";
import { cn } from "@/lib/cn";

const PLACEHOLDER_WORDS = ["yourcompany.com", "onesherpa.ai"];
const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1400;

/**
 * The primary call to action: a website URL input paired with a
 * "Build Your ERP" button. Shared by the hero and the closing CTA band.
 */
export function BuildForm({ className, size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const [url, setUrl] = useState("");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER_WORDS[0]);
  const reduce = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reduce) return;

    let wordIndex = 0;

    function eraseStep(word: string, idx: number, after: () => void) {
      idx--;
      setPlaceholder(word.slice(0, idx));
      if (idx > 0) {
        timers.current.push(setTimeout(() => eraseStep(word, idx, after), DELETE_MS));
      } else {
        after();
      }
    }

    function typeStep(word: string, idx: number, after: () => void) {
      idx++;
      setPlaceholder(word.slice(0, idx));
      if (idx < word.length) {
        timers.current.push(setTimeout(() => typeStep(word, idx, after), TYPE_MS));
      } else {
        after();
      }
    }

    function cycle() {
      const current = PLACEHOLDER_WORDS[wordIndex];
      timers.current.push(
        setTimeout(() => {
          eraseStep(current, current.length, () => {
            wordIndex = (wordIndex + 1) % PLACEHOLDER_WORDS.length;
            typeStep(PLACEHOLDER_WORDS[wordIndex], 0, cycle);
          });
        }, HOLD_MS)
      );
    }

    cycle();

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduce]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: wire to the product onboarding flow when available.
    const target = url.trim();
    if (!target) return;
    window.location.href = `https://app.onesherpa.ai/start?site=${encodeURIComponent(target)}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex w-full items-stretch overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        "focus-within:ring-2 focus-within:ring-ring/40",
        className
      )}
    >
      <label htmlFor="site-url" className="sr-only">
        Your company website URL
      </label>
      <input
        id="site-url"
        name="site-url"
        type="text"
        inputMode="url"
        autoComplete="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "min-w-0 flex-1 bg-transparent pl-5 pr-2 text-foreground placeholder:text-muted-foreground",
          "outline-none",
          size === "lg" ? "py-3.5 text-base" : "py-3 text-[0.95rem]"
        )}
      />
      <button
        type="submit"
        className={cn(
          "group relative inline-flex shrink-0 items-center justify-center gap-2 bg-accent font-medium text-accent-foreground",
          "transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
          size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-[0.95rem]"
        )}
      >
        <CornerBrackets />
        Build Your ERP
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
