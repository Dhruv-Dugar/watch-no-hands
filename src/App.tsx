import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Carousel from './components/Carousel';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-void text-brand-platinum font-sans selection:bg-brand-gold selection:text-brand-void">
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Carousel />
        <ApplicationForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
