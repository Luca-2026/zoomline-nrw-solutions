import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Wrench } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-zoomlion-anthracite-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-5" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent" />

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Exklusiver Fachhändler in NRW
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Arbeitsbühnen & Bagger
              <span className="block text-primary mt-2">für Profis in NRW</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
              3 Standorte in Nordrhein-Westfalen – Beratung, Ersatzteile & Service. 
              Mit 3 Jahren Garantie und Ersatzteilen vor Ort.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link to="/arbeitsbuehnen">
                  <Truck className="mr-2 h-5 w-5" />
                  Arbeitsbühne finden
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/bagger">
                  <Wrench className="mr-2 h-5 w-5" />
                  Bagger finden
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">3</span>
                <span>Standorte in NRW</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">3J</span>
                <span>Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">✓</span>
                <span>Ersatzteile vor Ort</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Truck className="h-16 w-16 text-primary/50" />
                  </div>
                  <p className="text-white/40 text-sm">Hero-Bild Platzhalter</p>
                  <p className="text-white/30 text-xs mt-1">Arbeitsbühne in Action</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-fade-in">
              <p className="text-xs text-muted-foreground">Preis-Leistungs-Vorteil</p>
              <p className="font-heading text-lg font-bold text-primary">Wirtschaftlich überlegen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
