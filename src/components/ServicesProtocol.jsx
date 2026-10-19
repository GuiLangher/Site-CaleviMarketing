import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Palette, 
  ArrowRight, 
  Video, 
  TrendingUp, 
  Newspaper,
  Globe,
  ShoppingBag
} from 'lucide-react';

export default function ServicesProtocol({ onOpenBooking }) {
  const protocolCards = [
    {
      id: "pilar-01",
      number: "01",
      code: "PILAR 01 // VISÃO E FUNDAÇÃO",
      title: "Estratégia e posicionamento",
      tagline: "Construção da essência, clareza narrativa e direcionamento de mercado para que sua marca conquiste liderança e autoridade autêntica.",
      badge: "DIAGNÓSTICO & BRANDING",
      deliverables: [
        "Estratégias de marketing",
        "Posicionamento de marca",
        "Consultoria de marketing",
        "Planejamento de comunicação",
      ],
      svgType: "geometric",
      bgGradient: "from-[#2A0408] via-[#1A0306] to-[#100103]",
      borderColor: "border-[#D4AF37]/45",
      accentGlow: "rgba(212, 175, 55, 0.2)",
    },
    {
      id: "pilar-02",
      number: "02",
      code: "PILAR 02 // NARRATIVA E CONEXÃO",
      title: "Conteúdo e redes sociais",
      tagline: "Produção audiovisual cinematográfica e gestão editorial de canais digitais que transformam atenção em relacionamento e desejo de compra.",
      badge: "AUDIOVISUAL & SOCIAL",
      deliverables: [
        "Gestão de redes sociais",
        "Produção de fotos e vídeos",
        "Captação de conteúdo",
        "Fotografia profissional",
      ],
      svgType: "cinema",
      bgGradient: "from-[#30050A] via-[#1C0307] to-[#100103]",
      borderColor: "border-[#85161E]/70 hover:border-[#D4AF37]/40",
      accentGlow: "rgba(133, 22, 30, 0.3)",
    },
    {
      id: "pilar-03",
      number: "03",
      code: "PILAR 03 // IDENTIDADE E ESTÉTICA",
      title: "Design e campanhas",
      tagline: "Estética refinada, consistência visual e conceitos criativos que elevam o valor percebido da sua marca em cada ponto de contato.",
      badge: "DIREÇÃO DE ARTE & DESIGN",
      deliverables: [
        "Criação de artes e peças gráficas",
        "Design para marcas",
        "Desenvolvimento de campanhas criativas",
        "Materiais de comunicação",
      ],
      svgType: "laser",
      bgGradient: "from-[#360203] via-[#200306] to-[#100103]",
      borderColor: "border-[#D4AF37]/50",
      accentGlow: "rgba(212, 175, 55, 0.25)",
    },
    {
      id: "pilar-04",
      number: "04",
      code: "PILAR 04 // TRAÇÃO E ESCALA",
      title: "Performance e crescimento",
      tagline: "Engenharia de tráfego pago e distribuição estratégica de anúncios para impulsionar alcance qualificado e gerar receita real.",
      badge: "TRÁFEGO PAGO & NEGÓCIOS",
      deliverables: [
        "Gestão de anúncios pagos",
        "Estratégias para campanhas digitais",
        "Ações para ampliar alcance e oportunidades comerciais",
      ],
      svgType: "performance",
      bgGradient: "from-[#2A0408] via-[#140103] to-[#0A0102]",
      borderColor: "border-[#D4AF37]/45",
      accentGlow: "rgba(212, 175, 55, 0.22)",
    },
    {
      id: "pilar-05",
      number: "05",
      code: "PILAR 05 // AUTORIDADE E REPUTAÇÃO",
      title: "Comunicação e imprensa",
      tagline: "Articulação institucional e assessoria de imprensa estratégica para posicionar a marca em pautas de relevância e consolidar sua credibilidade.",
      badge: "JORNALISMO & RELAÇÕES PÚBLICAS",
      deliverables: [
        "Assessoria de imprensa",
        "Estratégias de comunicação institucional",
        "Relacionamento com a mídia",
      ],
      svgType: "press",
      bgGradient: "from-[#38040A] via-[#1E0205] to-[#100103]",
      borderColor: "border-[#D4AF37]/55",
      accentGlow: "rgba(212, 175, 55, 0.28)",
    },
    {
      id: "pilar-06",
      number: "06",
      code: "PILAR 06 // PLATAFORMAS DIGITAIS",
      title: "Criação de site",
      tagline: "Desenvolvimento de páginas de alta conversão, lojas virtuais intuitivas e otimização para os primeiros lugares do Google.",
      badge: "WEB, E-COMMERCE & SEO",
      deliverables: [
        "Criação de Landing Pages",
        "Criação de Ecomerce",
        "Posicionamento no Google",
      ],
      svgType: "website",
      bgGradient: "from-[#2E0409] via-[#1A0306] to-[#100103]",
      borderColor: "border-[#D4AF37]/50",
      accentGlow: "rgba(212, 175, 55, 0.25)",
    },
  ];

  return (
    <section id="servicos" className="relative py-28 sm:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-24">
        <h2 className="text-[clamp(2.3rem,5.5vw,4.6rem)] font-serif font-bold text-white leading-tight">
          Nossos <span className="italic font-normal text-gold-gradient">Serviços</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/75 font-light leading-relaxed">
          Cada pilar foi desenhado para agir como uma engrenagem de alta precisão. Da voz à imagem, da mídia à conversão em novos negócios.
        </p>
      </div>

      {/* Sticky Card Stack Container */}
      <div className="space-y-12 sm:space-y-16">
        {protocolCards.map((card, index) => (
          <div
            key={card.id}
            className="sticky top-20 sm:top-24 md:top-28 z-10 transition-all duration-500 will-change-transform"
            style={{
              top: `calc(4.5rem + ${index * 1.1}rem)`,
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
                      <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase px-3 py-1 rounded-full bg-[#100103]/60 border border-[#D4AF37]/30">
                        {card.code}
                      </span>
                      <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-[clamp(1.8rem,3.8vw,3rem)] font-serif font-bold text-white mb-3 capitalize">
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

                  {/* Card Footer: Metadata and Booking CTA */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono font-medium text-white/40 tracking-wider">
                      PILAR // 0{index + 1} DE 0{protocolCards.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking && onOpenBooking(card.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5E6B3] hover:text-white px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#100103]/60 transition-all hover:scale-[1.02] active:scale-95 group/btn"
                    >
                      <span>Consultar este pilar</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Tailored SVG Animation Artifact */}
                <div className="lg:col-span-5 flex items-center justify-center p-2 sm:p-4">
                  <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-[#0B0103]/90 border border-white/15 p-5 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                    
                    {/* SVG 1: Alvo Estratégico com Círculo Externo Rotativo e Círculo Interno em Foco (Estratégia e Posicionamento) */}
                    {card.svgType === 'geometric' && (
                      <div className="relative flex items-center justify-center w-48 h-48 sm:w-52 sm:h-52">
                        <svg
                          viewBox="0 0 200 200"
                          className="w-full h-full overflow-visible"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* 1. Geometrias de referência proporcionais (Estáticas) */}
                          <circle cx="100" cy="100" r="68" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.18" />
                          <rect x="36" y="36" width="128" height="128" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" transform="rotate(45 100 100)" />
                          <rect x="48" y="48" width="104" height="104" stroke="#F5E6B3" strokeWidth="0.9" opacity="0.3" />

                          {/* 2. Eixos de mira / Crosshairs */}
                          <line x1="12" y1="100" x2="188" y2="100" stroke="#D4AF37" strokeWidth="0.8" opacity="0.35" />
                          <line x1="100" y1="12" x2="100" y2="188" stroke="#D4AF37" strokeWidth="0.8" opacity="0.35" />

                          {/* 3. Círculo externo pontilhado girando continuamente */}
                          <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            style={{ transformOrigin: "100px 100px" }}
                          >
                            <circle
                              cx="100"
                              cy="100"
                              r="90"
                              stroke="#D4AF37"
                              strokeWidth="1.3"
                              strokeDasharray="4 6"
                              opacity="0.75"
                            />
                            {/* Anel auxiliar sutil pontilhado */}
                            <circle
                              cx="100"
                              cy="100"
                              r="78"
                              stroke="#F5E6B3"
                              strokeWidth="0.6"
                              strokeDasharray="2 8"
                              opacity="0.3"
                            />
                          </motion.g>

                          {/* 4. Círculo interno diminuindo e centralizando como um alvo até virar uma bola pequena no centro */}
                          <motion.circle
                            cx="100"
                            cy="100"
                            stroke="#D4AF37"
                            initial={{ r: 48, opacity: 0.9, strokeWidth: 1.5, fill: "rgba(212, 175, 55, 0)" }}
                            animate={{
                              r: [48, 30, 15, 4.5],
                              strokeWidth: [1.5, 1.8, 2, 0],
                              fill: [
                                "rgba(212, 175, 55, 0)",
                                "rgba(212, 175, 55, 0.05)",
                                "rgba(212, 175, 55, 0.35)",
                                "rgba(212, 175, 55, 1)",
                              ],
                              opacity: [0.35, 0.75, 1, 1],
                            }}
                            transition={{
                              duration: 2.6,
                              repeat: Infinity,
                              ease: [0.22, 1, 0.36, 1],
                              times: [0, 0.45, 0.8, 1],
                            }}
                          />

                          {/* Onda contínua secundária em defasagem para manter o efeito fluido de alvo */}
                          <motion.circle
                            cx="100"
                            cy="100"
                            stroke="#F5E6B3"
                            initial={{ r: 48, opacity: 0, strokeWidth: 1.2, fill: "rgba(212, 175, 55, 0)" }}
                            animate={{
                              r: [48, 30, 15, 4.5],
                              strokeWidth: [1.2, 1.5, 1.8, 0],
                              fill: [
                                "rgba(212, 175, 55, 0)",
                                "rgba(212, 175, 55, 0)",
                                "rgba(212, 175, 55, 0.2)",
                                "rgba(245, 230, 179, 1)",
                              ],
                              opacity: [0, 0.5, 0.9, 1],
                            }}
                            transition={{
                              duration: 2.6,
                              repeat: Infinity,
                              delay: 1.3,
                              ease: [0.22, 1, 0.36, 1],
                              times: [0, 0.45, 0.8, 1],
                            }}
                          />

                          {/* 5. Bola pequena central do alvo com pulso sutil de confirmação */}
                          <motion.circle
                            cx="100"
                            cy="100"
                            r="4.5"
                            fill="#D4AF37"
                            animate={{
                              scale: [0.9, 1.45, 0.9],
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 1.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            style={{ transformOrigin: "100px 100px" }}
                          />
                        </svg>
                      </div>
                    )}

                    {/* SVG 2: Visor de Câmera & Captação (Conteúdo e Redes Sociais) */}
                    {card.svgType === 'cinema' && (
                      <div className="relative w-48 h-48 sm:w-52 sm:h-52 border border-white/20 rounded-2xl overflow-hidden bg-[#160205]/90 flex flex-col justify-between p-3.5 shadow-inner">
                        {/* Cinematic Corner Brackets */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />
                        
                        {/* Top HUD: REC Blinking & Quality */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/80 z-10">
                          <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span className="font-bold text-red-400">REC</span>
                            <span className="text-white/60">00:04:18:24</span>
                          </div>
                          <span className="text-[#D4AF37] font-semibold">4K RAW // 24FPS</span>
                        </div>

                        {/* Center Reticle & Iris - Animated Rotating Aperture */}
                        <div className="relative my-auto flex flex-col items-center justify-center">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border border-dashed border-[#D4AF37]/70 flex items-center justify-center relative"
                          >
                            <motion.div 
                              animate={{ scale: [1, 1.08, 1] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                            >
                              <Video className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5E6B3]" />
                            </motion.div>
                            <div className="absolute w-full h-[1px] bg-[#D4AF37]/35" />
                            <div className="absolute h-full w-[1px] bg-[#D4AF37]/35" />
                          </motion.div>
                        </div>

                        {/* Bottom HUD: Live Equalizer Bars & Optics */}
                        <div className="flex items-center justify-between text-[9px] font-mono text-white/60 z-10 border-t border-white/10 pt-2">
                          <div className="flex items-center gap-1">
                            <span className="text-[#F5E6B3]">AUDIO</span>
                            <div className="flex items-end gap-0.5 h-3">
                              <motion.span 
                                animate={{ height: ["20%", "85%", "35%", "95%", "40%"] }} 
                                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }} 
                                className="w-1 bg-[#D4AF37] rounded-xs" 
                              />
                              <motion.span 
                                animate={{ height: ["60%", "25%", "100%", "45%", "80%"] }} 
                                transition={{ repeat: Infinity, duration: 0.65, delay: 0.1, ease: "easeInOut" }} 
                                className="w-1 bg-[#D4AF37] rounded-xs" 
                              />
                              <motion.span 
                                animate={{ height: ["30%", "95%", "40%", "85%", "30%"] }} 
                                transition={{ repeat: Infinity, duration: 0.9, delay: 0.2, ease: "easeInOut" }} 
                                className="w-1 bg-[#D4AF37] rounded-xs" 
                              />
                              <motion.span 
                                animate={{ height: ["70%", "30%", "100%", "50%", "90%"] }} 
                                transition={{ repeat: Infinity, duration: 0.75, delay: 0.15, ease: "easeInOut" }} 
                                className="w-1 bg-emerald-400 rounded-xs" 
                              />
                            </div>
                          </div>
                          <span className="tracking-wider">f/1.8 · 50mm · ISO 400</span>
                        </div>
                      </div>
                    )}

                    {/* SVG 3: Linha de Laser escaneando grade (Design e Campanhas) */}
                    {card.svgType === 'laser' && (
                      <div className="relative w-48 h-48 sm:w-52 sm:h-52 border border-[#6A0D14]/80 rounded-2xl overflow-hidden bg-[#160205]/80 flex flex-col justify-between p-3">
                        {/* Millimetric Grid Background */}
                        <div 
                          className="absolute inset-0 opacity-25"
                          style={{
                            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                            backgroundSize: '16px 16px',
                          }}
                        />

                        {/* Animated Laser Scanning Line - Full Container Travel */}
                        <motion.div 
                          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_18px_#D4AF37,0_0_6px_#FFFFFF] z-20 pointer-events-none"
                          animate={{ top: ["5%", "95%", "5%"] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.8,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Animated Laser Glow Trail */}
                        <motion.div 
                          className="absolute inset-x-0 h-10 bg-gradient-to-b from-[#D4AF37]/15 to-transparent pointer-events-none z-10"
                          animate={{ top: ["0%", "82%", "0%"] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.8,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Target Elements inside Grid */}
                        <div className="relative z-10 flex items-center justify-between text-[10px] font-medium text-white/60 tracking-wider">
                          <span>DIREÇÃO DE ARTE</span>
                          <span className="text-[#D4AF37] font-semibold">PRECISÃO VISUAL</span>
                        </div>

                        <div className="relative z-10 my-auto text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-black/40 backdrop-blur-xs shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                          >
                            <Palette className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                          </motion.div>
                          <span className="mt-2 block text-[11px] font-semibold text-white/90 tracking-wider">
                            IDENTIDADE & PEÇAS
                          </span>
                          <div className="flex items-center justify-center gap-1.5 mt-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-white/30" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#6A0D14] border border-white/30" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F5E6B3] border border-white/30" />
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[10px] font-medium text-white/50 tracking-wider">
                          <span>DESIGN AUTORAL</span>
                          <span>DIGITAL & IMPRESSO</span>
                        </div>
                      </div>
                    )}

                    {/* SVG 4: Forma de onda e Tração de Performance (Performance e Crescimento) */}
                    {card.svgType === 'performance' && (
                      <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex flex-col justify-between p-3.5 rounded-2xl bg-[#120205]/90 border border-[#D4AF37]/30 overflow-hidden">
                        {/* Top Header */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                          <div className="flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span className="text-[#D4AF37] font-semibold">TRÁFEGO PAGO</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-emerald-400 font-bold">ROAS 4.8x</span>
                          </div>
                        </div>

                        {/* Dynamic Animated Curve */}
                        <div className="relative h-20 sm:h-24 w-full flex items-center justify-center my-auto">
                          <svg viewBox="0 0 180 70" className="w-full h-full overflow-visible" fill="none">
                            <path
                              d="M 5 60 Q 45 55, 75 42 T 130 25 T 175 8"
                              stroke="#6A0D14"
                              strokeWidth="6"
                              strokeLinecap="round"
                              opacity="0.6"
                            />
                            <motion.path
                              d="M 5 60 Q 45 55, 75 42 T 130 25 T 175 8"
                              stroke="#D4AF37"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <circle cx="175" cy="8" r="4" fill="#F5E6B3" className="animate-pulse" />
                          </svg>
                        </div>

                        {/* Bottom Telemetry HUD */}
                        <div className="border-t border-white/10 pt-2">
                          <div className="flex items-center justify-between text-[10px] font-mono whitespace-nowrap gap-2">
                            <span className="text-white/60 shrink-0">ALCANCE DIGITAL</span>
                            <span className="text-[#F5E6B3] font-bold shrink-0">+80% EXPANSÃO</span>
                          </div>
                          <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-emerald-400 h-full w-[80%]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SVG 5: Radar Editorial & Ondas Institucionais (Comunicação e Imprensa) */}
                    {card.svgType === 'press' && (
                      <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex flex-col justify-between p-3.5 rounded-2xl bg-[#140205]/90 border border-[#D4AF37]/35 overflow-hidden">
                        {/* Top Header */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                          <span className="text-[#D4AF37] font-semibold">ASSESSORIA</span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-white/80 font-bold">REDE DE MÍDIA</span>
                          </div>
                        </div>

                        {/* Center Radar / Broadcast Waves */}
                        <div className="relative flex items-center justify-center my-auto w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                          <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                          <div className="absolute inset-2 rounded-full border border-white/20 animate-pulse" />
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-black/50 z-10">
                            <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5E6B3]" />
                          </div>
                        </div>

                        {/* Bottom Status */}
                        <div className="border-t border-white/10 pt-2 text-center">
                          <span className="text-[10px] font-mono text-[#F5E6B3] font-semibold tracking-wider block">
                            IMPRENSA & REPUTAÇÃO
                          </span>
                          <span className="text-[9px] font-mono text-white/50 tracking-wider">
                            CONEXÃO INSTITUCIONAL DIRETA
                          </span>
                        </div>
                      </div>
                    )}

                    {/* SVG 6: Criação de site & Plataformas (Landing Pages, E-commerce e Google) */}
                    {card.svgType === 'website' && (
                      <div className="relative w-48 h-48 sm:w-52 sm:h-52 border border-[#D4AF37]/35 rounded-2xl overflow-hidden bg-[#140205]/95 flex flex-col justify-between p-3.5 shadow-inner">
                        {/* Browser Top Window Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          {/* Mini URL pill */}
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono text-white/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="truncate max-w-[90px]">suamarca.com.br</span>
                          </div>
                        </div>

                        {/* Middle: Interactive Landing Page & E-commerce Wireframe Mockup */}
                        <div className="my-auto py-1 flex flex-col gap-2 relative">
                          <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-2 relative overflow-hidden">
                            {/* Shimmer laser highlight */}
                            <motion.div
                              className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                              animate={{ left: ["-30%", "130%"] }}
                              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                            />
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span className="text-[10px] font-mono font-bold text-[#F5E6B3]">STORE & LANDING</span>
                              </div>
                              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[8px] font-mono text-emerald-300 font-semibold">
                                <span>#1 NO GOOGLE</span>
                              </div>
                            </div>

                            {/* Layout Skeleton Lines */}
                            <div className="flex items-center gap-2 pt-0.5">
                              <div className="flex-1 h-1.5 rounded-full bg-white/15" />
                              <div className="w-10 h-1.5 rounded-full bg-[#D4AF37]/40" />
                            </div>

                            {/* E-commerce conversion pill */}
                            <div className="flex items-center justify-between pt-1">
                              <div className="flex items-center gap-1 text-[8px] font-mono text-white/60">
                                <ShoppingBag className="w-3 h-3 text-[#D4AF37]" />
                                <span>E-COMMERCE</span>
                              </div>
                              <motion.div 
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                                className="px-2 py-0.5 rounded bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[8px] font-bold text-[#100103] shadow-sm tracking-wider"
                              >
                                CONVERSÃO
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom HUD: Google SEO Indexing status */}
                        <div className="flex items-center justify-between text-[9px] font-mono text-white/60 border-t border-white/10 pt-2 z-10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[#F5E6B3] font-semibold">POSICIONAMENTO GOOGLE</span>
                          </div>
                          <span className="text-white/40">100% RESPONSIVO</span>
                        </div>
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
