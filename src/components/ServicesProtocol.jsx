import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowUpRight, 
  Palette 
} from 'lucide-react';

export default function ServicesProtocol({ onOpenBooking }) {
  const protocolCards = [
    {
      id: "protocol-01",
      number: "01",
      code: "PILARES // AUTORIDADE E PRESENÇA",
      title: "Estratégia, Posicionamento & Imprensa",
      tagline: "Para marcas que precisam de voz firme, verdade editorial e presença institucional inquestionável.",
      badge: "JORNALISMO E ESTRATÉGIA",
      deliverables: [
        "Estratégia integrada de Marketing e Comunicação",
        "Diagnóstico e Posicionamento de Marca no mercado",
        "Consultoria Executiva e Planejamento Editorial",
        "Assessoria de Imprensa e Relacionamento com a Mídia",
        "Gestão de Reputação e Comunicação Institucional",
      ],
      svgType: "geometric",
      bgGradient: "from-[#2A0408] via-[#1A0306] to-[#100103]",
      borderColor: "border-[#D4AF37]/40",
      accentGlow: "rgba(212, 175, 55, 0.2)",
    },
    {
      id: "protocol-02",
      number: "02",
      code: "PILARES // IDENTIDADE E DESIGN",
      title: "Design de Marcas & Campanhas Criativas",
      tagline: "Estética refinada, consistência visual e conceitos criativos que elevam o valor percebido da marca.",
      badge: "DIREÇÃO DE ARTE E DESIGN",
      deliverables: [
        "Criação de Identidade Visual e Design para Marcas",
        "Desenvolvimento de Campanhas Conceituais e Criativas",
        "Artes e Peças Gráficas para Canais Digitais e Impressos",
        "Materiais de Comunicação e Apresentações Corporativas",
        "Manual de Identidade Visual e Padrão Estético",
      ],
      svgType: "laser",
      bgGradient: "from-[#360203] via-[#200306] to-[#100103]",
      borderColor: "border-[#6A0D14]/80",
      accentGlow: "rgba(106, 13, 20, 0.35)",
    },
    {
      id: "protocol-03",
      number: "03",
      code: "PILARES // CONTEÚDO E CRESCIMENTO",
      title: "Conteúdo, Audiovisual & Performance",
      tagline: "Produção cuidadosa e distribuição estratégica para transformar visibilidade em faturamento.",
      badge: "AUDIOVISUAL E TRÁFEGO PAGO",
      deliverables: [
        "Gestão Completa de Redes Sociais e Calendário Editorial",
        "Produção e Direção de Fotos e Vídeos Profissionais",
        "Captação de Conteúdo Presencial e Fotografia de Estúdio",
        "Gestão de Anúncios Pagos (Instagram, Facebook e Google)",
        "Otimização Contínua de Campanhas e Retorno sobre Investimento",
      ],
      svgType: "waveform",
      bgGradient: "from-[#2A0408] via-[#140103] to-[#0A0102]",
      borderColor: "border-[#D4AF37]/50",
      accentGlow: "rgba(212, 175, 55, 0.25)",
    },
  ];

  return (
    <section id="servicos" className="relative py-28 sm:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-24">
        <h2 className="text-[clamp(2.3rem,5.5vw,4.6rem)] font-serif font-bold text-white leading-tight">
          Nossas disciplinas de atuação <br />
          <span className="italic font-normal text-gold-gradient">
            em camadas sinérgicas.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/75 font-light leading-relaxed">
          Cada protocolo foi desenhado para agir como uma engrenagem de alta precisão. Da voz à imagem, da mídia à conversão em vendas.
        </p>
      </div>

      {/* Sticky Card Stack Container */}
      <div className="space-y-12 sm:space-y-16">
        {protocolCards.map((card, index) => (
          <div
            key={card.id}
            className="sticky top-24 sm:top-28 z-10 transition-all duration-500 will-change-transform"
            style={{
              top: `calc(5.5rem + ${index * 1.5}rem)`,
            }}
          >
            <div
              className={`rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-14 border ${card.borderColor} bg-gradient-to-br ${card.bgGradient} shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-sm relative overflow-hidden`}
              style={{
                boxShadow: `0 20px 50px -10px ${card.accentGlow}, 0 10px 20px -5px rgba(0,0,0,0.8)`,
                transform: 'translateZ(0)',
              }}
            >
              {/* Subtle watermarked background number */}
              <div className="absolute right-6 top-2 font-serif text-[clamp(6rem,16vw,14rem)] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
                {card.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                
                {/* Left Column: Information & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-semibold text-[#D4AF37] tracking-wider uppercase px-3 py-1 rounded-full bg-[#100103]/60 border border-[#D4AF37]/30">
                        {card.code}
                      </span>
                      <span className="font-mono text-[11px] text-white/50 uppercase tracking-widest">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-[clamp(1.8rem,3.8vw,3rem)] font-serif font-bold text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="text-base text-white/80 font-light leading-relaxed mb-8">
                      {card.tagline}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 mb-8">
                      {card.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#F5E6B3]" />
                          </div>
                          <span className="text-sm sm:text-base text-white/85 font-light group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#F5E6B3] hover:text-white transition-colors group/btn cursor-pointer"
                    >
                      <span>Incluir no Diagnóstico</span>
                      <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                    <span className="font-mono text-[11px] text-white/40">
                      DISCIPLINA // 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Right Column: Tailored SVG Animation Artifact */}
                <div className="lg:col-span-5 flex items-center justify-center p-4">
                  <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-[#0B0103]/90 border border-white/15 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                    
                    {/* SVG 1: Motivo Geométrico Rotativo */}
                    {card.svgType === 'geometric' && (
                      <div className="relative flex items-center justify-center w-48 h-48">
                        <svg
                          viewBox="0 0 200 200"
                          className="w-full h-full animate-spin-slow"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        >
                          {/* Concentric Golden Geometries */}
                          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                          <circle cx="100" cy="100" r="68" stroke="#FFFFFF" strokeWidth="1" opacity="0.2" />
                          <rect x="36" y="36" width="128" height="128" stroke="#D4AF37" strokeWidth="1.2" opacity="0.6" transform="rotate(45 100 100)" />
                          <rect x="48" y="48" width="104" height="104" stroke="#F5E6B3" strokeWidth="1" opacity="0.5" />
                          <circle cx="100" cy="100" r="35" stroke="#D4AF37" strokeWidth="1.5" />
                          {/* Crosshairs */}
                          <line x1="10" y1="100" x2="190" y2="100" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
                          <line x1="100" y1="10" x2="100" y2="190" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
                          <circle cx="100" cy="100" r="5" fill="#D4AF37" />
                        </svg>
                        <div className="absolute font-mono text-[9px] text-[#F5E6B3]/70 tracking-widest uppercase">
                          PROPORÇÃO ÁUREA
                        </div>
                      </div>
                    )}

                    {/* SVG 2: Linha de Laser escaneando grade */}
                    {card.svgType === 'laser' && (
                      <div className="relative w-48 h-48 border border-[#6A0D14]/80 rounded-2xl overflow-hidden bg-[#160205]/80 flex flex-col justify-between p-2">
                        {/* Millimetric Grid Background */}
                        <div 
                          className="absolute inset-0 opacity-25"
                          style={{
                            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                            backgroundSize: '16px 16px',
                          }}
                        />

                        {/* Animated Laser Scanning Line */}
                        <div 
                          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_15px_#D4AF37] animate-scan z-20"
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        />
                        
                        {/* Target Elements inside Grid */}
                        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/50">
                          <span>DIREÇÃO DE ARTE</span>
                          <span className="text-[#D4AF37]">PRECISÃO VISUAL</span>
                        </div>

                        <div className="relative z-10 my-auto text-center">
                          <div className="w-16 h-16 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
                            <Palette className="w-7 h-7 text-[#D4AF37]" />
                          </div>
                          <span className="mt-2 block font-mono text-[10px] text-white/70">
                            IDENTIDADE CONSOLIDADA
                          </span>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/40">
                          <span>DESIGN PERSONALIZADO</span>
                          <span>DIGITAL & IMPRESSO</span>
                        </div>
                      </div>
                    )}

                    {/* SVG 3: Forma de onda pulsante (EKG / Frequência de Conexão) */}
                    {card.svgType === 'waveform' && (
                      <div className="relative w-48 h-48 flex flex-col justify-center items-center">
                        <svg
                          viewBox="0 0 200 80"
                          className="w-full overflow-visible"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Pulsing EKG Path */}
                          <motion.path
                            d="M0 40 L40 40 L50 20 L65 60 L78 10 L92 70 L105 35 L120 40 L160 40 L175 25 L185 40 L200 40"
                            stroke="#D4AF37"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0.2 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          {/* Ambient glow copy */}
                          <path
                            d="M0 40 L40 40 L50 20 L65 60 L78 10 L92 70 L105 35 L120 40 L160 40 L175 25 L185 40 L200 40"
                            stroke="#6A0D14"
                            strokeWidth="5"
                            strokeLinecap="round"
                            opacity="0.5"
                          />
                        </svg>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="font-mono text-[11px] text-[#F5E6B3] tracking-widest uppercase">
                            ENGAJAMENTO E CONEXÃO
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-white/40 mt-1">
                          DISTRIBUIÇÃO CONTÍNUA & RESULTADOS
                        </span>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
