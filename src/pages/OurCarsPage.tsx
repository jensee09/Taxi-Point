import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { usePhone } from '../context/PhoneContext';
import { FLEET_CARS } from '../data/taxiData';
import { CarCategory } from '../types';
import { Users, Briefcase, Snowflake, Phone, Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const OurCarsPage: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [activeTab, setActiveTab] = useState<CarCategory>('all');

  const carsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rajkot Taxi Point Fleet of Commercial Cabs',
    description: 'Clean, air-conditioned commercial taxis available in Rajkot including Maruti Dzire Sedan, Swift Hatchback, Maruti Ertiga, Toyota Innova Crysta, and Tempo Traveller.',
    url: 'https://rajkottaxipoint.com/our-cars',
    numberOfItems: FLEET_CARS.length,
    itemListElement: FLEET_CARS.map((car, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: car.name,
        description: car.tagline,
        image: `https://rajkottaxipoint.com${car.image}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: car.baseFarePerKm,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: car.baseFarePerKm,
            priceCurrency: 'INR',
            unitText: 'KM',
          },
        },
      },
    })),
  };

  const filteredCars = FLEET_CARS.filter((car) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'hatchback') return car.category === 'hatchback';
    if (activeTab === 'sedan') return car.category === 'sedan';
    if (activeTab === 'suv') return car.category === 'suv';
    if (activeTab === 'group') return car.category === 'group';
    return true;
  });

  const faqs = [
    {
      q: 'Are all your vehicles commercial yellow-plate taxis?',
      a: 'Yes, 100% of our fleet cars operate under valid commercial taxi yellow-plate registration with full commercial insurance, RTO fitness permits, and passenger liability coverage.',
    },
    {
      q: 'Does the air-conditioner (AC) stay on in hills and traffic?',
      a: 'Absolutely. We maintain a strict chilled-AC policy for all journeys across Gujarat, including city traffic and highway runs, with no additional surcharges for AC operation.',
    },
    {
      q: 'Can roof carriers be provided for extra luggage?',
      a: 'Yes! Our Innova Crysta, Ertiga, and Tempo Travellers can be equipped with robust rooftop luggage carriers upon advance request at no extra cost.',
    },
    {
      q: 'How are extra kilometers and extra hours billed for local packages?',
      a: 'For our local 8-hour / 80-km packages, any extra kilometer beyond 80 km is billed at the vehicle\'s per-km rate, and extra hours are billed at an economical ₹150/hour.',
    },
  ];

  return (
    <>
      <SEO
        title="Our Cars & Taxi Fleet - Maruti Dzire, Ertiga, Innova Crysta | Rajkot Taxi Point"
        description="Explore our fleet of clean, commercial AC taxis in Rajkot. Book Maruti Dzire Sedan, Ertiga 7-Seater, Innova Crysta, and Tempo Traveller at transparent per-kilometer rates."
        pathname="/our-cars"
        schema={carsSchema}
      />

      {/* Breadcrumb Header */}
      <section className="bg-[#111432] border-b border-[#23285c] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Our Cars</span>
          </nav>
        </div>
      </section>

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#141738] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Spotless Commercial Taxi Fleet
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Taxi Fleet in <span className="text-orange-500">Rajkot</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From agile sedans for city runs and airport transfers to luxury Innova Crystas and Tempo Travellers for family pilgrimages across Saurashtra. Real photos and clear pricing.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: `All Vehicles (${FLEET_CARS.length})` },
              { id: 'sedan', label: 'Sedans (Dzire)' },
              { id: 'hatchback', label: 'Hatchbacks (Swift)' },
              { id: 'suv', label: 'SUVs & MPVs (Ertiga / Innova)' },
              { id: 'group', label: 'Group (Tempo & Bus)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CarCategory)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-[#181c44] hover:bg-[#202559] text-slate-300 border border-[#2e3470]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 sm:py-20 bg-[#111432] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCars.map((car) => {
              const bookingMsg = `Hello Rajkot Taxi Point, I want to book the ${car.name} (${car.tagline}). Please share availability and current rates.`;
              return (
                <div
                  key={car.id}
                  className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/60 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-orange-500/10"
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
                    <div className="absolute bottom-4 right-4 bg-[#121431]/95 backdrop-blur-md border border-[#2b316c] px-3 py-1 rounded-lg text-xs font-mono font-bold text-orange-400">
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

                      {/* Features */}
                      <ul className="mt-4 space-y-1.5">
                        {car.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Recommended For */}
                      <p className="mt-4 text-xs text-slate-300 bg-[#121431] p-2.5 rounded-xl border border-[#252b66]">
                        <strong className="text-orange-400">Best Suited For:</strong> {car.bestFor}
                      </p>
                    </div>

                    {/* Rates & Booking Actions */}
                    <div className="pt-4 border-t border-[#252b66] space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-300 bg-[#141738] p-2.5 rounded-xl">
                        <span>Local 8h / 80km Package:</span>
                        <strong className="text-white font-bold text-sm">₹{car.cityPackageRate}</strong>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={`/book-a-car?car=${car.id}`}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition shadow-[0_4px_14px_rgba(249,115,22,0.35)]"
                        >
                          <span>Book Online</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={getWhatsAppLink(bookingMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] active:scale-95"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Comparison Table */}
      <section className="py-20 bg-[#141738] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Quick Comparison</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Compare Models & Pricing</h2>
            <p className="text-sm text-slate-300 mt-2">
              Select the optimal vehicle according to your passenger count, luggage space, and budget.
            </p>
          </div>

          <div className="bg-[#181c44] border border-[#2b316c] rounded-3xl overflow-x-auto shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200">
              <thead className="bg-[#121431] text-orange-400 uppercase font-bold text-[11px] sm:text-xs tracking-wider border-b border-[#2b316c]">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Vehicle Model</th>
                  <th className="py-4 px-3 sm:px-4">Category</th>
                  <th className="py-4 px-3 sm:px-4">Capacity</th>
                  <th className="py-4 px-3 sm:px-4">Luggage</th>
                  <th className="py-4 px-3 sm:px-4">Rate / KM</th>
                  <th className="py-4 px-3 sm:px-4">8h/80km Local</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252b66]">
                {FLEET_CARS.map((car) => (
                  <tr key={car.id} className="hover:bg-[#1f2458] transition">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white flex items-center gap-3">
                      <img src={car.image} alt={car.name} className="w-12 h-8 rounded-lg object-cover border border-[#282e66]" />
                      <span>{car.name}</span>
                    </td>
                    <td className="py-4 px-3 sm:px-4 capitalize text-slate-300">{car.category}</td>
                    <td className="py-4 px-3 sm:px-4 font-semibold text-white">{car.seats} Passengers</td>
                    <td className="py-4 px-3 sm:px-4">{car.luggage} Bags</td>
                    <td className="py-4 px-3 sm:px-4 font-bold text-orange-400">₹{car.baseFarePerKm} / km</td>
                    <td className="py-4 px-3 sm:px-4 font-semibold text-emerald-400">₹{car.cityPackageRate}</td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <Link
                        to={`/book-a-car?car=${car.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition shadow-md"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#111432]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Fleet Questions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#181c44] border border-[#2b316c] rounded-2xl p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/book-a-car"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition shadow-[0_8px_25px_-2px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(249,115,22,0.65)]"
            >
              <span>Proceed to Booking Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
