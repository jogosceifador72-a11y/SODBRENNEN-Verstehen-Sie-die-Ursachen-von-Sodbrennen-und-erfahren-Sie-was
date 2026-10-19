import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { ObstaclesSolved } from './components/ObstaclesSolved';
import { BookPreview } from './components/BookPreview';
import { Bonuses } from './components/Bonuses';
import { TargetAudience } from './components/TargetAudience';
import { Testimonials } from './components/Testimonials';
import { PricingOffer } from './components/PricingOffer';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RecentSalesNotification } from './components/RecentSalesNotification';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  return (
    <div className="relative min-h-screen text-[#1c221e] flex flex-col font-sans selection:bg-[#c46849]/20 selection:text-[#a04527] overflow-x-hidden">
      
      {/* Immersive Breathing Live Background (Fixed across entire site) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-canvas-pattern">
        {/* Soft floating organic orbs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c46849]/20 via-[#e09176]/15 to-transparent blur-3xl animate-drift-1" />
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#455747]/22 via-[#68826b]/15 to-transparent blur-3xl animate-drift-2" />
        <div className="absolute top-1/2 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#d4a373]/20 via-[#f0c296]/15 to-transparent blur-3xl animate-drift-3" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#527357]/20 via-[#7fa385]/15 to-transparent blur-3xl animate-drift-1" />
        <div className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-[#c46849]/18 via-[#e28e75]/12 to-transparent blur-3xl animate-drift-2" />
        
        {/* Delicate subtle mesh vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#2d382e]/5 pointer-events-none" />
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Main Sales Funnel Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <WhatIsIt />
        <ObstaclesSolved />
        <BookPreview />
        <Bonuses />
        <TargetAudience />
        <Testimonials />
        <PricingOffer />
        <FaqSection />
      </main>

      {/* Footer with Karin Zeit contact buttons */}
      <Footer />

      {/* Live purchase confirmation notifications (Bottom Left) */}
      <RecentSalesNotification />

      {/* Floating CTA bar on mobile screens */}
      <StickyMobileCta />
    </div>
  );
}
