import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#141738] relative border-t border-[#222757]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            Customer Support & Booking
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Have a question or need an urgent cab? Call or message our Rajkot dispatch team anytime.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-[#181c44] border border-[#2b316c] hover:border-emerald-500/60 rounded-3xl p-6 transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold text-xl mb-4 border border-[#25D366]/30">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-300 mb-3">Fastest way to get car photos and fare confirmation.</p>
              <p className="text-sm font-mono font-bold text-[#25D366]">{displayNumber}</p>
            </div>
            <a
              href={getWhatsAppLink('Hello Rajkot Taxi Point, I need assistance with taxi booking.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full text-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_6px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>

          {/* Card 2: Phone Calling */}
          <div className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/60 rounded-3xl p-6 transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center font-bold text-xl mb-4 border border-orange-500/30">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Phone Call</h3>
              <p className="text-xs text-slate-300 mb-3">Direct line to our Rajkot taxi control desk.</p>
              <p className="text-sm font-mono font-bold text-orange-400">{displayNumber}</p>
            </div>
            <a
              href={getTelLink()}
              className="mt-5 w-full text-center py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_6px_18px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.55)] active:scale-95"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Hotline →</span>
            </a>
          </div>

          {/* Card 3: Office Address */}
          <div className="bg-[#181c44] border border-[#2b316c] hover:border-sky-500/60 rounded-3xl p-6 transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center font-bold text-xl mb-4 border border-sky-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Office Location</h3>
              <p className="text-xs text-slate-300 mb-2">Kalawad Road & 150ft Ring Road, Rajkot, Gujarat - 360005</p>
              <p className="text-xs text-slate-400">Serving all areas in Rajkot city & Hirasar Airport</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rajkot+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full text-center py-2.5 px-3 rounded-xl bg-[#232963] hover:bg-[#2d347e] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_18px_rgba(35,41,99,0.5)] active:scale-95"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="bg-[#181c44] border border-[#2b316c] hover:border-purple-500/60 rounded-3xl p-6 transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-xl mb-4 border border-purple-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Service Hours</h3>
              <p className="text-xs text-slate-300 mb-2">Open Daily for City & Outstation Rides</p>
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active dispatch right now
              </p>
            </div>
            <div className="mt-5 bg-[#121431] p-2.5 rounded-xl border border-[#282e66] text-center text-xs text-slate-400">
              Flight & train arrivals monitored
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
