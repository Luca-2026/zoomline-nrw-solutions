import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqData = [
  {
    category: "Über Zoomlion",
    questions: [
      {
        question: "Was ist Zoomlion?",
        answer: "Zoomlion Heavy Industry Science & Technology Co., Ltd. ist ein führender chinesischer Hersteller von Baumaschinen und gehört zu den Top 5 der größten Baumaschinenhersteller weltweit. Das 1992 gegründete Unternehmen erzielte 2020 einen Umsatz von über 9,45 Milliarden US-Dollar und beschäftigt rund 19.000 Mitarbeiter."
      },
      {
        question: "Ist Zoomlion ein zuverlässiger Hersteller?",
        answer: "Ja, Zoomlion ist an der Hongkonger Börse notiert und beliefert Großprojekte weltweit, darunter NEOM in Saudi-Arabien – die 'Stadt der Zukunft'. Das Unternehmen verzeichnete 2022 ein Umsatzwachstum von über 70% im internationalen Geschäft und investiert kontinuierlich in Forschung und Entwicklung."
      },
      {
        question: "Warum sind Zoomlion Maschinen so günstig?",
        answer: "Zoomlion bietet ein exzellentes Preis-Leistungs-Verhältnis durch effiziente Produktionsprozesse und hohe Stückzahlen. Die Maschinen bieten hochwertige Technik und umfangreiche Ausstattung zu deutlich attraktiveren Anschaffungskosten als vergleichbare europäische oder amerikanische Marken – ohne Kompromisse bei der Qualität."
      }
    ]
  },
  {
    category: "Arbeitsbühnen",
    questions: [
      {
        question: "Welche Arbeitsbühnen bietet Zoomlion an?",
        answer: "Zoomlion bietet ein umfassendes Programm an Arbeitsbühnen: Scherenarbeitsbühnen (elektrisch und Diesel), Gelenkteleskop-Arbeitsbühnen, Teleskop-Arbeitsbühnen und Raupen-Arbeitsbühnen. Arbeitshöhen reichen von 6 bis über 58 Meter."
      },
      {
        question: "Sind Zoomlion Arbeitsbühnen in Deutschland zugelassen?",
        answer: "Ja, alle Zoomlion Arbeitsbühnen sind CE-zertifiziert und entsprechen den europäischen Sicherheitsnormen. Sie können in Deutschland und der gesamten EU uneingeschränkt eingesetzt werden."
      },
      {
        question: "Welche Arbeitsbühne eignet sich für Innenräume?",
        answer: "Für Innenräume empfehlen wir elektrische Scherenarbeitsbühnen der AC-Serie oder die kompakten Micro-Scherenarbeitsbühnen. Diese sind emissionsfrei, leise und haben eine geringe Bodenbelastung."
      }
    ]
  },
  {
    category: "Bagger",
    questions: [
      {
        question: "Welche Bagger bietet Zoomlion an?",
        answer: "Zoomlion bietet Bagger von 1,8 Tonnen (Minibagger) bis über 21 Tonnen (Kettenbagger). Das Programm umfasst Minibagger, Kompaktbagger und Kettenbagger für verschiedene Einsatzbereiche im Tief-, Straßen- und Landschaftsbau."
      },
      {
        question: "Sind Ersatzteile für Zoomlion Bagger verfügbar?",
        answer: "Ja, wir halten alle gängigen Ersatzteile an unseren drei NRW-Standorten in Bonn, Krefeld und Mülheim vorrätig. Dadurch garantieren wir kurze Lieferzeiten und minimale Stillstandzeiten für Ihre Maschinen."
      },
      {
        question: "Welcher Zoomlion Bagger eignet sich für den GaLaBau?",
        answer: "Für den Garten- und Landschaftsbau empfehlen wir Minibagger wie den ZE18GU oder ZE36GU. Diese sind kompakt, wendig und haben eine geringe Bodenbelastung – ideal für empfindliche Rasenflächen und enge Zugänge."
      }
    ]
  },
  {
    category: "Kauf & Service",
    questions: [
      {
        question: "Wo kann ich Zoomlion Maschinen in NRW kaufen?",
        answer: "Zoomlion NRW ist der exklusive Fachhändler für Zoomlion Arbeitsbühnen und Bagger in Nordrhein-Westfalen. Wir haben drei Standorte: Bonn (Drachenburgstraße 8), Krefeld (Anrather Straße 291) und Mülheim an der Ruhr."
      },
      {
        question: "Wie lange ist die Garantie auf Zoomlion Maschinen?",
        answer: "Alle Zoomlion Maschinen haben eine Garantie von 3 Jahren oder 3.000 Betriebsstunden – je nachdem, was zuerst erreicht wird. Dies gibt Ihnen Sicherheit und zeigt das Vertrauen in die Qualität der Produkte."
      },
      {
        question: "Bietet Zoomlion NRW auch Finanzierung an?",
        answer: "Ja, wir bieten verschiedene Finanzierungsoptionen für den Kauf von Zoomlion Maschinen. Sprechen Sie uns an – wir finden die passende Lösung für Ihr Budget und Ihre Anforderungen."
      },
      {
        question: "Wie erreiche ich den Zoomlion NRW Service?",
        answer: "Sie erreichen uns telefonisch in Bonn unter 0228 50466061 und in Krefeld unter 02151 4179904. Per E-Mail sind wir unter verkauf@zoomlion-nrw.de erreichbar. Unser Service-Team steht Ihnen für Beratung, Reparaturen und Ersatzteile zur Verfügung."
      }
    ]
  }
];

