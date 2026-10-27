import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { usePhone } from '../context/PhoneContext';
import { Phone, MapPin, Clock, ExternalLink, Send, MessageSquare, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ContactPage: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [inquiryType, setInquiryType] = useState('Outstation Cab');
  const [message, setMessage] = useState('');

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rajkot Taxi Point',
    description: 'Get in touch with Rajkot Taxi Point for 24-hour taxi booking, Hirasar Airport cab assistance, and corporate transport queries.',
    url: 'https://rajkottaxipoint.com/contact-us',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Rajkot Taxi Point',
      telephone: '+919879524365',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kalawad Road & 150ft Ring Road',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        postalCode: '360005',
        addressCountry: 'IN',
      },
    },
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Rajkot Taxi Point,
• Name: ${name || 'Customer'}
• Contact Phone: ${mobile || 'Not provided'}
• Inquiry Type: ${inquiryType}
• Message / Details: ${message || 'Please provide rates and car availability.'}`;

    window.open(getWhatsAppLink(formatted), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Contact Us - Phone, WhatsApp & Office Address | Rajkot Taxi Point"
        description="Contact Rajkot Taxi Point for cab booking in Rajkot. Reach our team via phone or WhatsApp at +91 98795 24365, or visit our office at Kalawad Road, Rajkot."
        pathname="/contact-us"
        schema={contactSchema}
      />

      {/* Breadcrumb Header */}
      <section className="bg-[#111432] border-b border-[#23285c] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Main Header */}
      <section className="py-16 sm:py-20 bg-[#141738] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            Direct Support & Booking
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-orange-500">Rajkot Taxi Point</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions about fares, routes, or urgent airport transfers? Our Rajkot-based dispatch desk is available on WhatsApp and phone call.
          </p>
        </div>
      </section>

      {/* 4 Contact Channels */}
      <section className="py-16 bg-[#111432] border-b border-[#222757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* WhatsApp */}
            <div className="bg-[#181c44] border border-[#2b316c] hover:border-emerald-500/60 rounded-3xl p-6 transition flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold text-xl mb-4 border border-[#25D366]/30 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">WhatsApp Chat</h3>
                <p className="text-xs text-slate-300 mb-3">Instant car photos, driver location, and booking quotes.</p>
                <p className="text-sm font-mono font-bold text-[#25D366]">{displayNumber}</p>
              </div>
              <a
                href={getWhatsAppLink('Hello Rajkot Taxi Point, I need assistance with taxi booking.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_6px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>

            {/* Phone Call */}
            <div className="bg-[#181c44] border border-[#2b316c] hover:border-orange-500/60 rounded-3xl p-6 transition flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center font-bold text-xl mb-4 border border-orange-500/30 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Phone Call</h3>
                <p className="text-xs text-slate-300 mb-3">Speak directly with our Rajkot taxi coordinators.</p>
                <p className="text-sm font-mono font-bold text-orange-400">{displayNumber}</p>
              </div>
              <a
                href={getTelLink()}
                className="mt-6 w-full text-center py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_6px_18px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.55)] active:scale-95"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Hotline Directly →</span>
              </a>
            </div>

            {/* Office Location */}
            <div className="bg-[#181c44] border border-[#2b316c] hover:border-sky-500/60 rounded-3xl p-6 transition flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center font-bold text-xl mb-4 border border-sky-500/30 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Office Location</h3>
                <p className="text-xs text-slate-300 mb-2">Kalawad Road & 150ft Ring Road, Rajkot, Gujarat - 360005</p>
                <p className="text-xs text-slate-400">Serving all Rajkot neighborhoods & Hirasar Airport</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rajkot+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-2.5 px-3 rounded-xl bg-[#232963] hover:bg-[#2d347e] text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_18px_rgba(35,41,99,0.5)] active:scale-95"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#181c44] border border-[#2b316c] hover:border-purple-500/60 rounded-3xl p-6 transition flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-xl mb-4 border border-purple-500/30 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Service Hours</h3>
                <p className="text-xs text-slate-300 mb-2">Open Daily for City & Outstation Rides</p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live dispatch active now
                </p>
              </div>
              <div className="mt-6 bg-[#121431] p-2.5 rounded-xl border border-[#282e66] text-center text-xs text-slate-400">
                Flight & train schedules monitored
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Form & Location Card */}
      <section className="py-20 bg-[#141738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#181c44] border border-[#2b316c] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Quick Inquiry</span>
                <h2 className="text-2xl font-black text-white mt-1">Send a Message</h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fill in your requirements to open a pre-filled WhatsApp conversation with our booking manager.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhavesh Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98250 12345"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Service Type</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                  >
                    <option value="Hirasar Airport Pickup / Drop">Hirasar Airport Pickup / Drop</option>
                    <option value="Outstation One-Way Drop">Outstation One-Way Drop (Ahmedabad, Somnath, etc.)</option>
                    <option value="Outstation Round-Trip">Outstation Round-Trip (Dwarka, Gir, etc.)</option>
                    <option value="Rajkot City Local (8h / 80km)">Rajkot City Local (8h / 80km)</option>
                    <option value="Group Tour / Tempo Traveller">Group Tour / Tempo Traveller</option>
                    <option value="Corporate / Event Taxi">Corporate / Event Taxi Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Travel Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Enter pickup point, date, passenger count, or any specific car preference..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#121431] border border-[#2b316c] focus:border-orange-500 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition shadow-[0_8px_25px_-2px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(37,211,102,0.65)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Send Inquiry to Dispatch Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Office & Airport Details Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#181c44] border border-[#2b316c] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Headquarters</span>
                <h3 className="text-xl font-bold text-white mt-1">Rajkot Taxi Control Office</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Centrally located in Rajkot for rapid driver dispatch across Mavdi, Madhapar Chowkadi, Gondal Road, Kalawad Road, and the Ring Roads.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121431] border border-[#282e66] space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Physical Address:</strong>
                    <p className="mt-0.5">Kalawad Road & 150ft Ring Road, Near Indira Circle, Rajkot, Gujarat - 360005</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <strong className="text-white">Hotline:</strong>
                    <p className="mt-0.5 font-mono text-orange-400">{displayNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <strong className="text-white">WhatsApp Desk:</strong>
                    <p className="mt-0.5 font-mono text-[#25D366]">{displayNumber}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed yellow plate commercial vehicles only</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All flights at Hirasar Airport tracked in real time</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent billing with zero advance payment needed</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-a-car"
                  className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition shadow-[0_6px_20px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2"
                >
                  <span>Go to Online Fare Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
