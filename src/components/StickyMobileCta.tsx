import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show when scrolled down 280px
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5ded4] p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-[#455747] text-white flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-[#f4efe8]" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider font-bold text-[#627364] truncate">
              E-Book (30 Seiten PDF)
            </div>
            <div className="font-editorial text-lg font-bold text-[#c46849] leading-none">
              29,75 €
            </div>
          </div>
        </div>

        <a
          href={HOTMART_CHECKOUT_URL}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c46849] hover:bg-[#b0583b] text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <span>Jetzt sichern</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
