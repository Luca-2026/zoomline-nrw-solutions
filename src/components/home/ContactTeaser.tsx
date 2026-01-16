import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { TrustBadges } from "@/components/shared/TrustBadges";

export function ContactTeaser() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary to-anthracite-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            Finden Sie die passende Lösung
          </h2>
          <p className="text-lg text-white/80 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Sagen Sie uns Einsatzort & Anforderungen – wir empfehlen das passende Modell 
            und melden uns kurzfristig mit Verfügbarkeit und Angebot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="group">
              <Link to="/arbeitsbuehnen">
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Konfigurator starten
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/kontakt">
                <MessageSquare className="mr-2 h-5 w-5" />
                Direkt anfragen
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="trust-badge bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              B2B Beratung
            </span>
            <span className="trust-badge bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              3 Jahre Garantie
            </span>
            <span className="trust-badge bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              Ersatzteile vor Ort
            </span>
            <span className="trust-badge bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              3 NRW Standorte
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
