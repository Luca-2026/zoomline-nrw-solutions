import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Vollwertige Investitionsbooster-Sektion auf der Startseite.
 * Ersetzt den schmalen Banner – inhaltlich stärker, klarer CTA.
 */
export function InvestitionsboosterSection() {
  return (
    <section
      aria-label="Investitionsbooster: Steuer-Tipp 2026 / 2027"
      className="relative overflow-hidden bg-secondary text-secondary-foreground py-16 md:py-20"
    >
      {/* Dezenter Hintergrund-Akzent */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Linke Spalte: Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative inline-flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-primary/30 mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                Steuer-Tipp 2026 / 2027
              </span>
              <div className="font-heading text-[5rem] sm:text-[7rem] lg:text-[10rem] leading-none font-black text-primary">
                30%
              </div>
              <p className="mt-2 text-base sm:text-lg font-semibold text-secondary-foreground/85">
                degressive AfA p.&nbsp;a.
              </p>
              <p className="mt-1 text-sm text-secondary-foreground/60 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                bis 31.12.2027
              </p>
            </div>
          </div>

          {/* Rechte Spalte: Inhalt + CTA */}
          <div className="lg:col-span-7 min-w-0">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Investitionsbooster: jetzt bis zu{" "}
              <span className="text-primary">30 % Sofortabschreibung</span> auf
              Ihre neue Baumaschine sichern
            </h2>
            <p className="mt-5 text-base md:text-lg text-secondary-foreground/85 leading-relaxed">
              Mit dem steuerlichen Investitionssofortprogramm können Unternehmen
              Bagger, Arbeitsbühnen und Teleskoplader im Anschaffungsjahr mit bis
              zu 30 % degressiv abschreiben — und so Liquidität freisetzen. Die
              Regelung gilt nur noch bis Ende 2027.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm md:text-base">
              {[
                "Für alle Unternehmen & Selbstständige",
                "Gilt für neue Baumaschinen",
                "Kein Antrag erforderlich",
                "Kombinierbar mit § 7g EStG (KMU)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/investitionsbooster">
                  Mehr zum Investitionsbooster
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/kontakt?betreff=investitionsbooster">
                  Beratung anfordern
                </Link>
              </Button>
            </div>

            <p className="mt-5 text-xs text-secondary-foreground/55 italic leading-snug">
              Allgemeine Information, ersetzt keine steuerliche Beratung. Die
              tatsächliche Wirkung hängt von Ihren individuellen steuerlichen
              Verhältnissen ab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
