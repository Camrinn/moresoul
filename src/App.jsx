import ButtonGradient from '../public/ButtonGradient';
import Benefits from './components/benefit';
import Collaboration from './components/Collaboration';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Services from './components/Services';

const App = () => { 
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] 
      overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
