import React from 'react';
import { ArrowRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Luxury Red to Black Gradient: starting from left in red (#6B0D14), rising up-right into deep black */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 85% 90% at 0% 75%, rgba(107, 13, 20, 0.95) 0%, rgba(54, 2, 3, 0.75) 45%, transparent 80%),
            linear-gradient(55deg, #6B0D14 0%, #48060B 28%, #2A0408 55%, #160205 78%, #080002 92%, #000000 100%)
          `,
          transform: 'translateZ(0)',
        }}
        aria-hidden="true"
      />

      {/* Subtle bottom transition into the global dark theme */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 65%, rgba(16, 1, 3, 0.8) 88%, #100103 100%)',
          transform: 'translateZ(0)',
        }}
        aria-hidden="true"
      />

      {/* Warm ambient crimson glow accentuating the lower-left - Optimized pure radial gradient with GPU layer */}
      <div 
        className="absolute -bottom-16 -left-10 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(107, 13, 20, 0.45) 0%, rgba(107, 13, 20, 0.15) 50%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
        aria-hidden="true"
      />

      {/* Content centered vertically with left alignment to fill the upper space */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full my-auto">
        <div className="max-w-4xl flex flex-col items-start -mt-4 sm:-mt-8">

          {/* Headline with massive contrast: Sans Bold vs Giant Serif Italic - Instant sub-second LCP */}
          <div className="w-full animate-hero-fade">
            <span className="block font-sans font-extrabold uppercase tracking-tight text-white/90 text-[clamp(1.4rem,4vw,3.2rem)] leading-none mb-1">
              Transformamos ideias em
            </span>
            <h1 className="font-serif italic font-normal text-white text-[clamp(3.1rem,9.5vw,7.8rem)] leading-[0.9] tracking-tight pb-2">
              <span className="text-gold-gradient drop-shadow-[0_10px_35px_rgba(212,175,55,0.25)]">
                Resultados
              </span>{' '}
              <span className="text-white/95">reais.</span>
            </h1>
          </div>

          {/* Strategic Narrative / Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-delay-1">
            Unimos o rigor narrativo do <strong className="font-semibold text-white">Jornalismo</strong> à precisão de crescimento do <strong className="font-semibold text-white">Marketing Estratégico</strong>. Ajudamos marcas a encontrarem sua voz autêntica, fortalecerem seu posicionamento e conquistarem seu espaço.
          </p>

          {/* CTA Group with high thumb accessibility */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-hero-fade-delay-2">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Agendar Diagnóstico Estratégico
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </button>

            <a
              href="#diferenciais"
              className="px-6 py-4 rounded-full glass-pill border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37]/50 transition-all duration-300 text-sm font-medium tracking-wide flex items-center justify-center gap-2 text-center"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              Conhecer a Metodologia
            </a>
          </div>

          {/* Quick credibility telemetry ticker */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-white/70 font-medium tracking-wide animate-hero-fade-delay-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>+8 ANOS EM JORNALISMO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>+5 ANOS EM MARKETING E COMUNICAÇÃO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>DO PLANEJAMENTO À EXECUÇÃO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
