import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Datenschutz = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading
          badge="Rechtliches"
          title="Datenschutzerklärung"
          subtitle="Informationen zum Schutz Ihrer personenbezogenen Daten"
        />
        
        <div className="prose prose-lg max-w-none">
          {/* 1. Verantwortlicher */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">1. Verantwortlicher</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-bold text-lg mb-2">SLT Technology Group GmbH & Co. KG</p>
            <address className="not-italic text-muted-foreground">
              Anrather Straße 291<br />
              47807 Krefeld<br /><br />
              Telefon: +49 (0) 2151 - 417 99 02<br />
              E-Mail: <a href="mailto:verkauf@zoomlion-nrw.de" className="text-primary hover:underline">verkauf@zoomlion-nrw.de</a>
            </address>
          </div>

          {/* 2. Datenschutzbeauftragter */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">2. Datenschutzbeauftragter</h2>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="font-semibold">Benedikt Nöchel</p>
            <address className="not-italic text-muted-foreground text-sm mt-2">
              Anrather Straße 291<br />
              47807 Krefeld<br />
              E-Mail: <a href="mailto:datenschutz@slt-tg.de" className="text-primary hover:underline">datenschutz@slt-tg.de</a>
            </address>
          </div>

          {/* 3. Datenverarbeitung */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">3. Datenverarbeitung auf unserer Website</h2>
          <p className="text-muted-foreground mb-4">Wir verarbeiten Ihre personenbezogenen Daten, wenn Sie:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>unsere Website besuchen (automatisch durch den Webserver erfasste Daten wie IP-Adresse, Datum/Uhrzeit, aufgerufene Seiten, Browsertyp, Betriebssystem)</li>
            <li>unser Kontaktformular nutzen</li>
            <li>einen Kaufvertrag abschließen</li>
            <li>uns per E-Mail, Telefon oder postalisch kontaktieren</li>
          </ul>
          
          <p className="font-semibold mb-2">Verarbeitete Datenarten:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Name, Vorname</li>
            <li>Anschrift, ggf. Firma</li>
            <li>Telefonnummer, E-Mail-Adresse</li>
            <li>Vertragsdaten (z. B. Kaufgegenstand, Zeitraum, Preis)</li>
            <li>Zahlungsinformationen</li>
            <li>Nutzungsdaten (IP-Adresse, Zeitpunkt, aufgerufene Seiten)</li>
            <li>Kommunikationsinhalte</li>
          </ul>

          {/* 4. Zwecke und Rechtsgrundlagen */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">4. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
          <p className="text-muted-foreground mb-4">Wir verarbeiten Ihre Daten:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>zur Vertragserfüllung und -anbahnung (Art. 6 Abs. 1 lit. b DSGVO)</li>
            <li>zur Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO)</li>
            <li>auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), z. B. für Cookies/Tracking</li>
            <li>zur Wahrung unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), z. B. für IT-Sicherheit, Webstatistik, Marketing</li>
          </ul>

          {/* 5. Cookies */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">5. Cookies & Tracking-Technologien</h2>
          <p className="text-muted-foreground mb-4">
            Wir verwenden auf unserer Webseite Cookies und vergleichbare Technologien. Cookies sind kleine Textdateien, 
            die auf Ihrem Endgerät gespeichert werden und bestimmte Informationen über Sie enthalten (z. B. zur 
            Funktionalität der Website, zu Analysezwecken oder für Marketing).
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li><strong>Technisch notwendige Cookies:</strong> Für den Betrieb der Seite erforderlich.</li>
            <li><strong>Analyse-/Marketing-Cookies:</strong> Nur mit Ihrer Einwilligung beim ersten Besuch (Cookie-Banner/Consent-Tool).</li>
            <li><strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit über unser Cookie-Tool oder die Einstellungen Ihres Browsers widerrufen.</li>
          </ul>
          <p className="text-sm text-muted-foreground italic">
            Hinweis: Details zu genutzten Cookies und Consent-Tools finden Sie im Cookie-Banner auf unserer Webseite.
          </p>

          {/* 6. Kontaktformular */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">6. Kontaktformular und E-Mail-Kontakt</h2>
          <p className="text-muted-foreground">
            Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, speichern und verarbeiten wir Ihre Angaben 
            zur Bearbeitung der Anfrage sowie für Anschlussfragen. Die Daten werden nicht ohne Ihre Einwilligung an 
            Dritte weitergegeben.
          </p>

          {/* 7. Online-Buchung */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">7. Vertragsabwicklung</h2>
          <p className="text-muted-foreground mb-4">
            Für die Abwicklung von Kaufverträgen verarbeiten wir zusätzlich Ihre Vertrags- und Zahlungsdaten. 
            Ohne diese Daten ist ein Vertragsabschluss nicht möglich.
          </p>
          <p className="text-muted-foreground">
            Zur Zahlungsabwicklung nutzen wir ggf. externe Zahlungsdienstleister (z. B. PayPal, Stripe, Klarna). 
            Für die Verarbeitung Ihrer Daten bei diesen Anbietern gilt deren Datenschutzerklärung.
          </p>

          {/* 8. Weitergabe */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">8. Weitergabe von Daten / Auftragsverarbeiter</h2>
          <p className="text-muted-foreground mb-4">
            Wir geben Ihre Daten ausschließlich dann an Dritte weiter, wenn dies zur Vertragserfüllung erforderlich ist 
            (z. B. Transportdienstleister, Zahlungsanbieter) oder eine rechtliche Verpflichtung besteht.
          </p>
          <p className="text-muted-foreground">
            Wir arbeiten mit externen IT- und Hosting-Dienstleistern zusammen, die Ihre Daten nur im Rahmen unserer 
            Weisungen und auf Basis eines Auftragsverarbeitungsvertrags (Art. 28 DSGVO) verarbeiten.
          </p>

          {/* 9. Social Media */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">9. Social Media & Einbindung von Diensten Dritter</h2>
          <p className="text-muted-foreground">
            Unsere Website kann Dienste von Drittanbietern einbinden (z. B. Google Maps zur Standortanzeige, Social Plugins). 
            Beim Aufruf solcher Inhalte kann es zur Übertragung personenbezogener Daten an diese Anbieter, ggf. auch in 
            Drittländer außerhalb der EU, kommen. Es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>

          {/* 10. Speicherdauer */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">10. Speicherdauer</h2>
          <p className="text-muted-foreground">
            Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung der jeweiligen Zwecke 
            erforderlich ist oder wir gesetzlich zur Aufbewahrung verpflichtet sind (insbesondere steuer- und 
            handelsrechtliche Aufbewahrungsfristen).
          </p>

          {/* 11. Ihre Rechte */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">11. Ihre Rechte</h2>
          <p className="text-muted-foreground mb-4">Sie haben jederzeit das Recht:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>auf Auskunft über die bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
            <li>auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>auf Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO; mit Wirkung für die Zukunft)</li>
          </ul>
          <p className="text-muted-foreground">
            Bitte richten Sie Ihre Anfrage an die oben genannte Kontaktadresse. Sie haben außerdem das Recht, 
            sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
          </p>

          {/* 12. Sicherheit */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">12. Sicherheit</h2>
          <p className="text-muted-foreground">
            Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder 
            vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. 
            Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
          </p>

          {/* 13. Änderung */}
          <h2 className="font-heading text-xl font-bold mt-8 mb-4">13. Änderung der Datenschutzerklärung</h2>
          <p className="text-muted-foreground mb-6">
            Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, z. B. bei Änderungen von Gesetzen, 
            unserer Website oder unserer Dienste.
          </p>

          <p className="text-sm text-muted-foreground font-medium border-t border-border pt-4">
            Stand: Juni 2025
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Datenschutz;
