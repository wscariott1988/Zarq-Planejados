import { ArrowRight } from 'lucide-react';
import { openQuizModal } from './QuizModal';

export default function Hero() {
  const path = window.location.pathname;
  let city = "";
  if (path === '/viamao' || path === '/viamao/') city = " em Viamão";
  if (path === '/canoas' || path === '/canoas/') city = " em Canoas";

  const headlinePrefix = `Móveis Planejados de Alto Padrão${city}.`;
  const subheadline = `Esqueça os atrasos e a dor de cabeça. Transforme sua casa${city} com projetos exclusivos e viva a experiência de uma montagem limpa e pontual. Há 6 anos, a Zarq Planejados entrega o verdadeiro luxo: o capricho em cada detalhe.`;

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
            src="/logo-topo-opt.png" 
            alt="Logo Zarq Planejados" 
            width="250"
            height="60"
            className="h-24 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </header>

      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center md:text-left max-w-7xl pt-20">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 tracking-tight">
          {headlinePrefix} <br className="hidden md:block" />
          <span className="text-gold-500">Entregues no Prazo e com Montagem Impecável.</span>
        </h1>
        
        <p className="font-inter text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed font-light">
          {subheadline}
        </p>

        <a 
          href="#"
          onClick={openQuizModal}
          className="group flex items-center justify-center gap-3 w-full md:w-fit bg-gold-500 hover:bg-gold-600 text-zarq-dark font-semibold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300 mx-auto md:mx-0"
        >
          Falar com um Especialista
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}