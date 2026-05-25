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

    // Injeção de Dados Estruturados (JSON-LD Schema Markup)
    const schemaObj: any = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Zarq Planejados",
      "image": "https://zarq-planejados.vercel.app/logo-topo-opt.png",
      "telephone": "+5551996707757",
      "url": `https://zarq-planejados.vercel.app${path}`,
    };

    if (path === '/viamao' || path === '/viamao/') {
      schemaObj.description = "Móveis Planejados de Alto Padrão em Viamão. Especialistas em projetos e montagem impecável.";
      schemaObj.areaServed = "Viamão";
      schemaObj.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "124"
      };
    } else if (path === '/canoas' || path === '/canoas/') {
      schemaObj.description = "Móveis Planejados de Alto Padrão em Canoas. Especialistas em projetos e montagem impecável.";
      schemaObj.areaServed = "Canoas";
      schemaObj.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "118"
      };
    } else {
      schemaObj.description = "Móveis Planejados de Alto Padrão. Especialistas em projetos e montagem impecável.";
      schemaObj.areaServed = ["Porto Alegre", "Viamão", "Canoas"];
    }

    let scriptTag = document.querySelector('#schema-local-business');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-local-business';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaObj);

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