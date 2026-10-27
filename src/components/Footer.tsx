import React from 'react';
import { Link } from 'react-router-dom';
import { usePhone } from '../context/PhoneContext';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();

  return (
    <footer className="bg-[#0e1028] border-t border-[#23285c] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info with clean Logo (no borders or boxes) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Rajkot Taxi Logo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-black text-white tracking-tight font-heading">
                RAJKOT <span className="text-orange-500">TAXI</span> POINT
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Reliable taxi and cab service in Rajkot. Specializing in local city rides, Rajkot to Hirasar Airport pickups, and outstation trips across Gujarat.
            </p>
          </div>

          {/* Dedicated Page Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link to="/" className="text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/our-cars" className="text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
                  <span>Our Cars</span>
                </Link>
              </li>
              <li>
                <Link to="/book-a-car" className="text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
                  <span>Book A Car</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Office</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Rajkot Head Office</p>
                  <p className="text-slate-400">Kalawad Road & 150ft Ring Road, Rajkot, Gujarat - 360005</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rajkot+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={getTelLink()} className="text-white hover:text-orange-400 font-bold">
                  {displayNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] font-semibold"
                >
                  WhatsApp: <span className="font-mono text-[#25D366]">{displayNumber}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Multilingual SEO Keyword Search Tag Bar */}
        <div className="mt-10 pt-6 border-t border-[#1e2354] space-y-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Popular Searches & Multilingual Cabs:
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-400">
            <Link to="/રાજકોટ-ટેક્સી-સર્વિસ" className="text-slate-300 hover:text-orange-400 transition font-medium">
              રાજકોટ ટેક્સી સર્વિસ
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/રાજકોટ-કેબ-બુકિંગ" className="text-slate-300 hover:text-orange-400 transition font-medium">
              રાજકોટ કેબ બુકિંગ
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/રાજકોટ-એરપોર્ટ-ટેક્સી" className="text-slate-300 hover:text-orange-400 transition font-medium">
              રાજકોટ એરપોર્ટ ટેક્સી
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/રાજકોટ-થી-અમદાવાદ-ટેક્સી" className="text-slate-300 hover:text-orange-400 transition font-medium">
              રાજકોટ થી અમદાવાદ ટેક્સી
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/राजकोट-टैक्सी-सेवा" className="text-slate-300 hover:text-orange-400 transition font-medium">
              राजकोट टैक्सी सेवा
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/राजकोट-कैब-बुकिंग" className="text-slate-300 hover:text-orange-400 transition font-medium">
              राजकोट कैब बुकिंग
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/rajkot-taxi" className="text-slate-300 hover:text-orange-400 transition font-medium">
              Rajkot Taxi
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/rajkot-cab-booking" className="text-slate-300 hover:text-orange-400 transition font-medium">
              Rajkot Cab Booking
            </Link>
            <span className="text-slate-600">·</span>
            <Link to="/rajkot-cab" className="text-slate-300 hover:text-orange-400 transition font-medium">
              Rajkot Cab
            </Link>
          </div>
        </div>

        {/* Centered copyright line */}
        <div className="mt-8 pt-6 border-t border-[#1e2354] text-center">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 Rajkot Taxi Point
          </p>
        </div>

      </div>
    </footer>
  );
};
