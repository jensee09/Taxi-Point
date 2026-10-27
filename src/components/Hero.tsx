import React, { useState } from 'react';
import { usePhone } from '../context/PhoneContext';
import { RAJKOT_PICKUP_POINTS, POPULAR_DESTINATIONS, FLEET_CARS } from '../data/taxiData';
import { Phone, MessageSquare, Shield, Clock, MapPin, Calendar, Car, ArrowRight, CheckCircle2, Plane, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const [tripType, setTripType] = useState<'outstation' | 'airport' | 'local'>('outstation');
  const [pickup, setPickup] = useState(RAJKOT_PICKUP_POINTS[0]);
  const [destination, setDestination] = useState(POPULAR_DESTINATIONS[1]); // Ahmedabad
  const [selectedCar, setSelectedCar] = useState('sedan');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('08:00');

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    const carObj = FLEET_CARS.find((c) => c.id === selectedCar) || FLEET_CARS[1];
    const tripName =
      tripType === 'airport'
        ? 'Hirasar Airport Transfer'
        : tripType === 'local'
        ? 'Rajkot Local 8hr/80km'
        : 'Outstation Trip';

    const message = `Hello Rajkot Taxi Point! I want to enquire/book a cab:
• Service: ${tripName}
• Pickup: ${pickup}
• Destination: ${tripType === 'local' ? 'Rajkot City Local' : destination}
• Car: ${carObj.name} (${carObj.tagline})
• Date & Time: ${date} at ${time}
Please share current fare, toll details, and vehicle availability.`;

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  const marqueeRoutes = [
    'Rajkot ⇄ Hirasar Airport',
    'Rajkot ⇄ Ahmedabad (Expressway)',
    'Rajkot ⇄ Somnath Temple',
    'Rajkot ⇄ Dwarka Darshan',
    'Rajkot ⇄ Jamnagar Reliance',
    'Rajkot ⇄ Junagadh & Girnar',
    'Rajkot ⇄ Sasan Gir Lion Safari',
    'Rajkot ⇄ Diu Beach',
    'Rajkot ⇄ Morbi Ceramic Zone',
    'Rajkot ⇄ Surat Diamond Hub'
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Rajkot Highway Taxi Service"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Trust Factors */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Verified 24x7 Cab & Airport Service in Rajkot</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.12] tracking-tight">
              Reliable Rajkot Taxi. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Real Cars. Real Comfort.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Book sanitized Hatchbacks, Dzire Sedans, Ertiga MPVs, and luxury Innova Crysta cabs for Rajkot local rides, <strong>Hirasar International Airport</strong> drops, and outstation pilgrimages across Saurashtra.
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-200 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero advance deposit needed</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-200 backdrop-blur-sm">
                <Plane className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-time Hirasar airport pickup</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-200 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Police verified drivers</span>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I need a taxi. Please call me back with the best fare.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us: {displayNumber}</span>
              </a>

              <a
                href={getTelLink()}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-400/40 font-bold text-base transition shadow-lg"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Trust rating badge */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">
                <strong className="text-white font-bold">4.9 / 5</strong> rating from 1,850+ Saurashtra travelers
              </span>
            </div>
          </div>

          {/* Right Column: Instant Booking & Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-amber-400/30 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                    Instant Cab Booking
                  </span>
                  <h3 className="text-xl font-bold text-white">Book or Get Fare Quote</h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available 24x7
                </div>
              </div>

              {/* Trip Type Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl mb-5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setTripType('outstation');
                    setDestination(POPULAR_DESTINATIONS[1]);
                  }}
                  className={`py-2 text-xs font-semibold rounded-lg transition ${
                    tripType === 'outstation'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Outstation
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTripType('airport');
                    setDestination('Hirasar International Airport (HSR)');
                  }}
                  className={`py-2 text-xs font-semibold rounded-lg transition ${
                    tripType === 'airport'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Airport Cab
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTripType('local');
                    setDestination('Rajkot City Local (8hr/80km)');
                  }}
                  className={`py-2 text-xs font-semibold rounded-lg transition ${
                    tripType === 'local'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  City Local
                </button>
              </div>

              <form onSubmit={handleQuickBook} className="space-y-4">
                {/* Pickup */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Pickup Location in Rajkot
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                  >
                    {RAJKOT_PICKUP_POINTS.map((loc) => (
                      <option key={loc} value={loc} className="bg-slate-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Destination / Drop Location
                  </label>
                  {tripType === 'local' ? (
                    <input
                      type="text"
                      disabled
                      value="Rajkot Full Day City Sightseeing (8h / 80km)"
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-300 text-xs sm:text-sm"
                    />
                  ) : (
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                    >
                      {POPULAR_DESTINATIONS.map((loc) => (
                        <option key={loc} value={loc} className="bg-slate-900 text-white">
                          {loc}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Car Selection */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-sky-400" />
                    Select Vehicle Class
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {FLEET_CARS.slice(0, 4).map((car) => (
                      <button
                        type="button"
                        key={car.id}
                        onClick={() => setSelectedCar(car.id)}
                        className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition ${
                          selectedCar === car.id
                            ? 'border-amber-400 bg-amber-400/10 text-white'
                            : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-9 h-7 object-cover rounded shadow"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold truncate text-white">{car.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}</p>
                          <p className="text-[10px] text-amber-300 font-semibold">{car.seats} seats · ₹{car.baseFarePerKm}/km</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-400 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Pickup Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-400 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Booking Request on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Opens directly in WhatsApp to <span className="text-amber-300 font-mono font-medium">{displayNumber}</span> with full details
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="relative z-10 w-full bg-amber-400 text-slate-950 py-2.5 overflow-hidden font-bold text-xs uppercase tracking-widest border-y border-amber-300 shadow-lg">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeRoutes.concat(marqueeRoutes).map((route, idx) => (
            <span key={idx} className="mx-6 flex items-center gap-2">
              <span className="text-slate-900">✦</span>
              <span>{route}</span>
              <span className="text-slate-900 font-normal opacity-70">| Best Fare Guarantee</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
