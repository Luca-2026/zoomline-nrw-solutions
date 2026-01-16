import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Impressum = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading
          badge="Rechtliches"
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG"
        />
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              Zoomlion NRW ist eine eingetragene Marke der
            </p>
            <p className="font-bold text-lg mb-4">
              SLT Technology Group GmbH & Co. KG
            </p>
            <address className="not-italic text-muted-foreground">
              Anrather Straße 291<br />
              DE-47807 Krefeld<br /><br />
              Fon: +49 (0) 2151 - 417 99 02<br />
              Fax: +49 (0) 2151 - 417 99 04<br />
              E-Mail: <a href="mailto:verkauf@zoomlion-nrw.de" className="text-primary hover:underline">verkauf@zoomlion-nrw.de</a>
            </address>
            <p className="mt-4 text-sm">
              <strong>Handelsregister:</strong> HRA 7075 Amtsgericht Krefeld
            </p>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-4">Geschäftsführer</h2>
          <p>Benedikt Nöchel</p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-4">Persönlich haftende Gesellschafterin</h2>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="font-semibold">SLT Management GmbH</p>
            <address className="not-italic text-muted-foreground text-sm mt-2">
              Anrather Straße 291<br />
              DE-47807 Krefeld<br /><br />
              Fon: +49 (0) 2151 - 417 99 03<br />
              Fax: +49 (0) 2151 - 417 99 04<br />
              E-Mail: <a href="mailto:info@slt-m.de" className="text-primary hover:underline">info@slt-m.de</a>
            </address>
            <p className="mt-3 text-sm">
              <strong>Handelsregister:</strong> HRB 18191 Amtsgericht Krefeld<br />
              <strong>Gerichtsstand:</strong> Amtsgericht Krefeld
            </p>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-4">Haftungsausschluss</h2>
          <div className="text-sm text-muted-foreground space-y-4">
            <p>
              Die SLT Technology Group GmbH & Co. KG prüft und aktualisiert die Informationen auf ihrer Webseite ständig. 
              Trotz aller Sorgfalt können sich Daten und Informationen jeglicher Art inzwischen verändert haben. 
              Eine Haftung, Garantie oder sonstiges Einstehen für die Aktualität, Richtigkeit und Vollständigkeit 
              der zur Verfügung gestellten Informationen kann daher nicht übernommen werden.
            </p>
            <p>
              Gleiches gilt auch für alle anderen Webseiten, auf die direkt mittels Hyperlinks oder in sonstiger 
              Weise verwiesen wird. SLT Technology Group GmbH & Co. KG ist für den Inhalt der Webseiten, die aufgrund 
              einer solchen Verbindung oder Hinweis erreicht werden, nicht verantwortlich.
            </p>
            <p>
              Die SLT Technology Group GmbH & Co. KG lehnt jegliche Form der Haftung, insbesondere Vertragshaftung, 
              Deliktshaftung, Gefährdungshaftung oder sonstige Haftung für direkten oder indirekten Schadensersatz, 
              Ersatz des beiläufig entstandenen Schadens oder für Strafe einschließlich Schadensersatz oder für Schäden, 
              die daraus resultieren oder in Zusammenhang damit stehen, dass die SLT Technology Group GmbH & Co. KG-Seiten 
              aufgerufen, benutzt oder nicht benutzt werden können, oder für Schäden durch einen Leistungsausfall, 
              eine Unterbrechung, einen Defekt, eine Übertragungsverzögerung, einen Computervirus oder sonstige schädliche 
              Elemente oder einen Leitungs- und Systemausfall im Zusammenhang mit der Webseite der SLT Technology Group 
              GmbH & Co. KG, ab, unabhängig davon, ob die SLT Technology Group GmbH & Co. KG sich der Möglichkeiten 
              solcher Schäden bewusst ist oder nicht.
            </p>
            <p>
              Die SLT Technology Group GmbH & Co. KG behält sich das Recht vor, jederzeit Änderungen oder Ergänzungen 
              der bereitgestellten Informationen vorzunehmen.
            </p>
            <p>
              Inhalt, Struktur und Gestaltung der SLT Technology Group GmbH & Co. KG Webseite sind urheberrechtlich geschützt. 
              Die Vervielfältigung, Änderung, Darstellung, Verbreitung, Übermittlung, Veröffentlichung, Verkauf, Lizenzierung, 
              Bearbeitung, Verfremdung oder Nutzung von Informationen oder Daten für welche Zwecke auch immer, insbesondere 
              die Verwendung von Texten, Textteilen oder Bildmaterial, bedarf der vorherigen schriftlichen Zustimmung der 
              SLT Technology Group GmbH & Co. KG.
            </p>
            <p>
              Dieser Haftungsausschluss ist Teil des Internetangebotes, von welchem aus auf diese Seite verwiesen wurde. 
              Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht 
              vollständig entsprechen sollten, bleiben die übrigen Teile des Textes in ihrem Inhalt und ihrer Gültigkeit 
              davon unberührt.
            </p>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-4">Versicherung</h2>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="font-semibold">Betriebshaftpflicht-, Elektronik- & Maschinenbruchversicherung</p>
            <p className="text-muted-foreground mt-2">Gothaer Allgemeine Versicherung AG</p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Geltungsbereich des Versicherungsschutzes:</strong> Deutschland
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Impressum;
