import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Differential from './components/Differential';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-zarq-dark">
      <Hero />
      <TrustBar />
      <Differential />
      <Portfolio />
      <Process />
      <Payment />
      <Footer />
    </main>
  );
}

export default App;