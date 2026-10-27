import React, { useState, useMemo } from 'react';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS, POPULAR_ROUTES, RAJKOT_PICKUP_POINTS, POPULAR_DESTINATIONS } from '../data/taxiData';
import { Car, MapPin, Navigation, Calendar, Clock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const BookACarSection: React.FC = () => {
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

  // Estimate distance
  const matchedRoute = useMemo(() => {
    return POPULAR_ROUTES.find(
      (r) =>
        destination.toLowerCase().includes(r.to.toLowerCase()) ||
        r.to.toLowerCase().includes(destination.toLowerCase())
    );
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
    const rate = selectedCar.baseFarePerKm;
    const kmFare = estimatedDistance * rate;
    const driverAllowance = tripType === 'roundtrip' ? 400 : 300;
    return Math.round(kmFare + driverAllowance);
  }, [tripType, selectedCar, estimatedDistance]);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const tripLabel =
      tripType === 'airport'
        ? 'Rajkot to Hirasar Airport Transfer'
        : tripType === 'local'
        ? 'Rajkot City Local (8 Hours / 80 Km)'
        : tripType === 'roundtrip'
        ? 'Outstation Round-Trip'
        : 'Outstation One-Way Drop';

    const msg = `Hello Rajkot Taxi Point, I want to book a car:
• Service: ${tripLabel}
• Pickup: ${pickup}
• Destination: ${tripType === 'local' ? 'Rajkot City Local' : destination}
• Vehicle: ${selectedCar.name} (${selectedCar.tagline})
• Est. Distance: ${estimatedDistance} km
• Travel Date: ${travelDate} at ${travelTime}
• Estimated Fare: ~₹${estimatedFare.toLocaleString()}
Please confirm availability and driver assignment.`;

    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-20 sm:py-24 bg-[#111432] relative border-t border-[#222757]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5 text-orange-400" />
            Easy 3-Tap Booking
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Book <span className="text-orange-500">A Car</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Fill your trip details below to get an instant fair quote. Tap to send directly on WhatsApp or call our booking desk.
          </p>
        </div>

        {/* Booking Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form (7 cols) */}
          <form
            onSubmit={handleWhatsAppBooking}
            className="lg:col-span-7 bg-[#181c44] border border-[#2b316c] rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Trip Type */}
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2.5">
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
                    onClick={() => {
                      setTripType(t.id as any);
                      if (t.id === 'airport') {
                        setDestination('Hirasar International Airport (HSR)');
                      }
                    }}
                    className={`py-2.5 px-2.5 sm:px-3 rounded-xl text-xs sm:text-sm font-bold transition border cursor-pointer ${
                      tripType === t.id
                        ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/25'
                        : 'bg-[#121431] text-slate-300 border-[#252b66] hover:border-[#384196]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  Pickup Point in Rajkot
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
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
                  Drop Destination
                </label>
                {tripType === 'local' ? (
                  <input
                    type="text"
                    disabled
                    value="Rajkot Full Day City Sightseeing (8h/80km)"
                    className="w-full bg-[#121431]/60 border border-[#252b66] rounded-xl py-2.5 px-3 text-slate-400 text-xs sm:text-sm"
                  />
                ) : tripType === 'airport' ? (
                  <input
                    type="text"
                    disabled
                    value="Rajkot Hirasar International Airport (HSR)"
                    className="w-full bg-[#121431]/60 border border-[#252b66] rounded-xl py-2.5 px-3 text-orange-400 font-semibold text-xs sm:text-sm"
                  />
                ) : (
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
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

            {/* 3. Choose Car Model */}
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                2. Choose Car Model
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {FLEET_CARS.map((car) => {
                  const isSelected = selectedCarId === car.id;
                  return (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setSelectedCarId(car.id)}
                      className={`p-2.5 rounded-2xl border text-left transition relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-orange-500/15 border-orange-500 text-white shadow-lg'
                          : 'bg-[#121431] border-[#252b66] text-slate-400 hover:border-[#333b8c]'
                      }`}
                    >
                      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-2 bg-[#0d0f26]">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white truncate">{car.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}</p>
                        <p className="text-[11px] text-orange-400 font-semibold mt-0.5">
                          ₹{car.baseFarePerKm}/km · {car.seats} seats
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Pickup Time
                </label>
                <input
                  type="time"
                  value={travelTime}
                  onChange={(e) => setTravelTime(e.target.value)}
                  className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Submit directly with real WhatsApp icon */}
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 sm:py-4 px-4 rounded-xl text-sm sm:text-base transition shadow-[0_10px_30px_-3px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_35px_-3px_rgba(37,211,102,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Send Booking Request on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Fare Summary & Confirmation Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#181c44] border-2 border-orange-500/50 rounded-3xl p-5 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#282e66]">
              <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
                Trip & Fare Summary
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Transparent Rate
              </span>
            </div>

            {/* Car Preview */}
            <div className="flex items-center gap-4 py-4 border-b border-[#282e66]">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-20 h-14 object-cover rounded-xl border border-[#282e66] bg-[#121431]"
              />
              <div>
                <h4 className="font-bold text-white text-base">{selectedCar.name}</h4>
                <p className="text-xs text-orange-400 font-medium">{selectedCar.tagline}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {selectedCar.seats} Seats · {selectedCar.luggage} Bags · Chilled AC
                </p>
              </div>
            </div>

            {/* Distance & Duration */}
            <div className="grid grid-cols-2 gap-3 py-4 border-b border-[#282e66] text-xs">
              <div className="bg-[#121431] p-3 rounded-xl border border-[#252b66]">
                <span className="text-slate-400">Total Distance:</span>
                <p className="text-sm font-bold text-white mt-0.5">~{estimatedDistance} KM</p>
              </div>
              <div className="bg-[#121431] p-3 rounded-xl border border-[#252b66]">
                <span className="text-slate-400">Travel Duration:</span>
                <p className="text-sm font-bold text-white mt-0.5">{estimatedDuration}</p>
              </div>
            </div>

            {/* Total Fare */}
            <div className="py-5">
              <span className="text-xs text-slate-400">Estimated Total Fare:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-orange-400 font-heading">
                  ₹{estimatedFare.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">approx.</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Includes car fuel, driver allowance & clean vehicle
              </p>
            </div>

            {/* Call hotline */}
            <div className="space-y-3 pt-2 border-t border-[#282e66]">
              <a
                href={getTelLink()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121431] hover:bg-[#1b1f48] text-orange-400 border border-orange-500/30 font-bold text-xs sm:text-sm transition shadow-[0_4px_14px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.25)] active:scale-95"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Hotline Directly ({displayNumber})</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-slate-400 mt-4 leading-tight">
              *Toll tax and state entry fees payable as per actuals. Fares are confirmed upfront on WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
