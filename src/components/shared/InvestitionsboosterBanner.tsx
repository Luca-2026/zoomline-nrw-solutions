import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

/**
 * Schmaler, dauerhaft sichtbarer Banner unter dem Hero.
 * Verlinkt auf /investitionsbooster.
 */
export function InvestitionsboosterBanner() {
  return (
    <section
      aria-label="Steuer-Tipp: Investitionsbooster"
      className="bg-[#0F0F0F] text-white border-y border-white/10"
    >
      <Link
        to="/investitionsbooster"
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-4 py-4 md:py-5 group"
      >
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-primary/30">
            <TrendingUp className="h-3.5 w-3.5" />
            Steuer-Tipp 2026 / 2027
          </span>
          <p className="text-sm md:text-base font-medium leading-snug">
            <span className="text-primary font-bold">Investitionsbooster:</span>{" "}
            bis zu 30 % Sofortabschreibung auf Ihre neue Baumaschine sichern.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary whitespace-nowrap group-hover:underline">
          Mehr erfahren
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </section>
  );
}
