import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Wrench } from "lucide-react";
import heroGrafik from "@/assets/hero-grafik.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroGrafik} 
          alt="Zoomlion Maschinen - Arbeitsbühnen und Bagger" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-6">
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

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
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
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/bagger">
                  <Wrench className="mr-2 h-5 w-5" />
                  Bagger finden
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">3</span>
                <span>Standorte in NRW</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">3J</span>
                <span>Garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">✓</span>
                <span>Ersatzteile vor Ort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
