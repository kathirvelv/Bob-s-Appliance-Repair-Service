import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ThermometerSnowflake, Waves, Flame, ShieldCheck, Phone, Calendar, 
  CheckCircle2, ArrowRight, Zap, AlertCircle, Wrench, ChevronDown 
} from 'lucide-react';
import { COMPANY_INFO, CORE_CATEGORIES, BRAND_MATRIX } from '../data/content';

export default function Specialties() {
  const [activeTab, setActiveTab] = useState('refrigerator');

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Appliance Specialties</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200">
            Certified Wake County Repair Specialists
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Appliance Specialties &amp; Brands
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-end luxury refrigeration like Sub-Zero and Viking to everyday household workhorses like Whirlpool, Samsung, LG, Bosch, and GE.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CORE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm ${
                activeTab === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.id === 'refrigerator' && <ThermometerSnowflake className="w-4 h-4 text-red-400" />}
              {cat.id === 'washer-dryer' && <Waves className="w-4 h-4 text-brand-400" />}
              {cat.id === 'oven-range' && <Flame className="w-4 h-4 text-amber-400" />}
              <span>{cat.name}</span>
              {cat.emergency && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-600 text-white uppercase font-black">
                  Urgent
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detailed Specialty Display */}
        {CORE_CATEGORIES.map((cat) => {
          if (cat.id !== activeTab) return null;
          return (
            <div key={cat.id} className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              
              {/* Header Box */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-brand-50 text-brand-600">
                      {cat.id === 'refrigerator' && <ThermometerSnowflake className="w-8 h-8 text-red-600" />}
                      {cat.id === 'washer-dryer' && <Waves className="w-8 h-8 text-brand-600" />}
                      {cat.id === 'oven-range' && <Flame className="w-8 h-8 text-amber-600" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{cat.name}</h2>
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{cat.tagline}</span>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 max-w-2xl leading-relaxed pt-2">
                    {cat.copy}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-3 flex-shrink-0">
                  <Link
                    to={`/book?type=${cat.id}`}
                    className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-md text-center"
                  >
                    Schedule Diagnostic
                  </Link>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-5 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 fill-current" />
                    <span>Call (919) 210-6086</span>
                  </a>
                </div>
              </div>

              {/* Grid: Symptoms We Fix vs What We Carry In Vans */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left: Symptoms Checklist */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Common Failure Symptoms We Fix:</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {cat.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Stocked Brands & First Visit Resolution */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-brand-600" />
                      <span>Supported Brands for {cat.name}:</span>
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.supportedBrands.map((brand, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our vans carry factory-spec replacement parts tailored to these specific platforms, including OEM sensors, igniters, heating coils, pumps, and relays.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> 90-Day Parts &amp; Labor Warranty
                    </span>
                    <span className="font-semibold text-brand-700">100% Diagnostic Credit</span>
                  </div>
                </div>

              </div>

            </div>
          );
        })}

        {/* Brand Matrix Summary Showcase */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              Factory-Level Expertise Across All Major Brands
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We stock common parts to get your specific brand up and running on the first visit.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {['Sub-Zero', 'Viking', 'Whirlpool', 'Samsung', 'LG', 'Bosch', 'GE'].map((b, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-500 transition-colors">
                <span className="font-black text-slate-800 text-sm block">{b}</span>
                <span className="text-[10px] text-slate-500 font-medium">Certified Parts</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base text-white bg-brand-600 hover:bg-brand-500 shadow-xl transition-all"
          >
            <Calendar className="w-5 h-5 text-brand-200" />
            <span>Schedule Your Diagnostic Visit in Cary</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
