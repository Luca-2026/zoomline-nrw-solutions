import { LegalDocLayout } from "@/components/legal/LegalDocLayout";

const toc = [
  { id: "s1", label: "1. Geltungsbereich" },
  { id: "s2", label: "2. Vertragsschluss, Angebote" },
  { id: "s3", label: "3. Preise und Zahlungsbedingungen" },
  { id: "s4", label: "4. Lieferung, Liefertermine, Gefahrenübergang" },
  { id: "s5", label: "5. Eigentumsvorbehalt" },
  { id: "s6", label: "6. Mängelrechte (Gewährleistung)" },
  { id: "s7", label: "7. Haftungsbeschränkung" },
  { id: "s8", label: "8. Verjährung" },
  { id: "s9", label: "9. Widerrufsrecht (Verbraucher)" },
  { id: "s10", label: "10. Exportkontrolle und Compliance" },
  { id: "s11", label: "11. Datenschutz" },
  { id: "s12", label: "12. Schlussbestimmungen" },
];

const AGBVerkauf = () => (
  <LegalDocLayout
    title="AGB für den Verkauf und die Lieferung von Baumaschinen"
    metaTitle="AGB Verkauf | Zoomlion NRW"
    metaDescription="Allgemeine Geschäftsbedingungen für den Verkauf und die Lieferung von Baumaschinen der SLT Technology Group GmbH & Co. KG."
    canonical="https://www.zoomlion-nrw.de/agb/verkauf/"
    standDatum="23.04.2026"
    pdfHref="/dokumente/agb-verkauf.pdf"
    pdfFilename="AGB-Verkauf-Zoomlion-NRW.pdf"
    toc={toc}
  >
    <p>
      <strong>SLT Technology Group GmbH & Co. KG</strong> · Stand: 23.04.2026 · Version 1.0
    </p>

    <h2 id="s1">1. Geltungsbereich</h2>
    <p>1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der SLT Technology Group GmbH & Co. KG, Anrather Straße 291, 47807 Krefeld (nachfolgend „Verkäufer") und ihren Kunden über den Verkauf und die Lieferung von Baumaschinen, Zubehör, Ersatzteilen und damit zusammenhängenden Leistungen.</p>
    <p>1.2 Diese AGB gelten gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen (nachfolgend „Unternehmer") ebenso wie gegenüber Verbrauchern im Sinne des § 13 BGB (nachfolgend „Verbraucher"). Sofern einzelne Regelungen dieser AGB nur für Unternehmer oder nur für Verbraucher gelten, ist dies jeweils gesondert gekennzeichnet.</p>
    <p>1.3 Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn der Verkäufer ihrer Geltung ausdrücklich schriftlich zugestimmt hat. Dieses Zustimmungserfordernis gilt auch dann, wenn der Verkäufer in Kenntnis entgegenstehender Bedingungen des Kunden die Lieferung vorbehaltlos ausführt.</p>
    <p>1.4 Individuell ausgehandelte Vereinbarungen mit dem Kunden (einschließlich Nebenabreden, Ergänzungen und Änderungen) haben in jedem Fall Vorrang vor diesen AGB. Maßgeblich für deren Inhalt ist, soweit nicht anders vereinbart, eine schriftliche Bestätigung des Verkäufers in Textform.</p>
    <p>1.5 Der Verkäufer unterhält neben dem Hauptsitz in Krefeld Zweigniederlassungen in Bonn und Mülheim an der Ruhr. Verträge können mit jeder dieser Niederlassungen geschlossen werden; die AGB gelten einheitlich.</p>

    <h2 id="s2">2. Vertragsschluss, Angebote</h2>
    <p>2.1 Angebote des Verkäufers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind. Preislisten, Kataloge und Online-Darstellungen stellen kein verbindliches Angebot dar.</p>
    <p>2.2 Die Bestellung einer Maschine oder eines Zubehörs durch den Kunden stellt ein verbindliches Angebot zum Vertragsschluss dar. Der Verkäufer ist berechtigt, dieses Angebot binnen 14 Tagen nach Zugang anzunehmen. Die Annahme erfolgt durch schriftliche Auftragsbestätigung (Textform ausreichend) oder durch Ausführung der Lieferung.</p>
    <p>2.3 Bei Bestellungen über die Website des Verkäufers erhält der Kunde zunächst eine automatische Empfangsbestätigung. Diese stellt noch keine Annahme des Angebots dar. Ein Vertrag kommt erst durch die ausdrückliche Auftragsbestätigung oder die Lieferung der Ware zustande.</p>
    <p>2.4 Angaben zu technischen Daten, Gewichten, Abmessungen und Abbildungen sind nur insoweit verbindlich, als sie vom Hersteller ausdrücklich als verbindlich bezeichnet werden. Branchenübliche Abweichungen sowie technische Änderungen des Herstellers bleiben vorbehalten, soweit sie den Kunden nicht erheblich benachteiligen.</p>
    <p>2.5 An Kostenvoranschlägen, Zeichnungen, Konstruktionsunterlagen und sonstigen Unterlagen, die dem Kunden übergeben werden, behält sich der Verkäufer das Eigentums- und Urheberrecht vor. Die Weitergabe an Dritte bedarf der ausdrücklichen schriftlichen Zustimmung des Verkäufers.</p>

    <h2 id="s3">3. Preise und Zahlungsbedingungen</h2>
    <p>3.1 Die Preise verstehen sich in Euro, ab Lager des Verkäufers, zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer. Transport-, Verpackungs-, Montage- und Inbetriebnahmekosten werden gesondert berechnet, sofern nichts anderes vereinbart ist.</p>
    <p>3.2 Soweit nichts anderes vereinbart ist, ist der Kaufpreis ohne Abzug innerhalb von 7 Tagen nach Rechnungsdatum fällig.</p>
    <p>3.3 Bei Neumaschinen mit einem Kaufpreis über 25.000 € netto ist der Verkäufer berechtigt, eine Anzahlung von bis zu 30 % des Kaufpreises bei Auftragsbestätigung zu verlangen. Die Restzahlung ist in diesem Fall vor Auslieferung fällig.</p>
    <p>3.4 Bei Zahlungsverzug schuldet der Kunde Verzugszinsen in gesetzlicher Höhe (§ 288 BGB). Die Geltendmachung eines weitergehenden Schadens bleibt vorbehalten.</p>
    <p>3.5 Der Kunde ist zur Aufrechnung nur berechtigt, wenn seine Gegenforderung unbestritten oder rechtskräftig festgestellt ist. Ein Zurückbehaltungsrecht steht dem Kunden nur zu, soweit es auf demselben Vertragsverhältnis beruht; <strong>dies gilt nicht gegenüber Verbrauchern</strong>.</p>

    <h2 id="s4">4. Lieferung, Liefertermine, Gefahrenübergang</h2>
    <p>4.1 Liefertermine sind nur dann verbindlich, wenn sie vom Verkäufer ausdrücklich in Textform als verbindlich bestätigt wurden. Im Zweifel handelt es sich um Richttermine.</p>
    <p>4.2 Die Lieferfrist beginnt mit Zugang der Auftragsbestätigung beim Kunden, jedoch nicht vor vollständiger Klärung aller technischen Fragen und nicht vor Zahlungseingang einer vereinbarten Anzahlung.</p>
    <p>4.3 Bei höherer Gewalt oder sonstigen unvorhersehbaren, vom Verkäufer nicht zu vertretenden Hindernissen (z. B. Krieg, Terrorismus, Pandemie, Streik, behördliche Maßnahmen, Transportstörungen, Rohstoff- oder Energiemangel, Lieferverzug von Vorlieferanten) verlängern sich Lieferfristen angemessen. Der Verkäufer informiert den Kunden unverzüglich über Beginn und voraussichtliches Ende solcher Hindernisse.</p>
    <p>4.4 <strong>Gegenüber Unternehmern:</strong> Die Gefahr geht mit Übergabe an den Spediteur, Frachtführer oder die sonst zur Ausführung der Versendung bestimmte Person auf den Kunden über, spätestens jedoch mit Verlassen des Lagers.</p>
    <p>4.5 <strong>Gegenüber Verbrauchern:</strong> Die Gefahr geht erst mit Übergabe der Ware an den Verbraucher über (§ 446 BGB). Dies gilt auch beim Versendungskauf.</p>
    <p>4.6 Auf ausdrücklichen Wunsch des Kunden wird die Ware gegen Bruch-, Transport- und Feuerschäden versichert. Die Kosten trägt der Kunde.</p>
    <p>4.7 Teillieferungen sind zulässig, soweit sie für den Kunden zumutbar sind.</p>

    <h2 id="s5">5. Eigentumsvorbehalt</h2>
    <p>5.1 Der Verkäufer behält sich das Eigentum an der gelieferten Ware (nachfolgend „Vorbehaltsware") bis zur vollständigen Zahlung des Kaufpreises einschließlich aller Nebenforderungen vor.</p>
    <p>5.2 <strong>Gegenüber Unternehmern</strong> gilt zusätzlich: Der Eigentumsvorbehalt erstreckt sich auch auf sämtliche Forderungen aus der laufenden Geschäftsbeziehung (erweiterter Eigentumsvorbehalt). Bei Verarbeitung, Verbindung oder Vermischung der Vorbehaltsware mit anderen Sachen erwirbt der Verkäufer Miteigentum an der neuen Sache im Verhältnis des Werts der Vorbehaltsware zu den anderen verarbeiteten Sachen. Forderungen aus der Weiterveräußerung der Vorbehaltsware tritt der Unternehmer bereits jetzt in Höhe des Rechnungswerts der Vorbehaltsware an den Verkäufer ab (verlängerter Eigentumsvorbehalt); der Verkäufer nimmt diese Abtretung an.</p>
    <p>5.3 Der Kunde ist verpflichtet, die Vorbehaltsware pfleglich zu behandeln, instand zu halten und auf eigene Kosten gegen Feuer-, Wasser-, Diebstahl- und sonstige Schäden in Höhe des Kaufpreises zu versichern. Ansprüche aus der Versicherung werden hiermit an den Verkäufer abgetreten.</p>
    <p>5.4 Bei Pfändung, Beschlagnahme oder sonstigen Eingriffen Dritter in die Vorbehaltsware hat der Kunde den Verkäufer unverzüglich schriftlich zu benachrichtigen.</p>
    <p>5.5 Ein Wechsel des Besitzers oder des Standorts der Vorbehaltsware ist dem Verkäufer unverzüglich anzuzeigen. Die Verbringung der Vorbehaltsware ins Ausland bedarf der vorherigen schriftlichen Zustimmung des Verkäufers.</p>
    <p>5.6 Bei vertragswidrigem Verhalten des Kunden, insbesondere bei Zahlungsverzug, ist der Verkäufer nach erfolglosem Ablauf einer angemessenen Nachfrist zur Rücknahme der Vorbehaltsware berechtigt. Die Rücknahme gilt nicht automatisch als Rücktritt vom Vertrag.</p>

    <h2 id="s6">6. Mängelrechte (Gewährleistung)</h2>
    <h3>6.1 Allgemein</h3>
    <p>Die Beschaffenheit der Ware ergibt sich aus der Leistungsbeschreibung des Herstellers bzw. der Auftragsbestätigung. Öffentliche Äußerungen, Anpreisungen oder Werbung stellen keine vertragliche Beschaffenheitsangabe dar.</p>
    <h3>6.2 Gegenüber Unternehmern</h3>
    <p>6.2.1 Die Gewährleistungsfrist für Neumaschinen beträgt <strong>12 Monate</strong> ab Gefahrenübergang. Für Gebrauchtmaschinen ist die Gewährleistung ausgeschlossen, soweit dies gesetzlich zulässig ist; ausgenommen sind Ansprüche wegen Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie Ansprüche bei grob fahrlässiger oder vorsätzlicher Pflichtverletzung.</p>
    <p>6.2.2 Offensichtliche Mängel sind dem Verkäufer unverzüglich, spätestens innerhalb von 7 Tagen nach Ablieferung, in Textform anzuzeigen. Verdeckte Mängel sind unverzüglich nach Entdeckung anzuzeigen. Bei Verletzung dieser Rügepflicht gilt die Ware als genehmigt (§ 377 HGB).</p>
    <p>6.2.3 Bei berechtigten Mängelrügen hat der Verkäufer nach seiner Wahl das Recht zur Nacherfüllung durch Mangelbeseitigung oder Ersatzlieferung. Schlägt die Nacherfüllung fehl oder wird sie unzumutbar verweigert, kann der Kunde Minderung verlangen oder vom Vertrag zurücktreten.</p>
    <h3>6.3 Gegenüber Verbrauchern</h3>
    <p>6.3.1 Die gesetzliche Gewährleistungsfrist von <strong>2 Jahren</strong> ab Ablieferung (§ 438 Abs. 1 Nr. 3 BGB) bleibt unberührt. Bei Gebrauchtmaschinen kann die Gewährleistung auf 1 Jahr verkürzt werden, wenn dies mit dem Verbraucher individuell vereinbart wird.</p>
    <p>6.3.2 Dem Verbraucher stehen die gesetzlichen Mängelrechte nach §§ 434 ff. BGB uneingeschränkt zu.</p>
    <h3>6.4 Ausschlüsse</h3>
    <p>Mängelansprüche bestehen nicht bei Schäden, die auf einer der folgenden Ursachen beruhen, soweit der Verkäufer diese nicht zu vertreten hat:</p>
    <ul>
      <li>ungeeignete oder unsachgemäße Verwendung</li>
      <li>fehlerhafte Montage oder Inbetriebnahme durch den Kunden oder Dritte</li>
      <li>übermäßige Beanspruchung jenseits der Herstellervorgaben</li>
      <li>Verwendung ungeeigneter Betriebsmittel</li>
      <li>Veränderungen oder Reparaturen durch Dritte ohne Zustimmung des Verkäufers</li>
      <li>natürlicher Verschleiß von Verschleißteilen (z. B. Baggerzähne, Filter, Öle, Reifen, Ketten)</li>
    </ul>

    <h2 id="s7">7. Haftungsbeschränkung</h2>
    <p>7.1 Der Verkäufer haftet uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen, sowie nach dem Produkthaftungsgesetz.</p>
    <p>7.2 Für leicht fahrlässige Pflichtverletzungen haftet der Verkäufer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. Die Haftung ist in diesem Fall der Höhe nach auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
    <p>7.3 Eine darüber hinausgehende Haftung des Verkäufers — insbesondere für Betriebsunterbrechung, entgangenen Gewinn, ausgebliebene Einsparungen und sonstige mittelbare oder Folgeschäden — ist ausgeschlossen, soweit gesetzlich zulässig.</p>
    <p>7.4 Soweit die Haftung des Verkäufers ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung seiner Angestellten, Mitarbeiter, gesetzlichen Vertreter und Erfüllungsgehilfen.</p>

    <h2 id="s8">8. Verjährung</h2>
    <p>8.1 Gegenüber Unternehmern verjähren Mängelansprüche in 12 Monaten ab Ablieferung, soweit nichts anderes vereinbart ist.</p>
    <p>8.2 Gegenüber Verbrauchern gelten die gesetzlichen Verjährungsfristen (§ 438 BGB).</p>
    <p>8.3 Die Verjährungsfristen nach Ziffern 8.1 und 8.2 gelten nicht für Ansprüche aus der Verletzung des Lebens, des Körpers oder der Gesundheit, für Ansprüche nach dem Produkthaftungsgesetz sowie für Ansprüche wegen vorsätzlicher oder grob fahrlässiger Pflichtverletzung. Insoweit gelten die gesetzlichen Verjährungsfristen.</p>

    <h2 id="s9">9. Widerrufsrecht (nur für Verbraucher)</h2>
    <p>Verbrauchern steht bei Fernabsatzverträgen (z. B. bei Bestellungen über die Website, per E-Mail oder Telefon) ein gesetzliches Widerrufsrecht zu. Die Einzelheiten ergeben sich aus der separaten <a href="/widerrufsbelehrung">Widerrufsbelehrung</a>.</p>
    <p>Das Widerrufsrecht besteht nicht bei Verträgen über Waren, die nach Kundenspezifikation angefertigt oder eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB).</p>

    <h2 id="s10">10. Exportkontrolle und Compliance</h2>
    <p>10.1 Der Kunde verpflichtet sich, alle für die gelieferten Produkte einschlägigen nationalen und internationalen Export-, Zoll- und Sanktionsvorschriften einzuhalten, insbesondere die Bestimmungen der Europäischen Union, der Bundesrepublik Deutschland, des Vereinigten Königreichs, der Vereinigten Staaten von Amerika sowie jeweils geltende Ausfuhrkontrollrichtlinien der Hersteller.</p>
    <p>10.2 Der Kunde verpflichtet sich, die gelieferten Produkte weder unmittelbar noch mittelbar für militärische oder sonstige rüstungsbezogene Zwecke zu verwenden, insbesondere nicht im Zusammenhang mit Massenvernichtungswaffen, und nicht an Personen, Organisationen oder Staaten zu liefern, die einem Embargo oder sonstigen Sanktionen unterliegen.</p>
    <p>10.3 Der Kunde ist verpflichtet, eigenverantwortlich zu prüfen, ob für die beabsichtigte Verwendung oder Weitergabe der Produkte Genehmigungspflichten oder Verbote bestehen. Auf Anfrage des Verkäufers sind Endverbleibserklärungen beizubringen.</p>
    <p>10.4 Bei Verstoß oder begründetem Verdacht eines Verstoßes ist der Verkäufer berechtigt, Lieferungen auszusetzen oder fristlos vom Vertrag zurückzutreten. Der Kunde stellt den Verkäufer von sämtlichen Ansprüchen, Bußgeldern und Strafen frei, die aus einem solchen Verstoß resultieren.</p>

    <h2 id="s11">11. Datenschutz</h2>
    <p>Informationen über die Verarbeitung personenbezogener Daten im Rahmen der Geschäftsbeziehung enthält die <a href="/datenschutz">Datenschutzerklärung</a>.</p>

    <h2 id="s12">12. Schlussbestimmungen</h2>
    <p>12.1 Erfüllungsort für alle Leistungen ist der Sitz des Verkäufers in 47807 Krefeld.</p>
    <p>12.2 Gegenüber Unternehmern ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus dieser Geschäftsbeziehung <strong>Krefeld</strong>. Der Verkäufer ist jedoch berechtigt, den Kunden auch an dessen allgemeinem Gerichtsstand zu verklagen.</p>
    <p>12.3 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
    <p>12.4 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem mit der unwirksamen Bestimmung verfolgten wirtschaftlichen Zweck möglichst nahekommt.</p>

    <hr />
    <p><strong>Stand: 23.04.2026</strong></p>
  </LegalDocLayout>
);

export default AGBVerkauf;
