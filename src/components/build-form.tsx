"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * The primary call to action: a website URL input paired with a
 * "Build Your ERP" button. Shared by the hero and the closing CTA band.
 */
export function BuildForm({ className, size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const [url, setUrl] = useState("");

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
        "flex w-full flex-col gap-2.5 sm:flex-row sm:items-stretch",
        "rounded-2xl border border-border bg-card p-2 shadow-sm",
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
        placeholder="yourcompany.com"
        className={cn(
          "min-w-0 flex-1 rounded-xl bg-transparent px-4 text-foreground placeholder:text-muted-foreground",
          "outline-none",
          size === "lg" ? "py-3 text-base" : "py-2.5 text-[0.95rem]"
        )}
      />
      <button
        type="submit"
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent font-medium text-accent-foreground",
          "transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
          size === "lg" ? "px-5 py-3 text-base" : "px-4 py-2.5 text-[0.95rem]"
        )}
      >
        Build Your ERP
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
