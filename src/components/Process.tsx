import { MessageSquareText, MonitorPlay, Factory, Hammer } from 'lucide-react';

const steps = [
  {
    icon: MessageSquareText,
    title: "Alinhamento",
    description: "Entendemos sua necessidade e estilo de vida para um projeto 100% personalizado."
  },
  {
    icon: MonitorPlay,
    title: "Projeto Exclusivo",
    description: "Apresentação da solução com imagens hiper-realistas para aprovação total."
  },
  {
    icon: Factory,
    title: "Produção Industrial",
    description: "Seu móvel fabricado com precisão milimétrica e prazo de entrega garantido em contrato."
  },
  {
    icon: Hammer,
    title: "Montagem Impecável",
    description: "Instalação limpa, detalhista e sem dores de cabeça, feita por nossa equipe interna."
  }
];

export default function Process() {
  return (
    <section className="bg-zarq py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-gold-500 font-inter text-sm md:text-base font-semibold tracking-widest uppercase mb-4 block">
            O Processo Zarq
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            Passo a Passo para Reduzir a Ansiedade
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto text-lg">
            Da primeira reunião ao último parafuso, estruturamos uma jornada previsível e segura para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Linha conectora (visível apenas no desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-zarq-dark border border-zarq/50 flex items-center justify-center mb-8 relative z-10 group-hover:border-gold-500/50 transition-colors duration-500 shadow-xl">
                <span className="absolute -top-3 -right-2 text-5xl font-playfair font-bold text-zarq/60 z-0">
                  {index + 1}
                </span>
                <step.icon className="w-10 h-10 text-gold-500 relative z-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-playfair text-xl md:text-2xl text-white font-bold mb-4">
                {step.title}
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}