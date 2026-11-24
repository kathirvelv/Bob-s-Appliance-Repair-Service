# Bob's Appliance Repair Service 🛠️

> **Cary & Wake County’s Trusted Local Technicians**  
> *Fast, Honest Appliance Repair with 100% Diagnostic Fee Credit & 90-Day Parts & Labor Warranty.*

![Bob's Appliance Repair Service Logo](public/logo.svg)

---

## 🌟 Overview

**Bob's Appliance Repair Service** is a high-performance, mobile-first multi-page React application built for Cary and Wake County homeowners. Designed specifically to reflect trustworthy word-of-mouth reputation, transparent flat-rate pricing, and rapid emergency food-preservation dispatch.

### Key Features

- **Site-Wide Global Navigation & Header**:
  - Custom Brand Shield Logo & Tagline (*Cary & Wake County’s Trusted Local Technicians*).
  - Prominent Click-to-Call Phone CTA: `📞 Call Now: (919) 210-6086`.
  - Primary Action Button: `Book Diagnostic Service`.
- **Mobile Sticky Emergency Footer**:
  - Always-accessible urgent button: `🔴 Emergency Fridge Repair: Tap to Call (919) 210-6086`.
- **Page 1: Home & Appliance Specialties (`/`)**:
  - **Hero Section**: Above-the-fold value proposition, immediate dual CTAs, live dispatch status indicators.
  - **Trust & Transparency Row**: 90-Day Parts & Labor Warranty, Urgent Response Times (food-preservation priority), 100% Diagnostic Credit.
  - **The Fair-Price Explainer**: Demonstrating how 100% of the flat-rate diagnostic fee applies directly toward completed repairs, featuring an interactive diagnostic credit calculator!
  - **Brand Specialty Matrix**:
    - **Luxury Brands**: Sub-Zero | Viking
    - **Leading Brands**: Whirlpool | Samsung | LG | Bosch | GE (General Electric)
  - **Core Repair Categories**:
    - Refrigerator & Freezer Repair (Emergency Priority)
    - Washer & Dryer Repair
    - Oven, Range & Cooktop Repair
  - **Community Reviews & FAQ**: Verified neighbor testimonials from Preston, Lochmere, and Morrisville.
- **Page 2: Book Service & Contact (`/book`)**:
  - **Urgent Diagnostic Scheduling Intake Form**:
    1. Full Name
    2. Phone Number
    3. Email Address
    4. Property Address (Cary / Wake County)
    5. Select Your Appliance Type (Dropdown)
    6. Appliance Brand (If Known)
    7. Select Urgency Level (Radio Buttons: 🔴 Emergency, 🟡 Next-Day, 🟢 Standard)
    8. Describe the Issue (Large Text Box)
    - Action Button: `[ Secure My Service Appointment ]`
    - Form validation, instant confirmation ticket, emergency prompt, and celebratory confetti.
  - **Service Area & Contact Footprint**:
    - Business Name: *Bob's Appliance Repair Service*
    - Immediate Dispatch Hotline: *(919) 210-6086*
    - Hours: *Monday – Saturday: 7:00 AM – 7:00 PM | Sunday: Emergency Refrigerator Calls Only*
    - Wake County Coverage: Cary, Apex, Morrisville, Holly Springs, West Raleigh, Fuquay-Varina.
- **Page 3: Dedicated Specialties Deep Dive (`/specialties`)**:
  - Detailed symptom diagnostic checklist for refrigerators, washers, and ovens.

---

## 🚀 Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3 (custom typography, elevation, glassmorphism, responsive breakpoints)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Animations / Effects**: Canvas Confetti, CSS Keyframe Transitions
- **Deployment**: Vercel ready with `vercel.json` SPA rewrites

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Production build**:
   ```bash
   npm run build
   ```

4. **Preview build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 GitHub Push Instructions

To push this repository to GitHub:

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete multi-page Bob's Appliance Repair Service website"
   ```

2. Create a new repository on GitHub (e.g., `bobs-appliance-repair-service`).

3. Link the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/bobs-appliance-repair-service.git
   git push -u origin main
   ```

---

## ⚡ Vercel Deployment Instructions

### Method 1: Deploy with Vercel CLI
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the project directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - Set up and deploy: **Yes**
   - Which scope: **Your personal or team account**
   - Link to existing project: **No**
   - Project name: **bobs-appliance-repair-service**
   - In which directory is your code located: **./**
   - Want to modify settings: **No** (Vite settings are pre-configured)
4. For production:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Web Dashboard (Connected to GitHub)
1. Push your repository to GitHub (following the steps above).
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your `bobs-appliance-repair-service` GitHub repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy**. Vercel will build the project and issue a live SSL URL.

> **Note**: `vercel.json` is already configured with SPA rewrites (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`) to ensure client-side routing on `/book` and `/specialties` works seamlessly without 404 errors on direct reloads.

---

## 📞 Business Contact Details

- **Company**: Bob's Appliance Repair Service
- **Dispatch Phone**: (919) 210-6086
- **Tagline**: Cary & Wake County’s Trusted Local Technicians
- **Service Hub**: Cary, NC
