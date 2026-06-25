/**
 * Four corner brackets that sit flush at a button's edges and pull inward
 * on hover, like a focus frame tightening. Modeled on gojiberry.ai's CTA
 * hover (their corner marks animate from the edge to a few px inset).
 * Place inside a `relative` ancestor that also has the `group` class.
 */
export function CornerBrackets() {
  return (
    <>
      <span
        aria-hidden
        className="absolute left-0 top-0 h-2 w-2 border-l border-t border-accent-foreground/70 opacity-0 transition-all duration-300 group-hover:left-1.5 group-hover:top-1.5 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="absolute right-0 top-0 h-2 w-2 border-r border-t border-accent-foreground/70 opacity-0 transition-all duration-300 group-hover:right-1.5 group-hover:top-1.5 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-accent-foreground/70 opacity-0 transition-all duration-300 group-hover:bottom-1.5 group-hover:left-1.5 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-accent-foreground/70 opacity-0 transition-all duration-300 group-hover:bottom-1.5 group-hover:right-1.5 group-hover:opacity-100"
      />
    </>
  );
}
