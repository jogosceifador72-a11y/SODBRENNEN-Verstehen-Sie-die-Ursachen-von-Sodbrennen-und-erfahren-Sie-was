import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sabine K.",
    location: "München",
    rating: 5,
    title: "Endlich schlafe ich wieder eine ganze Nacht durch!",
    text: "Ich hatte fast jede Nacht dieses brennende Gefühl im Hals und dachte immer, ein Glas kalte Milch vor dem Schlafen hilft. Durch das E-Book habe ich erst kapiert, dass die Milch das Problem nur noch schlimmer gemacht hat! Die Tipps zur Schlafposition und der Notfallplan waren Gold wert.",
    highlight: "Schlaftipps & Milch-Mythos aufgeklärt"
  },
  {
    name: "Markus W.",
    location: "Hamburg",
    rating: 5,
    title: "Das Symptomtagebuch hat mir die Augen geöffnet",
    text: "30 Seiten genau auf den Punkt, ohne langes Geschwafel. Ich hatte keine Lust auf dicke Fachbücher. Durch das 7-Tage-Tagebuch habe ich gemerkt, dass bei mir kohlensäurehaltiges Mineralwasser in Kombination mit spätem Abendessen der Hauptauslöser war. Seitdem ich das angepasst habe, bin ich beschwerdefrei.",
    highlight: "Trigger in 4 Tagen entlarvt"
  },
  {
    name: "Helga & Thomas B.",
    location: "Wien",
    rating: 5,
    title: "Einfach, verständlich und ohne Mediziner-Latein",
    text: "Mein Mann und ich hatten beide immer wieder mit Sodbrennen zu kämpfen. Dieser Leitfaden ist super gegliedert. Besonders die 5 Sofortmaßnahmen haben uns sofort geholfen, als es am Wochenende wieder akut wurde. Die 29,75 € haben sich am ersten Abend mehrfach bezahlt gemacht.",
    highlight: "Sofortige Akut-Hilfe am ersten Abend"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[500px] bg-[#c46849]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1e2420] tracking-tight mb-3">
            Was Leserinnen & Leser über den Ratgeber sagen
          </h2>
          <p className="text-sm sm:text-base text-[#59685b]">
            Echte Erfahrungen von Menschen, die ihre Beschwerden in den Griff bekommen haben.
          </p>
        </motion.div>

        {/* Review Cards with staggered scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#e5ded4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verifizierter Leser
                  </span>
                </div>

                <h4 className="font-editorial text-base sm:text-lg font-bold text-[#1c221e] mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-[#546456] leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ece5]">
                <div className="text-xs font-bold text-[#1e2420]">
                  {rev.name}
                </div>
                <div className="text-[11px] text-[#7d8c7f]">
                  Aus {rev.location} · {rev.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
