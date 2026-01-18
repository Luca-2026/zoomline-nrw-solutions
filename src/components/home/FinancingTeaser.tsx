import { Link } from "react-router-dom";
import { Calculator, ArrowRight, CheckCircle, Percent, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FinancingTeaser() {
  const benefits = [
    { icon: Calculator, text: "Sofort monatliche Rate berechnen" },
    { icon: Percent, text: "Attraktive Konditionen für B2B" },
    { icon: Clock, text: "Flexible Laufzeiten 12–48 Monate" },
    { icon: Shield, text: "Persönliche Finanzierungsberatung" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Finanzierung"
          title="Ihre Maschine – flexibel finanziert"
          subtitle="Berechnen Sie Ihre monatliche Rate in Sekunden"
        />

        <div className="max-w-4xl mx-auto">
          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Example Calculation */}
          <div className="p-6 rounded-xl bg-card border border-border mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Beispiel: Arbeitsbühne für 25.000 € netto</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">ca. 464 €</span>
                  <span className="text-muted-foreground">/ Monat</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  36 Monate, 20% Anzahlung, 20% Schlussrate, 4% p.a.
                </p>
              </div>
              <Button asChild size="lg" className="group">
                <Link to="/finanzierung">
                  <Calculator className="mr-2 h-5 w-5" />
                  Jetzt berechnen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              "Unverbindliche Beispielrechnung",
              "Bonitätsabhängige Konditionen",
              "Schnelle Kreditentscheidung"
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
