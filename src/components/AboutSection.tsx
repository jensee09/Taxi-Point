import React from 'react';
import { ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Rajkot Cab Service',
      desc: 'Whether catching a morning flight at Hirasar Airport or arriving late at Rajkot Junction Railway Station, our cabs are always ready on call.',
      icon: Clock,
    },
    {
      title: 'Experienced Local Drivers',
      desc: 'Polite, licensed, and police-verified drivers who know Rajkot city shortcuts and Gujarat state highways (Ahmedabad, Somnath, Dwarka, Gir).',
      icon: Award,
    },
    {
      title: 'Clean & Maintained Fleet',
      desc: 'Spotless, vacuumed, and fragrant car cabins with chilled air conditioning, comfortable pushback seating, and ample boot luggage space.',
      icon: Sparkles,
    },
    {
      title: 'Clear & Honest Pricing',
      desc: 'Fares agreed before you travel. No hidden surge rates, no cancellation penalty tricks, and complete transparency on tolls and taxes.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#111432] relative border-t border-[#222757]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            Reliable Chauffeur & Taxi Service
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About <span className="text-orange-500">Rajkot Taxi Point</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Founded with a commitment to safe, comfortable, and affordable road travel across Saurashtra and Gujarat. We make cab booking simple, fast, and stress-free.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-[#181c44] border border-[#2d3472] hover:border-orange-500/60 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center font-bold text-xl mb-5 border border-orange-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Stats Card */}
        <div className="mt-12 sm:mt-14 bg-gradient-to-r from-[#171a41] via-[#1d2256] to-[#171a41] border border-[#31397e] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#2e3579]">
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 font-heading">10+ Years</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Saurashtra Highway Experience</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 font-heading">25,000+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Successful Trips Completed</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 font-heading">4.9 ★</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Customer Satisfaction</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 font-heading">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Yellow-Plate Licensed Fleet</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
