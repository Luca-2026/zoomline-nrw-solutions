import { ArrowRight, Download, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Telehandler } from "@/data/products";

interface TelehandlerCardProps {
  product: Telehandler;
  onInquiry: () => void;
}

const formatWeight = (weight: number) => {
  if (weight >= 1000) {
    return `${(weight / 1000).toFixed(1)} t`;
  }
  return `${weight} kg`;
};

export function TelehandlerCard({ product, onInquiry }: TelehandlerCardProps) {
  return (
    <div className="group h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={`Zoomlion ${product.name} Teleskoplader kaufen - ${formatWeight(product.operatingWeight)}, ${product.maxWorkingHeight}m Arbeitshöhe`}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="inline-flex items-center rounded-md bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground">
            {product.categoryLabel}
          </span>
          {product.category === "rotating" && (
            <span className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
              <RotateCw className="h-3 w-3" />
              360°
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Hubkraft:</span>
            <span className="font-medium ml-1">{formatWeight(product.liftCapacity)}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Arbeitshöhe:</span>
            <span className="font-medium ml-1">{product.maxWorkingHeight} m</span>
          </div>
          <div>
            <span className="text-muted-foreground">Gewicht:</span>
            <span className="font-medium ml-1">{formatWeight(product.operatingWeight)}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Typ:</span>
            <span className="font-medium ml-1">{product.categoryLabel}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <Button className="w-full group/btn" onClick={onInquiry}>
            Dieses Modell anfragen
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
          
          {product.datasheet && (
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href={product.datasheet} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" />
                Datenblatt herunterladen
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
