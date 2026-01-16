import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { excavators, excavatorFilterOptions, type Excavator } from "@/data/products";
import { ExcavatorCard } from "./ExcavatorCard";
import { InquiryModal } from "./InquiryModal";
import { Filter, RotateCcw } from "lucide-react";

interface ExcavatorFilters {
  application: string;
  weightClass: string;
  drive: string;
  quickCoupler: boolean;
  additionalHydraulics: boolean;
  tiltrotatorReady: boolean;
  cabin: boolean;
  adjustableArm: boolean;
  delivery: boolean;
}

const defaultFilters: ExcavatorFilters = {
  application: "all",
  weightClass: "all",
  drive: "all",
  quickCoupler: false,
  additionalHydraulics: false,
  tiltrotatorReady: false,
  cabin: false,
  adjustableArm: false,
  delivery: false,
};

export function ExcavatorConfigurator() {
  const [filters, setFilters] = useState<ExcavatorFilters>(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState<Excavator | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return excavators.filter((product) => {
      if (filters.application !== "all" && product.application !== filters.application) return false;
      if (filters.weightClass !== "all" && product.weightClass !== filters.weightClass) return false;
      if (filters.drive !== "all" && product.drive !== filters.drive) return false;
      if (filters.quickCoupler && !product.equipment.quickCoupler) return false;
      if (filters.additionalHydraulics && !product.equipment.additionalHydraulics) return false;
      if (filters.tiltrotatorReady && !product.equipment.tiltrotatorReady) return false;
      if (filters.cabin && !product.equipment.cabin) return false;
      if (filters.adjustableArm && !product.equipment.adjustableArm) return false;
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

  const getSelectedEquipment = () => {
    const equipment: string[] = [];
    if (filters.quickCoupler) equipment.push("Schnellwechsler");
    if (filters.additionalHydraulics) equipment.push("Zusatzhydraulik");
    if (filters.tiltrotatorReady) equipment.push("Tiltrotator vorbereitet");
    if (filters.cabin) equipment.push("Kabine");
    if (filters.adjustableArm) equipment.push("Verstellausleger");
    return equipment;
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

            {/* Einsatzbereich */}
            <div className="space-y-2">
              <Label>Einsatzbereich</Label>
              <Select value={filters.application} onValueChange={(v) => setFilters({ ...filters, application: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {excavatorFilterOptions.application.map((opt) => (
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

            {/* Antrieb */}
            <div className="space-y-2">
              <Label>Antrieb</Label>
              <Select value={filters.drive} onValueChange={(v) => setFilters({ ...filters, drive: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {excavatorFilterOptions.drive.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Ausstattung */}
            <div className="space-y-2">
              <Label>Gewünschte Ausstattung</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="quickCoupler" checked={filters.quickCoupler} onCheckedChange={(v) => setFilters({ ...filters, quickCoupler: !!v })} />
                  <Label htmlFor="quickCoupler" className="cursor-pointer text-sm">Schnellwechsler</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="additionalHydraulics" checked={filters.additionalHydraulics} onCheckedChange={(v) => setFilters({ ...filters, additionalHydraulics: !!v })} />
                  <Label htmlFor="additionalHydraulics" className="cursor-pointer text-sm">Zusatzhydraulik</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="tiltrotatorReady" checked={filters.tiltrotatorReady} onCheckedChange={(v) => setFilters({ ...filters, tiltrotatorReady: !!v })} />
                  <Label htmlFor="tiltrotatorReady" className="cursor-pointer text-sm">Tiltrotator vorbereitet</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="cabin" checked={filters.cabin} onCheckedChange={(v) => setFilters({ ...filters, cabin: !!v })} />
                  <Label htmlFor="cabin" className="cursor-pointer text-sm">Kabine</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="adjustableArm" checked={filters.adjustableArm} onCheckedChange={(v) => setFilters({ ...filters, adjustableArm: !!v })} />
                  <Label htmlFor="adjustableArm" className="cursor-pointer text-sm">Verstellausleger</Label>
                </div>
              </div>
            </div>

            {/* Lieferung */}
            <div className="flex items-center gap-2">
              <Checkbox id="delivery" checked={filters.delivery} onCheckedChange={(v) => setFilters({ ...filters, delivery: !!v })} />
              <Label htmlFor="delivery" className="cursor-pointer">Lieferung gewünscht</Label>
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
        filters={{
          einsatzbereich: filters.application !== "all" ? excavatorFilterOptions.application.find(o => o.value === filters.application)?.label : undefined,
          gewichtsklasse: filters.weightClass !== "all" ? excavatorFilterOptions.weightClass.find(o => o.value === filters.weightClass)?.label : undefined,
          antrieb: filters.drive !== "all" ? excavatorFilterOptions.drive.find(o => o.value === filters.drive)?.label : undefined,
          ausstattung: getSelectedEquipment(),
          lieferung: filters.delivery,
        }}
      />
    </>
  );
}
