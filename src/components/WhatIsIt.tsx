import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, Compass, HeartPulse, Check, Sparkles } from 'lucide-react';

export const WhatIsIt: React.FC = () => {
  return (
    <section id="ueber-das-buch" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#c46849]/10 via-[#455747]/10 to-[#d4a373]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#e2d8cb] text-[#70503e] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c46849]" />
            <span>1. Was ist das?</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-4">
            Kein 300-Seiten-Wälzer, sondern 30 Seiten pure, anwendbare Praxis.
          </h2>
          <p className="text-base text-[#566458] leading-relaxed">
            Wenn der Magen brennt und die Speiseröhre schmerzt, haben Sie keine Zeit für trockene Medizintheorie. Sie brauchen klare Antworten, sofortige Linderung und verlässliche Orientierung.
          </p>
        </motion.div>

        {/* Core Description Card with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-white/85 backdrop-blur-md border border-[#e8dfd3] rounded-3xl p-6 sm:p-10 shadow-sm mb-12 hover:shadow-md transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-[#232b24]">
                Ihr kompakter Fahrplan für einen unbeschwerten Alltag
              </h3>
              <p className="text-[#455447] leading-relaxed text-sm sm:text-base">
                <strong>„Sodbrennen“</strong> ist ein praktischer <strong>30-seitiger PDF-Ratgeber</strong>. Er erklärt auf den Punkt, wie Sodbrennen anatomisch entsteht, welche alltäglichen Gewohnheiten und Lebensmittel es heimlich verschlimmern und was Sie gezielt für spürbare Linderung tun können.
              </p>
              <p className="text-[#455447] leading-relaxed text-sm sm:text-base">
                Ohne langatmige Theorien oder Umschweife bietet er eine <strong>Schritt-für-Schritt-Anleitung</strong>, damit Sie Ihren Körper besser verstehen und Ihren Alltag unbeschwerter gestalten können – einfach, direkt und in Ihrem ganz eigenen Tempo.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#faf6f0]/90 border border-[#e5ded4] rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="text-xs uppercase tracking-wider font-bold text-[#c46849]">
                Auf den Punkt gebracht:
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#2f3b31]">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Exakt 30 fokussierte Seiten</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Sofortiger digitaler PDF-Download</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Kein Fachchinesisch – für jeden verständlich</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Inkl. Notfallplan & Tagebuch</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* 3 Key Pillars of the Guide with staggered scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#ece4d9] hover:border-[#c46849]/40 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#455747] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1f2821] mb-2">
              1. Verstehen
            </h4>
            <p className="text-xs sm:text-sm text-[#59685b] leading-relaxed">
              Erfahren Sie ohne Medizinstudium, warum Magensäure überhaupt zurückfließt und was in Ihrem Magen-Schließmuskel vor sich geht.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#ece4d9] hover:border-[#c46849]/40 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#c46849] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1f2821] mb-2">
              2. Handeln
            </h4>
            <p className="text-xs sm:text-sm text-[#59685b] leading-relaxed">
              Greifen Sie im Akutfall sofort zu den 5 Sofortmaßnahmen und passen Sie Körperhaltung, Mahlzeiten und Schlafposition gezielt an.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#ece4d9] hover:border-[#c46849]/40 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2d382e] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1f2821] mb-2">
              3. Vorbeugen
            </h4>
            <p className="text-xs sm:text-sm text-[#59685b] leading-relaxed">
              Nutzen Sie das beiliegende Symptomtagebuch, um Ihre individuellen Trigger ein für alle Mal aufzudecken und langfristig beschwerdefrei zu bleiben.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
