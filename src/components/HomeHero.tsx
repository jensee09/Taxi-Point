import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HomeHero: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#141738] overflow-hidden">
      {/* Background with real taxi car and highway photo - properly visible & responsive */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Rajkot Taxi Service Highway Cab"
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 lg:opacity-60 transition-transform duration-1000 scale-100 sm:scale-105"
        />
        {/* Responsive gradient overlay ensuring clear visibility of car photo while keeping text sharp */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#10132e]/95 via-[#141738]/80 to-[#181c45]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141738] via-transparent to-[#141738]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>Official Rajkot Cab Service</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              Simple & Easy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Taxi Booking in Rajkot
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow">
              Clean and sanitized cars with experienced drivers for <strong>Rajkot city rides</strong>, <strong>Hirasar Airport pickups</strong>, and outstation trips to <strong>Ahmedabad, Somnath, Dwarka</strong>, and across Gujarat.
            </p>

            {/* Quick Points (Without any 24x7) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No advance payment needed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hirasar airport transfer</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean & chilled AC cars</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fair and transparent rates</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book A Car Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi. Please share car availability and fare details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(37,211,102,0.65)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelLink()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl bg-[#1b1f48]/90 hover:bg-[#22275b] text-orange-400 border border-orange-500/30 font-bold text-sm sm:text-base transition shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_22px_rgba(249,115,22,0.25)] backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Hotline</span>
              </a>
            </div>

          </div>

          {/* Right Column: Real Car Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#181c44]/95 border border-[#2f3575] rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group backdrop-blur-md">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-[#121431]">
                <img
                  src="/images/sedan.jpg"
                  alt="Maruti Dzire Sedan Taxi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
                <div className="absolute bottom-3 right-3 bg-[#121431]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-orange-400 border border-[#2f3575]">
                  From ₹11 / km
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Maruti Dzire Sedan</h3>
                    <p className="text-xs text-orange-400 font-medium">4 Passengers · 3 Bags · Chilled AC</p>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Ready to Book
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Best choice for Rajkot city travel, Hirasar Airport drops, and outstation trips to Ahmedabad, Somnath, and Dwarka.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href="#cars"
                    className="w-full sm:flex-1 text-center py-2.5 px-3 rounded-xl bg-[#252b66] hover:bg-[#2e357e] text-white font-bold text-xs transition shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(37,43,102,0.5)]"
                  >
                    View All Cars →
                  </a>
                  <a
                    href={getWhatsAppLink('Hello Rajkot Taxi Point, I would like to book a Maruti Dzire Sedan.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
