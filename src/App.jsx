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
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenBooking = (plan) => {
    setSelectedPlan(typeof plan === 'string' ? plan : null);
    setIsBookingOpen(true);
  };
  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#D4AF37] selection:text-[#100103] overflow-x-hidden">
      {/* Analog SVG Noise Texture Overlay */}
      <NoiseOverlay />

      {/* Floating Pill Navbar with Scroll Mutation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Landing Page Experience */}
      <main>
        {/* 1. Tela de início - Immediate Paint for Sub-Second LCP */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Diferenciais: Metodologia e Acompanhamento */}
        <Suspense fallback={<div className="min-h-[480px] w-full" aria-hidden="true" />}>
          <Features />
        </Suspense>

        {/* 3. Serviços: Protocolos e Entregáveis */}
        <Suspense fallback={<div className="min-h-[600px] w-full" aria-hidden="true" />}>
          <ServicesProtocol onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* 4. Modelos: Modelos de Contratação e Investimento */}
        <Suspense fallback={<div className="min-h-[500px] w-full" aria-hidden="true" />}>
          <PricingMembership onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* 5. Sobre Nós & 6. 6 Pilares de Valor */}
        <Suspense fallback={<div className="min-h-[600px] w-full" aria-hidden="true" />}>
          <Philosophy onOpenBooking={handleOpenBooking} />
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
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            initialPlan={selectedPlan}
          />
        </Suspense>
      )}
    </div>
  );
}
