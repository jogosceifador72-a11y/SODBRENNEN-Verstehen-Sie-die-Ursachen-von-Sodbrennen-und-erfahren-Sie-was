import React from 'react';
import coverPhoto from '../assets/cover-photo.jpg';

interface BookMockupProps {
  interactive?: boolean;
}

export const BookMockup: React.FC<BookMockupProps> = ({ interactive = true }) => {
  return (
    <div className="relative mx-auto flex items-center justify-center p-4">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#c46849]/15 via-[#7a917e]/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* 3D Book Container */}
      <div 
        className={`relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[1/1.42] rounded-r-xl rounded-l-sm bg-[#faf6f0] border border-[#e8dfd5] transition-all duration-500 ${
          interactive ? 'hover:-translate-y-2 hover:rotate-1' : ''
        } book-shadow select-none overflow-hidden flex flex-col justify-between`}
        style={{
          boxShadow: '12px 18px 35px -8px rgba(35, 43, 36, 0.35), 2px 4px 10px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Book Spine Shading Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/25 via-black/10 to-transparent z-20 pointer-events-none" />
        <div className="absolute left-1 top-0 bottom-0 w-[1.5px] bg-white/40 z-20 pointer-events-none" />
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-black/10 z-20 pointer-events-none" />

        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/5 pointer-events-none z-10" />

        {/* Top Header Content */}
        <div className="relative z-10 p-5 sm:p-6 text-center pt-7 sm:pt-8">
          <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#455747] mb-1">
            Praxis-Leitfaden
          </p>
          <h2 className="font-editorial text-2xl sm:text-[27px] font-bold tracking-tight text-[#1e2420] leading-[1.15] mb-2 uppercase">
            Sodbrennen:
          </h2>
          <p className="font-editorial text-sm sm:text-base text-[#2d382e] font-medium leading-snug px-1">
            Häufige Ursachen und wie man mit den Beschwerden umgeht
          </p>

          {/* Botanical Divider */}
          <div className="flex items-center justify-center my-3 gap-2 opacity-80">
            <span className="w-8 h-[1px] bg-[#889d88]" />
            <svg 
              className="w-4 h-4 text-[#526a54]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M12 21C12 21 12 14 7 10C2 6 5 2 5 2C5 2 9 5 12 11C15 5 19 2 19 2C19 2 22 6 17 10C12 14 12 21 12 21Z" />
              <path d="M12 11V21" />
            </svg>
            <span className="w-8 h-[1px] bg-[#889d88]" />
          </div>

          <p className="text-[11px] sm:text-xs text-[#526a54] font-medium leading-relaxed max-w-[240px] mx-auto italic font-editorial">
            Ein praktischer Leitfaden, um den eigenen Körper besser zu verstehen und den Alltag leichter zu gestalten.
          </p>
        </div>

        {/* Lemon Water Image */}
        <div className="relative w-full h-[180px] sm:h-[210px] overflow-hidden mt-auto">
          <img 
            src={coverPhoto} 
            alt="SODBRENNEN E-Book Cover - Ein praktischer Leitfaden" 
            className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02]"
          />
          {/* Subtle gradient merge */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#faf6f0]/70" />
          
          {/* Page number 1 indicator */}
          <span className="absolute bottom-3 right-4 text-[10px] text-[#7a8a7c] font-mono font-medium z-20">
            1
          </span>
        </div>

        {/* Bottom Terracotta Accent Bar */}
        <div className="relative h-2.5 sm:h-3 w-full bg-[#d5785d] z-20" />
      </div>

      {/* Pages Edge Effect (Book thickness on right side) */}
      <div 
        className="hidden sm:block absolute right-3 w-2.5 h-[94%] bg-[#eae4da] rounded-r border border-l-0 border-[#d8cfc4] -z-5"
        style={{
          boxShadow: 'inset 2px 0 3px rgba(0,0,0,0.1), 3px 0 5px rgba(0,0,0,0.06)'
        }}
      />
    </div>
  );
};
