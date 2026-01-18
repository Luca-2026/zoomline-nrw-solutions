import { useState, useMemo } from "react";
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
  drive: string;
  category: string;
  application: string;
  lithium: boolean;
  minHeight: number;
  maxHeight: number;
}

const defaultFilters: PlatformFilters = {
  drive: "all",
  category: "all",
  application: "all",
  lithium: false,
  minHeight: 5,
  maxHeight: 75,
};

export function PlatformConfigurator() {
  const [filters, setFilters] = useState<PlatformFilters>(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState<AerialPlatform | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return aerialPlatforms.filter((product) => {
      if (filters.drive !== "all" && product.drive !== filters.drive) return false;
      if (filters.category !== "all" && product.category !== filters.category) return false;
      if (filters.lithium && !product.lithiumBattery) return false;
      if (product.workingHeight < filters.minHeight || product.workingHeight > filters.maxHeight) return false;
      
      // Einsatzbereich Filter
      if (filters.application === "indoor") {
        // Innenbereich: Nur elektrische Modelle (emissionsfrei, leise)
        if (product.drive !== "electric") return false;
      } else if (filters.application === "outdoor") {
        // Außenbereich: Diesel und Hybrid Modelle
        if (product.drive === "electric" && !product.category.includes("rough") && product.category !== "crawler") return false;
      } else if (filters.application === "electric-all") {
        // Alle Elektro-Modelle
        if (product.drive !== "electric") return false;
      }
      
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

            {/* Einsatzbereich */}
            <div className="space-y-2">
              <Label>Einsatzbereich</Label>
              <Select value={filters.application} onValueChange={(v) => setFilters({ ...filters, application: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card border border-border z-50">
                  {platformFilterOptions.application.map((opt) => (
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
                min={5}
                max={75}
                step={1}
                onValueChange={([min, max]) => setFilters({ ...filters, minHeight: min, maxHeight: max })}
              />
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
        productPrice={selectedProduct?.uvpPrice}
        filters={{
          antrieb: filters.drive !== "all" ? platformFilterOptions.drive.find(o => o.value === filters.drive)?.label : undefined,
          lithium: filters.lithium,
          arbeitshoehe: filters.maxHeight,
        }}
      />
    </>
  );
}
