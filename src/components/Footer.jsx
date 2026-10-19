import React from 'react';
import { ArrowUp, Sparkles, Mail, MessageSquare, MapPin } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0102] text-white pt-12 md:pt-14 pb-20 md:pb-12 px-6 sm:px-8 md:px-12 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] mt-12 md:mt-16">
      
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto pb-12 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
        
        {/* Col 1: Big Typography & Essence */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-3.5 mb-5">
            <img
              src="/assets/calevi-logo-square-sm.png"
              alt="Calevi Comunicação e Marketing"
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-12 w-11 sm:w-12 object-contain"
              style={{ aspectRatio: '1 / 1' }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white leading-tight">
                CALEVI
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4AF37]">
                Comunicação & Marketing
              </span>
            </div>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#F5E6B3]/90 leading-snug mb-4">
            &ldquo;Transformamos ideias em oportunidades de crescimento.&rdquo;
          </p>

          <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm mb-6">
            A união entre o rigor do Jornalismo e a precisão do Marketing Estratégico. Marcas fortes, autênticas e relevantes.
          </p>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Solicitar Diagnóstico
          </button>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-6">
            Estrutura
          </span>
          <ul className="space-y-3 font-sans text-sm text-white/70">
            <li>
              <a href="#diferenciais" className="hover:text-white transition-colors">
                Diferenciais & Metodologia
              </a>
            </li>
            <li>
              <a href="#sobre-nos" className="hover:text-white transition-colors">
                Sobre Nós & Fundadoras
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">
                Protocolos & Serviços
              </a>
            </li>
            <li>
              <a href="#modelos" className="hover:text-white transition-colors">
                Modelos de Contratação
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact & Channel */}
        <div className="lg:col-span-4 flex flex-col">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-6">
            Conexão Direta
          </span>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <a href="mailto:contato@calevi.com.br" className="hover:text-white transition-colors">
                contato@calevi.com.br
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <a 
                href="https://wa.me/5547988174431"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-left"
              >
                Atendimento via WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Blumenau, SC - Atendimento Brasil</span>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-white/50">
            <span className="text-[#D4AF37] block mb-1">PROCESSO SELETIVO DE CLIENTES:</span>
            Limitamos o número de contas ativas para manter a proximidade, rigor e excelência artesanal.
          </div>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
        <div>
          © {CURRENT_YEAR} CALEVI COMUNICAÇÃO E MARKETING. TODOS OS DIREITOS RESERVADOS.
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span>JORNALISMO + MARKETING</span>
          <span>DESDE 2024</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-300 hover:text-[#D4AF37] transition-colors group cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>VOLTAR AO TOPO</span>
            <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
