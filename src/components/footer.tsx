import { Logo } from "@/components/logo";

const COLUMNS = [
  {
    title: "Product",
    links: ["Platform", "How it works", "Capabilities", "Pricing"],
  },
  {
    title: "For",
    links: ["Business owners", "Consultants", "Frappe Partners"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              ERPNext, without the complexity. Configure and run your ERP by talking to it.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 onesherpa. All rights reserved.</p>
          <p>Built for ERPNext and Frappe Partners.</p>
        </div>
      </div>
    </footer>
  );
}
