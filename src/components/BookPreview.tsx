import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Check, FileCheck, Layers, ChevronRight, Eye } from 'lucide-react';

interface Chapter {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  pages: string;
}

const chapters: Chapter[] = [
  {
    number: "Kapitel 1",
    pages: "S. 4 – 9",
    title: "Die Mechanik des Reflux: Was im Körper wirklich geschieht",
    description: "Verstehen Sie in einfacher, bildhafter Sprache, wie der untere Ösophagussphinkter funktioniert, warum Magensäure nach oben dringt und was der Unterschied zwischen gelegentlichem Sodbrennen und chronischem Reflux ist.",
    highlights: [
      "Die Anatomie des Magens und der Speiseröhre ohne Mediziner-Latein",
      "Warum manche Menschen anfälliger sind als andere",
      "Typische Fehldiagnosen und wie sich Beschwerden ankündigen"
    ]
  },
  {
    number: "Kapitel 2",
    pages: "S. 10 – 16",
    title: "Versteckte Auslöser enttarnen & Das Symptomtagebuch",
    description: "Die meisten Menschen haben 2-3 ganz spezifische Auslöser, die sie bisher nie verdächtigt haben. Erfahren Sie, welche Lebensmittel, Getränke, Stressfaktoren und Medikamente am häufigsten dahinterstecken.",
    highlights: [
      "Lebensmittel-Landkarte: Säurebildner vs. Magenschoner",
      "Der Einfluss von Mahlzeitengröße und Essenszeiten",
      "Anleitung zur Nutzung des beiliegenden 7-Tage-Symptomtagebuchs"
    ]
  },
  {
    number: "Kapitel 3",
    pages: "S. 17 – 21",
    title: "Die 5 Sofortmaßnahmen bei akutem Brennen",
    description: "Wenn die Speiseröhre brennt, zählt jede Minute. Dieser 5-Schritte-Notfallplan bringt Ihnen sofortige Beruhigung, ohne dass Sie auf riskante Hausmittel zurückgreifen müssen.",
    highlights: [
      "Schritt 1 bis 5: Sofortige Druckentlastung des Magens",
      "Körperhaltung: Warum flaches Liegen im Akutfall Gift ist",
      "Bewährte natürliche Flüssigkeiten zur schnellen Magensäure-Verdünnung"
    ]
  },
  {
    number: "Kapitel 4",
    pages: "S. 22 – 26",
    title: "Ernährung, Haltung und Schlaf: Der Alltag ohne Schmerzen",
    description: "Praxisorientierte Anpassungen für Tag und Nacht. Erfahren Sie, wie Sie nachts nie wieder mit brennender Kehle aufwachen und welche Schlafposition wissenschaftlich am besten schützt.",
    highlights: [
      "Die Linksseitenlage & warum die Schwerkraft auf Ihrer Seite ist",
      "Wie Sie Ihr Bett ergonomisch gegen Reflux vorbereiten",
      "Beispielhafter Tages-Ernährungsplan für magenfreundliche Tage"
    ]
  },
  {
    number: "Kapitel 5",
    pages: "S. 27 – 30",
    title: "Mythen entlarven & Medizinische Warnsignale (Red Flags)",
    description: "Räumen Sie auf mit schädlichen Mythen über Milch und Natron und erhalten Sie eine klare Checkliste, wann der Gang zum Facharzt unverzichtbar ist.",
    highlights: [
      "Der Milch-Mythos erklärt: Warum Milch kurz lindert, aber danach schadet",
      "Die unterschätzten Gefahren von unkontrolliertem Natron",
      "Red Flags: 6 eindeutige Warnsignale, bei denen Sie sofort zum Arzt müssen"
    ]
  }
];

export const BookPreview: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = chapters[activeChapterIndex];

  return (
    <section id="kapitel-vorschau" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#c46849]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#e4ded5] text-[#4d5e50] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Eye className="w-3.5 h-3.5 text-[#c46849]" />
            <span>Transparenter Einblick</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-4">
            Blick ins Buch: 5 kompakte Kapitel ohne Umschweife
          </h2>
          <p className="text-sm sm:text-base text-[#556457]">
            Klicken Sie durch die einzelnen Kapitel und sehen Sie genau, welche wertvollen Erkenntnisse und Werkzeuge Sie auf den 30 Seiten erwarten.
          </p>
        </motion.div>

        {/* Tabbed Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chapter Buttons (Left) with scroll animation */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-2.5"
          >
            {chapters.map((chap, idx) => {
              const isSelected = idx === activeChapterIndex;
              return (
                <button
                  key={chap.number}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#2d382e] text-white border-[#2d382e] shadow-lg shadow-[#2d382e]/15'
                      : 'bg-white/80 backdrop-blur-md text-[#2c372e] border-[#e8dfd3] hover:bg-white hover:border-[#c46849]/40'
                  }`}
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#c46849]' : 'text-[#849486]'
                      }`}>
                        {chap.number}
                      </span>
                      <span className={`text-[11px] ${
                        isSelected ? 'text-white/60' : 'text-[#8c9c8e]'
                      }`}>
                        · {chap.pages}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold font-editorial leading-snug">
                      {chap.title}
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-[#c46849] translate-x-1' : 'text-[#a2b0a4]'
                  }`} />
                </button>
              );
            })}
          </motion.div>

          {/* Detailed Chapter Inspector (Right) with scroll animation */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-[#e5ddd2] rounded-3xl p-6 sm:p-9 shadow-md"
          >
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#e8ded3]">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#c46849] block">
                  {activeChapter.number} · {activeChapter.pages}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1e2420] mt-1 leading-snug">
                  {activeChapter.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#f2ebd9] flex items-center justify-center shrink-0 text-[#2d382e]">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#475749] leading-relaxed mb-6">
              {activeChapter.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#637365] block">
                Die wichtigsten Praxiserkenntnisse in diesem Kapitel:
              </span>
              <ul className="space-y-2.5">
                {activeChapter.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 bg-[#faf7f2] p-3 rounded-xl border border-[#ebe4d8]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-[#2d382e] font-medium leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#e8dfd4] flex items-center justify-between flex-wrap gap-3 text-xs text-[#738275]">
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#3b6642]" />
                Verständlich & direkt umsetzbar
              </span>
              <span className="font-semibold text-[#1e2420]">
                E-Book Umfang: Exakt 30 Seiten
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
