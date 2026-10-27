import React, { useState } from 'react';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS } from '../data/taxiData';
import { CarCategory } from '../types';
import { Users, Briefcase, Snowflake, Phone, Check, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const OurCarsSection: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [activeTab, setActiveTab] = useState<CarCategory>('all');

  const filteredCars = FLEET_CARS.filter((car) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'hatchback') return car.category === 'hatchback';
    if (activeTab === 'sedan') return car.category === 'sedan';
    if (activeTab === 'suv') return car.category === 'suv';
    if (activeTab === 'group') return car.category === 'group';
    return true;
  });

  return (
    <section id="cars" className="py-20 sm:py-24 bg-[#141738] relative border-t border-[#222757]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Verified Fleet with Real Photos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our <span className="text-orange-500">Cars</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Choose from our clean, well-maintained, and air-conditioned fleet of real cars for local Rajkot trips, airport pickups, and outstation journeys.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {[
              { id: 'all', label: 'All Cars (' + FLEET_CARS.length + ')' },
              { id: 'sedan', label: 'Sedans (Dzire)' },
              { id: 'hatchback', label: 'Hatchbacks (Swift)' },
              { id: 'suv', label: 'SUVs & MPVs (Ertiga / Innova)' },
              { id: 'group', label: 'Tempo & Bus (Group)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CarCategory)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                    : 'bg-[#1b1f48] hover:bg-[#23285c] text-slate-300 border border-[#2e3470]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => {
            const bookingMsg = `Hello Rajkot Taxi Point, I would like to book the ${car.name} (${car.tagline}). Please share availability and current fare rates.`;
            return (
              <div
                key={car.id}
                className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/60 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-orange-500/10"
              >
                {/* Real Car Photo */}
                <div className="relative aspect-[16/10] bg-[#121431] overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {car.popular && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      Popular Choice
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-[#121431]/90 backdrop-blur-md border border-[#2b316c] px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-orange-400">
                    ₹{car.baseFarePerKm} / km
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mt-0.5">
                      {car.tagline}
                    </p>

                    {/* Spec Badges */}
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#252b66] text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 bg-[#141738] px-2.5 py-1.5 rounded-lg border border-[#252b66]">
                        <Users className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#141738] px-2.5 py-1.5 rounded-lg border border-[#252b66]">
                        <Briefcase className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.luggage} Bags</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#141738] px-2.5 py-1.5 rounded-lg border border-[#252b66]">
                        <Snowflake className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Dual AC</span>
                      </div>
                    </div>

                    {/* Features bullet points */}
                    <ul className="mt-4 space-y-1.5">
                      {car.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Recommended for */}
                    <p className="mt-4 text-xs text-slate-300 bg-[#121431] p-2.5 rounded-xl border border-[#252b66]">
                      <strong className="text-orange-400">Best For:</strong> {car.bestFor}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#252b66] space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Local 8h / 80km Rate:</span>
                      <strong className="text-white font-bold text-sm">₹{car.cityPackageRate}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={getWhatsAppLink(bookingMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] active:scale-95"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={getTelLink()}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#121431] hover:bg-[#1b1f48] text-orange-400 border border-orange-500/30 font-bold text-xs transition shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.2)] active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5 text-orange-400" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick jump to Book A Car */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Proceed to Book A Car</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
