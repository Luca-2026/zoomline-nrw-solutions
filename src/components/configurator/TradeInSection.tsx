import { useCallback, useMemo, useState, type ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRightLeft, Upload, X, Loader2, Image as ImageIcon, AlertCircle } from "lucide-react";

export interface TradeInData {
  enabled: boolean;
  hersteller: string;
  modell: string;
  baujahr: string;
  betriebsstunden: string;
  zustand: string;
  seriennummer: string;
  ausstattung: string;
  letzteWartung: string;
  standort: string;
  anmerkungen: string;
  imageUrls: string[];
  // Neue Felder für Arbeitsbühnen
  buehnenTyp?: string;
  antriebsart?: string;
}

interface TradeInSectionProps {
  value: TradeInData;
  onChange: (data: TradeInData) => void;
  productType?: "bagger" | "arbeitsbuehne";
}

const zustandOptions = [
  { value: "sehr-gut", label: "Sehr gut – kaum Gebrauchsspuren" },
  { value: "gut", label: "Gut – normale Gebrauchsspuren" },
  { value: "befriedigend", label: "Befriedigend – stärkere Gebrauchsspuren" },
  { value: "reparaturbeduerftig", label: "Reparaturbedürftig" },
];

// Bagger-spezifische Optionen
const baggerHerstellerSuggestions = "z.B. Caterpillar, Liebherr, Zoomlion, Kubota, Takeuchi";
const baggerModellSuggestions = "z.B. 320D, A918, ZE36GU";

// Arbeitsbühnen-spezifische Optionen
const buehnenHerstellerSuggestions = "z.B. JLG, Genie, Haulotte, Niftylift, Skyjack, Zoomlion";
const buehnenModellSuggestions = "z.B. 2646ES, GS-1930, HA20 RTJ Pro";

const buehnenTypOptions = [
  { value: "scherenarbeitsbuehne", label: "Scherenarbeitsbühne" },
  { value: "gelenkteleskop", label: "Gelenkteleskopbühne" },
  { value: "teleskop", label: "Teleskopbühne" },
  { value: "mastbuehne", label: "Mastbühne" },
  { value: "anhaengerbuehne", label: "Anhängerarbeitsbühne" },
  { value: "raupenbuehne", label: "Raupenarbeitsbühne" },
];

