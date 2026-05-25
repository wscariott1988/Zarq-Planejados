const portfolioItems = [
  {
    id: 1,
    type: 'video',
    vimeoUrl: 'https://player.vimeo.com/video/1195343802?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1',
    alt: 'Projeto Exclusivo em Vídeo 1',
    colSpan: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 2,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (1).webp',
    alt: 'Projeto Exclusivo Zarq 1',
    colSpan: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 3,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (2).webp',
    alt: 'Projeto Exclusivo Zarq 2',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 4,
    type: 'video',
    vimeoUrl: 'https://player.vimeo.com/video/1195343801?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1',
    alt: 'Projeto Exclusivo em Vídeo 2',
    colSpan: 'col-span-1 md:col-span-1 row-span-2'
  },
  {
    id: 5,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (3).webp',
    alt: 'Projeto Exclusivo Zarq 3',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
  {
    id: 6,
    type: 'image',
    imgUrl: '/Portfolio/Portfolio (4).webp',
    alt: 'Projeto Exclusivo Zarq 4',
    colSpan: 'col-span-1 md:col-span-1 row-span-1'
  },
];

export default function Portfolio() {
  return (
    <section className="bg-zarq-dark py-24 md:py-32 border-t border-zarq">
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
            >
              {item.type === 'video' ? (
                <iframe 
                  src={item.vimeoUrl} 
                  className="absolute inset-0 w-full h-full object-cover scale-[1.3] md:scale-[1.1] pointer-events-none" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={item.imgUrl} 
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              )}
              
              {item.type === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-xl">
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