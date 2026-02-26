import { useState, useMemo } from "react";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { telehandlers, telehandlerFilterOptions, type Telehandler } from "@/data/products";
import { TelehandlerCard } from "./TelehandlerCard";
import { InquiryModal } from "./InquiryModal";
import { Filter, RotateCcw } from "lucide-react";

interface TelehandlerFilters {
  category: string;
  workingHeight: string;
  weight: string;
}

const defaultFilters: TelehandlerFilters = {
  category: "all",
  workingHeight: "all",
  weight: "all",
};

export function TelehandlerConfigurator() {
  const [filters, setFilters] = useState<TelehandlerFilters>(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState<Telehandler | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return telehandlers.filter((product) => {
      if (filters.category !== "all" && product.category !== filters.category) return false;

      if (filters.workingHeight !== "all") {
        const [minStr, maxStr] = filters.workingHeight.split("-");
        const min = parseInt(minStr);
        const max = maxStr ? parseInt(maxStr) : Infinity;
        if (product.maxWorkingHeight < min || product.maxWorkingHeight > max) return false;
      }

      if (filters.weight !== "all") {
        const [minStr, maxStr] = filters.weight.split("-");
        const min = parseInt(minStr);
        const max = maxStr ? parseInt(maxStr) : Infinity;
        if (product.operatingWeight < min || product.operatingWeight > max) return false;
      }

      return true;
    });
  }, [filters]);

  const handleInquiry = (product?: Telehandler) => {
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

            {/* Typ */}
            <div className="space-y-2">
              <Label>Typ</Label>
              <Select value={filters.category} onValueChange={(v) => setFilters({ ...filters, category: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {telehandlerFilterOptions.category.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Arbeitshöhe */}
            <div className="space-y-2">
              <Label>Arbeitshöhe</Label>
              <Select value={filters.workingHeight} onValueChange={(v) => setFilters({ ...filters, workingHeight: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {telehandlerFilterOptions.workingHeight.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Gewicht */}
            <div className="space-y-2">
              <Label>Gewichtsklasse</Label>
              <Select value={filters.weight} onValueChange={(v) => setFilters({ ...filters, weight: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {telehandlerFilterOptions.weight.map((opt) => (
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
                <TelehandlerCard
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
        type="teleskoplader"
        selectedProduct={selectedProduct?.name}
        filters={{
          typ: filters.category !== "all" ? telehandlerFilterOptions.category.find(o => o.value === filters.category)?.label : undefined,
          arbeitshoehe: filters.workingHeight !== "all" ? telehandlerFilterOptions.workingHeight.find(o => o.value === filters.workingHeight)?.label : undefined,
          gewichtsklasse: filters.weight !== "all" ? telehandlerFilterOptions.weight.find(o => o.value === filters.weight)?.label : undefined,
        }}
      />
    </>
  );
}