const antriebsartOptions = [
  { value: "elektrisch", label: "Elektrisch" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
];

const BUCKET = "trade-in-images" as const;

function createUploadPath(fileName: string) {
  const ext = fileName.split(".").pop() || "jpg";
  const rand = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `inquiries/${rand}.${ext}`;
}

function getBucketPathFromPublicUrl(publicUrl: string): string | null {
  try {
    const u = new URL(publicUrl);
    const marker = `/storage/v1/object/public/${BUCKET}/`;
    const idx = u.pathname.indexOf(marker);
    if (idx === -1) return null;
    return decodeURIComponent(u.pathname.slice(idx + marker.length));
  } catch {
    return null;
  }
}

export function TradeInSection({ value, onChange, productType = "bagger" }: TradeInSectionProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const isArbeitsbuehne = productType === "arbeitsbuehne";

  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 30 }, (_, i) => currentYear - i);
  }, []);

  const commitChange = useCallback(
    (next: TradeInData) => {
      if (next === value) return;
      const same =
        next.enabled === value.enabled &&
        next.hersteller === value.hersteller &&
        next.modell === value.modell &&
        next.baujahr === value.baujahr &&
        next.betriebsstunden === value.betriebsstunden &&
        next.zustand === value.zustand &&
        next.seriennummer === value.seriennummer &&
        next.ausstattung === value.ausstattung &&
        next.letzteWartung === value.letzteWartung &&
        next.standort === value.standort &&
        next.anmerkungen === value.anmerkungen &&
        next.buehnenTyp === value.buehnenTyp &&
        next.antriebsart === value.antriebsart &&
        next.imageUrls.length === value.imageUrls.length &&
        next.imageUrls.every((u, i) => u === value.imageUrls[i]);
      if (same) return;
      onChange(next);
    },
    [onChange, value]
  );

  const updateFormField = useCallback(
    (updates: Partial<Omit<TradeInData, "enabled">>) => {
      commitChange({ ...value, ...updates });
    },
    [commitChange, value]
  );

  const setEnabled = useCallback(
    (checked: boolean) => {
      if (checked === value.enabled) return;
      setUploadError(null);
      commitChange({ ...value, enabled: checked });
    },
    [commitChange, value]
  );

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remainingSlots = 3 - value.imageUrls.length;
    if (remainingSlots <= 0) {
      setUploadError("Maximal 3 Bilder erlaubt");
      return;
    }

    const filesToUpload = Array.from(files).slice(0, remainingSlots);
    setUploading(true);
    setUploadError(null);

    try {
      const uploadedUrls: string[] = [];

      for (const file of filesToUpload) {
        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
          setUploadError("Nur JPG, PNG oder WebP erlaubt");
          continue;
        }

        if (file.size > 5 * 1024 * 1024) {
          setUploadError("Maximale Dateigröße: 5MB");
          continue;
        }

        const filePath = createUploadPath(file.name);

        const { error: uploadError } = await supabase.storage
          .from(BUCKET)
          .upload(filePath, file);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          setUploadError("Fehler beim Hochladen");
          continue;
        }

        const { data: urlData } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(filePath);

        uploadedUrls.push(urlData.publicUrl);
      }

      if (uploadedUrls.length > 0) {
        updateFormField({ imageUrls: [...value.imageUrls, ...uploadedUrls] });
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadError("Fehler beim Hochladen");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const removeImage = useCallback(
    async (index: number) => {
      const url = value.imageUrls[index];
      const newUrls = value.imageUrls.filter((_, i) => i !== index);
      updateFormField({ imageUrls: newUrls });

      const path = url ? getBucketPathFromPublicUrl(url) : null;
      if (!path) return;
      const { error } = await supabase.storage.from(BUCKET).remove([path]);
      if (error) {
        console.warn("Could not remove trade-in image:", error);
      }
    },
    [updateFormField, value.imageUrls]
  );

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {/* Toggle Header */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={value.enabled}
        className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${
          value.enabled ? "bg-primary/10 border-b border-border" : "bg-muted/30 hover:bg-muted/50"
        }`}
        onClick={() => setEnabled(!value.enabled)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setEnabled(!value.enabled);
          }
        }}
      >
        <Checkbox
          id="trade-in-toggle"
          checked={value.enabled}
          onCheckedChange={(v) => setEnabled(!!v)}
          onClick={(e) => e.stopPropagation()}
        />
        <ArrowRightLeft className={`h-5 w-5 ${value.enabled ? "text-primary" : "text-muted-foreground"}`} />
        <div className="flex-1">
          <Label htmlFor="trade-in-toggle" className="cursor-pointer font-medium">
            Inzahlungnahme einer Gebrauchtmaschine
          </Label>
          <p className="text-xs text-muted-foreground">
            Wir kaufen Ihre alte {isArbeitsbuehne ? "Arbeitsbühne" : "Maschine"} an und verrechnen den Wert
          </p>
        </div>
      </div>

      {/* Form Content */}
      {value.enabled && (
        <div className="p-4 space-y-4 bg-primary/5">
          <p className="text-sm text-muted-foreground">
            Beschreiben Sie Ihre {isArbeitsbuehne ? "Arbeitsbühne" : "Maschine"} – wir erstellen Ihnen ein unverbindliches Ankaufsangebot.
          </p>

          {/* Arbeitsbühnen-spezifische Felder: Typ und Antrieb */}
          {isArbeitsbuehne && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ti-buehnentyp">Bühnentyp *</Label>
                <Select value={value.buehnenTyp || ""} onValueChange={(v) => updateFormField({ buehnenTyp: v })}>
                  <SelectTrigger id="ti-buehnentyp">
                    <SelectValue placeholder="Typ wählen..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border z-50">
                    {buehnenTypOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ti-antrieb">Antriebsart *</Label>
                <Select value={value.antriebsart || ""} onValueChange={(v) => updateFormField({ antriebsart: v })}>
                  <SelectTrigger id="ti-antrieb">
                    <SelectValue placeholder="Antrieb wählen..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border z-50">
                    {antriebsartOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Basic Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ti-hersteller">Hersteller *</Label>
              <Input
                id="ti-hersteller"
                placeholder={isArbeitsbuehne ? buehnenHerstellerSuggestions : baggerHerstellerSuggestions}
                value={value.hersteller}
                onChange={(e) => updateFormField({ hersteller: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ti-modell">Modell / Typ *</Label>
              <Input
                id="ti-modell"
                placeholder={isArbeitsbuehne ? buehnenModellSuggestions : baggerModellSuggestions}
                value={value.modell}
                onChange={(e) => updateFormField({ modell: e.target.value })}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="ti-baujahr">Baujahr *</Label>
              <Select value={value.baujahr} onValueChange={(v) => updateFormField({ baujahr: v })}>
                <SelectTrigger id="ti-baujahr">
                  <SelectValue placeholder="Wählen..." />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border z-50">
                  {yearOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="ti-stunden">Betriebsstunden *</Label>
              <Input
                id="ti-stunden"
                type="number"
                placeholder="z.B. 5000"
                value={value.betriebsstunden}
                onChange={(e) => updateFormField({ betriebsstunden: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ti-zustand">Zustand *</Label>
              <Select value={value.zustand} onValueChange={(v) => updateFormField({ zustand: v })}>
                <SelectTrigger id="ti-zustand">
                  <SelectValue placeholder="Wählen..." />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border z-50">
                  {zustandOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Extended Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ti-seriennummer">Seriennummer</Label>
              <Input
                id="ti-seriennummer"
                placeholder="Falls bekannt"
                value={value.seriennummer}
                onChange={(e) => updateFormField({ seriennummer: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ti-wartung">Letzte Wartung</Label>
              <Input
                id="ti-wartung"
                type="month"
                value={value.letzteWartung}
                onChange={(e) => updateFormField({ letzteWartung: e.target.value })}
              />
            </div>
          </div>

          {/* Standort - volle Breite für Arbeitsbühnen (kein Sonderausstattungs-Feld) */}
          {isArbeitsbuehne ? (
            <div>
              <Label htmlFor="ti-standort">Standort der Maschine</Label>
              <Input
                id="ti-standort"
                placeholder="PLZ / Ort"
                value={value.standort}
                onChange={(e) => updateFormField({ standort: e.target.value })}
              />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ti-standort">Standort der Maschine</Label>
                <Input
                  id="ti-standort"
                  placeholder="PLZ / Ort"
                  value={value.standort}
                  onChange={(e) => updateFormField({ standort: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="ti-ausstattung">Sonderausstattung</Label>
                <Input
                  id="ti-ausstattung"
                  placeholder="z.B. Klimaanlage, Schnellwechsler"
                  value={value.ausstattung}
                  onChange={(e) => updateFormField({ ausstattung: e.target.value })}
                />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="ti-anmerkungen">Anmerkungen / Schäden</Label>
            <Textarea
              id="ti-anmerkungen"
              rows={2}
              placeholder="Bekannte Mängel, Reparaturen, Besonderheiten..."
              value={value.anmerkungen}
              onChange={(e) => updateFormField({ anmerkungen: e.target.value })}
            />
          </div>

          {/* Image Upload */}
          <div>
            <Label className="mb-2 block">Fotos der {isArbeitsbuehne ? "Arbeitsbühne" : "Maschine"} (max. 3 Bilder)</Label>
            <div className="grid grid-cols-3 gap-3">
              {/* Uploaded Images */}
              {value.imageUrls.map((url, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted">
                  <img src={url} alt={`Bild ${index + 1}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-1 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              {/* Upload Button */}
              {value.imageUrls.length < 3 && (
                <label className="aspect-square rounded-lg border-2 border-dashed border-border bg-muted/50 hover:bg-muted cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                  {uploading ? (
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Hochladen</span>
                    </>
                  )}
                </label>
              )}

              {/* Empty Slots */}
              {value.imageUrls.length < 2 &&
                Array.from({ length: 2 - value.imageUrls.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="aspect-square rounded-lg border border-dashed border-border bg-muted/30 flex items-center justify-center"
                  >
                    <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                ))}
            </div>

            {uploadError && (
              <div className="mt-2 flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {uploadError}
              </div>
            )}

            <p className="mt-2 text-xs text-muted-foreground">
              Empfohlen: Vorderansicht, Seitenansicht, Typenschild. JPG, PNG oder WebP, max. 5 MB pro Bild.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
