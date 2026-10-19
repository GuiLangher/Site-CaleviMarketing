import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Modelos', href: '#modelos' },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-8 max-w-5xl w-full ${
            isScrolled
              ? 'bg-[#100103]/85 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)]'
              : 'bg-transparent border border-white/5 backdrop-blur-sm'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Calevi Comunicação e Marketing - Início"
          >
            <img
              src="/assets/calevi-logo-square-sm.png"
              alt="Calevi Comunicação e Marketing"
              width="36"
              height="36"
              fetchPriority="high"
              decoding="async"
              className="h-8 sm:h-9 w-8 sm:w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ aspectRatio: '1 / 1' }}
            />
            <div className="flex flex-col text-left">
              <span className="font-serif tracking-widest text-sm sm:text-base font-bold text-white group-hover:text-[#F5E6B3] transition-colors leading-tight">
                CALEVI
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 hidden sm:inline-block">
                Comunicação & Marketing
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase font-medium tracking-widest text-white/70 hover:text-[#F5E6B3] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] px-4 sm:px-5 py-2 text-xs font-semibold text-[#100103] tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Agendar</span> Diagnóstico
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-white"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#100103]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 px-6 text-center animate-fade-in md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-2">
            Navegação Editorial
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-white hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 w-full max-w-xs flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#D4AF37]/30"
            >
              Agendar Diagnóstico Gratuito
            </button>
            <p className="font-mono text-[10px] text-white/40">
              Calevi Comunicação e Marketing
            </p>
          </div>
        </div>
      )}
    </>
  );
}
