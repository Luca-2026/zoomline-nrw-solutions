import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroGrafik from "@/assets/hero-grafik.jpg";
import iconArbeitsbuehne from "@/assets/icons/icon-arbeitsbuehne.png";
import iconBagger from "@/assets/icons/icon-bagger.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroGrafik} 
          alt="Zoomlion Arbeitsbühnen und Minibagger kaufen in NRW - Scherenarbeitsbühnen, Teleskopbühnen und Kompaktbagger vom Top 5 Hersteller weltweit" 
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-fade-in-down opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Exklusiver Fachhändler in NRW
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Arbeitsbühnen & Bagger
              <span className="block text-primary mt-2">für Profis in NRW</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
              3 Standorte in Nordrhein-Westfalen – Beratung, Ersatzteile & Service. 
              Mit 3 Jahren Garantie und Ersatzteilen vor Ort.
            </p>

            {/* CTAs with Custom Icons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="group hover-glow transition-all duration-300">
                <Link to="/arbeitsbuehnen" className="flex items-center">
                  <img 
                    src={iconArbeitsbuehne} 
                    alt="Arbeitsbühne" 
                    className="mr-3 h-8 w-8 object-contain" 
                  />
                  Arbeitsbühne finden
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white transition-all duration-300 group"
              >
                <Link to="/bagger" className="flex items-center">
                  <img 
                    src={iconBagger} 
                    alt="Bagger" 
                    className="mr-3 h-8 w-8 object-contain" 
                  />
                  Bagger finden
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm text-white/90 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 hover-lift cursor-default">
                <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">3</span>
                <span className="text-xs md:text-sm">Standorte in NRW</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 hover-lift cursor-default">
                <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">3J</span>
                <span className="text-xs md:text-sm">Garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 hover-lift cursor-default">
                <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary/30 text-primary font-bold text-xs">✓</span>
                <span className="text-xs md:text-sm">Ersatzteile vor Ort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
