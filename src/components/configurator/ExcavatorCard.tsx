import { ArrowRight, Shovel, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Excavator } from "@/data/products";

interface ExcavatorCardProps {
  product: Excavator;
  onInquiry: () => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const formatWeight = (weight: number) => {
  if (weight >= 1000) {
    return `${(weight / 1000).toFixed(1)} t`;
  }
  return `${weight} kg`;
};

const isPlaceholder = (image: string) => {
  return image === "/placeholder.svg" || !image;
};

export function ExcavatorCard({ product, onInquiry }: ExcavatorCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {isPlaceholder(product.image) ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Shovel className="h-16 w-16 text-muted-foreground/30" />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="inline-flex items-center rounded-md bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground">
            {product.categoryLabel}
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-1 text-xs font-medium text-secondary-foreground">
            {formatWeight(product.operatingWeight)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-3 p-2 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-xs text-muted-foreground">UVP ab</p>
          <p className="font-heading text-lg font-bold text-primary">
            {formatPrice(product.uvpPrice)}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Motor:</span>
            <span className="font-medium">{product.engine}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Leistung:</span>
            <span className="font-medium">{product.power}</span>
          </div>
        </div>

        {/* Warranty */}
        <div className="mb-3 text-xs text-muted-foreground">
          <span className="font-medium">Garantie:</span> {product.warranty}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
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
