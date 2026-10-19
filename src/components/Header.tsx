import React, { useState, useEffect } from 'react';
import { BookOpen, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/Q108024141J";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Alert */}
      <div className="bg-[#2d382e] text-[#faf6f0] text-xs py-2 px-4 text-center font-medium border-b border-[#3c4a3e]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c46849] text-white text-[11px] font-bold uppercase tracking-wider">
            Neuerscheinung
          </span>
          <span>
            Der praxisorientierte 30-seitige Ratgeber – Sofortiger PDF-Download für nur <strong className="text-white underline decoration-[#c46849]">29,75 €</strong>
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf6f0]/90 backdrop-blur-md shadow-sm border-b border-[#e2d8cb]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#455747] text-white flex items-center justify-center shadow-sm group-hover:bg-[#344436] transition-colors">
              <BookOpen className="w-5 h-5 text-[#f4efe8]" />
            </div>
            <div>
              <span className="font-editorial text-lg font-bold tracking-tight text-[#1e2420] block leading-none">
                Sodbrennen
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#637365] font-semibold">
                Praxis-Ratgeber
              </span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#49574b]">
            <a href="#ueber-das-buch" className="hover:text-[#1e2420] transition-colors">
              Was ist das?
            </a>
            <a href="#vorteile" className="hover:text-[#1e2420] transition-colors">
              4 Hürden gelöst
            </a>
            <a href="#kapitel-vorschau" className="hover:text-[#1e2420] transition-colors">
              Blick ins Buch
            </a>
            <a href="#fuer-wen" className="hover:text-[#1e2420] transition-colors">
              Für wen?
            </a>
            <a href="#faq" className="hover:text-[#1e2420] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Quick CTA */}
          <div className="flex items-center gap-3">
            <a
              href={HOTMART_CHECKOUT_URL}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c46849] hover:bg-[#b0583b] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              <span>Jetzt sichern</span>
              <span className="opacity-90 font-normal">| 29,75 €</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
