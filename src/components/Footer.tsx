import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Share2, 
  ShieldAlert, 
  Check, 
  ExternalLink,
  Heart
} from 'lucide-react';

interface SocialLink {
  name: string;
  label: string;
  url: string;
  icon: React.ReactNode;
  accentColor: string;
  hoverBg: string;
  borderHover: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    label: '@karinzeit',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    accentColor: 'text-[#E1306C]',
    hoverBg: 'hover:bg-[#E1306C]/10',
    borderHover: 'hover:border-[#E1306C]/40',
    icon: <Instagram className="w-4 h-4 text-[#E1306C]" />,
  },
  {
    name: 'Facebook Profil',
    label: 'Karin Zeit',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    accentColor: 'text-[#1877F2]',
    hoverBg: 'hover:bg-[#1877F2]/10',
    borderHover: 'hover:border-[#1877F2]/40',
    icon: <Facebook className="w-4 h-4 text-[#1877F2]" />,
  },
  {
    name: 'Facebook Seite',
    label: 'Karin Zeit Official',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    accentColor: 'text-[#1877F2]',
    hoverBg: 'hover:bg-[#1877F2]/10',
    borderHover: 'hover:border-[#1877F2]/40',
    icon: <Facebook className="w-4 h-4 text-[#1877F2]" />,
  },
  {
    name: 'TikTok',
    label: '@karinzeit',
    url: 'https://www.tiktok.com/@karinzeit',
    accentColor: 'text-black dark:text-white',
    hoverBg: 'hover:bg-black/5',
    borderHover: 'hover:border-black/30',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    label: '@karinzeit',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    accentColor: 'text-[#FF0000]',
    hoverBg: 'hover:bg-[#FF0000]/10',
    borderHover: 'hover:border-[#FF0000]/40',
    icon: <Youtube className="w-4 h-4 text-[#FF0000]" />,
  },
  {
    name: 'Threads',
    label: '@karinzeit',
    url: 'https://www.threads.com/@karinzeit',
    accentColor: 'text-neutral-900',
    hoverBg: 'hover:bg-neutral-900/10',
    borderHover: 'hover:border-neutral-900/40',
    icon: (
      <svg className="w-4 h-4 fill-current text-neutral-900" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.463 0 4.72-.888 6.476-2.37l-1.636-1.922C15.485 18.732 13.82 19.3 12 19.3c-4.032 0-7.3-3.268-7.3-7.3s3.268-7.3 7.3-7.3c3.967 0 7.15 3.167 7.295 7.108.012.338.005.744-.122 1.134-.234.72-1.018 1.458-2.223 1.458-1.042 0-1.89-.64-1.89-1.6V8.6h-2.3v1.17c-.6-.78-1.57-1.27-2.71-1.27-2.35 0-4.05 1.83-4.05 4.1 0 2.3 1.74 4.15 4.12 4.15 1.34 0 2.45-.62 3.05-1.58.55 1.11 1.63 1.88 3.15 1.88 2.37 0 4.09-1.66 4.47-3.32.22-.95.19-1.87.16-2.5C23.01 6.84 18.05 2 12 2zm0 12.2c-1.32 0-2.23-.97-2.23-2.2s.91-2.2 2.23-2.2c1.33 0 2.24.97 2.24 2.2s-.91 2.2-2.24 2.2z"/>
      </svg>
    ),
  },
  {
    name: 'Kwai',
    label: '@kariningrid673',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    accentColor: 'text-[#FF5000]',
    hoverBg: 'hover:bg-[#FF5000]/10',
    borderHover: 'hover:border-[#FF5000]/40',
    icon: (
      <span className="w-4 h-4 rounded-full bg-[#FF5000] text-white font-bold text-[9px] flex items-center justify-center">
        K
      </span>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2620] text-[#ded9ce] pt-16 pb-28 md:pb-16 border-t border-[#333d34]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Section with Brand & Social Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#313c33]">
          
          {/* Column 1: Karin Zeit Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#455747] text-white flex items-center justify-center font-editorial font-bold text-base">
                K
              </span>
              <span className="font-editorial text-xl font-bold tracking-tight text-white">
                Karin Zeit
              </span>
            </div>
            
            <p className="text-sm text-[#aba599] leading-relaxed">
              Praktische Gesundheitsleitfäden für den modernen Alltag. Zielgerichtete, verständliche Orientierung ohne komplizierte Fachbegriffe – damit Sie Ihren Körper besser verstehen und wieder unbeschwert leben können.
            </p>

            <div className="pt-2 text-xs text-[#8f887b] space-y-1">
              <p>📍 Verifizierter Hotmart® Partner</p>
              <p>🔒 256-Bit SSL Verschlüsselter Kaufprozess</p>
            </div>
          </div>

          {/* Column 2: Social Media Contact Buttons (User Explicit Request) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Folgen & Kontaktieren Sie Karin Zeit:
              </h4>
              <span className="text-xs text-[#a0998c]">Offizielle Kanäle</span>
            </div>

            <p className="text-xs text-[#aba599] mb-5">
              Klicken Sie auf die Buttons, um sich direkt auf Ihren bevorzugten Netzwerken zu verbinden:
            </p>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-3 rounded-xl bg-[#28322a] border border-[#3c493e] ${social.hoverBg} ${social.borderHover} transition-all duration-200 text-left`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-[#1f2620] border border-[#3b473d] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {social.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate group-hover:text-white">
                        {social.name}
                      </div>
                      <div className="text-[11px] text-[#9a9488] truncate">
                        {social.label}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#736e63] group-hover:text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="py-8 border-b border-[#313c33] text-xs text-[#9c9588] leading-relaxed space-y-3">
          <div className="flex items-start gap-2.5 bg-[#252e26] p-4 rounded-xl border border-[#3b473d]">
            <ShieldAlert className="w-5 h-5 text-[#c46849] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-1">
                Wichtiger medizinischer Hinweis:
              </strong>
              Die in diesem E-Book ("SODBRENNEN") und auf dieser Website bereitgestellten Inhalte dienen ausschließlich zu Informations- und Bildungszwecken. Sie stellen keine medizinische Beratung, Diagnose oder Behandlungsempfehlung dar und können das persönliche Gespräch oder die Untersuchung durch einen qualifizierten Facharzt nicht ersetzen. Wenden Sie sich bei akuten, anhaltenden oder unklaren Beschwerden stets an einen Arzt.
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827b6f]">
          <p>© {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6 text-[#9a9488]">
            <span className="hover:text-white transition-colors cursor-pointer">Impressum</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">AGB & Widerruf</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
