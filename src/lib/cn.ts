/**
 * Tiny className joiner. Filters out falsy values and joins with a space.
 * Avoids a dependency while keeping component call sites readable.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