// Generate JSON-LD structured data for FAQPage
const generateFAQSchema = () => {
  const allQuestions = faqData.flatMap(category => 
    category.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  };
};

const FAQ = () => {
  const faqSchema = generateFAQSchema();

  return (
    <Layout>
      <Helmet>
        <title>FAQ - Häufige Fragen zu Zoomlion Baumaschinen | Zoomlion NRW</title>
        <meta 
          name="description" 
          content="Häufig gestellte Fragen zu Zoomlion Arbeitsbühnen und Baggern. Erfahren Sie alles über Kauf, Service, Garantie und Ersatzteile bei Ihrem Fachhändler in NRW." 
        />
        <meta 
          name="keywords" 
          content="Zoomlion FAQ, Arbeitsbühnen Fragen, Bagger kaufen NRW, Zoomlion Garantie, Baumaschinen Service, Zoomlion Ersatzteile" 
        />
        <link rel="canonical" href="https://zoomlion-nrw.de/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="FAQ"
            title="Häufig gestellte Fragen"
            subtitle="Alles, was Sie über Zoomlion Arbeitsbühnen und Bagger wissen müssen"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={category.category}>
                <h2 className="font-heading text-xl font-bold mb-4 text-foreground">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg mb-3 px-4 bg-card"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Additional SEO content */}
          <div className="max-w-3xl mx-auto mt-16 prose prose-lg">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Zoomlion – Ein globaler Marktführer für Baumaschinen
            </h2>
            <p className="text-muted-foreground">
              Zoomlion Heavy Industry Science & Technology Co., Ltd. wurde 1992 in China gegründet und hat sich 
              zu einem der weltweit führenden Hersteller von Baumaschinen entwickelt. Mit einem Jahresumsatz von 
              über 9,45 Milliarden US-Dollar (2020) und einem globalen Marktanteil von etwa 4,9% gehört Zoomlion 
              zu den Top 5 der Branche – gleichauf mit Marken wie Caterpillar, Komatsu und Liebherr.
            </p>
            <p className="text-muted-foreground">
              Das Unternehmen beschäftigt rund 19.000 Mitarbeiter und ist an der Hongkonger Börse notiert. 
              Zoomlion beliefert Großprojekte auf der ganzen Welt, darunter das prestigeträchtige NEOM-Projekt 
              in Saudi-Arabien. Mit einem Umsatzwachstum von über 70% im internationalen Geschäft (2022) 
              expandiert Zoomlion kontinuierlich und investiert stark in Forschung und Entwicklung.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
