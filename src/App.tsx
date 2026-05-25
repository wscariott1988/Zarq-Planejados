import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Differential from './components/Differential';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Payment from './components/Payment';
import Footer from './components/Footer';
import BioLink from './components/BioLink';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  // Roteamento nativo simples e rápido (Frictionless / High Performance)
  if (window.location.pathname === '/links' || window.location.pathname === '/bio') {
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