export const COMPANY_INFO = {
  name: "Bob's Appliance Repair Service",
  tagline: "Cary & Wake County’s Trusted Local Technicians",
  phone: "(919) 210-6086",
  phoneRaw: "9192106086",
  hours: "Monday – Saturday: 7:00 AM – 7:00 PM | Sunday: Emergency Refrigerator Calls Only",
  serviceArea: "Cary & Surrounding Wake County Neighborhoods",
  warranty: "90-Day Parts & Labor Warranty",
  emergencyNote: "Refrigerator and freezer failures are treated as immediate emergencies to save your groceries."
};

export const CORE_CATEGORIES = [
  {
    id: "refrigerator",
    name: "Refrigerator & Freezer Repair",
    tagline: "Emergency Food Preservation Priority",
    copy: "Compressor failures, ice maker issues, leaking water, and cooling loss. We treat fridge breakdowns as immediate emergencies.",
    icon: "Refrigerator",
    emergency: true,
    commonIssues: [
      "Not cooling / warm refrigerator compartment",
      "Compressor clicking or constant humming",
      "Ice maker stopped making ice or overflowing",
      "Water pooling on floor or inside crisper drawers",
      "Freezer frosted over or coils iced up",
      "Strange vibration or loud fan noises"
    ],
    supportedBrands: ["Sub-Zero", "Viking", "Whirlpool", "Samsung", "LG", "Bosch", "GE", "KitchenAid"]
  },
  {
    id: "washer-dryer",
    name: "Washer & Dryer Repair",
    tagline: "Same-Day Diagnostic Availability",
    copy: "Machines not spinning, draining issues, loud noises, or failure to heat up. Keep your laundry schedule on track.",
    icon: "WashingMachine",
    emergency: false,
    commonIssues: [
      "Washer not draining or standing water left in tub",
      "Spin cycle failure or unbalanced thumping",
      "Dryer tumbling but blowing cold air (no heat)",
      "High-pitched squealing or drum roller grinding",
      "Error codes on digital displays (e.g. 5E, LE, dC, OE)",
      "Washer door latch won't unlock or leaks from door seal"
    ],
    supportedBrands: ["LG", "Samsung", "Whirlpool", "GE", "Maytag", "Electrolux", "Bosch", "Speed Queen"]
  },
  {
    id: "oven-range",
    name: "Oven, Range & Cooktop Repair",
    tagline: "Precision Temperature & Gas Safety",
    copy: "Broken heating elements, gas ignition failures, erratic temperatures, and control board issues.",
    icon: "Flame",
    emergency: false,
    commonIssues: [
      "Bake or broil element burned out or sparking",
      "Gas surface burners clicking continuously or not lighting",
      "Oven temperature inaccurate by 25°F to 75°F",
      "Touchpad buttons unresponsive or display flashing",
      "Door won't unlock after self-clean cycle",
      "Convection fan making rattling noise"
    ],
    supportedBrands: ["Viking", "Wolf", "Bosch", "GE Profile", "Whirlpool", "Samsung", "LG", "JennAir"]
  }
];

export const BRAND_MATRIX = {
  luxury: [
    { name: "Sub-Zero", tag: "Built-in Refrigeration Specialists", luxury: true },
    { name: "Viking", tag: "Professional Kitchen Appliances", luxury: true }
  ],
  leading: [
    { name: "Whirlpool", tag: "America's Everyday Workhorse", luxury: false },
    { name: "Samsung", tag: "Smart Dial & Digital Inverter Systems", luxury: false },
    { name: "LG", tag: "Linear Compressor & DirectDrive Washers", luxury: false },
    { name: "Bosch", tag: "Precision German Engineering", luxury: false },
    { name: "GE (General Electric)", tag: "GE, GE Profile, & Café Series", luxury: false }
  ]
};

export const TRUST_BADGES = [
  {
    icon: "ShieldCheck",
    title: "90-Day Parts & Labor Warranty",
    description: "Every single repair we complete is backed by our rock-solid 90-day guarantee. If the same issue returns, we fix it free."
  },
  {
    icon: "Zap",
    title: "Urgent Response Times",
    description: "Refrigerator and freezer failures are emergencies. We prioritize food-preservation calls to save your groceries."
  },
  {
    icon: "BadgeDollarSign",
    title: "100% Diagnostic Fee Applied to Repair",
    description: "Our flat-rate diagnostic fee is entirely credited toward your repair balance when you approve the work. You only pay for the solution."
  },
  {
    icon: "Award",
    title: "Word-of-Mouth Recommended",
    description: "Over 85% of our service calls in Cary & Wake County come from happy neighbor referrals and repeat local families."
  }
];

export const SERVICE_AREAS = [
  { name: "Cary", note: "Primary Service Hub (Immediate Same-Day Dispatch)" },
  { name: "Apex", note: "Full Coverage (Under 20 Min Response)" },
  { name: "Morrisville", note: "RTP & Perimeter Park Coverage" },
  { name: "Holly Springs", note: "Residential Route Daily" },
  { name: "West Raleigh", note: "Wake County Neighboring Communities" },
  { name: "Fuquay-Varina", note: "Scheduled Routes Weekly" }
];

export const TESTIMONIALS = [
  {
    quote: "Our Sub-Zero fridge stopped cooling on a Saturday morning with $500 of fresh groceries inside. Bob's dispatched a technician within 2 hours. Diagnosed a faulty condenser fan, had the part in the van, and saved everything. Truly exceptional service!",
    author: "David & Sarah M.",
    location: "Preston Community, Cary, NC",
    appliance: "Sub-Zero Refrigerator Repair",
    rating: 5
  },
  {
    quote: "No gimmicks. The technician explained the flat-rate fee clearly, found the broken drain pump in our Whirlpool washer within 15 minutes, and credited the diagnostic right toward the repair bill. Honest and fair.",
    author: "Marcus T.",
    location: "Lochmere, Cary, NC",
    appliance: "Whirlpool Washer Repair",
    rating: 5
  },
  {
    quote: "I called 3 different companies for our Bosch oven that wouldn't heat up before Thanksgiving. Bob's was the only one who gave straight answers and showed up on time. Highly recommend to everyone in Wake County!",
    author: "Elena R.",
    location: "Twin Lakes, Morrisville, NC",
    appliance: "Bosch Oven Igniter",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does your flat-rate diagnostic fee work?",
    a: "We charge a simple, upfront flat-rate fee to dispatch a factory-trained technician with a fully stocked diagnostic van to your home. We inspect, test, and pinpoint the exact issue. If you approve our recommended repair, 100% of the diagnostic fee is credited directly toward your total repair cost—meaning you only pay for the solution!"
  },
  {
    q: "Do you offer emergency same-day appointments for refrigerators?",
    a: "Yes! A broken refrigerator or freezer puts hundreds of dollars of food at risk. We give top dispatch priority to cooling failures across Cary and Wake County, including Sunday emergency dispatch for active food spoilage emergencies."
  },
  {
    q: "What does the 90-Day Parts & Labor Warranty cover?",
    a: "Every part installed and every minute of labor provided is protected for 90 days. If the exact same issue or installed component fails within 90 days, we return and resolve it at absolutely zero cost to you."
  },
  {
    q: "Do your technicians carry common replacement parts in their vans?",
    a: "Yes. Our service vehicles are stocked with high-failure components across Sub-Zero, Viking, Whirlpool, Samsung, LG, Bosch, and GE (including igniters, thermistors, water valves, drain pumps, capacitors, and switches) so we can complete repairs on the very first visit whenever possible."
  }
];
