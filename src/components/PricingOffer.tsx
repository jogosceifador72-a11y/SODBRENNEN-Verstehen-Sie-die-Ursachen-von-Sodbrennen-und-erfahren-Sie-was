import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Download, 
  Sparkles, 
  CreditCard,
  Zap,
  Clock
} from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

export const PricingOffer: React.FC = () => {
  return (
    <section id="jetzt-kaufen" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#c46849]/14 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-[#455747]/14 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c46849] block mb-2">
            Ihr Weg zu unbeschwerten Tagen und ruhigen Nächten
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2420] tracking-tight mb-4">
            Starten Sie jetzt für nur 29,75 €
          </h2>
          <p className="text-sm sm:text-base text-[#526354]">
            Einmalig investieren, Auslöser verstehen und sofortige Handlungsfähigkeit bei jedem Brennen gewinnen.
          </p>
        </motion.div>

        {/* Pricing Card with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/92 backdrop-blur-md border-2 border-[#e2d7ca] rounded-3xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl relative"
        >
          {/* Top highlight ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c46849] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-6 rounded-full shadow-md">
            Komplettpaket · Sofortiger PDF-Download
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: What's included */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#637565] font-semibold">
                  Offizieller Ratgeber
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1f2821] mt-1">
                  SODBRENNEN: Häufige Ursachen & wirksamer Umgang
                </h3>
                <p className="text-xs sm:text-sm text-[#5d6e60] mt-1">
                  Praktischer 30-seitiger PDF-Ratgeber für Smartphone, Tablet und PC.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#27352a]">
                    <strong>Vollständiger 30-Seiten PDF-Ratgeber:</strong> Schritt-für-Schritt-Anleitung, direkt und in Ihrem Tempo.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#27352a]">
                    <strong>5 Sofortmaßnahmen im Akutfall:</strong> Klare Notfall-Handlungsschritte gegen das Brennen.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#27352a]">
                    <strong>Inkl. druckbarem Symptomtagebuch:</strong> Um Ihre persönlichen Auslöser in wenigen Tagen zu entlarven.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#27352a]">
                    <strong>Ernährungsplan, Haltung & Schlafposition:</strong> Warum die Linksseitenlage die Schwerkraft nutzt.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#27352a]">
                    <strong>Warnsignale & Myth-Busting:</strong> Milch-Irrtum & Natron-Risiken verständlich aufgeklärt.
                  </span>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e5ded4] flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                <div className="text-xs text-[#48574a]">
                  <strong className="text-[#1e2620] block">
                    100% Sichere Kaufabwicklung über Hotmart®:
                  </strong>
                  Nach dem Kauf erhalten Sie sofort per E-Mail Ihren persönlichen Download-Link zum PDF-Dokument.
                </div>
              </div>
            </div>

            {/* Right: Price & CTA action */}
            <div className="lg:col-span-5 flex flex-col items-center text-center bg-[#faf7f2] border border-[#e2d8cb] p-6 sm:p-8 rounded-2xl shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#738275] mb-1">
                Regulärer Wert: 49,00 €
              </span>
              
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="font-editorial text-5xl font-extrabold text-[#c46849]">
                  29,75 €
                </span>
                <span className="text-xs font-semibold text-[#667568]">
                  inkl. MwSt.
                </span>
              </div>

              <p className="text-xs text-[#718073] mb-6">
                Einmalzahlung · Kein Abonnement · Lebenslanger PDF-Zugriff
              </p>

              {/* Big Checkout Button */}
              <a
                href={HOTMART_CHECKOUT_URL}
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#c46849] hover:bg-[#b0583b] active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-[#c46849]/25 hover:shadow-xl transition-all group mb-4"
              >
                <span>JETZT KAUFEN (29,75 €)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="space-y-2 text-[11px] text-[#718073]">
                <div className="flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit SSL verschlüsselte Zahlung</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Download in unter 60 Sekunden verfügbar</span>
                </div>
              </div>

              {/* Payment methods icons note */}
              <div className="mt-5 pt-4 border-t border-[#f0ebe3] w-full flex items-center justify-center gap-3 text-xs text-[#8c9c8e] flex-wrap">
                <span className="px-2 py-0.5 rounded bg-white font-semibold text-[#5d6d5f] border border-[#e5dfd6]">
                  PayPal
                </span>
                <span className="px-2 py-0.5 rounded bg-white font-semibold text-[#5d6d5f] border border-[#e5dfd6]">
                  Klarna
                </span>
                <span className="px-2 py-0.5 rounded bg-white font-semibold text-[#5d6d5f] border border-[#e5dfd6]">
                  Kreditkarte
                </span>
                <span className="px-2 py-0.5 rounded bg-white font-semibold text-[#5d6d5f] border border-[#e5dfd6]">
                  SEPA
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
