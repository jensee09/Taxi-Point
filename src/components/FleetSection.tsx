import React, { useState } from 'react';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS } from '../data/taxiData';
import { CarCategory, FleetCar } from '../types';
import { Users, Briefcase, Snowflake, Phone, MessageSquare, Check, Sparkles, Shield, Fuel } from 'lucide-react';

export const FleetSection: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [activeTab, setActiveTab] = useState<CarCategory>('all');
  const [selectedPreviewCar, setSelectedPreviewCar] = useState<FleetCar | null>(null);

  const filteredFleet = FLEET_CARS.filter((car) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'hatchback') return car.category === 'hatchback';
    if (activeTab === 'sedan') return car.category === 'sedan';
    if (activeTab === 'suv') return car.category === 'suv';
    if (activeTab === 'group') return car.category === 'group';
    return true;
  });

  return (
    <section id="fleet" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Commercial Yellow Plate Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Real Car Fleet in <span className="text-amber-400">Rajkot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From affordable city hatchbacks and executive Dzire sedans to spacious Innova Crysta SUVs and 17-seater Tempo Travellers. All cabs are sanitized and GPS-enabled.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Fleet (' + FLEET_CARS.length + ')' },
              { id: 'sedan', label: 'Dzire Sedans' },
              { id: 'hatchback', label: 'Hatchbacks' },
              { id: 'suv', label: 'Ertiga & Innova MPVs' },
              { id: 'group', label: 'Tempo & Buses' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CarCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car) => {
            const bookingMsg = `Hello Rajkot Taxi Point, I want to book the ${car.name} (${car.tagline}). Please share availability and best fare for my trip.`;
            return (
              <div
                key={car.id}
                className="group bg-slate-950 rounded-3xl border border-slate-800 hover:border-amber-400/60 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-400/10"
              >
                {/* Real Car Image Area */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {car.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      ★ Top Customer Choice
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-amber-300">
                    From ₹{car.baseFarePerKm}/km
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-xs font-medium text-amber-400/90 mt-0.5">
                          {car.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                        <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{car.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                        <Briefcase className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{car.luggage} Bags</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                        <Snowflake className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Dual AC</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="mt-4 space-y-1.5">
                      {car.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best for */}
                    <p className="mt-4 text-xs text-slate-400 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60">
                      <strong className="text-slate-300 font-semibold">Recommended for:</strong> {car.bestFor}
                    </p>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Local 8h/80km Package:</span>
                      <strong className="text-white font-bold text-sm">₹{car.cityPackageRate}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={getWhatsAppLink(bookingMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md shadow-emerald-600/20"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={getTelLink()}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 font-bold text-xs transition"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet guarantee notice */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30 text-xl font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a customized vehicle or specific car model?</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                We also arrange Mercedes, Audi, BMW for weddings, VIP convoys, and 35+ seater buses on advance request.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink('Hello Rajkot Taxi Point, I need a special custom car / bus for an event. Please contact me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-lg shadow-amber-400/20"
          >
            Ask for Custom Vehicle
          </a>
        </div>

      </div>
    </section>
  );
};
