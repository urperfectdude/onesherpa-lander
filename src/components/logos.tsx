import { Reveal } from "@/components/reveal";

const MODULES = [
  "Accounting",
  "Selling",
  "Buying",
  "Stock",
  "Manufacturing",
  "Projects",
  "CRM",
  "HR & Payroll",
  "Assets",
  "Quality",
];

export function Logos() {
  return (
    <section className="border-y border-border bg-background-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Works across the ERPNext modules you already run
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {MODULES.map((m) => (
              <li
                key={m}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Built for ERPNext teams and Frappe Partners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
