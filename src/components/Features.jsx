import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Activity, 
  TrendingUp,
  Cpu,
  Clock
} from 'lucide-react';

// ----------------------------------------------------------------------------
// 1. Diagnostic Shuffler Subcomponent (Isolate re-renders & pause when offscreen)
// ----------------------------------------------------------------------------
function DiagnosticShuffler({ inView }) {
  const [shufflerIndex, setShufflerIndex] = useState(0);

  const shufflerCards = [
    {
      id: 0,
      title: "Clareza de Posicionamento",
      pill: "ESSÊNCIA DA MARCA",
      score: "98.4%",
      metricLabel: "Índice de Diferenciação",
      details: "Alinhamento narrativo e eliminação de discursos genéricos no mercado.",
      icon: Layers,
    },
    {
      id: 1,
      title: "Narrativa e Autoridade",
      pill: "ORIGEM JORNALÍSTICA",
      score: "+148%",
      metricLabel: "Atenção do Público",
      details: "Comunicação com profundidade factual que aproxima a marca das pessoas certas.",
      icon: Activity,
    },
    {
      id: 2,
      title: "Atração e Resultados",
      pill: "CRESCIMENTO REAL",
      score: "3.9x",
      metricLabel: "Retorno de Investimento",
      details: "Anúncios conscientes transformando atenção em oportunidades reais de negócios.",
      icon: TrendingUp,
    },
  ];

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setShufflerIndex((prev) => (prev + 1) % shufflerCards.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [inView, shufflerCards.length]);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/10 group hover:border-[#D4AF37]/30 transition-all duration-500 min-h-[460px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="font-mono text-xs text-white/70 uppercase tracking-widest">
            Diagnóstico Contínuo
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#F5E6B3] px-2 py-0.5 rounded bg-white/5 border border-white/10">
          VISÃO INTEGRADA
        </span>
      </div>

      {/* Shuffling Card Stack Container */}
      <div className="relative h-64 my-auto flex items-center justify-center">
        {shufflerCards.map((card, idx) => {
          const order = (idx - shufflerIndex + shufflerCards.length) % shufflerCards.length;
          const yOffset = order * 18;
          const scale = 1 - order * 0.07;
          const opacity = 1 - order * 0.28;
          const zIndex = 30 - order * 10;

          return (
            <motion.div
              key={card.id}
              animate={{
                y: yOffset,
                scale: scale,
                opacity: opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.8,
              }}
              style={{ zIndex }}
              className="absolute inset-x-2 top-0 rounded-2xl bg-gradient-to-b from-[#2A0408] to-[#160205] border border-white/15 p-5 shadow-2xl backdrop-blur-md will-change-transform"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#F5E6B3] border border-[#D4AF37]/30">
                  {card.pill}
                </span>
                <card.icon className="w-4 h-4 text-[#D4AF37]" />
              </div>

              <h3 className="font-serif font-bold text-lg text-white mb-2">
                {card.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-gold-gradient font-serif">
                  {card.score}
                </span>
                <span className="text-[11px] font-mono text-white/60 uppercase">
                  {card.metricLabel}
                </span>
              </div>

              <p className="text-xs text-white/70 line-clamp-2 font-light">
                {card.details}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom telemetry footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span>ACOMPANHAMENTO: PERIÓDICO</span>
        <span className="text-[#D4AF37]">3 PILARES ESSENCIAIS</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// 2. Telemetry Typewriter Subcomponent (Only ticks when inView)
// ----------------------------------------------------------------------------
const TYPEWRITER_MESSAGES = [
  "MAPEANDO A ESSÊNCIA ÚNICA DA MARCA...",
  "CONECTANDO HISTÓRIAS REAIS ÀS NECESSIDADES DO MERCADO.",
  "REFINANDO NARRATIVAS COM RIGOR EDITORIAL E INTENÇÃO.",
  "ENGAJAMENTO GENUÍNO ATIVADO. CRESCIMENTO SUSTENTÁVEL CONFIRMADO.",
  "CRIATIVIDADE QUE NÃO APENAS CHAMA ATENÇÃO: CONVERTE.",
];

function TelemetryTypewriter({ inView }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let timeout;
    const fullMessage = TYPEWRITER_MESSAGES[currentMessageIndex];

    if (!isDeleting) {
      if (displayedText.length < fullMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullMessage.slice(0, displayedText.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullMessage.slice(0, displayedText.length - 1));
        }, 25);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % TYPEWRITER_MESSAGES.length);
        }, 50);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex, inView]);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/10 group hover:border-[#D4AF37]/30 transition-all duration-500 min-h-[460px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-mono text-xs text-white/70 uppercase tracking-widest">
            Comunicação com Propósito
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          EM TEMPO REAL
        </div>
      </div>

      {/* Terminal Body */}
      <div className="my-auto py-4 flex flex-col justify-center">
        <div className="rounded-2xl bg-[#090102]/90 border border-white/10 p-5 font-mono text-xs relative overflow-hidden shadow-inner">
          <div className="flex items-center gap-1.5 mb-4 opacity-50">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] text-white/40">Comunicação Estratégica // Calevi</span>
          </div>

          <div className="space-y-2 text-white/70">
            <div className="text-[11px] text-white/40">
              // CRIATIVIDADE QUE CONECTA COM INTENÇÃO
            </div>
            <div className="text-white/60 text-[11px]">
              [OBJETIVO]: NARRATIVA CONSOLIDADA
            </div>
            
            <div className="pt-2 text-[#F5E6B3] font-medium leading-relaxed min-h-[72px]">
              <span className="text-[#D4AF37] font-bold mr-2">&gt;</span>
              {displayedText}
              <span className="inline-block w-2 h-4 bg-[#D4AF37] ml-1 animate-pulse align-middle" />
            </div>
          </div>
        </div>

        <div className="mt-4 px-3 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[11px] font-mono text-white/60">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
            Conexão com o público:
          </span>
          <span className="text-[#D4AF37] font-bold">GENUÍNA E REAL</span>
        </div>
      </div>

      {/* Bottom telemetry footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span>PROCESSO: HUMANIZADO</span>
        <span className="text-[#D4AF37]">CRIATIVIDADE COM FOCO</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// 3. Protocol Scheduler Subcomponent (Only ticks when inView)
// ----------------------------------------------------------------------------
function ProtocolScheduler({ inView }) {
  const [scheduleState, setScheduleState] = useState(0); 

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setScheduleState((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/10 group hover:border-[#D4AF37]/30 transition-all duration-500 min-h-[460px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-mono text-xs text-white/70 uppercase tracking-widest">
            Agenda e Planejamento
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#F5E6B3] px-2 py-0.5 rounded bg-white/5 border border-white/10">
          ALINHAMENTOS SEMANAIS
        </span>
      </div>

      {/* Weekly Interactive Grid with animated cursor */}
      <div className="relative my-auto py-2">
        <div className="grid grid-cols-5 gap-2 text-center mb-3">
          {['SEG', 'TER', 'QUA', 'QUI', 'SEX'].map((day) => (
            <div key={day} className="font-mono text-[10px] text-white/50 tracking-wider">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2 text-center">
          {[
            { day: '14', active: false },
            { day: '15', active: false },
            { day: '16', active: false },
            { day: '17', target: true },
            { day: '18', active: false },
          ].map((item, idx) => {
            const isSelected = item.target && scheduleState >= 1;
            return (
              <div
                key={idx}
                className={`h-20 rounded-xl p-1.5 flex flex-col justify-between transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#6A0D14]/80 to-[#2A0408] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                    : 'bg-white/5 border-white/10 opacity-70'
                }`}
              >
                <span className="text-xs font-mono font-semibold text-white/80">
                  {item.day}
                </span>

                {item.target ? (
                  <span className="text-[9px] font-mono leading-tight px-1 py-0.5 rounded bg-[#D4AF37]/20 text-[#F5E6B3] border border-[#D4AF37]/40">
                    {scheduleState >= 3 ? "CONFIRMADO" : "REUNIÃO"}
                  </span>
                ) : (
                  <span className="text-[9px] font-mono text-white/30">LIVRE</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button inside calendar */}
        <div className="mt-4 pt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[11px] text-white/70">15:00 — Alinhamento de Marca</span>
          </div>
          <div
            className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase transition-all duration-300 flex items-center gap-1 ${
              scheduleState >= 2
                ? 'bg-[#D4AF37] text-[#100103] shadow-[0_0_15px_rgba(212,175,55,0.5)] scale-105'
                : 'bg-white/10 text-white/60'
            }`}
          >
            {scheduleState >= 3 ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-[#100103]" />
                Salvo
              </>
            ) : (
              "Salvar Horário"
            )}
          </div>
        </div>

        {/* Animated SVG Cursor */}
        <motion.div
          animate={{
            x: scheduleState === 0 ? 30 : scheduleState === 1 ? 190 : scheduleState === 2 ? 220 : 220,
            y: scheduleState === 0 ? 10 : scheduleState === 1 ? 40 : scheduleState === 2 ? 110 : 110,
            scale: scheduleState === 1 || scheduleState === 2 ? 0.85 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="absolute top-0 left-0 pointer-events-none z-30 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] will-change-transform"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
              fill="#D4AF37"
              stroke="#100103"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom telemetry footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span>ACOMPANHAMENTO: CONTÍNUO</span>
        <span className="text-[#D4AF37]">ENTREGAS PONTUAIS</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Main Features Component with IntersectionObserver
// ----------------------------------------------------------------------------
export default function Features() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: '100px 0px', threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="diferenciais" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A0408] border border-[#D4AF37]/30 text-[#F5E6B3] font-mono text-[11px] uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Metodologia na Prática
        </div>
        <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-serif font-bold text-white leading-tight">
          Acompanhamento inteligente e <br />
          <span className="italic font-normal text-gold-gradient">
            comunicação com propósito.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/75 font-light leading-relaxed">
          Nossa atuação é contínua e próxima. Unimos diagnóstico profundo, narrativas consistentes e planejamento estruturado para garantir crescimento sustentável.
        </p>
      </div>

      {/* Grid of 3 Artifacts - Isolated and CPU-Friendly */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        <DiagnosticShuffler inView={inView} />
        <TelemetryTypewriter inView={inView} />
        <ProtocolScheduler inView={inView} />
      </div>
    </section>
  );
}
