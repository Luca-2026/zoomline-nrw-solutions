import { LegalDocLayout } from "@/components/legal/LegalDocLayout";

const toc = [
  { id: "s1", label: "1. Geltungsbereich" },
  { id: "s2", label: "2. Vertragsschluss, Mietdauer" },
  { id: "s3", label: "3. Mietzins und Zahlung" },
  { id: "s4", label: "4. Pflichten des Mieters" },
  { id: "s5", label: "5. Transport, Lieferung, Rückgabe" },
  { id: "s6", label: "6. Versicherung, Haftung Mieter" },
  { id: "s7", label: "7. Haftung des Vermieters" },
  { id: "s8", label: "8. Vorzeitige Beendigung" },
  { id: "s9", label: "9. Widerrufsrecht (Verbraucher)" },
  { id: "s10", label: "10. Schlussbestimmungen" },
];

const AGBVermietung = () => (
  <LegalDocLayout
    title="AGB für die Vermietung von Baumaschinen"
    metaTitle="AGB Vermietung | Zoomlion NRW"
    metaDescription="Allgemeine Geschäftsbedingungen für die Vermietung von Baumaschinen, Arbeitsbühnen und Zubehör der SLT Technology Group GmbH & Co. KG."
    canonical="https://www.zoomlion-nrw.de/agb/vermietung"
    standDatum="23.04.2026"
    pdfHref="/dokumente/agb-vermietung.pdf"
    pdfFilename="AGB-Vermietung-Zoomlion-NRW.pdf"
    toc={toc}
  >
    <p><strong>SLT Technology Group GmbH & Co. KG</strong> · Stand: 23.04.2026 · Version 1.0</p>

    <h2 id="s1">1. Geltungsbereich</h2>
    <p>1.1 Diese AGB gelten für alle Mietverträge zwischen der SLT Technology Group GmbH & Co. KG (nachfolgend „Vermieter") und ihren Kunden (nachfolgend „Mieter") über Baumaschinen, Arbeitsbühnen, Anbaugeräte, Zubehör und damit zusammenhängende Leistungen.</p>
    <p>1.2 Die Regelungen gelten gegenüber Unternehmern (§ 14 BGB) wie Verbrauchern (§ 13 BGB). Abweichungen sind jeweils gekennzeichnet.</p>
    <p>1.3 Abweichende Bedingungen des Mieters werden nicht Vertragsbestandteil, sofern der Vermieter nicht ausdrücklich schriftlich zustimmt.</p>

    <h2 id="s2">2. Vertragsschluss, Mietdauer</h2>
    <p>2.1 Der Mietvertrag kommt durch schriftliche Mietvertragsbestätigung oder durch Übergabe des Mietgegenstands zustande.</p>
    <p>2.2 Die Mietdauer beginnt mit dem vereinbarten Termin der Bereitstellung (Abholung durch den Mieter oder Übergabe am Einsatzort) und endet mit der Rückgabe am vereinbarten Rückgabeort, spätestens jedoch mit dem vereinbarten Rückgabetermin.</p>
    <p>2.3 Verzögerungen bei der Rückgabe verlängern die Mietdauer zum vereinbarten Tagessatz. Eine Rückgabe außerhalb der Geschäftszeiten bedarf der vorherigen Vereinbarung.</p>
    <p>2.4 Mindestmietdauer ist ein Arbeitstag (8 Stunden), sofern nichts anderes vereinbart ist.</p>

    <h2 id="s3">3. Mietzins und Zahlungsbedingungen</h2>
    <p>3.1 Der Mietzins versteht sich zuzüglich der gesetzlichen Umsatzsteuer. Die Mietpreise richten sich nach der jeweils gültigen Preisliste oder dem individuellen Angebot.</p>
    <p>3.2 Grundlage der Mietpreisberechnung ist ein Arbeitstag von 8 Betriebsstunden bei 5-Tage-Woche. Mehrbetriebsstunden oder Einsatz am Wochenende / an Feiertagen werden anteilig oder nach Vereinbarung zusätzlich berechnet.</p>
    <p>3.3 Die Betriebsstunden werden über den Betriebsstundenzähler der Maschine erfasst. Der Mieter ist verpflichtet, den Stand bei Abholung und Rückgabe gemeinsam mit dem Vermieter zu protokollieren. Bei Ausfall des Betriebsstundenzählers gilt ein branchenüblicher Durchschnittswert als vereinbart.</p>
    <p>3.4 Der Mietzins ist, sofern nichts anderes vereinbart, im Voraus oder bei Rückgabe fällig.</p>
    <p>3.5 Der Vermieter ist berechtigt, eine angemessene Kaution zu verlangen, deren Höhe sich nach Wert und Mietdauer des Mietgegenstands bemisst. Die Kaution wird nach ordnungsgemäßer Rückgabe unverzüglich zurückerstattet.</p>
    <p>3.6 Bei Zahlungsverzug ist der Vermieter berechtigt, die weitere Überlassung der Mietsache zu verweigern oder den Mietgegenstand nach erfolgloser Mahnung zurückzunehmen. Der Mietzins für den vereinbarten Zeitraum bleibt geschuldet.</p>

    <h2 id="s4">4. Pflichten des Mieters</h2>
    <p>4.1 Der Mieter hat den Mietgegenstand pfleglich zu behandeln und ihn vor Beschädigung, Verlust und unsachgemäßer Nutzung zu schützen.</p>
    <p>4.2 Der Mietgegenstand darf nur durch hierzu befähigte und entsprechend geschulte Personen bedient werden. Der Mieter versichert, dass seine Bediener die erforderlichen Kenntnisse und ggf. Nachweise (z. B. Unterweisung für Hubarbeitsbühnen nach DGUV) besitzen.</p>
    <p>4.3 Der Mieter ist verpflichtet, den Mietgegenstand bestimmungsgemäß und im Rahmen der technischen Herstellervorgaben zu verwenden. Die Verwendung von ungeeigneten Betriebsmitteln, Überlastung oder Einsatz außerhalb der zulässigen Einsatzbedingungen ist unzulässig.</p>
    <p>4.4 Der Mieter hat die tägliche Einsatzprüfung (Ölstand, Kühlwasser, Reifendruck, Sicherheitseinrichtungen) eigenverantwortlich durchzuführen. Tägliche Wartungsarbeiten und Schmierung gehen zulasten des Mieters.</p>
    <p>4.5 Die Überlassung des Mietgegenstands an Dritte (Untermiete, Leihe) ist untersagt, sofern der Vermieter nicht ausdrücklich schriftlich zustimmt.</p>
    <p>4.6 Der Mieter hat dem Vermieter den Standort des Mietgegenstands jederzeit auf Anfrage mitzuteilen. Bei Verbringung außerhalb der Bundesrepublik Deutschland ist die vorherige schriftliche Zustimmung des Vermieters erforderlich.</p>
    <p>4.7 Schäden, Defekte oder ungewöhnliche Betriebsgeräusche sind dem Vermieter unverzüglich zu melden. Eigenmächtige Reparaturen sind unzulässig.</p>

    <h2 id="s5">5. Transport, Lieferung, Rückgabe</h2>
    <p>5.1 Transport zum und vom Einsatzort kann durch den Vermieter oder durch den Mieter selbst erfolgen. Die hierfür anfallenden Kosten trägt der Mieter, sofern nichts anderes vereinbart ist.</p>
    <p>5.2 Bei Übergabe erfolgt ein Übergabeprotokoll mit Feststellung des Zustands und des Betriebsstundenstands. Beanstandungen sind bei Übergabe zu protokollieren.</p>
    <p>5.3 Bei Rückgabe ist der Mietgegenstand in gereinigtem und vollgetanktem Zustand zu übergeben. Andernfalls werden die Kosten für Reinigung und Betankung zu branchenüblichen Sätzen berechnet.</p>
    <p>5.4 Schäden, die bei Rückgabe festgestellt werden und nicht auf natürlichem Verschleiß beruhen, werden dem Mieter in Rechnung gestellt.</p>

    <h2 id="s6">6. Versicherung, Haftung des Mieters</h2>
    <p>6.1 Der Mietgegenstand ist vom Vermieter gegen Diebstahl, Brand und bestimmte Elementarschäden versichert. Der Selbstbehalt je Schadensfall wird im Mietvertrag individuell festgelegt (branchenüblich 2.500 € bis 5.000 €).</p>
    <p>6.2 Der Mieter haftet für alle Schäden am Mietgegenstand, die während der Mietzeit entstehen, im Rahmen des Selbstbehalts nach Ziffer 6.1. Bei vorsätzlicher oder grob fahrlässiger Beschädigung haftet der Mieter unbeschränkt.</p>
    <p>6.3 Der Mieter haftet uneingeschränkt für Schäden, die Dritten durch den Betrieb des Mietgegenstands entstehen (Haftpflicht). Der Mieter hat für eine entsprechende Haftpflichtversicherung zu sorgen, soweit nicht bereits über den Vermieter abgedeckt.</p>
    <p>6.4 Verlust oder Totalschaden des Mietgegenstands verpflichten den Mieter zum Ersatz des Zeitwerts zum Zeitpunkt des Schadenseintritts.</p>

    <h2 id="s7">7. Haftung des Vermieters</h2>
    <p>7.1 Der Vermieter übergibt den Mietgegenstand in einem vertragsgemäßen, betriebssicheren Zustand.</p>
    <p>7.2 Der Vermieter haftet uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, sowie für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen, sowie nach dem Produkthaftungsgesetz.</p>
    <p>7.3 Für leicht fahrlässige Pflichtverletzungen haftet der Vermieter nur bei Verletzung wesentlicher Vertragspflichten; die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
    <p>7.4 Für Betriebsausfall, entgangenen Gewinn oder mittelbare Folgeschäden haftet der Vermieter nicht, soweit gesetzlich zulässig.</p>
    <p>7.5 Bei Ausfall des Mietgegenstands durch einen vom Vermieter zu vertretenden Mangel stellt der Vermieter nach Möglichkeit eine gleichwertige Ersatzmaschine zur Verfügung. Ist dies nicht möglich, entfällt die Mietzahlungspflicht für den Ausfallzeitraum.</p>

    <h2 id="s8">8. Vorzeitige Beendigung, Kündigung</h2>
    <p>8.1 Der Vermieter ist berechtigt, das Mietverhältnis aus wichtigem Grund fristlos zu kündigen, insbesondere bei:</p>
    <ul>
      <li>erheblichem Zahlungsverzug</li>
      <li>schwerwiegender vertragswidriger Nutzung</li>
      <li>Insolvenzantrag des Mieters</li>
      <li>Verbringung ins Ausland ohne Zustimmung</li>
      <li>Verletzung der Bedienungspflichten mit Gefährdung der Maschine oder Dritter</li>
    </ul>
    <p>8.2 Bei fristloser Kündigung ist der Vermieter berechtigt, den Mietgegenstand auf Kosten des Mieters abzuholen und die bereits gezahlte Miete für den nicht genutzten Zeitraum anteilig zu erstatten. Schadensersatzansprüche bleiben unberührt.</p>

    <h2 id="s9">9. Widerrufsrecht (nur für Verbraucher bei Fernabsatzverträgen)</h2>
    <p>Bei Abschluss des Mietvertrags im Fernabsatz (z. B. online, telefonisch) steht dem Verbraucher das in der separaten <a href="/widerrufsbelehrung">Widerrufsbelehrung</a> beschriebene Widerrufsrecht zu. Beginnt die Vermietung auf ausdrücklichen Wunsch des Verbrauchers vor Ablauf der Widerrufsfrist, kann Wertersatz für die bis zum Widerruf erbrachte Leistung verlangt werden (§ 357a BGB).</p>

    <h2 id="s10">10. Schlussbestimmungen</h2>
    <p>10.1 Erfüllungsort ist der Sitz des Vermieters in 47807 Krefeld.</p>
    <p>10.2 Gegenüber Unternehmern ist ausschließlicher Gerichtsstand Krefeld. Der Vermieter kann den Mieter auch an dessen allgemeinem Gerichtsstand verklagen.</p>
    <p>10.3 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>

    <hr />
    <p><strong>Stand: 23.04.2026</strong></p>
  </LegalDocLayout>
);

export default AGBVermietung;
