import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Crown } from 'lucide-react';

export default function PricingMembership({ onOpenBooking }) {
  const tiers = [
    {
      id: "essencial",
      name: "Essencial",
      subname: "Posicionamento & Identidade",
      badge: "ESTRUTURAÇÃO DE BASE",
      description: "Para marcas que desejam encontrar sua voz autêntica e construir uma presença sólida e consistente no mercado.",
      isPopular: false,
      icon: ShieldCheck,
      features: [
        "Diagnóstico de Posicionamento de Marca",
        "Manual de Identidade Verbal & Tom de Voz",
        "Planejamento Editorial Estratégico",
        "Criação de Identidade e Peças Gráficas Base",
        "Consultoria Mensal de Alinhamento (2h)",
        "Suporte direto via canal exclusivo",
      ],
      ctaText: "Selecionar Essencial",
      ctaStyle: "glass-pill text-white hover:border-[#D4AF37]/50",
    },
    {
      id: "performance",
      name: "Crescimento Estratégico",
      subname: "Presença Integrada e Expansão",
      badge: "O MAIS PROCURADO",
      description: "A solução completa para marcas que buscam alta relevância visual, tração contínua e conversão em novos negócios.",
      isPopular: true, // Central card that "jumps" visually!
      icon: Zap,
      features: [
        "Tudo incluso no modelo Essencial",
        "Gestão Completa de Redes Sociais (Conteúdo Semanal)",
        "Produção e Direção de Fotos e Vídeos Profissionais",
        "Captação Presencial ou em Estúdio",
        "Gestão Estratégica de Anúncios Pagos (Instagram, Facebook e Google)",
        "Otimização Contínua de Campanhas e Relatórios Semanalmente",
        "Reuniões Quinzenais de Estratégia de Crescimento",
      ],
      ctaText: "Escolher Crescimento",
      ctaStyle: "bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-bold shadow-md shadow-[#D4AF37]/25 hover:shadow-lg hover:shadow-[#D4AF37]/40",
    },
    {
      id: "enterprise",
      name: "Autoridade & Imprensa",
      subname: "Comunicação Institucional e Mídia",
      badge: "EXCLUSIVIDADE & IMPRENSA",
      description: "Operação estratégica dedicada para líderes de mercado, integrando comunicação corporativa e assessoria de imprensa de alto nível.",
      isPopular: false,
      icon: Crown,
      features: [
        "Tudo incluso no modelo Crescimento",
        "Assessoria de Imprensa Dedicada e Contínua",
        "Relacionamento Direto com a Mídia e Artigos de Opinião",
        "Treinamento de Porta-Vozes para Entrevistas",
        "Gestão de Reputação Institucional e Prevenção de Crises",
        "Acompanhamento Direto das Sócias-Fundadoras",
        "Canal Direto com Atendimento Prioritário",
      ],
      ctaText: "Consultar Parceria",
      ctaStyle: "glass-pill text-white hover:border-[#D4AF37]/50",
    },
  ];

  return (
    <section id="modelos" className="relative py-20 sm:py-28 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Background radial glow behind central card - softened */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-[clamp(2.1rem,4.5vw,4rem)] font-serif font-bold text-white leading-tight">
          Investimento com foco em <br />
          <span className="italic font-normal text-gold-gradient">
            retorno e valor percebido.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/75 font-light leading-relaxed">
          Estruturas flexíveis e adaptadas à maturidade de cada empresa. Sem pacotes genéricos: entregas conscientes e personalizadas.
        </p>
      </div>

      {/* 3-Tier Grid with Harmonized and Balanced Card Height */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch pt-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
              tier.isPopular
                ? 'bg-gradient-to-b from-[#220306] via-[#170205] to-[#100103] border border-[#D4AF37]/60 shadow-[0_12px_35px_rgba(0,0,0,0.6)] lg:-translate-y-1.5 z-20'
                : 'glass-card border border-white/10 hover:border-white/20 z-10'
            }`}
          >
            {/* Popular Badge */}
            {tier.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                {tier.badge}
              </div>
            )}

            <div>
              {/* Top tier metadata */}
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider">
                  {!tier.isPopular && tier.badge}
                </span>
                <tier.icon className={`w-4 h-4 ${tier.isPopular ? 'text-[#D4AF37]' : 'text-white/50'}`} />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {tier.name}
              </h3>
              <p className="font-mono text-[11px] text-white/60 uppercase tracking-wider mt-0.5 mb-2.5">
                {tier.subname}
              </p>

              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-4">
                {tier.description}
              </p>

              <div className="h-[1px] bg-white/10 w-full mb-4" />

              {/* Feature list */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                  Entregáveis & Ações:
                </span>
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className={`w-3.5 h-3.5 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                      tier.isPopular ? 'bg-[#D4AF37]/20 text-[#F5E6B3]' : 'bg-white/10 text-white/70'
                    }`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-white/85 font-light leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div>
              <button
                onClick={onOpenBooking}
                className={`w-full py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${tier.ctaStyle}`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-center font-mono text-[9px] text-white/40 mt-2">
                Proposta formalizada após o diagnóstico
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
