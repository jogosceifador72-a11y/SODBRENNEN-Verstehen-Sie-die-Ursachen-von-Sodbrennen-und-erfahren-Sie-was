import React from 'react';
import { motion } from 'motion/react';
import { BookMockup } from './BookMockup';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Zap, 
  Sparkles,
  Lock,
  Download
} from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Soft Ambient Hero Spotlight */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#e8dfd3]/80 via-[#f0e7db]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Rating and Trust Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#cbd9cd] text-[#2d4732] text-xs font-semibold shadow-xs">
            <span className="flex text-amber-500 text-xs">★★★★★</span>
            <span>4.9 / 5 Zufriedenheit</span>
            <span className="text-[#889d88]">·</span>
            <span>Über 1.400 verkaufte Exemplare</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#e4ded5] text-[#556357] text-xs font-medium">
            <Download className="w-3.5 h-3.5 text-[#c46849]" />
            <span>Sofortiger PDF-Download</span>
          </div>
        </motion.div>

        {/* Main Grid: Copy on Left, 3D Book on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c46849] block mb-2">
              Der erprobte 30-Seiten-Praxis-Ratgeber
            </span>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c221e] leading-[1.15] mb-5">
              Verstehen Sie die Ursachen von Sodbrennen und lindern Sie Ihre Beschwerden im Alltag.
            </h1>

            <p className="text-base sm:text-lg text-[#4a574c] leading-relaxed mb-6 font-normal">
              Schluss mit quälendem Brennen in der Speiseröhre, ständiger Unsicherheit beim Essen und schlaflosen Nächten. Erfahren Sie Schritt für Schritt, was Ihr Körper Ihnen sagen möchte – einfach, direkt und in Ihrem eigenen Tempo.
            </p>

            {/* Core Value Checklist */}
            <div className="bg-white/85 backdrop-blur-md border border-[#e8e2d8] rounded-2xl p-4 sm:p-5 mb-7 text-left space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b6642] shrink-0 mt-0.5" />
                <span className="text-sm text-[#263128]">
                  <strong>Persönliche Auslöser identifizieren:</strong> Inklusive druckbarem Symptomtagebuch, um versteckte Trigger bei Essen, Stress & Gewohnheiten zu entlarven.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b6642] shrink-0 mt-0.5" />
                <span className="text-sm text-[#263128]">
                  <strong>5 Sofortmaßnahmen im Akutfall:</strong> Was Sie unmittelbar tun können, wenn das Brennen aufsteigt – plus Ernährungsplan, Haltung & Schlafposition.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b6642] shrink-0 mt-0.5" />
                <span className="text-sm text-[#263128]">
                  <strong>Schluss mit teuren Mythen:</strong> Warum Milch Sodbrennen verschlimmern kann, wie riskant Natron ist und welche Warnsignale zum Arzt führen.
                </span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={HOTMART_CHECKOUT_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#c46849] hover:bg-[#b0583b] active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-[#c46849]/25 hover:shadow-xl transition-all group"
              >
                <span>JETZT RATGEBER SICHERN</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-semibold">
                  NUR 29,75 €
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#637365]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Sicherer Kauf über Hotmart®</span>
              </div>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-[#717e73]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Sofortiger Download (PDF)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Für Smartphone, Tablet & PC
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Einmalzahlung – kein Abo
              </span>
            </div>

          </motion.div>

          {/* Right Column: 3D Book Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Badge above book */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 bg-[#2d382e] text-[#faf6f0] text-[11px] font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5 border border-[#48594a]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>30 Seiten Praxiswissen · Sofort als PDF</span>
              </div>

              {/* Realistic 3D Mockup */}
              <BookMockup interactive={true} />

              {/* Price Tag pill floating on book corner */}
              <div className="absolute bottom-6 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-xs border border-[#e2d8cb] rounded-xl shadow-xl p-3 text-center animate-float">
                <span className="text-[10px] uppercase font-bold text-[#718073] block tracking-wider">
                  Einführungspreis
                </span>
                <span className="font-editorial text-2xl font-bold text-[#c46849] block leading-none">
                  29,75 €
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold mt-0.5 block">
                  Sofort-Zugriff
                </span>
              </div>
            </div>

            {/* Quick caption under book */}
            <p className="text-xs text-[#7d8c7f] text-center mt-3 max-w-xs">
              Kompakt. Direkt verständlich. Ohne akademisches Drumherum.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
