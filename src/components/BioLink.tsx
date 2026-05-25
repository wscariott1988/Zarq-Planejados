export default function BioLink() {
  return (
    <div className="min-h-screen bg-zarq flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Logo Oficial Centralizada */}
        <img 
          src="/logo-bio.png" 
          alt="Logo Zarq Planejados" 
          className="h-[22rem] md:h-96 w-auto mx-auto mb-6 object-contain"
        />

        {/* Descrição */}
        <p className="font-inter text-gray-300 text-sm md:text-base font-light mb-12 max-w-[280px]">
          Sofisticação, exclusividade e pontualidade.
        </p>

        {/* Botões (Links) */}
        <div className="w-full flex flex-col gap-4">
          
          {/* Botão 1 - Destaque (WhatsApp) */}
          <a 
            href="https://wa.me/5551996707757?text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20no%20instagram%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold-500 hover:bg-gold-600 text-zarq-dark font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            {/* Ícone customizado do WhatsApp */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Falar com um Especialista
          </a>

          {/* Botão 2 - Secundário (Landing Page) */}
          <a 
            href="/"
            className="flex items-center justify-center w-full bg-transparent border-2 border-gold-500 hover:bg-gold-500 hover:text-zarq-dark text-white font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300"
          >
            Visitar o Nosso Site
          </a>

        </div>
      </div>
    </div>
  );
}