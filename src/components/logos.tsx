import {
  Receipt,
  ShoppingCart,
  ShoppingBag,
  Warehouse,
  Factory,
  ClipboardList,
  Users,
  UserCog,
  Package,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const MODULES = [
  { label: "Accounting", icon: Receipt },
  { label: "Selling", icon: ShoppingCart },
  { label: "Buying", icon: ShoppingBag },
  { label: "Stock", icon: Warehouse },
  { label: "Manufacturing", icon: Factory },
  { label: "Projects", icon: ClipboardList },
  { label: "CRM", icon: Users },
  { label: "HR & Payroll", icon: UserCog },
  { label: "Assets", icon: Package },
  { label: "Quality", icon: ShieldCheck },
];

function ModuleCell({ m, hidden }: { m: (typeof MODULES)[number]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="group relative flex shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-9 py-6"
    >
      <span aria-hidden className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-foreground/25" />
      <span aria-hidden className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-foreground/25" />
      <span aria-hidden className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-foreground/25" />
      <span aria-hidden className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-foreground/25" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(120%_100%_at_50%_0%,var(--accent-soft),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <m.icon className="relative h-5 w-5 text-accent" aria-hidden />
      <span className="relative whitespace-nowrap text-sm font-medium text-foreground/80">{m.label}</span>
    </div>
  );
}

export function Logos() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Works across the ERPNext modules you already run
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
              {MODULES.map((m) => (
                <ModuleCell key={m.label} m={m} />
              ))}
              {MODULES.map((m) => (
                <ModuleCell key={`${m.label}-dup`} m={m} hidden />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
