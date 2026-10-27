import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { POPULAR_ROUTES } from '../data/taxiData';
import { Navigation, Clock, MapPin, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const RoutesSection: React.FC = () => {
  const { getWhatsAppLink } = usePhone();

  return (
    <section id="routes" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            Popular Outstation Routes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Outstation Cabs from <span className="text-amber-400">Rajkot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            One-way drop or round-trip taxi service across Gujarat. Transparent fares, well-maintained highway cars, and experienced Gujarati drivers.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => {
            const routeMsg = `Hello Rajkot Taxi Point, I want to book a taxi from ${route.from} to ${route.to}. Distance is approx ${route.distanceKm} km. Please provide driver availability and best one-way / round-trip fare.`;
            return (
              <div
                key={route.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-400/5"
              >
                <div>
                  {/* Origin to Destination */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-300">{route.from}</span>
                      <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                        {route.to}
                      </span>
                    </div>
                  </div>

                  {/* Route metadata */}
                  <p className="text-xs text-amber-400/90 font-medium mb-3">
                    {route.routeVia}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {route.highlight}
                  </p>

                  {/* Distance and Duration badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span><strong>{route.distanceKm}</strong> km</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-5 pt-3 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Starting from</span>
                    <span className="text-lg font-black text-white font-heading">
                      ₹{route.sedanFareEst.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-amber-400 ml-1 font-semibold">(Sedan)</span>
                  </div>

                  <a
                    href={getWhatsAppLink(routeMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Fare</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Route Box */}
        <div className="mt-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            Don't see your specific town or village in Saurashtra? We cover every corner of Gujarat & western India.
          </p>
          <a
            href={getWhatsAppLink('Hello Rajkot Taxi Point, I need a taxi for a custom route. Pickup: Rajkot. Destination: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-amber-400 hover:text-amber-300 font-bold text-sm underline underline-offset-4"
          >
            <MessageSquare className="w-4 h-4" />
            Ask for Custom Route Pricing on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
