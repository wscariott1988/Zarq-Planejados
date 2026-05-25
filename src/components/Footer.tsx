import { ArrowRight, Phone } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5551996707757";

export default function Footer() {
  return (
    <footer className="bg-black py-16 md:py-24 border-t border-zinc-900 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
        
        {/* Logo Placeholder */}
        <div className="mb-12">
          <span className="font-playfair text-3xl font-bold tracking-wider text-white uppercase">
            Zarq <span className="text-gold-500">Planejados</span>
          </span>
        </div>

        {/* Texto persuasivo antes do CTA */}
        <p className="font-inter text-gray-400 text-lg mb-8 max-w-lg">
          Dê o primeiro passo para ter a casa dos seus sonhos com a tranquilidade de uma montagem perfeita.
        </p>

        {/* Final CTA */}
        <div className="mb-16 w-full max-w-md">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-gold-500 hover:bg-gold-600 text-zinc-950 font-bold uppercase tracking-wider py-5 px-8 rounded-sm transition-all duration-300"
          >
            Solicitar Meu Projeto Exclusivo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact Info (Isolamento de Funil: apenas um contato centralizado e claro) */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <p className="font-inter text-gray-500 text-sm uppercase tracking-widest">
            Atendimento Exclusivo
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-white hover:text-gold-500 transition-colors"
          >
            <Phone className="w-5 h-5 text-gold-500" />
            <span className="font-inter text-xl md:text-2xl tracking-wider font-medium">(51) 99670-7757</span>
          </a>
        </div>

        {/* Copyright / Legal */}
        <div className="w-full pt-8 border-t border-zinc-900 flex justify-center items-center">
          <p className="font-inter text-zinc-600 text-xs text-center">
            &copy; {new Date().getFullYear()} Zarq Móveis Planejados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}