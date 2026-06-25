import { asset } from "@/lib/base-path";
import { cn } from "@/lib/cn";

/** Full onesherpa wordmark (mark + name). */
export function Logo({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src={asset("/logo_onesherpa.svg")}
      alt={decorative ? "" : "onesherpa"}
      aria-hidden={decorative || undefined}
      width={230}
      height={67}
      className={cn("h-7 w-auto", className)}
    />
  );
}
