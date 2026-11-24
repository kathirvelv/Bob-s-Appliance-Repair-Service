import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';
import Home from './pages/Home';
import BookService from './pages/BookService';
import Specialties from './pages/Specialties';
import NotFound from './pages/NotFound';

// Automatically scroll to top on route change or handle hash
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-500 selection:text-white">
        {/* Global Navigation Header */}
        <Header />

        {/* Multi-page Route content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookService />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Emergency Footer: "🔴 Emergency Fridge Repair: Tap to Call (919) 210-6086" */}
        <MobileStickyFooter />
      </div>
    </Router>
  );
}
