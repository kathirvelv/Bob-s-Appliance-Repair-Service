import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Phone, Calendar, Clock, MapPin, ShieldCheck, AlertTriangle, 
  CheckCircle2, ArrowRight, Info, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/content';

export default function BookService() {
  const [searchParams] = useSearchParams();
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    propertyAddress: '',
    applianceType: 'Refrigerator / Freezer',
    applianceBrand: '',
    urgencyLevel: 'Emergency (Food Spoilage Risk)',
    issueDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Pre-fill from query params if available
  useEffect(() => {
    const typeParam = searchParams.get('type');
    const brandParam = searchParams.get('brand');

    setFormData(prev => ({
      ...prev,
      applianceType: typeParam === 'washer-dryer' 
        ? 'Washer / Dryer' 
        : typeParam === 'oven-range' 
          ? 'Oven / Range / Stove' 
          : 'Refrigerator / Freezer',
      applianceBrand: brandParam || prev.applianceBrand
    }));
  }, [searchParams]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for dispatch verification.';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Email is required for confirmation receipt.';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      errs.emailAddress = 'Please enter a valid email address.';
    }
    if (!formData.propertyAddress.trim()) {
      errs.propertyAddress = 'Please provide your Cary or Wake County address.';
    }
    if (!formData.issueDescription.trim()) {
      errs.issueDescription = 'Please describe the appliance failure so our technician can pack the correct parts.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('.form-error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingCode = 'BOB-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        code: bookingCode,
        data: { ...formData },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
      });

      // Fire celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      propertyAddress: '',
      applianceType: 'Refrigerator / Freezer',
      applianceBrand: '',
      urgencyLevel: 'Emergency (Food Spoilage Risk)',
      issueDescription: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Indicator */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Book Service &amp; Contact</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Technician Scheduling Intake
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Schedule Your Diagnostic Visit
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill out this quick form to lock in our next available technician slot. For active refrigerator breakdowns, call us directly for faster dispatch.
          </p>
        </div>

        {/* Success Modal / Confirmation Card */}
        {submittedBooking ? (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-emerald-500 p-7 sm:p-10 shadow-2xl space-y-6 animate-fadeIn">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                Service Appointment Request Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                You're in the Queue! Reference #{submittedBooking.code}
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Our Cary dispatch coordinator is reviewing your appliance details and will call or text you shortly at <strong className="text-slate-900">{submittedBooking.data.phoneNumber}</strong> to confirm your technician’s exact arrival window.
              </p>
            </div>

            {/* Emergency Prompt if Food Spoilage */}
            {submittedBooking.data.urgencyLevel.includes('Emergency') && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-red-900 uppercase">Emergency Refrigerator Alert Logged</h4>
                    <p className="text-xs text-red-700">Food spoilage risk has bumped your ticket to urgent dispatch status.</p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs inline-flex items-center justify-center gap-1.5 shadow-md flex-shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Dispatch: (919) 210-6086</span>
                </a>
              </div>
            )}

            {/* Appointment Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
                Appointment Summary Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block text-xs">Customer Name:</span>
                  <strong className="text-slate-800">{submittedBooking.data.fullName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Phone &amp; Email:</span>
                  <strong className="text-slate-800">{submittedBooking.data.phoneNumber}</strong>
                  <span className="text-slate-500 text-xs block">{submittedBooking.data.emailAddress}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Property Address:</span>
                  <strong className="text-slate-800">{submittedBooking.data.propertyAddress}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Appliance &amp; Brand:</span>
                  <strong className="text-slate-800">
                    {submittedBooking.data.applianceType} {submittedBooking.data.applianceBrand ? `(${submittedBooking.data.applianceBrand})` : ''}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Urgency Selected:</span>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                    submittedBooking.data.urgencyLevel.includes('Emergency')
                      ? 'bg-red-100 text-red-800'
                      : 'bg-brand-100 text-brand-800'
                  }`}>
                    {submittedBooking.data.urgencyLevel}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Fair-Price Diagnostic Guarantee:</span>
                  <strong className="text-emerald-700">100% Credited Toward Completed Repair</strong>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-500 block text-xs">Issue Description:</span>
                <p className="text-slate-700 italic mt-0.5">"{submittedBooking.data.issueDescription}"</p>
              </div>
            </div>

            {/* Warranty & Next Steps */}
            <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200 flex items-center gap-3 text-xs text-brand-900">
              <ShieldCheck className="w-6 h-6 text-brand-600 flex-shrink-0" />
              <span>
                <strong>90-Day Parts &amp; Labor Guarantee:</strong> Your repair will be backed by our complete 90-day peace of mind guarantee once completed.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
              >
                ← Schedule Another Service Appointment
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto h-11 px-6 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs inline-flex items-center justify-center transition-colors shadow-xs"
              >
                Return to Home Page
              </Link>
            </div>
          </div>
        ) : (
          /* Main 2-Column Grid: Form + Footprint/Contact */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xl shadow-brand-900/5 border border-slate-200/90 relative">
                
                {/* Form Header Info Banner */}
                <div className="mb-6 p-4 rounded-2xl bg-brand-50/60 border border-brand-200/70 flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-brand-950 leading-relaxed">
                    <strong>100% Flat-Rate Diagnostic Credit:</strong> Our certified technician diagnoses your machine's exact failure. If you approve the repair, 100% of the diagnostic fee is credited directly toward your repair balance!
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      1. Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      placeholder="e.g., Sarah Mitchell"
                      className={`w-full h-12 px-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                        errors.fullName ? 'border-red-500 bg-red-50/30 form-error' : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Contact Row: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Field 2: Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        2. Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                        }}
                        placeholder="e.g., (919) 555-0192"
                        className={`w-full h-12 px-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.phoneNumber ? 'border-red-500 bg-red-50/30 form-error' : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                      />
                      {errors.phoneNumber && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phoneNumber}</p>}
                    </div>

                    {/* Field 3: Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        3. Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={(e) => {
                          setFormData({ ...formData, emailAddress: e.target.value });
                          if (errors.emailAddress) setErrors({ ...errors, emailAddress: null });
                        }}
                        placeholder="e.g., sarah@example.com"
                        className={`w-full h-12 px-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.emailAddress ? 'border-red-500 bg-red-50/30 form-error' : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                      />
                      {errors.emailAddress && <p className="text-xs text-red-600 mt-1 font-medium">{errors.emailAddress}</p>}
                    </div>
                  </div>

                  {/* Field 4: Property Address (Cary / Wake County) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      4. Property Address (Cary / Wake County) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, propertyAddress: e.target.value });
                        if (errors.propertyAddress) setErrors({ ...errors, propertyAddress: null });
                      }}
                      placeholder="e.g., 104 Highcroft Dr, Cary, NC 27519"
                      className={`w-full h-12 px-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                        errors.propertyAddress ? 'border-red-500 bg-red-50/30 form-error' : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                    />
                    {errors.propertyAddress && <p className="text-xs text-red-600 mt-1 font-medium">{errors.propertyAddress}</p>}
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      We dispatch throughout Cary, Apex, Morrisville, Holly Springs, and West Raleigh.
                    </span>
                  </div>

                  {/* Appliance Details Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Field 5: Select Your Appliance Type (Dropdown) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        5. Select Your Appliance Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="applianceType"
                        value={formData.applianceType}
                        onChange={(e) => setFormData({ ...formData, applianceType: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="Refrigerator / Freezer">Refrigerator / Freezer</option>
                        <option value="Washer / Dryer">Washer / Dryer</option>
                        <option value="Oven / Range / Stove">Oven / Range / Stove</option>
                        <option value="Other">Other Major Household Appliance</option>
                      </select>
                    </div>

                    {/* Field 6: Appliance Brand (If Known) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        6. Appliance Brand (If Known)
                      </label>
                      <input
                        type="text"
                        name="applianceBrand"
                        value={formData.applianceBrand}
                        onChange={(e) => setFormData({ ...formData, applianceBrand: e.target.value })}
                        placeholder="e.g., Sub-Zero, Whirlpool, Samsung, LG"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  {/* Field 7: Select Urgency Level (Radio Buttons: Equal Card Heights) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      7. Select Urgency Level <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-stretch">
                      
                      {/* Emergency Option */}
                      <label className={`h-full flex flex-col justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.urgencyLevel.includes('Emergency')
                          ? 'border-red-500 bg-red-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="urgencyLevel"
                            value="Emergency (Food Spoilage Risk)"
                            checked={formData.urgencyLevel === 'Emergency (Food Spoilage Risk)'}
                            onChange={(e) => setFormData({ ...formData, urgencyLevel: e.target.value })}
                            className="text-red-600 focus:ring-red-500 h-4 w-4"
                          />
                          <span className="text-xs font-black text-red-900">
                            🔴 Emergency
                          </span>
                        </div>
                        <span className="text-[11px] text-red-700 mt-1 pl-6 leading-tight">
                          Food Spoilage Risk (Prioritized Dispatch)
                        </span>
                      </label>

                      {/* Next-Day Preferred */}
                      <label className={`h-full flex flex-col justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.urgencyLevel.includes('Next-Day')
                          ? 'border-amber-500 bg-amber-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="urgencyLevel"
                            value="Next-Day Preferred"
                            checked={formData.urgencyLevel === 'Next-Day Preferred'}
                            onChange={(e) => setFormData({ ...formData, urgencyLevel: e.target.value })}
                            className="text-amber-600 focus:ring-amber-500 h-4 w-4"
                          />
                          <span className="text-xs font-black text-amber-900">
                            🟡 Next-Day Preferred
                          </span>
                        </div>
                        <span className="text-[11px] text-amber-800 mt-1 pl-6 leading-tight">
                          Fast resolution within 24-48 hrs
                        </span>
                      </label>

                      {/* Standard / Flexible */}
                      <label className={`h-full flex flex-col justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.urgencyLevel.includes('Standard')
                          ? 'border-emerald-500 bg-emerald-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="urgencyLevel"
                            value="Standard / Flexible"
                            checked={formData.urgencyLevel === 'Standard / Flexible'}
                            onChange={(e) => setFormData({ ...formData, urgencyLevel: e.target.value })}
                            className="text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                          />
                          <span className="text-xs font-black text-emerald-900">
                            🟢 Standard / Flexible
                          </span>
                        </div>
                        <span className="text-[11px] text-emerald-800 mt-1 pl-6 leading-tight">
                          Convenient week routing
                        </span>
                      </label>

                    </div>
                  </div>

                  {/* Active Refrigerator Alert if emergency radio is picked */}
                  {formData.urgencyLevel.includes('Emergency') && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between gap-3 text-xs text-red-900 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span>Active Food Spoilage? For fastest emergency slot:</span>
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="font-extrabold text-red-700 underline flex-shrink-0 hover:text-red-800"
                      >
                        📞 Call (919) 210-6086
                      </a>
                    </div>
                  )}

                  {/* Field 8: Describe the Issue (Large Text Box) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      8. Describe the Issue <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="issueDescription"
                      value={formData.issueDescription}
                      onChange={(e) => {
                        setFormData({ ...formData, issueDescription: e.target.value });
                        if (errors.issueDescription) setErrors({ ...errors, issueDescription: null });
                      }}
                      placeholder="e.g., 'Fridge is clicked on but blowing warm air and the temperature display reads 52°F' or 'Washer won't drain and stops mid-cycle'"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                        errors.issueDescription ? 'border-red-500 bg-red-50/30 form-error' : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                    ></textarea>
                    {errors.issueDescription && <p className="text-xs text-red-600 mt-1 font-medium">{errors.issueDescription}</p>}
                  </div>

                  {/* Submit Button (Aligned Height h-14) */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 px-6 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-xl shadow-brand-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Locking In Your Diagnostic Slot...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 text-brand-200" />
                          <span>Secure My Service Appointment</span>
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        90-Day Guarantee
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        100% Diagnostic Credit on Repair
                      </span>
                    </div>
                  </div>

                </form>

              </div>
            </div>

            {/* Service Area & Contact Footprint Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Contact Information Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-7 shadow-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    Direct Contact Information
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">
                    Technician On Duty
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>

                {/* Immediate Dispatch Hotline */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    Immediate Dispatch Hotline
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-5 h-5 fill-current text-emerald-500 group-hover:scale-110 transition-transform" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <span className="text-[11px] text-slate-400 block">
                    Tap to dial directly for same-day dispatch or emergency questions.
                  </span>
                </div>

                {/* Hours of Operation */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span>Hours of Operation</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <div className="flex justify-between">
                      <span>Monday – Saturday:</span>
                      <strong className="text-white">7:00 AM – 7:00 PM</strong>
                    </div>
                    <div className="flex justify-between text-red-300 font-semibold pt-1 border-t border-slate-800">
                      <span>Sunday:</span>
                      <span>Emergency Refrigerator Calls Only</span>
                    </div>
                  </div>
                </div>

                {/* Warranty reminder badge */}
                <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-brand-950/80 p-3 rounded-xl border border-brand-800/60">
                  <ShieldCheck className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span>
                    Backed by our <strong>90-Day Parts &amp; Labor Warranty</strong> on all completed work.
                  </span>
                </div>
              </div>

              {/* Service Area & Footprint Explainer */}
              <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200/90 space-y-4">
                
                {/* Section Title */}
                <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  <span>Serving Cary &amp; Surrounding Wake County Neighborhoods</span>
                </h3>

                {/* Body Copy */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Because we operate heavily on community recommendations and word-of-mouth reputation, our service vans travel strictly within Cary and nearby Wake County communities to keep our response times blazing fast.
                </p>

                {/* Coverage zones list with response times */}
                <div className="pt-2 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Dedicated Local Dispatch Hubs:
                  </span>
                  <div className="space-y-1.5">
                    {SERVICE_AREAS.map((area, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50/50 border border-slate-200/80 flex items-center justify-between text-xs transition-colors"
                      >
                        <span className="font-bold text-slate-800">📍 {area.name}</span>
                        <span className="text-slate-500 text-[11px]">{area.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Sub-Zero • Viking • Whirlpool • LG • GE • Samsung</span>
                  <span className="text-brand-600 font-bold">Fast Van Transit</span>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
