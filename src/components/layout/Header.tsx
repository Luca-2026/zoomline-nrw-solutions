import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-zoomlion-nrw.png";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Hot Deals", href: "/hot-deals", highlight: true },
  { name: "Arbeitsbühnen", href: "/arbeitsbuehnen" },
  { name: "Bagger", href: "/bagger" },
  { name: "Finanzierung", href: "/finanzierung" },
  { name: "Service", href: "/service" },
  { name: "Standorte", href: "/standorte" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary",
                "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4",
                location.pathname === item.href
                  ? "text-primary after:w-3/4"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
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
            <Link to="/kontakt">Jetzt Anfrage senden</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Menü öffnen</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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
                  Jetzt Anfrage senden
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
