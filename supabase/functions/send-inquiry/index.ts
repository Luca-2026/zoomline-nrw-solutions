import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

interface InquiryRequest {
  type: "arbeitsbuehne" | "bagger" | "service" | "kontakt";
  firma: string;
  ansprechpartner: string;
  email: string;
  telefon: string;
  plz?: string;
  standort?: string;
  nachricht?: string;
  rueckruf?: boolean;
  wartungsvertrag?: boolean;
  filters?: {
    einsatzort?: string;
    antrieb?: string;
    lithium?: boolean;
    arbeitshoehe?: number;
    reichweite?: number;
    untergrund?: string[];
    einsatzbereich?: string;
    gewichtsklasse?: string;
    ausstattung?: string[];
    lieferung?: boolean;
    maschine?: string;
    seriennummer?: string;
    anliegen?: string;
    anbaugeraete?: string[];
    finanzierung?: string;
  };
  selectedProduct?: string;
  financing?: FinancingData;
}

const formatFilters = (filters: InquiryRequest["filters"], type: string): string => {
  if (!filters) return "";
  
  let filterText = "";
  
  if (type === "arbeitsbuehne") {
    if (filters.einsatzort) filterText += `Einsatzort: ${filters.einsatzort}\n`;
    if (filters.antrieb) filterText += `Antrieb: ${filters.antrieb}\n`;
    if (filters.lithium !== undefined) filterText += `Lithium-Ionen gewünscht: ${filters.lithium ? "Ja" : "Nein"}\n`;
    if (filters.arbeitshoehe) filterText += `Arbeitshöhe: ${filters.arbeitshoehe} m\n`;
    if (filters.reichweite) filterText += `Seitliche Reichweite: ${filters.reichweite} m\n`;
    if (filters.untergrund?.length) filterText += `Untergrund: ${filters.untergrund.join(", ")}\n`;
  } else if (type === "bagger") {
    if (filters.einsatzbereich) filterText += `Einsatzbereich: ${filters.einsatzbereich}\n`;
    if (filters.gewichtsklasse) filterText += `Gewichtsklasse: ${filters.gewichtsklasse}\n`;
    if (filters.antrieb) filterText += `Antrieb: ${filters.antrieb}\n`;
    if (filters.ausstattung?.length) filterText += `Ausstattung: ${filters.ausstattung.join(", ")}\n`;
    if (filters.anbaugeraete?.length) filterText += `Gewünschte Anbaugeräte: ${filters.anbaugeraete.join(", ")}\n`;
    if (filters.lieferung !== undefined) filterText += `Lieferung gewünscht: ${filters.lieferung ? "Ja" : "Nein"}\n`;
  } else if (type === "service") {
    if (filters.maschine) filterText += `Maschine/Modell: ${filters.maschine}\n`;
    if (filters.seriennummer) filterText += `Seriennummer: ${filters.seriennummer}\n`;
    if (filters.anliegen) filterText += `Anliegen: ${filters.anliegen}\n`;
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
  if (!financing || !financing.financingRequested) {
    return "";
  }

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
        <td style="padding: 10px; border: 1px solid #ddd;">${formatCurrency(financing.netPurchasePrice)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Anzahlung:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${financing.downPaymentPercent}% (${formatCurrency(financing.downPaymentEur)})</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Laufzeit:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${financing.termMonths} Monate</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Schlussrate:</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd;">${financing.balloonPercent}% (${formatCurrency(financing.balloonEur)})</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monatliche Rate (ca.):</strong></td>
        <td style="padding: 10px; border: 1px solid #ddd; font-size: 18px; font-weight: bold; color: #d97706;">${formatCurrency(financing.estimatedMonthlyRate)}</td>
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

const getSubject = (data: InquiryRequest): string => {
  const typeLabels: Record<string, string> = {
    arbeitsbuehne: "Arbeitsbühne",
    bagger: "Bagger",
    service: "Service",
    kontakt: "Kontaktanfrage",
  };
  
  const financingTag = data.financing?.financingRequested ? " [FINANZIERUNG]" : "";
  const wartungsTag = data.wartungsvertrag ? " [WARTUNGSVERTRAG]" : "";
  return `Zoomlion NRW – Anfrage ${typeLabels[data.type]}${financingTag}${wartungsTag} – ${data.firma} – ${data.plz || "Keine PLZ"}`;
};

Deno.serve(async (req) => {
  console.log("Received inquiry request");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryRequest = await req.json();
    console.log("Processing inquiry for:", data.firma, "Financing:", data.financing?.financingRequested);

    if (!data.firma || !data.ansprechpartner || !data.email || !data.telefon) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Pflichtfelder fehlen" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const filterText = formatFilters(data.filters, data.type);
    const financingHtml = formatFinancing(data.financing);
    
    const emailHtml = `
      <h1>Neue Anfrage über Zoomlion NRW</h1>
      
      <h2>Kontaktdaten</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Firma:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.firma}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Ansprechpartner:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.ansprechpartner}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>E-Mail:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefon:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.telefon}</td></tr>
        ${data.plz ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>PLZ / Einsatzort:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.plz}</td></tr>` : ""}
        ${data.standort ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Bevorzugter Standort:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.standort}</td></tr>` : ""}
        ${data.rueckruf ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Rückruf gewünscht:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Ja</td></tr>` : ""}
        ${data.wartungsvertrag ? `<tr style="background: #ecfdf5;"><td style="padding: 8px; border: 1px solid #ddd;"><strong>🔧 Wartungsvertrag gewünscht:</strong></td><td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">Ja</td></tr>` : ""}
      </table>

      ${data.selectedProduct ? `<h2>Gewähltes Produkt</h2><p>${data.selectedProduct}</p>` : ""}

      ${filterText ? `
      <h2>Filterauswahl</h2>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${filterText}</pre>
      ` : ""}

      ${financingHtml}

      ${data.nachricht ? `
      <h2>Nachricht</h2>
      <p>${data.nachricht.replace(/\n/g, "<br>")}</p>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="color: #666; font-size: 12px;">Diese E-Mail wurde automatisch über das Kontaktformular von zoomlion-nrw.de generiert.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Zoomlion NRW <info@zoomlion-nrw.de>",
      to: ["verkauf@zoomlion-nrw.de"],
      replyTo: data.email,
      subject: getSubject(data),
      html: emailHtml,
    });

    // Check if email was actually sent successfully
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
