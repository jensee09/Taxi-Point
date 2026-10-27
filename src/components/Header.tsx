import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { usePhone } from '../context/PhoneContext';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header: React.FC = () => {
  const { displayNumber, getWhatsAppLink, getTelLink } = usePhone();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/our-cars', label: 'Our Cars' },
    { to: '/book-a-car', label: 'Book A Car' },
    { to: '/contact-us', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121533]/98 backdrop-blur-md border-b border-[#282d60] shadow-xl shadow-[#0c0e22]/50'
          : 'bg-[#181b42] border-b border-[#2b3068]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo without any border or background box */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Rajkot Taxi Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform group-hover:scale-105 drop-shadow-md"
            />
            <div>
              <div className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 font-heading">
                RAJKOT <span className="text-orange-500">TAXI</span> POINT
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline shrink-0" />
                <span>Cab & Airport Service</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Items (Shown on Desktop screens >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-base font-bold tracking-normal transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#f97316]'
                      : 'text-white hover:text-orange-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call & WhatsApp Actions (Desktop only >= 1024px) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={getTelLink()}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 font-bold text-xs tracking-wide transition shadow-[0_4px_14px_rgba(249,115,22,0.15)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.25)]"
              title="Call directly"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{displayNumber}</span>
            </a>

            <a
              href={getWhatsAppLink('Hello Rajkot Taxi Point, I would like to book a cab.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wide transition shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile & Tablet: ONLY the Menu Icon displays (No WhatsApp or Phone icon in header bar) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-2xl bg-[#202555] hover:bg-[#282f6c] text-white border border-[#323979] focus:outline-none active:scale-95 transition shadow-[0_4px_14px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Slide-down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2b3068] bg-[#141739] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition flex items-center justify-between ${
                    isActive
                      ? 'text-orange-500 bg-[#1d2250]'
                      : 'text-white hover:text-orange-400 hover:bg-[#1b1f48]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-[#282d60] flex flex-col sm:flex-row gap-2.5">
            <a
              href={getWhatsAppLink('Hello Rajkot Taxi Point, I want to book a taxi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-[0_4px_14px_rgba(37,211,102,0.4)] active:scale-95 transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={getTelLink()}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1b1f48] border border-orange-500/40 text-orange-400 font-bold text-sm shadow-[0_4px_14px_rgba(0,0,0,0.3)] active:scale-95 transition"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call ({displayNumber})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
