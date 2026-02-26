import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ─── Rate Limiting (in-memory, per-instance) ────────────────────────────
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // max requests per IP per window
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipRequestLog.set(ip, recent);
  // Cleanup old entries periodically
  if (ipRequestLog.size > 10000) {
    for (const [key, vals] of ipRequestLog) {
      if (vals.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) ipRequestLog.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

// ─── Input Validation & Sanitization ────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim().slice(0, maxLength));
}

function sanitizeNumber(value: unknown, min = 0, max = 999999999): number {
  const n = Number(value);
  if (isNaN(n)) return 0;
  return Math.min(Math.max(n, min), max);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

const VALID_TYPES = ["arbeitsbuehne", "bagger", "service", "kontakt", "hot-deal"];
const STORAGE_BUCKET = "trade-in-images";
const SIGNED_URL_EXPIRY = 3600; // 1 hour

function validateImagePath(path: string): boolean {
  // Only allow paths that look like storage paths (no URLs, no traversal)
  return /^inquiries\/[a-zA-Z0-9-]+\.\w+$/.test(path);
}

// ─── Interfaces ─────────────────────────────────────────────────────────
interface FinancingData {
  financingRequested: boolean;
  netPurchasePrice: number;
  downPaymentPercent: number;
  downPaymentEur: number;
  termMonths: number;
  balloonPercent: number;
  balloonEur: number;
  estimatedMonthlyRate: number;
  priceOnRequest?: boolean;
}

interface TradeInData {
  enabled: boolean;
  hersteller: string;
  modell: string;
  baujahr: string;
  betriebsstunden: string;
  zustand: string;
  seriennummer?: string;
  ausstattung?: string;
  letzteWartung?: string;
  standort?: string;
  anmerkungen?: string;
  imageUrls: string[]; // Now storage paths, not URLs
}

interface InquiryRequest {
  type: string;
  firma?: string;
  ansprechpartner?: string;
  name?: string;
  email: string;
  telefon?: string;
  phone?: string;
  company?: string;
  plz?: string;
  standort?: string;
  nachricht?: string;
  message?: string;
  rueckruf?: boolean;
  wartungsvertrag?: boolean;
  filters?: Record<string, unknown>;
  selectedProduct?: string;
  financing?: FinancingData;
  tradeIn?: TradeInData;
  // Honeypot field - should be empty
  _hp_field?: string;
}

// ─── Formatting helpers ─────────────────────────────────────────────────
const formatFilters = (filters: Record<string, unknown> | undefined, type: string): string => {
  if (!filters) return "";
  let filterText = "";
  
  if (type === "arbeitsbuehne") {
    if (filters.einsatzort) filterText += `Einsatzort: ${sanitizeString(filters.einsatzort, 100)}\n`;
    if (filters.antrieb) filterText += `Antrieb: ${sanitizeString(filters.antrieb, 50)}\n`;
    if (filters.lithium !== undefined) filterText += `Lithium-Ionen gewünscht: ${filters.lithium ? "Ja" : "Nein"}\n`;
    if (filters.arbeitshoehe) filterText += `Arbeitshöhe: ${sanitizeNumber(filters.arbeitshoehe, 0, 200)} m\n`;
    if (filters.reichweite) filterText += `Seitliche Reichweite: ${sanitizeNumber(filters.reichweite, 0, 100)} m\n`;
    if (Array.isArray(filters.untergrund)) filterText += `Untergrund: ${(filters.untergrund as string[]).map(s => sanitizeString(s, 50)).join(", ")}\n`;
  } else if (type === "bagger") {
    if (filters.einsatzbereich) filterText += `Einsatzbereich: ${sanitizeString(filters.einsatzbereich, 100)}\n`;
    if (filters.gewichtsklasse) filterText += `Gewichtsklasse: ${sanitizeString(filters.gewichtsklasse, 50)}\n`;
    if (filters.antrieb) filterText += `Antrieb: ${sanitizeString(filters.antrieb, 50)}\n`;
    if (Array.isArray(filters.ausstattung)) filterText += `Ausstattung: ${(filters.ausstattung as string[]).map(s => sanitizeString(s, 50)).join(", ")}\n`;
    if (Array.isArray(filters.anbaugeraete)) filterText += `Gewünschte Anbaugeräte: ${(filters.anbaugeraete as string[]).map(s => sanitizeString(s, 50)).join(", ")}\n`;
    if (filters.lieferung !== undefined) filterText += `Lieferung gewünscht: ${filters.lieferung ? "Ja" : "Nein"}\n`;
  } else if (type === "service") {
    if (filters.maschine) filterText += `Maschine/Modell: ${sanitizeString(filters.maschine, 200)}\n`;
    if (filters.seriennummer) filterText += `Seriennummer: ${sanitizeString(filters.seriennummer, 100)}\n`;
    if (filters.anliegen) filterText += `Anliegen: ${sanitizeString(filters.anliegen, 500)}\n`;
  }
  
  return filterText;
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const formatFinancing = (financing: FinancingData | undefined): string => {
  if (!financing || !financing.financingRequested) return "";

  const price = sanitizeNumber(financing.netPurchasePrice, 0, 50000000);
  const downPct = sanitizeNumber(financing.downPaymentPercent, 0, 100);
  const downEur = sanitizeNumber(financing.downPaymentEur, 0, 50000000);
  const term = sanitizeNumber(financing.termMonths, 1, 120);
  const balloonPct = sanitizeNumber(financing.balloonPercent, 0, 100);
  const balloonEur = sanitizeNumber(financing.balloonEur, 0, 50000000);
  const rate = sanitizeNumber(financing.estimatedMonthlyRate, 0, 1000000);

  let html = `
    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
      💰 Finanzierung (unverbindliche Beispielrechnung)
    </h2>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr style="background: #f0f9ff;">
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Finanzierung gewünscht:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd; color: #16a34a; font-weight: bold;">Ja</td>
      </tr>`;

  if (financing.priceOnRequest) {
    html += `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Nettokaufpreis:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;"><em>Preis auf Anfrage – Rate wird nach Angebot ermittelt</em></td>
      </tr>`;
  } else {
    html += `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Nettokaufpreis:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${formatCurrency(price)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Anzahlung:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${downPct}% (${formatCurrency(downEur)})</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Laufzeit:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${term} Monate</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Schlussrate:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${balloonPct}% (${formatCurrency(balloonEur)})</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monatliche Rate (ca.):</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd; font-size: 18px; font-weight: bold; color: #d97706;">${formatCurrency(rate)}</td>
      </tr>`;
  }

  html += `
    </table>
    <p style="font-size: 12px; color: #666; background: #fffbeb; padding: 10px; border-radius: 5px; border-left: 4px solid #f59e0b;">
      ⚠️ Kalkulation 4,0% p.a. – unverbindlich, bonitätsabhängig. Dies stellt kein verbindliches Angebot dar.
    </p>
  `;

  return html;
};

const formatTradeIn = async (tradeIn: TradeInData | undefined): Promise<string> => {
  if (!tradeIn || !tradeIn.enabled) return "";

  const zustandLabels: Record<string, string> = {
    "sehr-gut": "Sehr gut – kaum Gebrauchsspuren",
    "gut": "Gut – normale Gebrauchsspuren",
    "befriedigend": "Befriedigend – stärkere Gebrauchsspuren",
    "reparaturbeduerftig": "Reparaturbedürftig",
  };

  const s = (v: string | undefined, max: number) => sanitizeString(v || "", max);

  let html = `
    <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 8px;">
      🔄 Inzahlungnahme Gebrauchtmaschine
    </h2>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Hersteller:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${s(tradeIn.hersteller, 100)}</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Modell / Typ:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${s(tradeIn.modell, 100)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Baujahr:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.baujahr, 4)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Betriebsstunden:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.betriebsstunden, 10)} h</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Zustand:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${zustandLabels[tradeIn.zustand || ""] || s(tradeIn.zustand, 50)}</td>
      </tr>
      ${tradeIn.seriennummer ? `<tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Seriennummer:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.seriennummer, 100)}</td>
      </tr>` : ""}
      ${tradeIn.ausstattung ? `<tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Sonderausstattung:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.ausstattung, 500)}</td>
      </tr>` : ""}
      ${tradeIn.letzteWartung ? `<tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Letzte Wartung:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.letzteWartung, 20)}</td>
      </tr>` : ""}
      ${tradeIn.standort ? `<tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Standort der Maschine:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.standort, 100)}</td>
      </tr>` : ""}
      ${tradeIn.anmerkungen ? `<tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Anmerkungen / Schäden:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${s(tradeIn.anmerkungen, 2000)}</td>
      </tr>` : ""}
    </table>`;

  // Generate signed URLs for trade-in images
  if (tradeIn.imageUrls && tradeIn.imageUrls.length > 0) {
    const validPaths = tradeIn.imageUrls.filter(validateImagePath).slice(0, 6);
    
    if (validPaths.length > 0) {
      const supabaseAdmin = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );
      
      const { data: signedData } = await supabaseAdmin.storage
        .from(STORAGE_BUCKET)
        .createSignedUrls(validPaths, SIGNED_URL_EXPIRY);

      if (signedData && signedData.length > 0) {
        html += `
          <h3 style="margin-top: 20px;">Fotos der Maschine:</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${signedData.filter(d => d.signedUrl).map((d, i) => `
              <a href="${d.signedUrl}" target="_blank" style="display: inline-block;">
                <img src="${d.signedUrl}" alt="Maschinenfoto ${i + 1}" style="max-width: 200px; max-height: 150px; border: 1px solid #ddd; border-radius: 5px;" />
              </a>
            `).join("")}
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 10px;">Bilder-Links sind 1 Stunde gültig. Klicken Sie auf die Bilder, um sie in voller Größe anzuzeigen.</p>
        `;
      }
    }
  }

  return html;
};

