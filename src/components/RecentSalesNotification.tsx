import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, BookOpen, X, ShieldCheck } from 'lucide-react';

interface SaleNotification {
  id: number;
  timeAgo: string;
  location: string;
  type: string;
}

const mockPurchases: SaleNotification[] = [
  { id: 1, timeAgo: 'Vor 2 Minuten', location: 'München, Deutschland', type: 'E-Book Ratgeber (PDF)' },
  { id: 2, timeAgo: 'Vor 5 Minuten', location: 'Wien, Österreich', type: 'E-Book Ratgeber + Notfallplan' },
  { id: 3, timeAgo: 'Vor 9 Minuten', location: 'Hamburg, Deutschland', type: 'E-Book Ratgeber (PDF)' },
  { id: 4, timeAgo: 'Vor 14 Minuten', location: 'Zürich, Schweiz', type: 'E-Book Ratgeber + Symptomtagebuch' },
  { id: 5, timeAgo: 'Vor 18 Minuten', location: 'Berlin, Deutschland', type: 'E-Book Ratgeber (PDF)' },
  { id: 6, timeAgo: 'Vor 23 Minuten', location: 'Köln, Deutschland', type: 'E-Book Ratgeber (PDF)' },
  { id: 7, timeAgo: 'Vor 31 Minuten', location: 'Frankfurt am Main, Deutschland', type: 'E-Book Ratgeber + Notfallplan' },
  { id: 8, timeAgo: 'Vor 39 Minuten', location: 'Stuttgart, Deutschland', type: 'E-Book Ratgeber (PDF)' },
];

export const RecentSalesNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // Cycle notifications: visible for 6s, hidden for 5s
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % mockPurchases.length);
          setIsVisible(true);
        }
      }, 4500);
    }, 11000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = mockPurchases[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[340px] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#e4ded5] rounded-xl shadow-lg shadow-black/10 p-3.5 flex items-start gap-3"
          >
            {/* Visual Icon */}
            <div className="relative shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-lg bg-[#f0f5f1] border border-[#d6e3d8] flex items-center justify-center text-[#3c6343]">
                <BookOpen className="w-5 h-5 text-[#406848]" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white ring-2 ring-white">
                <CheckCircle2 className="w-3 h-3" />
              </span>
            </div>

            {/* Notification Text (Strictly no user names) */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  Kauf bestätigt
                </span>
                <span className="text-[11px] text-[#78857a]">{current.timeAgo}</span>
              </div>
              
              <p className="text-xs font-semibold text-[#1e2420] truncate">
                {current.type}
              </p>
              
              <div className="flex items-center gap-1 text-[11px] text-[#556357] mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Aus {current.location}</span>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="text-[#9ea89f] hover:text-[#2d382e] transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
              title="Schließen"
              aria-label="Benachrichtigung schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
