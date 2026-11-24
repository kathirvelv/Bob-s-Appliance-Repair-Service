import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ showTagline = true, lightMode = false }) {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg flex-shrink-0"
      aria-label="Bob's Appliance Repair Service Home"
    >
      {/* Precision Shield Emblem */}
      <div className="relative flex-shrink-0">
        <svg 
          className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 drop-shadow-xs transition-transform duration-200 group-hover:scale-105" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shieldGradIcon" x1="10" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="goldGradIcon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {/* Shield Outer */}
          <path d="M50 6 C78 6, 94 18, 94 42 C94 74, 58 95, 50 100 C42 95, 6 74, 6 42 C6 18, 22 6, 50 6 Z" fill="url(#shieldGradIcon)" />
          <path d="M50 11 C74 11, 89 21, 89 42 C89 70, 57 89, 50 94 C43 89, 11 70, 11 42 C11 21, 26 11, 50 11 Z" stroke="#38bdf8" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
          
          {/* Appliance Silhouette */}
          <rect x="32" y="26" width="36" height="48" rx="4" fill="#0f172a" stroke="#ffffff" strokeWidth="3" />
          <line x1="32" y1="46" x2="68" y2="46" stroke="#ffffff" strokeWidth="2.5" />
          <rect x="36" y="32" width="3" height="9" rx="1.5" fill="#38bdf8" />
          <rect x="36" y="52" width="3" height="13" rx="1.5" fill="#38bdf8" />
          
          {/* Diagnostic Wrench */}
          <path d="M62 26 L74 38 M69 24 C72 21, 77 22, 79 25 L73 31 L77 35 L83 29 C86 31, 87 36, 84 39 L48 75 C45 78, 40 78, 37 75 C34 72, 34 67, 37 64 Z" fill="url(#goldGradIcon)" />
        </svg>
        {/* Pulsing Active Status Beacon - anchored safely inside the emblem bounds */}
        <span className="absolute top-0 right-0 flex h-2.5 w-2.5 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
        </span>
      </div>

      {/* Brand Text: Bob's Appliance Repair Service */}
      <div className="flex flex-col justify-center leading-none select-none flex-shrink-0">
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className={`text-base sm:text-lg xl:text-xl font-black tracking-tight ${lightMode ? 'text-white' : 'text-slate-900'}`}>
            Bob's
          </span>
          <span className="text-base sm:text-lg xl:text-xl font-black tracking-tight text-brand-600">
            Appliance
          </span>
          <span className={`text-base sm:text-lg xl:text-xl font-black tracking-tight ${lightMode ? 'text-white' : 'text-slate-900'}`}>
            Repair
          </span>
          <span className={`text-[9px] xl:text-[10px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded ml-0.5 ${
            lightMode ? 'bg-brand-900/80 text-brand-300 border border-brand-700/60' : 'bg-brand-50 text-brand-700 border border-brand-200'
          }`}>
            Service
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] xl:text-[11px] font-semibold tracking-normal mt-1 whitespace-nowrap ${lightMode ? 'text-slate-300' : 'text-slate-500'}`}>
            Cary &amp; Wake County’s Trusted Local Technicians
          </span>
        )}
      </div>
    </Link>
  );
}
