import { useState, useMemo } from "react";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { excavators, excavatorFilterOptions, type Excavator } from "@/data/products";
import { ExcavatorCard } from "./ExcavatorCard";
import { InquiryModal } from "./InquiryModal";
import { Filter, RotateCcw } from "lucide-react";

interface ExcavatorFilters {
  category: string;
  weightClass: string;
}

const defaultFilters: ExcavatorFilters = {
  category: "all",
  weightClass: "all",
};

export function ExcavatorConfigurator() {
  const [filters, setFilters] = useState<ExcavatorFilters>(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState<Excavator | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return excavators.filter((product) => {
      if (filters.category !== "all" && product.category !== filters.category) return false;
      
      // Weight class filter
      if (filters.weightClass !== "all") {
        const [minStr, maxStr] = filters.weightClass.split("-");
        const min = parseInt(minStr);
        const max = maxStr ? parseInt(maxStr) : Infinity;
        if (product.operatingWeight < min || product.operatingWeight > max) return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleInquiry = (product?: Excavator) => {
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

            {/* Kategorie */}
            <div className="space-y-2">
              <Label>Kategorie</Label>
              <Select value={filters.category} onValueChange={(v) => setFilters({ ...filters, category: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {excavatorFilterOptions.category.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Gewichtsklasse */}
            <div className="space-y-2">
              <Label>Gewichtsklasse</Label>
              <Select value={filters.weightClass} onValueChange={(v) => setFilters({ ...filters, weightClass: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {excavatorFilterOptions.weightClass.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                <ExcavatorCard
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
        type="bagger"
        selectedProduct={selectedProduct?.name}
        productPrice={selectedProduct?.uvpPrice}
        filters={{
          gewichtsklasse: filters.weightClass !== "all" ? excavatorFilterOptions.weightClass.find(o => o.value === filters.weightClass)?.label : undefined,
        }}
      />
    </>
  );
}
