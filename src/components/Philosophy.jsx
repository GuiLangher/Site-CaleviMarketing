import React from 'react';
import { 
  Compass, 
  Quote, 
  Target, 
  HeartHandshake, 
  Award, 
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function Philosophy({ onOpenBooking }) {
  const pillars = [
    {
      num: "01",
      title: "Estratégia com Propósito",
      description: "Cada ação precisa ter uma intenção. Planejamos a comunicação de forma estratégica, alinhando criatividade aos objetivos e às necessidades concretas de cada negócio.",
      icon: Target,
    },
    {
      num: "02",
      title: "Criatividade que Conecta",
      description: "Buscamos novas perspectivas e soluções que valorizam a essência de cada marca, despertam interesse genuíno e criam conexões duradouras com as pessoas.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Compromisso com Resultados",
      description: "Trabalhamos com objetivos claros e decisões conscientes, transformando esforços de comunicação em autoridade e oportunidades reais de crescimento comercial.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Parceria e Proximidade",
      description: "Relações transparentes, escuta ativa e colaboração profunda. Conhecer a fundo cada cliente é o alicerce para desenvolver soluções personalizadas.",
      icon: HeartHandshake,
    },
    {
      num: "05",
      title: "Excelência em Cada Detalhe",
      description: "A qualidade está presente em todo o processo: do diagnóstico inicial à criação artística, da execução técnica ao relacionamento contínuo.",
      icon: Award,
    },
    {
      num: "06",
      title: "Evolução Constante",
      description: "Em constante aprendizado e exploração das transformações da comunicação contemporânea, garantindo soluções atuais, sofisticadas e relevantes.",
      icon: Compass,
    },
  ];

  return (
    <section id="sobre-nos" className="relative py-28 sm:py-36 overflow-hidden">
      <div id="manifesto" className="absolute -top-24 pointer-events-none" />
      {/* Background with organic wave forms, fully color-matched to brand red, wine and black */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Brand Velvet Gradient Base */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #6B0D14 0%, #360203 35%, #2A0408 65%, #100103 100%)',
            opacity: 0.85,
          }}
        />

        {/* The Exact Same Organic Wave Forms, Converted 100% into Monochrome Multiply so it absorbs only brand red/wine */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1080&q=60&fm=webp')`,
            filter: 'grayscale(1) contrast(1.6) brightness(0.75)',
            mixBlendMode: 'multiply',
            opacity: 0.85,
            transform: 'translateZ(0)',
          }}
        />

        {/* Smooth Vignette Top & Bottom to blend seamlessly with adjacent sections */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #100103 0%, transparent 18%, transparent 82%, #100103 100%)',
            transform: 'translateZ(0)',
          }}
        />
        
        {/* Ambient Crimson Glow - GPU Radial Gradients */}
        <div 
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(107, 13, 20, 0.3) 0%, transparent 70%)',
            transform: 'translateZ(0)',
          }}
        />
        <div 
          className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(109, 88, 0, 0.15) 0%, transparent 70%)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Sobre Nós Headline Block */}
        <div className="max-w-5xl mb-24 sm:mb-32">
          {/* Label */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-8">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            Sobre Nós
          </div>

          {/* Statement 1: Common / Neutral */}
          <div className="mb-8 pl-4 border-l-2 border-white/15">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              A maioria foca em:
            </span>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-white/50 font-normal leading-snug">
              Métricas de vaidade superficiais, postagens no piloto automático e fórmulas genéricas que apenas aumentam o barulho no feed.
            </p>
          </div>

          {/* Statement 2: Differential / Massive Serif Italic in Gold */}
          <div className="pl-4 border-l-2 border-[#D4AF37] pt-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-3">
              Nós focamos em:
            </span>
            <h2 className="font-serif italic text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] text-white tracking-tight">
              Estratégia com propósito, <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.3)]">
                criatividade que conecta
              </span>{' '}
              e resultados perenes.
            </h2>
          </div>
        </div>

        {/* The Founders' Story: Two Sisters, Two Expertises, One Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center mb-28 sm:mb-36 pt-10 border-t border-white/10">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="px-3 py-1 rounded-full bg-[#2A0408] border border-[#D4AF37]/30 text-[#F5E6B3] font-mono text-[11px] uppercase tracking-wider mb-4">
              A Origem da Calevi
            </div>
            
            <h3 className="text-[clamp(1.9rem,4vw,3.2rem)] font-serif font-bold text-white leading-tight mb-6">
              A união de duas irmãs, duas trajetórias e <span className="italic font-normal text-gold-gradient">uma visão singular.</span>
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-white/80 font-light leading-relaxed">
              <p>
                A Calevi nasceu da união de duas irmãs com vivências complementares que se transformaram em potência: de um lado, <strong className="text-white font-medium">mais de 8 anos de experiência em Jornalismo</strong>, dominando a arte de investigar, apurar a verdade, criar narrativas consistentes e dar relevância à palavra.
              </p>
              <p>
                Do outro, <strong className="text-white font-medium">mais de 5 anos de experiência em Marketing e Comunicação</strong>, orquestrando posicionamento de mercado, estratégias digitais, gestão de marcas e visão de crescimento.
              </p>
              <p>
                Duas expertises que se fundem em um propósito único: construir marcas fortes, humanas, relevantes e preparadas para ir além. Atuamos da concepção à execução, honrando o que torna cada negócio insubstituível.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-white/10 w-full font-mono text-xs text-white/60">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#F5E6B3]">8+</span>
                <span>Anos de Jornalismo</span>
              </div>
              <div className="w-[1px] h-8 bg-white/15" />
              <div>
                <span className="block font-serif text-2xl font-bold text-[#F5E6B3]">5+</span>
                <span>Anos de Marketing</span>
              </div>
              <div className="w-[1px] h-8 bg-white/15" />
              <div>
                <span className="block font-serif text-2xl font-bold text-[#F5E6B3]">100%</span>
                <span>Integração Estratégica</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=70&fm=webp"
                alt="Sinergia entre estratégia, jornalismo e marketing"
                width="720"
                height="450"
                loading="lazy"
                decoding="async"
                className="w-full h-[450px] sm:h-[500px] object-cover filter brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-700"
                style={{ aspectRatio: '16 / 10' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100103] via-[#2A0408]/40 to-transparent" />
              
              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#100103]/85 backdrop-blur-xl border border-[#D4AF37]/30 shadow-2xl">
                <Quote className="w-5 h-5 text-[#D4AF37] mb-2" />
                <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                  &ldquo;Acreditamos que boas ideias merecem estratégia, marcas precisam de identidade genuína e uma comunicação bem construída abre novos caminhos.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#F5E6B3]/80">
                  <span>FUNDADORAS DA CALEVI</span>
                  <span>JORNALISMO & MARKETING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Value Propositions (Propostas de Valor) in Asymmetric Negative-Space Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">
                Princípios Norteadores
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
                Nossos 6 Pilares de Valor
              </h3>
            </div>
            <p className="text-sm font-mono text-white/50 mt-2 sm:mt-0">
              PADRÃO DE QUALIDADE // NENHUM DETALHE AO ACASO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                onClick={onOpenBooking}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenBooking?.()}
                className="glass-card rounded-3xl p-7 border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {pillar.num}
                    </span>
                    <pillar.icon className="w-5 h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-[#F5E6B3] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-white/40 group-hover:text-[#D4AF37] transition-colors">
                  <span>MÉTODO CALEVI</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
