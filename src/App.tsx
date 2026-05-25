import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Differential from './components/Differential';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Payment from './components/Payment';
import Footer from './components/Footer';
import BioLink from './components/BioLink';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useEffect } from 'react';

function App() {
  const path = window.location.pathname;

  // Lógica para injetar Metadados dinamicamente com base na rota
  useEffect(() => {
    let city = "";
    if (path === '/viamao' || path === '/viamao/') city = " em Viamão";
    if (path === '/canoas' || path === '/canoas/') city = " em Canoas";

    const title = `Zarq Planejados | Móveis Planejados de Alto Padrão${city}`;
    const description = `Móveis Planejados de Alto Padrão${city}. Entregues no Prazo e com Montagem Impecável. Projetos exclusivos para transformar sua casa.`;
    
    // Atualiza o Título da Aba
    document.title = title;

    // Função auxiliar para atualizar as meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('content', content);
    };

    // Atualiza Meta Tags SEO
    updateMetaTag('meta[name="title"]', title);
    updateMetaTag('meta[name="description"]', description);

    // Atualiza Open Graph (Facebook/WhatsApp)
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:url"]', `https://zarq-planejados.vercel.app${path}`);

    // Atualiza Twitter
    updateMetaTag('meta[property="twitter:title"]', title);
    updateMetaTag('meta[property="twitter:description"]', description);
    updateMetaTag('meta[property="twitter:url"]', `https://zarq-planejados.vercel.app${path}`);
  }, [path]);

  // Roteamento nativo simples e rápido
  if (path === '/links' || path === '/bio') {
    return <BioLink />;
  }

  return (
    <main className="min-h-screen bg-zarq-dark relative">
      <Hero />
      <TrustBar />
      <Differential />
      <Portfolio />
      <Process />
      <Payment />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;