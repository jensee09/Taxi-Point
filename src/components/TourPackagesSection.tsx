import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { TOUR_PACKAGES } from '../data/taxiData';
import { Compass, Calendar, Check, MessageSquare, ArrowRight, Star } from 'lucide-react';

export const TourPackagesSection: React.FC = () => {
  const { getWhatsAppLink } = usePhone();

  return (
    <section id="packages" className="py-24 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Saurashtra Tourism & Yatra
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Curated <span className="text-amber-400">Gujarat Pilgrimage</span> & Holiday Cabs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Hassle-free multi-day packages with dedicated driver, vehicle fuel, and sightseeing coverage. Custom itineraries available.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => {
            const tourMsg = `Hello Rajkot Taxi Point, I am interested in the "${pkg.title}" (${pkg.days}) package. Please share available dates, hotel pickup details, and complete itinerary.`;
            return (
              <div
                key={pkg.id}
                className="bg-slate-950 border border-slate-800 hover:border-amber-400/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group shadow-xl hover:shadow-2xl hover:shadow-amber-400/10"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{pkg.days}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-5">{pkg.tagline}</p>

                  {/* Sightseeing Covered */}
                  <div className="space-y-2.5 pb-6 border-b border-slate-800">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Places Covered:
                    </p>
                    <ul className="space-y-2">
                      {pkg.places.map((place, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vehicle Pricing Tiers */}
                  <div className="py-5 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Sedan (Dzire 4 Seats):</span>
                      <strong className="text-white font-mono font-bold">₹{pkg.sedanPrice.toLocaleString()}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Ertiga (6 Seats):</span>
                      <strong className="text-amber-400 font-mono font-bold">₹{pkg.ertigaPrice.toLocaleString()}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Innova Crysta (7 Seats):</span>
                      <strong className="text-amber-300 font-mono font-bold">₹{pkg.crystaPrice.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={getWhatsAppLink(tourMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire Package on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
