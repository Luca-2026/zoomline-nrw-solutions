import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export function TryAndBuyBadge() {
  return (
    <Link
      to="/try-and-buy"
      className="hidden lg:flex absolute right-6 xl:right-10 top-32 xl:top-36 z-20 group"
      aria-label="Try & Buy Angebot ansehen"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping" />

        <div className="relative flex flex-col items-start gap-2 rounded-2xl bg-primary text-primary-foreground p-5 shadow-2xl border border-primary-foreground/20 backdrop-blur-sm max-w-[240px] hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Try & Buy
          </div>
          <p className="font-heading text-lg font-bold leading-tight">
            Erst testen,<br />dann kaufen
          </p>
          <p className="text-xs opacity-90">
            100 % der Miete wird auf den Kaufpreis angerechnet
          </p>
          <span className="flex items-center gap-1 text-xs font-semibold mt-1 group-hover:gap-2 transition-all">
            Mehr erfahren <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
