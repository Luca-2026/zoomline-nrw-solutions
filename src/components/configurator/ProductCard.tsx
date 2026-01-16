import { ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type AerialPlatform } from "@/data/products";

interface ProductCardProps {
  product: AerialPlatform;
  onInquiry: () => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const isPlaceholder = (image: string) => {
  return image === "/placeholder.svg" || !image;
};

export function ProductCard({ product, onInquiry }: ProductCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {isPlaceholder(product.image) ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Truck className="h-16 w-16 text-muted-foreground/30" />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-md bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground">
            {product.categoryLabel}
          </span>
        </div>
        {product.lithiumBattery && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
              Lithium
            </span>
          </div>
        )}
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
            <span className="text-muted-foreground">Arbeitshöhe:</span>
            <span className="font-medium">{product.workingHeight} m</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Tragkraft:</span>
            <span className="font-medium">{product.loadCapacity} kg</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Antrieb:</span>
            <span className="font-medium">{product.driveLabel}</span>
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
