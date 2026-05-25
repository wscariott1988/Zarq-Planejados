import { CreditCard, ArrowRight } from 'lucide-react';

export default function Payment() {
  return (
    <section className="bg-zarq-dark py-20 md:py-24 border-t border-zarq">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-zarq rounded-sm border border-zarq/50 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="font-playfair text-3xl sm:text-4xl text-white font-bold leading-tight mb-4">
              Seu projeto mais perto de <span className="text-gold-500">se tornar realidade.</span>
            </h2>
            <p className="font-inter text-gray-300 text-lg leading-relaxed font-light mb-8 md:mb-0 max-w-2xl">
              Facilitamos o seu investimento. Aceitamos Cartões de Crédito com condições personalizadas para a grandeza do seu projeto, sem comprometer a sua liquidez.
            </p>
          </div>

          <div className="md:w-2/5 flex flex-col items-center md:items-end w-full">
            <div className="flex gap-4 mb-8 opacity-70">
              {/* Ícones simples representando cartões de crédito/bandeiras */}
              <div className="w-12 h-8 rounded bg-zarq-dark flex items-center justify-center border border-zarq-dark/50">
                <CreditCard className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="w-12 h-8 rounded bg-zarq-dark flex items-center justify-center border border-zarq-dark/50">
                <div className="flex -space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500/80 mix-blend-screen"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500/80 mix-blend-screen"></div>
                </div>
              </div>
              <div className="w-12 h-8 rounded bg-zarq-dark flex items-center justify-center border border-zarq-dark/50 font-inter text-[10px] font-bold text-zinc-400 tracking-wider">
                VISA
              </div>
            </div>

            <a 
              href="https://wa.me/5551996707757" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-zarq-dark font-semibold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300"
            >
              Consultar Condições
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}