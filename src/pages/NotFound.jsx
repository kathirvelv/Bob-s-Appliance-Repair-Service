import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        <h1 className="text-2xl font-black text-slate-900">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          The page you are looking for does not exist. Need fast appliance repair in Cary or Wake County?
        </p>
        <div className="space-y-2 pt-2">
          <Link
            to="/"
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-600 fill-current" />
            <span>Call Dispatch: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
