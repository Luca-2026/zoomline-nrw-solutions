import { useState, useCallback, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle, X } from "lucide-react";
import { FinancingSection } from "@/components/financing/FinancingSection";
import { FinancingRequestData } from "@/lib/financing";
import { TradeInSection, TradeInData } from "@/components/configurator/TradeInSection";

const inquirySchema = z.object({
  firma: z.string().trim().min(1, "Firma ist erforderlich").max(100),
  ansprechpartner: z.string().trim().min(1, "Ansprechpartner ist erforderlich").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  telefon: z.string().trim().min(1, "Telefon ist erforderlich").max(50),
  strasse: z.string().trim().min(1, "Straße ist erforderlich").max(200),
  plz: z.string().trim().min(1, "PLZ / Ort ist erforderlich").max(50),
  nachricht: z.string().max(2000).optional(),
  rueckruf: z.boolean().optional(),
  dsgvo: z.literal(true, { errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu" }) }),
});

const anbaugeraeteOptions = [
  { id: "schnellwechsler", label: "Schnellwechsler" },
  { id: "tieflöffel", label: "Tieflöffel" },
  { id: "grabenraumlöffel", label: "Grabenräumlöffel" },
  { id: "hydraulikhammer", label: "Hydraulikhammer" },
  { id: "greifer", label: "Greifer" },
  { id: "anbauverdichter", label: "Anbauverdichter" },
  { id: "tiltrotator", label: "Tiltrotator" },
  { id: "räumschild", label: "Räumschild" },
];

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "arbeitsbuehne" | "bagger" | "teleskoplader" | "service" | "kontakt";
  selectedProduct?: string;
  filters?: Record<string, any>;
  productPrice?: number;
}

export function InquiryModal({ isOpen, onClose, type, selectedProduct, filters, productPrice }: InquiryModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedAnbaugeraete, setSelectedAnbaugeraete] = useState<string[]>([]);
  const [financingData, setFinancingData] = useState<FinancingRequestData>({
    financingRequested: false,
    netPurchasePrice: 0,
    downPaymentPercent: 20,
    downPaymentEur: 0,
    termMonths: 36,
    balloonPercent: 20,
    balloonEur: 0,
    estimatedMonthlyRate: 0
  });
  const [tradeInData, setTradeInData] = useState<TradeInData>({
    enabled: false,
    hersteller: "",
    modell: "",
    baujahr: "",
    betriebsstunden: "",
    zustand: "",
    seriennummer: "",
    ausstattung: "",
    letzteWartung: "",
    standort: "",
    anmerkungen: "",
    imageUrls: [],
  });
  
  const [formData, setFormData] = useState({
    firma: "",
    ansprechpartner: "",
    email: "",
    telefon: "",
    strasse: "",
    plz: "",
    nachricht: "",
    rueckruf: false,
    lieferung: false,
    wartungsvertrag: false,
    wartungsvertragArt: "",
    wartungsvertragMonate: "",
    dsgvo: false,
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleFinancingChange = useCallback((data: FinancingRequestData) => {
    setFinancingData(data);
  }, []);

  const handleTradeInChange = useCallback((data: TradeInData) => {
    setTradeInData(data);
  }, []);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const toggleAnbaugeraet = (id: string) => {
    setSelectedAnbaugeraete((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Validate trade-in fields if enabled
    if (tradeInData.enabled) {
      const tradeInErrors: Record<string, string> = {};
      if (!tradeInData.seriennummer.trim()) {
        tradeInErrors.tradeInSeriennummer = "Seriennummer ist bei Inzahlungnahme Pflicht";
      }
      if (tradeInData.imageUrls.length < 4) {
        tradeInErrors.tradeInImages = `Mindestens 4 Bilder erforderlich (noch ${4 - tradeInData.imageUrls.length} fehlend)`;
      }
      if (Object.keys(tradeInErrors).length > 0) {
        setErrors((prev) => ({ ...prev, ...tradeInErrors }));
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const anbaugeraeteLabels = selectedAnbaugeraete.map(
        (id) => anbaugeraeteOptions.find((o) => o.id === id)?.label || id
      );

      const { data, error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          type,
          firma: formData.firma,
          ansprechpartner: formData.ansprechpartner,
          email: formData.email,
          telefon: formData.telefon,
          strasse: formData.strasse || undefined,
          plz: formData.plz || undefined,
          lieferung: formData.lieferung,
          wartungsvertragArt: formData.wartungsvertrag ? formData.wartungsvertragArt : undefined,
          wartungsvertragMonate: formData.wartungsvertrag ? formData.wartungsvertragMonate : undefined,
          nachricht: formData.nachricht || undefined,
          rueckruf: formData.rueckruf,
          wartungsvertrag: formData.wartungsvertrag,
          selectedProduct,
          filters: {
            ...filters,
            anbaugeraete: type === "bagger" && anbaugeraeteLabels.length > 0 ? anbaugeraeteLabels : undefined,
          },
          financing: financingData.financingRequested ? financingData : undefined,
          tradeIn: tradeInData.enabled ? tradeInData : undefined,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns kurzfristig bei Ihnen.",
      });

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          firma: "",
          ansprechpartner: "",
          email: "",
          telefon: "",
          strasse: "",
          plz: "",
          nachricht: "",
          rueckruf: false,
          lieferung: false,
          wartungsvertrag: false,
          wartungsvertragArt: "",
          wartungsvertragMonate: "",
          dsgvo: false,
        });
        setSelectedAnbaugeraete([]);
        setFinancingData({
          financingRequested: false,
          netPurchasePrice: 0,
          downPaymentPercent: 20,
          downPaymentEur: 0,
          termMonths: 36,
          balloonPercent: 20,
          balloonEur: 0,
          estimatedMonthlyRate: 0
        });
        setTradeInData({
          enabled: false,
          hersteller: "",
          modell: "",
          baujahr: "",
          betriebsstunden: "",
          zustand: "",
          seriennummer: "",
          ausstattung: "",
          letzteWartung: "",
          standort: "",
          anmerkungen: "",
          imageUrls: [],
        });
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const typeLabels: Record<string, string> = {
    arbeitsbuehne: "Arbeitsbühne",
    bagger: "Bagger",
    teleskoplader: "Teleskoplader",
    service: "Service",
    kontakt: "Kontakt",
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Anfragemaske schließen"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 z-10 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 border border-border bg-background p-6 shadow-lg sm:rounded-lg">
        <div className="max-h-[90vh] overflow-y-auto pr-1">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-heading text-lg font-semibold leading-none tracking-tight">
                {selectedProduct ? `Anfrage: ${selectedProduct}` : `${typeLabels[type]} anfragen`}
              </h2>
              <p className="text-sm text-muted-foreground">
                Füllen Sie das Formular aus – wir melden uns kurzfristig mit Verfügbarkeit und Angebot.
              </p>
            </div>
            <Button type="button" variant="ghost" size="icon" className="shrink-0" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Schließen</span>
            </Button>
          </div>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">Vielen Dank!</h3>
            <p className="text-muted-foreground">
              Wir haben Ihre Anfrage erhalten und melden uns kurzfristig.
            </p>
          </div>
        ) : (
          <>
        {/* Filter Summary */}
        {filters && Object.keys(filters).some(k => filters[k]) && (
          <div className="p-3 rounded-lg bg-muted text-sm">
            <p className="font-medium mb-1">Ihre Auswahl:</p>
            <ul className="space-y-0.5 text-muted-foreground">
              {Object.entries(filters).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0)) return null;
                const labels: Record<string, string> = {
                  einsatzort: "Einsatzort",
                  antrieb: "Antrieb",
                  lithium: "Lithium-Ionen",
                  arbeitshoehe: "Max. Arbeitshöhe",
                  reichweite: "Max. Reichweite",
                  einsatzbereich: "Einsatzbereich",
                  gewichtsklasse: "Gewichtsklasse",
                  ausstattung: "Ausstattung",
                  lieferung: "Lieferung",
                  anbaugeraete: "Anbaugeräte",
                };
                let displayValue = value;
                if (typeof value === "boolean") displayValue = value ? "Ja" : "Nein";
                if (Array.isArray(value)) displayValue = value.join(", ");
                if (key === "arbeitshoehe" || key === "reichweite") displayValue = `${value} m`;
                return (
                  <li key={key}>
                    <span className="font-medium">{labels[key] || key}:</span> {displayValue}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firma">Firma *</Label>
              <Input
                id="firma"
                value={formData.firma}
                onChange={(e) => handleChange("firma", e.target.value)}
                className={errors.firma ? "border-destructive" : ""}
              />
              {errors.firma && <p className="text-xs text-destructive mt-1">{errors.firma}</p>}
            </div>
            <div>
              <Label htmlFor="ansprechpartner">Ansprechpartner *</Label>
              <Input
                id="ansprechpartner"
                value={formData.ansprechpartner}
                onChange={(e) => handleChange("ansprechpartner", e.target.value)}
                className={errors.ansprechpartner ? "border-destructive" : ""}
              />
              {errors.ansprechpartner && <p className="text-xs text-destructive mt-1">{errors.ansprechpartner}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="strasse">Straße / Hausnr. *</Label>
            <Input
              id="strasse"
              value={formData.strasse}
              onChange={(e) => handleChange("strasse", e.target.value)}
              placeholder="z.B. Musterstraße 12"
              className={errors.strasse ? "border-destructive" : ""}
            />
            {errors.strasse && <p className="text-xs text-destructive mt-1">{errors.strasse}</p>}
          </div>

          <div>
            <Label htmlFor="plz">PLZ / Ort *</Label>
            <Input
              id="plz"
              value={formData.plz}
              onChange={(e) => handleChange("plz", e.target.value)}
              placeholder="z.B. 47807 Krefeld"
              className={errors.plz ? "border-destructive" : ""}
            />
            {errors.plz && <p className="text-xs text-destructive mt-1">{errors.plz}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="telefon">Telefon *</Label>
              <Input
                id="telefon"
                type="tel"
                value={formData.telefon}
                onChange={(e) => handleChange("telefon", e.target.value)}
                className={errors.telefon ? "border-destructive" : ""}
              />
              {errors.telefon && <p className="text-xs text-destructive mt-1">{errors.telefon}</p>}
            </div>
          </div>

          {/* Anbaugeräte - nur bei Bagger */}
          {type === "bagger" && (
            <div className="space-y-2">
              <Label>Gewünschte Anbaugeräte (optional)</Label>
              <div className="grid grid-cols-2 gap-2">
                {anbaugeraeteOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedAnbaugeraete.includes(option.id)}
                      onCheckedChange={() => toggleAnbaugeraet(option.id)}
                    />
                    <Label htmlFor={option.id} className="cursor-pointer text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Finanzierung - bei Arbeitsbühnen, Bagger und Teleskoplader */}
          {(type === "arbeitsbuehne" || type === "bagger" || type === "teleskoplader") && (
            <FinancingSection
              productPrice={productPrice}
              onChange={handleFinancingChange}
            />
          )}

          {/* Inzahlungnahme - bei Arbeitsbühnen, Bagger und Teleskoplader */}
          {(type === "arbeitsbuehne" || type === "bagger" || type === "teleskoplader") && (
            <>
              <TradeInSection 
                value={tradeInData} 
                onChange={handleTradeInChange} 
                productType={type === "teleskoplader" ? "bagger" : type}
              />
              {(errors.tradeInSeriennummer || errors.tradeInImages) && (
                <div className="space-y-1">
                  {errors.tradeInSeriennummer && <p className="text-xs text-destructive">{errors.tradeInSeriennummer}</p>}
                  {errors.tradeInImages && <p className="text-xs text-destructive">{errors.tradeInImages}</p>}
                </div>
              )}
            </>
          )}

          <div>
            <Label htmlFor="nachricht">Nachricht / Anwendung</Label>
            <Textarea
              id="nachricht"
              rows={3}
              value={formData.nachricht}
              onChange={(e) => handleChange("nachricht", e.target.value)}
              placeholder="Beschreiben Sie Ihren Einsatzzweck oder Ihre Anforderungen..."
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="rueckruf"
              checked={formData.rueckruf}
              onCheckedChange={(v) => handleChange("rueckruf", !!v)}
            />
            <Label htmlFor="rueckruf" className="cursor-pointer">Bitte um Rückruf</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="lieferung"
              checked={formData.lieferung}
              onCheckedChange={(v) => handleChange("lieferung", !!v)}
            />
            <Label htmlFor="lieferung" className="cursor-pointer">
              Lieferung gewünscht
            </Label>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="wartungsvertrag"
                checked={formData.wartungsvertrag}
                onCheckedChange={(v) => {
                  handleChange("wartungsvertrag", !!v);
                  if (!v) {
                    handleChange("wartungsvertragArt", "");
                    handleChange("wartungsvertragMonate", "");
                  }
                }}
              />
              <Label htmlFor="wartungsvertrag" className="cursor-pointer">
                Wartungsvertrag gewünscht
              </Label>
            </div>
            {formData.wartungsvertrag && (
              <div className="ml-6 space-y-3">
                <div>
                  <Label htmlFor="wartungsvertragArt" className="text-sm">Art des Vertrags</Label>
                  <Select value={formData.wartungsvertragArt} onValueChange={(v) => handleChange("wartungsvertragArt", v)}>
                    <SelectTrigger id="wartungsvertragArt" className="w-56">
                      <SelectValue placeholder="Vertragsart wählen..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border z-50">
                      <SelectItem value="ZL|Care">ZL|Care – Wartungsteile-Paket</SelectItem>
                      <SelectItem value="ZL|Pro">ZL|Pro – Inspektionsvertrag</SelectItem>
                      <SelectItem value="ZL|Complete">ZL|Complete – Full-Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="wartungsvertragMonate" className="text-sm">Laufzeit</Label>
                  <Select value={formData.wartungsvertragMonate} onValueChange={(v) => handleChange("wartungsvertragMonate", v)}>
                    <SelectTrigger id="wartungsvertragMonate" className="w-48">
                      <SelectValue placeholder="Laufzeit wählen..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border z-50">
                      <SelectItem value="12">12 Monate</SelectItem>
                      <SelectItem value="24">24 Monate</SelectItem>
                      <SelectItem value="36">36 Monate</SelectItem>
                      <SelectItem value="48">48 Monate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="dsgvo"
              checked={formData.dsgvo}
              onCheckedChange={(v) => handleChange("dsgvo", !!v)}
              className={errors.dsgvo ? "border-destructive" : ""}
            />
            <div>
              <Label htmlFor="dsgvo" className="cursor-pointer text-sm">
                Ich stimme der Verarbeitung meiner Daten gemäß <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary underline">Datenschutzerklärung</a> zu *
              </Label>
              {errors.dsgvo && <p className="text-xs text-destructive mt-1">{errors.dsgvo}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              "Anfrage senden"
            )}
          </Button>
        </form>
          </>
        )}
        </div>
      </div>
    </div>
  );
}
