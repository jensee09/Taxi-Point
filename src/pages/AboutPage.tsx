import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { usePhone } from '../context/PhoneContext';
import { ShieldCheck, Award, Sparkles, MapPin, CheckCircle2, ArrowRight, HeartHandshake, Navigation, Car } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { CUSTOMER_REVIEWS } from '../data/taxiData';

export const AboutPage: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Rajkot Taxi Point',
    description: 'Learn about Rajkot Taxi Point, the leading cab and taxi service in Rajkot, Gujarat offering local city cabs, Hirasar Airport taxis, and outstation trips.',
    url: 'https://rajkottaxipoint.com/about-us',
    publisher: {
      '@type': 'TaxiService',
      name: 'Rajkot Taxi Point',
      telephone: '+919879524365',
    },
  };

  const values = [
    {
      title: 'Punctual & Always On Time',
      desc: 'Whether catching a morning flight at Hirasar Airport or arriving late at Rajkot Junction Railway Station, our cabs are staged and ready ahead of schedule.',
      icon: Navigation,
      accent: 'text-amber-400',
    },
    {
      title: 'Experienced Highway Chauffeurs',
      desc: 'Polite, licensed, and police-verified drivers who know every Rajkot city shortcut and Gujarat state highways to Ahmedabad, Somnath, Dwarka, and Sasan Gir.',
      icon: Award,
      accent: 'text-orange-400',
    },
    {
      title: 'Clean & Chilled AC Fleet',
      desc: 'Spotless, vacuumed, and fragrant car cabins with chilled air conditioning, comfortable pushback seating, and ample boot luggage space for all passengers.',
      icon: Sparkles,
      accent: 'text-sky-400',
    },
    {
      title: 'Transparent & Honest Rates',
      desc: 'Fares agreed before you travel. No hidden surge rates, no cancellation penalty tricks, and complete transparency on tolls, parking, and state taxes.',
      icon: ShieldCheck,
      accent: 'text-emerald-400',
    },
  ];

  const safetyProtocols = [
    'Pre-trip vehicle safety inspection (brakes, tires, AC cooling, fluid levels)',
    'Real-time GPS tracking enabled on all fleet cabs for passenger safety',
    'Commercial yellow-plate licensed vehicles with complete Gujarat RTO fitness permits',
    'Strict zero-alcohol and defensive driving code of conduct for chauffeurs',
    'Clean, dust-free upholstery with complimentary sanitizing wipes and water bottles',
    'Direct control room assistance to assist family members and business travelers',
  ];

  return (
    <>
      <SEO
        title="About Us - Rajkot Taxi Point | Trusted Cab & Chauffeur Service"
        description="Learn about Rajkot Taxi Point, premier cab service in Rajkot. Over a decade of providing reliable city rides, Hirasar Airport drops, and outstation taxi tours across Gujarat."
        pathname="/about-us"
        schema={aboutSchema}
      />

      {/* Breadcrumb Header */}
      <section className="bg-[#111432] border-b border-[#23285c] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">About Us</span>
          </nav>
        </div>
      </section>

      {/* Main Page Hero */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-[#0e112d] overflow-hidden border-b border-[#222757]">
        {/* Real Gujarat highway commercial taxi background photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero-bg.jpg"
            alt="Rajkot Taxi Point Gujarat Highway Service"
            className="w-full h-full object-cover object-right md:object-center opacity-85 sm:opacity-90 transform scale-100 hover:scale-105 transition-transform duration-1000"
          />
          {/* Directional gradient to protect text legibility on left while keeping real taxi & highway clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d102b]/95 via-[#0d102b]/80 to-[#0d102b]/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e112d] via-transparent to-[#0e112d]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md mb-4 shadow-sm">
                <Award className="w-4 h-4 text-orange-400" />
                <span>About Rajkot Taxi Point</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                Saurashtra's Most Trusted <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  Taxi & Cab Service
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-100 leading-relaxed drop-shadow">
                Founded in Rajkot with a commitment to safe, comfortable, and affordable road travel across Gujarat. 
                We connect travelers from Rajkot city to Hirasar Airport, Somnath, Dwarka, Gir Forest, and Ahmedabad with courteous drivers and spotless cars.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/book-a-car"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)] transform hover:-translate-y-0.5"
                >
                  <span>Book A Car Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/our-cars"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b1f48]/90 hover:bg-[#23285c] text-slate-100 border border-[#2e3470] font-bold text-sm sm:text-base transition shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-sm transform hover:-translate-y-0.5"
                >
                  <span>View Our Fleet</span>
                  <Car className="w-4 h-4 text-orange-400" />
                </Link>
              </div>
            </div>

            {/* Right side floating feature card showcasing Gujarat highway & airport travel */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 justify-center items-end">
              <div className="bg-[#101438]/85 border border-[#2e3678] backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs text-right">
                <div className="flex items-center justify-end gap-2 text-orange-400 font-bold text-sm">
                  <span>Gujarat State Permit</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  100% yellow-plate commercial cabs with certified Gujarat RTO highway fitness.
                </p>
              </div>

              <div className="bg-[#101438]/85 border border-[#2e3678] backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs text-right">
                <div className="flex items-center justify-end gap-2 text-emerald-400 font-bold text-sm">
                  <span>Hirasar Airport & Saurashtra</span>
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Daily trips to Ahmedabad, Somnath Jyotirlinga, Dwarka, and Sasan Gir Safari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Statistics */}
      <section className="bg-[#111432] py-12 border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#2e3579]">
            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">10+ Years</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Saurashtra Highway Experience</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">25,000+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Successful Trips Completed</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">4.9 ★</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Customer Review Rating</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Yellow-Plate Licensed Fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 sm:py-24 bg-[#141738] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Why Riders Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Built on Trust, Safety & Hospitality</h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Every trip with Rajkot Taxi Point is backed by strict standards to give you complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#181c44] border border-[#2d3472] hover:border-orange-500/60 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-orange-500/10"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#141738] border border-[#2d3472] flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${v.accent}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Fleet Maintenance Standards */}
      <section className="py-20 bg-[#111432] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Safety First Protocol
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Our Fleet Quality & Chauffeur Code of Conduct
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                When you step into a Rajkot Taxi Point cab, you are stepping into a thoroughly checked, professionally cleaned commercial vehicle managed by full-time drivers who take pride in hospitality.
              </p>

              <div className="space-y-3 pt-2">
                {safetyProtocols.map((protocol, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{protocol}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={getWhatsAppLink('Hello Rajkot Taxi Point, I would like to inquire about taxi booking and corporate travel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-[0_8px_25px_-2px_rgba(37,211,102,0.45)] transition"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat with Dispatch Manager</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#181c44] border border-[#2b316c] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#121431] border border-[#2b316c] relative group shadow-inner">
                  <img
                    src="/images/fleet-bg.jpg"
                    alt="Rajkot Taxi Point Commercial Fleet Lineup - Innova Crysta, Dzire, Ertiga"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
              
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Serving All of Saurashtra & Gujarat</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Headquartered at Kalawad Road Rajkot, our drivers operate continuous routes between:
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Rajkot City Local</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Hirasar Airport (HSR)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Somnath Jyotirlinga</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Dwarka & Bet Dwarka</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Sasan Gir Wildlife</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#121431] p-2 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Ahmedabad & Airport</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 bg-[#141738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Ready to Experience Seamless Travel in Rajkot?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Get an instant quote with transparent rates or speak directly with our team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                to="/book-a-car"
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)]"
              >
                Book A Car Now
              </Link>
              <Link
                to="/contact-us"
                className="px-6 py-3.5 rounded-xl bg-[#1b1f48] hover:bg-[#23285c] text-white border border-[#2e3470] font-bold text-sm sm:text-base transition shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
              >
                Contact Our Desk
              </Link>
              <a
                href={getTelLink()}
                className="px-6 py-3.5 rounded-xl bg-[#141738] hover:bg-[#1b1f48] text-orange-400 border border-orange-500/30 font-bold text-sm sm:text-base transition"
              >
                Call: {displayNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
