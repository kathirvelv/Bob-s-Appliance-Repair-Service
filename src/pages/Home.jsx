import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Calendar, ShieldCheck, Clock, Zap, CheckCircle2, AlertCircle, 
  ChevronRight, ArrowRight, Star, HelpCircle, Wrench, Sparkles, Award,
  Check, ThermometerSnowflake, Droplets, Flame, Waves, DollarSign
} from 'lucide-react';
import { 
  COMPANY_INFO, CORE_CATEGORIES, BRAND_MATRIX, TRUST_BADGES, 
  TESTIMONIALS, FAQ_ITEMS, SERVICE_AREAS 
} from '../data/content';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('refrigerator');
  const [openFaq, setOpenFaq] = useState(0);

  // Diagnostic Credit Calculator state
  const [estimatedRepair, setEstimatedRepair] = useState(250);
  const diagnosticFee = 89;
  const netDueForRepair = Math.max(0, estimatedRepair - diagnosticFee);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/60">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headlines and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Tag Above Headline */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Cary &amp; Wake County’s #1 Word-of-Mouth Appliance Repair</span>
                <span className="hidden sm:inline text-brand-400">•</span>
                <span className="hidden sm:inline text-brand-700 font-semibold">90-Day Warranty</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Fast, Honest Appliance Repair in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">Cary &amp; Wake County</span>
              </h1>

              {/* Sub-Headline */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Refrigerator warm? Washer leaking? Get expert, same-day diagnostics from Cary's highest-recommended word-of-mouth repair specialists. No hidden fees—just reliable, flat-rate pricing.
              </p>

              {/* Call-to-Action Buttons (Aligned with equal height and border box) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                {/* Button 1 (Primary) */}
                <Link
                  to="/book"
                  className="w-full sm:w-auto h-14 px-7 border-2 border-transparent inline-flex items-center justify-center gap-2.5 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-xl shadow-brand-600/25 hover:shadow-2xl hover:shadow-brand-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5 text-brand-200 flex-shrink-0" />
                  <span>Schedule Your Diagnostic Now</span>
                </Link>

                {/* Button 2 (Secondary) */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto h-14 px-6 border-2 border-slate-300 hover:border-brand-500 inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-base text-slate-800 bg-white hover:bg-slate-50 shadow-md shadow-slate-200/50 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <Phone className="w-5 h-5 text-emerald-600 fill-current group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>Call {COMPANY_INFO.phone} for Emergency Service</span>
                </a>
              </div>

              {/* Above the Fold Trust Tickers */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>100% Diagnostic Credit</strong> toward repair</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Stocked Service Vans</strong> (Common parts on board)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>No Hourly Surprises</strong></span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Dispatch Hub & Appliance Quick Diagnostic Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-brand-900/10 border border-slate-200/80 relative">
                
                {/* Emergency Tag Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Cary &amp; Wake Dispatch: Active
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Same-Day Diagnostic Open
                  </span>
                </div>

                {/* Refrigerator Spoilage Emergency Callout Box */}
                <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-4 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ThermometerSnowflake className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-red-900 uppercase tracking-wide">
                        Food Preservation Priority Protocol
                      </h3>
                      <p className="text-xs text-red-700 mt-1 leading-snug">
                        Is your refrigerator above 40°F? Don't let your groceries spoil. We prioritize emergency fridge and freezer calls across Cary and Wake County.
                      </p>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-800 hover:text-red-900 underline mt-2"
                      >
                        ⚡ Direct Emergency Dispatch: (919) 210-6086 →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Diagnostics Selector (Equal Height Grid) */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Select Your Broken Appliance for Instant Guidance:
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('refrigerator')}
                      className={`h-20 rounded-xl border text-center transition-all flex flex-col items-center justify-center p-2 ${
                        selectedCategory === 'refrigerator'
                          ? 'border-brand-500 bg-brand-50/80 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <ThermometerSnowflake className={`w-5 h-5 mb-1 ${selectedCategory === 'refrigerator' ? 'text-brand-600' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold block text-slate-800 leading-tight">Fridge / Ice</span>
                      <span className="text-[10px] text-red-600 font-bold block">Urgent</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCategory('washer-dryer')}
                      className={`h-20 rounded-xl border text-center transition-all flex flex-col items-center justify-center p-2 ${
                        selectedCategory === 'washer-dryer'
                          ? 'border-brand-500 bg-brand-50/80 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <Waves className={`w-5 h-5 mb-1 ${selectedCategory === 'washer-dryer' ? 'text-brand-600' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold block text-slate-800 leading-tight">Washer/Dryer</span>
                      <span className="text-[10px] text-slate-500 font-medium block">Spin / Heat</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCategory('oven-range')}
                      className={`h-20 rounded-xl border text-center transition-all flex flex-col items-center justify-center p-2 ${
                        selectedCategory === 'oven-range'
                          ? 'border-brand-500 bg-brand-50/80 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <Flame className={`w-5 h-5 mb-1 ${selectedCategory === 'oven-range' ? 'text-brand-600' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold block text-slate-800 leading-tight">Oven / Stove</span>
                      <span className="text-[10px] text-slate-500 font-medium block">Gas &amp; Electric</span>
                    </button>
                  </div>

                  {/* Selected Appliance Info Quick Preview */}
                  {selectedCategory === 'refrigerator' && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 animate-fadeIn">
                      <div className="font-bold text-slate-800 flex items-center justify-between">
                        <span>Refrigerator &amp; Freezer Failures</span>
                        <span className="text-red-600 font-bold">Priority #1</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Compressor failures, cooling loss, clicking relays, water leaks, or ice maker jams.
                      </p>
                    </div>
                  )}

                  {selectedCategory === 'washer-dryer' && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 animate-fadeIn">
                      <div className="font-bold text-slate-800 flex items-center justify-between">
                        <span>Washer &amp; Dryer Problems</span>
                        <span className="text-brand-600 font-bold">Same-Day</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Not spinning, water won't drain, dryer blowing cold air, or loud grinding rollers.
                      </p>
                    </div>
                  )}

                  {selectedCategory === 'oven-range' && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 animate-fadeIn">
                      <div className="font-bold text-slate-800 flex items-center justify-between">
                        <span>Oven, Range &amp; Cooktops</span>
                        <span className="text-amber-600 font-bold">Precision Safe</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Burned heating elements, gas spark igniter failure, erratic bake temperatures, locked doors.
                      </p>
                    </div>
                  )}

                  <Link
                    to={`/book?type=${selectedCategory}`}
                    className="w-full h-12 mt-3 rounded-xl font-bold text-xs text-center text-white bg-slate-900 hover:bg-brand-600 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Schedule Diagnostic For This Machine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      90-Day Parts &amp; Labor Warranty
                    </span>
                    <span className="font-semibold text-brand-700">Flat-Rate Diagnostic</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. TRUST & TRANSPARENCY ROW (Consistent Card Heights) */}
      <section className="bg-white py-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Trust Badge 1 */}
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-brand-50/50 to-white border border-brand-100 shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-4 shadow-md shadow-brand-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  🛡️ 90-Day Parts &amp; Labor Warranty
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Every single repair we complete is backed by our rock-solid 90-day guarantee. If the same issue returns, we fix it free.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-100/60 text-[11px] font-bold text-brand-700 uppercase tracking-wide">
                100% Risk-Free Guarantee
              </div>
            </div>

            {/* Trust Badge 2 */}
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-red-50/50 to-white border border-red-100 shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-4 shadow-md shadow-red-500/20">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ⏱️ Urgent Response Times
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Refrigerator and freezer failures are emergencies. We prioritize food-preservation calls to save your groceries.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 text-[11px] font-bold text-red-700 uppercase tracking-wide">
                Food Preservation First
              </div>
            </div>

            {/* Trust Badge 3: 100% Diagnostic Credit */}
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  💵 100% Diagnostic Fee Credit
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  When you approve our repair solution, your entire diagnostic fee is applied directly toward your repair balance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100/60 text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                Zero Hidden Markups
              </div>
            </div>

            {/* Trust Badge 4: Word-of-Mouth Reputation */}
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 to-white border border-amber-100 shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ⭐ Cary's Word-of-Mouth Choice
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Built on neighborhood trust across Preston, Lochmere, Amberly, and Wake County with honest technician integrity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100/60 text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                85%+ Neighbor Referrals
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. THE FAIR-PRICE EXPLAINER (Flat-Rate Diagnostic Fee) */}
      <section id="fair-pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-brand-500/20 text-brand-300 border border-brand-400/30">
              The Transparent Diagnostic Guarantee
            </span>
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              No Pricing Surprises. Ever.
            </h2>
            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We don't believe in open-ended hourly fees or guessing games. We charge a straightforward, flat-rate fee to dispatch a certified technician to your home and accurately diagnose your machine's exact failure.
            </p>
            {/* The Best Part */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-base sm:text-lg font-medium inline-block text-left shadow-lg">
              <strong className="text-white font-extrabold block mb-1">🎉 The Best Part:</strong>
              If you choose to move forward with our recommended repair, we apply 100% of that diagnostic fee directly toward your repair balance. You only pay for the solution.
            </div>
          </div>

          {/* Side-by-Side Comparison: Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
            
            {/* Competitor / Old Way */}
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-slate-950/80 border border-red-900/30 text-slate-400 space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">The "Other Guy" Approach</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-red-950/80 text-red-300">Open-Ended Hourly Fees</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Unpredictable Invoices &amp; Truck Fees</h3>
                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>Charges an hourly clock that ticks while they look up manuals or make phone calls.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>Separate "trip fee" plus "diagnostic fee" that are pocketed on top of the repair bill.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>High-pressure sales tactics without giving written part vs. labor itemization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>Vague 30-day or no warranty on repairs.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-red-400/90 font-medium">
                Uncertain final repair cost
              </div>
            </div>

            {/* Bob's Appliance Repair Service Way */}
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-brand-950/90 to-slate-900 border-2 border-brand-500/60 shadow-xl shadow-brand-500/10 space-y-6 relative">
              <div className="absolute -top-3.5 right-6 bg-emerald-500 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                100% Diagnostic Credit
              </div>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-brand-800/60 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-300">The Bob's Appliance Way</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">Zero Hidden Fees</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Upfront Flat-Rate &amp; 100% Credited Fee</h3>
                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Flat-rate diagnostic dispatch:</strong> You know exactly what the diagnostic costs before the technician arrives.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>100% Applied to Repair:</strong> Approve our written quote and every penny of the diagnostic fee is credited.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Stocked Vans:</strong> Factory-spec parts for Sub-Zero, Whirlpool, LG, Bosch, GE, and Samsung on truck.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>90-Day Guarantee:</strong> Complete parts and labor protection if the issue ever returns.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-brand-800/60 text-xs text-emerald-300 font-bold">
                100% Transparent • Written Upfront Estimate
              </div>
            </div>

          </div>

          {/* Interactive Diagnostic Fee Credit Interactive Visualizer */}
          <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white">
                Interactive Diagnostic Credit Calculator
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                See how our 100% diagnostic waiver works on a sample repair estimate:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Sample Repair Estimate (Parts + Labor):</span>
                <span className="text-base font-extrabold text-brand-400">${estimatedRepair}</span>
              </div>
              <input
                type="range"
                min="120"
                max="600"
                step="10"
                value={estimatedRepair}
                onChange={(e) => setEstimatedRepair(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                aria-label="Sample Repair Cost Slider"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Minor Repair ($120)</span>
                <span>Standard Repair ($250)</span>
                <span>Major Component ($600)</span>
              </div>

              {/* Breakdown Grid: Aligned heights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-700 text-center items-stretch">
                <div className="h-full flex flex-col justify-center items-center p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  <span className="text-[11px] text-slate-400 block mb-1">Flat Diagnostic Fee</span>
                  <span className="text-base font-bold text-white">${diagnosticFee}</span>
                </div>
                <div className="h-full flex flex-col justify-center items-center p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/50">
                  <span className="text-[11px] text-emerald-400 block font-semibold mb-1">100% Credited on Repair</span>
                  <span className="text-base font-bold text-emerald-300">-${diagnosticFee}</span>
                </div>
                <div className="h-full flex flex-col justify-center items-center p-3.5 rounded-xl bg-brand-900/60 border border-brand-700/50">
                  <span className="text-[11px] text-brand-300 block font-semibold mb-1">Net Balance Due for Solution</span>
                  <span className="text-lg font-black text-white">${netDueForRepair}</span>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-400">
                  Result: <strong className="text-emerald-400">You pay $0 net for the diagnostic</strong> when you proceed with the repair. You only pay for the solution!
                </p>
                <div className="pt-4">
                  <Link
                    to="/book"
                    className="h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-lg shadow-brand-500/20 transition-all"
                  >
                    <span>Schedule Your Fair-Price Diagnostic</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 4. CORE REPAIR CATEGORIES (Equal Card Heights & Baseline Alignment) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Cary's Premier Appliance Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Fast, Expert Fixes for Your Vital Home Appliances
            </h2>
            <p className="text-slate-600 text-base">
              We stock the right parts in our vans to restore your household rhythm on the first appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Category 1: Refrigerator & Freezer Repair */}
            <div className="h-full flex flex-col justify-between rounded-3xl border-2 border-red-200 bg-gradient-to-b from-red-50/40 via-white to-white p-7 shadow-lg shadow-red-500/5 relative group hover:border-red-400 transition-all">
              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-red-600 text-white shadow-xs">
                  <Zap className="w-3 h-3 fill-current" />
                  Emergency Priority
                </span>
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
                  <ThermometerSnowflake className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Refrigerator &amp; Freezer Repair
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Compressor failures, ice maker issues, leaking water, and cooling loss. We treat fridge breakdowns as immediate emergencies.
                </p>

                {/* Common symptoms list */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Common Symptoms We Resolve:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <span>Fridge warm, but freezer still cold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <span>Clicking compressor relay or fan rattle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <span>Ice maker jammed or water dispenser leaking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <span>Evaporator coil frost build-up &amp; airflow block</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Row Aligned */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/book?type=refrigerator"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 hover:text-red-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Urgent Diagnostic</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  📞 Dispatch: (919) 210-6086
                </a>
              </div>
            </div>

            {/* Category 2: Washer & Dryer Repair */}
            <div className="h-full flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 hover:border-brand-400 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  <Waves className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Washer &amp; Dryer Repair
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Machines not spinning, draining issues, loud noises, or failure to heat up. Keep your laundry schedule on track.
                </p>

                {/* Common symptoms list */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Common Symptoms We Resolve:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></span>
                      <span>Standing water in washer drum after cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></span>
                      <span>Violent shaking or unbalanced spin error</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></span>
                      <span>Dryer running but leaving clothes damp &amp; cold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></span>
                      <span>Loud squeal from belt, pulley or drum rollers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Row Aligned */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/book?type=washer-dryer"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Laundry Diagnostic</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-semibold text-slate-500">Same-Day Open</span>
              </div>
            </div>

            {/* Category 3: Oven, Range & Cooktop Repair */}
            <div className="h-full flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 hover:border-amber-400 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <Flame className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Oven, Range &amp; Cooktop Repair
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Broken heating elements, gas ignition failures, erratic temperatures, and control board issues.
                </p>

                {/* Common symptoms list */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Common Symptoms We Resolve:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>Bake element blistered or not glowing red</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>Gas burner clicking repeatedly without catching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>Oven burning food or taking 45 mins to preheat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>Control board error codes (F-codes) or dead display</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Row Aligned */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/book?type=oven-range"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Cooking Diagnostic</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-semibold text-slate-500">Gas &amp; Electric</span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/specialties"
              className="h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl border border-slate-300 hover:border-brand-500 text-slate-800 font-bold text-sm bg-white hover:bg-slate-50 transition-all shadow-xs"
            >
              <span>Explore In-Depth Appliance Specialties Guide</span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </Link>
          </div>

        </div>
      </section>


      {/* 5. BRAND SPECIALTY MATRIX */}
      <section id="brands" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100/70 px-3 py-1 rounded-full border border-brand-200">
              Brand Specialty Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Factory-Level Expertise Across All Major Brands
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From high-end luxury refrigeration to reliable household workhorses, we stock common parts to get your specific brand up and running on the first visit.
            </p>
          </div>

          {/* Luxury Brands Checklist Grids (Sub-Zero | Viking) */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider border border-amber-300">
                ⭐ Luxury Brands
              </span>
              <span className="text-xs text-slate-500 font-medium">
                High-end built-in refrigeration &amp; professional ranges
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Sub-Zero */}
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs hover:shadow-md hover:border-amber-400 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-black text-slate-900">Sub-Zero</h4>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Refrigeration Specialist
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dual compressor systems, vacuum door seals, computer control boards, sub-zero ice makers, and condenser cleaning service.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Built-in 36"/42"/48"</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">PRO 48 Series</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Wine Storage Units</span>
                  </div>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> OEM-Spec Parts Stocked
                  </span>
                  <Link to="/book?brand=Sub-Zero" className="font-bold text-brand-600 hover:underline">
                    Schedule Sub-Zero →
                  </Link>
                </div>
              </div>

              {/* Viking */}
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs hover:shadow-md hover:border-amber-400 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-black text-slate-900">Viking</h4>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Professional Kitchens
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-BTU brass surface burners, electronic spark modules, oven bake igniters, convection blowers, and professional ranges.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Professional 5/7 Series</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Dual Fuel Ranges</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Built-In Fridges</span>
                  </div>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Precision Gas Certified
                  </span>
                  <Link to="/book?brand=Viking" className="font-bold text-brand-600 hover:underline">
                    Schedule Viking →
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Leading Brands Grid (Whirlpool | Samsung | LG | Bosch | GE) */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-md bg-brand-100 text-brand-900 text-xs font-extrabold uppercase tracking-wider border border-brand-300">
                🏆 Leading Household Brands
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Everyday workhorses with high first-visit resolution rates
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              
              {/* Whirlpool */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">Whirlpool</h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Core Stock</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    America’s trusted brand. We carry drain pumps, lid locks, heating elements, thermistors, and water inlet valves in all vans.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] mt-auto">
                  <span className="text-emerald-600 font-bold">95% Same-Day Parts</span>
                  <Link to="/book?brand=Whirlpool" className="font-bold text-brand-600 hover:underline">Book →</Link>
                </div>
              </div>

              {/* Samsung */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">Samsung</h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Digital Inverter</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    French door ice maker updates, drain tube freezing fixes, inverter board diagnosis, and front-load washer spider arm/bearing repairs.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] mt-auto">
                  <span className="text-emerald-600 font-bold">Ice Maker Specialists</span>
                  <Link to="/book?brand=Samsung" className="font-bold text-brand-600 hover:underline">Book →</Link>
                </div>
              </div>

              {/* LG */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">LG</h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">DirectDrive</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Linear compressor warranty assistance, smart ThinQ error clearing, washer hall sensors, and high-efficiency drain pump motors.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] mt-auto">
                  <span className="text-emerald-600 font-bold">Linear Compressor Care</span>
                  <Link to="/book?brand=LG" className="font-bold text-brand-600 hover:underline">Book →</Link>
                </div>
              </div>

              {/* Bosch */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">Bosch</h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">German Precision</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    800 Series refrigeration, high-end dishwashers &amp; laundry, circulation pumps, control modules, and precision bake elements.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] mt-auto">
                  <span className="text-emerald-600 font-bold">Diagnostic Interface</span>
                  <Link to="/book?brand=Bosch" className="font-bold text-brand-600 hover:underline">Book →</Link>
                </div>
              </div>

              {/* GE (General Electric) */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">GE (General Electric)</h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">GE • Profile • Café</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Comprehensive coverage of GE, GE Profile, and Café series. Refrigerator defrost heaters, oven igniters, and washer transmissions.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] mt-auto">
                  <span className="text-emerald-600 font-bold">Van Stock Ready</span>
                  <Link to="/book?brand=GE" className="font-bold text-brand-600 hover:underline">Book →</Link>
                </div>
              </div>

              {/* Extra Brand Card: KitchenAid / Maytag */}
              <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white border border-dashed border-slate-300 shadow-xs">
                <div>
                  <h4 className="text-base font-bold text-slate-800">Have Another Brand?</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    We also service KitchenAid, Maytag, JennAir, Electrolux, Frigidaire, Kenmore, and Speed Queen throughout Wake County.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <Link to="/book" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                    <span>Ask About Your Brand</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 6. NEIGHBORHOOD REPUTATION & REAL REVIEWS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Community Recommendations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Cary Families Recommend Bob's
            </h2>
            <p className="text-slate-600 text-base">
              Over 85% of our daily calls are word-of-mouth recommendations between neighbors in Wake County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="h-full flex flex-col justify-between p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="font-extrabold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-brand-600 font-semibold">{t.location}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.appliance}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Wake County Service Areas Pills */}
          <div className="mt-14 p-6 rounded-3xl bg-brand-50/60 border border-brand-200/60 text-center">
            <h4 className="text-sm font-bold text-slate-900 mb-3">
              Fast Dispatch Routes Daily Across Wake County:
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {SERVICE_AREAS.map((a, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-brand-200 text-xs font-bold text-brand-900 shadow-2xs">
                  📍 {a.name} ({a.note})
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100/60 px-3 py-1 rounded-full border border-brand-200">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about our flat-rate diagnostics, 90-day warranty, and dispatch.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:text-brand-600 transition-colors"
                >
                  <span>{item.q}</span>
                  <span className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 transition-transform ${openFaq === idx ? 'rotate-180 bg-brand-100 text-brand-700' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <span>🛡️ 90-Day Parts &amp; Labor Warranty on Every Completed Repair</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready for Honest, Same-Day Appliance Diagnostics in Cary?
          </h2>

          <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Don't let a broken appliance disrupt your household or risk spoiled groceries. Lock in your technician visit now with 100% diagnostic fee credit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="w-full sm:w-auto h-14 px-8 rounded-xl font-extrabold text-base text-brand-950 bg-white hover:bg-brand-50 shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-brand-700" />
              <span>Schedule Your Diagnostic Now</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto h-14 px-8 rounded-xl font-extrabold text-base text-white bg-red-600 hover:bg-red-500 shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Emergency Call: (919) 210-6086</span>
            </a>
          </div>

          <div className="text-xs text-brand-200">
            <span>Monday – Saturday: 7:00 AM – 7:00 PM</span>
            <span className="mx-2">•</span>
            <span className="text-amber-300 font-semibold">Sunday: Emergency Refrigerator Calls Only</span>
          </div>

        </div>
      </section>

    </div>
  );
}
