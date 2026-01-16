import { ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type AerialPlatform } from "@/data/products";

interface ProductCardProps {
  product: AerialPlatform;
  onInquiry: () => void;
}

export function ProductCard({ product, onInquiry }: ProductCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Truck className="h-16 w-16 text-muted-foreground/30" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {product.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Arbeitshöhe:</span>
            <span className="font-medium">{product.workingHeight} m</span>
          </div>
          {product.reach > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Reichweite:</span>
              <span className="font-medium">{product.reach} m</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Antrieb:</span>
            <span className="font-medium">{product.driveLabel}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Einsatz:</span>
            <span className="font-medium">{product.usageLabel}</span>
          </div>
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
          {product.features.length > 3 && (
            <span className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{product.features.length - 3}
            </span>
          )}
        </div>

        <Button className="w-full group/btn" onClick={onInquiry}>
          Dieses Modell anfragen
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
