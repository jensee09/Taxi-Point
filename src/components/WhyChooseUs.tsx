import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, ThumbsUp, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const steps = [
    {
      step: '01',
      title: 'Tap Call or WhatsApp',
      desc: 'No apps to install, no complicated passwords or signup forms. Just one tap connects you to our 24x7 dispatcher.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Share Pickup & Destination',
      desc: 'Send your travel date, time, passenger count, and preferred car type (Hatchback, Sedan, Ertiga, Innova).',
      icon: Clock,
    },
    {
      step: '03',
      title: 'Confirm & Enjoy Your Ride',
      desc: 'We immediately lock your transparent fare and send your driver’s name, phone, and vehicle number.',
      icon: ShieldCheck,
    },
  ];

  const highlights = [
    {
      title: '24x7 Instant Dispatch',
      desc: 'Whether it is a 4 AM flight at Hirasar Airport or a late-night emergency from Rajkot Junction, we are on call.',
      icon: Clock,
    },
    {
      title: 'Sanitized, Chilled AC Cars',
      desc: 'Daily vacuumed, spotless seats, fragrant cabins, and ice-cold air conditioning on every highway trip.',
      icon: Sparkles,
    },
    {
      title: 'Verified Highway Chauffeurs',
      desc: 'Police verified, polite drivers who know Gujarat highways, temple timings, and authentic food stop spots.',
      icon: Award,
    },
    {
      title: 'Zero Hidden Surcharges',
      desc: 'Toll, parking, and driver allowances are agreed upfront. No shock charges or meter tampering.',
      icon: DollarSign,
    },
    {
      title: 'Flexible Stopovers',
      desc: 'Take tea breaks, breakfast stops, or temple darshan on your way without rigid app cancellation timeouts.',
      icon: ThumbsUp,
    },
    {
      title: 'GPS-Monitored Travel',
      desc: 'Live tracking enabled on fleet for safety of solo female commuters, elderly passengers, and families.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* How It Works Subsection */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Easy 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Three Taps. <span className="text-amber-400">Zero Complications.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              No endless OTP logins, surge gimmicks, or cancelled drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300 shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-400 flex items-center justify-center font-black text-xl mb-6 border border-amber-400/30 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-slate-800 absolute top-6 right-8 font-mono">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Subsection */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Customer Assurance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why Travelers Prefer <span className="text-amber-400">Rajkot Taxi Point</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Reliable transport backed by local expertise and verified fleet standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl transition flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{h.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA box */}
          <div className="mt-14 bg-gradient-to-r from-amber-500/20 via-slate-900 to-emerald-500/20 border border-amber-400/30 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ready to Book Your Taxi in Rajkot?
            </h3>
            <p className="text-sm text-slate-300">
              Send us your pickup details now. Our driver will be at your doorstep on time.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi right now. Please assist.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({displayNumber})</span>
              </a>

              <a
                href={getTelLink()}
                className="bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/40 font-bold px-6 py-3.5 rounded-xl text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
