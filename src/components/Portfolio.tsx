import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { openQuizModal } from './QuizModal';

const portfolioItems = [
  {
    id: 1,
    type: 'video',
    vimeoUrl: 'https://player.vimeo.com/video/1195343802',
    imgUrl: '/Portfolio/Portfolio (2).webp',
    alt: 'Projeto Exclusivo em Vídeo 1',
    colSpan: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 2,
    type: 'image',
    imgUrl: '/Portfolio/cabeceira-opt.webp',
    alt: 'Cabeceira Exclusiva Zarq',
    colSpan: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 3,
    type: 'image',
    imgUrl: '/Portfolio/penteadeira-opt.webp',
    alt: 'Penteadeira Sob Medida',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 4,
    type: 'video',
    vimeoUrl: 'https://player.vimeo.com/video/1195343801',
    imgUrl: '/Portfolio/Portfolio (3).webp',
    alt: 'Projeto Exclusivo em Vídeo 2',
    colSpan: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 5,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (4).webp',
    alt: 'Projeto Exclusivo Zarq 3',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 6,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (2).webp',
    alt: 'Projeto Exclusivo Zarq 4',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="bg-zarq py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-gold-500 font-inter text-sm md:text-base font-semibold tracking-widest uppercase mb-4 block">
                A Vitrine
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
                Projetos Reais para <br className="hidden md:block"/>
                <span className="text-gray-300">Clientes Exigentes</span>
              </h2>
            </div>
            <p className="font-inter text-gray-400 max-w-md">
              Mais do que imagens bonitas, entregamos ambientes reais que transformam o dia a dia das famílias.
            </p>
          </div>

          {/* Grid estilo Masonry/Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className={`relative group overflow-hidden bg-zarq rounded-xl cursor-pointer ${item.colSpan}`}
                onClick={() => item.type === 'video' && item.vimeoUrl ? setActiveVideo(item.vimeoUrl) : null}
              >
                <img 
                  src={item.imgUrl} 
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {item.type === 'video' && (
                  <>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-500/90 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-zarq-dark ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#"
              onClick={openQuizModal}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border-2 border-gold-500 hover:bg-gold-500 hover:text-zarq-dark text-gold-500 font-bold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300"
            >
              Quero um Projeto Com Esse Padrão
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4">
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="w-full max-w-[400px] aspect-[9/16] relative rounded-xl overflow-hidden bg-black shadow-2xl">
            <iframe 
              src={`${activeVideo}?autoplay=1&muted=0&loop=1`} 
              className="absolute inset-0 w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}