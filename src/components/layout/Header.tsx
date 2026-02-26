import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-zoomlion-nrw.png";

type NavItem = {
  name: string;
  href?: string;
  highlight?: boolean;
  children?: { name: string; href: string; desc?: string }[];
};

const navigation: NavItem[] = [
  {
    name: "Produkte",
    children: [
      { name: "Arbeitsbühnen", href: "/arbeitsbuehnen", desc: "Scheren-, Gelenk- & Teleskopbühnen" },
      { name: "Bagger", href: "/bagger", desc: "Mini-, Kompakt- & Kettenbagger" },
      { name: "Teleskoplader", href: "/teleskoplader", desc: "Starre & drehbare Telehandler" },
    ],
  },
  { name: "Hot Deals", href: "/hot-deals", highlight: true },
  {
    name: "Service",
    children: [
      { name: "Service & Wartung", href: "/service", desc: "Reparatur, UVV-Prüfung & Ersatzteile" },
      { name: "Serviceverträge", href: "/servicevertraege", desc: "ZL|Care, ZL|Pro & ZL|Complete" },
      { name: "Finanzierung", href: "/finanzierung", desc: "Leasing & Ratenkauf" },
    ],
  },
  { name: "Standorte", href: "/standorte" },
  { name: "Kontakt", href: "/kontakt" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isActive = item.children?.some((c) => location.pathname === c.href);

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground/80"
        )}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="w-64 rounded-xl border border-border bg-card shadow-lg p-2">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted",
                  location.pathname === child.href && "bg-primary/5"
                )}
              >
                <span className={cn(
                  "text-sm font-medium",
                  location.pathname === child.href ? "text-primary" : "text-foreground"
                )}>
                  {child.name}
                </span>
                {child.desc && (
                  <span className="block text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImage}
            alt="Zoomlion NRW - Fachhändler für Arbeitsbühnen und Bagger in Nordrhein-Westfalen"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-0.5">
          {navigation.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.name} item={item} />
            ) : (
              <Link
                key={item.name}
                to={item.href!}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  item.highlight && "text-primary font-semibold",
                  location.pathname === item.href
                    ? "text-primary"
                    : !item.highlight && "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="tel:02151-4179904"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            02151 4179904
          </a>
          <Button asChild size="sm">
            <Link to="/kontakt">Anfrage senden</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Menü öffnen</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === item.name && "rotate-180")} />
                  </button>
                  {mobileExpanded === item.name && (
                    <div className="ml-3 border-l-2 border-primary/20 pl-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors",
                            location.pathname === child.href
                              ? "bg-accent text-primary font-medium"
                              : "text-foreground/80 hover:bg-muted"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href!}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    item.highlight && "text-primary",
                    location.pathname === item.href
                      ? "bg-accent text-primary"
                      : !item.highlight && "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="border-t border-border pt-3 mt-3 space-y-2">
              <a
                href="tel:02151-4179904"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground"
              >
                <Phone className="h-5 w-5" />
                02151 4179904
              </a>
              <Button asChild className="w-full">
                <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Anfrage senden
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
