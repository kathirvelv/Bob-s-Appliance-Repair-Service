import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ChevronRight, Heart } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-slate-800/80">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-900/60 text-brand-400 border border-brand-700/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">90-Day Parts &amp; Labor Warranty</h4>
              <p className="text-slate-400 text-xs mt-1">If the same problem returns within 90 days, we fix it free with zero extra fees.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Diagnostic Fee Credit</h4>
              <p className="text-slate-400 text-xs mt-1">Your flat-rate diagnostic fee goes 100% toward the repair balance upon approval.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-950 text-red-400 border border-red-800/50">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Emergency Food-Preservation Line</h4>
              <p className="text-slate-400 text-xs mt-1">Direct dispatch hotline for active refrigerator &amp; freezer cooling loss in Cary.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <Logo lightMode={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              Cary and Wake County’s premier word-of-mouth appliance repair service. We fix Sub-Zero, Viking, Whirlpool, Samsung, LG, Bosch, and GE appliances with honest flat-rate pricing and no surprise fees.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-lg shadow-emerald-900/30"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Appliance Specialties */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Appliance Specialties
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/specialties#refrigerator" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Refrigerator &amp; Freezer Repair (Emergency)</span>
                </Link>
              </li>
              <li>
                <Link to="/specialties#washer-dryer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Washer &amp; Dryer Repair</span>
                </Link>
              </li>
              <li>
                <Link to="/specialties#oven-range" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Oven, Range &amp; Cooktop Repair</span>
                </Link>
              </li>
              <li>
                <a href="/#brands" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Sub-Zero &amp; Viking Luxury Systems</span>
                </a>
              </li>
              <li>
                <a href="/#brands" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Whirlpool, Samsung, LG, Bosch &amp; GE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Area & Wake County Coverage */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Service Footprint
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Fast dispatch van routes focused strictly in Wake County to guarantee rapid arrival times:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                >
                  📍 {area.name}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900">
              <Link to="/book" className="text-xs font-semibold text-brand-400 hover:text-brand-300 underline">
                View Full Wake County Dispatch Zones →
              </Link>
            </div>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Dispatch &amp; Hours
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Regular Operating Hours:</span>
                  <span className="text-slate-400">Monday – Saturday: 7:00 AM – 7:00 PM</span>
                  <span className="text-red-400 block mt-0.5 font-medium">Sunday: Emergency Refrigerator Calls Only</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Immediate Dispatch Hotline:</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-emerald-400 font-extrabold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Service Headquarters:</span>
                  <span className="text-slate-400">Cary, NC (Serving Wake County)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bob's Appliance Repair Service. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Cary &amp; Wake County homeowners with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/book" className="hover:text-white transition-colors">Book Diagnostic</Link>
            <span>•</span>
            <Link to="/specialties" className="hover:text-white transition-colors">Specialties</Link>
            <span>•</span>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-emerald-400 font-bold hover:underline">
              (919) 210-6086
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
