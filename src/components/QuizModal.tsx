import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function openQuizModal(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  window.dispatchEvent(new Event('openQuizModal'));
}

export default function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    ambiente: '',
    projeto: '',
    fase: '',
    valoriza: '',
    nome: ''
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
      setAnswers({ ambiente: '', projeto: '', fase: '', valoriza: '', nome: '' });
    };
    window.addEventListener('openQuizModal', handleOpen);
    return () => window.removeEventListener('openQuizModal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleOptionClick = (field: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 300);
  };

  const handleFinalSubmit = () => {
    if (!answers.nome.trim()) return;
    
    const message = `Olá, me chamo *${answers.nome.trim()}*. Gostaria de um orçamento de projetos sob medida para *${answers.ambiente}*. *${answers.projeto}*, minha obra está na fase: *${answers.fase}* e para mim o mais importante é ter *${answers.valoriza}*.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551996707757?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  const progress = step * 20;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-zarq-dark border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden z-10">
        
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-800">
          <div 
            className="h-full bg-gold-500 transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-6 text-center">
                Qual ambiente você deseja transformar?
              </h2>
              <div className="flex flex-col gap-3">
                {['Cozinha', 'Dormitório', 'Sala', 'Banheiro', 'Casa Completa', 'Outros'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleOptionClick('ambiente', opt)}
                    className="w-full py-3 px-6 bg-zarq hover:bg-gold-500 hover:text-zarq-dark border border-gray-700 hover:border-gold-500 text-gray-200 rounded-lg transition-all duration-300 text-left font-inter"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-6 text-center">
                Você já possui um projeto de arquitetura?
              </h2>
              <div className="flex flex-col gap-3">
                {['Sim, já tenho o projeto pronto.', 'Não, preciso de ajuda com o projeto.'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleOptionClick('projeto', opt)}
                    className="w-full py-4 px-6 bg-zarq hover:bg-gold-500 hover:text-zarq-dark border border-gray-700 hover:border-gold-500 text-gray-200 rounded-lg transition-all duration-300 text-left font-inter"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-6 text-center">
                Em que fase está a sua obra ou planejamento?
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  'Obra na reta final (Urgente)', 
                  'Planejando para os próximos 30 a 60 dias', 
                  'Projeto a médio prazo (3 a 6 meses)', 
                  'Imóvel na planta.'
                ].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleOptionClick('fase', opt)}
                    className="w-full py-4 px-6 bg-zarq hover:bg-gold-500 hover:text-zarq-dark border border-gray-700 hover:border-gold-500 text-gray-200 rounded-lg transition-all duration-300 text-left font-inter"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-6 text-center">
                O que você mais valoriza ao fechar seus móveis?
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  'Entrega rigorosamente no prazo', 
                  'Acabamento e montagem impecável', 
                  'Design e materiais de alto padrão.'
                ].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleOptionClick('valoriza', opt)}
                    className="w-full py-4 px-6 bg-zarq hover:bg-gold-500 hover:text-zarq-dark border border-gray-700 hover:border-gold-500 text-gray-200 rounded-lg transition-all duration-300 text-left font-inter"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-6 text-center">
                Como o nosso especialista deve te chamar?
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <input 
                  type="text" 
                  placeholder="Digite seu nome..." 
                  required
                  value={answers.nome}
                  onChange={(e) => setAnswers(prev => ({ ...prev, nome: e.target.value }))}
                  className="w-full bg-zarq border border-gray-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 rounded-lg px-6 py-4 text-white placeholder-gray-500 outline-none transition-all font-inter text-lg"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && answers.nome.trim()) {
                      handleFinalSubmit();
                    }
                  }}
                />
                
                <button 
                  onClick={handleFinalSubmit}
                  disabled={!answers.nome.trim()}
                  className="w-full flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 disabled:bg-gray-700 disabled:text-gray-500 text-zarq-dark font-bold uppercase tracking-wider py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:shadow-none"
                >
                  📲 Solicitar Orçamento no WhatsApp
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
