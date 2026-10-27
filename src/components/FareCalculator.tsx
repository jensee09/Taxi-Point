import React, { useState, useMemo } from 'react';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS, POPULAR_ROUTES, RAJKOT_PICKUP_POINTS, POPULAR_DESTINATIONS } from '../data/taxiData';
import { Calculator, MapPin, Navigation, Car, Calendar, Clock, ArrowRight, MessageSquare, Phone, Info, CheckCircle } from 'lucide-react';

export const FareCalculator: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const [tripType, setTripType] = useState<'oneway' | 'roundtrip' | 'airport' | 'local'>('oneway');
  const [pickup, setPickup] = useState(RAJKOT_PICKUP_POINTS[0]);
  const [destination, setDestination] = useState('Ahmedabad (Airport / City)');
  const [selectedCarId, setSelectedCarId] = useState('sedan');
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [travelTime, setTravelTime] = useState('07:30');

  const selectedCar = useMemo(() => {
    return FLEET_CARS.find((c) => c.id === selectedCarId) || FLEET_CARS[1];
  }, [selectedCarId]);

  // Estimate distance based on selected destination
  const matchedRoute = useMemo(() => {
    return POPULAR_ROUTES.find((r) => destination.toLowerCase().includes(r.to.toLowerCase()) || r.to.toLowerCase().includes(destination.toLowerCase()));
  }, [destination]);

  const estimatedDistance = useMemo(() => {
    if (tripType === 'airport') return 32;
    if (tripType === 'local') return 80;
    const baseKm = matchedRoute ? matchedRoute.distanceKm : 180;
    return tripType === 'roundtrip' ? baseKm * 2 : baseKm;
  }, [tripType, matchedRoute]);

  const estimatedDuration = useMemo(() => {
    if (tripType === 'airport') return '40 mins';
    if (tripType === 'local') return '8 Hours Local';
    if (matchedRoute) {
      return tripType === 'roundtrip' ? `${matchedRoute.duration} each way` : matchedRoute.duration;
    }
    return '3 to 4 hours';
  }, [tripType, matchedRoute]);

  const estimatedFare = useMemo(() => {
    if (tripType === 'airport') {
      if (selectedCar.category === 'hatchback') return 799;
      if (selectedCar.category === 'sedan') return 899;
      if (selectedCar.category === 'suv') return 1399;
      return 2499;
    }
    if (tripType === 'local') {
      return selectedCar.cityPackageRate;
    }
    // Outstation
    const rate = selectedCar.baseFarePerKm;
    const kmFare = estimatedDistance * rate;
    const driverAllowance = tripType === 'roundtrip' ? 400 : 300;
    return Math.round(kmFare + driverAllowance);
  }, [tripType, selectedCar, estimatedDistance]);

  const handleWhatsAppBooking = () => {
    const tripLabel =
      tripType === 'airport'
        ? 'Rajkot ⇄ Hirasar Airport Transfer'
        : tripType === 'local'
        ? 'Rajkot City Local (8 Hours / 80 Km)'
        : tripType === 'roundtrip'
        ? 'Outstation Round-Trip'
        : 'Outstation One-Way Drop';

    const msg = `Hello Rajkot Taxi Point, I generated a quote on your website:
• Trip Type: ${tripLabel}
• Pickup: ${pickup}
• Destination: ${tripType === 'local' ? 'Rajkot City Sightseeing' : destination}
• Car Model: ${selectedCar.name} (${selectedCar.tagline})
• Est. Distance: ${estimatedDistance} km
• Travel Date: ${travelDate} at ${travelTime}
• Estimated Fare: ~₹${estimatedFare.toLocaleString()}
Please verify driver availability and final booking confirmation.`;

    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Instant Taxi <span className="text-amber-400">Fare Estimator</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Calculate honest outstation, local, and Hirasar airport taxi fares with no hidden surcharges. Book instantly on WhatsApp.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Trip Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. Select Ride Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'oneway', label: 'One-Way Drop' },
                  { id: 'roundtrip', label: 'Round-Trip' },
                  { id: 'airport', label: 'Airport Taxi' },
                  { id: 'local', label: 'City 8h / 80km' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTripType(t.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition border ${
                      tripType === t.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Pickup Point (Rajkot)
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                >
                  {RAJKOT_PICKUP_POINTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  Destination
                </label>
                {tripType === 'local' ? (
                  <input
                    type="text"
                    disabled
                    value="Rajkot Full Day Sightseeing & Business"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-400 text-xs sm:text-sm"
                  />
                ) : tripType === 'airport' ? (
                  <input
                    type="text"
                    disabled
                    value="Rajkot Hirasar International Airport (HSR)"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-amber-300 text-xs sm:text-sm font-semibold"
                  />
                ) : (
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                  >
                    {POPULAR_DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* Select Vehicle Card Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. Choose Cab Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {FLEET_CARS.map((car) => {
                  const isSelected = selectedCarId === car.id;
                  return (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setSelectedCarId(car.id)}
                      className={`p-3 rounded-2xl border text-left transition relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg shadow-amber-400/10'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-2 bg-slate-900">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white truncate">{car.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}</p>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />}
                        </div>
                        <p className="text-[11px] text-amber-300 font-semibold mt-0.5">
                          ₹{car.baseFarePerKm}/km · {car.seats} seats
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Pickup Time
                </label>
                <input
                  type="time"
                  value={travelTime}
                  onChange={(e) => setTravelTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Fare Summary Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Fare Estimation Summary
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                All-Inclusive Quote
              </span>
            </div>

            {/* Selected Car Highlight */}
            <div className="flex items-center gap-4 py-4 border-b border-slate-800/80">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-20 h-14 object-cover rounded-xl border border-slate-800 bg-slate-900"
              />
              <div>
                <h4 className="font-bold text-white text-base">{selectedCar.name}</h4>
                <p className="text-xs text-amber-400">{selectedCar.tagline}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {selectedCar.seats} Passenger Capacity · Dual Chilled AC
                </p>
              </div>
            </div>

            {/* Route Stats */}
            <div className="grid grid-cols-2 gap-3 py-4 border-b border-slate-800/80 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-400">Total Distance:</span>
                <p className="text-sm font-bold text-white mt-0.5">~{estimatedDistance} KM</p>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-400">Estimated Travel Time:</span>
                <p className="text-sm font-bold text-white mt-0.5">{estimatedDuration}</p>
              </div>
            </div>

            {/* Fare Calculation Display */}
            <div className="py-5">
              <span className="text-xs text-slate-400">Estimated Total Fare:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 font-heading">
                  ₹{estimatedFare.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">approx.</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Includes vehicle fuel, chauffeur allowance & sanitized car
              </p>
            </div>

            {/* Booking CTAs */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 px-4 rounded-xl text-sm transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Confirm Ride on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getTelLink()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 font-bold text-xs transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline directly ({displayNumber})</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-slate-500 mt-4 leading-tight">
              *Toll, state border taxes and airport parking fees are payable as per actuals or can be bundled into a flat round-trip package.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
