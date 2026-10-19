import React from 'react';
import { motion } from 'motion/react';
import { Gift, Calendar, Zap, UtensilsCrossed, Check } from 'lucide-react';

const bonuses = [
  {
    tag: "Bonus #1",
    title: "Druckbares Sodbrennen-Symptomtagebuch",
    subtitle: "Wert: 14,90 € · Für Sie kostenlos enthalten",
    description: "Eine speziell entwickelte, strukturierte 7-Tage-Vorlage zum Ausdrucken oder Ausfüllen am Tablet. Dokumentieren Sie Mahlzeiten, Uhrzeiten, Stresslevel und Beschwerden, um Ihre persönlichen Trigger innerhalb weniger Tage zweifelsfrei zu erkennen.",
    icon: <Calendar className="w-6 h-6 text-[#c46849]" />,
  },
  {
    tag: "Bonus #2",
    title: "Der 5-Schritte-Notfall-Fahrplan (Spickzettel)",
    subtitle: "Wert: 12,90 € · Für Sie kostenlos enthalten",
    description: "Eine kompakte 1-Seiten-Übersicht für den Kühlschrank oder den Nachttisch. Wenn das Brennen mitten in der Nacht oder nach dem Abendessen einsetzt, wissen Sie mit einem Blick sofort, was in Minute 1, 3 und 5 zu tun ist.",
    icon: <Zap className="w-6 h-6 text-[#c46849]" />,
  },
  {
    tag: "Bonus #3",
    title: "Die Sodbrennen-Ernährungsampel",
    subtitle: "Wert: 11,90 € · Für Sie kostenlos enthalten",
    description: "Schluss mit Verwirrung beim Einkaufen oder Kochen. Ein klares Farbsystem: Grün (säurearm, magenberuhigend), Gelb (in Maßen genießen) und Rot (bekannte Säure-Booster wie frittiertes Fett, bestimmte Gewürze oder saure Fruchtsäfte).",
    icon: <UtensilsCrossed className="w-6 h-6 text-[#c46849]" />,
  }
];

export const Bonuses: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#d4a373]/12 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#f0ded3] text-[#a85235] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Gift className="w-3.5 h-3.5" />
            <span>Kostenlos im E-Book enthalten</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-4">
            3 praktische Bonus-Werkzeuge für Ihre sofortige Umsetzung
          </h2>
          <p className="text-sm sm:text-base text-[#526154]">
            Sie erhalten nicht nur reinen Text, sondern direkt einsetzbare Hilfsmittel, die Ihren Alltag sofort spürbar erleichtern.
          </p>
        </motion.div>

        {/* 3 Bonus Cards with staggered scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#e5ded4] shadow-sm hover:shadow-md hover:border-[#c46849]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf3ed] border border-[#f0dfd5] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {bonus.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c46849] bg-[#faeee8] px-2.5 py-0.5 rounded-full border border-[#f2ded5]">
                    {bonus.tag}
                  </span>
                </div>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1f2821] mb-1">
                  {bonus.title}
                </h3>
                
                <p className="text-xs font-semibold text-emerald-800 mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5a6b5d] leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebe3] flex items-center gap-2 text-xs text-[#3b6642] font-semibold">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direkt im PDF-Paket enthalten</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
