import React, { useState } from 'react';
import { usePhone } from '../context/PhoneContext';
import { Phone, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp FAB */}
      <div className="fixed right-5 bottom-20 sm:bottom-8 z-40 flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#181c44]/95 text-white border border-[#25D366]/40 py-2 px-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in slide-in-from-right-4 duration-300">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-tight">Need a Cab in Rajkot?</p>
              <p className="text-[11px] text-slate-300">
                WhatsApp: <span className="text-orange-400 font-mono font-semibold">{displayNumber}</span>
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-slate-400 hover:text-white p-0.5 cursor-pointer"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={getWhatsAppLink('Hello Rajkot Taxi Point, I need a taxi. Please call or message me.')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.85)] whatsapp-glow transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Chat with Rajkot Taxi Point on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121431]/95 backdrop-blur-md border-t border-[#252b66] p-2.5 px-3 flex items-center gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
        <a
          href={getTelLink()}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1b1f48] border border-orange-500/40 text-orange-400 font-bold text-xs sm:text-sm active:bg-[#23285c] transition shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_18px_rgba(37,211,102,0.5)] active:scale-95 transition"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
