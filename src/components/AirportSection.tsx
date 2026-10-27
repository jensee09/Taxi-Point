import React from 'react';
import { usePhone } from '../context/PhoneContext';
import { Plane, Clock, ShieldCheck, UserCheck, MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const AirportSection: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const airportPackages = [
    {
      vehicle: 'Dzire / Sedan Cab',
      seats: '4 Passengers',
      luggage: '3 Suitcases',
      fare: '₹899',
      features: ['Flight tracking', 'Chilled AC', 'Zero waiting charges up to 45 mins', 'Doorstep pickup']
    },
    {
      vehicle: 'Maruti Ertiga MPV',
      seats: '6 Passengers',
      luggage: '4 Suitcases',
      fare: '₹1,399',
      features: ['Extra luggage space', 'Family comfort', 'Chilled roof AC', 'Terminal pickup']
    },
    {
      vehicle: 'Innova Crysta Luxury',
      seats: '7 Passengers',
      luggage: '5 Suitcases',
      fare: '₹1,899',
      features: ['Executive VIP ride', 'Chauffeur meet & greet', 'Plush captain seats', 'Bottled water']
    }
  ];

  return (
    <section id="airport" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual and Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src="/images/airport-taxi.jpg"
                alt="Rajkot Hirasar Airport Taxi Pickup"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Plane className="w-3.5 h-3.5" />
                <span>Hirasar Airport (HSR) Official Service</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-xs">
                <div className="flex items-center justify-between text-amber-300 font-bold mb-1">
                  <span>Rajkot City ⇄ Hirasar Airport</span>
                  <span>~30-40 Mins Drive</span>
                </div>
                <p className="text-slate-300">
                  Fixed transparent fares from 150ft Ring Road, Kalawad Road, Railway Station, and anywhere in Rajkot.
                </p>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-center">
                <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-white">24x7 Flights</p>
                <p className="text-[11px] text-slate-400">Early & midnight</p>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-center">
                <UserCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-white">Meet & Greet</p>
                <p className="text-[11px] text-slate-400">Terminal placard</p>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-center">
                <ShieldCheck className="w-5 h-5 text-sky-400 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-white">Delay Protected</p>
                <p className="text-[11px] text-slate-400">We track flights</p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Packages */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Plane className="w-3.5 h-3.5 text-amber-400" />
                Airport Shuttle & Cabs
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Rajkot to <span className="text-amber-400">Hirasar International Airport</span> Taxi
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Traveling to or from Rajkot’s new greenfield Hirasar Airport (HSR)? Never worry about missing your flight or finding a ride late at night. Our drivers track your incoming/outgoing flight in real-time.
              </p>
            </div>

            {/* Airport Cab Packages */}
            <div className="space-y-3">
              {airportPackages.map((pkg, idx) => {
                const airportMsg = `Hello Rajkot Taxi Point, I need an airport taxi (${pkg.vehicle}) for Hirasar Airport. Please confirm booking for my flight.`;
                return (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 p-4 rounded-2xl transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base">{pkg.vehicle}</h4>
                        <span className="text-[11px] font-semibold text-slate-400">
                          ({pkg.seats} · {pkg.luggage})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                        {pkg.features.map((f, i) => (
                          <span key={i} className="text-xs text-slate-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                      <div className="text-right">
                        <span className="text-lg font-black text-amber-400 font-heading">{pkg.fare}</span>
                        <span className="text-[10px] text-slate-500 block">Flat city rate</span>
                      </div>
                      <a
                        href={getWhatsAppLink(airportMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Book Airport Cab
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I have an upcoming flight at Hirasar Airport and want to schedule a pickup.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-amber-400/20 flex items-center gap-2"
              >
                <Plane className="w-4 h-4" />
                <span>Pre-Book Airport Pickup / Drop</span>
              </a>

              <a
                href={getTelLink()}
                className="bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-400/30 font-bold px-5 py-3.5 rounded-xl text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Airport Desk: {displayNumber}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
