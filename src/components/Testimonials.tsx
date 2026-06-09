import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marcelo",
    text: "Excelente profissional já fizemos rack, painel, cristaleira e 3 banheiros com eles entrega na prazo material de altíssima qualidade e perfeito acabamento. Agora estamos indo para o próximo projeto com eles quarto, parabéns pelo profissionalismo"
  },
  {
    name: "Claudio",
    text: "Excelente trabalho, fizemos cozinha e quarto em 2 etapas, entrega sempre antes do prazo e exatamente como pedimos, obrigado William e toda equipe"
  },
  {
    name: "Josiane da Costa",
    text: "Sem palavras para agradecer o atendimento que tivemos, desde o primeiro dia, entre o orçamento e a montagem dos móveis. Em tempo recorde tudo dentro de 1 mês e meio. Era um sonho de 30 anos de casados, que foi realizado pela projetar móveis. Desde o ajudante até o proprietário William que nos atenderam com maior carinho, educação. A equipe inteira da marmoraria também os meninos da equipe dele nossa fantásticos todos. Sou muito agradecida!!"
  },
  {
    name: "Caroline Bernardo",
    text: "Fiz minha cozinha, sala, dois banheiros e a cozinha da minha mãe. Ótimos profissionais com ênfase no atendimento do William que está sempre à disposição, com muita educação e profissionalismo. Material de qualidade e acabamento impecável, ficou perfeito, a realização de um sonho 🥰"
  },
  {
    name: "Gislaine R.",
    text: "O William é um profissional diferenciado! Já fizemos alguns móveis com a Zarq e a experiência, em todas as ocasiões, foi ótima. Ele não apenas entrega um trabalho de qualidade, como também oferece um atendimento personalizado. Sempre nos auxiliou com muito carinho e atenção. Recomendamos, com certeza ;)"
  },
  {
    name: "Thaina C.",
    text: "Atendimento incrível, cumprem o que prometem e entregam no prazo. Os móveis ficaram impecáveis, acabamento perfeito e de ótima qualidade. Super recomendo a Zarq Planejados🙏"
  },
  {
    name: "Micael F.",
    text: "Fizemos o serviço com a Zarq e estamos muito felizes com o resultado! O William ajudou muito na adaptação do projeto da arquiteta para a marcenaria, foi super solícito e disposto a ajudar. Assim como os montadores que se esforçaram bastante pra deixar o mais bonito possível! Obrigado!"
  }
];

const DESKTOP_PER_PAGE = 3;
const desktopPages = Math.ceil(testimonials.length / DESKTOP_PER_PAGE);

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-zarq-dark/80 border border-zarq/50 rounded-xl p-6 md:p-8 flex flex-col h-full">
      <Stars />
      <p className="font-inter text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-1">
        "{text}"
      </p>
      <span className="font-playfair text-gold-500 text-base md:text-lg font-semibold">
        — {name}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const desktopRef = useRef<HTMLDivElement>(null);

  const mobileNext = useCallback(() => {
    setMobileIndex(prev => (prev + 1) % testimonials.length);
  }, []);

  const mobilePrev = useCallback(() => {
    setMobileIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(mobileNext, 7000);
    return () => clearInterval(interval);
  }, [mobileNext]);

  const scrollDesktop = (direction: 'prev' | 'next') => {
    if (!desktopRef.current) return;
    const container = desktopRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;
    const scrollAmount = cardWidth * DESKTOP_PER_PAGE;
    const target = direction === 'next'
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: target, behavior: 'smooth' });

    const newIndex = direction === 'next'
      ? Math.min(desktopIndex + 1, desktopPages - 1)
      : Math.max(desktopIndex - 1, 0);
    setDesktopIndex(newIndex);
  };

  const scrollToDesktopPage = (page: number) => {
    if (!desktopRef.current) return;
    const container = desktopRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;
    container.scrollTo({ left: cardWidth * DESKTOP_PER_PAGE * page, behavior: 'smooth' });
    setDesktopIndex(page);
  };

  return (
    <section className="bg-zarq-dark py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-inter text-sm md:text-base font-semibold tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto opacity-70"></div>
        </div>

        {/* Mobile Carousel (1 card per view) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard name={item.name} text={item.text} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={mobilePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-zarq-dark/80 border border-zarq/50 flex items-center justify-center text-gold-500 hover:bg-zarq-dark transition-colors z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={mobileNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-zarq-dark/80 border border-zarq/50 flex items-center justify-center text-gold-500 hover:bg-zarq-dark transition-colors z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === mobileIndex
                    ? 'bg-gold-500 w-6'
                    : 'bg-zarq-dark/60 hover:bg-zarq-dark'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel (3 cards per view) */}
        <div className="hidden md:block relative">
          <div
            ref={desktopRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[calc(33.333%-16px)] snap-start flex-shrink-0"
              >
                <TestimonialCard name={item.name} text={item.text} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollDesktop('prev')}
            disabled={desktopIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full bg-zarq-dark/90 border border-zarq/50 flex items-center justify-center text-gold-500 hover:bg-zarq-dark transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Depoimentos anteriores"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollDesktop('next')}
            disabled={desktopIndex === desktopPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full bg-zarq-dark/90 border border-zarq/50 flex items-center justify-center text-gold-500 hover:bg-zarq-dark transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Próximos depoimentos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: desktopPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToDesktopPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === desktopIndex
                    ? 'bg-gold-500 w-6'
                    : 'bg-zarq-dark/60 hover:bg-zarq-dark'
                }`}
                aria-label={`Página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
