import { Layout } from "@/components/layout/Layout";

const Impressum = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>SLT Technology Group GmbH & Co. KG</strong><br />
          Anrather Straße 291<br />
          47807 Krefeld<br />
          Deutschland
        </p>
        <h2>Kontakt</h2>
        <p>Telefon: 02151 4179904<br />E-Mail: info@zoomline-nrw.de</p>
        <h2>Handelsregister</h2>
        <p><em>Platzhalter – Registergericht und HRA/HRB-Nummer eintragen</em></p>
        <h2>Umsatzsteuer-ID</h2>
        <p><em>Platzhalter – USt-IdNr. eintragen</em></p>
        <h2>Verantwortlich für den Inhalt</h2>
        <p><em>Platzhalter – Name des Verantwortlichen</em></p>
      </div>
    </section>
  </Layout>
);

export default Impressum;
