import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-zarq overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/Portfolio/Hero.webp')] bg-cover bg-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zarq/80 to-black/70" /> 

      {/* Header Minimalista Fixo */}
      <header className="absolute top-0 left-0 w-full z-30 pt-8 pb-4">
        <div className="container mx-auto px-6 md:px-12 flex justify-center md:justify-start max-w-7xl">
          <img 
            src="/logo-topo.png" 
            alt="Logo Zarq Planejados" 
            className="h-28 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </header>

      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center md:text-left max-w-7xl pt-20">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 tracking-tight">
          O Ambiente dos Seus Sonhos, <br className="hidden md:block" />
          <span className="text-gold-500">Feito Sob Medida para o Seu Estilo de Vida.</span>
        </h1>
        
        <p className="font-inter text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed font-light">
          A Zarq Planejados une design sofisticado e execução milimétrica para a sua casa. Com mais de 400 projetos entregues, garantimos pontualidade absoluta e uma montagem livre de dores de cabeça para clientes exigentes.
        </p>

        <a 
          href="https://wa.me/5551996707757" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center justify-center gap-3 w-full md:w-fit bg-gold-500 hover:bg-gold-600 text-zarq-dark font-semibold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300 mx-auto md:mx-0"
        >
          Falar com um Especialista
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}