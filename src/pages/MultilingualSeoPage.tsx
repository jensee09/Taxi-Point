import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePhone } from '../context/PhoneContext';
import { SEO } from '../components/SEO';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Globe,
  MapPin,
  Car,
  Compass,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { findSeoDataBySlug } from '../data/multilingualSeoData';

interface MultilingualSeoPageProps {
  explicitSlug?: string;
}

export const MultilingualSeoPage: React.FC<MultilingualSeoPageProps> = ({ explicitSlug }) => {
  const location = useLocation();
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  // Determine active SEO data using pathname or explicit slug
  const targetPath = explicitSlug || location.pathname;
  const data = findSeoDataBySlug(targetPath);

  // Schema.org Structured Data
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `Rajkot Taxi Point - ${data.keywordName}`,
    alternateName: [
      'રાજકોટ ટેક્સી સર્વિસ',
      'રાજકોટ કેબ બુકિંગ',
      'રાજકોટ એરપોર્ટ ટેક્સી',
      'राजकोट टैक्सी सेवा',
      'राजकोट कैब बुकिंग',
      'Rajkot Taxi Point',
      'Rajkot Cab Booking'
    ],
    description: data.metaDescription,
    inLanguage: data.language === 'gu' ? 'gu-IN' : data.language === 'hi' ? 'hi-IN' : 'en-IN',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajkot Taxi Point',
      telephone: '+919879524365',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kalawad Road & 150ft Ring Road',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        postalCode: '360005',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.3039',
        longitude: '70.8022'
      },
      priceRange: '₹₹'
    },
    areaServed: [
      { '@type': 'City', name: 'Rajkot' },
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
      { '@type': 'Airport', name: 'Rajkot International Airport (Hirasar)' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taxi Services & Outstation Tours',
      itemListElement: data.popularRoutes.map((route, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${data.keywordName} - ${route.destination}`
        },
        price: route.sedanRate.replace(/[^0-9]/g, '') || '999',
        priceCurrency: 'INR',
        position: idx + 1
      }))
    }
  };

  return (
    <div className="min-h-screen bg-[#141738] text-slate-100">
      {/* Dynamic SEO Meta Tags */}
      <SEO
        title={data.pageTitle}
        description={data.metaDescription}
        pathname={`/${encodeURIComponent(data.slug)}`}
        schema={jsonLdSchema}
      />

      {/* Breadcrumb & Language Switcher Bar */}
      <div className="bg-[#0e1028] border-b border-[#23285c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-orange-400 font-semibold">{data.keywordName}</span>
          </nav>

          {/* Quick Multilingual Switcher */}
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400 hidden sm:inline">ભાષા / Language:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link
                to="/રાજકોટ ટેક્સી સર્વિસ"
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
                  data.slug === 'રાજકોટ ટેક્સી સર્વિસ'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'bg-[#1b204e] text-slate-300 hover:bg-[#23285c]'
                }`}
              >
                ગુજરાતી
              </Link>
              <Link
                to="/राजकोट टैक्सी सेवा"
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
                  data.slug === 'राजकोट टैक्सी सेवा'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'bg-[#1b204e] text-slate-300 hover:bg-[#23285c]'
                }`}
              >
                हिंदी
              </Link>
              <Link
                to="/rajkot-taxi"
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
                  data.slug === 'rajkot-taxi'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'bg-[#1b204e] text-slate-300 hover:bg-[#23285c]'
                }`}
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Localized Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20 border-b border-[#23285c]">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Keyword Badges */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>{data.badge}</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">{data.langBadge}</span>
              </div>

              {/* Exact SEO H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                {data.headline}
              </h1>

              {/* Localized Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {data.subheadline}
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <a
                  href={getWhatsAppLink(data.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-transform active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>{data.callToAction}</span>
                </a>

                <a
                  href={getTelLink()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1b204e] hover:bg-[#23285c] text-white font-semibold px-6 py-3.5 rounded-xl border border-[#2d3478] transition"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>કોલ કરો: {displayNumber}</span>
                </a>

                <Link
                  to="/book-a-car"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-orange-400 hover:text-orange-300 font-semibold px-4 py-3.5 transition text-sm"
                >
                  <span>Book Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Micro-copy */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  સરકારી રજીસ્ટર્ડ યલો પ્લેટ ટેક્સી
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  ૨૪ કલાક સમયસર સેવા
                </span>
              </div>

            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#1b204e]/90 border border-[#2d3478] rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  Most Booked
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    <Car className="w-4 h-4" />
                    <span>{data.keywordName} Special Fleet</span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-900/60 p-3 border border-[#2d3478]">
                    <img
                      src="/car-dzire.png"
                      alt={data.keywordName}
                      className="w-full h-44 object-contain mx-auto transition-transform hover:scale-105 duration-300"
                    />
                    <div className="text-center mt-2">
                      <span className="text-sm font-bold text-white">Maruti Dzire Sedan (AC)</span>
                      <p className="text-xs text-slate-400">4 પ્રવાસીઓ · 3 બેગ · ચિલ્ડ એસી</p>
                    </div>
                  </div>

                  {/* Pricing quick box */}
                  <div className="bg-[#141738] rounded-xl p-4 border border-[#23285c] space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>સ્થાનિક / આઉટસ્ટેશન દર:</span>
                      <span className="text-orange-400 font-bold text-sm">₹૧૧ / કિમી થી શરૂ</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>હિરાસર એરપોર્ટ ફિક્સ દર:</span>
                      <span className="text-emerald-400 font-bold text-sm">₹999 ફિક્સ</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>પેમેન્ટ મોડ:</span>
                      <span className="text-white font-medium">સફર પૂર્ણ થયા પછી</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`${data.whatsappMessage} (Maruti Dzire Cab)`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 rounded-xl transition text-sm shadow"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Dzire માટે વ્હોટ્સએપ કરો</span>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transparent Fare Matrix in Local Language */}
      <section className="py-14 bg-[#0e1028] border-b border-[#23285c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
              <Compass className="w-4 h-4" />
              <span>{data.keywordName} - રૂટ્સ અને ભાડું</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              રાજકોટથી લોકપ્રિય પ્રવાસ રૂટ્સ અને પારદર્શક દરો
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              કોઈ છુપો ચાર્જ નહીં. ટોલ અને ડ્રાઇવર ભથ્થાની સંપૂર્ણ પારદર્શિતા.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#23285c] bg-[#141738] shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1b204e] text-slate-300 uppercase font-semibold text-[11px] tracking-wider border-b border-[#23285c]">
                <tr>
                  <th className="px-4 py-3.5">રૂટ / ગંતવ્ય સ્થાન</th>
                  <th className="px-4 py-3.5">અંતર</th>
                  <th className="px-4 py-3.5">મુસાફરી સમય</th>
                  <th className="px-4 py-3.5 text-orange-400">Sedan (Dzire)</th>
                  <th className="px-4 py-3.5 text-emerald-400">Ertiga (6-Seater)</th>
                  <th className="px-4 py-3.5 text-right">બુકિંગ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23285c]">
                {data.popularRoutes.map((route, idx) => (
                  <tr key={idx} className="hover:bg-[#1b204e]/50 transition">
                    <td className="px-4 py-3.5 font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{route.destination}</span>
                    </td>
                    <td className="px-4 py-3.5 text-slate-300">{route.distance}</td>
                    <td className="px-4 py-3.5 text-slate-400">{route.duration}</td>
                    <td className="px-4 py-3.5 font-bold text-orange-400">{route.sedanRate}</td>
                    <td className="px-4 py-3.5 font-bold text-emerald-400">{route.ertigaRate}</td>
                    <td className="px-4 py-3.5 text-right">
                      <a
                        href={getWhatsAppLink(`નમસ્તે, મારે "${route.destination}" માટે કેબ બુક કરવી છે. કૃપા કરીને પુષ્ટિ કરો.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Book</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Local Rajkot Areas Covered */}
      <section className="py-14 border-b border-[#23285c] bg-[#141738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                100% Doorstep Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                રાજકોટ શહેરના તમામ વિસ્તારોમાં ૧૫ થી ૨૦ મિનિટમાં પીકઅપ
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                અમારા કેબ ડ્રાઇવરો રાજકોટના મુખ્ય પોઇન્ટ્સ પર હંમેશા હાજર હોય છે. ગમે ત્યારે કોલ કરો અથવા વ્હોટ્સએપ પર લોકેશન શેર કરો.
              </p>
              <div className="pt-2">
                <a
                  href={getTelLink()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>તાત્કાલિક પીકઅપ માટે કોલ કરો</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'કાલાવડ રોડ (Kalawad Road)',
                  '૧૫૦ ફૂટ રીંગ રોડ (150ft Ring Road)',
                  'ત્રિકોણ બાગ (Trikon Baug)',
                  'રાજકોટ જંકશન રેલવે સ્ટેશન',
                  'હિરાસર ઇન્ટરનેશનલ એરપોર્ટ',
                  'મવડી & નાના મવા રોડ',
                  'યાજ્ઞિક રોડ & પેડક રોડ',
                  'ગોંડલ રોડ હાઇવે',
                  'માધાપર ચોકડી & મોરબી રોડ',
                  'ભક્તિનગર રેલવે સ્ટેશન',
                  'શાસ્ત્રી મેદાન & જીલ્લા પંચાયત',
                  'રૈયા રોડ & આજી ડેમ રોડ'
                ].map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#1b204e] border border-[#23285c] text-xs font-medium text-slate-200 flex items-center gap-2 hover:border-orange-500/50 transition"
                  >
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="py-14 bg-[#0e1028] border-b border-[#23285c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
              <HelpCircle className="w-4 h-4" />
              <span>વારંવાર પૂછાતા પ્રશ્નો (FAQs)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {data.keywordName} વિશે સામાન્ય પ્રશ્નો
            </h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#141738] border border-[#23285c] space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-white flex items-start gap-2.5">
                  <span className="text-orange-400 font-mono">Q{idx + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Local Search Queries / SEO Tags */}
      <section className="py-12 bg-[#141738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Globe className="w-4 h-4 text-orange-400" />
            <span>સંબંધિત સર્ચ કીવર્ડ્સ / Related Multilingual Pages</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {data.relatedSlugs.map((rel, idx) => (
              <Link
                key={idx}
                to={`/${encodeURIComponent(rel.slug)}`}
                className="px-3.5 py-2 rounded-lg bg-[#1b204e] hover:bg-orange-500 hover:text-white border border-[#23285c] text-xs font-semibold text-slate-200 transition flex items-center gap-1.5 group"
              >
                <span>{rel.label}</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
