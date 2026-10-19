import React from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Flame, 
  Milk, 
  Stethoscope, 
  Target, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

const obstacles = [
  {
    id: 1,
    icon: <HelpCircle className="w-6 h-6 text-[#c46849]" />,
    problemTitle: "Hürde 1: Unwissenheit über die Auslöser",
    problemText: "Sie wissen nie genau, warum es plötzlich wieder brennt. War es der Kaffee? Die Tomatensoße? Oder der Stress im Büro?",
    solutionTitle: "Die Lösung im E-Book:",
    solutionText: "Der Leitfaden deckt die häufigsten Auslöser auf (Lebensmittel, heimliche Alltagsgewohnheiten, Stress, Medikamente) und liefert ein druckbares Symptomtagebuch, mit dem Sie Ihre ganz persönlichen Auslöser schwarz auf weiß identifizieren.",
    tag: "Inklusive Symptomtagebuch"
  },
  {
    id: 2,
    icon: <Flame className="w-6 h-6 text-[#c46849]" />,
    problemTitle: "Hürde 2: Unsicherheit im Akutfall",
    problemText: "Wenn das Feuer in der Brust brennt, herrscht Panik: Was soll man jetzt tun? Hinlegen? Wasser trinken? Was hilft wirklich?",
    solutionTitle: "Die Lösung im E-Book:",
    solutionText: "Schafft sofortige Klarheit durch eine glasklare Schritt-für-Schritt-Anleitung mit 5 Sofortmaßnahmen, einen beispielhaften Ernährungsplan sowie entscheidende Tipps zu aufrechter Körperhaltung und der richtigen Schlafposition (z.B. Linksseitenlage & Kopfhochlagerung).",
    tag: "5 Sofortmaßnahmen & Schlaf-Tipps"
  },
  {
    id: 3,
    icon: <Milk className="w-6 h-6 text-[#c46849]" />,
    problemTitle: "Hürde 3: Zeit- und Geldverschwendung durch Mythen",
    problemText: "Viele greifen zu vermeintlichen Wundermitteln wie kalter Milch oder löffelweise Natron und machen alles nur noch schlimmer.",
    solutionTitle: "Die Lösung im E-Book:",
    solutionText: "Bewahrt Sie vor kostspieligen und gefährlichen Fehlern – wie dem Mythos, Milch würde Sodbrennen heilen (Milch neutralisiert nur für Minuten und regt danach neue Säure an!), oder dem unkontrollierten Gebrauch von Natron (Rebound-Effekt).",
    tag: "Fakten statt Mythen"
  },
  {
    id: 4,
    icon: <Stethoscope className="w-6 h-6 text-[#c46849]" />,
    problemTitle: "Hürde 4: Unklarheit über den Arztbesuch",
    problemText: "Wann ist es harmloser Reflux und wann verbirgt sich etwas Ernstes dahinter? Viele warten zu lange oder gehen grundlos in Panik auf.",
    solutionTitle: "Die Lösung im E-Book:",
    solutionText: "Eine dedizierte Übersichtsseite mit unmissverständlichen Warnsignalen (Red Flags) zeigt Ihnen genau, ab welchem Punkt eine ärztliche Abklärung zwingend erforderlich ist – für Ihre maximale Sicherheit und Seelenruhe.",
    tag: "Warnsignale & Sicherheit"
  }
];

export const ObstaclesSolved: React.FC = () => {
  return (
    <section id="vorteile" className="py-16 md:py-24 relative overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-gradient-to-l from-[#455747]/12 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c46849] block mb-2">
            2. Was bewirkt es?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2420] tracking-tight mb-4">
            Dieses E-Book beseitigt die 4 größten Hürden in Ihrem Alltag
          </h2>
          <p className="text-base sm:text-lg text-[#556457]">
            Verwandeln Sie Frust, Rätselraten und ständige Angst vor der nächsten Mahlzeit in Selbstsicherheit, Wissen und gezielte Linderung.
          </p>
        </motion.div>

        {/* 4 Cards Grid with staggered scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {obstacles.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#e5ded4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with tag and icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf3ed] border border-[#f0ded3] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e5e43] bg-[#edf4ee] px-3 py-1 rounded-full border border-[#d6e5d8]">
                    {item.tag}
                  </span>
                </div>

                {/* The Obstacle (Problem) */}
                <div className="mb-5 pb-5 border-b border-[#f0ebe3]">
                  <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-1.5">
                    <XCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span className="font-editorial text-base">{item.problemTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667568] pl-6 leading-relaxed">
                    {item.problemText}
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <div className="flex items-center gap-2 text-[#2d4d33] font-semibold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="font-editorial text-base">{item.solutionTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2f3d32] pl-6 leading-relaxed font-normal">
                    {item.solutionText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Endergebnis Hero Box with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="bg-gradient-to-br from-[#2d382e] via-[#374438] to-[#252f26] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#445446]"
        >
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c46849] text-white text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Das greifbare Endergebnis</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
              Nach der Lektüre wissen Sie genau, wie Sie Ihre Auslöser erkennen, bei Sodbrennen reagieren und Gewohnheiten etablieren, die Ihre Beschwerden lindern.
            </h3>

            <p className="text-sm sm:text-base text-[#cfd8d0] leading-relaxed max-w-2xl mx-auto">
              Kein Blindflug mehr im Supermarkt oder vor dem Zubettgehen. Sie haben einen festen Leitfaden in der Hand, der Ihnen Sicherheit und Lebensfreude zurückgibt.
            </p>

            <div className="pt-3">
              <a
                href={HOTMART_CHECKOUT_URL}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#c46849] hover:bg-[#b0583b] text-white font-bold text-sm sm:text-base shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Jetzt für 29,75 € sichern & sofort lesen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
