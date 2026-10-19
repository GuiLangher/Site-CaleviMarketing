import React from 'react';
import { Sparkles, MessageCircle, Layers } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  return (
    <nav 
      aria-label="Navegação mobile de polegar"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-between gap-2 p-2 rounded-full bg-[#100103]/90 backdrop-blur-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
    >
      {/* Quick Jump to Services */}
      <a
        href="#servicos"
        className="flex-1 py-3 px-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 min-h-[44px]"
      >
        <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Serviços</span>
      </a>

      {/* Main Thumb CTA */}
      <button
        onClick={onOpenBooking}
        className="flex-[2] py-3 px-4 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95 transition-transform"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Agendar Agora</span>
      </button>

      {/* Quick WhatsApp Link */}
      <a
        href="https://wa.me/5547988174431"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#2A0408] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 min-h-[44px] min-w-[44px] active:scale-95 transition-transform"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </nav>
  );
}
