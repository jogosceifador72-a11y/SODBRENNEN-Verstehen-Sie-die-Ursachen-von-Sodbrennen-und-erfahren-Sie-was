import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, UserCheck, UserX, ArrowRight } from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

const forYou = [
  "Sie möchten Sodbrennen ohne Komplikationen verstehen und Ihre Beschwerden im Alltag spürbar lindern.",
  "Sie sind Anfänger auf diesem Gebiet und suchen eine klare Orientierung in verständlicher, einfacher Sprache ohne Fachjargon.",
  "Sie suchen eine erprobte praktische Methode, die Sie sofort anwenden können – inklusive Checkliste und Symptomtagebuch.",
  "Sie wollen endlich aufhören, auf gut Glück Tabletten zu schlucken, und möchten die eigentlichen Auslöser an der Wurzel anpacken.",
  "Sie schätzen kompaktes Wissen, das Sie an einem gemütlichen Nachmittag durchlesen und direkt am selben Abend umsetzen können."
];

const notForYou = [
  "Sie suchen nach unhaltbaren „Wunderlösungen“ über Nacht, ohne bereit zu sein, auch nur eine Kleinigkeit an Ernährung oder Schlafgewohnheiten anzupassen.",
  "Sie bevorzugen ausführliche, hunderte Seiten lange theoretische und rein akademische Medizinabhandlungen.",
  "Sie erwarten einen Ersatz für eine ärztliche Diagnose bei akuten, schweren oder ungeklärten Notfällen (das E-Book dient der Information und Selbsthilfe)."
];

export const TargetAudience: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[550px] bg-[#455747]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c46849] block mb-2">
            3. Zielgruppe & Eignung
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-4">
            Ist dieser Praxis-Ratgeber der richtige für Sie?
          </h2>
          <p className="text-sm sm:text-base text-[#566658]">
            Ehrliche Transparenz ist uns wichtig: Finden Sie heraus, ob unser 30-seitiges E-Book genau Ihren Bedürfnissen entspricht.
          </p>
        </motion.div>

        {/* 2 Column Comparison Grid with scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Column 1: Für Sie geeignet */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="bg-[#f6faf7]/90 backdrop-blur-md border-2 border-[#b5d6bc] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Perfekt geeignet
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#1a2d1d]">
                    ✅ Für Sie, wenn Sie:
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#263b2a] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#cce4d2] text-xs font-semibold text-emerald-900">
              ➔ Sie werden sich in diesem Leitfaden sofort wiederfinden und schnelle Erleichterung spüren.
            </div>
          </motion.div>

          {/* Column 2: NICHT für Sie geeignet */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="bg-[#fdf9f8]/90 backdrop-blur-md border-2 border-[#f0c8bc] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#c46849] text-white flex items-center justify-center shrink-0">
                  <UserX className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a85235]">
                    Nicht empfohlen
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#351b14]">
                    🚫 NICHT für Sie, wenn Sie:
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4d2f26] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#f4d5cc] text-xs text-[#6e463a]">
              ➔ Wenn Sie theoretische Hunderte-Seiten-Bücher suchen oder keine Veränderungen im Alltag wollen, ist dieser Ratgeber nicht passend.
            </div>
          </motion.div>

        </div>

        {/* Mini CTA trigger with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-2"
        >
          <a
            href={HOTMART_CHECKOUT_URL}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d382e] hover:bg-[#1e261f] text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <span>Trifft auf Sie zu? Jetzt Ratgeber für 29,75 € sichern</span>
            <ArrowRight className="w-4 h-4 text-[#c46849]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
