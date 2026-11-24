import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ShieldCheck, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/content';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHomeActive = location.pathname === '/' && !location.hash;
  const isSpecialtiesActive = location.pathname === '/specialties';
  const isBookActive = location.pathname === '/book';

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-brand-900/60 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-600 text-white animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Emergency Dispatch Active
            </span>
            <span className="text-slate-300 hidden md:inline">
              Prioritizing food preservation calls across Cary, Apex &amp; Wake County.
            </span>
            <span className="text-brand-300 font-semibold md:hidden">
              Same-day slots open in Cary today
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px] font-medium">
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              Mon-Sat: 7am-7pm | Sun: Emergency Fridge Calls Only
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              90-Day Parts &amp; Labor Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation Bar */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'glass-header shadow-md border-b border-slate-200/90 py-2.5' 
          : 'bg-white border-b border-slate-100 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-4 h-12 lg:h-14">
            
            {/* Logo and Tagline (Flex Shrink 0 to never shrink or break) */}
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation Links (Always single-line with whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
              <Link
                to="/"
                className={`text-xs xl:text-sm font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isHomeActive
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              
              <Link
                to="/specialties"
                className={`text-xs xl:text-sm font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isSpecialtiesActive
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="hidden xl:inline">Appliance </span>Specialties
              </Link>

              <a
                href="/#fair-pricing"
                className="text-xs xl:text-sm font-bold px-3 py-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <span>Fair Pricing</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  100% Credit
                </span>
              </a>

              <a
                href="/#brands"
                className="text-xs xl:text-sm font-bold px-3 py-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                Brands<span className="hidden xl:inline"> Stocked</span>
              </a>

              <Link
                to="/book"
                className={`text-xs xl:text-sm font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isBookActive
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="hidden xl:inline">Service Area &amp; </span>Contact
              </Link>
            </nav>

            {/* Desktop Actions: Phone CTA + Primary Button (Both flex-shrink-0 and whitespace-nowrap) */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Phone CTA Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="h-10 xl:h-11 inline-flex items-center gap-2 xl:gap-2.5 px-3 xl:px-3.5 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-300 transition-all text-slate-800 flex-shrink-0 whitespace-nowrap group"
                title="Call Bob's Appliance Repair Service now"
              >
                <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current" />
                </div>
                <div className="flex flex-col text-left leading-none justify-center">
                  <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    📞 Call Now
                  </span>
                  <span className="text-xs xl:text-sm font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors mt-0.5 whitespace-nowrap">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Primary Button: Book Diagnostic Service */}
              <Link
                to="/book"
                className="h-10 xl:h-11 inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 rounded-xl font-bold text-xs xl:text-sm text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-500/20 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand-200 flex-shrink-0" />
                <span><span className="hidden 2xl:inline">Book </span>Diagnostic Service</span>
              </Link>
            </div>

            {/* Mobile Actions: Tap to Call + Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="h-9 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs inline-flex items-center gap-1.5 text-xs font-bold sm:hidden flex-shrink-0 whitespace-nowrap"
                aria-label="Call (919) 210-6086"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 sm:h-10 sm:w-10 inline-flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 flex-shrink-0"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-sm border-t border-slate-200/80 shadow-2xl animate-fadeIn">
            <div className="bg-white px-5 py-6 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
              
              {/* Emergency Banner in Mobile Menu */}
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-red-900 uppercase">Refrigerator Warming Up?</h4>
                  <p className="text-xs text-red-700 mt-0.5">Don't wait for food loss. Tap below for urgent same-day dispatch.</p>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-extrabold text-red-700 hover:text-red-800 underline"
                  >
                    📞 Call Dispatch Now: {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold ${
                    isHomeActive ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  to="/specialties"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold ${
                    isSpecialtiesActive ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Appliance Specialties (Fridge, Washer, Oven)</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <a
                  href="/#fair-pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <span>Fair-Price Explainer</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">100% Credit</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="/#brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <span>Brand Specialty Matrix</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <Link
                  to="/book"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold ${
                    isBookActive ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Book Service &amp; Wake County Footprint</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Action Buttons in Mobile Drawer */}
              <div className="pt-3 space-y-2.5 border-t border-slate-100">
                <Link
                  to="/book"
                  className="w-full h-12 rounded-xl font-bold text-center text-white bg-brand-600 hover:bg-brand-700 flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Diagnostic Service</span>
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full h-12 rounded-xl font-bold text-center text-slate-900 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-emerald-600 fill-current" />
                  <span>Call Now: {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Hours snippet */}
              <div className="pt-2 text-center text-xs text-slate-500">
                <p className="font-semibold text-slate-700">{COMPANY_INFO.hours}</p>
                <p className="mt-1">Serving Cary, Apex, Morrisville &amp; Wake County</p>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
