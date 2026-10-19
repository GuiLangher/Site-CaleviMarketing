import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MessageCircle, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose, initialPlan = null }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const [formData, setFormData] = useState(() => ({
    name: '',
    brand: '',
    whatsapp: '',
    challenge: initialPlan || 'Projeto Essencial',
  }));

  const [prevPlan, setPrevPlan] = useState(initialPlan);
  if (initialPlan !== prevPlan) {
    setPrevPlan(initialPlan);
    setFormData((prev) => ({ ...prev, challenge: initialPlan || 'Projeto Essencial' }));
  }

  // Fechar dropdown ao clicar fora ou pressionar Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsSelectOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  const buildWhatsAppUrl = () => {
    const message = `Olá! Meu nome é *${formData.name.trim()}*, da marca/empresa *${formData.brand.trim()}*.\n\n` +
      `Acabei de solicitar o *Diagnóstico Estratégico* pelo site da Calevi.\n\n` +
      `*Foco Prioritário:* ${formData.challenge}`;

    return `https://wa.me/5547988174431?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSelectOpen(false);
    onClose();
  };

  const projectOptions = [
    'Projeto Essencial',
    'Projeto Crescimento',
    'Projeto Parceria',
    'Projeto Customizado',
  ];

  const serviceOptions = [
    'Estratégia e posicionamento',
    'Conteúdo e redes sociais',
    'Design e campanhas',
    'Performance e crescimento',
    'Comunicação e imprensa',
    'Criação de site',
    'Comunicação Completa Integrada',
  ];


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#090102]/85 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={handleReset}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl rounded-3xl sm:rounded-4xl bg-gradient-to-b from-[#2A0408] via-[#1A0205] to-[#100103] border border-[#D4AF37]/40 p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.2)] z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header with Emblem */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/calevi-logo-square-sm.png"
                alt="Logo Calevi"
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
                className="h-9 w-9 object-contain"
                style={{ aspectRatio: '1 / 1' }}
              />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#100103] border border-[#D4AF37]/30 text-[#F5E6B3] text-[10px] font-semibold uppercase tracking-wider w-fit">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                Sessão Estratégica Sem Custo
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Solicitar Diagnóstico de Marca
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
              Analise a maturidade da sua comunicação com as sócias da Calevi. Entenda o que falta para sua marca ter autoridade e escala.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Sofia Vasconcelos"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Nome da Marca / Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Lumina Studios"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    WhatsApp Comercial
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Custom Select - Foco Prioritário */}
              <div className="relative" ref={selectRef}>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Projeto ou Foco Prioritário</span>
                  <span className="text-[10px] text-white/40 tracking-normal font-normal">
                    Selecione uma opção
                  </span>
                </label>

                {/* Hidden input for form data */}
                <input type="hidden" name="challenge" value={formData.challenge} />

                {/* Custom Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsSelectOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isSelectOpen}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-left flex items-center justify-between transition-all duration-200 outline-none cursor-pointer ${
                    isSelectOpen
                      ? 'border-[#D4AF37]/60 bg-white/[0.07] ring-1 ring-[#D4AF37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                      : 'border-white/10 hover:border-white/25 bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="text-white text-sm font-medium truncate">
                      {formData.challenge}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                      isSelectOpen ? 'rotate-180 text-[#D4AF37]' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Animated Custom Options List */}
                <AnimatePresence>
                  {isSelectOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.99 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-2xl bg-[#140205]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.06)] overflow-hidden"
                      role="listbox"
                    >
                      <div className="space-y-1 max-h-60 sm:max-h-72 overflow-y-auto pr-1">
                        {/* Section: Modelos de Projeto */}
                        <div className="px-3 pt-1.5 pb-1 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                          Modelos de Projeto
                        </div>
                        {projectOptions.map((c) => {
                          const isSelected = formData.challenge === c;
                          return (
                            <button
                              key={c}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, challenge: c }));
                                setIsSelectOpen(false);
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between gap-3 transition-colors duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-white/[0.08] text-white'
                                  : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                              }`}
                            >
                              <span className={`text-sm tracking-wide ${isSelected ? 'font-semibold text-white' : 'font-normal'}`}>
                                {c}
                              </span>

                              {isSelected && (
                                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                              )}
                            </button>
                          );
                        })}

                        {/* Section: Áreas & Demandas */}
                        <div className="px-3 pt-2.5 pb-1 text-[10px] font-bold text-white/40 uppercase tracking-wider border-t border-white/5 mt-1.5">
                          Áreas & Demandas Específicas
                        </div>
                        {serviceOptions.map((c) => {
                          const isSelected = formData.challenge === c;
                          return (
                            <button
                              key={c}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, challenge: c }));
                                setIsSelectOpen(false);
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between gap-3 transition-colors duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-white/[0.08] text-white'
                                  : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                              }`}
                            >
                              <span className={`text-sm tracking-wide ${isSelected ? 'font-semibold text-white' : 'font-normal'}`}>
                                {c}
                              </span>

                              {isSelected && (
                                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#6D5800] via-[#D4AF37] to-[#B38E22] text-[#100103] font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#D4AF37]/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirmar e Agendar Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-white/50 mt-3 flex items-center justify-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Suas informações são tratadas sob estrito sigilo corporativo.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6D5800] to-[#D4AF37] flex items-center justify-center text-[#100103] mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mb-2">
              Solicitação Recebida com Sucesso
            </span>
            <h3 className="text-3xl font-serif font-bold text-white mb-3">
              Diagnóstico Inicial Registrado
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-md mb-8">
              Obrigado, <strong className="text-white">{formData.name}</strong>. Nosso comitê executivo de comunicação já está analisando o contexto de <strong className="text-white">{formData.brand}</strong>. Entraremos em contato via WhatsApp nas próximas horas.
            </p>

            <div className="w-full max-w-sm space-y-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Agora</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-3 px-6 rounded-full glass-pill text-xs font-semibold text-white/70 hover:text-white uppercase tracking-wider transition-all"
              >
                Retornar ao Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
