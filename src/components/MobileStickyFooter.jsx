import React from 'react';
import { Phone, Calendar, Zap, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';

export default function MobileStickyFooter() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden pointer-events-auto bg-slate-900/95 backdrop-blur-md border-t border-red-500/30 p-2 sm:px-4 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Main Emergency Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/40 active:scale-[0.98] transition-transform"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="truncate">🔴 Emergency Fridge Repair: Tap to Call {COMPANY_INFO.phone}</span>
        </a>

        {/* Quick Schedule Icon/Button */}
        <Link
          to="/book"
          className="flex-shrink-0 flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-brand-800 hover:bg-brand-700 text-white text-[11px] font-bold border border-brand-600"
          title="Schedule Diagnostic Online"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-brand-300" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );
}
