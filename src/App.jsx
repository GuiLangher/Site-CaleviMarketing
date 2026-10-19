import React, { useState, lazy, Suspense } from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileBottomNav from './components/MobileBottomNav';

// Code Splitting: Lazy load non-critical below-the-fold components
const Features = lazy(() => import('./components/Features'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const ServicesProtocol = lazy(() => import('./components/ServicesProtocol'));
const PricingMembership = lazy(() => import('./components/PricingMembership'));
const Footer = lazy(() => import('./components/Footer'));
const BookingModal = lazy(() => import('./components/BookingModal'));

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#D4AF37] selection:text-[#100103] overflow-x-hidden">
      {/* Analog SVG Noise Texture Overlay */}
      <NoiseOverlay />

      {/* Floating Pill Navbar with Scroll Mutation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Landing Page Experience */}
      <main>
        {/* Hero: Opening Shot - Immediate Paint for Sub-Second LCP */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Features: Interactive Functional Artifacts */}
        <Suspense fallback={<div className="min-h-[480px] w-full" aria-hidden="true" />}>
          <Features />
        </Suspense>

        {/* Philosophy: The Contrast Manifesto & Founders Origin Story */}
        <Suspense fallback={<div className="min-h-[600px] w-full" aria-hidden="true" />}>
          <Philosophy onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* Services & Protocol: Sticky Stacking Archive */}
        <Suspense fallback={<div className="min-h-[600px] w-full" aria-hidden="true" />}>
          <ServicesProtocol onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* Membership & Investment: 3 Tiers with Popping Central Card */}
        <Suspense fallback={<div className="min-h-[500px] w-full" aria-hidden="true" />}>
          <PricingMembership onOpenBooking={handleOpenBooking} />
        </Suspense>
      </main>

      {/* Footer: Deep Background with Rounded-t-[4.5rem] and System Status Indicator */}
      <Suspense fallback={<div className="min-h-[240px] w-full" aria-hidden="true" />}>
        <Footer onOpenBooking={handleOpenBooking} />
      </Suspense>

      {/* Mobile Thumb-first Floating Bottom Bar */}
      <MobileBottomNav onOpenBooking={handleOpenBooking} />

      {/* Strategic Diagnosis Booking Modal - Loaded on demand ONLY when user clicks */}
      {isBookingOpen && (
        <Suspense fallback={null}>
          <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
        </Suspense>
      )}
    </div>
  );
}
