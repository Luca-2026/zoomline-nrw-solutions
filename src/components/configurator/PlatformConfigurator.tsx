import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { aerialPlatforms, platformFilterOptions, type AerialPlatform } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { InquiryModal } from "./InquiryModal";
import { Filter, RotateCcw } from "lucide-react";

interface PlatformFilters {
  usage: string;
  drive: string;
  category: string;
  lithium: boolean;
  minHeight: number;
  maxHeight: number;
  minReach: number;
  maxReach: number;
  features: string[];
}

const defaultFilters: PlatformFilters = {
  usage: "all",
  drive: "all",
  category: "all",
  lithium: false,
  minHeight: 6,
  maxHeight: 30,
  minReach: 0,
  maxReach: 20,
  features: [],
};

const featureOptions = [
  { value: "non-marking", label: "Nicht markierende Reifen" },
  { value: "compact", label: "Kompakt / schmal" },
  { value: "terrain", label: "Geländegängig" },
];

export function PlatformConfigurator() {
  const [filters, setFilters] = useState<PlatformFilters>(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState<AerialPlatform | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProducts = useMemo(() => {
    return aerialPlatforms.filter((product) => {
      if (filters.usage !== "all" && product.usage !== filters.usage) return false;
      if (filters.drive !== "all" && product.drive !== filters.drive) return false;
      if (filters.category !== "all" && product.category !== filters.category) return false;
      if (filters.lithium && !product.lithiumBattery) return false;
      if (product.workingHeight < filters.minHeight || product.workingHeight > filters.maxHeight) return false;
      if (product.reach < filters.minReach || product.reach > filters.maxReach) return false;
      return true;
    });
  }, [filters]);

  const handleInquiry = (product?: AerialPlatform) => {
    setSelectedProduct(product || null);
    setIsModalOpen(true);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </h3>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>

            {/* Einsatzort */}
            <div className="space-y-2">
              <Label>Einsatzort</Label>
              <Select value={filters.usage} onValueChange={(v) => setFilters({ ...filters, usage: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {platformFilterOptions.usage.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Antrieb */}
            <div className="space-y-2">
              <Label>Antrieb</Label>
              <Select value={filters.drive} onValueChange={(v) => setFilters({ ...filters, drive: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {platformFilterOptions.drive.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Typ */}
            <div className="space-y-2">
              <Label>Typ</Label>
              <Select value={filters.category} onValueChange={(v) => setFilters({ ...filters, category: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {platformFilterOptions.category.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Lithium */}
            {(filters.drive === "electric" || filters.drive === "hybrid" || filters.drive === "all") && (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="lithium"
                  checked={filters.lithium}
                  onCheckedChange={(v) => setFilters({ ...filters, lithium: !!v })}
                />
                <Label htmlFor="lithium" className="cursor-pointer">Lithium-Ionen Akku</Label>
              </div>
            )}

            {/* Arbeitshöhe */}
            <div className="space-y-3">
              <Label>Arbeitshöhe: {filters.minHeight}–{filters.maxHeight} m</Label>
              <Slider
                value={[filters.minHeight, filters.maxHeight]}
                min={6}
                max={30}
                step={2}
                onValueChange={([min, max]) => setFilters({ ...filters, minHeight: min, maxHeight: max })}
              />
            </div>

            {/* Reichweite */}
            <div className="space-y-3">
              <Label>Seitl. Reichweite: {filters.minReach}–{filters.maxReach} m</Label>
              <Slider
                value={[filters.minReach, filters.maxReach]}
                min={0}
                max={20}
                step={2}
                onValueChange={([min, max]) => setFilters({ ...filters, minReach: min, maxReach: max })}
              />
            </div>

            {/* Features */}
            <div className="space-y-2">
              <Label>Optionen</Label>
              {featureOptions.map((opt) => (
                <div key={opt.value} className="flex items-center gap-2">
                  <Checkbox
                    id={opt.value}
                    checked={filters.features.includes(opt.value)}
                    onCheckedChange={(checked) => {
                      setFilters({
                        ...filters,
                        features: checked
                          ? [...filters.features, opt.value]
                          : filters.features.filter((f) => f !== opt.value),
                      });
                    }}
                  />
                  <Label htmlFor={opt.value} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </div>

            <Button className="w-full" onClick={() => handleInquiry()}>
              Unverbindlich anfragen
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "Modell" : "Modelle"} gefunden
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquiry={() => handleInquiry(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
              <p className="text-muted-foreground mb-4">
                Keine Modelle mit diesen Filterkriterien gefunden.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Wir haben passende Modelle – senden Sie Ihre Anfrage, wir melden uns mit Empfehlung und Verfügbarkeit.
              </p>
              <Button onClick={() => handleInquiry()}>Anfrage senden</Button>
            </div>
          )}

          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="arbeitsbuehne"
        selectedProduct={selectedProduct?.name}
        filters={{
          einsatzort: filters.usage !== "all" ? platformFilterOptions.usage.find(o => o.value === filters.usage)?.label : undefined,
          antrieb: filters.drive !== "all" ? platformFilterOptions.drive.find(o => o.value === filters.drive)?.label : undefined,
          lithium: filters.lithium,
          arbeitshoehe: filters.maxHeight,
          reichweite: filters.maxReach,
        }}
      />
    </>
  );
}
