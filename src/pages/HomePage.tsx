import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS, POPULAR_ROUTES, CUSTOMER_REVIEWS } from '../data/taxiData';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Clock, Users, Briefcase, Snowflake, Star, Plane } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const HomePage: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle multilingual & keyword SEO URLs while keeping the main home page design
  const rawPath = location.pathname;
  let decodedSlug = '';
  try {
    decodedSlug = decodeURIComponent(rawPath.replace(/^\//, ''));
  } catch {
    decodedSlug = rawPath.replace(/^\//, '');
  }

  // If a URL contains spaces (e.g. from user searching or typing with spaces),
  // immediately convert to clean hyphenated (-) URL like /રાજકોટ-થી-અમદાવાદ-ટેક્સી
  useEffect(() => {
    if (decodedSlug.includes(' ') || rawPath.includes('%20')) {
      const dashedSlug = decodedSlug.trim().replace(/\s+/g, '-');
      navigate(`/${dashedSlug}`, { replace: true });
    }
  }, [decodedSlug, rawPath, navigate]);

  const isKeywordRoute = decodedSlug.trim().length > 0;
  // Convert hyphens to clean space-separated text for SEO titles & schema
  const readableKeyword = decodedSlug.replace(/[-_]+/g, ' ');

  const pageTitle = isKeywordRoute
    ? `${readableKeyword} | Rajkot Taxi Point`
    : 'Rajkot Taxi Point - Cab Service & Hirasar Airport Taxi';

  const pageDescription = isKeywordRoute
    ? `${readableKeyword} - 24x7 Cab Service in Rajkot. Book Maruti Dzire, Ertiga, Innova for city rides, Hirasar Airport pickups, and outstation trips to Ahmedabad, Somnath, Dwarka on WhatsApp.`
    : 'Reliable taxi and cab service in Rajkot. Book sanitized cabs for local city rides, Rajkot to Hirasar airport taxi, and outstation trips to Ahmedabad, Somnath, Dwarka with instant WhatsApp booking.';

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: isKeywordRoute ? `Rajkot Taxi Point - ${readableKeyword}` : 'Rajkot Taxi Point',
    url: typeof window !== 'undefined' ? window.location.href : 'https://rajkottaxipoint.com/',
    telephone: '+919879524365',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kalawad Road & 150ft Ring Road',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360005',
      addressCountry: 'IN',
    },
    areaServed: ['Rajkot', 'Ahmedabad', 'Somnath', 'Dwarka', 'Jamnagar', 'Junagadh', 'Sasan Gir'],
    priceRange: '₹₹',
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        pathname={rawPath}
        schema={homeSchema}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#141738] overflow-hidden">
        {/* Real taxi photography background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-bg.jpg"
            alt="Rajkot Taxi Service Highway Cab"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 lg:opacity-60 transition-transform duration-1000 scale-100 sm:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#10132e]/95 via-[#141738]/80 to-[#181c45]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141738] via-transparent to-[#141738]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & Action Buttons */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span>Official Rajkot Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                Simple & Easy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  Taxi Booking in Rajkot
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow">
                Clean and sanitized cars with experienced drivers for <strong>Rajkot city rides</strong>, <strong>Hirasar Airport pickups</strong>, and outstation trips to <strong>Ahmedabad, Somnath, Dwarka</strong>, and across Gujarat.
              </p>

              {/* Quick Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No advance payment needed</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hirasar airport transfer</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean & chilled AC cars</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fair and transparent rates</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/book-a-car"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)] transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book A Car Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi. Please share car availability and fare details.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(37,211,102,0.65)] transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={getTelLink()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl bg-[#1b1f48]/90 hover:bg-[#22275b] text-orange-400 border border-orange-500/30 font-bold text-sm sm:text-base transition shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_22px_rgba(249,115,22,0.25)] backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call Hotline</span>
                </a>
              </div>

            </div>

            {/* Right Column: Real Car Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#181c44]/95 border border-[#2f3575] rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group backdrop-blur-md">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-[#121431]">
                  <img
                    src="/images/sedan.jpg"
                    alt="Maruti Dzire Sedan Taxi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#121431]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-orange-400 border border-[#2f3575]">
                    From ₹11 / km
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Maruti Dzire Sedan</h3>
                      <p className="text-xs text-orange-400 font-medium">4 Passengers · 3 Bags · Chilled AC</p>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Ready to Book
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Best choice for Rajkot city travel, Hirasar Airport drops, and outstation trips to Ahmedabad, Somnath, and Dwarka.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                    <Link
                      to="/our-cars"
                      className="w-full sm:flex-1 text-center py-2.5 px-3 rounded-xl bg-[#252b66] hover:bg-[#2e357e] text-white font-bold text-xs transition shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(37,43,102,0.5)]"
                    >
                      View All Cars →
                    </Link>
                    <a
                      href={getWhatsAppLink('Hello Rajkot Taxi Point, I would like to book a Maruti Dzire Sedan.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 text-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Fleet Preview */}
      <section className="py-20 bg-[#111432] border-t border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Our Commercial Fleet</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Real Cars for Every Journey</h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Every vehicle in our fleet is cleaned, GPS-monitored, and driven by experienced highway drivers.
              </p>
            </div>
            <Link
              to="/our-cars"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition shrink-0"
            >
              <span>Explore All {FLEET_CARS.length} Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {FLEET_CARS.slice(0, 3).map((car) => (
              <div
                key={car.id}
                className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/60 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-orange-500/10"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#121431] rounded-2xl overflow-hidden mb-4">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-3 right-3 bg-[#121431]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-orange-400 border border-[#2b316c]">
                      ₹{car.baseFarePerKm}/km
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{car.name}</h3>
                  <p className="text-xs text-orange-400/90 font-medium mt-0.5">{car.tagline}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#252b66] text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 bg-[#141738] p-2 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#141738] p-2 rounded-lg">
                      <Briefcase className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{car.luggage} Bags</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#141738] p-2 rounded-lg">
                      <Snowflake className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Dual AC</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#252b66] flex items-center gap-2">
                  <Link
                    to={`/book-a-car?car=${car.id}`}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition shadow-[0_4px_14px_rgba(249,115,22,0.35)]"
                  >
                    Book Online
                  </Link>
                  <a
                    href={getWhatsAppLink(`Hello Rajkot Taxi Point, I want to book the ${car.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition shadow-[0_4px_14px_rgba(37,211,102,0.35)]"
                    title="Book on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Routes Quick Preview */}
      <section className="py-20 bg-[#141738] border-t border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Popular Outstation Routes</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">One-Way Drops & Round Trips from Rajkot</h2>
            <p className="text-sm text-slate-300 mt-2">
              Fixed, clear fares with zero hidden surcharges. Book instantly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POPULAR_ROUTES.slice(0, 4).map((route) => (
              <div
                key={route.id}
                className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/50 rounded-2xl p-4 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{route.from} ➔ {route.to}</span>
                  </div>
                  <p className="text-xs text-slate-400">{route.distanceKm} km · ~{route.duration}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#252b66] flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-heading">From ₹{route.sedanFareEst}</span>
                  <Link
                    to={`/book-a-car?dest=${encodeURIComponent(route.to)}`}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Feedback Snapshot */}
      <section className="py-20 bg-[#111432] border-t border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Trusted By Saurashtra Travelers</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">4.9 Star Verified Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-[#181c44] border border-[#2b316c] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">"{rev.comment}"</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#252b66] flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-orange-500/40" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-[11px] text-orange-400">{rev.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-14 bg-gradient-to-r from-orange-500/20 via-[#181c44] to-[#25D366]/20 border border-orange-500/30 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">Need a Ride Right Now?</h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Our dispatch team is ready to assign your sanitized car in minutes. Call directly or message us on WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/book-a-car"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)]"
              >
                Go to Booking Page
              </Link>
              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition shadow-[0_8px_25px_-2px_rgba(37,211,102,0.45)] flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp ({displayNumber})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
