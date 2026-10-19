import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "In welchem Format erhalte ich den Ratgeber?",
    answer: "Sie erhalten den Ratgeber als praktisches digitales PDF-Dokument (30 Seiten). Das PDF können Sie sofort nach der Bestellung herunterladen und auf jedem beliebigen Smartphone, Tablet, PC, Mac oder eReader lesen oder bei Bedarf zu Hause ausdrucken."
  },
  {
    question: "Wie schnell erhalte ich Zugriff nach dem Kauf?",
    answer: "In weniger als 60 Sekunden! Direkt nach erfolgreicher Zahlung über Hotmart wird Ihnen der Download-Link sowohl im Browser angezeigt als auch umgehend an Ihre angegebene E-Mail-Adresse geschickt."
  },
  {
    question: "Benötige ich medizinisches Vorwissen, um das E-Book zu verstehen?",
    answer: "Nein, überhaupt nicht. Das E-Book wurde bewusst so geschrieben, dass medizinische Zusammenhänge einfach, bildhaft und ohne Fachchinesisch erklärt werden. Es richtet sich an Einsteiger, die praktische Tipps und sofortige Orientierung im Alltag suchen."
  },
  {
    question: "Was genau beinhaltet das Symptomtagebuch?",
    answer: "Das Symptomtagebuch ist eine strukturierte Vorlage (Teil des PDF-Pakets). Es hilft Ihnen, über 7 Tage hinweg Ihre Mahlzeiten, Uhrzeiten, Stresssituationen und das Auftreten von Sodbrennen festzuhalten. Dadurch erkennen Sie schnell Ihre persönlichen 'Säure-Trigger', die Ihnen vorher vielleicht nie aufgefallen sind."
  },
  {
    question: "Ist das ein Abonnement oder gibt es Folgekosten?",
    answer: "Nein! Es handelt sich um eine reine Einmalzahlung von 29,75 €. Es gibt kein verstecktes Abonnement und keine wiederkehrenden Gebühren. Sie besitzen die PDF-Datei dauerhaft."
  },
  {
    question: "Welche Zahlungsmethoden stehen zur Verfügung?",
    answer: "Über den verifizierten Zahlungsanbieter Hotmart können Sie sicher und bequem mit allen gängigen Methoden bezahlen: PayPal, Kreditkarte (Visa, Mastercard, etc.), Klarna (Sofortüberweisung/Rechnung) und SEPA."
  },
  {
    question: "Ersetzt das E-Book einen Arztbesuch?",
    answer: "Nein. Der Ratgeber vermittelt wertvolles Wissen zur Selbsthilfe, Ernährung und Alltagsgestaltung bei alltäglichem Sodbrennen. Eine Seite mit eindeutigen Warnsignalen (Red Flags) zeigt Ihnen zudem genau, wann eine ärztliche Untersuchung dringend ratsam ist."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#455747]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#e2d8cb] text-[#4d5e50] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#c46849]" />
            <span>Häufig gestellte Fragen</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-4">
            Alles, was Sie vor dem Kauf wissen möchten
          </h2>
          <p className="text-sm sm:text-base text-[#576859]">
            Haben Sie noch offene Fragen zum E-Book oder zum Bestellablauf? Hier finden Sie schnelle Antworten.
          </p>
        </motion.div>

        {/* Accordion with scroll animation */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#e5ded4] overflow-hidden transition-all duration-200 shadow-xs hover:border-[#c46849]/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors"
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-[#1f2821] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7a8a7c] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#c46849]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4b5a4d] leading-relaxed border-t border-[#f2ede4]/80">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
