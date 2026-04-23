import { LegalDocLayout } from "@/components/legal/LegalDocLayout";

const toc = [
  { id: "wr", label: "Widerrufsrecht" },
  { id: "folgen", label: "Folgen des Widerrufs" },
  { id: "ausschluss", label: "Ausschluss des Widerrufsrechts" },
  { id: "muster", label: "Muster-Widerrufsformular" },
];

const Widerrufsbelehrung = () => (
  <LegalDocLayout
    title="Widerrufsbelehrung"
    metaTitle="Widerrufsbelehrung | Zoomlion NRW"
    metaDescription="Widerrufsbelehrung für Verbraucher bei Fernabsatzverträgen mit der SLT Technology Group GmbH & Co. KG inklusive Muster-Widerrufsformular."
    canonical="https://www.zoomlion-nrw.de/widerrufsbelehrung"
    standDatum="23.04.2026"
    pdfHref="/dokumente/widerrufsbelehrung.pdf"
    pdfFilename="Widerrufsbelehrung-Zoomlion-NRW.pdf"
    toc={toc}
  >
    <p><strong>Gilt nur für Verbraucher gemäß § 13 BGB.</strong></p>

    <h2 id="wr">Widerrufsrecht</h2>
    <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
    <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
    <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
    <address>
      <strong>SLT Technology Group GmbH & Co. KG</strong><br />
      Anrather Straße 291<br />
      47807 Krefeld<br />
      Telefon: +49 2151 4179904<br />
      E-Mail: <a href="mailto:verkauf@zoomlion-nrw.de">verkauf@zoomlion-nrw.de</a>
    </address>
    <p>mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
    <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

    <h2 id="folgen">Folgen des Widerrufs</h2>
    <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
    <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>
    <p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>
    <p><strong>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</strong> Bei Baumaschinen, die nicht normal mit der Post zurückgesandt werden können (z. B. Bagger, Teleskoplader, Arbeitsbühnen), können die Rücksendekosten je nach Maschinenklasse und Entfernung 500 € bis 2.500 € betragen. Die genaue Höhe wird auf Anfrage mitgeteilt.</p>
    <p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>

    <h2 id="ausschluss">Ausschluss des Widerrufsrechts</h2>
    <p>Das Widerrufsrecht besteht nicht bei Verträgen</p>
    <ul>
      <li>zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB) — z. B. kundenspezifisch konfigurierte Maschinen mit individueller Ausstattung,</li>
      <li>zur Erbringung von Dienstleistungen, wenn der Unternehmer diese vollständig erbracht hat und mit der Ausführung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert (§ 312g Abs. 2 Nr. 1 BGB in Verbindung mit § 356 Abs. 4 BGB).</li>
    </ul>

    <hr />

    <h2 id="muster">Muster-Widerrufsformular</h2>
    <p><em>Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.</em></p>
    <p>An:<br />
    <strong>SLT Technology Group GmbH & Co. KG</strong><br />
    Anrather Straße 291<br />
    47807 Krefeld<br />
    E-Mail: verkauf@zoomlion-nrw.de</p>
    <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):</p>
    <p>_______________________________________________________</p>
    <p>Bestellt am (*) / erhalten am (*): _____________________</p>
    <p>Name des/der Verbraucher(s): ___________________________</p>
    <p>Anschrift des/der Verbraucher(s): _______________________</p>
    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
    <p>_______________________________________________________</p>
    <p>Datum: _________________</p>
    <p><em>(*) Unzutreffendes streichen.</em></p>

    <hr />
    <p><strong>Stand: 23.04.2026</strong></p>
  </LegalDocLayout>
);

export default Widerrufsbelehrung;
