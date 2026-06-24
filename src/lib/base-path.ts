// Prefix for files served from `public/` (raw <img>, anchors, etc.).
// Next applies `basePath` to <Link> and metadata automatically, but NOT to
// plain <img src> tags, so prefix those manually with this value.
// Empty in dev, "/onesherpa-lander" in the GitHub Pages build. Keep in sync
// with next.config.ts.
export const basePath =
  process.env.NODE_ENV === "production" ? "/onesherpa-lander" : "";

/** Resolve a public asset path against the active base path. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
