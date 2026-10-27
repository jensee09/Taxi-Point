import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const DemoPhoneBanner: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  return (
    <div className="bg-[#0f122d] border-b border-[#252b66] text-slate-300 px-4 py-2 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Active Service
          </span>
          <span className="text-slate-300 text-xs sm:text-sm">
            Rajkot Hotline & WhatsApp:
          </span>
          <a
            href={getTelLink()}
            className="text-white font-mono font-bold hover:text-orange-400 transition"
          >
            {displayNumber}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to inquire about cab availability.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getTelLink()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1b1f48] hover:bg-[#23285c] text-orange-400 border border-orange-500/30 font-bold text-xs transition"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
