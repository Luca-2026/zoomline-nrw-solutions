import { Shield, Clock, MapPin, Users, Wrench, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  {
    icon: Award,
    label: "3 Jahre Garantie",
    sublabel: "oder 3.000 Stunden"
  },
  {
    icon: MapPin,
    label: "3 NRW Standorte",
    sublabel: "Bonn, Krefeld, Mülheim"
  },
  {
    icon: Wrench,
    label: "Ersatzteile vor Ort",
    sublabel: "Sofort verfügbar"
  },
  {
    icon: Users,
    label: "B2B Beratung",
    sublabel: "Persönlich & kompetent"
  }
];

interface TrustBadgesProps {
  variant?: "default" | "compact";
  className?: string;
}

export function TrustBadges({ variant = "default", className }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="trust-badge"
          >
            <badge.icon className="h-4 w-4" />
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-3 p-3 rounded-lg bg-accent/50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <badge.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{badge.label}</p>
            <p className="text-xs text-muted-foreground">{badge.sublabel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
