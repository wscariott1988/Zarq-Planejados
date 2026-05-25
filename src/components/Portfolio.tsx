import { Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    type: 'image',
    imgUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Cozinha Planejada de Alto Padrão',
    colSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    type: 'video',
    imgUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop',
    title: 'Depoimento: Família Silva',
    alt: 'Vídeo Depoimento Cliente',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 3,
    type: 'image',
    imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
    alt: 'Closet Casal',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 4,
    type: 'image',
    imgUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop',
    alt: 'Home Theater',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 5,
    type: 'video',
    imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    title: 'Depoimento: Casal Oliveira',
    alt: 'Vídeo Depoimento Cliente',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
];

export default function Portfolio() {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-inter text-sm md:text-base font-semibold tracking-widest uppercase mb-4 block">
              A Vitrine
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
              Projetos Reais para <br className="hidden md:block"/>
              <span className="text-zinc-400">Clientes Exigentes</span>
            </h2>
          </div>
          <p className="font-inter text-gray-400 max-w-md">
            Mais do que imagens bonitas, entregamos ambientes reais que transformam o dia a dia das famílias.
          </p>
        </div>

        {/* Grid estilo Masonry/Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden bg-zinc-900 rounded-sm cursor-pointer ${item.colSpan}`}
            >
              <img 
                src={item.imgUrl} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {item.type === 'video' ? (
                <>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/90 flex items-center justify-center mb-3 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-zinc-950 ml-1" fill="currentColor" />
                    </div>
                    <span className="text-white font-inter font-medium tracking-wide text-sm bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                      {item.title}
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-inter font-medium tracking-wide">
                    {item.alt}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}