const getSubject = (firmaName: string, type: string, financing?: FinancingData, wartungsvertrag?: boolean, tradeIn?: TradeInData): string => {
  const typeLabels: Record<string, string> = {
    arbeitsbuehne: "Arbeitsbühne",
    bagger: "Bagger",
    service: "Service",
    kontakt: "Kontaktanfrage",
    "hot-deal": "Hot Deal",
  };
  
  const financingTag = financing?.financingRequested ? " [FINANZIERUNG]" : "";
  const wartungsTag = wartungsvertrag ? " [WARTUNGSVERTRAG]" : "";
  const tradeInTag = tradeIn?.enabled ? " [INZAHLUNGNAHME]" : "";
  return `Zoomlion NRW – Anfrage ${typeLabels[type] || type}${financingTag}${wartungsTag}${tradeInTag} – ${firmaName}`;
};

// ─── Main handler ───────────────────────────────────────────────────────
Deno.serve(async (req) => {
  console.log("Received inquiry request");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (isRateLimited(clientIp)) {
      console.warn("Rate limited IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data: InquiryRequest = await req.json();

    // Honeypot check
    if (data._hp_field) {
      console.warn("Honeypot triggered");
      // Return success to not reveal the check
      return new Response(
        JSON.stringify({ success: true, message: "Anfrage erfolgreich gesendet" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate type
    if (!data.type || !VALID_TYPES.includes(data.type)) {
      return new Response(
        JSON.stringify({ error: "Ungültiger Anfragetyp" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate & sanitize core fields
    const email = sanitizeString(data.email, 255);
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const firmaName = sanitizeString(data.firma || data.company || data.name || "", 200);
    const ansprechpartnerName = sanitizeString(data.ansprechpartner || data.name || "", 200);
    const telefonNr = sanitizeString(data.telefon || data.phone || "", 30);
    const nachrichtText = sanitizeString(data.nachricht || data.message || "", 5000);
    const plz = sanitizeString(data.plz || "", 20);
    const standort = sanitizeString(data.standort || "", 100);
    const selectedProduct = sanitizeString(data.selectedProduct || "", 200);
    
    if (!email || (!firmaName && !ansprechpartnerName)) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Pflichtfelder fehlen" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const filterText = formatFilters(data.filters, data.type);
    const financingHtml = formatFinancing(data.financing);
    const tradeInHtml = await formatTradeIn(data.tradeIn);
    
    const emailHtml = `
      <h1>Neue Anfrage über Zoomlion NRW</h1>
      
      <h2>Kontaktdaten</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Firma:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${firmaName || "-"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Ansprechpartner:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${ansprechpartnerName || "-"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>E-Mail:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefon:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${telefonNr || "-"}</td></tr>
        ${plz ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>PLZ / Einsatzort:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${plz}</td></tr>` : ""}
        ${standort ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Bevorzugter Standort:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${standort}</td></tr>` : ""}
        ${data.rueckruf ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Rückruf gewünscht:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Ja</td></tr>` : ""}
        ${data.wartungsvertrag ? `<tr style="background: #ecfdf5;"><td style="padding: 8px; border: 1px solid #ddd;"><strong>🔧 Wartungsvertrag gewünscht:</strong></td><td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">Ja</td></tr>` : ""}
      </table>

      ${selectedProduct ? `<h2>Gewähltes Produkt</h2><p>${selectedProduct}</p>` : ""}

      ${filterText ? `
      <h2>Filterauswahl</h2>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${filterText}</pre>
      ` : ""}

      ${financingHtml}

      ${tradeInHtml}

      ${nachrichtText ? `
      <h2>Nachricht</h2>
      <p>${nachrichtText.replace(/\n/g, "<br>")}</p>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="color: #666; font-size: 12px;">Diese E-Mail wurde automatisch über das Kontaktformular von zoomlion-nrw.de generiert.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Zoomlion NRW <info@zoomlion-nrw.de>",
      to: ["verkauf@zoomlion-nrw.de"],
      replyTo: email,
      subject: getSubject(firmaName || "Unbekannt", data.type, data.financing, data.wartungsvertrag, data.tradeIn),
      html: emailHtml,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(emailResponse.error.message);
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Anfrage erfolgreich gesendet" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-inquiry function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
