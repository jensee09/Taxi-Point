import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS, POPULAR_ROUTES, RAJKOT_PICKUP_POINTS, POPULAR_DESTINATIONS } from '../data/taxiData';
import { Car, MapPin, Navigation, Calendar, Clock, Phone, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const BookACarPage: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [searchParams] = useSearchParams();

  const [tripType, setTripType] = useState<'oneway' | 'roundtrip' | 'airport' | 'local'>('oneway');
  const [pickup, setPickup] = useState(RAJKOT_PICKUP_POINTS[0]);
  const [destination, setDestination] = useState('Ahmedabad (Airport / City)');
  const [selectedCarId, setSelectedCarId] = useState('sedan');
  const [passengerName, setPassengerName] = useState('');
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [travelTime, setTravelTime] = useState('07:30');

  // Handle URL query parameters (e.g. ?car=innova or ?dest=Somnath)
  useEffect(() => {
    const carParam = searchParams.get('car');
    if (carParam && FLEET_CARS.some((c) => c.id === carParam)) {
      setSelectedCarId(carParam);
    }
    const destParam = searchParams.get('dest');
    if (destParam) {
      const matched = POPULAR_DESTINATIONS.find((d) => d.toLowerCase().includes(destParam.toLowerCase()));
      if (matched) {
        setDestination(matched);
      }
    }
  }, [searchParams]);

  const selectedCar = useMemo(() => {
    return FLEET_CARS.find((c) => c.id === selectedCarId) || FLEET_CARS[1];
  }, [selectedCarId]);

  // Route matching
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

    const nameLine = passengerName ? `• Passenger Name: ${passengerName}\n` : '';

    const msg = `Hello Rajkot Taxi Point, I want to book a taxi:
${nameLine}• Service: ${tripLabel}
• Pickup: ${pickup}
• Destination: ${tripType === 'local' ? 'Rajkot City Local' : destination}
• Vehicle: ${selectedCar.name} (${selectedCar.tagline})
• Est. Distance: ${estimatedDistance} km
• Travel Date: ${travelDate} at ${travelTime}
• Estimated Fare: ~₹${estimatedFare.toLocaleString()}
Please confirm availability and driver assignment.`;

    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const bookingSchema = {
    '@context': 'https://schema.org',
    '@type': 'ReservationPackage',
    name: 'Online Taxi Booking Rajkot',
    description: 'Instant online cab booking in Rajkot for local, Hirasar Airport, and outstation trips with immediate WhatsApp confirmation.',
    url: 'https://rajkottaxipoint.com/book-a-car',
  };

  return (
    <>
      <SEO
        title="Book A Car Online - Instant Rajkot Taxi & Outstation Cab Booking"
        description="Book a taxi in Rajkot online in 3 simple taps. Get instant fare estimation for Hirasar Airport drops, Somnath, Dwarka, and Ahmedabad with immediate WhatsApp confirmation."
        pathname="/book-a-car"
        schema={bookingSchema}
      />

      {/* Breadcrumb Header */}
      <section className="bg-[#111432] border-b border-[#23285c] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Book A Car</span>
          </nav>
        </div>
      </section>

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-[#141738] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5 text-orange-400" />
            Zero Advance Payment Required
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Book <span className="text-orange-500">A Car</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select your journey details below to calculate exact fares in real time. Submit with 1-click on WhatsApp for instant driver assignment.
          </p>
        </div>
      </section>

      {/* Booking Form + Summary Section */}
      <section className="py-12 sm:py-16 bg-[#111432] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Booking Form (7 cols) */}
            <form
              onSubmit={handleWhatsAppBooking}
              className="lg:col-span-7 bg-[#181c44] border border-[#2b316c] rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Step 1: Trip Type */}
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

              {/* Step 2: Locations */}
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

              {/* Step 3: Choose Car Model */}
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
                          <p className="text-xs font-bold text-white truncate">
                            {car.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}
                          </p>
                          <p className="text-[11px] text-orange-400 font-semibold mt-0.5">
                            ₹{car.baseFarePerKm}/km · {car.seats} seats
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Passenger Info, Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patel"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2 px-3 text-white text-xs focus:outline-none"
                  />
                </div>
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 sm:py-4 px-4 rounded-xl text-sm sm:text-base transition shadow-[0_10px_30px_-3px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_35px_-3px_rgba(37,211,102,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Send Booking Request on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Live Fare Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#181c44] border-2 border-orange-500/50 rounded-3xl p-5 sm:p-8 shadow-2xl relative space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#282e66]">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
                  Fare Estimate & Trip Summary
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Guaranteed Rate
                </span>
              </div>

              {/* Car Snapshot */}
              <div className="flex items-center gap-4 py-2 border-b border-[#282e66]">
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
              <div className="grid grid-cols-2 gap-3 py-2 border-b border-[#282e66] text-xs">
                <div className="bg-[#121431] p-3 rounded-xl border border-[#252b66]">
                  <span className="text-slate-400">Estimated Distance:</span>
                  <p className="text-sm font-bold text-white mt-0.5">~{estimatedDistance} KM</p>
                </div>
                <div className="bg-[#121431] p-3 rounded-xl border border-[#252b66]">
                  <span className="text-slate-400">Travel Duration:</span>
                  <p className="text-sm font-bold text-white mt-0.5">{estimatedDuration}</p>
                </div>
              </div>

              {/* Total Fare */}
              <div className="py-2">
                <span className="text-xs text-slate-400">Estimated Total Fare:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-orange-400 font-heading">
                    ₹{estimatedFare.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">approx.</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Includes fuel, driver allowance & spotless AC vehicle
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-[#121431] p-4 rounded-2xl border border-[#282e66] space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No advance payment needed before booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free cancellation up to 2 hours before trip</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Doorstep pickup from anywhere in Rajkot</span>
                </div>
              </div>

              {/* Hotline Call Button */}
              <div className="pt-2 border-t border-[#282e66]">
                <a
                  href={getTelLink()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121431] hover:bg-[#1b1f48] text-orange-400 border border-orange-500/30 font-bold text-xs sm:text-sm transition shadow-[0_4px_14px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.25)] active:scale-95"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Prefer Calling? Call Hotline ({displayNumber})</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="py-16 bg-[#141738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Easy Process</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">How Booking Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181c44] border border-[#2b316c] rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 font-black text-xl flex items-center justify-center mx-auto border border-orange-500/30">
                1
              </div>
              <h3 className="text-base font-bold text-white">Choose Trip & Vehicle</h3>
              <p className="text-xs text-slate-300">
                Pick your travel route (city, airport, or outstation) and select the car model that suits your party.
              </p>
            </div>

            <div className="bg-[#181c44] border border-[#2b316c] rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] font-black text-xl flex items-center justify-center mx-auto border border-[#25D366]/30">
                2
              </div>
              <h3 className="text-base font-bold text-white">Instant WhatsApp Confirmation</h3>
              <p className="text-xs text-slate-300">
                Click to send the prefilled details directly to our WhatsApp control desk. Driver details shared promptly.
              </p>
            </div>

            <div className="bg-[#181c44] border border-[#2b316c] rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 font-black text-xl flex items-center justify-center mx-auto border border-sky-500/30">
                3
              </div>
              <h3 className="text-base font-bold text-white">Relax & Enjoy The Ride</h3>
              <p className="text-xs text-slate-300">
                Our uniformed driver arrives at your doorstep on time in a clean AC car. Pay after your journey ends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
