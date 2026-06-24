import { cn } from "@/lib/cn";

/**
 * Text wordmark for OneSherpa. A small geometric mark plus the name.
 * Placeholder mark until a real logo exists.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-accent-foreground"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3 4 18h16L12 3Z" fill="currentColor" />
          <path d="M12 9 8.5 16h7L12 9Z" fill="var(--accent)" />
        </svg>
      </span>
      <span className="text-[1.05rem] text-foreground">OneSherpa</span>
    </span>
  );
}
